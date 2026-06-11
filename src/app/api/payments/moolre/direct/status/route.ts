import { NextResponse } from 'next/server'
import { verifyAndCreditMoolreDirect } from '@/lib/moolre-direct-credit'

export const dynamic = 'force-dynamic'

// Poll endpoint for the in-app deposit UI. Checks the Moolre direct charge and
// runs the idempotent credit pipeline on success.
//   'success' / 'already-credited' → terminal success
//   'failed' / 'status-failed' / 'no-user' / 'credit-failed' / 'unknown-reference' → terminal failure
//   'pending' → keep polling
export async function GET(request: Request) {
  const reference = new URL(request.url).searchParams.get('reference') ?? ''
  if (!reference) {
    return NextResponse.json({ error: 'reference required' }, { status: 400 })
  }
  const result = await verifyAndCreditMoolreDirect(reference)
  return NextResponse.json(result, { status: 200 })
}
