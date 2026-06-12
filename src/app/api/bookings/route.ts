import { NextResponse } from 'next/server'
import { createBooking, findBookingByCode, type BookingSelection } from '@/lib/bookings-store'

export const dynamic = 'force-dynamic'

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
  return NextResponse.json({ booking })
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

  const booking = await createBooking(clean, +totalOdds.toFixed(4))
  return NextResponse.json({ booking }, { status: 201 })
}
