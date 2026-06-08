import type { HtFtOdds, Match, MarketBook, OverUnderLine, ScoreOdds } from './domain-types'

const BOOKIE_MARGIN = 0.06 // applied to derived markets so they don't look "fair"
const MAX_GOALS = 6

function factorial(n: number): number {
  let r = 1
  for (let i = 2; i <= n; i++) r *= i
  return r
}

function poisson(lambda: number, k: number): number {
  if (lambda <= 0) return k === 0 ? 1 : 0
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k)
}

interface Probs {
  pHome: number
  pDraw: number
  pAway: number
}

function impliedProbs(home: number, draw: number, away: number): Probs {
  const ih = home > 0 ? 1 / home : 0
  const id = draw > 0 ? 1 / draw : 0
  const ia = away > 0 ? 1 / away : 0
  const total = ih + id + ia
  if (total <= 0) {
    return { pHome: 1 / 3, pDraw: 1 / 3, pAway: 1 / 3 }
  }
  return { pHome: ih / total, pDraw: id / total, pAway: ia / total }
}

/**
 * Recover Poisson goal expectancies (lambda_home, lambda_away) that reproduce
 * roughly the same 1X2 probabilities. Uses a small grid search — fast enough
 * for per-match derivation.
 */
function estimateLambdas(probs: Probs): { lh: number; la: number } {
  let best = { lh: 1.3, la: 1.1, err: Infinity }
  for (let lh = 0.2; lh <= 3.0; lh += 0.1) {
    for (let la = 0.2; la <= 3.0; la += 0.1) {
      const grid = scoreMatrix(lh, la)
      const p = aggregate1X2(grid)
      const err =
        Math.pow(p.pHome - probs.pHome, 2) +
        Math.pow(p.pDraw - probs.pDraw, 2) +
        Math.pow(p.pAway - probs.pAway, 2)
      if (err < best.err) best = { lh, la, err }
    }
  }
  return { lh: best.lh, la: best.la }
}

function scoreMatrix(lh: number, la: number): number[][] {
  const m: number[][] = []
  for (let h = 0; h <= MAX_GOALS; h++) {
    m[h] = []
    for (let a = 0; a <= MAX_GOALS; a++) {
      m[h][a] = poisson(lh, h) * poisson(la, a)
    }
  }
  return m
}

function aggregate1X2(grid: number[][]): Probs {
  let pHome = 0
  let pDraw = 0
  let pAway = 0
  for (let h = 0; h <= MAX_GOALS; h++) {
    for (let a = 0; a <= MAX_GOALS; a++) {
      const p = grid[h][a]
      if (h > a) pHome += p
      else if (h === a) pDraw += p
      else pAway += p
    }
  }
  return { pHome, pDraw, pAway }
}

function toOdds(p: number, margin = BOOKIE_MARGIN): number {
  if (p <= 0) return 99
  const padded = Math.min(0.98, p * (1 - margin))
  const raw = 1 / padded
  return Math.max(1.01, +raw.toFixed(2))
}

function correctScoreOdds(grid: number[][]): ScoreOdds[] {
  const items: ScoreOdds[] = []
  for (let h = 0; h <= MAX_GOALS; h++) {
    for (let a = 0; a <= MAX_GOALS; a++) {
      const p = grid[h][a]
      if (p < 0.005) continue
      items.push({ score: `${h}-${a}`, odds: toOdds(p, 0.1) })
    }
  }
  items.sort((x, y) => x.odds - y.odds)
  return items.slice(0, 18)
}

function overUnderOdds(grid: number[][]): OverUnderLine[] {
  const lines = [0.5, 1.5, 2.5, 3.5, 4.5]
  const result: OverUnderLine[] = []
  for (const line of lines) {
    let pOver = 0
    for (let h = 0; h <= MAX_GOALS; h++) {
      for (let a = 0; a <= MAX_GOALS; a++) {
        if (h + a > line) pOver += grid[h][a]
      }
    }
    result.push({ line, over: toOdds(pOver), under: toOdds(1 - pOver) })
  }
  return result
}

function bttsOdds(grid: number[][]): { yes: number; no: number } {
  let pYes = 0
  for (let h = 0; h <= MAX_GOALS; h++) {
    for (let a = 0; a <= MAX_GOALS; a++) {
      if (h >= 1 && a >= 1) pYes += grid[h][a]
    }
  }
  return { yes: toOdds(pYes), no: toOdds(1 - pYes) }
}

function doubleChanceOdds(probs: Probs): {
  homeOrDraw: number
  homeOrAway: number
  drawOrAway: number
} {
  return {
    homeOrDraw: toOdds(probs.pHome + probs.pDraw),
    homeOrAway: toOdds(probs.pHome + probs.pAway),
    drawOrAway: toOdds(probs.pDraw + probs.pAway),
  }
}

function halfTimeFullTimeOdds(grid: number[][]): HtFtOdds[] {
  /*
   * Approximate HT/FT: assume goal flow is roughly even across halves so the
   * HT probabilities are Poisson with lambdas/2. Combinations are derived by
   * independent HT and "second-half" Poissons (a common bookmaker shortcut).
   */
  const lhFull = sumColumn(grid, 'h')
  const laFull = sumColumn(grid, 'a')
  // Recover expected lambdas from the grid mean
  const lh = expectedFrom(lhFull)
  const la = expectedFrom(laFull)
  const htH = lh / 2
  const htA = la / 2

  const htGrid = scoreMatrix(htH, htA)
  const fhProbs = aggregate1X2(htGrid)

  const fhFull1X2 = aggregate1X2(grid)
  // P(FT outcome | HT outcome) — assume conditional independence given Poisson halves
  const combos: Array<{ ht: keyof Probs; ft: keyof Probs; code: string; label: string }> = [
    { ht: 'pHome', ft: 'pHome', code: 'H/H', label: 'Home / Home' },
    { ht: 'pHome', ft: 'pDraw', code: 'H/D', label: 'Home / Draw' },
    { ht: 'pHome', ft: 'pAway', code: 'H/A', label: 'Home / Away' },
    { ht: 'pDraw', ft: 'pHome', code: 'D/H', label: 'Draw / Home' },
    { ht: 'pDraw', ft: 'pDraw', code: 'D/D', label: 'Draw / Draw' },
    { ht: 'pDraw', ft: 'pAway', code: 'D/A', label: 'Draw / Away' },
    { ht: 'pAway', ft: 'pHome', code: 'A/H', label: 'Away / Home' },
    { ht: 'pAway', ft: 'pDraw', code: 'A/D', label: 'Away / Draw' },
    { ht: 'pAway', ft: 'pAway', code: 'A/A', label: 'Away / Away' },
  ]

  return combos.map((c) => {
    // Joint approx: P(HT=x and FT=y) ≈ P(HT=x) * P(FT=y) re-normalised so column sums to 1
    const p = fhProbs[c.ht] * fhFull1X2[c.ft]
    return { code: c.code, label: c.label, odds: toOdds(p, 0.12) }
  })
}

function sumColumn(grid: number[][], which: 'h' | 'a'): number[] {
  const out: number[] = []
  if (which === 'h') {
    for (let h = 0; h <= MAX_GOALS; h++) {
      let row = 0
      for (let a = 0; a <= MAX_GOALS; a++) row += grid[h][a]
      out.push(row)
    }
  } else {
    for (let a = 0; a <= MAX_GOALS; a++) {
      let col = 0
      for (let h = 0; h <= MAX_GOALS; h++) col += grid[h][a]
      out.push(col)
    }
  }
  return out
}

function expectedFrom(weights: number[]): number {
  let sum = 0
  let total = 0
  for (let i = 0; i < weights.length; i++) {
    sum += i * weights[i]
    total += weights[i]
  }
  return total > 0 ? sum / total : 0
}

function drawNoBetOdds(probs: Probs): { home: number; away: number } {
  const denom = probs.pHome + probs.pAway
  if (denom <= 0) return { home: 99, away: 99 }
  return {
    home: toOdds(probs.pHome / denom),
    away: toOdds(probs.pAway / denom),
  }
}

/**
 * Build a full market book for a soccer match by inferring goal expectancies
 * from its 1X2 odds and projecting every other market off the same Poisson model.
 */
export function deriveMarketBook(match: Match): MarketBook | null {
  const { home, draw, away } = match.odds
  // Only soccer-style matches (with a meaningful draw price) support these markets
  if (home <= 0 || away <= 0 || draw <= 0) return null

  const probs = impliedProbs(home, draw, away)
  const { lh, la } = estimateLambdas(probs)
  const grid = scoreMatrix(lh, la)

  const firstHalfGrid = scoreMatrix(lh / 2, la / 2)
  const firstHalfProbs = aggregate1X2(firstHalfGrid)

  return {
    matchWinner: { home, draw, away },
    doubleChance: doubleChanceOdds(probs),
    overUnder: overUnderOdds(grid),
    btts: bttsOdds(grid),
    correctScore: correctScoreOdds(grid),
    halfTimeFullTime: halfTimeFullTimeOdds(grid),
    firstHalf1X2: {
      home: toOdds(firstHalfProbs.pHome, 0.1),
      draw: toOdds(firstHalfProbs.pDraw, 0.1),
      away: toOdds(firstHalfProbs.pAway, 0.1),
    },
    drawNoBet: drawNoBetOdds(probs),
  }
}

/**
 * Merge any markets returned by the upstream odds API (totals, btts,
 * double_chance) into a derived book. API values win; derived values fill the gaps.
 */
export function mergeMarketBook(
  derived: MarketBook,
  apiPartial?: Partial<MarketBook>,
): MarketBook {
  if (!apiPartial) return derived
  const merged: MarketBook = {
    ...derived,
    ...apiPartial,
    doubleChance: apiPartial.doubleChance ?? derived.doubleChance,
    btts: apiPartial.btts ?? derived.btts,
    overUnder:
      apiPartial.overUnder && apiPartial.overUnder.length > 0
        ? mergeOverUnder(derived.overUnder, apiPartial.overUnder)
        : derived.overUnder,
    correctScore: derived.correctScore, // always derived
    halfTimeFullTime: derived.halfTimeFullTime, // always derived
    matchWinner: apiPartial.matchWinner ?? derived.matchWinner,
  }
  return merged
}

function mergeOverUnder(derived: OverUnderLine[], api: OverUnderLine[]): OverUnderLine[] {
  const map = new Map<number, OverUnderLine>()
  for (const d of derived) map.set(d.line, d)
  for (const a of api) map.set(a.line, a) // API overrides
  return [...map.values()].sort((a, b) => a.line - b.line)
}
