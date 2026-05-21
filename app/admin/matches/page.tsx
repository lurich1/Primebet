'use client'

import { useEffect, useState } from 'react'
import { Loader2, RefreshCcw, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sports } from '@/lib/mock-data'
import type { Match } from '@/lib/types'

interface MatchesResponse {
  source: 'odds-api' | 'mock'
  reason?: string
  matches: Match[]
}

export default function AdminMatchesPage() {
  const [activeSport, setActiveSport] = useState('football')
  const [data, setData] = useState<MatchesResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastFetched, setLastFetched] = useState<Date | null>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/matches?sport=${encodeURIComponent(activeSport)}`, {
        cache: 'no-store',
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = (await res.json()) as MatchesResponse
      setData(json)
      setLastFetched(new Date())
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSport])

  const matches = data?.matches ?? []
  const liveCount = matches.filter((m) => m.isLive).length

  return (
    <div className="p-4 sm:p-6 space-y-4 max-w-6xl">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Matches monitor</h1>
          <p className="text-sm text-muted-foreground">
            Live snapshot of what the /api/matches endpoint returns per sport.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => void load()}
          disabled={loading}
          className="gap-2"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCcw className="w-4 h-4" />
          )}
          Refresh
        </Button>
      </div>

      {/* Sport tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        {sports.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSport(s.id)}
            className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeSport === s.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{s.icon}</span>
            <span>{s.name}</span>
          </button>
        ))}
      </div>

      {/* Source indicator */}
      {data && (
        <div
          className={`p-3 rounded-lg border text-sm flex items-start gap-2 ${
            data.source === 'odds-api'
              ? 'bg-success/10 border-success/20 text-success'
              : 'bg-secondary border-border text-muted-foreground'
          }`}
        >
          {data.source === 'odds-api' ? (
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-semibold">
              Source: <span className="font-mono">{data.source}</span>
              {data.reason ? <span className="font-normal"> · {data.reason}</span> : ''}
            </p>
            <p className="text-xs opacity-80">
              {matches.length} match{matches.length === 1 ? '' : 'es'} · {liveCount} live
              {lastFetched ? ` · fetched ${lastFetched.toLocaleTimeString()}` : ''}
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          {error}
        </div>
      )}

      {/* Match list */}
      {loading && !data ? (
        <div className="flex items-center text-muted-foreground py-12 justify-center">
          <Loader2 className="w-4 h-4 animate-spin mr-2" /> Loading…
        </div>
      ) : matches.length === 0 ? (
        <p className="text-center text-muted-foreground py-12 text-sm">
          No matches returned for {activeSport}.
        </p>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-[60px_1fr_120px_60px_60px_60px] gap-3 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground border-b border-border bg-secondary/40">
            <span>Status</span>
            <span>Match · League</span>
            <span>Time</span>
            <span className="text-right">1</span>
            <span className="text-right">X</span>
            <span className="text-right">2</span>
          </div>
          <ul className="divide-y divide-border">
            {matches.map((m) => (
              <li key={m.id} className="px-4 py-3">
                <div className="md:grid md:grid-cols-[60px_1fr_120px_60px_60px_60px] md:gap-3 md:items-center flex flex-col gap-1">
                  <div className="md:order-1 flex md:flex-col items-start gap-1.5">
                    {m.isLive ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-live">
                        <span className="w-1.5 h-1.5 bg-live rounded-full animate-pulse-live" />
                        LIVE
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase text-muted-foreground">
                        Upcoming
                      </span>
                    )}
                    {m.custom && (
                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border border-primary/40 text-primary bg-primary/10">
                        Custom
                      </span>
                    )}
                  </div>
                  <div className="md:order-2 min-w-0">
                    <p className="font-medium text-sm truncate">
                      {m.homeTeam} <span className="text-muted-foreground">vs</span> {m.awayTeam}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {m.league}
                      {m.country ? ` · ${m.country}` : ''}
                    </p>
                  </div>
                  <div className="md:order-3 text-xs text-muted-foreground tabular-nums">
                    {m.isLive ? m.minute : m.startTime ?? '—'}
                  </div>
                  <div className="md:order-4 md:text-right text-xs tabular-nums">
                    <span className="md:hidden text-muted-foreground mr-1">1:</span>
                    <span className="font-semibold">{m.odds.home.toFixed(2)}</span>
                  </div>
                  <div className="md:order-5 md:text-right text-xs tabular-nums">
                    <span className="md:hidden text-muted-foreground mr-1">X:</span>
                    <span className="font-semibold">{m.odds.draw.toFixed(2)}</span>
                  </div>
                  <div className="md:order-6 md:text-right text-xs tabular-nums">
                    <span className="md:hidden text-muted-foreground mr-1">2:</span>
                    <span className="font-semibold">{m.odds.away.toFixed(2)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
