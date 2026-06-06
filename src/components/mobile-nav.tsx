"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Radio, Search, Ticket, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlobalSearch } from "./global-search";

const ITEMS = [
  { href: "/", label: "Sports", icon: Home },
  { href: "/live", label: "Live", icon: Radio, badge: "12" },
  { href: "__search", label: "Search", icon: Search },
  { href: "/my-bets", label: "My Bets", icon: Ticket, badge: "1" },
  { href: "/account", label: "Account", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="xl:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-[var(--color-line)] pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-5 h-[60px]">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            const active = it.href !== "__search" && (it.href === "/" ? pathname === "/" : pathname.startsWith(it.href));
            const content = (
              <span className="relative flex flex-col items-center justify-center gap-1 h-full">
                <span className="relative">
                  <Icon size={20} className={cn(active ? "text-[var(--color-violet)]" : "text-[var(--color-ink-faint)]")} strokeWidth={active ? 2.4 : 2} />
                  {it.badge && (
                    <span className="absolute -top-1.5 -right-2 num text-[8px] font-bold grad-violet-pink text-white rounded-full min-w-[14px] h-[14px] grid place-items-center px-0.5">
                      {it.badge}
                    </span>
                  )}
                </span>
                <span className={cn("text-[9.5px] font-semibold", active ? "text-white" : "text-[var(--color-ink-faint)]")}>{it.label}</span>
                {active && <span className="absolute top-0 w-8 h-[2px] rounded-full grad-violet-pink" />}
              </span>
            );
            if (it.href === "__search") {
              return (
                <button key={it.label} onClick={() => setSearchOpen(true)}>
                  {content}
                </button>
              );
            }
            return (
              <Link key={it.label} href={it.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </nav>
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
