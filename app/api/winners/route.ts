import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabase'

export const dynamic = 'force-dynamic'
// 60s — the ticker is a marketing prop, not real-time critical.
export const revalidate = 60

export interface WinnerEntry {
  /** Sportybet-style masked identifier, e.g. "02*****812" or "JK***DOE". */
  masked: string
  amount: number
  /** ISO timestamp of when the bet settled. */
  settledAt: string
  /** Bet booking code, useful for tooltips / "View ticket" affordances. */
  code: string
}

interface WinnerRow {
  code: string
  payout: number | string | null
  potential_win: number | string
  settled_at: string | null
  users: { phone: string | null; name: string | null } | null
}

/** "0241234567" → "02*****567"; 10-digit phones only, others fall back to a generic mask. */
function maskPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '')
  if (digits.length < 6) return null
  // Keep first 2 + last 3 visible like Sportybet does on its winners ticker.
  const first = digits.slice(0, 2)
  const last = digits.slice(-3)
  const middleLen = Math.max(3, digits.length - 5)
  return `${first}${'*'.repeat(middleLen)}${last}`
}

function maskName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return 'A*******'
  if (parts.length === 1) {
    const p = parts[0]
    return p.length <= 2 ? `${p[0]}***` : `${p[0]}${'*'.repeat(p.length - 2)}${p[p.length - 1]}`
  }
  const first = parts[0][0].toUpperCase()
  const last = parts[parts.length - 1][0].toUpperCase()
  return `${first}******${last}`
}

export async function GET() {
  const supabase = supabaseServer()
  const { data, error } = await supabase
    .from('bets')
    .select('code, payout, potential_win, settled_at, users!inner(phone, name)')
    .eq('status', 'won')
    .order('payout', { ascending: false, nullsFirst: false })
    .limit(15)

  if (error) {
    return NextResponse.json({ winners: [], error: error.message }, { status: 200 })
  }

  const rows = (data ?? []) as unknown as WinnerRow[]
  const winners: WinnerEntry[] = rows
    .map((r): WinnerEntry | null => {
      const amount = Number(r.payout ?? r.potential_win)
      if (!Number.isFinite(amount) || amount <= 0) return null
      const u = r.users ?? null
      const masked = (u?.phone && maskPhone(u.phone)) ?? (u?.name ? maskName(u.name) : 'A*******')
      return {
        masked,
        amount: +amount.toFixed(2),
        settledAt: r.settled_at ?? new Date().toISOString(),
        code: r.code,
      }
    })
    .filter((w): w is WinnerEntry => w !== null)

  return NextResponse.json({ winners })
}
