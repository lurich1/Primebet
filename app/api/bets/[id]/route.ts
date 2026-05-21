import { NextResponse } from 'next/server'
import { updateBet, deleteBet } from '@/lib/bets-store'

export const dynamic = 'force-dynamic'

interface Params {
  params: Promise<{ id: string }>
}

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const { status } = body as { status?: 'pending' | 'won' | 'lost' }
  if (status !== 'won' && status !== 'lost' && status !== 'pending') {
    return NextResponse.json({ error: 'status must be won, lost, or pending' }, { status: 400 })
  }

  const updated =
    status === 'pending'
      ? await updateBet(id, { status, settledAt: undefined, payout: undefined })
      : await updateBet(id, {
          status,
          settledAt: new Date().toISOString(),
          payout: 0, // computed below
        })

  if (!updated) {
    return NextResponse.json({ error: 'bet not found' }, { status: 404 })
  }

  // Compute payout based on status
  if (status === 'won') {
    const final = await updateBet(id, { payout: updated.potentialWin })
    return NextResponse.json({ bet: final })
  }
  if (status === 'lost') {
    return NextResponse.json({ bet: { ...updated, payout: 0 } })
  }
  return NextResponse.json({ bet: updated })
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params
  const ok = await deleteBet(id)
  if (!ok) return NextResponse.json({ error: 'bet not found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
