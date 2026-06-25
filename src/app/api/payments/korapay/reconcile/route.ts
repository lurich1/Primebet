import { NextResponse } from 'next/server'
import { listPaymentsForUser } from '@/lib/payments-store'
import { verifyAndCreditKorapay } from '@/lib/korapay-credit'

export const dynamic = 'force-dynamic'

/**
 * Safety net for the no-webhook setup: re-check the user's recent pending
 * Korapay deposits and credit any that have since settled. Called when the
 * account page loads, so a payment whose redirect callback never fired (user
 * closed the tab) still credits on the next visit. Idempotent —
 * verifyAndCreditKorapay guards against double-credit.
 */
export async function POST(request: Request) {
  let body: { userId?: string }
  try {
    body = (await request.json()) as { userId?: string }
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }
  const userId = (body.userId ?? '').trim()
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })

  let payments
  try {
    payments = await listPaymentsForUser(userId)
  } catch (e) {
    console.error('[korapay/reconcile] list failed:', e)
    return NextResponse.json({ credited: 0, checked: 0 })
  }

  // Only recent (last 2h) pending Korapay deposits — bounds the upstream verify
  // calls and skips ancient abandoned attempts.
  const cutoff = Date.now() - 2 * 60 * 60 * 1000
  const pending = payments.filter(
    (p) =>
      p.type === 'deposit' &&
      p.provider === 'korapay' &&
      p.status === 'pending' &&
      new Date(p.createdAt).getTime() >= cutoff,
  )

  let credited = 0
  for (const p of pending) {
    try {
      const r = await verifyAndCreditKorapay(p.reference)
      if (r.status === 'success' || r.status === 'already-credited') credited++
    } catch {
      /* skip; will retry on next load */
    }
  }

  return NextResponse.json({ credited, checked: pending.length })
}
