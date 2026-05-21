import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { readBets, addBet, findBetByCode, generateUniqueCode } from '@/lib/bets-store'
import type { BetSelection, PlacedBet } from '@/lib/types'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    const bet = await findBetByCode(code)
    if (!bet) {
      return NextResponse.json({ error: 'code not found' }, { status: 404 })
    }
    return NextResponse.json({ bet })
  }

  const bets = await readBets()
  return NextResponse.json({ bets })
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const { selections, stake } = body as { selections?: BetSelection[]; stake?: number }

  if (!Array.isArray(selections) || selections.length === 0) {
    return NextResponse.json({ error: 'no selections' }, { status: 400 })
  }
  const stakeNum = typeof stake === 'number' ? stake : Number(stake)
  if (!Number.isFinite(stakeNum) || stakeNum <= 0) {
    return NextResponse.json({ error: 'invalid stake' }, { status: 400 })
  }

  const totalOdds = selections.reduce((acc, s) => acc * Number(s.odds || 0), 1)
  if (!Number.isFinite(totalOdds) || totalOdds <= 0) {
    return NextResponse.json({ error: 'invalid odds' }, { status: 400 })
  }

  const bet: PlacedBet = {
    id: randomUUID(),
    code: await generateUniqueCode(),
    placedAt: new Date().toISOString(),
    stake: stakeNum,
    totalOdds: +totalOdds.toFixed(4),
    potentialWin: +(stakeNum * totalOdds).toFixed(2),
    status: 'pending',
    selections,
  }

  await addBet(bet)
  return NextResponse.json({ bet }, { status: 201 })
}
