"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check } from "lucide-react";
import { AuthShell, Field } from "@/components/auth-shell";

const COUNTRIES = [
  { code: "233", flag: "🇬🇭" },
  { code: "234", flag: "🇳🇬" },
  { code: "254", flag: "🇰🇪" },
  { code: "27", flag: "🇿🇦" },
];

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const router = useRouter();

  return (
    <AuthShell title="Create your account" subtitle="Open an account in under a minute.">
      <form onSubmit={(e) => { e.preventDefault(); router.push("/account"); }}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="First Name" placeholder="First name" />
          <Field label="Last Name" placeholder="Last name" />
        </div>

        <Field label="Phone Number">
          <div className="flex gap-2">
            <select className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl px-2.5 py-3 text-[14px] outline-none focus:border-[var(--color-violet)]/60 w-[92px]">
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>{c.flag} +{c.code}</option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="024 XXX XXXX"
              className="flex-1 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl px-3.5 py-3 text-[14px] outline-none focus:border-[var(--color-violet)]/60 focus:glow-violet transition placeholder:text-[var(--color-ink-faint)]"
            />
          </div>
        </Field>

        <Field label="Email Address" type="email" placeholder="you@example.com" />

        <Field label="Password">
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Minimum 8 characters"
              className="w-full bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl px-3.5 py-3 pr-11 text-[14px] outline-none focus:border-[var(--color-violet)]/60 focus:glow-violet transition placeholder:text-[var(--color-ink-faint)]"
            />
            <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-ink-faint)] hover:text-white">
              {show ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          <p className="text-[11px] text-[var(--color-ink-faint)] mt-1.5">Must include an uppercase letter and a number.</p>
        </Field>

        <button
          type="button"
          onClick={() => setAgree((v) => !v)}
          className="flex items-start gap-2.5 my-4 text-left"
        >
          <span className={`grid place-items-center w-5 h-5 rounded-md border shrink-0 mt-0.5 transition ${agree ? "grad-violet-pink border-transparent" : "border-[var(--color-line-2)]"}`}>
            {agree && <Check size={13} className="text-white" />}
          </span>
          <span className="text-[12px] text-[var(--color-ink-dim)] leading-relaxed">
            I&apos;m 18+ and agree to the <span className="text-[var(--color-cyan)]">Terms</span> and <span className="text-[var(--color-cyan)]">Privacy Policy</span>.
          </span>
        </button>

        <button
          type="submit"
          disabled={!agree}
          className="w-full rounded-xl py-3.5 font-display font-extrabold text-[14px] grad-violet-pink text-white shadow-[0_10px_30px_-8px_rgba(236,72,153,.5)] disabled:opacity-50 disabled:shadow-none active:scale-[.99] transition"
        >
          Create Account
        </button>

        <p className="text-center text-[13px] text-[var(--color-ink-dim)] mt-5">
          Already have an account? <Link href="/login" className="font-bold text-[var(--color-violet)] hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthShell>
  );
}
