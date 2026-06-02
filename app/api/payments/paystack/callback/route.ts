import { NextResponse } from 'next/server'
import { verifyAndCreditPaystack } from '@/lib/paystack-credit'

export const dynamic = 'force-dynamic'

function sanitizeReturnPath(raw: string | null): string {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return '/me'
  return raw
}

function redirectWith(originUrl: URL, path: string, status: string) {
  const url = new URL(path, originUrl)
  url.searchParams.set('paystack', status)
  return NextResponse.redirect(url, 303)
}

// Legacy redirect callback. With Inline JS the popup uses postMessage and the
// frontend hits POST /verify directly — this route still exists for cases
// where the popup is blocked (Paystack falls back to a full-page redirect)
// or when a user hits the URL manually.
export async function GET(request: Request) {
  const url = new URL(request.url)
  const reference = url.searchParams.get('reference') ?? url.searchParams.get('trxref') ?? ''
  const returnPath = sanitizeReturnPath(url.searchParams.get('returnPath'))

  const result = await verifyAndCreditPaystack(reference)
  return redirectWith(url, returnPath, result.status)
}
