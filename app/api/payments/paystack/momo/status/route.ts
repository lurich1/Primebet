import { NextResponse } from 'next/server'
import { verifyAndCreditPaystack } from '@/lib/paystack-credit'

export const dynamic = 'force-dynamic'

// Poll endpoint for the custom mobile-money UI. The frontend calls this on
// an interval after kicking off a charge; we forward to Paystack's
// /transaction/verify and run the credit pipeline on success.
//
// Frontend treats:
//   - status 'success' / 'already-credited' → terminal success
//   - status 'failed' / 'abandoned' / 'amount-mismatch' / 'verify-failed' → terminal failure
//   - anything else (pending, pay_offline, etc.) → keep polling
export async function GET(request: Request) {
  const url = new URL(request.url)
  const reference = url.searchParams.get('reference') ?? ''
  if (!reference) {
    return NextResponse.json({ error: 'reference required' }, { status: 400 })
  }

  const result = await verifyAndCreditPaystack(reference)
  return NextResponse.json(result, { status: 200 })
}
