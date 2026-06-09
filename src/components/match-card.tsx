"use client";

import Link from "next/link";
import { ChevronRight, BarChart3, Lock } from "lucide-react";
import type { Match } from "@/lib/types";
import { useSlip } from "@/lib/store";
import { TeamBadge } from "./brand";

const PICK_LABEL: Record<string, (m: Match) => string> = {
  "1": (m) => m.home,
  X: () => "Draw",
  "2": (m) => m.away,
};

function OddsCell({ m, idx }: { m: Match; idx: number }) {
  const mk = m.markets[idx];
  const id = `${m.id}-1x2-${mk.label}`;
  const has = useSlip((s) => s.selections.some((x) => x.id === id));
  const toggle = useSlip((s) => s.toggle);
  const locked = m.locked;
  return (
    <button
      data-active={has}
      disabled={locked}
      onClick={(e) => {
        e.preventDefault();
        if (locked) return;
        toggle({
          id,
          matchId: m.id,
          match: `${m.home} v ${m.away}`,
          market: "Match Result",
          pick: PICK_LABEL[mk.label](m),
          odds: mk.odds,
        });
      }}
      className="odds-btn group/odds flex flex-col items-center justify-center gap-0.5 py-2 px-1 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <span className="text-[10px] font-medium text-[var(--color-ink-faint)] group-data-[active=true]/odds:text-white/80">
        {mk.label}
      </span>
      <span className="num text-[13px]">{mk.odds.toFixed(2)}</span>
    </button>
  );
}

export function MatchCard({ m }: { m: Match }) {
  return (
    <div className="card card-hover group p-3.5 sm:p-4">
      <Link href={`/match/${m.id}`} className="block">
        {/* header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-[var(--color-ink-dim)]">
            <span className="text-sm">{m.leagueFlag}</span>
            <span className="text-[11px] font-medium truncate max-w-[140px]">{m.league}</span>
          </div>
          {m.live ? (
            <span className="flex items-center gap-1.5 rounded-full px-2 py-0.5 bg-[var(--color-rose)]/12 border border-[var(--color-rose)]/30 text-[var(--color-rose)]">
              <span className="live-dot" />
              <span className="num text-[10px] font-bold">{m.minute}&apos;</span>
            </span>
          ) : m.locked ? (
            <span className="flex items-center gap-1 rounded-full px-2 py-0.5 bg-[var(--color-surface-2)] border border-[var(--color-line)] text-[var(--color-ink-faint)]">
              <Lock size={9} />
              <span className="text-[9.5px] font-bold uppercase tracking-wide">{m.lockLabel ?? "Locked"}</span>
            </span>
          ) : (
            <span className="num text-[10.5px] text-[var(--color-ink-faint)]">{m.kickoff}</span>
          )}
        </div>

        {/* teams */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-2.5 min-w-0 flex-1">
            <div className="flex items-center gap-2.5">
              <TeamBadge short={m.homeShort} color={m.homeColor} size={32} logo={m.homeLogo} />
              <span className="font-display font-semibold text-[14px] truncate">{m.home}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <TeamBadge short={m.awayShort} color={m.awayColor} size={32} logo={m.awayLogo} />
              <span className="font-display font-semibold text-[14px] truncate">{m.away}</span>
            </div>
          </div>
          {m.live && (
            <div className="flex flex-col items-center gap-2.5 px-3">
              <span className="num text-[18px] font-extrabold leading-none">{m.scoreHome}</span>
              <span className="num text-[18px] font-extrabold leading-none">{m.scoreAway}</span>
            </div>
          )}
        </div>
      </Link>

      {/* odds + markets */}
      <div className="mt-3.5 flex items-center gap-2">
        <div className="grid grid-cols-3 gap-2 flex-1">
          <OddsCell m={m} idx={0} />
          <OddsCell m={m} idx={1} />
          <OddsCell m={m} idx={2} />
        </div>
        <Link
          href={`/match/${m.id}`}
          className="flex items-center gap-1 shrink-0 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface-2)] px-2.5 py-2 text-[var(--color-ink-dim)] hover:text-white hover:border-[var(--color-violet)]/40 transition-colors"
        >
          <BarChart3 size={13} />
          <span className="num text-[11px] font-bold">+{m.marketCount}</span>
          <ChevronRight size={13} className="opacity-60" />
        </Link>
      </div>
    </div>
  );
}

export function MatchRow({ m }: { m: Match }) {
  return <MatchCard m={m} />;
}

export function SectionHead({
  title,
  more,
  href,
  accent,
}: {
  title: string;
  more?: string;
  href?: string;
  accent?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-3 mt-6">
      <div className="flex items-center gap-2.5">
        <span className="title-bar" style={accent ? { background: accent } : undefined} />
        <h2 className="font-display font-extrabold text-[15px] tracking-tight">{title}</h2>
      </div>
      {more &&
        (href ? (
          <Link href={href} className="text-[11.5px] font-semibold text-[var(--color-cyan)] hover:underline">
            {more} →
          </Link>
        ) : (
          <span className="text-[11.5px] font-medium text-[var(--color-ink-faint)]">{more} →</span>
        ))}
    </div>
  );
}
