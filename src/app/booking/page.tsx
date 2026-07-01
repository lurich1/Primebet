"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Ticket, ArrowRight, Lock, X, Loader2 } from "lucide-react";
import { Brand } from "@/components/brand";
import { useSlip } from "@/lib/store";
import type { Selection } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function BookingPage() {
  const router = useRouter();
  const { clear, add, setMobileOpen } = useSlip();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const clean = code.trim();
    if (clean.length < 4) {
      setError("Enter a valid booking code.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`/api/bookings?code=${encodeURIComponent(clean)}`);
      if (res.status === 404) {
        setError("No booking found with that code. Check and try again.");
        return;
      }
      if (res.status === 410) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "This booking code has expired.");
        return;
      }
      if (!res.ok) {
        setError("Couldn't load that code — please try again.");
        return;
      }
      const data = await res.json();
      const sels: Selection[] = data.booking?.selections ?? [];
      if (sels.length === 0) {
        setError("That booking has no selections.");
        return;
      }
      // Drop the booked selections into the slip and take the punter to the
      // games, with the slip open so they can set a stake and place it.
      clear();
      sels.forEach((s) => add(s));
      setMobileOpen(true);
      router.push("/");
    } catch {
      setError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-dvh overflow-hidden grid place-items-center px-4 py-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] rounded-full bg-[var(--color-violet)]/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[5%] w-[380px] h-[380px] rounded-full bg-[var(--color-cyan)]/15 blur-[100px]" />
      </div>

      <Link href="/" className="absolute top-5 left-5 z-10">
        <Brand size={30} />
      </Link>

      <div className="relative w-full max-w-[460px]">
        <div className="grad-border animate-rise">
          <div className="relative p-7 sm:p-9 text-center">
            <div className="mx-auto w-16 h-16 mb-5 grid place-items-center rounded-2xl bg-[var(--color-violet)]/12 text-[var(--color-violet)]">
              <Ticket size={30} strokeWidth={1.6} />
            </div>

            <h1 className="font-display font-extrabold text-[22px]">Load a Booking Code</h1>
            <p className="text-[13px] text-[var(--color-ink-dim)] mt-2 leading-relaxed">
              Enter a booking code and we&apos;ll load the same selections into your bet
              slip — then just set your stake and place it.
            </p>

            <div
              className={cn(
                "relative mt-6 flex items-center rounded-2xl border bg-[var(--color-surface)] transition",
                error
                  ? "border-[var(--color-rose)]/60"
                  : "border-[var(--color-line)] focus-within:border-[var(--color-violet)]/60",
              )}
            >
              <Lock size={16} className="ml-4 text-[var(--color-ink-faint)]" />
              <input
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && load()}
                placeholder="Enter booking code"
                className="flex-1 bg-transparent num text-[14px] tracking-wider px-3 py-4 outline-none placeholder:text-[var(--color-ink-faint)] placeholder:tracking-normal placeholder:font-sans"
              />
              <button
                onClick={load}
                disabled={loading}
                className="m-1.5 flex items-center gap-1.5 rounded-xl grad-violet-pink text-white px-4 py-2.5 font-display font-bold text-[13px] active:scale-95 transition disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Load <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>

            {error && (
              <p className="text-[12px] text-[var(--color-rose)] mt-2.5 flex items-center justify-center gap-1.5">
                <X size={13} /> {error}
              </p>
            )}

            <p className="text-[12px] text-[var(--color-ink-dim)] mt-6">
              Want to check a placed ticket instead?{" "}
              <Link href="/verify" className="font-semibold text-[var(--color-cyan)] hover:underline">
                Verify a ticket
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
