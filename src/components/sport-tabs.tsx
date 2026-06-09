"use client";

import { useState } from "react";
import { sports } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SportTabs() {
  const [active, setActive] = useState("football");
  return (
    <div className="border-b border-[var(--color-line)] bg-[var(--color-bg)]/40">
      <div className="mx-auto max-w-[1600px] flex items-center gap-1.5 px-3 sm:px-5 py-2.5 overflow-x-auto no-scrollbar">
        {sports.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={cn(
              "shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] font-semibold transition-colors border",
              active === s.id
                ? "bg-[var(--color-surface-2)] border-[var(--color-violet)]/40 text-white"
                : "border-transparent text-[var(--color-ink-dim)] hover:text-white hover:bg-white/5",
            )}
          >
            <span>{s.icon}</span>
            {s.name}
          </button>
        ))}
      </div>
    </div>
  );
}
