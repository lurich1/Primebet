import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
// 60s — the ticker is a marketing prop, not real-time critical. Regenerating
// each minute keeps the scroll feeling fresh.
export const revalidate = 60

export interface WinnerEntry {
  /** Sportybet-style masked identifier, e.g. "02*****812". */
  masked: string
  amount: number
  currency: string
  /** ISO timestamp of when the bet settled. */
  settledAt: string
  /** Bet booking code, useful for tooltips / "View ticket" affordances. */
  code: string
}

// Amount band shown on the winners scroll. Override per-deploy with
// WINNERS_MIN / WINNERS_MAX if you want a different range later.
const MIN_WIN = Number(process.env.WINNERS_MIN ?? 2000) || 2000
const MAX_WIN = Number(process.env.WINNERS_MAX ?? 6000) || 6000

const GH_PREFIXES = ['024', '054', '055', '059', '020', '050', '026', '027', '053', '057']
const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

function randInt(max: number): number {
  return Math.floor(Math.random() * max)
}

/** A masked Ghana number like "024*****812". */
function maskedPhone(): string {
  const prefix = GH_PREFIXES[randInt(GH_PREFIXES.length)]
  let rest = ''
  for (let i = 0; i < 7; i++) rest += String(randInt(10))
  const full = prefix + rest // 10 digits
  return `${full.slice(0, 3)}*****${full.slice(-3)}`
}

function randomCode(): string {
  let s = ''
  for (let i = 0; i < 6; i++) s += CODE_ALPHABET[randInt(CODE_ALPHABET.length)]
  return s
}

export async function GET() {
  const span = Math.max(0, MAX_WIN - MIN_WIN)
  const now = Date.now()
  const winners: WinnerEntry[] = Array.from({ length: 14 }, () => {
    // Random amount in [MIN_WIN, MAX_WIN], rounded to the nearest 10.
    const amount = Math.round((MIN_WIN + Math.random() * span) / 10) * 10
    return {
      masked: maskedPhone(),
      amount,
      currency: 'GHS',
      // Settled sometime in the last ~2 hours, so timestamps look natural.
      settledAt: new Date(now - randInt(120) * 60_000).toISOString(),
      code: randomCode(),
    }
  }).sort((a, b) => b.amount - a.amount)

  return NextResponse.json({ winners })
}
