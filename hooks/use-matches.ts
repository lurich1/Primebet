'use client'

import { useCallback, useEffect, useState } from 'react'
import type { Match } from '@/lib/types'

interface MatchesResponse {
  source: 'odds-api' | 'mock' | 'mixed' | 'mixed-mock'
  reason?: string
  matches: Match[]
}

interface UseMatchesResult {
  matches: Match[]
  liveMatches: Match[]
  upcomingMatches: Match[]
  loading: boolean
  error: string | null
  source: 'odds-api' | 'mock' | 'mixed' | 'mixed-mock' | null
  reason: string | null
  refresh: () => void
}

export function useMatches(
  sport: string = 'football',
  options: { todayOnly?: boolean } = {},
): UseMatchesResult {
  const { todayOnly = false } = options
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<'odds-api' | 'mock' | 'mixed' | 'mixed-mock' | null>(null)
  const [reason, setReason] = useState<string | null>(null)

  const load = useCallback(
    async (signal?: AbortSignal) => {
      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams({ sport })
        if (todayOnly) {
          params.set('today', '1')
          params.set('tzOffset', String(new Date().getTimezoneOffset()))
        }
        const res = await fetch(`/api/matches?${params.toString()}`, {
          signal,
          cache: 'no-store',
        })
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        const data: MatchesResponse = await res.json()
        setMatches(data.matches)
        setSource(data.source)
        setReason(data.reason ?? null)
      } catch (e) {
        if ((e as Error).name === 'AbortError') return
        setError(e instanceof Error ? e.message : String(e))
      } finally {
        setLoading(false)
      }
    },
    [sport, todayOnly],
  )

  useEffect(() => {
    const ctrl = new AbortController()
    void load(ctrl.signal)
    return () => ctrl.abort()
  }, [load])

  const refresh = useCallback(() => {
    void load()
  }, [load])

  const liveMatches = matches.filter((m) => m.isLive)
  const upcomingMatches = matches.filter((m) => !m.isLive)

  return {
    matches,
    liveMatches,
    upcomingMatches,
    loading,
    error,
    source,
    reason,
    refresh,
  }
}
