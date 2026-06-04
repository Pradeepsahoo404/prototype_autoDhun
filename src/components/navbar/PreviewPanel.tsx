"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { NavMenuEntry } from "@/components/navbar/menuData";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

type PreviewPanelProps = {
  active: NavMenuEntry | null;
  /** When true, fills parent (under diagonal panel). No clip-path — panel masks the seam. */
  fullBleed?: boolean;
};

/**
 * All nav JPGs (1600×1066): fill the preview area edge-to-edge with cover + center.
 * Background layer avoids img sizing quirks and guarantees no-repeat.
 */
function NavPreviewBackground({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      aria-label={alt}
      className="absolute inset-0 size-full bg-black bg-cover bg-center bg-no-repeat"
      role="img"
      style={{ backgroundImage: `url("${src}")` }}
    />
  );
}

export function PreviewPanel({ active, fullBleed = false }: PreviewPanelProps) {
  const reduceMotion = useReducedMotion();
  const tImage = reduceMotion ? 0.18 : 0.62;

  return (
    <div
      className={cn(
        "relative size-full min-h-0 overflow-hidden bg-black",
        !fullBleed && "min-h-[min(52vh,420px)] lg:min-h-0"
      )}
    >
      <div
        className={cn(
          "relative size-full min-h-0",
          !fullBleed &&
            "min-h-[min(52vh,420px)] lg:min-h-0 lg:[clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)]"
        )}
        aria-hidden={!active}
      >
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="absolute inset-0 size-full"
              exit={{ opacity: 0, x: reduceMotion ? 0 : 36 }}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 32 }}
              key={active.id}
              transition={{ duration: tImage, ease: easeLux }}
            >
              <NavPreviewBackground alt={active.imageAlt} src={active.image} />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/15" />

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
