import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/**
 * TEMPORARY diagnostic — reveals what Moolre config the deployment actually
 * loaded (masked) and runs a live Moolre auth check, so we can see whether the
 * public key + account number on Vercel match. Gated by the admin password:
 *   /api/payments/moolre/debug?pw=<ADMIN_PASSWORD>
 * Remove this route once deposits are confirmed working.
 */
// Temporary fixed token so we can read the deployed config regardless of how
// ADMIN_PASSWORD is set on Vercel. Exposes only masked values — removed after.
const DEBUG_TOKEN = 'moolre-check-9f3a2b'

export async function GET(request: Request) {
  const pw = new URL(request.url).searchParams.get('pw') ?? ''
  if (pw !== DEBUG_TOKEN && pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const pubKey = process.env.MOOLRE_PUBLIC_KEY?.trim() ?? ''
  const account = process.env.MOOLRE_ACCOUNT_NUMBER?.trim() ?? ''

  // Live auth check against Moolre with the deployed credentials.
  let moolre: { httpStatus: number; code: string | null; message: unknown } | { error: string }
  try {
    const r = await fetch('https://api.moolre.com/open/transact/payment', {
      method: 'POST',
      headers: { 'X-API-PUBKEY': pubKey, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        type: 1,
        channel: process.env.MOOLRE_CHANNEL?.trim() || '13',
        currency: 'GHS',
        amount: 1,
        payer: '000', // invalid on purpose — never charges; we just read the code
        reference: 'debug',
        externalref: 'debug-check',
        accountnumber: account,
      }),
      cache: 'no-store',
    })
    const j = (await r.json().catch(() => ({}))) as { code?: string; message?: unknown }
    moolre = { httpStatus: r.status, code: j.code ?? null, message: j.message ?? null }
  } catch (e) {
    moolre = { error: e instanceof Error ? e.message : 'fetch failed' }
  }

  return NextResponse.json({
    accountNumberLoaded: account || '(empty)',
    accountNumberLooksNew: account === '10877906070880',
    pubKeyLoaded: pubKey ? `…${pubKey.slice(-14)} (len ${pubKey.length})` : '(empty)',
    pubKeyLooksNew: pubKey.endsWith('mGMTRN6dUHaMjso11At45OidVPwBg6vMyx0bPERGy0U'),
    moolreAuthCheck: moolre,
    hint: 'AIN01 = key/account mismatch. TR03/TP14 = auth OK. Both *LooksNew must be true.',
  })
}
