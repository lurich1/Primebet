import { NextResponse } from 'next/server'
import { addUser, findUserByEmail } from '@/lib/users-store'
import { findSubAdminByReferralCode } from '@/lib/sub-admins-store'
import { hashPassword } from '@/lib/password'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: {
    name?: string
    email?: string
    password?: string
    referralCode?: string
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim().toLowerCase()
  const password = body.password ?? ''
  const referralCode = (body.referralCode ?? '').trim().toUpperCase()

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: 'name, email, and password are required' },
      { status: 400 },
    )
  }
  if (!email.includes('@')) {
    return NextResponse.json({ error: 'invalid email' }, { status: 400 })
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: 'password must be at least 6 characters' },
      { status: 400 },
    )
  }

  if (await findUserByEmail(email)) {
    return NextResponse.json(
      { error: 'a user with that email already exists' },
      { status: 409 },
    )
  }

  let referredBySubAdminId: string | undefined = undefined
  let validatedReferralCode: string | undefined = undefined
  if (referralCode) {
    const sa = await findSubAdminByReferralCode(referralCode)
    if (!sa) {
      return NextResponse.json({ error: 'invalid referral code' }, { status: 400 })
    }
    if (!sa.approved) {
      return NextResponse.json(
        { error: 'this referral code is currently disabled' },
        { status: 400 },
      )
    }
    referredBySubAdminId = sa.id
    validatedReferralCode = sa.referralCode
  }

  const user = await addUser({
    name,
    email,
    passwordHash: hashPassword(password),
    referredByCode: validatedReferralCode,
    referredBySubAdminId,
  })

  return NextResponse.json(
    {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        referredByCode: user.referredByCode,
        hasFirstDeposit: !!user.firstDepositAt,
      },
    },
    { status: 201 },
  )
}
