import { NextResponse } from 'next/server'
import { verifyAndCreditKorapay } from '@/lib/korapay-credit'

export const dynamic = 'force-dynamic'

interface VerifyBody {
  reference?: string
}

// JSON verify endpoint the frontend hits after the Korapay checkout closes.
// We re-verify against Korapay's /charges/:reference and run the same credit
// pipeline the redirect callback and webhook use.
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

  const result = await verifyAndCreditKorapay(reference)
  const httpStatus = result.ok ? 200 : 400
  return NextResponse.json(result, { status: httpStatus })
}
