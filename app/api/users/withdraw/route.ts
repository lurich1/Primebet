import { NextResponse } from 'next/server'
import { recordWithdrawal } from '@/lib/users-store'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { userId?: string; amount?: number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const userId = (body.userId ?? '').trim()
  const amount = Number(body.amount)
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: 'amount must be > 0' }, { status: 400 })
  }

  const result = await recordWithdrawal(userId, +amount.toFixed(2))
  if ('error' in result) {
    if (result.error === 'not-found') {
      return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }
    if (result.error === 'no-deposit') {
      return NextResponse.json(
        { error: 'make a deposit before withdrawing' },
        { status: 400 },
      )
    }
    return NextResponse.json({ error: 'insufficient funds' }, { status: 400 })
  }

  return NextResponse.json(
    {
      user: {
        id: result.user.id,
        name: result.user.name,
        totalDeposited: result.user.totalDeposited,
        totalWithdrawn: result.user.totalWithdrawn ?? 0,
        balance: result.user.balance ?? 0,
      },
    },
    { status: 201 },
  )
}
