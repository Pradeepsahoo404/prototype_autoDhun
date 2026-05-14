import type { GrowthMusicMarketingBenefitsContent } from "@/data/growth/music-marketing";

import { FadeUp } from "@/components/services/fade-up";
import {
  ServiceBenefitsAmbientBackground,
  ServiceBenefitsBentoCard,
  ServiceBenefitsSectionHeader,
  serviceBenefitsGridClass
} from "@/components/services/service-benefits-shared";
import { cn } from "@/lib/utils";

export function GrowthMusicMarketingBenefitsSection({
  content,
  className,
  hideTopRule = false
}: {
  content: GrowthMusicMarketingBenefitsContent;
  className?: string;
  hideTopRule?: boolean;
}) {
  const n = content.items.length;
  const isLastOdd = n % 2 === 1;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black pb-16 pt-2 text-white sm:pb-20 sm:pt-4 md:pb-24",
        !hideTopRule && "border-t border-white/[0.06]",
        className
      )}
    >
      <ServiceBenefitsAmbientBackground />

      <div className="faq-container relative z-[1]">
        <FadeUp>
          <ServiceBenefitsSectionHeader
            headingId="growth-music-marketing-benefits-heading"
            titleLine1={content.sectionTitleLine1}
            titleLine2={content.sectionTitleLine2}
          />
        </FadeUp>

        <ul className={serviceBenefitsGridClass}>
          {content.items.map((item, index) => {
            const isLast = index === n - 1;
            const centerLast = isLastOdd && isLast;

            return (
              <li
                key={item.id}
                className={cn("min-w-0", centerLast && "md:col-span-2 md:flex md:justify-center")}
              >
                <FadeUp
                  className={cn(
                    centerLast && "w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(50%-1.25rem)]"
                  )}
                  delay={index * 0.06}
                >
                  <ServiceBenefitsBentoCard
                    description={item.description}
                    imageAlt={item.imageAlt}
                    imageSrc={item.imageSrc}
                    title={item.title}
                  />
                </FadeUp>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
