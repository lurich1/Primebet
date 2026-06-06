"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Plus, ChevronDown, Wallet, User, Menu } from "lucide-react";
import { Brand } from "./brand";
import { cn, fmt } from "@/lib/utils";
import { GlobalSearch } from "./global-search";

const NAV = [
  { href: "/", label: "Sports", icon: "🏠" },
  { href: "/live", label: "Live", icon: "🔴", badge: "12" },
  { href: "/my-bets", label: "My Bets", icon: "🎫", badge: "1" },
  { href: "/bet-history", label: "History", icon: "📜" },
  { href: "/verify", label: "Verify", icon: "🎟️" },
];

export function TopBar({ onMenu }: { onMenu?: () => void }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-40 glass border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-[1600px] flex items-center gap-3 px-3 sm:px-5 h-[60px]">
          {/* mobile menu */}
          <button onClick={onMenu} className="lg:hidden text-[var(--color-ink-dim)] hover:text-white p-1 -ml-1">
            <Menu size={22} />
          </button>

          <Brand />

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 ml-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-semibold transition-colors",
                  isActive(n.href)
                    ? "text-white bg-[var(--color-surface-2)]"
                    : "text-[var(--color-ink-dim)] hover:text-white hover:bg-white/5",
                )}
              >
                <span className="text-[13px]">{n.icon}</span>
                {n.label}
                {n.badge && (
                  <span className="num text-[9px] font-bold grad-violet-pink text-white rounded-full min-w-[16px] h-4 grid place-items-center px-1">
                    {n.badge}
                  </span>
                )}
                {isActive(n.href) && (
                  <span className="absolute -bottom-[1px] left-3 right-3 h-[2px] rounded-full grad-violet-pink" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex-1" />

          {/* search */}
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden sm:flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-[var(--color-ink-faint)] hover:border-[var(--color-line-2)] transition-colors w-[180px]"
          >
            <Search size={15} />
            <span className="text-[12px]">Search…</span>
          </button>

          {/* deposit */}
          <Link
            href="/account"
            className="hidden sm:flex items-center gap-1.5 rounded-lg grad-violet-pink text-white px-3.5 py-2 font-display font-bold text-[13px] shadow-[0_6px_20px_-8px_rgba(236,72,153,.6)] hover:brightness-110 transition"
          >
            <Plus size={15} /> Deposit
          </Link>

          {/* wallet */}
          <Link
            href="/account"
            className="hidden md:flex items-center gap-2 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 hover:border-[var(--color-line-2)] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-emerald)] shadow-[0_0_8px_var(--color-emerald)]" />
            <div className="flex flex-col leading-tight">
              <span className="text-[8.5px] uppercase tracking-wide text-[var(--color-ink-faint)]">Balance</span>
              <span className="num text-[12.5px] font-bold">GH₵ {fmt(3240)}</span>
            </div>
          </Link>

          {/* profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-1 rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-1.5 pr-2 hover:border-[var(--color-line-2)] transition-colors"
            >
              <span className="grid place-items-center w-7 h-7 rounded-md grad-violet-pink text-white font-display font-bold text-[12px]">KA</span>
              <ChevronDown size={14} className="text-[var(--color-ink-faint)]" />
            </button>
            {profileOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-52 card p-1.5 animate-rise shadow-2xl">
                  <ProfileItem href="/account" icon={<User size={15} />} label="Account" />
                  <ProfileItem href="/account" icon={<Wallet size={15} />} label="Deposit / Withdraw" />
                  <ProfileItem href="/transactions" icon="📄" label="Transactions" />
                  <ProfileItem href="/bet-history" icon="🎟️" label="Bet History" />
                  <div className="h-px bg-[var(--color-line)] my-1.5" />
                  <ProfileItem href="/login" icon="⏻" label="Logout" danger />
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function ProfileItem({
  href, icon, label, danger,
}: { href: string; icon: React.ReactNode; label: string; danger?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-medium transition-colors",
        danger ? "text-[var(--color-rose)] hover:bg-[var(--color-rose)]/10" : "text-[var(--color-ink-dim)] hover:text-white hover:bg-white/5",
      )}
    >
      <span className="w-4 grid place-items-center">{icon}</span>
      {label}
    </Link>
  );
}
