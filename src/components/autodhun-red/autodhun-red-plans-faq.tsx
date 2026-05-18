import { FaqSection } from "@/components/sections/faq-section";
import { autodhunRedPlansFaqItems } from "@/data/autodhun-red/plans-faq";

export function AutodhunRedPlansFaq() {
  return (
    <FaqSection
      items={autodhunRedPlansFaqItems}
      kicker="FAQS"
      subtitle="Explore common questions about Autodhun Red Membership for Artists, Music Producers & Labels."
      titleLine1="FREQUENTLY ASKED"
      titleLine2="QUESTIONS"
      variant="autodhun-red"
    />
  );
}
