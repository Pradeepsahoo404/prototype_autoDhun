import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Matches reference `.h-xl` / `.h-md` */
const H_XL = 420;
const H_MD = 260;
const RADIUS = 24;

const portraits: { src: string; alt: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1539578708518-745b6b5e7c97?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
  },
];

/** Delicate white spirograph / wave orbit behind the green card (reference UI). */
function WaveOrbitGraphic({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={cn("pointer-events-none text-white", className)} viewBox="0 0 240 240" fill="none">
      <defs>
        <linearGradient id="preferred-orbit-fade" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="0.35" />
          <stop offset="65%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
        const wobble = (i % 3) * 2 - 2;
        return (
          <ellipse
            cx={120 + wobble * 0.6}
            cy={120 - wobble * 0.4}
            key={i}
            rx={18 + i * 6.2 + (i % 4) * 1.2}
            ry={15 + i * 5.4 + (i % 3) * 1.4}
            stroke="currentColor"
            strokeOpacity={Math.max(0.045, 0.5 - i * 0.028)}
            strokeWidth={i < 4 ? 1.15 : 0.95}
            transform={`rotate(${i * 9.25 + (i % 2) * 5.5} 120 120)`}
          />
        );
      })}
      <ellipse
        cx="120"
        cy="120"
        fill="none"
        rx="102"
        ry="88"
        stroke="url(#preferred-orbit-fade)"
        strokeWidth="1"
        transform="rotate(-18 120 120)"
      />
    </svg>
  );
}

/** `.artist-card` — #111, 24px radius, overflow hidden, transform easing */
function PortraitCard({
  src,
  alt,
  heightPx,
  className,
}: {
  src: string;
  alt: string;
  /** `.h-md` (260) or `.h-xl` (420) */
  heightPx: typeof H_MD | typeof H_XL;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "artist-card group relative isolate w-full shrink-0 overflow-hidden bg-[#111]",
        "rounded-[24px]",
        "transition-transform duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
        "hover:z-[1] hover:scale-[1.035]",
        "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]",
        heightPx === H_MD && "h-md",
        heightPx === H_XL && "h-xl",
        className
      )}
      style={{ height: heightPx, borderRadius: RADIUS }}
    >
      <Image
        alt={alt}
        className="object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-[1.04]"
        fill
        sizes="(max-width: 1023px) 45vw, 260px"
        src={src}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-black/10 opacity-80" />
    </div>
  );
}

/** Green feature tile — same height as `.h-xl` (420px) in the wall */
function PreferredProviderCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "artist-card group relative flex w-full shrink-0 flex-col items-center justify-center overflow-hidden px-5 py-10 text-center",
        "rounded-[24px]",
        "bg-[color-mix(in_oklab,var(--color-primary)_94%,#15803d)]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.14),inset_0_1px_0_rgba(255,255,255,0.22),0_22px_50px_rgba(0,0,0,0.35)]",
        "transition-transform duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
        "hover:scale-[1.025] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.28),0_28px_60px_rgba(0,0,0,0.4)]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(ellipse_at_50%_45%,transparent_20%,rgba(0,0,0,0.12)_100%)]",
        "h-xl",
        className
      )}
      style={{ height: H_XL, borderRadius: RADIUS }}
    >
      <WaveOrbitGraphic className="absolute inset-0 h-[115%] w-[115%] max-w-none -translate-x-[7%] -translate-y-[7%] opacity-[0.88]" />
      <p
        className={cn(
          "relative z-[2] max-w-[11rem] text-balance font-[family-name:var(--font-barlow),sans-serif]",
          "text-[1.35rem] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-3xl md:text-[2rem]",
          "lg:max-w-[10.5rem] lg:text-[clamp(1.35rem,1.1vw+1rem,2.15rem)] xl:text-4xl",
          "[text-shadow:0_1px_0_rgba(0,0,0,0.12),0_0_28px_rgba(0,0,0,0.18)]"
        )}
      >
        <span className="block">Preferred</span>
        <span className="mt-1 block">Provider</span>
      </p>
    </div>
  );
}

/** `.wall-column` — flex-col, 20px gap between cards (matches reference) */
function WallColumn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "wall-column flex shrink-0 flex-col gap-[20px]",
        "max-lg:w-[calc(50%-10px)] max-lg:flex-none",
        "lg:w-auto lg:min-w-0 lg:flex-1 lg:basis-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function PreferredProviderSection() {
  const [a, b, c, d, e, f, g, h] = portraits;

  return (
    <section
      aria-labelledby="preferred-provider-heading"
      className="section wall-of-love-section overflow-x-hidden bg-black pb-12 pt-4 text-white sm:pb-14 sm:pt-5 md:pb-[4.25rem] md:pt-6 lg:pb-20 lg:pt-8"
    >
      <div className="container-fluid w-full">
        {/*
          `.wall-of-love-wrapper` — display:flex; justify-content:center; align-items:center;
          gap:20px; padding:20px; max-width:1600px; margin:0 auto;
        */}
        <div className="wall-of-love-wrapper mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-center gap-[20px] p-[20px] lg:flex-nowrap">
          {/* Column 1 — two `.artist-card.h-md` */}
          <WallColumn>
            <PortraitCard alt={a.alt} heightPx={H_MD} src={a.src} />
            <PortraitCard alt={b.alt} heightPx={H_MD} src={b.src} />
          </WallColumn>

          {/* Column 2 — one `.artist-card.h-xl` (branded tile; reference uses a single tall image) */}
          <WallColumn>
            <PreferredProviderCard />
          </WallColumn>

          {/* Column 3 — two `.artist-card.h-md` */}
          <WallColumn>
            <PortraitCard alt={c.alt} heightPx={H_MD} src={c.src} />
            <PortraitCard alt={d.alt} heightPx={H_MD} src={d.src} />
          </WallColumn>

          {/* Column 4 — one `.artist-card.h-xl` */}
          <WallColumn>
            <PortraitCard alt={e.alt} heightPx={H_XL} src={e.src} />
          </WallColumn>

          {/* Column 5 — two `.artist-card.h-md` */}
          <WallColumn>
            <PortraitCard alt={f.alt} heightPx={H_MD} src={f.src} />
            <PortraitCard alt={g.alt} heightPx={H_MD} src={g.src} />
          </WallColumn>

          {/* Column 6 — one `.artist-card.h-xl` */}
          <WallColumn>
            <PortraitCard alt={h.alt} heightPx={H_XL} src={h.src} />
          </WallColumn>
        </div>
      </div>
    </section>
  );
}
