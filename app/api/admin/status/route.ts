import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface QuotaInfo {
  ok: boolean
  remaining: number | null
  used: number | null
  status: number
  message?: string
}

async function probeOddsApi(apiKey: string): Promise<QuotaInfo> {
  try {
    const res = await fetch(`https://api.the-odds-api.com/v4/sports/?apiKey=${apiKey}`, {
      cache: 'no-store',
    })
    const remaining = res.headers.get('x-requests-remaining')
    const used = res.headers.get('x-requests-used')
    return {
      ok: res.ok,
      remaining: remaining ? parseInt(remaining, 10) : null,
      used: used ? parseInt(used, 10) : null,
      status: res.status,
      message: res.ok ? undefined : await res.text().catch(() => undefined),
    }
  } catch (e) {
    return {
      ok: false,
      remaining: null,
      used: null,
      status: 0,
      message: e instanceof Error ? e.message : String(e),
    }
  }
}

export async function GET() {
  const oddsKeySet = !!process.env.ODDS_API_KEY
  const adminPwSet = !!process.env.ADMIN_PASSWORD

  const oddsApi = oddsKeySet
    ? await probeOddsApi(process.env.ODDS_API_KEY as string)
    : { ok: false, remaining: null, used: null, status: 0, message: 'no key' }

  return NextResponse.json({
    env: {
      odds_api_key: oddsKeySet,
      admin_password: adminPwSet,
      node_env: process.env.NODE_ENV ?? 'development',
    },
    oddsApi,
  })
}
