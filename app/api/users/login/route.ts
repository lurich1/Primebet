import { NextResponse } from 'next/server'
import { findUserByEmail } from '@/lib/users-store'
import { verifyPassword } from '@/lib/password'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let body: { email?: string; password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const email = (body.email ?? '').trim().toLowerCase()
  const password = body.password ?? ''

  if (!email || !password) {
    return NextResponse.json(
      { error: 'email and password are required' },
      { status: 400 },
    )
  }

  const user = await findUserByEmail(email)
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: 'invalid email or password' }, { status: 401 })
  }

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      totalDeposited: user.totalDeposited,
    },
  })
}
