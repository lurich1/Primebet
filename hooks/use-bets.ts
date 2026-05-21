'use client'

import { useCallback, useEffect, useState } from 'react'
import type { BetSelection, PlacedBet } from '@/lib/types'

export type { PlacedBet }

export function useBets() {
  const [bets, setBets] = useState<PlacedBet[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/bets', { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as { bets: PlacedBet[] }
      setBets(data.bets)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }, [])

  const placeBet = useCallback(
    async (selections: BetSelection[], stake: number): Promise<PlacedBet | null> => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/bets', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ selections, stake }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
        const bet = data.bet as PlacedBet
        setBets((prev) => [bet, ...prev])
        return bet
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e))
        return null
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  const settleBet = useCallback(
    async (id: string, status: 'won' | 'lost' | 'pending'): Promise<PlacedBet | null> => {
      setError(null)
      try {
        const res = await fetch(`/api/bets/${id}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ status }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`)
        const updated = data.bet as PlacedBet
        setBets((prev) => prev.map((b) => (b.id === id ? updated : b)))
        return updated
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e))
        return null
      }
    },
    [],
  )

  const lookupCode = useCallback(async (code: string): Promise<PlacedBet | null> => {
    setError(null)
    try {
      const res = await fetch(`/api/bets?code=${encodeURIComponent(code)}`, {
        cache: 'no-store',
      })
      if (res.status === 404) {
        setError('No bet found with that code.')
        return null
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as { bet: PlacedBet }
      return data.bet
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      return null
    }
  }, [])

  const removeBet = useCallback(async (id: string): Promise<boolean> => {
    setError(null)
    try {
      const res = await fetch(`/api/bets/${id}`, { method: 'DELETE' })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? `HTTP ${res.status}`)
      }
      setBets((prev) => prev.filter((b) => b.id !== id))
      return true
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
      return false
    }
  }, [])

  useEffect(() => {
    void refresh()
  }, [refresh])

  return { bets, loading, error, refresh, placeBet, settleBet, removeBet, lookupCode }
}
