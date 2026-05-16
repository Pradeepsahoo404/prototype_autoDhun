"use client";

import { motion, useReducedMotion } from "framer-motion";

import { AboutLeadPageShell, aboutLeadHeroHeadlineClass, LeadImageCard } from "@/components/about/about-us-lead-split";
import type { OurStoryPageContent } from "@/data/about/our-story";
import { cn } from "@/lib/utils";

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

function TextColumn({
  blockKey,
  headline,
  kicker,
  paragraphs
}: {
  blockKey: string;
  headline: string;
  kicker: string;
  paragraphs: string[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative min-w-0 max-w-full pr-12 sm:pr-16 md:pr-20 lg:max-w-none lg:pr-8"
      initial={reduceMotion ? false : "hidden"}
      viewport={view}
      whileInView="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } }
      }}
    >
      <motion.p className="faq-kicker !mx-0 !mb-3 !mt-0 text-left sm:!mb-3.5" variants={fadeUpItem}>
        {kicker}
      </motion.p>
      <motion.h2
        className={cn(aboutLeadHeroHeadlineClass, "text-left")}
        id={`${blockKey}-headline`}
        variants={fadeUpItem}
      >
        {headline}
      </motion.h2>
      {paragraphs.map((p, i) => (
        <motion.p
          key={`${blockKey}-p-${i}`}
          className={cn(
            bodyMuted,
            "text-left",
            i === 0 ? "mt-3 max-w-none sm:mt-4" : "mt-4 max-w-none sm:mt-4"
          )}
          variants={fadeUpItem}
        >
          {p}
        </motion.p>
      ))}
    </motion.div>
  );
}

/** Matches About Us lead rows: block 1 text | image, block 2 image | text. */
export function OurStorySplit({ content }: { content: OurStoryPageContent }) {
  const reduceMotion = useReducedMotion();
  const { ourStory, whereWeWant } = content;

  return (
    <AboutLeadPageShell>
      {/* OUR STORY — copy left, image right */}
      <div className="relative z-[1] grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
        <TextColumn
          blockKey="our-story"
          headline={ourStory.headline}
          kicker={ourStory.kicker}
          paragraphs={ourStory.paragraphs}
        />
        <LeadImageCard
          alt={ourStory.image.alt}
          className="mx-auto max-w-lg sm:max-w-none lg:mx-0"
          priority
          reduceMotion={!!reduceMotion}
          sizes="(max-width: 1024px) 100vw, 50vw"
          slideFrom="right"
          src={ourStory.image.src}
        />
      </div>

      {/* Where we want — image left, copy right (same pattern as About Us row 2) */}
      <div className="relative z-[1] mt-12 grid min-w-0 grid-cols-1 items-start gap-8 pt-12 sm:mt-14 sm:gap-10 sm:pt-14 md:mt-16 md:gap-12 md:pt-16 lg:grid-cols-2 lg:gap-x-14">
        <LeadImageCard
          alt={whereWeWant.image.alt}
          className="order-2 mx-auto max-w-lg sm:max-w-none lg:order-1 lg:mx-0"
          reduceMotion={!!reduceMotion}
          sizes="(max-width: 1024px) 100vw, 50vw"
          slideFrom="left"
          src={whereWeWant.image.src}
        />

        <div className="order-1 flex min-w-0 max-w-full justify-start lg:order-2 lg:justify-end">
          <div className="w-full min-w-0 max-w-[min(100%,40rem)]">
            <TextColumn
              blockKey="where-we-want"
              headline={whereWeWant.headline}
              kicker={whereWeWant.kicker}
              paragraphs={whereWeWant.paragraphs}
            />
          </div>
        </div>
      </div>
    </AboutLeadPageShell>
  );
}
