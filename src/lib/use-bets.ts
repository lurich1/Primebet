'use client'

// Loads the signed-in user's placed bets from /api/bets?userId= and exposes
// them in the UI Bet shape. Drives my-bets and bet-history.

import { useEffect, useState } from 'react'
import type { PlacedBet } from '@/lib/domain-types'
import type { Bet } from '@/lib/types'
import { getUserId } from '@/lib/user-session'
import { placedBetToUi } from '@/lib/bets-adapter'

export interface UseBetsResult {
  bets: Bet[]
  loading: boolean
  loggedIn: boolean
  error: string | null
}

export function useBets(): UseBetsResult {
  const [state, setState] = useState<UseBetsResult>({
    bets: [],
    loading: true,
    loggedIn: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false
    const userId = getUserId()
    if (!userId) {
      setState({ bets: [], loading: false, loggedIn: false, error: null })
      return
    }

    async function load() {
      try {
        const res = await fetch(`/api/bets?userId=${encodeURIComponent(userId!)}`)
        if (!res.ok) throw new Error(`feed responded ${res.status}`)
        const data = (await res.json()) as { bets?: PlacedBet[] }
        if (cancelled) return
        // Newest first.
        const bets = (data.bets ?? [])
          .slice()
          .sort((a, b) => (b.placedAt ?? '').localeCompare(a.placedAt ?? ''))
          .map(placedBetToUi)
        setState({ bets, loading: false, loggedIn: true, error: null })
      } catch (err) {
        if (cancelled) return
        setState({
          bets: [],
          loading: false,
          loggedIn: true,
          error: err instanceof Error ? err.message : 'failed to load bets',
        })
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return state
}
