import { NextResponse } from 'next/server'
import { getSettings } from '@/lib/settings-store'

export const dynamic = 'force-dynamic'

// Public: the manual-deposit MoMo number + account name shown on the deposit
// screen. DB setting wins; falls back to env, then a built-in default.
export async function GET() {
  // DB setting wins when present; otherwise the built-in default. (We do NOT
  // fall back to env vars — a stale NEXT_PUBLIC_DEPOSIT_* on the host was
  // overriding this, showing an old name.)
  const s = await getSettings(['deposit_number', 'deposit_name'])
  return NextResponse.json({
    number: s.deposit_number || '0534922921',
    name: s.deposit_name || 'KOJO MABIGMAN',
  })
}
