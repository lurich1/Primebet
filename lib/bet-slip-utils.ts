import type { BetSelection, Match } from './types'

export const MARKET_1X2 = '1X2'

export function selectionId(matchId: string, marketKey: string, outcomeKey: string): string {
  return `${matchId}::${marketKey}::${outcomeKey}`
}

const OUTCOME_1X2_LABEL: Record<'home' | 'draw' | 'away', string> = {
  home: '1',
  draw: 'X',
  away: '2',
}

export function make1X2Selection(
  match: Match,
  outcome: 'home' | 'draw' | 'away',
): BetSelection {
  const odds = match.odds[outcome]
  const pickLabel =
    outcome === 'home' ? match.homeTeam : outcome === 'away' ? match.awayTeam : 'Draw'
  return {
    id: selectionId(match.id, MARKET_1X2, outcome),
    matchId: match.id,
    match,
    marketKey: MARKET_1X2,
    marketLabel: 'Match Result',
    outcomeKey: outcome,
    outcomeLabel: `${OUTCOME_1X2_LABEL[outcome]} — ${pickLabel}`,
    odds,
    selection: outcome,
  }
}

export interface MarketOutcome {
  matchId: string
  match: Match
  marketKey: string
  marketLabel: string
  outcomeKey: string
  outcomeLabel: string
  odds: number
}

export function makeMarketSelection(o: MarketOutcome): BetSelection {
  return {
    id: selectionId(o.matchId, o.marketKey, o.outcomeKey),
    matchId: o.matchId,
    match: o.match,
    marketKey: o.marketKey,
    marketLabel: o.marketLabel,
    outcomeKey: o.outcomeKey,
    outcomeLabel: o.outcomeLabel,
    odds: o.odds,
  }
}

/**
 * Toggle a selection in/out of the slip.
 * - Same matchId+marketKey but different outcome → replace (e.g. switching 1 to X).
 * - Exact same id → remove (toggle off).
 * - Otherwise → add.
 *
 * Different markets on the same match co-exist (e.g. 1X2 home + BTTS yes).
 */
export function toggleSelection(
  selections: BetSelection[],
  candidate: BetSelection,
): BetSelection[] {
  const sameMarketIdx = selections.findIndex(
    (s) => s.matchId === candidate.matchId && s.marketKey === candidate.marketKey,
  )
  if (sameMarketIdx === -1) {
    return [...selections, candidate]
  }
  const existing = selections[sameMarketIdx]
  if (existing.id === candidate.id) {
    return selections.filter((_, i) => i !== sameMarketIdx)
  }
  const next = [...selections]
  next[sameMarketIdx] = candidate
  return next
}

export function removeSelectionById(selections: BetSelection[], id: string): BetSelection[] {
  return selections.filter((s) => s.id !== id)
}

export function isSelected(
  selections: BetSelection[],
  matchId: string,
  marketKey: string,
  outcomeKey: string,
): boolean {
  const id = selectionId(matchId, marketKey, outcomeKey)
  return selections.some((s) => s.id === id)
}

/**
 * Backfill legacy BetSelection records (pre-multi-market) with id/marketKey/etc.
 * Older bets stored in JSON had only matchId/match/selection/odds.
 */
export function hydrateLegacySelection(s: BetSelection): BetSelection {
  if (s.id && s.marketKey) return s
  if (s.selection) {
    return make1X2Selection(s.match, s.selection)
  }
  return {
    ...s,
    id: s.id ?? selectionId(s.matchId, MARKET_1X2, 'home'),
    marketKey: s.marketKey ?? MARKET_1X2,
    marketLabel: s.marketLabel ?? 'Match Result',
    outcomeKey: s.outcomeKey ?? 'home',
    outcomeLabel: s.outcomeLabel ?? s.match.homeTeam,
  }
}
