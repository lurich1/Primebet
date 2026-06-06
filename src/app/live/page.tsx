"use client";

import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { MatchCard, SectionHead } from "@/components/match-card";
import { liveMatches } from "@/lib/data";
import { cn } from "@/lib/utils";

const TABS = ["All", "Football", "Basketball", "Tennis"];

export default function LivePage() {
  const [tab, setTab] = useState("All");

  return (
    <AppShell>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="title-bar" style={{ background: "linear-gradient(180deg,#f43f5e,#dc2626)" }} />
          <h1 className="font-display font-extrabold text-[18px]">Live In-Play</h1>
          <span className="flex items-center gap-1.5 num text-[10px] font-bold grad-violet-pink text-white px-2 py-1 rounded-md tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> {liveMatches.length} LIVE
          </span>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5">
        {TABS.map((t) => (
          <button key={t} data-active={tab === t} onClick={() => setTab(t)} className="chip shrink-0 px-4 py-1.5">
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {liveMatches.map((m) => (
          <MatchCard key={m.id} m={m} />
        ))}
        {/* duplicate a few to fill the live grid */}
        {liveMatches.map((m) => (
          <MatchCard key={m.id + "-b"} m={{ ...m, id: m.id + "b", minute: (m.minute ?? 0) + 5 }} />
        ))}
      </div>

      <SectionHead title="Starting Soon" more="Pre-match" href="/" />
      <p className={cn("text-[13px] text-[var(--color-ink-faint)]")}>
        12 more fixtures kick off in the next hour. Set a favourite to get notified.
      </p>
    </AppShell>
  );
}
