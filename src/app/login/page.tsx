"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { AuthShell, Field } from "@/components/auth-shell";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue to NexxtWin.">
      <form
        onSubmit={(e) => { e.preventDefault(); router.push("/account"); }}
      >
        <Field label="Phone or Email" placeholder="024 XXX XXXX or you@email.com" />

        <Field label="Password">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl px-3.5 py-3 pr-11 text-[14px] outline-none focus:border-[var(--color-violet)]/60 focus:glow-violet transition placeholder:text-[var(--color-ink-faint)]"
            />
            <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)] hover:text-white">
              {show ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </Field>

        <div className="flex justify-end -mt-1 mb-5">
          <button type="button" className="text-[12px] font-semibold text-[var(--color-cyan)] hover:underline">Forgot password?</button>
        </div>

        <button type="submit" className="w-full rounded-xl py-3.5 font-display font-extrabold text-[14px] grad-violet-pink text-white shadow-[0_10px_30px_-8px_rgba(236,72,153,.5)] active:scale-[.99] transition">
          Sign In
        </button>

        <div className="flex items-center gap-3 my-5 text-[11px] text-[var(--color-ink-faint)]">
          <span className="h-px flex-1 bg-[var(--color-line)]" /> or continue with <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] py-3 text-[13px] font-semibold hover:border-[var(--color-line-2)] transition">🌐 Google</button>
          <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] py-3 text-[13px] font-semibold hover:border-[var(--color-line-2)] transition">📱 Phone OTP</button>
        </div>

        <p className="text-center text-[13px] text-[var(--color-ink-dim)] mt-6">
          Don&apos;t have an account? <Link href="/register" className="font-bold text-[var(--color-violet)] hover:underline">Create one</Link>
        </p>
      </form>
    </AuthShell>
  );
}
