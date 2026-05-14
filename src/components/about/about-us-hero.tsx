import type { AboutUsHeroContent } from "@/data/about/about-us";

import { cn } from "@/lib/utils";

export function AboutUsHeroMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("text-white", className)}
      fill="none"
      viewBox="0 0 88 88"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="44" cy="44" opacity="0.28" r="40" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="44" cy="44" opacity="0.45" r="28" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="44" cy="44" opacity="0.72" r="16" stroke="currentColor" strokeWidth="1.15" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x2 = 44 + Math.cos(angle) * 38;
        const y2 = 44 + Math.sin(angle) * 38;
        return (
          <line
            key={`spoke-${i}`}
            opacity="0.42"
            stroke="currentColor"
            strokeWidth="1"
            x1="44"
            x2={x2}
            y1="44"
            y2={y2}
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const r = 22;
        const cx = 44 + Math.cos(angle) * r;
        const cy = 44 + Math.sin(angle) * r;
        return <circle key={`node-${i}`} cx={cx} cy={cy} fill="currentColor" opacity="0.55" r="2.2" />;
      })}
      <circle cx="44" cy="44" fill="currentColor" opacity="0.9" r="3" />
    </svg>
  );
}

export function AboutUsHero({
  content,
  className
}: {
  content: AboutUsHeroContent;
  className?: string;
}) {
  const { kicker, headline } = content;

  return (
    <section className={cn("relative overflow-hidden bg-black text-white", className)}>
      <div className="faq-container relative min-h-[min(52vh,520px)] w-full px-4 pb-16 pt-[calc(var(--site-header-height)+2.5rem)] sm:px-6 sm:pb-20 sm:pt-[calc(var(--site-header-height)+3rem)] md:min-h-[min(56vh,580px)] md:pb-24 md:pt-[calc(var(--site-header-height)+3.5rem)] lg:px-8">
        <AboutUsHeroMark className="pointer-events-none absolute right-4 top-[calc(var(--site-header-height)+1.75rem)] w-[4.25rem] opacity-90 sm:right-6 sm:w-[4.75rem] md:right-8 md:top-[calc(var(--site-header-height)+2rem)] md:w-[5.5rem] lg:right-10 lg:w-24" />

        <div className="relative z-[1] max-w-[min(100%,42rem)] pr-[4.5rem] text-left sm:max-w-[min(100%,48rem)] sm:pr-[5.5rem] md:max-w-[min(100%,52rem)] md:pr-28 lg:pr-32">
          <p className="faq-kicker !mx-0 !mb-4 !mt-0 text-left sm:!mb-5">{kicker}</p>
          <h1
            className={cn(
              "faq-title !mx-0 text-left text-white",
              "font-['Clash_Display','Satoshi',system-ui,sans-serif]",
              "!text-[clamp(1.375rem,4vw,3.125rem)] !leading-[1.08] !tracking-[-0.02em] sm:!text-[clamp(1.625rem,3.5vw,3.375rem)] md:!text-[clamp(1.875rem,3.1vw,3.625rem)]"
            )}
          >
            {headline}
          </h1>
        </div>
      </div>
    </section>
  );
}
