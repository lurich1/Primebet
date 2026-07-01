import { NextResponse } from 'next/server'
import {
  createBooking,
  findBookingByCode,
  isBookingExpired,
  type BookingSelection,
} from '@/lib/bookings-store'
import { getMatchesForSport, supportedSports } from '@/lib/api/odds'
import { readCustomMatchesForSport } from '@/lib/custom-matches-store'

export const dynamic = 'force-dynamic'

// A booking is playable until roughly when its games end. We expire it at the
// latest selection kickoff plus this buffer (a generous single-match duration).
const MATCH_DURATION_MS = 3 * 60 * 60 * 1000

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
  if (isBookingExpired(booking)) {
    return NextResponse.json(
      { error: 'This booking code has expired — the games have already started.', expired: true },
      { status: 410 },
    )
  }
  return NextResponse.json({ booking })
}

/**
 * Latest kickoff (ISO) among the given match ids, or null if none resolve.
 * At booking time every selection is still upcoming, so its match is present in
 * the live feed / custom list and carries a startTimeISO.
 */
async function latestKickoff(matchIds: string[]): Promise<string | null> {
  const wanted = new Set(matchIds)
  let latestMs: number | null = null
  for (const sport of supportedSports()) {
    const [customs, api] = await Promise.all([
      readCustomMatchesForSport(sport).catch(() => []),
      getMatchesForSport(sport).catch(() => []),
    ])
    for (const m of [...customs, ...api]) {
      if (!wanted.has(m.id) || !m.startTimeISO) continue
      const t = new Date(m.startTimeISO).getTime()
      if (Number.isFinite(t)) latestMs = latestMs === null ? t : Math.max(latestMs, t)
    }
  }
  return latestMs === null ? null : new Date(latestMs).toISOString()
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

  // Expire the code once the last game should be over. If we can't resolve any
  // kickoff (all selections already gone), leave it null so the code still works.
  let expiresAt: string | null = null
  try {
    const latest = await latestKickoff(clean.map((s) => s.matchId))
    if (latest) {
      expiresAt = new Date(new Date(latest).getTime() + MATCH_DURATION_MS).toISOString()
    }
  } catch {
    // Non-fatal — booking without an expiry beats failing the whole request.
  }

  const booking = await createBooking(clean, +totalOdds.toFixed(4), expiresAt)
  return NextResponse.json({ booking }, { status: 201 })
}
