import { NextResponse } from 'next/server'
import { listPaymentsForUser } from '@/lib/payments-store'
import { verifyAndCreditMoolreDirect } from '@/lib/moolre-direct-credit'

export const dynamic = 'force-dynamic'

/**
 * Safety net so an approved payment still credits even if the user closed the
 * page or the live poll timed out. Called when the account page loads: re-check
 * the user's recent pending Moolre direct deposits and credit any that have
 * since settled. Idempotent (verifyAndCreditMoolreDirect guards double-credit).
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
    console.error('[moolre/direct/reconcile] list failed:', e)
    return NextResponse.json({ credited: 0, checked: 0 })
  }

  // Only recent (last 2h) pending direct-Moolre deposits — bounds the upstream
  // status calls and avoids re-checking ancient abandoned attempts.
  const cutoff = Date.now() - 2 * 60 * 60 * 1000
  const pending = payments.filter(
    (p) =>
      p.type === 'deposit' &&
      p.provider === 'moolre' &&
      p.status === 'pending' &&
      p.metadata?.flow === 'direct' &&
      new Date(p.createdAt).getTime() >= cutoff,
  )

  let credited = 0
  for (const p of pending) {
    try {
      const r = await verifyAndCreditMoolreDirect(p.reference)
      if (r.status === 'success' || r.status === 'already-credited') credited++
    } catch {
      /* skip; will retry on next load */
    }
  }

  return NextResponse.json({ credited, checked: pending.length })
}
