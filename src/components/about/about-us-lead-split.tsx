"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import type { AboutUsHeroContent, AboutUsLeadSplitContent } from "@/data/about/about-us";

import { AboutUsHeroMark } from "@/components/about/about-us-hero";
import { cn } from "@/lib/utils";

const headlineClass = cn(
  "faq-title !mx-0 min-w-0 max-w-full text-balance break-words text-white",
  "font-['Clash_Display','Satoshi',system-ui,sans-serif]",
  /** Same scale as service benefits + `HeroService` (“Release Your Music. Own Your Future.”). */
  "!text-[clamp(14px,min(5vw,5.5vmin),42px)] !leading-[1.1] !tracking-[-0.01em]"
);

/** Same type as About Us hero headline (“Empowering the Future of Independent Music”). */
export const aboutLeadHeroHeadlineClass = headlineClass;

const bodyMuted = cn(
  "m-0 max-w-full min-w-0 text-[15px] font-normal leading-relaxed text-[#989898] [overflow-wrap:anywhere] sm:text-base sm:leading-[1.65]"
);

const view = { once: true, margin: "-48px 0px", amount: 0.22 } as const;
const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut }
  }
};

function publicImageSrc(src: string) {
  return encodeURI(src);
}

function AboutLeadAmbient({ reduceMotion }: { reduceMotion: boolean }) {
  const baseClass =
    "pointer-events-none absolute -left-[8%] top-[8%] z-0 aspect-[4/3] w-[min(88vw,520px)] max-w-[640px] opacity-80 blur-[48px] sm:top-[6%] sm:blur-[56px]";
  const style = {
    background:
      "radial-gradient(ellipse 55% 50% at 40% 45%, color-mix(in oklab, var(--color-primary) 32%, transparent) 0%, transparent 62%)"
  } as const;

  if (reduceMotion) {
    return <div aria-hidden className={baseClass} style={style} />;
  }

  return (
    <motion.div
      aria-hidden
      className={baseClass}
      style={style}
      animate={{ scale: [1, 1.05, 1], opacity: [0.65, 0.88, 0.65] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** Full-bleed drifting orbs + soft vignette — matches service / benefits atmosphere. */
function AboutLeadBackgroundMotion({ reduceMotion }: { reduceMotion: boolean }) {
  const trStyle = {
    background:
      "radial-gradient(closest-side, color-mix(in oklab, var(--color-primary) 40%, transparent) 0%, transparent 100%)"
  } as const;
  const blStyle = {
    background:
      "radial-gradient(closest-side, color-mix(in oklab, var(--color-primary) 26%, transparent) 0%, color-mix(in oklab, white 8%, transparent) 45%, transparent 72%)"
  } as const;

  if (reduceMotion) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -right-[8%] -top-[6%] h-[min(48vh,400px)] w-[min(72vw,520px)] rounded-full opacity-[0.14] blur-[96px]"
          style={trStyle}
        />
        <div
          className="absolute -bottom-[12%] -left-[8%] h-[min(42vh,360px)] w-[min(68vw,480px)] rounded-full opacity-[0.1] blur-[88px]"
          style={blStyle}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.04)_0%,transparent_55%)]"
          style={{ opacity: 0.5 }}
        />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -right-[5%] -top-[4%] h-[min(52vh,440px)] w-[min(76vw,560px)] rounded-full blur-[100px] sm:-right-[4%]"
        style={trStyle}
        animate={{
          x: [0, 28, -12, 0],
          y: [0, 16, 10, 0],
          scale: [1, 1.08, 1.02, 1],
          opacity: [0.12, 0.26, 0.18, 0.12]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[14%] -left-[6%] h-[min(46vh,400px)] w-[min(70vw,520px)] rounded-full blur-[92px]"
        style={blStyle}
        animate={{
          x: [0, -24, 14, 0],
          y: [0, -14, -8, 0],
          scale: [1, 1.06, 1.03, 1],
          opacity: [0.08, 0.18, 0.12, 0.08]
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.div
        className="absolute left-1/2 top-[18%] h-[min(38vh,300px)] w-[min(95vw,760px)] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 68%)"
        }}
        animate={{ opacity: [0.04, 0.1, 0.05, 0.04], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse 120% 70% at 50% 100%, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, transparent 50%)"
        }}
        animate={{ opacity: [0.15, 0.28, 0.18, 0.15] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/** Rounded card + lift shadow + lime L-accent + motion (float, shine, entrance). */
export function LeadImageCard({
  alt,
  className,
  priority,
  reduceMotion,
  sizes,
  slideFrom,
  src
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  reduceMotion: boolean;
  sizes: string;
  slideFrom: "left" | "right";
  src: string;
}) {
  const slideX = slideFrom === "right" ? 42 : -42;

  return (
    <motion.div
      className={cn("relative w-full", className)}
      initial={reduceMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: slideX, scale: 0.97 }}
      transition={{ duration: 0.68, ease: easeOut }}
      viewport={view}
      whileInView={reduceMotion ? { opacity: 1, x: 0, scale: 1 } : { opacity: 1, x: 0, scale: 1 }}
    >
      <motion.div
        className={cn(
          "relative aspect-[4/3] min-h-[200px] w-full sm:aspect-[5/4] lg:min-h-[280px]",
          "rounded-[28px] sm:rounded-[32px]",
          "shadow-[0_22px_56px_-16px_rgba(0,0,0,0.72),0_14px_40px_-18px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)]",
          "ring-1 ring-white/[0.1]"
        )}
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -left-0.5 -top-0.5 z-[3] h-[3.25rem] w-[3.25rem] rounded-tl-[24px] border-l-[3px] border-t-[3px] border-[var(--color-primary)] sm:h-[3.5rem] sm:w-[3.5rem] sm:rounded-tl-[26px] md:rounded-tl-[28px]"
          style={{
            boxShadow: "0 0 22px color-mix(in oklab, var(--color-primary) 40%, transparent)"
          }}
          animate={reduceMotion ? undefined : { opacity: [0.78, 1, 0.78] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-[1] h-full w-full overflow-hidden rounded-[28px] bg-zinc-900/40 sm:rounded-[32px]">
          <Image
            alt={alt}
            className="object-cover object-center"
            fill
            priority={priority}
            sizes={sizes}
            src={publicImageSrc(src)}
          />
          {!reduceMotion ? (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[2] overflow-hidden rounded-[inherit]"
            >
              <motion.div
                className="absolute -left-[35%] top-0 h-full w-[45%] skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent opacity-90"
                animate={{ x: ["-30%", "220%"] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 6
                }}
              />
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Shared black page shell: orbs, dot grid, ambient halo, rotating mark — children = lead rows. */
export function AboutLeadPageShell({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={cn("relative min-w-0 max-w-full overflow-x-clip bg-black text-white", className)}>
      <AboutLeadBackgroundMotion reduceMotion={!!reduceMotion} />

      {reduceMotion ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.12) 0.5px, transparent 0.6px)",
            backgroundSize: "28px 28px"
          }}
        />
      ) : (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.065] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.12) 0.5px, transparent 0.6px)",
            backgroundSize: "32px 32px",
            backgroundRepeat: "repeat"
          }}
          animate={{ backgroundPosition: ["0px 0px", "32px 32px", "0px 0px"] }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="faq-container relative z-[1] w-full min-w-0 max-w-full px-3 pb-10 pt-[calc(var(--site-header-height)+2rem)] sm:px-6 sm:pb-12 sm:pt-[calc(var(--site-header-height)+2.25rem)] md:pb-14 md:pt-[calc(var(--site-header-height)+2.5rem)] lg:px-8">
        <AboutLeadAmbient reduceMotion={!!reduceMotion} />

        <motion.div
          className="pointer-events-none absolute right-4 top-[calc(var(--site-header-height)+1.25rem)] z-[2] w-[4.25rem] sm:right-6 sm:w-[4.75rem] md:right-8 md:top-[calc(var(--site-header-height)+1.5rem)] md:w-[5.5rem] lg:right-10 lg:w-24"
          animate={reduceMotion ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        >
          <AboutUsHeroMark className="h-full w-full opacity-90" />
        </motion.div>

        {children}
      </div>
    </section>
  );
}

/**
 * Top of About Us: motion-matched to service visuals — ambient lime halo, staggered copy,
 * image cards with entrance + gentle float + shine sweep; hero mark slow rotation.
 */
export function AboutUsLeadSplit({
  hero,
  lead,
  className
}: {
  hero: AboutUsHeroContent;
  lead: AboutUsLeadSplitContent;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const { kicker, headline } = hero;
  const { mission, rights } = lead;

  return (
    <AboutLeadPageShell className={className}>
        {/* Row 1 — text (left), image card (right) */}
        <div className="relative z-[1] grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
          <motion.div
            className="relative min-w-0 max-w-full pr-12 sm:pr-16 md:pr-20 lg:max-w-none lg:pr-8"
            initial={reduceMotion ? false : "hidden"}
            viewport={view}
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } }
            }}
          >
            <motion.p className="faq-kicker !mx-0 !mb-3 !mt-0 text-left sm:!mb-3.5" variants={fadeUpItem}>
              {kicker}
            </motion.p>
            <motion.h1 className={cn(headlineClass, "text-left")} variants={fadeUpItem}>
              {headline}
            </motion.h1>
            <motion.p className={cn(bodyMuted, "mt-3 max-w-none text-left sm:mt-4")} variants={fadeUpItem}>
              {mission.paragraph}
            </motion.p>
          </motion.div>

          <LeadImageCard
            alt={mission.imageAlt}
            className="mx-auto max-w-lg sm:max-w-none lg:mx-0"
            priority
            reduceMotion={!!reduceMotion}
            sizes="(max-width: 1024px) 100vw, 50vw"
            slideFrom="right"
            src={mission.imageSrc}
          />
        </div>

        {/* Row 2 — image card (left), text column on the right */}
        <div className="relative z-[1] mt-12 grid min-w-0 grid-cols-1 items-start gap-8 pt-12 sm:mt-14 sm:gap-10 sm:pt-14 md:mt-16 md:gap-12 md:pt-16 lg:grid-cols-2 lg:gap-x-14">
          <LeadImageCard
            alt={rights.imageAlt}
            className="order-2 mx-auto max-w-lg sm:max-w-none lg:order-1 lg:mx-0"
            reduceMotion={!!reduceMotion}
            sizes="(max-width: 1024px) 100vw, 50vw"
            slideFrom="left"
            src={rights.imageSrc}
          />

          <div className="order-1 flex min-w-0 max-w-full justify-start lg:order-2 lg:justify-end">
            <motion.div
              className="w-full min-w-0 max-w-[min(100%,40rem)] text-left"
              initial={reduceMotion ? false : "hidden"}
              viewport={view}
              whileInView="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } }
              }}
            >
              <motion.h2 className={cn(headlineClass, "text-left")} variants={fadeUpItem}>
                {rights.headline}
              </motion.h2>
              {rights.paragraphs.map((p, i) => (
                <motion.p
                  key={`rights-p-${i}`}
                  className={cn(bodyMuted, "text-left", i === 0 ? "mt-3 sm:mt-4" : "mt-4")}
                  variants={fadeUpItem}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
    </AboutLeadPageShell>
  );
}

/**
 * Same visual language as the first row of About Us (text + image card with lime corner accent).
 * For `/about/our-story` and similar single-hero pages.
 */
export function AboutUsSingleRowLead({
  body,
  className,
  hero,
  imageAlt,
  imageSrc
}: {
  body: string;
  className?: string;
  hero: AboutUsHeroContent;
  imageAlt: string;
  imageSrc: string;
}) {
  const reduceMotion = useReducedMotion();
  const { kicker, headline } = hero;

  return (
    <AboutLeadPageShell className={className}>
      <div className="relative z-[1] grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
        <motion.div
          className="relative min-w-0 max-w-full pr-12 sm:pr-16 md:pr-20 lg:max-w-none lg:pr-8"
          initial={reduceMotion ? false : "hidden"}
          viewport={view}
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } }
          }}
        >
          <motion.p className="faq-kicker !mx-0 !mb-3 !mt-0 text-left sm:!mb-3.5" variants={fadeUpItem}>
            {kicker}
          </motion.p>
          <motion.h1 className={cn(headlineClass, "text-left")} variants={fadeUpItem}>
            {headline}
          </motion.h1>
          <motion.p className={cn(bodyMuted, "mt-3 max-w-none text-left sm:mt-4")} variants={fadeUpItem}>
            {body}
          </motion.p>
        </motion.div>

        <LeadImageCard
          alt={imageAlt}
          className="mx-auto max-w-lg sm:max-w-none lg:mx-0"
          priority
          reduceMotion={!!reduceMotion}
          sizes="(max-width: 1024px) 100vw, 50vw"
          slideFrom="right"
          src={imageSrc}
        />
      </div>
    </AboutLeadPageShell>
  );
}
