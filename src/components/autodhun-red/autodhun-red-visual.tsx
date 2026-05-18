"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { FadeUp } from "@/components/services/fade-up";
import { cn } from "@/lib/utils";

const RED = "#e8222a";

function RedAmbientHalo({ reduceMotion }: { reduceMotion: boolean }) {
  const style = {
    background: [
      `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${RED} 38%, transparent) 0%, transparent 45%)`,
      `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${RED} 18%, transparent) 0%, transparent 62%)`
    ].join(", "),
    filter: "blur(52px)",
    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 22%)",
    maskImage: "linear-gradient(to bottom, transparent 0%, black 22%)"
  } as const;

  const baseClass =
    "pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(120vw,720px)] max-w-full -translate-x-1/2 -translate-y-1/2 opacity-90";

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

function RedParticles({ reduceMotion }: { reduceMotion: boolean }) {
  const spots = [
    { t: "10%", l: "8%", s: 3, o: 0.45 },
    { t: "20%", l: "88%", s: 3, o: 0.4 },
    { t: "70%", l: "6%", s: 2, o: 0.3 },
    { t: "80%", l: "90%", s: 3, o: 0.35 }
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {spots.map((p, i) =>
        reduceMotion ? (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              opacity: p.o,
              background: RED,
              boxShadow: `0 0 8px color-mix(in oklab, ${RED} 60%, transparent)`
            }}
          />
        ) : (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              background: RED,
              boxShadow: `0 0 8px color-mix(in oklab, ${RED} 60%, transparent)`
            }}
            initial={{ opacity: p.o }}
            animate={{
              y: [0, -8, 0],
              opacity: [p.o * 0.55, p.o, p.o * 0.55]
            }}
            transition={{
              duration: 4.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15
            }}
          />
        )
      )}
    </div>
  );
}

/** Promo visual before CTA — same layout pattern as service visual highlights, red theme. */
export function AutodhunRedVisual({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className={cn("relative mt-5 w-full sm:mt-6", className)}>
      <FadeUp>
        <div className="relative mx-auto w-full max-w-[min(100%,1320px)] overflow-hidden py-2">
          <RedAmbientHalo reduceMotion={reduceMotion} />
          <RedParticles reduceMotion={reduceMotion} />

          <motion.figure
            className="relative z-[15] w-full"
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative mx-auto w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
              <Image
                alt="Autodhun Red — premium membership for artists, labels, and music producers"
                className="h-auto w-full object-contain object-center"
                height={900}
                priority
                sizes="(max-width: 1320px) 100vw, 1320px"
                src="/PictureRed.png"
                width={1600}
              />
            </div>
          </motion.figure>
        </div>
      </FadeUp>
    </div>
  );
}
