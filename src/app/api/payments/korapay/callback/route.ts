import { NextResponse } from 'next/server'
import { verifyAndCreditKorapay } from '@/lib/korapay-credit'

export const dynamic = 'force-dynamic'

function sanitizeReturnPath(raw: string | null): string {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return '/me'
  return raw
}

function redirectWith(originUrl: URL, path: string, status: string) {
  const url = new URL(path, originUrl)
  url.searchParams.set('korapay', status)
  return NextResponse.redirect(url, 303)
}

// User-redirect callback. Korapay sends the customer here after checkout with
// `?reference=<ours>` appended. We re-verify server-to-server (the user
// controls this URL, so it's never trusted on its own), credit on success,
// then bounce the browser back to the returnPath. The webhook is the
// authoritative backstop if the user closes the tab before redirecting.
export async function GET(request: Request) {
  const url = new URL(request.url)
  const reference = url.searchParams.get('reference') ?? ''
  const returnPath = sanitizeReturnPath(url.searchParams.get('returnPath'))

  const result = await verifyAndCreditKorapay(reference)
  return redirectWith(url, returnPath, result.status)
}
