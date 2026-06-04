import { FaqSection } from "@/components/sections/faq-section";
import { homeFaqFallback } from "@/data/home/home-faq";

/** Homepage FAQ — static content (not managed in admin). */
export function HomeFaqSection() {
  return (
    <FaqSection
      items={homeFaqFallback.items}
      kicker={homeFaqFallback.kicker}
      subtitle={homeFaqFallback.subtitle}
      titleLine1={homeFaqFallback.titleLine1}
      titleLine2={homeFaqFallback.titleLine2}
    />
  );
}
