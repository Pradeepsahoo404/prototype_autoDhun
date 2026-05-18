"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const RED = "#e8222a";

export function AutodhunRedOrbitGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <div
      className={cn(
        "relative mx-auto w-full min-h-[min(88vw,320px)] max-w-[min(100%,600px)] sm:min-h-[min(70vw,380px)] lg:min-h-[400px]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-95 blur-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${RED} 42%, transparent) 0%, color-mix(in oklab, ${RED} 14%, transparent) 50%, transparent 75%)`
        }}
      />

      <motion.figure
        className="relative z-[10] mx-auto w-full px-2 sm:px-0"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          alt="Autodhun Red — premium membership for artists, labels, and producers"
          className="h-auto w-full rounded-2xl object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_40px_rgba(232,34,42,0.28)] sm:rounded-3xl"
          height={900}
          priority={false}
          sizes="(max-width: 1024px) 92vw, 600px"
          src="/PictureRed.png"
          width={1600}
        />
      </motion.figure>
    </div>
  );
}
