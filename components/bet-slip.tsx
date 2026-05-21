'use client'

import type { BetSelection } from '@/lib/types'
import { BetSlipPanel } from '@/components/bet-slip-panel'

interface BetSlipProps {
  selections: BetSelection[]
  onRemoveSelection: (selectionId: string) => void
  onClearAll: () => void
  onLoadSelections?: (selections: BetSelection[]) => void
}

export function BetSlip({
  selections,
  onRemoveSelection,
  onClearAll,
  onLoadSelections,
}: BetSlipProps) {
  return (
    <aside className="w-full bg-card border-l border-border max-h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
      <BetSlipPanel
        selections={selections}
        onRemoveSelection={onRemoveSelection}
        onClearAll={onClearAll}
        onLoadSelections={onLoadSelections}
      />
    </aside>
  )
}
