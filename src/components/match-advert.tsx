"use client";

import { useEffect, useState } from "react";
import { X, Zap } from "lucide-react";

// Promotional popup advertising featured FIFA World Cup 2026 matches. The
// matchup rotates every 2 minutes. Shows once per session on the home page;
// tap anywhere / X / CTA to dismiss.

const ROTATE_MS = 2 * 60 * 1000; // change the featured match every 2 minutes

const MATCHES = [
  {
    league: "World Cup",
    home: { name: "Switzerland", flag: "/flags/switzerland.svg" },
    away: { name: "Canada", flag: "/flags/canada.svg" },
    when: "Today · 12:00",
    odds: { home: "2.20", draw: "3.20", away: "2.95" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Brazil", flag: "🇧🇷" },
    away: { name: "Argentina", flag: "🇦🇷" },
    when: "Today · 8:00 PM",
    odds: { home: "2.10", draw: "3.30", away: "3.10" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "France", flag: "🇫🇷" },
    away: { name: "Spain", flag: "🇪🇸" },
    when: "Today · 9:00 PM",
    odds: { home: "2.45", draw: "3.25", away: "2.80" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Germany", flag: "🇩🇪" },
    away: { name: "Portugal", flag: "🇵🇹" },
    when: "Tomorrow · 7:30 PM",
    odds: { home: "2.60", draw: "3.20", away: "2.65" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Netherlands", flag: "🇳🇱" },
    away: { name: "USA", flag: "🇺🇸" },
    when: "Tomorrow · 9:00 PM",
    odds: { home: "1.95", draw: "3.40", away: "3.70" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Mexico", flag: "🇲🇽" },
    away: { name: "Belgium", flag: "🇧🇪" },
    when: "Sunday · 8:00 PM",
    odds: { home: "3.10", draw: "3.20", away: "2.20" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Italy", flag: "🇮🇹" },
    away: { name: "Croatia", flag: "🇭🇷" },
    when: "Monday · 7:30 PM",
    odds: { home: "2.30", draw: "3.10", away: "3.00" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Morocco", flag: "🇲🇦" },
    away: { name: "Uruguay", flag: "🇺🇾" },
    when: "Monday · 9:00 PM",
    odds: { home: "2.75", draw: "3.15", away: "2.55" },
  },
  {
    league: "FIFA World Cup 2026",
    home: { name: "Japan", flag: "🇯🇵" },
    away: { name: "Senegal", flag: "🇸🇳" },
    when: "Tuesday · 8:00 PM",
    odds: { home: "2.40", draw: "3.20", away: "2.85" },
  },
];

export function MatchAdvert() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    // Open on a time-based match so different visits land on different games.
    setIdx(Math.floor(Date.now() / ROTATE_MS) % MATCHES.length);
    try {
      if (!sessionStorage.getItem("ad-wc-seen")) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  // While the popup is open, advance to the next match every 2 minutes.
  useEffect(() => {
    if (!open) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % MATCHES.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("ad-wc-seen", "1");
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  const advert = MATCHES[idx];

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[80] grid place-items-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-[440px] overflow-hidden rounded-3xl border border-[var(--color-violet)]/30 shadow-[0_0_60px_-10px_rgba(139,92,246,.4)] animate-rise">
        {/* Pitch backdrop */}
        <div className="absolute inset-0 bg-[var(--color-bg-2)]" />
        <div className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,.5),rgba(16,185,129,.1)_55%,transparent_75%)]" />
        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 w-24 h-24 rounded-full border border-white/15" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-4 pt-4">
          <span className="flex items-center gap-1.5 rounded-lg border border-[var(--color-amber)]/40 bg-black/40 px-2.5 py-1">
            <span className="font-display font-extrabold text-[13px] tracking-tight">
              PLUSE<span className="grad-text">BET</span>
            </span>
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
        <div className="relative px-6 pt-5 pb-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-amber)]/40 bg-[var(--color-amber)]/10 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[var(--color-amber)]">
            🏆 WORLD CUP 2026
          </span>

          {/* Teams */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Team name={advert.home.name} flag={advert.home.flag} />
            <div className="flex flex-col items-center">
              <span className="font-display font-extrabold text-[22px] grad-text">VS</span>
            </div>
            <Team name={advert.away.name} flag={advert.away.flag} />
          </div>

          <p className="text-[12.5px] text-[var(--color-ink-dim)] mt-4">
            {advert.league} · <span className="text-white font-semibold">{advert.when}</span>
          </p>

          {/* Odds */}
          <div className="grid grid-cols-3 gap-2.5 mt-5">
            <Odd label="1" value={advert.odds.home} />
            <Odd label="X" value={advert.odds.draw} />
            <Odd label="2" value={advert.odds.away} />
          </div>

          {/* CTA */}
          <button
            onClick={close}
            className="mt-6 w-full flex items-center justify-center gap-2 rounded-2xl py-4 font-display font-extrabold text-[15px] text-black grad-gold shadow-[0_12px_40px_-8px_rgba(250,204,21,.6)] active:scale-[.99] transition"
          >
            Bet on {advert.home.name} vs {advert.away.name} <Zap size={17} className="fill-black" />
          </button>

          <p className="text-[11px] text-[var(--color-ink-faint)] mt-3">
            18+ only · Tap anywhere to close · Play responsibly
          </p>
        </div>
      </div>
    </div>
  );
}

function Team({ name, flag }: { name: string; flag: string }) {
  // Flags can be either an image path (downloaded SVG) or an emoji.
  const isImage = flag.startsWith("/") || flag.startsWith("http");
  return (
    <div className="flex flex-col items-center gap-2 w-[34%]">
      {isImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={flag}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-white/15 shadow-lg"
        />
      ) : (
        <span className="grid place-items-center w-16 h-16 rounded-full text-[38px] leading-none ring-2 ring-white/15 shadow-lg bg-black/30">
          {flag}
        </span>
      )}
      <span className="font-display font-extrabold text-[15px]">{name}</span>
    </div>
  );
}

function Odd({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)]/70 py-2.5">
      <div className="text-[10px] uppercase tracking-wide text-[var(--color-ink-faint)]">{label}</div>
      <div className="num text-[18px] font-extrabold text-[var(--color-cyan)] mt-0.5">{value}</div>
    </div>
  );
}
