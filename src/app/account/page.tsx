"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, ArrowDownToLine, History, Receipt, X, Check } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { transactions } from "@/lib/data";
import { TxnRow } from "@/components/txn-row";
import { cedis, cn } from "@/lib/utils";

const KPIS = [
  { icon: "🎯", tone: "gold", val: "42.5%", label: "Win Rate", trend: "↑ 2.1%", up: true },
  { icon: "📈", tone: "emerald", val: "+GH₵8.4K", label: "Total Won", trend: "↑ GH₵220", up: true },
  { icon: "🎲", tone: "cyan", val: "247", label: "Total Bets", trend: "—", up: true },
  { icon: "🔥", tone: "rose", val: "12", label: "Win Streak", trend: "best 18", up: true },
];

const METHODS = [
  { id: "mtn", name: "MTN MoMo", color: "#fbbf24", icon: "📱" },
  { id: "telecel", name: "Telecel Cash", color: "#ef4444", icon: "📲" },
  { id: "voda", name: "Vodafone Cash", color: "#dc2626", icon: "💳" },
];

export default function AccountPage() {
  const [modal, setModal] = useState<null | "deposit" | "withdraw">(null);

  return (
    <AppShell tabs={false}>
      {/* hero */}
      <div className="grad-border overflow-hidden">
        <div className="relative p-5 sm:p-6">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[var(--color-violet)]/15 blur-3xl" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="grid place-items-center w-16 h-16 rounded-2xl grad-violet-pink text-white font-display font-extrabold text-[22px]">KA</div>
              <div>
                <div className="text-[11px] text-[var(--color-ink-dim)]">Welcome back</div>
                <div className="font-display font-extrabold text-[19px]">Kwame Asante</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="chip px-2 py-0.5 bg-[var(--color-emerald)]/12 border-[var(--color-emerald)]/30 text-[var(--color-emerald)]">✓ Verified</span>
                  <span className="chip px-2 py-0.5 bg-[var(--color-amber)]/12 border-[var(--color-amber)]/30 text-[var(--color-amber)]">⭐ VIP Gold</span>
                </div>
              </div>
            </div>
            <div className="sm:ml-auto sm:text-right">
              <div className="text-[11px] text-[var(--color-ink-dim)]">Available Balance</div>
              <div className="num text-[30px] font-extrabold grad-text leading-tight">{cedis(3240)}</div>
              <div className="num text-[11px] text-[var(--color-amber)]">+{cedis(120)} Bonus</div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
            <Action onClick={() => setModal("deposit")} primary icon={<Plus size={16} />} label="Deposit" />
            <Action onClick={() => setModal("withdraw")} icon={<ArrowDownToLine size={16} />} label="Withdraw" />
            <ActionLink href="/bet-history" icon={<History size={16} />} label="Bet History" />
            <ActionLink href="/transactions" icon={<Receipt size={16} />} label="Transactions" />
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
        {KPIS.map((k) => (
          <div key={k.label} className="card p-4">
            <div className="flex items-center justify-between mb-3">
              <span className={cn("grid place-items-center w-9 h-9 rounded-xl text-[16px]",
                k.tone === "gold" && "bg-[var(--color-amber)]/12",
                k.tone === "emerald" && "bg-[var(--color-emerald)]/12",
                k.tone === "cyan" && "bg-[var(--color-cyan)]/12",
                k.tone === "rose" && "bg-[var(--color-rose)]/12",
              )}>{k.icon}</span>
              <span className={cn("num text-[10.5px] font-bold", k.up ? "text-[var(--color-emerald)]" : "text-[var(--color-rose)]")}>{k.trend}</span>
            </div>
            <div className="num text-[20px] font-extrabold">{k.val}</div>
            <div className="text-[11px] text-[var(--color-ink-dim)] mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>

      {/* recent activity */}
      <div className="card p-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <span className="title-bar" />
            <h2 className="font-display font-extrabold text-[15px]">Recent Activity</h2>
          </div>
          <Link href="/transactions" className="text-[11.5px] font-semibold text-[var(--color-cyan)] hover:underline">View all →</Link>
        </div>
        <div className="divide-y divide-[var(--color-line)]">
          {transactions.slice(0, 6).map((t) => (
            <TxnRow key={t.id} t={t} />
          ))}
        </div>
      </div>

      {modal && <PaymentModal type={modal} onClose={() => setModal(null)} />}
    </AppShell>
  );
}

function Action({ onClick, icon, label, primary }: { onClick: () => void; icon: React.ReactNode; label: string; primary?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12.5px] font-bold transition",
        primary ? "grad-violet-pink text-white shadow-[0_8px_24px_-8px_rgba(236,72,153,.5)] hover:brightness-110"
          : "border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white hover:border-[var(--color-line-2)]",
      )}
    >
      {icon} {label}
    </button>
  );
}

function ActionLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12.5px] font-bold border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white hover:border-[var(--color-line-2)] transition"
    >
      {icon} {label}
    </Link>
  );
}

function PaymentModal({ type, onClose }: { type: "deposit" | "withdraw"; onClose: () => void }) {
  const [method, setMethod] = useState("mtn");
  const [amount, setAmount] = useState("");
  const [done, setDone] = useState(false);
  const quick = type === "deposit" ? [50, 100, 200, 500] : [100, 200, 500, 1000];

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-[420px] card rounded-b-none sm:rounded-2xl animate-rise">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-line)]">
          <h3 className="font-display font-extrabold text-[16px] capitalize">{type}</h3>
          <button onClick={onClose} className="text-[var(--color-ink-faint)] hover:text-white"><X size={20} /></button>
        </div>

        {done ? (
          <div className="flex flex-col items-center text-center px-6 py-12">
            <div className="grid place-items-center w-16 h-16 rounded-full grad-emerald mb-4 shadow-[0_10px_36px_-8px_rgba(52,211,153,.6)]">
              <Check size={30} className="text-white" />
            </div>
            <h4 className="font-display font-extrabold text-[17px] capitalize">{type} Initiated</h4>
            <p className="text-[13px] text-[var(--color-ink-dim)] mt-1.5">
              {type === "deposit" ? "Approve the prompt on your phone to complete." : "Funds arrive in 5–10 minutes."}
            </p>
            <button onClick={onClose} className="mt-6 w-full rounded-xl py-3 font-display font-bold grad-violet-pink text-white text-sm">Done</button>
          </div>
        ) : (
          <div className="p-5 space-y-4">
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wide text-[var(--color-ink-faint)]">Payment Method</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {METHODS.map((mm) => (
                  <button
                    key={mm.id}
                    onClick={() => setMethod(mm.id)}
                    className={cn("flex flex-col items-center gap-1 rounded-xl border py-3 text-[10.5px] font-semibold transition",
                      method === mm.id ? "border-[var(--color-violet)]/60 bg-[var(--color-surface-2)] text-white glow-violet" : "border-[var(--color-line)] text-[var(--color-ink-dim)] hover:border-[var(--color-line-2)]",
                    )}
                  >
                    <span className="text-[20px]">{mm.icon}</span>
                    {mm.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase tracking-wide text-[var(--color-ink-faint)]">Amount</label>
              <div className="relative mt-2">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 num text-[13px] text-[var(--color-ink-faint)]">GH₵</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full num text-[18px] font-bold bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl pl-14 pr-3 py-3 outline-none focus:border-[var(--color-violet)]/60"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {quick.map((q) => (
                  <button key={q} onClick={() => setAmount(String(q))} className="num text-[12px] font-bold rounded-lg py-2 border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white transition">
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => parseFloat(amount) > 0 && setDone(true)}
              disabled={!(parseFloat(amount) > 0)}
              className="w-full rounded-xl py-3.5 font-display font-extrabold text-[14px] grad-violet-pink text-white disabled:opacity-50 active:scale-[.99] transition capitalize"
            >
              {type} {amount ? cedis(parseFloat(amount)) : ""}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
