"use client";

import { Fragment, useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";

import {
  aboutBandPillClassName,
  aboutBenefitsHeadingUppercase,
  aboutInnerBelowBandPill,
  aboutSectionShell
} from "@/components/about/about-us-page-theme";
import { SectionPillHeading } from "@/components/sections/section-pill-heading";
import type { AboutUsSectionPillStack } from "@/data/about/about-us";

import { cn } from "@/lib/utils";

const pClass = cn(
  "m-0 min-w-0 max-w-full text-[14px] font-normal leading-relaxed text-[#b4b4b4] [overflow-wrap:anywhere] sm:text-base sm:leading-[1.68]"
);

const titleClass = cn(
  aboutBenefitsHeadingUppercase,
  "mb-3 max-lg:text-base max-lg:leading-snug max-lg:tracking-[0.08em] max-lg:sm:text-lg max-lg:md:text-xl sm:mb-4"
);

function padNum(n: number) {
  return String(n).padStart(2, "0");
}

function StaticTimelineCircle({ label }: { label: string }) {
  return (
    <div className="relative z-[2] flex h-[3rem] w-[3rem] shrink-0 items-center justify-center sm:h-14 sm:w-14">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full border-2 border-white/18 bg-zinc-950/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
      />
      <div
        aria-hidden
        className="absolute inset-[3px] rounded-full bg-[var(--color-primary)] shadow-[0_0_16px_color-mix(in_oklab,var(--color-primary)_38%,transparent)] sm:shadow-[0_0_26px_color-mix(in_oklab,var(--color-primary)_48%,transparent)]"
      />
      <span className="relative z-[1] text-[0.72rem] font-black tabular-nums leading-none text-[#0b0b0b] sm:text-[0.8rem]">
        {label}
      </span>
    </div>
  );
}

function AnimatedTimelineCircle({ fill, label }: { fill: MotionValue<number>; label: string }) {
  const smooth = useSpring(fill, { stiffness: 160, damping: 32, mass: 0.38 });
  const ringScale = useTransform(smooth, [0, 1], [0.1, 1]);
  const labelColor = useTransform(smooth, [0, 0.38, 1], ["#f4f4f5", "#f4f4f5", "#0b0b0b"]);
  const ringGlow = useTransform(smooth, [0, 0.15, 1], [0.25, 0.85, 1]);
  const borderColor = useTransform(
    smooth,
    [0, 0.45, 1],
    ["rgba(255,255,255,0.18)", "rgba(132,235,12,0.65)", "rgba(255,255,255,0.14)"]
  );

  return (
    <div className="relative z-[2] flex h-[3rem] w-[3rem] shrink-0 items-center justify-center sm:h-14 sm:w-14">
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full border-2 bg-zinc-950/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
        style={{ borderColor }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-[-2px] rounded-full sm:inset-[-4px]"
        style={{
          opacity: ringGlow,
          boxShadow: "0 0 28px color-mix(in oklab, var(--color-primary) 42%, transparent)"
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-[3px] rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_color-mix(in_oklab,var(--color-primary)_40%,transparent)] sm:shadow-[0_0_26px_color-mix(in_oklab,var(--color-primary)_48%,transparent)]"
        style={{
          scale: ringScale,
          opacity: ringScale
        }}
      />
      <motion.span
        className="relative z-[1] text-[0.72rem] font-black tabular-nums leading-none sm:text-[0.8rem]"
        style={{ color: labelColor }}
      >
        {label}
      </motion.span>
    </div>
  );
}

export function AboutUsPurposeVisionTimeline({ section }: { section: AboutUsSectionPillStack }) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.78", "end 0.32"]
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 220 : 78,
    damping: reduceMotion ? 90 : 24,
    mass: 0.45
  });

  const fill0 = useTransform(progress, [0.06, 0.34], [0, 1], { clamp: true });
  const fill1 = useTransform(progress, [0.32, 0.58], [0, 1], { clamp: true });
  const fill2 = useTransform(progress, [0.56, 0.92], [0, 1], { clamp: true });
  const fills = [fill0, fill1, fill2];

  return (
    <div>
      <SectionPillHeading className={aboutBandPillClassName} heading={section.pill} variant={section.pillVariant} />
      <section className={aboutSectionShell}>
        <div className={aboutInnerBelowBandPill}>
          <div ref={containerRef} className="relative w-full min-w-0 max-w-full px-2 py-4 sm:px-3 sm:py-6 md:px-0 md:py-8">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-10 bottom-10 hidden w-0 -translate-x-1/2 lg:block"
            >
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white/[0.1]" />
              <motion.div
                className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 origin-top rounded-full bg-[var(--color-primary)] shadow-[0_0_24px_color-mix(in_oklab,var(--color-primary)_42%,transparent)]"
                style={{ scaleY: reduceMotion ? 1 : progress }}
              />
            </div>

            <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
              {section.stacks.map((stack, i) => {
                const label = padNum(i + 1);
                const fill = fills[i] ?? fill2;
                const textOnRight = i % 2 === 0;

                const block = (
                  <div className="w-full min-w-0 max-w-full lg:max-w-none">
                    <h3 className={cn(titleClass, "text-left")}>{stack.title}</h3>
                    <div className="space-y-2.5 sm:space-y-4">
                      {stack.paragraphs.map((text, j) => (
                        <p key={`${stack.title}-${j}`} className={cn(pClass, "text-left")}>
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                );

                const circle = reduceMotion ? (
                  <StaticTimelineCircle label={label} />
                ) : (
                  <AnimatedTimelineCircle fill={fill} label={label} />
                );

                return (
                  <Fragment key={stack.title}>
                    <motion.div
                      className="relative flex flex-col items-stretch gap-4 pb-0 pt-0 sm:gap-5 sm:pt-1 lg:flex-row lg:items-center lg:gap-10 lg:px-1 lg:pb-0 lg:pt-2"
                      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                      viewport={{ once: true, margin: "-48px 0px", amount: 0.15 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    >
                      {textOnRight ? (
                        <>
                          <div className="hidden min-h-[1px] flex-1 lg:block" aria-hidden />
                          <div className="order-1 flex shrink-0 justify-center lg:order-none lg:w-14">{circle}</div>
                          <div className="order-2 w-full min-w-0 flex-1 lg:order-none lg:min-w-0 lg:pl-5">{block}</div>
                        </>
                      ) : (
                        <>
                          <div className="order-2 w-full min-w-0 flex-1 lg:order-none lg:min-w-0 lg:pr-5">{block}</div>
                          <div className="order-1 flex shrink-0 justify-center lg:order-none lg:w-14">{circle}</div>
                          <div className="hidden min-h-[1px] flex-1 lg:block" aria-hidden />
                        </>
                      )}
                    </motion.div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
