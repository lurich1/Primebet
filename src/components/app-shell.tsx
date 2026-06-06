"use client";

import { useState } from "react";
import { TopBar } from "./top-bar";
import { LiveTicker } from "./live-ticker";
import { SportTabs } from "./sport-tabs";
import { Sidebar, MobileSidebar } from "./sidebar";
import { DesktopBetSlip, MobileBetSlip } from "./bet-slip";
import { MobileNav } from "./mobile-nav";
import { SupportChat } from "./support-chat";

export function AppShell({
  children,
  betSlip = true,
  tabs = true,
}: {
  children: React.ReactNode;
  betSlip?: boolean;
  tabs?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh">
      <TopBar onMenu={() => setMenuOpen(true)} />
      <LiveTicker />
      {tabs && <SportTabs />}

      <div className="mx-auto max-w-[1600px] flex gap-0 lg:gap-5 px-0 lg:px-5">
        <Sidebar />
        <main className="flex-1 min-w-0 px-3 sm:px-4 lg:px-0 py-4 pb-28 xl:pb-8">
          {children}
        </main>
        {betSlip && <DesktopBetSlip />}
      </div>

      <MobileSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileBetSlip />
      <MobileNav />
      <SupportChat />
    </div>
  );
}
