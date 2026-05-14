"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Full-page About Us shell: fixed ambient (orbs, grid, vignette) + content above.
 * Children stay server components when passed from the page route.
 */
export function AboutUsPageExperience({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-w-0 w-full max-w-[100vw] overflow-x-clip bg-black pb-[env(safe-area-inset-bottom,0px)]">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_55%_at_50%_-15%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.055] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.55) 1px, transparent 1.05px)",
            backgroundSize: "30px 30px"
          }}
        />
        {!reduceMotion ? (
          <>
            <motion.div
              className="absolute -left-[18%] top-[18%] h-[min(90vh,720px)] w-[min(85vw,820px)] max-w-[920px] rounded-full blur-[128px]"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--color-primary) 26%, transparent), transparent)"
              }}
              animate={{
                x: [0, 36, -14, 0],
                y: [0, 24, 12, 0],
                opacity: [0.1, 0.2, 0.12, 0.1]
              }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-[12%] bottom-[5%] h-[min(75vh,600px)] w-[min(78vw,700px)] max-w-[780px] rounded-full blur-[118px]"
              style={{
                background: "radial-gradient(closest-side, rgba(139, 92, 246, 0.2) 0%, transparent 70%)"
              }}
              animate={{
                x: [0, -28, 10, 0],
                y: [0, -18, 8, 0],
                opacity: [0.07, 0.14, 0.09, 0.07]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.div
              className="absolute left-[30%] top-[45%] h-[min(50vh,420px)] w-[min(55vw,480px)] rounded-full blur-[100px]"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, white 12%, transparent) 0%, transparent 100%)"
              }}
              animate={{ opacity: [0.04, 0.09, 0.05], scale: [1, 1.06, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_100%,color-mix(in_oklab,var(--color-primary)_10%,transparent)_0%,transparent_55%)]" />
        )}
      </div>

      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
