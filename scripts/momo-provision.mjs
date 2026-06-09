#!/usr/bin/env node
/**
 * MTN MoMo — create an API User + API Key from a subscription key.
 *
 * The MoMo "Collection" subscription page only shows the Primary/Secondary
 * *subscription* keys. The API User (a UUID) and API Key are separate and are
 * created via the provisioning endpoints below. This script does that and
 * prints the env values to paste into .env.local / Vercel.
 *
 * Usage:
 *   node scripts/momo-provision.mjs <SUBSCRIPTION_KEY> [BASE_URL] [CALLBACK_HOST]
 *
 *   SUBSCRIPTION_KEY  Primary key from the Collection product subscription
 *   BASE_URL          default https://sandbox.momodeveloper.mtn.com
 *                     production: https://proxy.momoapi.mtn.com
 *   CALLBACK_HOST     provider callback host (domain only, no scheme),
 *                     default "example.com"
 *
 * Examples:
 *   # Sandbox (self-serve provisioning works out of the box)
 *   node scripts/momo-provision.mjs YOUR_PRIMARY_KEY
 *
 *   # Production base
 *   node scripts/momo-provision.mjs YOUR_PRIMARY_KEY https://proxy.momoapi.mtn.com yourdomain.com
 *
 * NOTE: In production (MTN Ghana) the API User is often issued by MTN during
 * onboarding rather than self-provisioned. If these calls return 401/403 on the
 * production host, get the API User from MTN and only generate the API Key.
 */

import { randomUUID } from 'node:crypto'

const [, , subKey, baseArg, callbackArg] = process.argv

if (!subKey) {
  console.error('Usage: node scripts/momo-provision.mjs <SUBSCRIPTION_KEY> [BASE_URL] [CALLBACK_HOST]')
  process.exit(1)
}

const BASE = (baseArg || 'https://sandbox.momodeveloper.mtn.com').replace(/\/$/, '')
const CALLBACK_HOST = callbackArg || 'example.com'
const apiUser = randomUUID()

async function main() {
  // 1) Create the API user (keyed by the UUID we pass as X-Reference-Id).
  const createRes = await fetch(`${BASE}/v1_0/apiuser`, {
    method: 'POST',
    headers: {
      'X-Reference-Id': apiUser,
      'Ocp-Apim-Subscription-Key': subKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ providerCallbackHost: CALLBACK_HOST }),
  })
  if (createRes.status !== 201) {
    const body = await createRes.text().catch(() => '')
    console.error(`Create API user failed (${createRes.status}): ${body}`)
    process.exit(1)
  }

  // 2) Generate an API key for that user.
  const keyRes = await fetch(`${BASE}/v1_0/apiuser/${apiUser}/apikey`, {
    method: 'POST',
    headers: { 'Ocp-Apim-Subscription-Key': subKey },
  })
  if (!keyRes.ok) {
    const body = await keyRes.text().catch(() => '')
    console.error(`Generate API key failed (${keyRes.status}): ${body}`)
    process.exit(1)
  }
  const { apiKey } = await keyRes.json()

  console.log('\n✅ MoMo API credentials created. Paste these into .env.local (and Vercel):\n')
  console.log(`MOMO_SUBSCRIPTION_KEY=${subKey}`)
  console.log(`MOMO_API_USER=${apiUser}`)
  console.log(`MOMO_API_KEY=${apiKey}`)
  console.log(`MOMO_BASE_URL=${BASE}`)
  console.log(`MOMO_TARGET_ENVIRONMENT=${BASE.includes('sandbox') ? 'sandbox' : 'mtnghana'}\n`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
