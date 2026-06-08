// Apply a confirmed deposit to a user's wallet: update totals (via
// recordDeposit, which also stamps firstDepositAt for first-timers) and
// advance the withdrawal-verification gate when the amount qualifies.
//
// Reused by every path that confirms a deposit:
//   - /api/admin/users/[id]/credit (admin manually crediting from /admin/users)
//   - /api/admin/payments/[id]/resolve (admin clicking 'Credit & resolve' on a
//     pending/failed payments row)
//   - /api/payments/paystack/callback (Paystack auto-credit after verify)
//
// Pure 'bonus' credits (which should NOT count toward verification) should
// bypass this helper and call creditBalance directly.
//
// The verification threshold is country-aware: 200 GHS for Ghana, ₦30,000 for
// Nigeria, etc. (see lib/countries.ts).
//
// NOTE: sub-admin referral commissions were intentionally removed from this
// build. The `commission` field is retained (always null) so existing callers
// continue to type-check, but no commission is ever fired.

import {
  advanceVerificationStep,
  findUserById,
  recordDeposit,
} from '@/lib/users-store'
import { type AppUser } from '@/lib/domain-types'
import { getVerificationAmount } from '@/lib/countries'

export interface ApplyDepositResult {
  user: AppUser
  isFirstDeposit: boolean
  commission: {
    amount: number
    rate: number
    subAdminId: string
    currency: AppUser['currency']
  } | null
}

export async function applyDepositCredit(
  userId: string,
  amount: number,
): Promise<ApplyDepositResult | null> {
  // Need the user's country to know what verification threshold applies.
  const userBefore = await findUserById(userId)
  if (!userBefore) return null

  const result = await recordDeposit(userId, amount)
  if (!result) return null

  let user = result.user
  const verificationThreshold = getVerificationAmount(userBefore.country)

  // Verification step is best-effort: a failure here (stale CHECK constraint,
  // transient DB blip) must not roll back the wallet credit that already
  // happened above.
  if (
    amount >= verificationThreshold &&
    (user.verificationStep ?? 0) < 4
  ) {
    try {
      const advanced = await advanceVerificationStep(userId)
      if (advanced) user = advanced
    } catch (e) {
      console.error('[deposit-credit] verification-step advance failed (deposit already landed)', {
        userId: user.id,
        currentStep: user.verificationStep ?? 0,
        error: e instanceof Error ? e.message : String(e),
      })
    }
  }

  return { user, isFirstDeposit: result.isFirst, commission: null }
}
