'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Match } from '@/lib/types'
import { leagueMeta } from '@/lib/leagues-meta'

interface LeaguesWithUpcomingProps {
  matches: Match[]
  max?: number
}

interface LeagueBucket {
  league: string
  upcoming: number
  live: number
  flag: string
  slug: string | null
}

function findMeta(leagueName: string) {
  const lower = leagueName.toLowerCase()
  return leagueMeta.find((m) =>
    m.matchFilters.some((f) => lower.includes(f.toLowerCase())),
  )
}

export function LeaguesWithUpcoming({ matches, max = 8 }: LeaguesWithUpcomingProps) {
  const buckets = new Map<string, LeagueBucket>()
  for (const m of matches) {
    const meta = findMeta(m.league)
    const key = meta?.name ?? m.league
    const existing = buckets.get(key)
    if (existing) {
      if (m.isLive) existing.live++
      else existing.upcoming++
    } else {
      buckets.set(key, {
        league: meta?.name ?? m.league,
        upcoming: m.isLive ? 0 : 1,
        live: m.isLive ? 1 : 0,
        flag: meta?.flag ?? '🏆',
        slug: meta?.slug ?? null,
      })
    }
  }

  const items = Array.from(buckets.values())
    .filter((b) => b.upcoming + b.live > 0)
    .sort((a, b) => b.upcoming + b.live - (a.upcoming + a.live))
    .slice(0, max)

  if (items.length === 0) return null

  return (
    <section className="mb-2">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Leagues with upcoming games</h2>
        <Link href="/leagues" className="text-sm text-primary hover:underline flex items-center">
          View all <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {items.map((item) => {
          const inner = (
            <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors min-w-[180px]">
              <span className="text-lg">{item.flag}</span>
              <div className="text-left flex-1">
                <p className="font-medium text-sm whitespace-nowrap">{item.league}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {item.live > 0 && (
                    <>
                      <span className="w-1.5 h-1.5 bg-live rounded-full animate-pulse-live" />
                      <span>{item.live} live</span>
                      <span className="opacity-50">·</span>
                    </>
                  )}
                  <span>{item.upcoming} upcoming</span>
                </p>
              </div>
            </div>
          )
          return item.slug ? (
            <Link key={item.league} href={`/leagues/${item.slug}`} className="block">
              {inner}
            </Link>
          ) : (
            <div key={item.league}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}
