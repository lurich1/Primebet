"use client";

import { useState } from "react";
import { X, Trash2, Ticket, Zap, ShieldCheck, ChevronUp } from "lucide-react";
import { useSlip, totalOdds } from "@/lib/store";
import { cn, cedis } from "@/lib/utils";

const QUICK = [20, 50, 100, 500];

function SlipBody({ onPlaced }: { onPlaced?: () => void }) {
  const { selections, stake, remove, clear, setStake } = useSlip();
  const [placed, setPlaced] = useState(false);
  const odds = totalOdds(selections);
  const potential = stake * odds;
  const bonusPct = selections.length >= 5 ? 0.15 : selections.length >= 3 ? 0.08 : 0;
  const bonus = potential * bonusPct;

  if (placed) {
    return (
      <div className="flex flex-col items-center text-center px-5 py-10 animate-rise">
        <div className="grid place-items-center w-16 h-16 rounded-full grad-emerald mb-4 shadow-[0_10px_40px_-8px_rgba(52,211,153,.6)]">
          <ShieldCheck className="text-white" size={30} />
        </div>
        <h3 className="font-display font-extrabold text-lg">Bet Placed!</h3>
        <p className="text-[13px] text-[var(--color-ink-dim)] mt-1">
          Ticket <span className="num text-[var(--color-cyan)]">NW-{Math.floor(100000 + odds * 13337).toString(36).toUpperCase()}</span> confirmed.
        </p>
        <button
          onClick={() => { setPlaced(false); clear(); onPlaced?.(); }}
          className="mt-5 w-full rounded-xl py-3 font-display font-bold grad-violet-pink text-white text-sm"
        >
          Place Another
        </button>
      </div>
    );
  }

  if (selections.length === 0) {
    return (
      <div className="flex flex-col items-center text-center px-6 py-14">
        <div className="grid place-items-center w-14 h-14 rounded-2xl bg-[var(--color-surface-2)] border border-[var(--color-line)] mb-4">
          <Ticket className="text-[var(--color-ink-faint)]" size={24} />
        </div>
        <h3 className="font-display font-bold text-[15px]">Your bet slip is empty</h3>
        <p className="text-[12.5px] text-[var(--color-ink-faint)] mt-1.5 leading-relaxed">
          Tap any odds to add a selection. Combine picks to build an accumulator.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* selections */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-3 space-y-2">
        {selections.map((s) => (
          <div key={s.id} className="card p-3 animate-rise">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[11px] text-[var(--color-ink-faint)] truncate">{s.match}</div>
                <div className="font-display font-bold text-[13.5px] mt-0.5 truncate">{s.pick}</div>
                <div className="text-[10.5px] text-[var(--color-ink-dim)] mt-0.5">{s.market}</div>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="num text-[13px] font-bold text-[var(--color-cyan)]">{s.odds.toFixed(2)}</span>
                <button onClick={() => remove(s.id)} className="text-[var(--color-ink-faint)] hover:text-[var(--color-rose)] transition-colors">
                  <X size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
        <button onClick={clear} className="flex items-center gap-1.5 text-[11px] text-[var(--color-ink-faint)] hover:text-[var(--color-rose)] transition-colors mt-1">
          <Trash2 size={12} /> Clear all
        </button>
      </div>

      {/* footer */}
      <div className="border-t border-[var(--color-line)] p-3.5 bg-[var(--color-bg-2)] space-y-3">
        <div className="flex gap-2">
          {QUICK.map((q) => (
            <button
              key={q}
              onClick={() => setStake(q)}
              className={cn(
                "flex-1 num text-[11px] font-bold rounded-lg py-1.5 border transition-colors",
                stake === q
                  ? "grad-violet-pink text-white border-transparent"
                  : "bg-[var(--color-surface-2)] border-[var(--color-line)] text-[var(--color-ink-dim)] hover:text-white",
              )}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[11px] text-[var(--color-ink-faint)] num">GH₵</span>
          <input
            type="number"
            value={stake || ""}
            onChange={(e) => setStake(parseFloat(e.target.value) || 0)}
            placeholder="Enter stake"
            className="w-full num text-[15px] font-bold bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl pl-12 pr-3 py-3 outline-none focus:border-[var(--color-violet)]/60 focus:glow-violet transition"
          />
        </div>

        <div className="space-y-1.5 text-[12px]">
          <Row label={`${selections.length} selection${selections.length > 1 ? "s" : ""}`} value={`@ ${odds.toFixed(2)}`} />
          {bonus > 0 && (
            <Row
              label={<span className="flex items-center gap-1 text-[var(--color-amber)]"><Zap size={11} /> Acca boost +{bonusPct * 100}%</span>}
              value={`+${cedis(bonus)}`}
              valueClass="text-[var(--color-amber)]"
            />
          )}
          <div className="flex items-center justify-between pt-1.5 border-t border-[var(--color-line)]">
            <span className="text-[12px] text-[var(--color-ink-dim)]">Potential payout</span>
            <span className="num text-[16px] font-extrabold grad-text">{cedis(potential + bonus)}</span>
          </div>
        </div>

        <button
          onClick={() => stake > 0 && setPlaced(true)}
          disabled={stake <= 0}
          className="w-full rounded-xl py-3.5 font-display font-extrabold text-[14px] grad-violet-pink text-white shadow-[0_10px_30px_-8px_rgba(236,72,153,.5)] disabled:opacity-50 disabled:shadow-none active:scale-[.99] transition"
        >
          Place Bet · {cedis(stake)}
        </button>
      </div>
    </div>
  );
}

function Row({ label, value, valueClass }: { label: React.ReactNode; value: React.ReactNode; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[var(--color-ink-dim)]">{label}</span>
      <span className={cn("num font-semibold", valueClass)}>{value}</span>
    </div>
  );
}

/* Desktop right rail */
export function DesktopBetSlip() {
  const count = useSlip((s) => s.selections.length);
  return (
    <aside className="hidden xl:flex flex-col w-[340px] shrink-0 sticky top-[120px] h-[calc(100dvh-140px)]">
      <div className="card flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[var(--color-line)] bg-[var(--color-bg-2)]">
          <div className="flex items-center gap-2">
            <Ticket size={16} className="text-[var(--color-violet)]" />
            <span className="font-display font-extrabold text-[14px]">Bet Slip</span>
          </div>
          <span className="num text-[11px] font-bold grad-violet-pink text-white rounded-full min-w-[22px] h-[22px] grid place-items-center px-1.5">
            {count}
          </span>
        </div>
        <SlipBody />
      </div>
    </aside>
  );
}

/* Mobile bottom drawer */
export function MobileBetSlip() {
  const { selections, mobileOpen, setMobileOpen } = useSlip();
  const odds = totalOdds(selections);
  const count = selections.length;

  return (
    <>
      {/* collapsed bar */}
      {count > 0 && !mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="xl:hidden fixed bottom-[68px] left-3 right-3 z-40 flex items-center justify-between rounded-2xl px-4 py-3 grad-violet-pink text-white shadow-[0_12px_40px_-10px_rgba(236,72,153,.7)] animate-rise"
        >
          <span className="flex items-center gap-2 font-display font-bold text-[13px]">
            <span className="num bg-white/25 rounded-full min-w-[20px] h-5 grid place-items-center px-1.5 text-[11px]">{count}</span>
            Bet Slip
          </span>
          <span className="flex items-center gap-2 num text-[12px] font-bold">
            @ {odds.toFixed(2)} <ChevronUp size={16} />
          </span>
        </button>
      )}

      {/* drawer */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative card rounded-b-none max-h-[82dvh] flex flex-col animate-rise">
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-[var(--color-line)]">
              <span className="font-display font-extrabold text-[15px]">Bet Slip</span>
              <button onClick={() => setMobileOpen(false)} className="text-[var(--color-ink-dim)] hover:text-white">
                <X size={20} />
              </button>
            </div>
            <SlipBody onPlaced={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
