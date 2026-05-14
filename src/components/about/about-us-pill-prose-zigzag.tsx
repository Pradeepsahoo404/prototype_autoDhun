import {
  aboutBandPillClassName,
  aboutGlowCardClass,
  aboutInnerBelowBandPill,
  aboutSectionShell
} from "@/components/about/about-us-page-theme";
import { SectionPillHeading } from "@/components/sections/section-pill-heading";
import type { AboutUsSectionPillProse } from "@/data/about/about-us";

import { cn } from "@/lib/utils";

const pClass = cn(
  "m-0 min-w-0 max-w-full text-left text-[15px] font-normal leading-relaxed text-[#989898] [overflow-wrap:anywhere] sm:text-base sm:leading-[1.65]"
);

/**
 * Band pill + full-width glow card — matches About Us rhythm (no hairline section breaks).
 */
export function AboutUsPillProseZigzag({ section }: { section: AboutUsSectionPillProse }) {
  return (
    <div>
      <SectionPillHeading className={aboutBandPillClassName} heading={section.pill} variant={section.pillVariant} />
      <section className={aboutSectionShell}>
        <div className={aboutInnerBelowBandPill}>
          <div className={cn(aboutGlowCardClass, "w-full min-w-0 max-w-full px-3 py-6 sm:px-5 sm:py-8 md:px-8 md:py-10")}>
            <div className="space-y-4 sm:space-y-[1.125rem]">
              {section.paragraphs.map((text, i) => (
                <p key={`${section.id}-p-${i}`} className={pClass}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
