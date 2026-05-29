// Paystack integration — covers Nigeria (NGN), Kenya (KES), South Africa (ZAR),
// and (optionally) Ghana (GHS) deposits.
//
// Flow:
//   1. Frontend POSTs to /api/payments/paystack/start with userId + amount.
//   2. We hit https://api.paystack.co/transaction/initialize, pass the user's
//      currency, and write a pending row to `payments` keyed on our reference.
//   3. User pays on Paystack's hosted page, then Paystack redirects back to
//      /api/payments/paystack/callback?reference=<ours>.
//   4. We verify with /transaction/verify/:reference. On success we call
//      applyDepositCredit() — same pipeline as the admin manual-credit flow,
//      so verification gates and sub-admin commissions fire automatically.
//
// Paystack expects amounts in the **smallest currency unit**:
//   - NGN, KES, GHS → kobo / cents / pesewas → multiply by 100.
//   - ZAR           → cents                  → multiply by 100.
// (All four supported currencies happen to use 100 minor units. If we ever
// add a zero-decimal currency we'll need a per-currency multiplier here.)

import type { CurrencyCode } from '@/lib/countries'

export interface PaystackInitResponse {
  authorization_url: string
  access_code: string
  reference: string
}

export interface PaystackVerifyResponse {
  reference: string
  amount: number // in smallest unit
  currency: string
  status: 'success' | 'failed' | 'abandoned' | string
  paid_at: string | null
  customer: { email: string }
}

function getSecretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY?.trim()
  if (!key) throw new Error('PAYSTACK_SECRET_KEY is not configured')
  return key
}

export function getPaystackPublicKey(): string | null {
  return process.env.PAYSTACK_PUBLIC_KEY?.trim() || null
}

/** Multiply major-unit (₦, KSh, R, ₵) into the smallest unit Paystack expects. */
export function toMinorUnits(amount: number, _currency: CurrencyCode): number {
  // All four supported currencies are 100-minor-unit.
  return Math.round(amount * 100)
}

/** Inverse of toMinorUnits — Paystack returns minor units on /verify. */
export function fromMinorUnits(amount: number, _currency: CurrencyCode): number {
  return +(amount / 100).toFixed(2)
}

export async function initialiseTransaction(input: {
  email: string
  amount: number // major units
  currency: CurrencyCode
  reference: string
  callbackUrl: string
  metadata?: Record<string, unknown>
}): Promise<PaystackInitResponse> {
  const res = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getSecretKey()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: input.email,
      amount: toMinorUnits(input.amount, input.currency),
      currency: input.currency,
      reference: input.reference,
      callback_url: input.callbackUrl,
      metadata: input.metadata ?? {},
    }),
    cache: 'no-store',
  })
  const body = (await res.json().catch(() => ({}))) as {
    status?: boolean
    message?: string
    data?: PaystackInitResponse
  }
  if (!res.ok || !body.status || !body.data) {
    throw new Error(
      `Paystack init failed: ${body.message ?? `HTTP ${res.status}`}`,
    )
  }
  return body.data
}

export async function verifyTransaction(
  reference: string,
): Promise<PaystackVerifyResponse> {
  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    {
      headers: { Authorization: `Bearer ${getSecretKey()}` },
      cache: 'no-store',
    },
  )
  const body = (await res.json().catch(() => ({}))) as {
    status?: boolean
    message?: string
    data?: PaystackVerifyResponse
  }
  if (!res.ok || !body.status || !body.data) {
    throw new Error(
      `Paystack verify failed: ${body.message ?? `HTTP ${res.status}`}`,
    )
  }
  return body.data
}
