"use client";

import { AboutUsPillProseZigzag } from "@/components/about/about-us-pill-prose-zigzag";
import { AboutUsPurposeVisionTimeline } from "@/components/about/about-us-purpose-vision-timeline";
import { AboutSectionReveal } from "@/components/about/about-us-section-reveal";
import {
  aboutBandPillClassName,
  aboutBenefitsHeadingTitleCase,
  aboutBenefitsHeadingUppercase,
  aboutGlowCardClass,
  aboutInnerBelowBandPill,
  aboutSectionInner,
  aboutSectionShell,
  aboutWhyChooseBulletTitleClass
} from "@/components/about/about-us-page-theme";
import { SectionPillHeading } from "@/components/sections/section-pill-heading";
import type { AboutUsSection } from "@/data/about/about-us";

import { cn } from "@/lib/utils";

const paragraphSpace = "space-y-4 max-w-[min(100%,46rem)]";

const paragraphSpaceFull = "space-y-4 sm:space-y-[1.125rem]";

const pClass = cn(
  "m-0 min-w-0 max-w-full text-left text-[15px] font-normal leading-relaxed text-[#989898] [overflow-wrap:anywhere] sm:text-base sm:leading-[1.65]"
);

const stackTitleClass = cn(aboutBenefitsHeadingTitleCase, "mb-3 sm:mb-4");

const bulletTitleClass = aboutWhyChooseBulletTitleClass;

const storySubheadingClass = cn(aboutBenefitsHeadingUppercase, "mb-5 sm:mb-6");

function ProseBlocks({
  blockKey,
  fullWidth = false,
  paragraphs
}: {
  blockKey: string;
  fullWidth?: boolean;
  paragraphs: string[];
}) {
  return (
    <div className={fullWidth ? paragraphSpaceFull : paragraphSpace}>
      {paragraphs.map((text, i) => (
        <p key={`${blockKey}-p-${i}`} className={pClass}>
          {text}
        </p>
      ))}
    </div>
  );
}

function renderSection(section: AboutUsSection) {
  switch (section.kind) {
    case "prose":
      return (
        <section aria-labelledby={`${section.id}-heading`} className={aboutSectionShell}>
          <div className={aboutSectionInner}>
            <h2 className="sr-only" id={`${section.id}-heading`}>
              Mission
            </h2>
            <ProseBlocks blockKey={section.id} paragraphs={section.paragraphs} />
          </div>
        </section>
      );

    case "pill-prose":
      return null;

    case "pill-stack":
      if (section.id === "purpose-vision-future") {
        return <AboutUsPurposeVisionTimeline section={section} />;
      }
      return (
        <div>
          <SectionPillHeading className={aboutBandPillClassName} heading={section.pill} variant={section.pillVariant} />
          <section className={aboutSectionShell}>
            <div className={aboutInnerBelowBandPill}>
              <div className={cn(aboutGlowCardClass, "w-full min-w-0 max-w-full px-3 py-6 sm:px-5 sm:py-8 md:px-8 md:py-10")}>
                <div className="space-y-8 sm:space-y-10">
                  {section.stacks.map((stack) => (
                    <div key={stack.title}>
                      <h3 className={`${stackTitleClass} text-left`}>{stack.title}</h3>
                      <ProseBlocks
                        blockKey={`${section.id}-${stack.title}`}
                        fullWidth
                        paragraphs={stack.paragraphs}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      );

    case "pill-bullets":
      return (
        <div>
          <SectionPillHeading
            className={aboutBandPillClassName}
            heading={section.pill}
            pillClassName="px-8 py-3 text-[17px] sm:px-10 sm:py-3.5 sm:text-[19px]"
            variant={section.pillVariant}
          />
          <section className={aboutSectionShell}>
            <div className={aboutInnerBelowBandPill}>
              <div className={cn(aboutGlowCardClass, "w-full min-w-0 max-w-full px-3 py-6 sm:px-5 sm:py-8 md:px-8 md:py-10")}>
                <ul className="m-0 grid w-full list-none gap-6 p-0 sm:gap-7 md:gap-8">
                  {section.bullets.map((item) => (
                    <li key={item.title} className="min-w-0">
                      <p className={bulletTitleClass}>{item.title}</p>
                      <p className={cn(pClass, "mt-2 text-left sm:mt-2.5")}>{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      );

    case "pill-lead-prose":
      return (
        <div>
          <SectionPillHeading className={aboutBandPillClassName} heading={section.pill} variant={section.pillVariant} />
          <section className={aboutSectionShell}>
            <div className={aboutInnerBelowBandPill}>
              <div className={cn(aboutGlowCardClass, "w-full min-w-0 max-w-full px-3 py-6 sm:px-5 sm:py-8 md:px-8 md:py-10")}>
                <h3 className={storySubheadingClass}>{section.subheading}</h3>
                <ProseBlocks blockKey={section.id} fullWidth paragraphs={section.paragraphs} />
              </div>
            </div>
          </section>
        </div>
      );

    default:
      return null;
  }
}

export function AboutUsSections({ sections }: { sections: AboutUsSection[] }) {
  return (
    <div className="relative w-full min-w-0 overflow-x-clip">
      {sections.map((section, i) => {
        const delay = Math.min(i * 0.065, 0.42);
        const content =
          section.kind === "pill-prose" ? (
            <AboutUsPillProseZigzag section={section} />
          ) : (
            renderSection(section)
          );

        if (content == null) {
          return null;
        }

        return (
          <AboutSectionReveal key={section.id} delay={delay}>
            {content}
          </AboutSectionReveal>
        );
      })}
    </div>
  );
}
