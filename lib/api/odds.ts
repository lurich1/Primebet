import type { Match, MarketBook, OverUnderLine } from '@/lib/types'
import { deriveMarketBook, mergeMarketBook } from '@/lib/markets'

const ODDS_API_BASE = 'https://api.the-odds-api.com/v4'

const SPORT_KEYS: Record<string, string[]> = {
  football: [
    // Top 5 European leagues
    'soccer_epl',
    'soccer_spain_la_liga',
    'soccer_italy_serie_a',
    'soccer_germany_bundesliga',
    'soccer_france_ligue_one',
    // Other Europe
    'soccer_netherlands_eredivisie',
    'soccer_portugal_primeira_liga',
    'soccer_belgium_first_div',
    'soccer_turkey_super_league',
    'soccer_greece_super_league',
    'soccer_switzerland_superleague',
    'soccer_austria_bundesliga',
    'soccer_denmark_superliga',
    'soccer_norway_eliteserien',
    'soccer_sweden_allsvenskan',
    'soccer_poland_ekstraklasa',
    'soccer_efl_champ',
    'soccer_spl',
    // UEFA / international
    'soccer_uefa_champs_league',
    'soccer_uefa_europa_league',
    'soccer_uefa_europa_conference_league',
    'soccer_uefa_nations_league',
    'soccer_fifa_world_cup',
    // Americas
    'soccer_usa_mls',
    'soccer_mexico_ligamx',
    'soccer_brazil_campeonato',
    'soccer_argentina_primera_division',
    'soccer_chile_campeonato',
    'soccer_conmebol_copa_libertadores',
    'soccer_conmebol_copa_america',
    // Asia & Oceania
    'soccer_japan_j_league',
    'soccer_korea_kleague1',
    'soccer_china_superleague',
    'soccer_australia_aleague',
  ],
  basketball: ['basketball_nba', 'basketball_euroleague'],
  tennis: ['tennis_atp_aus_open_singles', 'tennis_wta_aus_open_singles'],
  baseball: ['baseball_mlb'],
  hockey: ['icehockey_nhl'],
  volleyball: [],
}

const SPORT_TITLE_TO_COUNTRY: Record<string, string> = {
  EPL: 'England',
  'EFL Championship': 'England',
  'Scottish Premiership': 'Scotland',
  'La Liga - Spain': 'Spain',
  'Serie A - Italy': 'Italy',
  'Bundesliga - Germany': 'Germany',
  'Ligue 1 - France': 'France',
  'Eredivisie - Netherlands': 'Netherlands',
  'Primeira Liga - Portugal': 'Portugal',
  'Belgium First Division A': 'Belgium',
  'Super Lig - Turkey': 'Turkey',
  'Super League - Greece': 'Greece',
  'Super League - Switzerland': 'Switzerland',
  'Bundesliga - Austria': 'Austria',
  'Superliga - Denmark': 'Denmark',
  'Eliteserien - Norway': 'Norway',
  'Allsvenskan - Sweden': 'Sweden',
  'Ekstraklasa - Poland': 'Poland',
  'UEFA Champions League': 'Europe',
  'UEFA Europa League': 'Europe',
  'UEFA Europa Conference League': 'Europe',
  'UEFA Nations League': 'Europe',
  'FIFA World Cup': 'International',
  'MLS - USA': 'USA',
  'Liga MX - Mexico': 'Mexico',
  'Brazil Série A': 'Brazil',
  'Primera División - Argentina': 'Argentina',
  'Primera División - Chile': 'Chile',
  'Copa Libertadores': 'South America',
  'Copa America': 'South America',
  'J League - Japan': 'Japan',
  'K League 1 - South Korea': 'South Korea',
  'Super League - China': 'China',
  'A-League - Australia': 'Australia',
  NBA: 'USA',
  EuroLeague: 'Europe',
  MLB: 'USA',
  NHL: 'USA',
}

interface OddsApiOutcome {
  name: string
  price: number
  point?: number
}
interface OddsApiMarket {
  key: string
  outcomes: OddsApiOutcome[]
}
interface OddsApiBookmaker {
  key: string
  title: string
  markets: OddsApiMarket[]
}
interface OddsApiEvent {
  id: string
  sport_key: string
  sport_title: string
  commence_time: string
  home_team: string
  away_team: string
  bookmakers: OddsApiBookmaker[]
}

function averageH2H(event: OddsApiEvent): { home: number; draw: number; away: number } {
  let homeSum = 0
  let drawSum = 0
  let awaySum = 0
  let homeN = 0
  let drawN = 0
  let awayN = 0

  for (const bm of event.bookmakers) {
    const market = bm.markets.find((m) => m.key === 'h2h')
    if (!market) continue
    for (const o of market.outcomes) {
      if (o.name === event.home_team) {
        homeSum += o.price
        homeN++
      } else if (o.name === event.away_team) {
        awaySum += o.price
        awayN++
      } else if (o.name.toLowerCase() === 'draw') {
        drawSum += o.price
        drawN++
      }
    }
  }

  return {
    home: homeN ? +(homeSum / homeN).toFixed(2) : 0,
    draw: drawN ? +(drawSum / drawN).toFixed(2) : 0,
    away: awayN ? +(awaySum / awayN).toFixed(2) : 0,
  }
}

function averageTotals(event: OddsApiEvent): OverUnderLine[] {
  const byLine = new Map<
    number,
    { overSum: number; overN: number; underSum: number; underN: number }
  >()

  for (const bm of event.bookmakers) {
    const market = bm.markets.find((m) => m.key === 'totals')
    if (!market) continue
    for (const o of market.outcomes) {
      if (o.point === undefined) continue
      const line = o.point
      const entry =
        byLine.get(line) ?? { overSum: 0, overN: 0, underSum: 0, underN: 0 }
      const dir = o.name.toLowerCase()
      if (dir === 'over') {
        entry.overSum += o.price
        entry.overN++
      } else if (dir === 'under') {
        entry.underSum += o.price
        entry.underN++
      }
      byLine.set(line, entry)
    }
  }

  return [...byLine.entries()]
    .filter(([, v]) => v.overN > 0 && v.underN > 0)
    .map(([line, v]) => ({
      line,
      over: +(v.overSum / v.overN).toFixed(2),
      under: +(v.underSum / v.underN).toFixed(2),
    }))
    .sort((a, b) => a.line - b.line)
}

function averageBtts(event: OddsApiEvent): { yes: number; no: number } | null {
  let yesSum = 0
  let yesN = 0
  let noSum = 0
  let noN = 0
  for (const bm of event.bookmakers) {
    const market = bm.markets.find((m) => m.key === 'btts')
    if (!market) continue
    for (const o of market.outcomes) {
      const v = o.name.toLowerCase()
      if (v === 'yes') {
        yesSum += o.price
        yesN++
      } else if (v === 'no') {
        noSum += o.price
        noN++
      }
    }
  }
  if (yesN === 0 || noN === 0) return null
  return { yes: +(yesSum / yesN).toFixed(2), no: +(noSum / noN).toFixed(2) }
}

function averageDoubleChance(
  event: OddsApiEvent,
): { homeOrDraw: number; homeOrAway: number; drawOrAway: number } | null {
  let hd = 0
  let hdN = 0
  let ha = 0
  let haN = 0
  let da = 0
  let daN = 0
  for (const bm of event.bookmakers) {
    const market = bm.markets.find((m) => m.key === 'double_chance')
    if (!market) continue
    for (const o of market.outcomes) {
      // odds-api labels double_chance outcomes as e.g. "Home/Draw" or team names
      const name = o.name.toLowerCase()
      if (name.includes('draw') && name.includes(event.home_team.toLowerCase())) {
        hd += o.price
        hdN++
      } else if (
        name.includes(event.home_team.toLowerCase()) &&
        name.includes(event.away_team.toLowerCase())
      ) {
        ha += o.price
        haN++
      } else if (name.includes('draw') && name.includes(event.away_team.toLowerCase())) {
        da += o.price
        daN++
      }
    }
  }
  if (hdN === 0 && haN === 0 && daN === 0) return null
  return {
    homeOrDraw: hdN ? +(hd / hdN).toFixed(2) : 0,
    homeOrAway: haN ? +(ha / haN).toFixed(2) : 0,
    drawOrAway: daN ? +(da / daN).toFixed(2) : 0,
  }
}

function apiPartialMarkets(event: OddsApiEvent): Partial<MarketBook> {
  const partial: Partial<MarketBook> = {}
  const totals = averageTotals(event)
  if (totals.length > 0) partial.overUnder = totals
  const btts = averageBtts(event)
  if (btts) partial.btts = btts
  const dc = averageDoubleChance(event)
  if (dc && (dc.homeOrDraw > 0 || dc.homeOrAway > 0 || dc.drawOrAway > 0)) {
    partial.doubleChance = dc
  }
  return partial
}

function toMatch(event: OddsApiEvent, sport: string): Match {
  const odds = averageH2H(event)
  const start = new Date(event.commence_time)
  const now = new Date()
  const isLive = start.getTime() < now.getTime()

  const base: Match = {
    id: event.id,
    league: event.sport_title,
    country: SPORT_TITLE_TO_COUNTRY[event.sport_title] ?? 'International',
    homeTeam: event.home_team,
    awayTeam: event.away_team,
    isLive,
    startTime: isLive
      ? undefined
      : start.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    startTimeISO: event.commence_time,
    minute: isLive ? `${Math.floor((now.getTime() - start.getTime()) / 60000)}'` : undefined,
    odds,
    sport,
  }

  const derived = deriveMarketBook(base)
  if (derived) {
    base.markets = mergeMarketBook(derived, apiPartialMarkets(event))
  }
  return base
}

/**
 * Comma-separated list of markets to request. Free plans only get h2h+totals;
 * higher tiers expose btts / double_chance. We ask for all of them — if the
 * tier doesn't support a market the API simply omits it from the response.
 */
const SOCCER_MARKETS = 'h2h,totals,btts,double_chance'
const DEFAULT_MARKETS = 'h2h,totals'

interface OddsApiScoreEntry {
  name: string
  score: string
}
interface OddsApiScore {
  id: string
  sport_key: string
  completed: boolean
  scores: OddsApiScoreEntry[] | null
}

/** Map of event-id → { home, away } parsed scores. */
type ScoreMap = Map<string, { home: number; away: number }>

async function fetchScoresForSport(
  sportKey: string,
  apiKey: string,
): Promise<ScoreMap> {
  const map: ScoreMap = new Map()
  try {
    // daysFrom=1 returns live + recently completed events in the last 24h.
    const url = `${ODDS_API_BASE}/sports/${sportKey}/scores/?apiKey=${apiKey}&daysFrom=1`
    const res = await fetch(url, { next: { revalidate: 30 } })
    if (!res.ok) return map
    const items = (await res.json()) as OddsApiScore[]
    for (const item of items) {
      if (!item.scores || item.scores.length < 2) continue
      // Match scores to home/away by the team name attached to each entry.
      // We don't know which entry is home up front, so we keep both.
      let home: number | null = null
      let away: number | null = null
      // The /scores endpoint doesn't directly tag home vs away, but the order
      // matches the upstream event order (home first, away second).
      const first = Number(item.scores[0]?.score)
      const second = Number(item.scores[1]?.score)
      if (Number.isFinite(first)) home = first
      if (Number.isFinite(second)) away = second
      if (home !== null && away !== null) map.set(item.id, { home, away })
    }
  } catch {
    // ignore — scores are best-effort, the odds list still renders
  }
  return map
}

async function fetchSport(sportKey: string, apiKey: string): Promise<OddsApiEvent[]> {
  const markets = sportKey.startsWith('soccer_') ? SOCCER_MARKETS : DEFAULT_MARKETS
  const url = `${ODDS_API_BASE}/sports/${sportKey}/odds/?apiKey=${apiKey}&regions=eu&markets=${markets}&oddsFormat=decimal`
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      throw new Error(`Odds API auth failed (${res.status}) — check ODDS_API_KEY`)
    }
    if (res.status === 429) {
      throw new Error('Odds API quota exceeded (429)')
    }
    // 422 commonly indicates an unsupported market on this plan — retry with h2h only
    if (res.status === 422) {
      const fallbackUrl = `${ODDS_API_BASE}/sports/${sportKey}/odds/?apiKey=${apiKey}&regions=eu&markets=h2h&oddsFormat=decimal`
      const r2 = await fetch(fallbackUrl, { next: { revalidate: 60 } })
      if (!r2.ok) return []
      return (await r2.json()) as OddsApiEvent[]
    }
    return []
  }
  return (await res.json()) as OddsApiEvent[]
}

export async function getMatchesForSport(sport: string): Promise<Match[]> {
  const apiKey = process.env.ODDS_API_KEY
  if (!apiKey) {
    throw new Error('ODDS_API_KEY missing')
  }
  const keys = SPORT_KEYS[sport] ?? []
  if (keys.length === 0) return []

  // Fetch odds and live scores for every sport key in parallel. Scores are
  // best-effort: if the /scores endpoint fails we just don't attach them.
  const [oddsResults, scoreResults] = await Promise.all([
    Promise.allSettled(keys.map((k) => fetchSport(k, apiKey))),
    Promise.allSettled(keys.map((k) => fetchScoresForSport(k, apiKey))),
  ])

  // Merge all per-sport-key score maps into one big eventId → score lookup.
  const allScores: ScoreMap = new Map()
  for (const r of scoreResults) {
    if (r.status !== 'fulfilled') continue
    for (const [id, sc] of r.value) allScores.set(id, sc)
  }

  const events = oddsResults.flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
  return events
    .map((e) => {
      const m = toMatch(e, sport)
      const score = allScores.get(e.id)
      if (score) {
        m.homeScore = score.home
        m.awayScore = score.away
      }
      return m
    })
    .filter((m) => m.odds.home > 0 && m.odds.away > 0)
    .sort((a, b) => {
      if (a.isLive !== b.isLive) return a.isLive ? -1 : 1
      return (a.startTime ?? '').localeCompare(b.startTime ?? '')
    })
}

export function supportedSports(): string[] {
  return Object.keys(SPORT_KEYS)
}
