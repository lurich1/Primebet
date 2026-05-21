import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { setWithdrawalApproval, findUserById } from '@/lib/users-store'
import { ADMIN_COOKIE, isValidSessionCookie } from '@/lib/admin-auth'

export const dynamic = 'force-dynamic'

interface Params {
  params: Promise<{ id: string }>
}

async function isAdminAuthenticated(): Promise<boolean> {
  const store = await cookies()
  return isValidSessionCookie(store.get(ADMIN_COOKIE)?.value)
}

export async function PATCH(request: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const { id } = await params

  let body: { withdrawalApproved?: boolean }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  if (typeof body.withdrawalApproved !== 'boolean') {
    return NextResponse.json(
      { error: 'withdrawalApproved (boolean) required' },
      { status: 400 },
    )
  }

  const user = await setWithdrawalApproval(id, body.withdrawalApproved)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      verificationStep: user.verificationStep ?? 0,
      withdrawalApproved: user.withdrawalApproved ?? false,
      balance: user.balance ?? 0,
    },
  })
}

export async function GET(_req: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const { id } = await params
  const user = await findUserById(id)
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      verificationStep: user.verificationStep ?? 0,
      withdrawalApproved: user.withdrawalApproved ?? false,
      balance: user.balance ?? 0,
      totalDeposited: user.totalDeposited,
      totalWithdrawn: user.totalWithdrawn ?? 0,
      firstDepositAt: user.firstDepositAt ?? null,
    },
  })
}
