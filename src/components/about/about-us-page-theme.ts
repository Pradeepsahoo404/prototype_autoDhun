import { cn } from "@/lib/utils";

/** About `/about/about-us`: continuous column — no hairline dividers between blocks. */
export const aboutSectionShell = "relative min-w-0 max-w-full bg-black text-white";

const aboutInnerBase = "faq-container relative w-full min-w-0 max-w-full px-3 sm:px-6 lg:px-8";

/** Default vertical rhythm for stacked sections (no band pill directly above). */
export const aboutSectionInner = cn(aboutInnerBase, "py-8 sm:py-10 md:py-12");

/** Body region directly under a band pill — less top gap, reads as one surface. */
export const aboutInnerBelowBandPill = cn(
  aboutInnerBase,
  "pt-4 pb-8 sm:pt-5 sm:pb-10 md:pt-6 md:pb-12"
);

/** Tighter `SectionPillHeading` band (default band padding is much taller). */
export const aboutBandPillClassName = "py-6 sm:py-7 md:py-8";

/** Raised panel: clear edge + primary-tinted halo (About Us highlight cards). */
export const aboutGlowCardClass = cn(
  "relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/14 bg-zinc-950/25",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_0_0_1px_rgba(255,255,255,0.06),0_0_72px_-12px_color-mix(in_oklab,var(--color-primary)_34%,transparent),0_20px_48px_-24px_rgba(0,0,0,0.6)]"
);

/**
 * Matches `ServiceBenefitsBentoCard` titles — Clash/Satoshi, extrabold, tight tracking.
 * Use `uppercase` variant for feature-style lines; `capitalize` for short stack labels (e.g. “Our Aim”).
 */
const aboutBenefitsHeadingCore = cn(
  "m-0 w-full min-w-0 max-w-full text-balance break-words text-left font-['Clash_Display','Satoshi',system-ui,sans-serif] font-extrabold leading-[1.12] tracking-[0.02em] text-white",
  "drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]",
  "text-xl sm:text-2xl md:text-[1.65rem]"
);

export const aboutBenefitsHeadingUppercase = cn(aboutBenefitsHeadingCore, "uppercase");

export const aboutBenefitsHeadingTitleCase = cn(aboutBenefitsHeadingCore, "capitalize");

/** Why Choose AUTODHUN? — list item titles; same family/weight as benefits, smaller type scale. */
export const aboutWhyChooseBulletTitleClass = cn(
  "m-0 w-full min-w-0 max-w-full text-balance break-words text-left font-['Clash_Display','Satoshi',system-ui,sans-serif] font-extrabold uppercase leading-[1.15] tracking-[0.02em] text-white",
  "drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)]",
  "text-[0.9375rem] sm:text-base md:text-lg"
);
