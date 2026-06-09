'use client'

// Client hook that pulls the live match feed from `/api/matches` (API-Football
// upstream + admin custom matches) and exposes it in the UI match shape, split
// into the buckets the public pages render: live / today / tomorrow / week.

import { useEffect, useState } from 'react'
import type { Match as ApiMatch } from '@/lib/domain-types'
import type { Match as UiMatch } from '@/lib/types'
import { apiMatchToUi } from '@/lib/match-adapter'

export interface UseMatchesResult {
  all: UiMatch[]
  live: UiMatch[]
  today: UiMatch[]
  tomorrow: UiMatch[]
  week: UiMatch[]
  loading: boolean
  error: string | null
  /** 'mixed' | 'odds-api' — provenance reported by the API route. */
  source?: string
}

interface ApiPayload {
  matches: ApiMatch[]
  source?: string
  reason?: string
}

/** Local-midnight day index, so "today"/"tomorrow" follow the viewer's clock. */
function dayIndex(iso: string | undefined): number | null {
  if (!iso) return null
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return null
  return Math.floor((t - new Date().getTimezoneOffset() * -60_000) / 86_400_000)
}

export function useMatches(sport = 'football'): UseMatchesResult {
  const [state, setState] = useState<UseMatchesResult>({
    all: [],
    live: [],
    today: [],
    tomorrow: [],
    week: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    const tzOffset = new Date().getTimezoneOffset()

    async function load() {
      try {
        const res = await fetch(
          `/api/matches?sport=${encodeURIComponent(sport)}&tzOffset=${tzOffset}`,
        )
        if (!res.ok) throw new Error(`feed responded ${res.status}`)
        const data = (await res.json()) as ApiPayload
        if (cancelled) return

        const all = (data.matches ?? []).map(apiMatchToUi)

        // Bucket pre-match games by local day relative to now.
        const nowDay = Math.floor(
          (Date.now() - tzOffset * 60_000) / 86_400_000,
        )
        const apiById = new Map((data.matches ?? []).map((m) => [m.id, m]))
        const live: UiMatch[] = []
        const today: UiMatch[] = []
        const tomorrow: UiMatch[] = []
        const week: UiMatch[] = []
        for (const m of all) {
          if (m.live) {
            live.push(m)
            continue
          }
          const d = dayIndex(apiById.get(m.id)?.startTimeISO)
          if (d === null || d <= nowDay) today.push(m)
          else if (d === nowDay + 1) tomorrow.push(m)
          else week.push(m)
        }

        setState({
          all,
          live,
          today,
          tomorrow,
          week,
          loading: false,
          error: null,
          source: data.source,
        })
      } catch (err) {
        if (cancelled) return
        setState((s) => ({
          ...s,
          loading: false,
          error: err instanceof Error ? err.message : 'failed to load matches',
        }))
      }
    }

    load()
    // Refresh on the same cadence as the route's revalidate window so live
    // minutes/scores stay current without hammering the upstream quota.
    const timer = setInterval(load, 30_000)
    return () => {
      cancelled = true
      clearInterval(timer)
    }
  }, [sport])

  return state
}
