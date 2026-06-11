"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, ArrowDownToLine, History, Receipt, X, Check, Loader2, LogOut, KeyRound } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { cn } from "@/lib/utils";
import { formatMoneyWithCurrency } from "@/lib/format-money";
import { getUserId, clearUserSession } from "@/lib/user-session";
import { getCountryForCurrency, getMinFirstDeposit, isCurrencyCode } from "@/lib/countries";

interface AccountUser {
  id: string;
  name: string;
  currency: string;
  balance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  verificationStep: number;
  withdrawalApproved: boolean;
  phone: string | null;
}


export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<AccountUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [noSession, setNoSession] = useState(false);
  const [modal, setModal] = useState<null | "deposit" | "withdraw">(null);
  const [pwOpen, setPwOpen] = useState(false);

  const refresh = useCallback(async () => {
    const id = getUserId();
    if (!id) {
      setNoSession(true);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`/api/users/${id}`);
      if (res.status === 404) {
        clearUserSession();
        setNoSession(true);
        return;
      }
      const data = await res.json();
      setUser(data);
    } catch {
      /* keep last known state */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  function signOut() {
    clearUserSession();
    router.push("/login");
  }

  const initials = user?.name
    ? user.name.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase()
    : "—";
  const cur = user?.currency ?? "GHS";
  const money = (n: number) => formatMoneyWithCurrency(n, cur);

  if (loading) {
    return (
      <AppShell tabs={false}>
        <div className="grid place-items-center py-32 text-[var(--color-ink-dim)]">
          <Loader2 size={26} className="animate-spin" />
        </div>
      </AppShell>
    );
  }

  if (noSession) {
    return (
      <AppShell tabs={false}>
        <div className="card p-10 text-center max-w-md mx-auto mt-10">
          <h2 className="font-display font-extrabold text-[19px]">You&apos;re not signed in</h2>
          <p className="text-[13px] text-[var(--color-ink-dim)] mt-2">Sign in to view your wallet, deposit, and withdraw.</p>
          <div className="flex gap-3 justify-center mt-6">
            <Link href="/login" className="rounded-xl px-5 py-3 font-display font-bold grad-violet-pink text-white text-sm">Sign In</Link>
            <Link href="/register" className="rounded-xl px-5 py-3 font-display font-bold border border-[var(--color-line)] text-sm">Create account</Link>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell tabs={false}>
      {/* hero */}
      <div className="grad-border overflow-hidden">
        <div className="relative p-5 sm:p-6">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-[var(--color-violet)]/15 blur-3xl" />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="grid place-items-center w-16 h-16 rounded-2xl grad-violet-pink text-white font-display font-extrabold text-[22px]">{initials}</div>
              <div>
                <div className="text-[11px] text-[var(--color-ink-dim)]">Welcome back</div>
                <div className="font-display font-extrabold text-[19px]">{user?.name}</div>
                <div className="flex items-center gap-2 mt-1.5">
                  <button onClick={signOut} className="chip px-2 py-0.5 inline-flex items-center gap-1 text-[var(--color-ink-dim)] hover:text-white">
                    <LogOut size={11} /> Sign out
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:ml-auto sm:text-right">
              <div className="text-[11px] text-[var(--color-ink-dim)]">Available Balance</div>
              <div className="num text-[30px] font-extrabold grad-text leading-tight">{money(user?.balance ?? 0)}</div>
            </div>
          </div>

          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5">
            <Action onClick={() => setModal("deposit")} primary icon={<Plus size={16} />} label="Deposit" />
            <Action onClick={() => setModal("withdraw")} icon={<ArrowDownToLine size={16} />} label="Withdraw" />
            <ActionLink href="/bet-history" icon={<History size={16} />} label="Bet History" />
            <ActionLink href="/transactions" icon={<Receipt size={16} />} label="Transactions" />
          </div>
        </div>
      </div>

      {/* KPIs from real wallet totals */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        <Kpi icon="💰" tone="emerald" val={money(user?.totalDeposited ?? 0)} label="Total Deposited" />
        <Kpi icon="🏧" tone="cyan" val={money(user?.totalWithdrawn ?? 0)} label="Total Withdrawn" />
        <Kpi icon="🔓" tone="rose" val={user?.withdrawalApproved ? "Enabled" : "Pending"} label="Withdrawals" />
      </div>

      {/* recent activity */}
      <div className="card p-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <span className="title-bar" />
            <h2 className="font-display font-extrabold text-[15px]">Recent Activity</h2>
          </div>
          <Link href="/transactions" className="text-[11.5px] font-semibold text-[var(--color-cyan)] hover:underline">View all →</Link>
        </div>
        <p className="text-[13px] text-[var(--color-ink-dim)] py-6 text-center">
          Your deposits, withdrawals, and bet activity appear on the{" "}
          <Link href="/transactions" className="text-[var(--color-cyan)] hover:underline">transactions</Link> page.
        </p>
      </div>

      {/* security */}
      <div className="card p-4 mt-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-[var(--color-violet)]/12 shrink-0">
              <KeyRound size={16} className="text-[var(--color-violet)]" />
            </span>
            <div className="min-w-0">
              <div className="font-display font-bold text-[13.5px]">Password</div>
              <div className="text-[11.5px] text-[var(--color-ink-dim)] truncate">Change the password you use to sign in.</div>
            </div>
          </div>
          <button
            onClick={() => setPwOpen(true)}
            className="shrink-0 rounded-xl px-4 py-2 text-[12.5px] font-bold border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white hover:border-[var(--color-line-2)] transition"
          >
            Change
          </button>
        </div>
      </div>

      {modal && user && (
        <PaymentModal
          type={modal}
          user={user}
          onClose={() => setModal(null)}
          onSuccess={() => { void refresh(); }}
        />
      )}

      {pwOpen && user && (
        <ChangePasswordModal userId={user.id} onClose={() => setPwOpen(false)} />
      )}
    </AppShell>
  );
}

function Kpi({ icon, tone, val, label }: { icon: string; tone: string; val: string; label: string }) {
  return (
    <div className="card p-4">
      <span className={cn("grid place-items-center w-9 h-9 rounded-xl text-[16px] mb-3",
        tone === "gold" && "bg-[var(--color-amber)]/12",
        tone === "emerald" && "bg-[var(--color-emerald)]/12",
        tone === "cyan" && "bg-[var(--color-cyan)]/12",
        tone === "rose" && "bg-[var(--color-rose)]/12",
      )}>{icon}</span>
      <div className="num text-[18px] font-extrabold truncate">{val}</div>
      <div className="text-[11px] text-[var(--color-ink-dim)] mt-0.5">{label}</div>
    </div>
  );
}

function Action({ onClick, icon, label, primary }: { onClick: () => void; icon: React.ReactNode; label: string; primary?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12.5px] font-bold transition",
        primary ? "grad-violet-pink text-white shadow-[0_8px_24px_-8px_rgba(236,72,153,.5)] hover:brightness-110"
          : "border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white hover:border-[var(--color-line-2)]",
      )}
    >
      {icon} {label}
    </button>
  );
}

function ActionLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12.5px] font-bold border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white hover:border-[var(--color-line-2)] transition"
    >
      {icon} {label}
    </Link>
  );
}

function PaymentModal({
  type,
  user,
  onClose,
  onSuccess,
}: {
  type: "deposit" | "withdraw";
  user: AccountUser;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState(user.phone ?? "");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string>("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cc = isCurrencyCode(user.currency) ? user.currency : "GHS";
  const minDeposit = getMinFirstDeposit(getCountryForCurrency(cc).code);
  const quick =
    type === "deposit"
      ? [minDeposit, minDeposit * 2, minDeposit * 5, minDeposit * 10]
      : [100, 200, 500, 1000];
  const amt = parseFloat(amount);
  const money = (n: number) => formatMoneyWithCurrency(n, user.currency);
  const belowMin = type === "deposit" && amt > 0 && amt < minDeposit;

  async function pollDeposit(reference: string) {
    // Poll until terminal. ~90s budget at 3s intervals.
    const TERMINAL_FAIL = [
      "failed", "status-failed", "no-user", "credit-failed", "unknown-reference",
    ];
    for (let i = 0; i < 30; i++) {
      await new Promise((r) => setTimeout(r, 3000));
      try {
        const res = await fetch(`/api/payments/moolre/direct/status?reference=${encodeURIComponent(reference)}`);
        const data = await res.json();
        const s = data.status as string;
        if (s === "success" || s === "already-credited") { setDone(true); onSuccess(); return; }
        if (TERMINAL_FAIL.includes(s)) {
          setError("Payment was not completed. Please try again.");
          return;
        }
        setStatus("Waiting for you to approve the prompt on your phone…");
      } catch {
        /* transient — keep polling */
      }
    }
    setError("Timed out waiting for approval. If you approved it, your balance will update shortly.");
  }

  async function deposit() {
    setError(null);
    setBusy(true);
    setStatus("Sending Mobile Money prompt…");
    try {
      // Direct (in-app) MoMo: the customer gets a PIN prompt on their phone —
      // no hosted page. We then poll for the result and auto-credit.
      const res = await fetch("/api/payments/moolre/direct/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, amount: amt, phone: phone.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Could not start the deposit."); return; }
      setStatus(data.displayText ?? "Approve the prompt on your phone…");
      await pollDeposit(data.reference);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  }

  async function withdraw() {
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/users/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, amount: amt, network: "momo", phone: phone.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Withdrawal failed."); return; }
      setDone(true);
      onSuccess();
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={busy ? undefined : onClose} />
      <div className="relative w-full sm:max-w-[420px] card rounded-b-none sm:rounded-2xl animate-rise">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-line)]">
          <h3 className="font-display font-extrabold text-[16px] capitalize">{type}</h3>
          <button onClick={onClose} disabled={busy} className="text-[var(--color-ink-faint)] hover:text-white disabled:opacity-40"><X size={20} /></button>
        </div>

        {done ? (
          <div className="flex flex-col items-center text-center px-6 py-12">
            <div className="grid place-items-center w-16 h-16 rounded-full grad-emerald mb-4 shadow-[0_10px_36px_-8px_rgba(52,211,153,.6)]">
              <Check size={30} className="text-white" />
            </div>
            <h4 className="font-display font-extrabold text-[17px] capitalize">{type === "deposit" ? "Deposit complete" : "Withdrawal requested"}</h4>
            <p className="text-[13px] text-[var(--color-ink-dim)] mt-1.5">
              {type === "deposit" ? "Your balance has been updated." : "Funds arrive after the operator processes your request."}
            </p>
            <button onClick={onClose} className="mt-6 w-full rounded-xl py-3 font-display font-bold grad-violet-pink text-white text-sm">Done</button>
          </div>
        ) : (
          <div className="p-5 space-y-4">
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wide text-[var(--color-ink-faint)]">
                {type === "deposit" ? "MTN MoMo number" : "Mobile-money number"}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={busy}
                placeholder="0244 XXX XXX"
                className="w-full mt-2 num text-[15px] bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl px-3.5 py-3 outline-none focus:border-[var(--color-violet)]/60"
              />
              {type === "deposit" && (
                <p className="text-[11px] text-[var(--color-ink-faint)] mt-1.5">You&apos;ll get a prompt on this number to approve with your MoMo PIN.</p>
              )}
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase tracking-wide text-[var(--color-ink-faint)]">Amount</label>
              <div className="relative mt-2">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 num text-[13px] text-[var(--color-ink-faint)]">{user.currency}</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  disabled={busy}
                  placeholder="0.00"
                  className="w-full num text-[18px] font-bold bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl pl-16 pr-3 py-3 outline-none focus:border-[var(--color-violet)]/60"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {quick.map((q) => (
                  <button key={q} onClick={() => setAmount(String(q))} disabled={busy} className="num text-[12px] font-bold rounded-lg py-2 border border-[var(--color-line)] bg-[var(--color-surface-2)] text-[var(--color-ink-dim)] hover:text-white transition disabled:opacity-50">
                    {q}
                  </button>
                ))}
              </div>
              {type === "deposit" && (
                <p className={cn("text-[11.5px] mt-2", belowMin ? "font-semibold text-[var(--color-rose,#fb7185)]" : "text-[var(--color-ink-faint)]")}>
                  Minimum deposit: <span className="num font-bold">{money(minDeposit)}</span>
                </p>
              )}
            </div>

            {type === "withdraw" && (
              <p className="text-[11.5px] text-[var(--color-ink-dim)]">Available: <span className="num font-bold text-white">{money(user.balance)}</span></p>
            )}

            {status && !error && (
              <p className="text-[12.5px] text-[var(--color-cyan)] flex items-center gap-2">
                <Loader2 size={14} className="animate-spin" /> {status}
              </p>
            )}
            {error && <p className="text-[12.5px] font-semibold text-[var(--color-rose,#fb7185)]">{error}</p>}

            <button
              onClick={type === "deposit" ? deposit : withdraw}
              disabled={busy || !(amt > 0) || belowMin || !phone.trim()}
              className="w-full rounded-xl py-3.5 font-display font-extrabold text-[14px] grad-violet-pink text-white disabled:opacity-50 active:scale-[.99] transition capitalize flex items-center justify-center gap-2"
            >
              {busy && <Loader2 size={16} className="animate-spin" />}
              {type === "deposit" ? (busy ? "Awaiting approval…" : `Deposit ${amt > 0 ? money(amt) : ""}`) : `Withdraw ${amt > 0 ? money(amt) : ""}`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ChangePasswordModal({ userId, onClose }: { userId: string; onClose: () => void }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const mismatch = confirm.length > 0 && next !== confirm;
  const tooShort = next.length > 0 && next.length < 6;
  const canSubmit = current.length > 0 && next.length >= 6 && next === confirm && !busy;

  async function submit() {
    if (!canSubmit) return;
    setError(null);
    setBusy(true);
    try {
      const res = await fetch("/api/users/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, currentPassword: current, newPassword: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Could not change password.");
        return;
      }
      setDone(true);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={busy ? undefined : onClose} />
      <div className="relative w-full sm:max-w-[420px] card rounded-b-none sm:rounded-2xl animate-rise">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-line)]">
          <h3 className="font-display font-extrabold text-[16px]">Change password</h3>
          <button onClick={onClose} disabled={busy} className="text-[var(--color-ink-faint)] hover:text-white disabled:opacity-40"><X size={20} /></button>
        </div>

        {done ? (
          <div className="flex flex-col items-center text-center px-6 py-12">
            <div className="grid place-items-center w-16 h-16 rounded-full grad-emerald mb-4 shadow-[0_10px_36px_-8px_rgba(52,211,153,.6)]">
              <Check size={30} className="text-white" />
            </div>
            <h4 className="font-display font-extrabold text-[17px]">Password updated</h4>
            <p className="text-[13px] text-[var(--color-ink-dim)] mt-1.5">Use your new password next time you sign in.</p>
            <button onClick={onClose} className="mt-6 w-full rounded-xl py-3 font-display font-bold grad-violet-pink text-white text-sm">Done</button>
          </div>
        ) : (
          <div className="p-5 space-y-4">
            <Field label="Current password" value={current} onChange={setCurrent} placeholder="Your current password" />
            <Field label="New password" value={next} onChange={setNext} placeholder="At least 6 characters" />
            {tooShort && <p className="text-[11.5px] text-[var(--color-rose,#fb7185)] -mt-2">New password must be at least 6 characters.</p>}
            <Field label="Confirm new password" value={confirm} onChange={setConfirm} placeholder="Re-enter new password" />
            {mismatch && <p className="text-[11.5px] text-[var(--color-rose,#fb7185)] -mt-2">Passwords don&apos;t match.</p>}

            {error && <p className="text-[12.5px] font-semibold text-[var(--color-rose,#fb7185)]">{error}</p>}

            <button
              onClick={submit}
              disabled={!canSubmit}
              className="w-full rounded-xl py-3.5 font-display font-extrabold text-[14px] grad-violet-pink text-white disabled:opacity-50 active:scale-[.99] transition flex items-center justify-center gap-2"
            >
              {busy && <Loader2 size={16} className="animate-spin" />}
              Update password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] font-mono uppercase tracking-wide text-[var(--color-ink-faint)]">{label}</label>
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-2 text-[15px] bg-[var(--color-surface)] border border-[var(--color-line)] rounded-xl px-3.5 py-3 outline-none focus:border-[var(--color-violet)]/60 transition"
      />
    </div>
  );
}
