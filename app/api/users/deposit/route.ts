import { NextResponse } from 'next/server'
import {
  addCommission,
  findUserById,
  recordDeposit,
} from '@/lib/users-store'
import { creditCommission, findSubAdminById } from '@/lib/sub-admins-store'
import { COMMISSION_RATE } from '@/lib/types'
import { getMinFirstDeposit, verifyKorapayCharge } from '@/lib/korapay'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { userId?: string; amount?: number; reference?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  const reference = (body.reference ?? '').trim()
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })
  }

  const existing = await findUserById(userId)
  if (!existing) {
    return NextResponse.json({ error: 'user not found' }, { status: 404 })
  }

  // Enforce minimum first deposit (configurable via MIN_FIRST_DEPOSIT, default 200)
  const isFirstDeposit = !existing.firstDepositAt
  const minFirst = getMinFirstDeposit()
  if (isFirstDeposit && amount < minFirst) {
    return NextResponse.json(
      { error: `minimum first deposit is GHS ${minFirst.toFixed(2)}` },
      { status: 400 },
    )
  }

  // Verify payment with Korapay before crediting the user. A missing
  // reference is only allowed when Korapay is not configured (demo mode).
  if (process.env.KORAPAY_SECRET_KEY) {
    if (!reference) {
      return NextResponse.json(
        { error: 'payment reference required' },
        { status: 400 },
      )
    }
    const verify = await verifyKorapayCharge(reference)
    if (!verify.ok) {
      return NextResponse.json(
        { error: verify.error ?? 'payment verification failed' },
        { status: 402 },
      )
    }
    if (verify.amount !== undefined && verify.amount < amount) {
      return NextResponse.json(
        {
          error: `payment amount mismatch (paid ${verify.amount}, claiming ${amount})`,
        },
        { status: 402 },
      )
    }
  }

  const result = await recordDeposit(userId, amount)
  if (!result) {
    return NextResponse.json({ error: 'user not found' }, { status: 404 })
  }

  let commissionInfo: {
    commission: number
    rate: number
    subAdmin?: { id: string; name: string; referralCode: string }
  } | null = null

  // Fire commission only on FIRST deposit when user was referred.
  if (result.isFirst && result.user.referredBySubAdminId) {
    const sa = await findSubAdminById(result.user.referredBySubAdminId)
    if (sa && sa.approved) {
      const commission = +(amount * COMMISSION_RATE).toFixed(2)
      await creditCommission(sa.id, commission)
      await addCommission({
        subAdminId: sa.id,
        userId: result.user.id,
        depositAmount: amount,
        commission,
        rate: COMMISSION_RATE,
      })
      commissionInfo = {
        commission,
        rate: COMMISSION_RATE,
        subAdmin: { id: sa.id, name: sa.name, referralCode: sa.referralCode },
      }
    }
  }

  return NextResponse.json(
    {
      user: {
        id: result.user.id,
        name: result.user.name,
        firstDepositAmount: result.user.firstDepositAmount,
        firstDepositAt: result.user.firstDepositAt,
        totalDeposited: result.user.totalDeposited,
        totalWithdrawn: result.user.totalWithdrawn ?? 0,
        balance: result.user.balance ?? result.user.totalDeposited,
      },
      isFirstDeposit: result.isFirst,
      commission: commissionInfo,
    },
    { status: 201 },
  )
}
