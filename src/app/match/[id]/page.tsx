"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Star, Share2 } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { getMatch } from "@/lib/data";
import { useSlip } from "@/lib/store";
import { TeamBadge } from "@/components/brand";
import { cn } from "@/lib/utils";

type MarketGroup = {
  title: string;
  picks: { label: string; odds: number }[];
  cols?: number;
};

function buildMarkets(home: string, away: string): MarketGroup[] {
  return [
    {
      title: "Match Result (1X2)",
      cols: 3,
      picks: [
        { label: home, odds: 2.1 },
        { label: "Draw", odds: 3.4 },
        { label: away, odds: 3.2 },
      ],
    },
    {
      title: "Double Chance",
      cols: 3,
      picks: [
        { label: `${home} or Draw`, odds: 1.32 },
        { label: "Home or Away", odds: 1.28 },
        { label: `${away} or Draw`, odds: 1.62 },
      ],
    },
    {
      title: "Total Goals (Over / Under)",
      cols: 2,
      picks: [
        { label: "Over 1.5", odds: 1.28 },
        { label: "Under 1.5", odds: 3.6 },
        { label: "Over 2.5", odds: 1.85 },
        { label: "Under 2.5", odds: 1.95 },
        { label: "Over 3.5", odds: 3.1 },
        { label: "Under 3.5", odds: 1.36 },
      ],
    },
    {
      title: "Both Teams To Score",
      cols: 2,
      picks: [
        { label: "Yes", odds: 1.72 },
        { label: "No", odds: 2.05 },
      ],
    },
    {
      title: "Draw No Bet",
      cols: 2,
      picks: [
        { label: home, odds: 1.55 },
        { label: away, odds: 2.35 },
      ],
    },
    {
      title: "Correct Score",
      cols: 3,
      picks: [
        { label: "2 - 1", odds: 8.5 },
        { label: "1 - 1", odds: 6.0 },
        { label: "2 - 0", odds: 9.5 },
        { label: "1 - 0", odds: 7.0 },
        { label: "3 - 1", odds: 12.0 },
        { label: "0 - 0", odds: 11.0 },
      ],
    },
  ];
}

const TABS = ["All", "Main", "Goals", "Halves", "Players", "Specials"];

export default function MatchDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const m = getMatch(id);
  const [tab, setTab] = useState("All");
  const { selections, toggle } = useSlip();

  if (!m) return notFound();
  const groups = buildMarkets(m.home, m.away);

  return (
    <AppShell tabs={false}>
      <Link href="/" className="inline-flex items-center gap-1 text-[13px] text-[var(--color-ink-dim)] hover:text-white mb-3 transition">
        <ChevronLeft size={16} /> Back to Sports
      </Link>

      {/* match header */}
      <div className="grad-border overflow-hidden">
        <div className="relative p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5 text-[12px] text-[var(--color-ink-dim)]">
            <span className="flex items-center gap-1.5">{m.leagueFlag} {m.league}</span>
            <div className="flex items-center gap-2">
              <button className="grid place-items-center w-8 h-8 rounded-lg border border-[var(--color-line)] hover:text-[var(--color-amber)] hover:border-[var(--color-amber)]/40 transition">
                <Star size={15} />
              </button>
              <button className="grid place-items-center w-8 h-8 rounded-lg border border-[var(--color-line)] hover:text-white transition">
                <Share2 size={15} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-2.5 flex-1">
              <TeamBadge short={m.homeShort} color={m.homeColor} size={60} />
              <span className="font-display font-bold text-[15px] text-center">{m.home}</span>
            </div>
            <div className="flex flex-col items-center">
              {m.live ? (
                <>
                  <div className="num text-[36px] font-extrabold leading-none">
                    {m.scoreHome}<span className="text-[var(--color-ink-faint)] mx-2">:</span>{m.scoreAway}
                  </div>
                  <span className="flex items-center gap-1.5 mt-2 num text-[11px] text-[var(--color-rose)] font-bold">
                    <span className="live-dot" /> {m.minute}&apos;
                  </span>
                </>
              ) : (
                <>
                  <div className="font-display text-[20px] font-bold text-[var(--color-ink-dim)]">VS</div>
                  <span className="num text-[11px] text-[var(--color-cyan)] font-semibold mt-2">{m.kickoff}</span>
                </>
              )}
            </div>
            <div className="flex flex-col items-center gap-2.5 flex-1">
              <TeamBadge short={m.awayShort} color={m.awayColor} size={60} />
              <span className="font-display font-bold text-[15px] text-center">{m.away}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-5 pt-4 border-t border-[var(--color-line)] text-center">
            <Stat label="Markets" value={`${m.marketCount}`} />
            <Stat label="Possession" value="58%" />
            <Stat label="Shots" value="12-7" />
            <Stat label="Corners" value="6-3" />
          </div>
        </div>
      </div>

      {/* market tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mt-5 sticky top-[60px] z-20 glass py-2 -mx-3 px-3 sm:mx-0 sm:px-0 sm:static sm:bg-transparent sm:backdrop-blur-none">
        {TABS.map((t) => (
          <button key={t} data-active={tab === t} onClick={() => setTab(t)} className="chip shrink-0 px-4 py-1.5">
            {t}
          </button>
        ))}
      </div>

      {/* market groups */}
      <div className="space-y-3 mt-3">
        {groups.map((g, gi) => (
          <div key={gi} className="card p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-[13.5px]">{g.title}</h3>
              <Star size={14} className="text-[var(--color-ink-faint)] hover:text-[var(--color-amber)] cursor-pointer transition" />
            </div>
            <div className={cn("grid gap-2", g.cols === 2 ? "grid-cols-2" : "grid-cols-3")}>
              {g.picks.map((p, pi) => {
                const sid = `${m.id}-${gi}-${pi}`;
                const active = selections.some((x) => x.id === sid);
                return (
                  <button
                    key={pi}
                    data-active={active}
                    onClick={() =>
                      toggle({ id: sid, matchId: m.id, match: `${m.home} v ${m.away}`, market: g.title, pick: p.label, odds: p.odds })
                    }
                    className="odds-btn group/o flex items-center justify-between gap-2 px-3 py-2.5"
                  >
                    <span className="text-[11.5px] font-medium text-[var(--color-ink-dim)] group-data-[active=true]/o:text-white/80 truncate">{p.label}</span>
                    <span className="num text-[13px] font-bold shrink-0">{p.odds.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="num text-[15px] font-bold">{value}</span>
      <span className="text-[10px] text-[var(--color-ink-faint)] uppercase tracking-wide">{label}</span>
    </div>
  );
}
