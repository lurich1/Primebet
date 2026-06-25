import { NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/korapay'
import { verifyAndCreditKorapay } from '@/lib/korapay-credit'

export const dynamic = 'force-dynamic'

// Korapay server-to-server webhook. Envelope: { event, data }.
// Korapay signs HMAC-SHA256 over JSON.stringify(data) — ONLY the inner data
// object — keyed on the secret key, in the `x-korapay-signature` header.
//
// We verify the signature, then re-verify the charge against Korapay's API
// (verifyAndCreditKorapay) rather than trusting the webhook body's status.
// Idempotent: if the user-redirect callback already credited, this acks as a
// no-op. Always 200 on a valid signature so Korapay doesn't retry-storm us.
export async function POST(request: Request) {
  const secret = process.env.KORAPAY_SECRET_KEY?.trim()
  if (!secret) {
    return NextResponse.json({ ok: true, reason: 'webhook-disabled' })
  }

  let rawBody: string
  try {
    rawBody = await request.text()
  } catch {
    return NextResponse.json({ error: 'invalid body' }, { status: 400 })
  }

  let envelope: { event?: string; data?: Record<string, unknown> }
  try {
    envelope = JSON.parse(rawBody) as typeof envelope
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const data = envelope.data
  if (!data) {
    return NextResponse.json({ error: 'missing data' }, { status: 400 })
  }

  const headerSig = request.headers.get('x-korapay-signature') ?? ''
  if (!verifyWebhookSignature(data, headerSig)) {
    console.warn('[korapay/webhook] signature mismatch — rejecting')
    return NextResponse.json({ error: 'invalid signature' }, { status: 401 })
  }

  const reference = typeof data.reference === 'string' ? data.reference : ''
  if (!reference) {
    return NextResponse.json({ ok: true, reason: 'no-reference' })
  }

  // Only charge events lead to a credit. Ignore payout/refund events quietly.
  if (envelope.event && !envelope.event.startsWith('charge')) {
    return NextResponse.json({ ok: true, reason: `ignored:${envelope.event}` })
  }

  const result = await verifyAndCreditKorapay(reference)
  // Acknowledge with 200 for any recoverable outcome; Korapay retries on non-2xx.
  return NextResponse.json({ ok: result.ok, reason: result.status })
}
