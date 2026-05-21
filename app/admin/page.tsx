'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Receipt,
  Activity,
  TrendingUp,
  TrendingDown,
  Loader2,
  ArrowRight,
} from 'lucide-react'

interface StatsResponse {
  counts: { total: number; open: number; won: number; lost: number }
  money: {
    totalStake: number
    openStake: number
    settledStake: number
    totalReturns: number
    netPL: number
  }
  winRate: number
  byDay: { date: string; count: number; stake: number }[]
  topLeagues: { league: string; picks: number }[]
  recent: {
    id: string
    code: string
    placedAt: string
    settledAt?: string
    status: 'pending' | 'won' | 'lost'
    stake: number
    totalOdds: number
    potentialWin: number
    payout?: number
    selectionCount: number
    firstMatch: string
  }[]
}

export default function AdminOverviewPage() {
  const [stats, setStats] = useState<StatsResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch('/api/admin/stats', { cache: 'no-store' })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = (await res.json()) as StatsResponse
        if (!cancelled) setStats(data)
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e))
      }
    }
    void load()
    const t = setInterval(load, 15_000)
    return () => {
      cancelled = true
      clearInterval(t)
    }
  }, [])

  if (error) {
    return (
      <div className="p-6">
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          Failed to load stats: {error}
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="p-6 flex items-center text-muted-foreground">
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
        Loading stats…
      </div>
    )
  }

  const maxDayCount = Math.max(1, ...stats.byDay.map((d) => d.count))

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-sm text-muted-foreground">
          Live stats from <code className="font-mono text-xs">data/bets.json</code>. Refreshes every 15s.
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Kpi label="Total bets" value={stats.counts.total.toString()} />
        <Kpi
          label="Open"
          value={stats.counts.open.toString()}
          sub={`${stats.money.openStake.toFixed(2)} at stake`}
        />
        <Kpi
          label="Win rate"
          value={`${stats.winRate}%`}
          sub={`${stats.counts.won}W / ${stats.counts.lost}L`}
        />
        <Kpi
          label="Net P&L"
          value={(stats.money.netPL >= 0 ? '+' : '') + stats.money.netPL.toFixed(2)}
          tone={
            stats.money.netPL > 0 ? 'good' : stats.money.netPL < 0 ? 'bad' : 'neutral'
          }
          icon={
            stats.money.netPL > 0 ? (
              <TrendingUp className="w-4 h-4 text-success" />
            ) : stats.money.netPL < 0 ? (
              <TrendingDown className="w-4 h-4 text-destructive" />
            ) : (
              <Activity className="w-4 h-4 text-muted-foreground" />
            )
          }
        />
        <Kpi label="Total staked" value={stats.money.totalStake.toFixed(2)} />
        <Kpi label="Total returns" value={stats.money.totalReturns.toFixed(2)} tone="good" />
        <Kpi label="Settled" value={(stats.counts.won + stats.counts.lost).toString()} />
        <Kpi label="Won bets" value={stats.counts.won.toString()} tone="good" />
      </div>

      {/* Chart + Top leagues */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Bets — last 7 days</h2>
            <span className="text-xs text-muted-foreground">
              Total: {stats.byDay.reduce((s, d) => s + d.count, 0)}
            </span>
          </div>
          <div className="flex items-end gap-2 h-40">
            {stats.byDay.map((d) => {
              const heightPct = (d.count / maxDayCount) * 100
              const label = new Date(d.date + 'T00:00:00Z').toLocaleDateString(undefined, {
                weekday: 'short',
              })
              return (
                <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
                  <div className="flex-1 w-full flex items-end">
                    <div
                      className={`w-full rounded-t ${
                        d.count > 0 ? 'bg-primary' : 'bg-secondary'
                      }`}
                      style={{ height: `${Math.max(heightPct, 4)}%` }}
                      title={`${d.date}: ${d.count} bets, ${d.stake.toFixed(2)} staked`}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">{label}</span>
                  <span className="text-xs font-bold tabular-nums">{d.count}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <h2 className="font-semibold mb-4">Top picks by league</h2>
          {stats.topLeagues.length === 0 ? (
            <p className="text-xs text-muted-foreground">No bets yet.</p>
          ) : (
            <ul className="space-y-2">
              {stats.topLeagues.map((l) => (
                <li
                  key={l.league}
                  className="flex items-center justify-between text-sm gap-2"
                >
                  <span className="truncate text-foreground">{l.league}</span>
                  <span className="font-bold tabular-nums shrink-0">{l.picks}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-card border border-border rounded-xl">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Receipt className="w-4 h-4 text-primary" />
            <h2 className="font-semibold">Recent activity</h2>
          </div>
          <Link
            href="/admin/bets"
            className="text-xs text-primary hover:underline flex items-center gap-1"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        {stats.recent.length === 0 ? (
          <p className="text-sm text-muted-foreground p-4 text-center">
            No bets yet. Place one on the home page to see it here.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {stats.recent.map((b) => (
              <li key={b.id} className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <span
                      className={`px-2 py-0.5 rounded-full border font-bold uppercase ${
                        b.status === 'won'
                          ? 'bg-success/15 text-success border-success/30'
                          : b.status === 'lost'
                            ? 'bg-destructive/15 text-destructive border-destructive/30'
                            : 'bg-muted text-muted-foreground border-border'
                      }`}
                    >
                      {b.status}
                    </span>
                    <span className="font-mono tracking-wider text-primary">{b.code}</span>
                    <span>·</span>
                    <span>
                      {new Date(b.placedAt).toLocaleString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <p className="text-sm font-medium truncate">
                    {b.firstMatch}
                    {b.selectionCount > 1 ? ` (+${b.selectionCount - 1} more)` : ''}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold tabular-nums">{b.stake.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground tabular-nums">
                    @ {b.totalOdds.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function Kpi({
  label,
  value,
  sub,
  tone = 'neutral',
  icon,
}: {
  label: string
  value: string
  sub?: string
  tone?: 'good' | 'bad' | 'neutral'
  icon?: React.ReactNode
}) {
  const color =
    tone === 'good'
      ? 'text-success'
      : tone === 'bad'
        ? 'text-destructive'
        : 'text-foreground'
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">
          {label}
        </p>
        {icon}
      </div>
      <p className={`text-2xl font-bold tabular-nums ${color}`}>{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </div>
  )
}
