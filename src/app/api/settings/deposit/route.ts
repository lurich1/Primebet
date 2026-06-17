import { NextResponse } from 'next/server'
import { getSettings } from '@/lib/settings-store'

export const dynamic = 'force-dynamic'

// Public: the manual-deposit MoMo number + account name shown on the deposit
// screen. DB setting wins; falls back to env, then a built-in default.
export async function GET() {
  const s = await getSettings(['deposit_number', 'deposit_name'])
  return NextResponse.json({
    number: s.deposit_number || process.env.NEXT_PUBLIC_DEPOSIT_NUMBER || '0534922921',
    name: s.deposit_name || process.env.NEXT_PUBLIC_DEPOSIT_NAME || 'KOJO MABIGMAN',
  })
}
