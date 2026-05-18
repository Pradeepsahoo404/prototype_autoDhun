import { FaqSection } from "@/components/sections/faq-section";
import { autodhunRedFaqItems } from "@/data/autodhun-red/faq";

export function AutodhunRedFaq() {
  return (
    <FaqSection
      items={autodhunRedFaqItems}
      kicker="FAQS"
      subtitle="Everything About Autodhun Red"
      titleLine1="FREQUENTLY ASKED"
      titleLine2="QUESTIONS"
      variant="autodhun-red"
    />
  );
}
