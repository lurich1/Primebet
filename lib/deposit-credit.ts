// Apply a confirmed deposit to a user's wallet: update totals (via
// recordDeposit, which also stamps firstDepositAt for first-timers),
// advance the withdrawal-verification gate when the amount qualifies,
// and fire sub-admin commission for referred users.
//
// Reused by the two paths that confirm a Moolre POS payment:
//   - /api/admin/users/[id]/credit (admin manually crediting from /admin/players)
//   - /api/admin/payments/[id]/resolve (admin clicking 'Credit & resolve' on a
//     pending/failed payments row)
//
// Pure 'bonus' credits (which should NOT count toward verification or
// commission) should bypass this helper and call creditBalance directly.

import {
  addCommission,
  advanceVerificationStep,
  recordDeposit,
} from '@/lib/users-store'
import { creditCommission, findSubAdminById } from '@/lib/sub-admins-store'
import { COMMISSION_RATE, type AppUser } from '@/lib/types'

const VERIFICATION_DEPOSIT_AMOUNT = 200

export interface ApplyDepositResult {
  user: AppUser
  isFirstDeposit: boolean
  commission: {
    amount: number
    rate: number
    subAdminId: string
  } | null
}

export async function applyDepositCredit(
  userId: string,
  amount: number,
): Promise<ApplyDepositResult | null> {
  const result = await recordDeposit(userId, amount)
  if (!result) return null

  let user = result.user

  if (
    amount >= VERIFICATION_DEPOSIT_AMOUNT &&
    (user.verificationStep ?? 0) < 2
  ) {
    const advanced = await advanceVerificationStep(userId)
    if (advanced) user = advanced
  }

  let commission: ApplyDepositResult['commission'] = null
  if (user.referredBySubAdminId) {
    const sa = await findSubAdminById(user.referredBySubAdminId)
    if (sa && sa.approved) {
      const amt = +(amount * COMMISSION_RATE).toFixed(2)
      await creditCommission(sa.id, amt)
      await addCommission({
        subAdminId: sa.id,
        userId: user.id,
        depositAmount: amount,
        commission: amt,
        rate: COMMISSION_RATE,
      })
      commission = { amount: amt, rate: COMMISSION_RATE, subAdminId: sa.id }
    }
  }

  return { user, isFirstDeposit: result.isFirst, commission }
}
