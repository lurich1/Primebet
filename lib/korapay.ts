// Server-side Korapay helpers. Never import in client code — the secret key
// would leak into the bundle. For the browser, use NEXT_PUBLIC_KORAPAY_PUBLIC_KEY.

const KORAPAY_API_BASE = 'https://api.korapay.com/merchant/api/v1'

export interface KorapayCharge {
  reference: string
  amount: number
  currency: string
  status: 'success' | 'processing' | 'failed' | 'pending' | string
  customer?: { email?: string; name?: string }
  metadata?: Record<string, unknown>
}

export interface VerifyResult {
  ok: boolean
  status?: string
  amount?: number
  currency?: string
  reference?: string
  metadata?: Record<string, unknown>
  error?: string
}

/**
 * Verify a Korapay transaction by reference using the secret key.
 * Always do this server-side before crediting a user — never trust the
 * inline checkout's onSuccess callback by itself.
 */
export async function verifyKorapayCharge(reference: string): Promise<VerifyResult> {
  const secret = process.env.KORAPAY_SECRET_KEY
  if (!secret) {
    return { ok: false, error: 'KORAPAY_SECRET_KEY not configured' }
  }
  if (!reference) {
    return { ok: false, error: 'reference required' }
  }

  try {
    const res = await fetch(
      `${KORAPAY_API_BASE}/charges/${encodeURIComponent(reference)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${secret}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    )
    const json = (await res.json().catch(() => ({}))) as {
      status?: boolean
      message?: string
      data?: KorapayCharge
    }
    if (!res.ok || !json.status || !json.data) {
      return { ok: false, error: json.message ?? `HTTP ${res.status}` }
    }
    const data = json.data
    return {
      ok: data.status === 'success',
      status: data.status,
      amount: data.amount,
      currency: data.currency,
      reference: data.reference,
      metadata: data.metadata,
    }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) }
  }
}

export function getMinFirstDeposit(): number {
  const raw = process.env.MIN_FIRST_DEPOSIT
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : 200
}
