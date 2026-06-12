"use client";

import { useEffect, useState } from "react";
import { liveClockLabel } from "@/lib/match-betting";

/**
 * A live, second-ticking match clock. The data feed only reports whole minutes,
 * so we derive the running seconds from the kickoff timestamp and re-render once
 * a second. Shows "81:20"-style time, "HT" during the break, "FT" at the end.
 * Falls back to the feed minute (e.g. "81'") when there's no kickoff timestamp.
 */
export function LiveClock({
  startTimeISO,
  sport,
  fallbackMinute,
  className,
}: {
  startTimeISO?: string;
  sport?: string;
  fallbackMinute?: number;
  className?: string;
}) {
  // Only run the live clock after mount so server and first client render match
  // (the clock depends on the current time, which differs between them).
  const [mounted, setMounted] = useState(false);
  const [, setTick] = useState(0);
  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fallback = fallbackMinute != null ? `${fallbackMinute}'` : "";
  const label = mounted
    ? liveClockLabel(startTimeISO, sport).label || fallback
    : fallback;

  return <span className={className}>{label}</span>;
}
