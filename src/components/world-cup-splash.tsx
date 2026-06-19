"use client";

import { useEffect, useState } from "react";
import { Trophy, Zap, X, Globe } from "lucide-react";

// FIFA World Cup 2026 welcome splash — shown once per session on the home page.
// Tap anywhere (or the X / CTA) to dismiss.

const FLAGS = ["🇧🇷", "🇫🇷", "🇩🇪", "🇦🇷", "🇬🇧", "🇵🇹", "🇪🇸", "🇳🇱", "🇺🇸", "🇲🇽"];
const CONFETTI = [
  { left: "12%", top: "26%", color: "#ef4444" },
  { left: "30%", top: "18%", color: "#facc15" },
  { left: "48%", top: "30%", color: "#22d3ee" },
  { left: "66%", top: "16%", color: "#a855f7" },
  { left: "82%", top: "28%", color: "#34d399" },
  { left: "22%", top: "40%", color: "#60a5fa" },
  { left: "74%", top: "40%", color: "#f97316" },
  { left: "56%", top: "44%", color: "#ec4899" },
];

export function WorldCupSplash() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("wc-splash-seen")) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("wc-splash-seen", "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[80] grid place-items-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-[440px] overflow-hidden rounded-3xl border border-[var(--color-cyan)]/30 shadow-[0_0_60px_-10px_rgba(34,211,238,.35)] animate-rise">
        {/* Pitch backdrop */}
        <div className="absolute inset-0 bg-[var(--color-bg-2)]" />
        <div className="absolute inset-x-0 top-0 h-[46%] bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,.55),rgba(16,185,129,.12)_55%,transparent_75%)]" />
        {/* pitch markings */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 w-28 h-28 rounded-full border border-white/15" />
        <div className="absolute left-0 right-0 top-[40%] h-px bg-white/10" />
        {/* confetti */}
        {CONFETTI.map((c, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{ left: c.left, top: c.top, background: c.color, animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {/* footballs */}
        <span className="absolute left-[14%] top-[20%] text-2xl animate-[orb_9s_ease-in-out_infinite]">⚽</span>
        <span className="absolute right-[16%] top-[30%] text-xl animate-[orb_12s_ease-in-out_infinite]">⚽</span>
        <span className="absolute left-[40%] top-[12%] text-base opacity-80 animate-[orb_14s_ease-in-out_infinite]">⚽</span>

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 pt-4">
          <span className="flex items-center gap-1.5 rounded-lg border border-[var(--color-amber)]/40 bg-black/40 px-2.5 py-1">
            <span className="font-display font-extrabold text-[13px] tracking-tight">
              PLUSE<span className="grad-text">BET</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald)] animate-pulse" />
          </span>
          <button
            onClick={close}
            aria-label="Close"
            className="grid place-items-center w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white/80 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="relative px-6 pt-10 pb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)]/40 bg-[var(--color-amber)]/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[var(--color-amber)]">
            <Trophy size={13} /> FIFA WORLD CUP 2026
          </span>

          <h2 className="mt-4 font-display font-extrabold text-[34px] leading-none">
            <span className="bg-gradient-to-r from-[#34d399] to-[#22d3ee] bg-clip-text text-transparent">2026 World Cup</span>
          </h2>
          <p className="text-[13px] text-[var(--color-ink-dim)] mt-2">Join thousands of winners today</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2.5 mt-6">
            <Stat icon={<Globe size={18} className="text-[var(--color-cyan)]" />} value="32" label="Nations" />
            <Stat icon={<span className="text-[17px]">⚽</span>} value="64" label="Matches" />
            <Stat icon={<span className="text-[17px]">📊</span>} value="∞" label="Markets" />
          </div>

          {/* Flags */}
          <div className="flex items-center justify-center gap-1.5 mt-6 text-[18px]">
            {FLAGS.map((f, i) => (
              <span key={i}>{f}</span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={close}
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl py-4 font-display font-extrabold text-[15px] text-black grad-gold shadow-[0_12px_40px_-8px_rgba(250,204,21,.6)] active:scale-[.99] transition"
          >
            Place Your Bets Now <Zap size={17} className="fill-black" />
          </button>

          <p className="text-[11px] text-[var(--color-ink-faint)] mt-3">
            18+ only · Tap anywhere to close · Play responsibly
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 py-3 px-1">
      <div className="grid place-items-center h-6">{icon}</div>
      <div className="num text-[20px] font-extrabold text-[var(--color-amber)] mt-1">{value}</div>
      <div className="text-[9px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)] mt-0.5">{label}</div>
    </div>
  );
}
