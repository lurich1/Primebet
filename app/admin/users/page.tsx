'use client'

import { useEffect, useMemo, useState } from 'react'
import { Search, Loader2, ShieldCheck, ShieldOff, CircleAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formatMoney } from '@/lib/format-money'

interface AdminUserRow {
  id: string
  name: string
  email: string
  verificationStep: 0 | 1 | 2
  withdrawalApproved: boolean
  balance: number
  totalDeposited: number
  totalWithdrawn: number
  firstDepositAt: string | null
  createdAt: string
}

type Filter = 'all' | 'awaiting' | 'approved' | 'unverified'

export default function AdminWithdrawalsPage() {
  const [users, setUsers] = useState<AdminUserRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<Filter>('awaiting')
  const [search, setSearch] = useState('')
  const [busy, setBusy] = useState<Set<string>>(new Set())

  const load = async () => {
    setError(null)
    try {
      const res = await fetch('/api/admin/users', { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as { users: AdminUserRow[] }
      setUsers(data.users)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void load()
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return users.filter((u) => {
      if (filter === 'awaiting') {
        if (!(u.verificationStep === 2 && !u.withdrawalApproved)) return false
      } else if (filter === 'approved') {
        if (!u.withdrawalApproved) return false
      } else if (filter === 'unverified') {
        if (u.verificationStep === 2) return false
      }
      if (q) {
        if (
          !u.name.toLowerCase().includes(q) &&
          !u.email.toLowerCase().includes(q) &&
          !u.id.toLowerCase().includes(q)
        )
          return false
      }
      return true
    })
  }, [users, filter, search])

  const counts = useMemo(
    () => ({
      all: users.length,
      awaiting: users.filter(
        (u) => u.verificationStep === 2 && !u.withdrawalApproved,
      ).length,
      approved: users.filter((u) => u.withdrawalApproved).length,
      unverified: users.filter((u) => u.verificationStep < 2).length,
    }),
    [users],
  )

  const toggleApproval = async (userId: string, next: boolean) => {
    setBusy((p) => new Set(p).add(userId))
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ withdrawalApproved: next }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, withdrawalApproved: next } : u,
        ),
      )
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setBusy((p) => {
        const n = new Set(p)
        n.delete(userId)
        return n
      })
    }
  }

  return (
    <div className="p-4 sm:p-6 space-y-5 max-w-5xl">
      <div>
        <h1 className="text-2xl font-bold">Withdrawals</h1>
        <p className="text-sm text-muted-foreground">
          A player can only withdraw after they've completed verification
          (paid both 200 GHS deposits) <em>and</em> you've toggled approval
          here. Use the filters to find players awaiting your decision.
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-xs text-destructive flex items-center gap-2">
          <CircleAlert className="w-4 h-4" /> {error}
        </div>
      )}

      <div className="flex flex-wrap gap-2 items-center">
        <FilterPill
          active={filter === 'awaiting'}
          onClick={() => setFilter('awaiting')}
          label={`Awaiting approval (${counts.awaiting})`}
        />
        <FilterPill
          active={filter === 'approved'}
          onClick={() => setFilter('approved')}
          label={`Approved (${counts.approved})`}
        />
        <FilterPill
          active={filter === 'unverified'}
          onClick={() => setFilter('unverified')}
          label={`Unverified (${counts.unverified})`}
        />
        <FilterPill
          active={filter === 'all'}
          onClick={() => setFilter('all')}
          label={`All (${counts.all})`}
        />

        <div className="ml-auto relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search name, email, ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9 text-sm"
          />
        </div>
      </div>

      <section className="bg-card border border-border rounded-xl overflow-hidden">
        {loading ? (
          <div className="px-4 py-10 text-center text-muted-foreground flex items-center justify-center gap-2 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading players…
          </div>
        ) : filtered.length === 0 ? (
          <div className="px-4 py-10 text-center text-muted-foreground text-sm">
            No players match this filter.
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((u) => (
              <li
                key={u.id}
                className="px-4 py-3 flex items-center justify-between gap-3"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-sm truncate">
                      {u.name}
                    </span>
                    <StepBadge step={u.verificationStep} />
                    {u.withdrawalApproved && (
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border border-success/30 text-success bg-success/10">
                        Approved
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {u.email}
                  </p>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-3 mt-1 tabular-nums">
                    <span>Balance: GHS {formatMoney(u.balance)}</span>
                    <span>·</span>
                    <span>Deposited: GHS {formatMoney(u.totalDeposited)}</span>
                    <span>·</span>
                    <span>Withdrawn: GHS {formatMoney(u.totalWithdrawn)}</span>
                  </p>
                </div>
                <div className="shrink-0">
                  {u.verificationStep < 2 ? (
                    <span
                      className="text-[11px] text-muted-foreground"
                      title="Player hasn't completed both 200 GHS verification deposits yet."
                    >
                      Awaiting verification
                    </span>
                  ) : u.withdrawalApproved ? (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleApproval(u.id, false)}
                      disabled={busy.has(u.id)}
                      className="h-8 text-xs border-destructive/40 text-destructive hover:bg-destructive/10"
                    >
                      {busy.has(u.id) ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <>
                          <ShieldOff className="w-3 h-3 mr-1" />
                          Revoke
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => toggleApproval(u.id, true)}
                      disabled={busy.has(u.id)}
                      className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {busy.has(u.id) ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <>
                          <ShieldCheck className="w-3 h-3 mr-1" />
                          Approve
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-foreground hover:bg-secondary/80'
      }`}
    >
      {label}
    </button>
  )
}

function StepBadge({ step }: { step: 0 | 1 | 2 }) {
  const label = step === 0 ? '0/2' : step === 1 ? '1/2' : '2/2'
  const cls =
    step === 2
      ? 'border-success/30 text-success bg-success/10'
      : step === 1
        ? 'border-amber-500/40 text-amber-500 bg-amber-500/10'
        : 'border-border text-muted-foreground'
  return (
    <span
      className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border ${cls}`}
      title="Verification deposits paid"
    >
      {label}
    </span>
  )
}
