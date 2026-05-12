"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { NavMenuEntry } from "@/components/navbar/menuData";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

type PreviewPanelProps = {
  active: NavMenuEntry | null;
  /** When true, fills parent (under diagonal panel). No clip-path — panel masks the seam. */
  fullBleed?: boolean;
};

export function PreviewPanel({ active, fullBleed = false }: PreviewPanelProps) {
  const reduceMotion = useReducedMotion();
  const [previewHover, setPreviewHover] = useState(false);

  const tImage = reduceMotion ? 0.18 : 0.62;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-black",
        fullBleed
          ? "h-full min-h-[min(45vh,400px)] w-full lg:absolute lg:inset-0 lg:min-h-0"
          : "min-h-[min(52vh,420px)] w-full flex-1 lg:absolute lg:inset-0 lg:min-h-0"
      )}
    >
      <div
        className={cn(
          "relative h-full w-full",
          !fullBleed && "min-h-[min(52vh,420px)] lg:min-h-0 lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)]"
        )}
        aria-hidden={!active}
      >
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="absolute inset-0"
              exit={{ opacity: 0, x: reduceMotion ? 0 : 36 }}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 32 }}
              key={active.id}
              transition={{ duration: tImage, ease: easeLux }}
              onHoverEnd={() => setPreviewHover(false)}
              onHoverStart={() => setPreviewHover(true)}
            >
              <motion.div
                animate={{ scale: reduceMotion ? 1 : previewHover ? 1.045 : 1 }}
                className="absolute inset-0"
                transition={{ duration: reduceMotion ? 0.15 : 1.5, ease: easeLux }}
              >
                <Image
                  alt={active.imageAlt}
                  className="object-cover"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 100vw"
                  src={active.image}
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 pb-8 text-left sm:p-10 sm:pb-12 lg:p-12 lg:pb-14 xl:p-14 xl:pb-16">
                <p className="font-[family-name:var(--font-barlow),sans-serif] text-3xl font-normal uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  {active.title}
                </p>
                {active.description ? (
                  <p className="mt-3 max-w-lg text-sm font-normal leading-relaxed text-zinc-200 sm:mt-4 sm:text-base">
                    {active.description}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
