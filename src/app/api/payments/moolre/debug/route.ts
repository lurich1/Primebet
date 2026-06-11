import { NextResponse } from 'next/server'
import { createHash } from 'crypto'

export const dynamic = 'force-dynamic'

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
  const baseEnv = process.env.MOOLRE_BASE_URL?.trim() ?? ''
  const channel = process.env.MOOLRE_CHANNEL?.trim() || '13'
  // Exactly what chargeMoolreDirect derives:
  const base = (baseEnv || 'https://api.moolre.com').replace(/\/$/, '')

  const sha = (s: string) => createHash('sha256').update(s).digest('hex').slice(0, 16)

  // Replicate the real charge call with a VALID payer so we hit the auth check.
  let live: unknown
  try {
    const r = await fetch(`${base}/open/transact/payment`, {
      method: 'POST',
      headers: { 'X-API-PUBKEY': pubKey, 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        type: 1,
        channel,
        currency: 'GHS',
        amount: 1,
        payer: '0540257689',
        reference: 'debug',
        externalref: 'debug-' + Date.now(),
        accountnumber: account,
      }),
      cache: 'no-store',
    })
    const j = (await r.json().catch(() => ({}))) as { code?: string; message?: unknown }
    live = { httpStatus: r.status, code: j.code ?? null, message: j.message ?? null }
  } catch (e) {
    live = { error: e instanceof Error ? e.message : 'fetch failed' }
  }

  return NextResponse.json({
    baseUrlUsed: base,
    baseUrlEnvSet: baseEnv || '(not set → default)',
    channel,
    accountNumberLoaded: account || '(empty)',
    accountSha16: sha(account),
    pubKeyLen: pubKey.length,
    pubKeySha16: sha(pubKey),
    liveChargeCheck: live,
    note: 'Compare accountSha16 / pubKeySha16 to the known-good local hashes. liveChargeCheck TP14 = good, AIN01 = bad creds, anything else = base/channel issue.',
  })
}
