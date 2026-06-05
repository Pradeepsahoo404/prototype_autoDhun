"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { AutodhunRedOrbitGraphic } from "@/components/autodhun-red/autodhun-red-orbit-graphic";
import { FadeUp } from "@/components/services/fade-up";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navActionBtn =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-semibold no-underline transition-[background-color,border-color,color,transform] sm:px-6";

const redHeadlineClass = cn(
  "faq-title !mx-0 min-w-0 max-w-full text-balance text-left",
  "!text-[clamp(1.35rem,min(4.2vw,5vmin),2.5rem)] !leading-[1.14] !tracking-[-0.01em]",
  "text-[#e8222a]"
);

const bodyClass =
  "m-0 w-full max-w-full text-[15px] font-normal leading-relaxed text-white/70 [overflow-wrap:anywhere] sm:text-base sm:leading-[1.65]";

const view = { once: true, margin: "-48px 0px", amount: 0.2 } as const;

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const whyChooseBullets = [
  "Premium Membership for Artists, Labels & Producers",
  "Worldwide Music Distribution",
  "YouTube & Social Media Monetization",
  "Advanced Royalty & Revenue Management",
  "Fast & Priority Music Release Services",
  "Professional Branding & Promotional Support",
  "Dedicated Artist Assistance",
  "Secure, Transparent & Growth-Focused Platform"
] as const;

const RED = "#e8222a";

export function AutodhunRedStageSplit() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="autodhun-red-block relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/4 h-[min(50vw,400px)] w-[min(60vw,480px)] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232, 34, 42, 0.2) 0%, transparent 70%)"
        }}
      />

      <div className="faq-container relative z-[1]">
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 xl:gap-x-14">
          <motion.div
            className="relative min-w-0 max-w-full text-left"
            initial={reduceMotion ? false : "hidden"}
            viewport={view}
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } }
            }}
          >
            <motion.h2 className={redHeadlineClass} variants={fadeUpItem}>
              Your Music. Your Identity. Your Global Stage.
            </motion.h2>

            <motion.p className={cn(bodyClass, "mt-5 sm:mt-6")} variants={fadeUpItem}>
              We believe every creator deserves a stage without limits. Whether you are an emerging
              independent artist or an established label, Autodhun Red provides the tools, support,
              and industry reach needed to transform creativity into a global presence.
            </motion.p>

            <motion.p className={cn(bodyClass, "mt-4 sm:mt-5")} variants={fadeUpItem}>
              From music distribution across major streaming platforms to royalty management,
              branding support, content monetization, and priority release services — every feature
              is crafted to empower creators with complete control and maximum exposure.
            </motion.p>

            <motion.div className="mt-8 sm:mt-10" variants={fadeUpItem}>
              <LinkButton
                className={`${navActionBtn} !h-11 w-auto !rounded-full !border-0 !bg-[#e8222a] !px-6 !text-[#0b0b0b] text-sm font-bold shadow-[0_0_40px_rgba(232,34,42,0.45)] transition-[filter,transform] hover:brightness-110 active:translate-y-px sm:!h-12 sm:!px-8 sm:text-base`}
                href="/autodhun-red/plans"
                variant="ghost"
              >
                BECOME A MEMBER
              </LinkButton>
            </motion.div>
          </motion.div>

          <FadeUp className="flex w-full min-w-0 items-center justify-center lg:justify-end">
            <AutodhunRedOrbitGraphic className="w-full lg:max-w-[min(100%,600px)]" />
          </FadeUp>
        </div>

        <div className="mt-16 grid min-w-0 grid-cols-1 items-start gap-6 pt-10 sm:mt-20 sm:gap-8 sm:pt-12 md:mt-24 md:pt-14 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-14">
          <motion.div
            className="relative min-w-0 max-w-full text-left"
            initial={reduceMotion ? false : "hidden"}
            viewport={view}
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } }
            }}
          >
            <motion.h2 className={redHeadlineClass} variants={fadeUpItem}>
              Why Choose Autodhun Red?
            </motion.h2>
          </motion.div>

          <motion.div
            className="min-w-0 max-w-full text-left lg:pt-1"
            initial={reduceMotion ? false : "hidden"}
            viewport={view}
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } }
            }}
          >
            <ul className="m-0 w-full max-w-full list-none space-y-3 p-0 sm:space-y-3.5">
              {whyChooseBullets.map((item) => (
                <motion.li
                  key={item}
                  className="flex gap-3 text-left text-[15px] font-normal leading-relaxed text-white/70 sm:text-base sm:leading-[1.65]"
                  variants={fadeUpItem}
                >
                  <span
                    aria-hidden
                    className="mt-[0.55rem] size-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: RED,
                      boxShadow: `0 0 8px color-mix(in oklab, ${RED} 55%, transparent)`
                    }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
