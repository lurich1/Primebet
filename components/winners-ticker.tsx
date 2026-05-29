'use client'

import { useEffect, useState } from 'react'
import { Trophy } from 'lucide-react'
import { formatMoney } from '@/lib/format-money'

interface Winner {
  masked: string
  amount: number
  currency?: string
  settledAt: string
  code: string
}

interface ApiResponse {
  winners: Winner[]
}

/**
 * Marquee-style ticker of recent biggest winners (Sportybet-style banner).
 * Renders nothing if the API returns no winners — avoids a dead strip on a
 * fresh install with no bet history.
 */
export function WinnersTicker() {
  const [winners, setWinners] = useState<Winner[]>([])

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch('/api/winners', { cache: 'no-store' })
        if (!res.ok) return
        const data = (await res.json()) as ApiResponse
        if (!cancelled) setWinners(data.winners ?? [])
      } catch {
        /* ignore — ticker is best-effort */
      }
    }
    void load()
    const t = setInterval(load, 60_000)
    return () => {
      cancelled = true
      clearInterval(t)
    }
  }, [])

  if (winners.length === 0) return null

  // Duplicate the list so the CSS marquee animation can loop seamlessly.
  const loop = [...winners, ...winners]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-success/10 via-card to-primary/10 border border-border rounded-xl">
      <div className="absolute left-0 top-0 bottom-0 px-3 flex items-center gap-1.5 bg-gradient-to-r from-success/80 to-success text-white font-bold text-xs uppercase tracking-wide z-10 shrink-0">
        <Trophy className="w-3.5 h-3.5" />
        <span>Recent Winners</span>
      </div>
      <div className="pl-[150px] py-2.5 flex">
        <div className="flex gap-8 winners-marquee whitespace-nowrap">
          {loop.map((w, i) => (
            <span key={`${w.code}-${i}`} className="flex items-center gap-2 text-sm">
              <span className="font-mono text-muted-foreground">{w.masked}</span>
              <span className="text-muted-foreground">Won</span>
              <span className="font-bold text-success tabular-nums">
                {w.currency ?? 'GHS'} {formatMoney(w.amount, w.currency)}
              </span>
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .winners-marquee {
          animation: scroll-winners 40s linear infinite;
        }
        @keyframes scroll-winners {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
