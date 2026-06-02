import { NextResponse } from 'next/server'
import { verifyAndCreditPaystack } from '@/lib/paystack-credit'

export const dynamic = 'force-dynamic'

interface VerifyBody {
  reference?: string
}

// JSON verify endpoint used by the Paystack Inline JS popup flow. The frontend
// receives transaction.reference from PaystackPop's callback and POSTs it
// here; we verify against Paystack's /verify endpoint and run the same
// credit pipeline the redirect callback uses.
export async function POST(request: Request) {
  let body: VerifyBody
  try {
    body = (await request.json()) as VerifyBody
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const reference = (body.reference ?? '').trim()
  if (!reference) {
    return NextResponse.json({ error: 'reference required' }, { status: 400 })
  }

  const result = await verifyAndCreditPaystack(reference)
  const httpStatus = result.ok ? 200 : 400
  return NextResponse.json(result, { status: httpStatus })
}
