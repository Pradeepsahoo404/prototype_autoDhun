"use client";

import { autodhunRedImages } from "@/lib/site-images";
import { SiteImage } from "@/components/ui/site-image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const RED = "#e8222a";

export function AutodhunRedOrbitGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div className={cn("relative mx-auto w-full max-w-[min(100%,600px)]", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-95 blur-3xl sm:rounded-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${RED} 42%, transparent) 0%, color-mix(in oklab, ${RED} 14%, transparent) 50%, transparent 75%)`
        }}
      />

      <motion.figure
        className="relative z-[10] w-full px-2 sm:px-0"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-2xl sm:rounded-3xl",
            "aspect-[16/10] max-h-[min(52vw,320px)] sm:max-h-[360px]",
            "shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_40px_rgba(232,34,42,0.28)]"
          )}
        >
          <SiteImage
            alt="Your music, your identity, your global stage — Autodhun Red"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1024px) 92vw, 600px"
            src={autodhunRedImages.heroStage}
          />
        </div>
      </motion.figure>
    </div>
  );
}
