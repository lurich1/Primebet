// Verify-then-credit pipeline for Moolre direct (in-app) MoMo deposits.
// Idempotent on the externalref (which we store as the payment reference).

import { findPaymentByReference, markPaymentResolved } from '@/lib/payments-store'
import { getMoolreDirectStatus } from '@/lib/moolre'
import { applyDepositCredit } from '@/lib/deposit-credit'

export type MoolreDirectStatus =
  | 'success'
  | 'already-credited'
  | 'pending'
  | 'failed'
  | 'missing-reference'
  | 'unknown-reference'
  | 'status-failed'
  | 'no-user'
  | 'credit-failed'

export interface MoolreDirectResult {
  status: MoolreDirectStatus
  ok: boolean
  reference: string
  reason?: string | null
}

export async function verifyAndCreditMoolreDirect(
  reference: string,
): Promise<MoolreDirectResult> {
  if (!reference) return { status: 'missing-reference', ok: false, reference }

  const pending = await findPaymentByReference(reference)
  if (!pending) return { status: 'unknown-reference', ok: false, reference }
  if (pending.status === 'success') {
    return { status: 'already-credited', ok: true, reference }
  }

  let result
  try {
    result = await getMoolreDirectStatus(reference)
  } catch (e) {
    console.error('[moolre-direct-credit] status check failed:', e)
    return { status: 'status-failed', ok: false, reference }
  }

  if (result.state === 'failed') {
    return { status: 'failed', ok: false, reference, reason: result.message }
  }
  // 'pending' and 'not-found' (just-kicked-off) → keep polling.
  if (result.state !== 'success') {
    return { status: 'pending', ok: false, reference, reason: result.message }
  }

  if (!pending.userId) return { status: 'no-user', ok: false, reference }

  try {
    const resolved = await markPaymentResolved(pending.id, 'moolre direct confirm')
    if (!resolved) return { status: 'already-credited', ok: true, reference }
    await applyDepositCredit(pending.userId, pending.amount)
  } catch (e) {
    console.error('[moolre-direct-credit] credit pipeline failed:', e)
    return { status: 'credit-failed', ok: false, reference }
  }

  return { status: 'success', ok: true, reference }
}
