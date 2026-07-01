import { NextResponse } from 'next/server'
import {
  createBooking,
  findBookingByCode,
  type BookingSelection,
} from '@/lib/bookings-store'
import { getMatchesForSport, supportedSports } from '@/lib/api/odds'
import { readCustomMatchesForSport } from '@/lib/custom-matches-store'
import { getBettingState, liveClockLabel } from '@/lib/match-betting'
import type { Match } from '@/lib/domain-types'

export const dynamic = 'force-dynamic'

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

type LegState = 'upcoming' | 'live' | 'finished'
type LegResult = 'won' | 'lost' | 'pending'

interface EnrichedLeg extends BookingSelection {
  state: LegState
  homeScore: number | null
  awayScore: number | null
  minute: string | null
  kickoff: string | null
  result: LegResult
}

function isFinished(m: Match): boolean {
  if (m.minute === 'FT') return true
  return liveClockLabel(m.startTimeISO, m.sport).label === 'FT'
}

function legState(m: Match | undefined): LegState {
  if (!m) return 'upcoming'
  if (isFinished(m)) return 'finished'
  if (m.isLive) return 'live'
  return 'upcoming'
}

/**
 * Grade a Match-Result (1X2) pick against the final score. Only judgeable once
 * the match is finished with a score; every other market / unfinished game
 * stays 'pending'.
 */
function gradePick(pick: string, market: string, m: Match | undefined): LegResult {
  if (!m || !isFinished(m) || m.homeScore == null || m.awayScore == null) return 'pending'
  if (!/match result|1x2|^result$/i.test(market)) return 'pending'

  const actual: 'home' | 'draw' | 'away' =
    m.homeScore > m.awayScore ? 'home' : m.homeScore < m.awayScore ? 'away' : 'draw'
  const p = pick.trim()
  const mapped: 'home' | 'draw' | 'away' | null =
    /^draw$/i.test(p) || p.toLowerCase() === 'x'
      ? 'draw'
      : p === m.homeTeam
        ? 'home'
        : p === m.awayTeam
          ? 'away'
          : null
  if (!mapped) return 'pending'
  return mapped === actual ? 'won' : 'lost'
}

function enrichLeg(leg: BookingSelection, m: Match | undefined): EnrichedLeg {
  return {
    ...leg,
    state: legState(m),
    homeScore: m?.homeScore ?? null,
    awayScore: m?.awayScore ?? null,
    minute: m?.minute ?? null,
    kickoff: m?.startTimeISO ?? null,
    result: gradePick(leg.pick, leg.market, m),
  }
}

// Load a booked slip: its selections, each enriched with live score / final
// result, plus whether it can still be loaded into the slip (all games open).
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

  let matches = new Map<string, Match>()
  try {
    matches = await buildMatchMap()
  } catch {
    // Feed unavailable — return the raw booking so it can still load.
  }

  const legs = booking.selections.map((s) => enrichLeg(s, matches.get(s.matchId)))
  // Playable only while every game is still open for betting (none kicked off).
  const playable = booking.selections.every((s) => {
    const m = matches.get(s.matchId)
    return m ? !getBettingState(m).closed : true
  })

  return NextResponse.json({ booking, legs, playable })
}

/** Earliest kickoff (ISO) among the given match ids, or null if none resolve. */
function earliestKickoff(matchIds: string[], matches: Map<string, Match>): string | null {
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
