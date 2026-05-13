"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FadeUp } from "@/components/services/fade-up";
import { cn } from "@/lib/utils";

export type ServiceVisualHighlightContent = {
  imageSrc: string;
  imageAlt: string;
};

export type ServiceVisualHighlightAnimatedProps = {
  content: ServiceVisualHighlightContent;
  className?: string;
  /** Match hero spacing (default true). Set false for standalone section padding. */
  blendWithHero?: boolean;
  /** Music page adds corner waveform accents. */
  waveformDetail?: "simple" | "music";
  /** Optional absolute layers inside the wide container (e.g. flanking mockups). */
  beforeMainColumn?: ReactNode;
};

function AmbientHalo({ reduceMotion }: { reduceMotion: boolean }) {
  const baseClass =
    "pointer-events-none absolute left-1/2 top-[56%] z-0 aspect-square w-[min(140vw,960px)] max-w-[min(100vw,980px)] -translate-x-1/2 -translate-y-1/2 opacity-90 sm:top-[54%]";
  const style = {
    background: [
      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-primary) 38%, transparent) 0%, transparent 45%)",
      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-primary) 18%, transparent) 0%, transparent 62%)"
    ].join(", "),
    filter: "blur(52px)",
    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%)",
    maskImage: "linear-gradient(to bottom, transparent 0%, black 22%)"
  } as const;

  if (reduceMotion) {
    return <div aria-hidden className={baseClass} style={style} />;
  }

  return (
    <motion.div
      aria-hidden
      className={baseClass}
      style={style}
      animate={{ scale: [1, 1.06, 1], opacity: [0.82, 0.95, 0.82] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function SpatialSoundRings({ reduceMotion }: { reduceMotion: boolean }) {
  if (reduceMotion) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[42%] z-[8] -translate-x-1/2 -translate-y-1/2 sm:top-[40%]"
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(72vw,420px)] w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[color-mix(in_oklab,var(--color-primary)_22%,transparent)] opacity-50"
        animate={{ rotate: [0, 360], scale: [1, 1.02, 1] }}
        transition={{
          rotate: { duration: 56, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(58vw,340px)] w-[min(76vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] opacity-40"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function FloatingLimeSphere({
  className,
  reduceMotion
}: {
  className?: string;
  reduceMotion: boolean;
}) {
  const floatTransition = { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none relative z-[25] flex w-full flex-col items-center justify-end", className)}
    >
      <div className="absolute bottom-0 left-1/2 h-[min(28vw,200px)] w-[min(90vw,520px)] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_45%,transparent),transparent_75%)] opacity-80 blur-3xl" />
      <div className="absolute bottom-1 left-1/2 h-24 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_50%_100%,rgba(132,235,12,0.35),transparent_70%)] blur-xl sm:h-28 sm:w-56" />

      <motion.div
        className="relative flex items-center justify-center pb-1 sm:pb-2"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : floatTransition}
      >
        <motion.div
          className="absolute h-[4.5rem] w-[4.5rem] rounded-full bg-[var(--color-primary)] opacity-35 blur-2xl sm:h-[5.75rem] sm:w-[5.75rem]"
          style={{ transform: "translateY(10%)" }}
          animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.28, 0.42, 0.28] }}
          transition={reduceMotion ? undefined : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-24 w-24 rounded-full sm:h-28 sm:w-28"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(132,235,12,0.5) 0%, transparent 55%)",
            filter: "blur(18px)",
            transform: "translateY(35%)"
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
          transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.div
          className="relative h-14 w-14 rounded-full sm:h-[4.25rem] sm:w-[4.25rem]"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #e8ff9a 0%, var(--color-primary) 42%, color-mix(in oklab, var(--color-primary) 65%, #14532d) 88%, #0f172a 100%)",
            boxShadow:
              "0 0 28px rgba(132,235,12,0.75), 0 0 64px rgba(132,235,12,0.35), 0 12px 28px rgba(0,0,0,0.55), inset 0 2px 12px rgba(255,255,255,0.35), inset 0 -10px 22px rgba(0,0,0,0.45)"
          }}
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], boxShadow: [
            "0 0 28px rgba(132,235,12,0.75), 0 0 64px rgba(132,235,12,0.35), 0 12px 28px rgba(0,0,0,0.55), inset 0 2px 12px rgba(255,255,255,0.35), inset 0 -10px 22px rgba(0,0,0,0.45)",
            "0 0 36px rgba(132,235,12,0.9), 0 0 80px rgba(132,235,12,0.45), 0 12px 28px rgba(0,0,0,0.55), inset 0 2px 12px rgba(255,255,255,0.35), inset 0 -10px 22px rgba(0,0,0,0.45)",
            "0 0 28px rgba(132,235,12,0.75), 0 0 64px rgba(132,235,12,0.35), 0 12px 28px rgba(0,0,0,0.55), inset 0 2px 12px rgba(255,255,255,0.35), inset 0 -10px 22px rgba(0,0,0,0.45)"
          ] }}
          transition={reduceMotion ? undefined : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}

function PremiumParticles({ reduceMotion }: { reduceMotion: boolean }) {
  const spots = [
    { t: "8%", l: "6%", s: 3, o: 0.5 },
    { t: "18%", l: "14%", s: 2, o: 0.35 },
    { t: "12%", l: "88%", s: 4, o: 0.45 },
    { t: "28%", l: "4%", s: 2, o: 0.3 },
    { t: "42%", l: "92%", s: 3, o: 0.4 },
    { t: "62%", l: "8%", s: 2, o: 0.25 },
    { t: "72%", l: "90%", s: 4, o: 0.38 },
    { t: "88%", l: "12%", s: 2, o: 0.32 },
    { t: "78%", l: "78%", s: 3, o: 0.28 },
    { t: "34%", l: "22%", s: 2, o: 0.22 }
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {spots.map((p, i) =>
        reduceMotion ? (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--color-primary)]"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              opacity: p.o,
              boxShadow: "0 0 8px rgba(132,235,12,0.6)"
            }}
          />
        ) : (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[var(--color-primary)]"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              boxShadow: "0 0 8px rgba(132,235,12,0.6)"
            }}
            initial={{ opacity: p.o }}
            animate={{
              y: [0, -10 - (i % 3) * 4, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * (6 + (i % 4)), 0],
              opacity: [p.o * 0.55, p.o, p.o * 0.55]
            }}
            transition={{
              duration: 4.2 + (i % 5) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12
            }}
          />
        )
      )}
    </div>
  );
}

function WaveformAccents({
  reduceMotion,
  detail
}: {
  reduceMotion: boolean;
  detail: "simple" | "music";
}) {
  const baseSvgClass =
    "pointer-events-none absolute inset-0 z-[6] h-full w-full overflow-visible opacity-[0.22]";

  const zigzagPaths =
    detail === "music" ? (
      <>
        <path
          d="M100 120 L108 140 L116 100 L124 150 L132 95 L140 130"
          fill="none"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M1020 100 L1032 128 L1044 88 L1056 138 L1068 92 L1080 124"
          fill="none"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />
      </>
    ) : null;

  if (reduceMotion) {
    return (
      <svg aria-hidden className={baseSvgClass} preserveAspectRatio="none" viewBox="0 0 1200 600">
        <path
          d="M40 420 Q180 360 320 400 T600 380 T880 420 T1160 400"
          fill="none"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
        <path
          d="M80 480 Q240 520 400 460 T720 500 T1080 460"
          fill="none"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeOpacity="0.5"
          strokeWidth="0.9"
        />
        {zigzagPaths}
      </svg>
    );
  }

  return (
    <svg
      aria-hidden
      className={cn(baseSvgClass, "opacity-[0.26]")}
      preserveAspectRatio="none"
      viewBox="0 0 1200 600"
    >
      <motion.g
        animate={{ x: [-14, 14, -14] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M40 420 Q180 360 320 400 T600 380 T880 420 T1160 400"
          fill="none"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
      </motion.g>
      <motion.g
        animate={{ x: [12, -12, 12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <path
          d="M80 480 Q240 520 400 460 T720 500 T1080 460"
          fill="none"
          stroke="var(--color-primary)"
          strokeLinecap="round"
          strokeOpacity="0.5"
          strokeWidth="0.9"
        />
      </motion.g>
      {detail === "music" ? (
        <>
          <motion.g
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <path
              d="M100 120 L108 140 L116 100 L124 150 L132 95 L140 130"
              fill="none"
              stroke="var(--color-primary)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </motion.g>
          <motion.g
            animate={{ x: [8, -8, 8] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          >
            <path
              d="M1020 100 L1032 128 L1044 88 L1056 138 L1068 92 L1080 124"
              fill="none"
              stroke="var(--color-primary)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.7"
              strokeWidth="1.5"
            />
          </motion.g>
        </>
      ) : null}
    </svg>
  );
}

export function ServiceVisualHighlightAnimated({
  content,
  className,
  blendWithHero = true,
  waveformDetail = "simple",
  beforeMainColumn
}: ServiceVisualHighlightAnimatedProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black text-white",
        blendWithHero ? "pt-6 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24" : "py-14 sm:py-16 md:py-20",
        className
      )}
    >
      <AmbientHalo reduceMotion={reduceMotion} />
      <PremiumParticles reduceMotion={reduceMotion} />
      <WaveformAccents reduceMotion={reduceMotion} detail={waveformDetail} />
      <SpatialSoundRings reduceMotion={reduceMotion} />

      <div className="faq-container relative z-[10]">
        <FadeUp>
          <div className="relative mx-auto min-h-[min(72vh,840px)] w-full max-w-[min(100%,1320px)] px-3 sm:min-h-[min(78vh,920px)] sm:px-5 lg:px-8">
            {beforeMainColumn}
            <div className="relative mx-auto flex w-full max-w-[min(100%,720px)] flex-col items-center pt-14 sm:max-w-[min(100%,820px)] sm:pt-20 md:pt-24 lg:pt-28">
              <FloatingLimeSphere className="-mb-2 sm:-mb-3" reduceMotion={reduceMotion} />

              <motion.figure
                className="relative z-[15] w-full"
                animate={reduceMotion ? undefined : { y: [0, -4, 0], scale: [1, 1.015, 1] }}
                transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative mx-auto w-full bg-transparent">
                  <div className="relative mx-auto h-[min(68vh,900px)] w-full min-h-[min(52vh,480px)] max-w-full sm:min-h-[min(56vh,540px)] md:h-[min(70vh,940px)]">
                    <Image
                      alt={content.imageAlt}
                      className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, min(820px, 100vw)"
                      src={content.imageSrc}
                    />
                  </div>
                </div>
              </motion.figure>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
