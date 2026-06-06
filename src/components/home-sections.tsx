"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { promos, stats } from "@/lib/data";
import type { Match } from "@/lib/types";
import { useSlip } from "@/lib/store";
import { TeamBadge } from "./brand";
import { cn } from "@/lib/utils";

const TONE: Record<string, string> = {
  violet: "from-[#7c3aed]/30 to-[#ec4899]/10 border-[#8b5cf6]/30",
  cyan: "from-[#0891b2]/30 to-[#22d3ee]/10 border-[#22d3ee]/30",
  emerald: "from-[#059669]/30 to-[#34d399]/10 border-[#34d399]/30",
  gold: "from-[#d97706]/30 to-[#fbbf24]/10 border-[#fbbf24]/30",
};

export function PromoStrip() {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0 pb-1">
      {promos.map((p, i) => (
        <Link
          key={i}
          href="/account"
          className={cn(
            "group relative shrink-0 w-[230px] sm:w-[260px] rounded-2xl border bg-gradient-to-br p-4 overflow-hidden card-hover",
            TONE[p.tone],
          )}
        >
          <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition" />
          <div className="relative">
            <div className="text-[11px] font-semibold text-white/80">{p.eyebrow}</div>
            <div className="font-display font-extrabold text-[17px] mt-1.5 leading-tight">{p.title}</div>
            <div className="text-[11.5px] text-[var(--color-ink-dim)] mt-1">{p.sub}</div>
            <div className="flex items-center gap-1 mt-3 text-[12px] font-bold text-white">
              {p.cta} <ArrowRight size={13} className="group-hover:translate-x-0.5 transition" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function StatRibbon() {
  return (
    <div className="flex gap-2.5 overflow-x-auto no-scrollbar mt-4">
      <Link
        href="/verify"
        className="shrink-0 flex items-center gap-2 rounded-xl border border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/8 px-3.5 py-2.5 hover:bg-[var(--color-cyan)]/15 transition"
      >
        <span className="text-[15px]">🎟️</span>
        <span className="font-display font-bold text-[12.5px] text-[var(--color-cyan)]">Verify Tickets</span>
      </Link>
      {stats.map((s, i) => (
        <div key={i} className="shrink-0 flex items-center gap-2.5 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-3.5 py-2.5">
          <span className="num text-[15px] font-extrabold">{s.val}</span>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] text-[var(--color-ink-dim)] whitespace-nowrap">{s.label}</span>
            <span className={cn("num text-[10px] font-bold", s.up ? "text-[var(--color-emerald)]" : "text-[var(--color-rose)]")}>
              {s.chg}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FeaturedMatch({ m }: { m: Match }) {
  const toggle = useSlip((s) => s.toggle);
  const sels = useSlip((s) => s.selections);
  const picks = [
    { label: "1", name: m.home, odds: m.markets[0].odds },
    { label: "X", name: "Draw", odds: m.markets[1].odds },
    { label: "2", name: m.away, odds: m.markets[2].odds },
  ];
  return (
    <div className="relative grad-border overflow-hidden mt-4">
      <div className="relative p-5 sm:p-6">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-[var(--color-violet)]/20 blur-3xl animate-[orb_14s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-[var(--color-pink)]/15 blur-3xl animate-[orb_18s_ease-in-out_infinite]" />
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 mb-5">
            <span className="chip px-2.5 py-1 grad-gold text-black font-bold border-transparent">⭐ FEATURED</span>
            <span className="flex items-center gap-1.5 chip px-2.5 py-1 bg-[var(--color-rose)]/12 border-[var(--color-rose)]/30 text-[var(--color-rose)]">
              <span className="live-dot" /> LIVE {m.minute}&apos;
            </span>
            <span className="text-[11.5px] text-[var(--color-ink-dim)] ml-auto">{m.leagueFlag} {m.league}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Link href={`/match/${m.id}`} className="flex flex-col items-center gap-2 flex-1 group">
              <TeamBadge short={m.homeShort} color={m.homeColor} size={56} />
              <span className="font-display font-bold text-[15px] text-center group-hover:text-[var(--color-violet)] transition">{m.home}</span>
            </Link>

            <div className="flex flex-col items-center px-2">
              <div className="num text-[34px] font-extrabold leading-none tracking-tight">
                {m.scoreHome}<span className="text-[var(--color-ink-faint)] mx-1.5">:</span>{m.scoreAway}
              </div>
              <span className="num text-[10px] text-[var(--color-rose)] font-bold mt-1.5">{m.minute}&apos; · 2ND HALF</span>
            </div>

            <Link href={`/match/${m.id}`} className="flex flex-col items-center gap-2 flex-1 group">
              <TeamBadge short={m.awayShort} color={m.awayColor} size={56} />
              <span className="font-display font-bold text-[15px] text-center group-hover:text-[var(--color-violet)] transition">{m.away}</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-2.5 mt-6">
            {picks.map((p) => {
              const id = `${m.id}-1x2-${p.label}`;
              const active = sels.some((x) => x.id === id);
              return (
                <button
                  key={p.label}
                  data-active={active}
                  onClick={() =>
                    toggle({ id, matchId: m.id, match: `${m.home} v ${m.away}`, market: "Match Result", pick: p.name, odds: p.odds })
                  }
                  className="odds-btn group/o flex items-center justify-between px-4 py-3"
                >
                  <span className="text-[12px] font-medium text-[var(--color-ink-dim)] group-data-[active=true]/o:text-white/80 truncate">{p.name}</span>
                  <span className="num text-[15px] font-bold">{p.odds.toFixed(2)}</span>
                </button>
              );
            })}
          </div>

          <Link href={`/match/${m.id}`} className="flex items-center justify-center gap-1.5 mt-4 text-[12px] font-semibold text-[var(--color-cyan)] hover:underline">
            View all {m.marketCount} markets <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
