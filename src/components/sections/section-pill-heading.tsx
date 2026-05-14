import { cn } from "@/lib/utils";

function slugifyHeading(heading: string) {
  return heading
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section-pill";
}

const bandGlowStyle = {
  background:
    "radial-gradient(ellipse 70% 55% at 50% 20%, rgba(167, 139, 250, 0.78) 0%, rgba(139, 92, 246, 0.58) 30%, rgba(124, 58, 237, 0.25) 60%, transparent 80%)",
  filter: "blur(28px)" as const,
  opacity: 0.1,
};

/** Short tick + gradient line extending to the right (after the pill in reading order). */
function PillRightStroke({ className }: { className?: string }) {
  return (
    <div className={cn("relative z-[1] flex min-h-[1px] min-w-0 flex-1 items-center pl-2 sm:pl-3", className)} aria-hidden>
      <span className="h-px w-8 shrink-0 bg-white/20 sm:w-10" />
      <span className="h-px min-w-[1.25rem] flex-1 max-w-[6rem] bg-gradient-to-r from-[rgba(167,139,250,0.85)] via-[rgba(139,92,246,0.45)] to-transparent sm:min-w-[2rem] sm:max-w-[12rem] md:max-w-[16rem]" />
    </div>
  );
}

/** Mirror of `PillRightStroke` for the left side of a centered pill (band variant). */
function PillLeftStroke({ className }: { className?: string }) {
  return (
    <div className={cn("relative z-[1] flex min-h-[1px] min-w-0 flex-1 items-center justify-end pr-2 sm:pr-3", className)} aria-hidden>
      <span className="h-px min-w-[1.25rem] flex-1 max-w-[6rem] bg-gradient-to-r from-transparent via-[rgba(139,92,246,0.45)] to-[rgba(167,139,250,0.85)] sm:min-w-[2rem] sm:max-w-[12rem] md:max-w-[16rem]" />
      <span className="h-px w-8 shrink-0 bg-white/20 sm:w-10" />
    </div>
  );
}

export type SectionPillHeadingProps = {
  heading: string;
  /** Merged onto the outer wrapper (`band` = section, `inline` = root). */
  className?: string;
  /** Merged onto the pill label (`<p>`) — use for per-section type scale (e.g. slightly smaller title). */
  pillClassName?: string;
  as?: "section" | "div";
  /**
   * `band` — full-width black band + centered pill with accent strokes on both sides.
   * `inline` — same pill + glow, left-aligned with accent stroke continuing to the right.
   */
  variant?: "band" | "inline";
};

export function SectionPillHeading({
  heading,
  className,
  pillClassName,
  as: Root = "section",
  variant = "band",
}: SectionPillHeadingProps) {
  const labelId = `section-pill-heading-${slugifyHeading(heading)}`;

  const bandPillClasses = cn(
    "releases-title-badge relative z-10",
    "inline-block max-w-full min-w-0 rounded-[12px] border border-white/[0.08] bg-[#0a0a0a] px-4 py-3 text-center sm:px-10 sm:py-3.5 md:px-12 md:py-4",
    "text-[clamp(0.875rem,2.8vw+0.35rem,1.375rem)] font-bold uppercase tracking-[0.06em] text-white sm:tracking-[1px] sm:text-[22px]",
    "break-words text-balance [overflow-wrap:anywhere]",
    "shadow-[0_10px_30px_rgba(139,92,246,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]"
  );

  const pillBlock = (
    <div className="relative inline-flex min-w-0 max-w-full shrink-0 flex-col items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[calc(100%-8px)] z-0 h-[110px] w-[min(100vw,340px)] max-w-[340px] -translate-x-1/2"
        style={bandGlowStyle}
      />
      <p id={labelId} className={cn(bandPillClasses, pillClassName)}>
        {heading}
      </p>
    </div>
  );

  if (variant === "inline") {
    return (
      <Root aria-labelledby={Root === "section" ? labelId : undefined} className={cn("w-full", className)}>
        <div className="relative flex w-full min-w-0 max-w-full flex-nowrap items-center gap-0">
          {pillBlock}
          <PillRightStroke />
        </div>
      </Root>
    );
  }

  return (
    <Root
      aria-labelledby={Root === "section" ? labelId : undefined}
      className={cn(
        "releases-title-wrapper relative flex min-w-0 max-w-full justify-center bg-black px-3 pb-20 pt-12 sm:px-4 sm:pb-28 sm:pt-16",
        className
      )}
    >
      <div className="relative flex w-full min-w-0 max-w-full flex-nowrap items-center justify-center gap-0">
        <PillLeftStroke />
        {pillBlock}
        <PillRightStroke />
      </div>
    </Root>
  );
}
