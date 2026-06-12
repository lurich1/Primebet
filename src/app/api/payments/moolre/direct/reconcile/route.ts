import { NextResponse } from 'next/server'
import { listPaymentsForUser } from '@/lib/payments-store'
import {
  verifyAndCreditMoolreDirect,
  verifyAndCreditMoolreHosted,
} from '@/lib/moolre-direct-credit'

export const dynamic = 'force-dynamic'

/**
 * Safety net so an approved payment still credits even if the user closed the
 * page or the live poll timed out. Called when the account page loads: re-check
 * the user's recent pending Moolre deposits — both the in-app "direct" flow and
 * the "api-init" hosted-checkout flow — and credit any that have since settled.
 * Idempotent (the verify-and-credit helpers guard against double-credit).
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

  // Only recent (last 2h) pending Moolre deposits — bounds the upstream status
  // calls and avoids re-checking ancient abandoned attempts. Covers BOTH the
  // in-app "direct" flow and the "api-init" hosted-checkout flow (the one the
  // deposit button actually uses), so a hosted payment that the redirect never
  // confirmed still credits on the next account-page load.
  const cutoff = Date.now() - 2 * 60 * 60 * 1000
  const pending = payments.filter(
    (p) =>
      p.type === 'deposit' &&
      p.provider === 'moolre' &&
      p.status === 'pending' &&
      new Date(p.createdAt).getTime() >= cutoff,
  )

  let credited = 0
  for (const p of pending) {
    try {
      // Hosted checkout uses the `state: confirm` endpoint; the in-app direct
      // flow uses the transaction-status endpoint. Default unknown/legacy rows
      // to the hosted verifier since that's the live deposit path.
      const r =
        p.metadata?.flow === 'direct'
          ? await verifyAndCreditMoolreDirect(p.reference)
          : await verifyAndCreditMoolreHosted(p.reference)
      if (r.status === 'success' || r.status === 'already-credited') credited++
    } catch {
      /* skip; will retry on next load */
    }
  }

  return NextResponse.json({ credited, checked: pending.length })
}
