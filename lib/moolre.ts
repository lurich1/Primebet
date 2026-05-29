// Moolre POS (hosted payment page) flow — Ghana only.
//
// Earlier we tried Moolre's `embed/src/start` API directly — that route
// requires a server-issued public key + merchant account number, both of
// which kept returning AIN01 "Authentication Error" against our credentials.
// The POS link is a simpler hosted page (https://pos.moolre.com/<slug>) that
// any customer can hit to send money to the merchant. It has two trade-offs
// the API call doesn't:
//
//   1. No per-user/per-amount context — the URL is fixed, so the customer
//      types their own amount on Moolre's page.
//   2. No callback — Moolre doesn't redirect back here, so credits aren't
//      automatic. Admin reconciles each deposit via /admin/players → Credit.
//
// We still record a `pending` payments row at /start so the admin can see
// the user's intent (who, how much, when) and credit them on confirmation.
//
// Non-Ghana users hit the Paystack flow instead — see lib/paystack.ts.

import { getMinFirstDeposit as countryMinFirstDeposit } from '@/lib/countries'

export function getMoolrePosUrl(): string | null {
  const url = process.env.MOOLRE_POS_URL?.trim()
  return url || null
}

/**
 * Ghana-only minimum first deposit. Other countries should call
 * `getMinFirstDeposit(country)` from `lib/countries.ts` directly.
 *
 * Kept as a thin wrapper for the existing call sites in the Moolre flow.
 */
export function getMinFirstDeposit(): number {
  // Env var MIN_FIRST_DEPOSIT (legacy, no country suffix) still overrides GH.
  const raw = process.env.MIN_FIRST_DEPOSIT
  const n = Number(raw)
  if (Number.isFinite(n) && n > 0) return n
  return countryMinFirstDeposit('GH')
}
