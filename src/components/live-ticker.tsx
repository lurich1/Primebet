import { tickerItems } from "@/lib/data";

export function LiveTicker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="border-b border-[var(--color-line)] bg-[var(--color-bg-2)]/60">
      <div className="mx-auto max-w-[1600px] flex items-center h-9 overflow-hidden">
        <span className="shrink-0 flex items-center gap-1.5 px-3 sm:px-5 h-full bg-[var(--color-rose)]/10 border-r border-[var(--color-rose)]/20">
          <span className="live-dot" />
          <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-[var(--color-rose)]">LIVE</span>
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex items-center gap-8 whitespace-nowrap animate-[ticker_38s_linear_infinite] hover:[animation-play-state:paused] pl-8">
            {items.map((t, i) => (
              <span key={i} className="text-[12px] text-[var(--color-ink-dim)] font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
