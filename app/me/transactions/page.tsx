'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Loader2,
  ArrowDownLeft,
  ArrowUpRight,
  Receipt,
  Trophy,
  XCircle,
} from 'lucide-react'
import { MobileNav } from '@/components/mobile-nav'
import { getUserId } from '@/lib/user-session'
import { formatMoney } from '@/lib/format-money'

type TransactionKind =
  | 'deposit'
  | 'withdrawal'
  | 'bet-placed'
  | 'bet-won'
  | 'bet-lost'

interface TransactionItem {
  id: string
  kind: TransactionKind
  amount: number
  status: 'pending' | 'success' | 'failed' | 'cancelled'
  createdAt: string
  reference?: string
  description: string
  meta?: Record<string, unknown>
}

interface ApiResponse {
  user: {
    id: string
    name: string
    balance: number
    totalDeposited: number
    totalWithdrawn: number
  }
  transactions: TransactionItem[]
}

type Filter = 'all' | 'deposits' | 'withdrawals' | 'bets'

export default function TransactionsPage() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<Filter>('all')

  const load = useCallback(async () => {
    const userId = getUserId()
    if (!userId) {
      setError('You need to sign in to view your transactions.')
      setLoading(false)
      return
    }
    try {
      const res = await fetch(`/api/users/${userId}/transactions`, { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = (await res.json()) as ApiResponse
      setData(json)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const filtered = (data?.transactions ?? []).filter((t) => {
    if (filter === 'all') return true
    if (filter === 'deposits') return t.kind === 'deposit'
    if (filter === 'withdrawals') return t.kind === 'withdrawal'
    return t.kind === 'bet-placed' || t.kind === 'bet-won' || t.kind === 'bet-lost'
  })

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 xl:pb-0 max-w-lg mx-auto w-full">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-3 sm:px-4 h-14 flex items-center gap-3">
          <Link
            href="/me"
            aria-label="Back"
            className="p-2 -ml-2 rounded-md hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-bold text-lg flex-1 truncate">Transaction History</h1>
        </div>
      </header>

      {loading ? (
        <div className="flex items-center justify-center py-16 text-muted-foreground">
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Loading…
        </div>
      ) : error ? (
        <div className="m-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
          {error}
        </div>
      ) : (
        <>
          {data && (
            <section className="px-3 sm:px-4 pt-4">
              <div className="rounded-xl bg-card border border-border p-4 grid grid-cols-3 gap-3 text-center">
                <Summary label="Balance" value={`GHS ${formatMoney(data.user.balance)}`} />
                <Summary
                  label="Deposited"
                  value={`GHS ${formatMoney(data.user.totalDeposited)}`}
                />
                <Summary
                  label="Withdrawn"
                  value={`GHS ${formatMoney(data.user.totalWithdrawn)}`}
                />
              </div>
            </section>
          )}

          <div className="px-3 sm:px-4 pt-4 flex gap-1.5 overflow-x-auto scrollbar-hide">
            {(['all', 'deposits', 'withdrawals', 'bets'] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap capitalize transition-colors ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <main className="flex-1 px-3 sm:px-4 pt-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <Receipt className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="text-sm">No transactions yet.</p>
                <p className="text-xs mt-1">Deposits, withdrawals, and bets will show up here.</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {filtered.map((t) => (
                  <TransactionRow key={t.id} tx={t} />
                ))}
              </ul>
            )}
          </main>
        </>
      )}

      <MobileNav selectedBets={[]} activeTab="me" />
    </div>
  )
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold truncate">
        {label}
      </p>
      <p className="text-sm font-bold tabular-nums mt-0.5 truncate">{value}</p>
    </div>
  )
}

function TransactionRow({ tx }: { tx: TransactionItem }) {
  const isCredit = tx.amount > 0
  const isZero = tx.amount === 0
  const sign = isZero ? '' : isCredit ? '+' : ''
  const amountColor = isZero
    ? 'text-muted-foreground'
    : isCredit
      ? 'text-success'
      : 'text-destructive'

  const icon = (() => {
    switch (tx.kind) {
      case 'deposit':
        return <ArrowDownLeft className="w-4 h-4 text-success" />
      case 'withdrawal':
        return <ArrowUpRight className="w-4 h-4 text-amber-500" />
      case 'bet-placed':
        return <Receipt className="w-4 h-4 text-muted-foreground" />
      case 'bet-won':
        return <Trophy className="w-4 h-4 text-success" />
      case 'bet-lost':
        return <XCircle className="w-4 h-4 text-destructive" />
    }
  })()

  const statusBadge =
    tx.status === 'pending'
      ? 'bg-amber-500/15 text-amber-500 border-amber-500/30'
      : tx.status === 'failed' || tx.status === 'cancelled'
        ? 'bg-destructive/15 text-destructive border-destructive/30'
        : null

  return (
    <li className="bg-card border border-border rounded-xl p-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium text-sm truncate">{tx.description}</p>
        <p className="text-[11px] text-muted-foreground truncate flex items-center gap-1.5">
          <span>{new Date(tx.createdAt).toLocaleString()}</span>
          {tx.reference && (
            <span className="font-mono opacity-70">· {tx.reference.slice(0, 16)}</span>
          )}
          {statusBadge && (
            <span
              className={`px-1.5 py-0.5 rounded-full border text-[9px] uppercase font-bold ${statusBadge}`}
            >
              {tx.status}
            </span>
          )}
        </p>
      </div>
      <div className="text-right shrink-0">
        <p className={`font-bold tabular-nums ${amountColor}`}>
          {isZero ? '—' : `${sign}${formatMoney(tx.amount)}`}
        </p>
        <p className="text-[10px] text-muted-foreground">GHS</p>
      </div>
    </li>
  )
}
