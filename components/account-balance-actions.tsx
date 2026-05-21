'use client'

import Link from 'next/link'
import { Eye, EyeOff, Wallet, Banknote } from 'lucide-react'

interface AccountBalanceActionsProps {
  balance: number
  currency?: string
  balanceHidden: boolean
  onToggleBalance: () => void
  depositHref?: string
  onWithdraw?: () => void
  className?: string
}

export function AccountBalanceActions({
  balance,
  currency = 'GHS',
  balanceHidden,
  onToggleBalance,
  depositHref = '/users/first-deposit',
  onWithdraw,
  className = '',
}: AccountBalanceActionsProps) {
  const formatted = `${currency} ${balance.toFixed(2)}`

  return (
    <section
      className={`rounded-b-2xl bg-[#1c1512] px-4 pt-4 pb-5 ${className}`}
      aria-label="Account balance and wallet actions"
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="text-sm text-white/60">Total Balance</span>
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xl sm:text-2xl font-bold text-white tabular-nums truncate">
            {balanceHidden ? '••••••' : formatted}
          </span>
          <button
            type="button"
            onClick={onToggleBalance}
            className="shrink-0 p-1 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={balanceHidden ? 'Show balance' : 'Hide balance'}
          >
            {balanceHidden ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          href={depositHref}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#2ecc71] hover:bg-[#27ae60] text-white font-bold text-base transition-colors shadow-sm"
        >
          <Wallet className="w-5 h-5" strokeWidth={2.25} />
          Deposit
        </Link>
        <button
          type="button"
          onClick={onWithdraw}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-[#2ecc71] bg-transparent text-[#2ecc71] hover:bg-[#2ecc71]/10 font-bold text-base transition-colors"
        >
          <Banknote className="w-5 h-5" strokeWidth={2.25} />
          Withdraw
        </button>
      </div>
    </section>
  )
}
