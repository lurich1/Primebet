import { NextResponse } from 'next/server'
import {
  createBooking,
  findBookingByCode,
  isBookingExpired,
  type BookingSelection,
} from '@/lib/bookings-store'
import { getMatchesForSport, supportedSports } from '@/lib/api/odds'
import { readCustomMatchesForSport } from '@/lib/custom-matches-store'
import { getBettingState } from '@/lib/match-betting'
import type { Match } from '@/lib/domain-types'

export const dynamic = 'force-dynamic'

const EXPIRED_MESSAGE =
  'This booking code has expired — the games have already started.'

/** Every current match (live feed + custom), keyed by id. */
async function buildMatchMap(): Promise<Map<string, Match>> {
  const map = new Map<string, Match>()
  for (const sport of supportedSports()) {
    const [customs, api] = await Promise.all([
      readCustomMatchesForSport(sport).catch(() => [] as Match[]),
      getMatchesForSport(sport).catch(() => [] as Match[]),
    ])
    for (const m of [...customs, ...api]) map.set(m.id, m)
  }
  return map
}

/**
 * A booking is playable only while ALL its games are still open for betting.
 * The moment any selection's match kicks off (or is otherwise locked), the
 * accumulator can't be placed, so the code is treated as expired. Matches that
 * have finished and dropped out of the feed are caught by the stored
 * expires_at fast-path in the GET handler.
 */
function anySelectionStarted(
  selections: BookingSelection[],
  matches: Map<string, Match>,
): boolean {
  return selections.some((s) => {
    const m = matches.get(s.matchId)
    return m ? getBettingState(m).closed : false
  })
}

// Load a booked slip by its code so it can be dropped back into the bet slip.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')?.trim()
  if (!code) {
    return NextResponse.json({ error: 'code required' }, { status: 400 })
  }
  const booking = await findBookingByCode(code)
  if (!booking) {
    return NextResponse.json({ error: 'code not found' }, { status: 404 })
  }

  // Fast path: stored expiry (set at creation once the games are done).
  if (isBookingExpired(booking)) {
    return NextResponse.json({ error: EXPIRED_MESSAGE, expired: true }, { status: 410 })
  }

  // Live check: expire as soon as any game has kicked off. Works even when the
  // expires_at column hasn't been migrated yet, so a stale code never opens.
  try {
    const matches = await buildMatchMap()
    if (anySelectionStarted(booking.selections, matches)) {
      return NextResponse.json({ error: EXPIRED_MESSAGE, expired: true }, { status: 410 })
    }
  } catch {
    // If the feed is unavailable, fall back to the stored expiry alone.
  }

  return NextResponse.json({ booking })
}

/** Earliest kickoff (ISO) among the given match ids, or null if none resolve. */
function earliestKickoff(
  matchIds: string[],
  matches: Map<string, Match>,
): string | null {
  let earliestMs: number | null = null
  for (const id of matchIds) {
    const iso = matches.get(id)?.startTimeISO
    if (!iso) continue
    const t = new Date(iso).getTime()
    if (Number.isFinite(t)) earliestMs = earliestMs === null ? t : Math.min(earliestMs, t)
  }
  return earliestMs === null ? null : new Date(earliestMs).toISOString()
}

// Book a slip: save the selections and hand back a short code. No stake, no
// money, no login — booking is free and anonymous, just like a betting shop.
export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const { selections } = body as { selections?: BookingSelection[] }
  if (!Array.isArray(selections) || selections.length === 0) {
    return NextResponse.json({ error: 'no selections to book' }, { status: 400 })
  }

  // Keep only the fields a slip needs, and sanitise odds.
  const clean: BookingSelection[] = selections.map((s) => ({
    id: String(s.id),
    matchId: String(s.matchId),
    match: String(s.match),
    market: String(s.market),
    pick: String(s.pick),
    odds: Number(s.odds) || 0,
  }))
  const totalOdds = clean.reduce((acc, s) => acc * (s.odds || 1), 1)

  // Expire the code when the first game kicks off — the slip can't be placed
  // once any leg has started. Null if no kickoff resolves (code won't expire).
  let expiresAt: string | null = null
  try {
    const matches = await buildMatchMap()
    expiresAt = earliestKickoff(clean.map((s) => s.matchId), matches)
  } catch {
    // Non-fatal — booking without an expiry beats failing the whole request.
  }

  const booking = await createBooking(clean, +totalOdds.toFixed(4), expiresAt)
  return NextResponse.json({ booking }, { status: 201 })
}
