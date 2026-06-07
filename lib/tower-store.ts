// Tower Rush round store — all reads/writes go through the service-role
// Supabase client (RLS bypassed), same pattern as bets-store / payments-store.
// Server-only: never import from a client component.

import { supabaseServer } from '@/lib/supabase'
import type { CurrencyCode } from '@/lib/countries'

export interface TowerRound {
  id: string
  userId: string | null
  stake: number
  currency: CurrencyCode
  status: 'active' | 'won' | 'lost'
  currentFloor: number
  crashFloor: number
  coeff: number
  payout: number | null
  serverSeed: string
  serverSeedHash: string
  clientSeed: string
  nonce: number
  placedAt: string
  settledAt: string | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromRow(r: any): TowerRound {
  return {
    id: r.id,
    userId: r.user_id ?? null,
    stake: Number(r.stake),
    currency: r.currency,
    status: r.status,
    currentFloor: Number(r.current_floor),
    crashFloor: Number(r.crash_floor),
    coeff: Number(r.coeff),
    payout: r.payout == null ? null : Number(r.payout),
    serverSeed: r.server_seed,
    serverSeedHash: r.server_seed_hash,
    clientSeed: r.client_seed ?? '',
    nonce: Number(r.nonce ?? 0),
    placedAt: r.placed_at,
    settledAt: r.settled_at ?? null,
  }
}

export async function insertRound(round: TowerRound): Promise<void> {
  const { error } = await supabaseServer()
    .from('tower_rounds')
    .insert({
      id: round.id,
      user_id: round.userId,
      stake: round.stake,
      currency: round.currency,
      status: round.status,
      current_floor: round.currentFloor,
      crash_floor: round.crashFloor,
      coeff: round.coeff,
      payout: round.payout,
      server_seed: round.serverSeed,
      server_seed_hash: round.serverSeedHash,
      client_seed: round.clientSeed,
      nonce: round.nonce,
      placed_at: round.placedAt,
      settled_at: round.settledAt,
    })
  if (error) throw new Error(`insertRound: ${error.message}`)
}

export async function findRoundById(id: string): Promise<TowerRound | null> {
  const { data, error } = await supabaseServer()
    .from('tower_rounds')
    .select('*')
    .eq('id', id)
    .maybeSingle()
  if (error || !data) return null
  return fromRow(data)
}

export async function findActiveRoundForUser(userId: string): Promise<TowerRound | null> {
  const { data, error } = await supabaseServer()
    .from('tower_rounds')
    .select('*')
    .eq('user_id', userId)
    .eq('status', 'active')
    .order('placed_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error || !data) return null
  return fromRow(data)
}

export async function updateRound(
  id: string,
  patch: Partial<Pick<TowerRound, 'status' | 'currentFloor' | 'coeff' | 'payout' | 'settledAt'>>,
): Promise<TowerRound | null> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbPatch: Record<string, any> = {}
  if (patch.status !== undefined) dbPatch.status = patch.status
  if (patch.currentFloor !== undefined) dbPatch.current_floor = patch.currentFloor
  if (patch.coeff !== undefined) dbPatch.coeff = patch.coeff
  if (patch.payout !== undefined) dbPatch.payout = patch.payout
  if (patch.settledAt !== undefined) dbPatch.settled_at = patch.settledAt

  const { data, error } = await supabaseServer()
    .from('tower_rounds')
    .update(dbPatch)
    .eq('id', id)
    .select('*')
    .maybeSingle()
  if (error || !data) return null
  return fromRow(data)
}

export async function recentRoundsForUser(userId: string, limit = 40): Promise<TowerRound[]> {
  const { data, error } = await supabaseServer()
    .from('tower_rounds')
    .select('*')
    .eq('user_id', userId)
    .order('placed_at', { ascending: false })
    .limit(limit)
  if (error || !data) return []
  return data.map(fromRow)
}
