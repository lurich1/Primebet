"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { BetCard } from "@/components/bet-card";
import { bets } from "@/lib/data";
import { cedis } from "@/lib/utils";

const TABS = ["All", "Won", "Lost", "Pending", "Cash Out"];
const MAP: Record<string, string> = { Won: "won", Lost: "lost", Pending: "pending", "Cash Out": "cashout" };

export default function BetHistoryPage() {
  const [tab, setTab] = useState("All");
  const list = tab === "All" ? bets : bets.filter((b) => b.status === MAP[tab]);
  const won = bets.filter((b) => b.status === "won").length;

  return (
    <AppShell tabs={false}>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="title-bar" />
        <h1 className="font-display font-extrabold text-[18px]">Bet History</h1>
      </div>

      {/* summary */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <Summary label="Total Staked" value={cedis(bets.reduce((a, b) => a + b.stake, 0))} />
        <Summary label="Settled Won" value={`${won}/${bets.length}`} tone="emerald" />
        <Summary label="Returns" value={cedis(bets.filter((b) => b.status === "won").reduce((a, b) => a + b.potential, 0))} tone="amber" />
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
        {TABS.map((t) => (
          <button key={t} data-active={tab === t} onClick={() => setTab(t)} className="chip shrink-0 px-4 py-1.5">
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((b) => (
          <BetCard key={b.id} b={b} />
        ))}
        {list.length === 0 && (
          <div className="card py-12 text-center text-[13px] text-[var(--color-ink-faint)]">No bets in this category.</div>
        )}
      </div>
    </AppShell>
  );
}

function Summary({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="card p-3.5">
      <div className="text-[10.5px] text-[var(--color-ink-dim)]">{label}</div>
      <div className={
        tone === "emerald" ? "num text-[16px] font-extrabold text-[var(--color-emerald)] mt-1"
        : tone === "amber" ? "num text-[16px] font-extrabold text-[var(--color-amber)] mt-1"
        : "num text-[16px] font-extrabold mt-1"
      }>{value}</div>
    </div>
  );
}
