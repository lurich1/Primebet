'use client'

import { useMemo, useState } from 'react'
import { ChevronDown, ChevronUp, Lock } from 'lucide-react'
import type { BetSelection, Match, MarketBook } from '@/lib/types'
import { isSelected, makeMarketSelection } from '@/lib/bet-slip-utils'

interface MarketsPanelProps {
  match: Match
  selections: BetSelection[]
  onToggle: (sel: BetSelection) => void
  /** If true, only the top markets render (compact card view). */
  compact?: boolean
  closed?: boolean
}

type GroupKey =
  | 'double_chance'
  | 'over_under'
  | 'btts'
  | 'correct_score'
  | 'ht_ft'
  | 'first_half'
  | 'draw_no_bet'

interface GroupDef {
  key: GroupKey
  label: string
  short: string
}

const ALL_GROUPS: GroupDef[] = [
  { key: 'double_chance', label: 'Double Chance', short: 'DC' },
  { key: 'over_under', label: 'Over / Under', short: 'O/U' },
  { key: 'btts', label: 'Both Teams to Score', short: 'GG/NG' },
  { key: 'correct_score', label: 'Correct Score', short: 'CS' },
  { key: 'ht_ft', label: 'Half Time / Full Time', short: 'HT/FT' },
  { key: 'first_half', label: '1st Half — 1X2', short: '1H' },
  { key: 'draw_no_bet', label: 'Draw No Bet', short: 'DNB' },
]

const COMPACT_GROUPS: GroupKey[] = [
  'over_under',
  'btts',
  'double_chance',
  'correct_score',
]

export function MarketsPanel({
  match,
  selections,
  onToggle,
  compact,
  closed,
}: MarketsPanelProps) {
  const markets = match.markets
  const groupsToShow = useMemo(() => {
    if (!markets) return []
    if (compact) return ALL_GROUPS.filter((g) => COMPACT_GROUPS.includes(g.key))
    return ALL_GROUPS
  }, [markets, compact])

  if (!markets) {
    return (
      <p className="text-xs text-muted-foreground py-3">No extra markets available.</p>
    )
  }

  return (
    <div className={compact ? 'space-y-2' : 'space-y-3'}>
      {groupsToShow.map((g) => (
        <MarketGroup
          key={g.key}
          group={g}
          markets={markets}
          match={match}
          selections={selections}
          onToggle={onToggle}
          closed={!!closed}
          defaultOpen={!!compact}
        />
      ))}
    </div>
  )
}

function MarketGroup({
  group,
  markets,
  match,
  selections,
  onToggle,
  closed,
  defaultOpen,
}: {
  group: GroupDef
  markets: MarketBook
  match: Match
  selections: BetSelection[]
  onToggle: (sel: BetSelection) => void
  closed: boolean
  defaultOpen: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-3 py-2 flex items-center justify-between gap-2 hover:bg-secondary/50 transition-colors"
      >
        <span className="text-xs sm:text-sm font-semibold text-foreground">
          {group.label}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>
      {open && (
        <div className="px-3 pb-3">
          <GroupContent
            group={group}
            markets={markets}
            match={match}
            selections={selections}
            onToggle={onToggle}
            closed={closed}
          />
        </div>
      )}
    </div>
  )
}

function GroupContent({
  group,
  markets,
  match,
  selections,
  onToggle,
  closed,
}: {
  group: GroupDef
  markets: MarketBook
  match: Match
  selections: BetSelection[]
  onToggle: (sel: BetSelection) => void
  closed: boolean
}) {
  switch (group.key) {
    case 'double_chance':
      return (
        <Row3
          items={[
            { outcomeKey: 'home_draw', label: '1X', odds: markets.doubleChance.homeOrDraw },
            { outcomeKey: 'home_away', label: '12', odds: markets.doubleChance.homeOrAway },
            { outcomeKey: 'draw_away', label: 'X2', odds: markets.doubleChance.drawOrAway },
          ]}
          marketKey="double_chance"
          marketLabel="Double Chance"
          match={match}
          selections={selections}
          onToggle={onToggle}
          closed={closed}
        />
      )
    case 'over_under':
      return (
        <div className="space-y-2">
          {markets.overUnder.map((line) => (
            <div key={line.line} className="space-y-1">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                Total {line.line}
              </p>
              <Row2
                items={[
                  {
                    outcomeKey: `over_${line.line}`,
                    label: `Over ${line.line}`,
                    odds: line.over,
                  },
                  {
                    outcomeKey: `under_${line.line}`,
                    label: `Under ${line.line}`,
                    odds: line.under,
                  },
                ]}
                marketKey={`over_under_${line.line}`}
                marketLabel={`Over/Under ${line.line}`}
                match={match}
                selections={selections}
                onToggle={onToggle}
                closed={closed}
              />
            </div>
          ))}
        </div>
      )
    case 'btts':
      return (
        <Row2
          items={[
            { outcomeKey: 'yes', label: 'Yes', odds: markets.btts.yes },
            { outcomeKey: 'no', label: 'No', odds: markets.btts.no },
          ]}
          marketKey="btts"
          marketLabel="Both Teams to Score"
          match={match}
          selections={selections}
          onToggle={onToggle}
          closed={closed}
        />
      )
    case 'correct_score':
      return (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {markets.correctScore.map((cs) => (
            <OutcomeButton
              key={cs.score}
              label={cs.score}
              odds={cs.odds}
              selected={isSelected(selections, match.id, 'correct_score', cs.score)}
              disabled={closed}
              onClick={() =>
                onToggle(
                  makeMarketSelection({
                    matchId: match.id,
                    match,
                    marketKey: 'correct_score',
                    marketLabel: 'Correct Score',
                    outcomeKey: cs.score,
                    outcomeLabel: `Score ${cs.score}`,
                    odds: cs.odds,
                  }),
                )
              }
            />
          ))}
        </div>
      )
    case 'ht_ft':
      return (
        <div className="grid grid-cols-3 gap-2">
          {markets.halfTimeFullTime.map((c) => (
            <OutcomeButton
              key={c.code}
              label={c.code}
              odds={c.odds}
              selected={isSelected(selections, match.id, 'ht_ft', c.code)}
              disabled={closed}
              onClick={() =>
                onToggle(
                  makeMarketSelection({
                    matchId: match.id,
                    match,
                    marketKey: 'ht_ft',
                    marketLabel: 'HT/FT',
                    outcomeKey: c.code,
                    outcomeLabel: `HT/FT ${c.label}`,
                    odds: c.odds,
                  }),
                )
              }
            />
          ))}
        </div>
      )
    case 'first_half': {
      const fh = markets.firstHalf1X2
      if (!fh) return <p className="text-xs text-muted-foreground">Unavailable.</p>
      return (
        <Row3
          items={[
            { outcomeKey: 'home', label: '1', odds: fh.home },
            { outcomeKey: 'draw', label: 'X', odds: fh.draw },
            { outcomeKey: 'away', label: '2', odds: fh.away },
          ]}
          marketKey="first_half_1x2"
          marketLabel="1st Half — 1X2"
          match={match}
          selections={selections}
          onToggle={onToggle}
          closed={closed}
        />
      )
    }
    case 'draw_no_bet': {
      const dnb = markets.drawNoBet
      if (!dnb) return <p className="text-xs text-muted-foreground">Unavailable.</p>
      return (
        <Row2
          items={[
            { outcomeKey: 'home', label: `1 — ${shortenTeam(match.homeTeam)}`, odds: dnb.home },
            { outcomeKey: 'away', label: `2 — ${shortenTeam(match.awayTeam)}`, odds: dnb.away },
          ]}
          marketKey="draw_no_bet"
          marketLabel="Draw No Bet"
          match={match}
          selections={selections}
          onToggle={onToggle}
          closed={closed}
        />
      )
    }
    default:
      return null
  }
}

function shortenTeam(name: string): string {
  return name.length > 14 ? name.slice(0, 13) + '…' : name
}

interface RowItem {
  outcomeKey: string
  label: string
  odds: number
}

function Row2(props: RowProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {renderRow(props)}
    </div>
  )
}

function Row3(props: RowProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {renderRow(props)}
    </div>
  )
}

interface RowProps {
  items: RowItem[]
  marketKey: string
  marketLabel: string
  match: Match
  selections: BetSelection[]
  onToggle: (sel: BetSelection) => void
  closed: boolean
}

function renderRow({
  items,
  marketKey,
  marketLabel,
  match,
  selections,
  onToggle,
  closed,
}: RowProps) {
  return items.map((item) => (
    <OutcomeButton
      key={item.outcomeKey}
      label={item.label}
      odds={item.odds}
      selected={isSelected(selections, match.id, marketKey, item.outcomeKey)}
      disabled={closed || item.odds <= 1}
      onClick={() =>
        onToggle(
          makeMarketSelection({
            matchId: match.id,
            match,
            marketKey,
            marketLabel,
            outcomeKey: item.outcomeKey,
            outcomeLabel: `${marketLabel}: ${item.label}`,
            odds: item.odds,
          }),
        )
      }
    />
  ))
}

function OutcomeButton({
  label,
  odds,
  selected,
  disabled,
  onClick,
}: {
  label: string
  odds: number
  selected: boolean
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex flex-col items-center justify-center py-2 px-2 rounded-md text-xs transition-all min-h-[3rem] ${
        disabled
          ? 'bg-secondary/40 text-muted-foreground cursor-not-allowed opacity-60'
          : selected
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary hover:bg-odds text-foreground hover:text-primary-foreground'
      }`}
    >
      <span className="text-[10px] opacity-80 truncate max-w-full">{label}</span>
      <span className="font-bold tabular-nums text-sm">{odds.toFixed(2)}</span>
      {disabled && !selected && <Lock className="w-3 h-3 mt-0.5" />}
    </button>
  )
}
