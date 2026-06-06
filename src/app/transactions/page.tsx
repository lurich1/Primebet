"use client";

import { useState } from "react";
import { Download, Filter } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { transactions } from "@/lib/data";
import { TxnRow } from "@/components/txn-row";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "all", label: "All" },
  { id: "deposit", label: "Deposits" },
  { id: "withdrawal", label: "Withdrawals" },
  { id: "winning", label: "Winnings" },
];

export default function TransactionsPage() {
  const [tab, setTab] = useState("all");
  const list = tab === "all" ? transactions : transactions.filter((t) => t.type === tab);

  return (
    <AppShell tabs={false}>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="title-bar" />
        <h1 className="font-display font-extrabold text-[18px]">Transactions</h1>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
        {TABS.map((t) => (
          <button key={t.id} data-active={tab === t.id} onClick={() => setTab(t.id)} className="chip shrink-0 px-4 py-1.5">
            {t.label}
          </button>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-line)] bg-[var(--color-bg-2)]">
          <span className="font-display font-bold text-[13px]">History</span>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 chip px-2.5 py-1.5"><Filter size={12} /> This Month</button>
            <button className="flex items-center gap-1.5 chip px-2.5 py-1.5"><Download size={12} /> Export</button>
          </div>
        </div>
        <div className="px-4 divide-y divide-[var(--color-line)]">
          {list.map((t) => (
            <TxnRow key={t.id} t={t} />
          ))}
          {list.length === 0 && (
            <div className="py-12 text-center text-[13px] text-[var(--color-ink-faint)]">No transactions in this category.</div>
          )}
        </div>
      </div>

      <button className={cn("w-full mt-5 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] py-3 text-[13px] font-semibold text-[var(--color-ink-dim)] hover:text-white transition")}>
        Load More
      </button>
    </AppShell>
  );
}
