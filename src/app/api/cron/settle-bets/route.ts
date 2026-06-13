import { NextResponse } from 'next/server'
import { settlePendingBets } from '@/lib/settle-bets'

export const dynamic = 'force-dynamic'

/**
 * Scheduled settlement — runs every minute via Vercel Cron (see vercel.json).
 * Settles every finished bet across all players so wins are credited even if
 * the player never reopens the app. Vercel attaches a Bearer CRON_SECRET when
 * one is configured; we verify it so the endpoint can't be triggered publicly.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET?.trim()
  if (secret) {
    const auth = request.headers.get('authorization') ?? ''
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
    }
  }

  try {
    const result = await settlePendingBets()
    return NextResponse.json({ ok: true, ...result })
  } catch (e) {
    console.error('[cron/settle-bets] failed:', e)
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : String(e) },
      { status: 500 },
    )
  }
}
