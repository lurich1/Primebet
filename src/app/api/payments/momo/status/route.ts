import { NextResponse } from 'next/server'
import { verifyAndCreditMomo } from '@/lib/momo-credit'

export const dynamic = 'force-dynamic'

// Poll endpoint for the deposit UI. The frontend calls this on an interval
// after kicking off a Request to Pay; we check the MoMo status and run the
// idempotent credit pipeline on success.
//
// Frontend treats:
//   - 'success' / 'already-credited' → terminal success
//   - 'failed' / 'amount-mismatch' / 'no-user' / 'credit-failed' /
//     'status-failed' / 'unknown-reference' → terminal failure
//   - 'pending' → keep polling
export async function GET(request: Request) {
  const reference = new URL(request.url).searchParams.get('reference') ?? ''
  if (!reference) {
    return NextResponse.json({ error: 'reference required' }, { status: 400 })
  }
  const result = await verifyAndCreditMomo(reference)
  return NextResponse.json(result, { status: 200 })
}
