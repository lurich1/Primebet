import { NextResponse } from 'next/server'
import { findPaymentByReference } from '@/lib/payments-store'
import { chargeMoolreDirect } from '@/lib/moolre'

export const dynamic = 'force-dynamic'

interface Body {
  reference?: string
  otpcode?: string
}

// Second step of the Moolre direct flow: the customer enters the SMS OTP and
// we re-submit the charge (same externalref) with the code to complete it.
export async function POST(request: Request) {
  let body: Body
  try {
    body = (await request.json()) as Body
  } catch {
    return NextResponse.json({ error: 'invalid json' }, { status: 400 })
  }

  const reference = (body.reference ?? '').trim()
  const otpcode = (body.otpcode ?? '').trim()
  if (!reference) return NextResponse.json({ error: 'reference required' }, { status: 400 })
  if (!otpcode) return NextResponse.json({ error: 'Enter the code sent to your phone.' }, { status: 400 })

  // Recover the original charge details from the pending payment row.
  const pending = await findPaymentByReference(reference)
  if (!pending) return NextResponse.json({ error: 'unknown reference' }, { status: 404 })
  if (pending.status === 'success') {
    return NextResponse.json({ status: 'already-credited' }, { status: 200 })
  }
  const payer = typeof pending.metadata?.momoPhone === 'string' ? pending.metadata.momoPhone : ''
  if (!payer) {
    return NextResponse.json({ error: 'payment context lost — start again' }, { status: 400 })
  }

  let charge = await chargeMoolreDirect({
    payer,
    amount: pending.amount,
    reference: 'Wallet topup',
    externalref: reference,
    currency: pending.currency,
    otpcode,
  })

  // TP17 = "Phone no. Verification Successful" — the OTP verified the number
  // but didn't debit. Re-submit WITH the same code to push past verification
  // into the actual collection + MoMo approval. (Re-submitting without the
  // code just re-triggers a new OTP.)
  if (charge.code === 'TP17') {
    charge = await chargeMoolreDirect({
      payer,
      amount: pending.amount,
      reference: 'Wallet topup',
      externalref: reference,
      currency: pending.currency,
      otpcode,
    })
  }

  const moolre = { code: charge.code, message: charge.message }
  console.log('[moolre/direct/otp] charge reply', { reference, ...moolre, ok: charge.ok })

  if (charge.otpInvalid) {
    return NextResponse.json(
      { status: 'otp-invalid', error: 'Incorrect or expired code. Please try again.', moolre },
      { status: 200 },
    )
  }
  // Still asking for OTP — the code didn't take.
  if (charge.otpRequired) {
    return NextResponse.json(
      { status: 'otp', error: 'Verification still pending — re-enter the code.', moolre },
      { status: 200 },
    )
  }
  if (!charge.ok) {
    return NextResponse.json(
      { status: 'failed', error: charge.message ?? 'Payment could not be completed.', moolre },
      { status: 200 },
    )
  }

  // OTP accepted — the collection is now in flight; the UI polls /status.
  return NextResponse.json({ status: 'pending', reference, moolre }, { status: 200 })
}
