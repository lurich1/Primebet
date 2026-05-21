import { NextResponse } from 'next/server'
import { readSubAdmins } from '@/lib/sub-admins-store'
import { readUsers, readCommissions } from '@/lib/users-store'

export const dynamic = 'force-dynamic'

export async function GET() {
  const [subAdmins, users, commissions] = await Promise.all([
    readSubAdmins(),
    readUsers(),
    readCommissions(),
  ])

  // Enrich each sub-admin with referral / commission stats
  const enriched = subAdmins.map((sa) => {
    const refs = users.filter((u) => u.referredBySubAdminId === sa.id)
    const withDeposit = refs.filter((u) => u.firstDepositAt).length
    const myCommissions = commissions.filter((c) => c.subAdminId === sa.id)
    return {
      id: sa.id,
      name: sa.name,
      email: sa.email,
      referralCode: sa.referralCode,
      approved: sa.approved,
      createdAt: sa.createdAt,
      commissionBalance: sa.commissionBalance,
      totalCommissionEarned: sa.totalCommissionEarned,
      referrals: refs.length,
      withDeposit,
      commissionsCount: myCommissions.length,
    }
  })

  return NextResponse.json({ subAdmins: enriched })
}
