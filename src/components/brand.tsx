import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ size = 32, id = "main" }: { size?: number; id?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`logoGrad-${id}`} x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="#0c0f1f" stroke={`url(#logoGrad-${id})`} strokeWidth="1.5" />
      <path
        d="M8 22L13 10L16 18L19 10L24 22"
        stroke={`url(#logoGrad-${id})`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="2.3" fill="#fbbf24" />
    </svg>
  );
}

export function Brand({
  size = 32,
  className,
  id = "main",
  pro = true,
  href = "/",
}: {
  size?: number;
  className?: string;
  id?: string;
  pro?: boolean;
  href?: string | null;
}) {
  const inner = (
    <span className={cn("flex items-center gap-2 select-none", className)}>
      <LogoMark size={size} id={id} />
      <span className="font-display font-extrabold tracking-tight text-[19px] leading-none">
        NEXXT<span className="grad-text">WIN</span>
      </span>
      {pro && (
        <span className="font-mono text-[9px] font-bold tracking-[0.18em] text-amber px-1.5 py-0.5 rounded bg-amber/10 border border-amber/30 text-[var(--color-amber)]">
          PRO
        </span>
      )}
    </span>
  );
  if (href === null) return inner;
  return <Link href={href}>{inner}</Link>;
}

export function TeamBadge({
  short,
  color,
  size = 38,
}: {
  short: string;
  color: string;
  size?: number;
}) {
  return (
    <span
      className="grid place-items-center rounded-full font-display font-extrabold shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        background: `radial-gradient(circle at 30% 25%, ${color}38, ${color}14)`,
        border: `1.5px solid ${color}66`,
        color: "#fff",
      }}
    >
      {short.slice(0, 3)}
    </span>
  );
}
