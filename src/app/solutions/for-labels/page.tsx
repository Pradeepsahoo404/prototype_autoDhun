import type { Metadata } from "next";

import { ForLabelsBenefitsSection } from "@/components/solutions/for-labels-benefits";
import { ForLabelsHero } from "@/components/solutions/for-labels-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { forLabelsContent } from "@/data/solutions/for-labels";

export const metadata: Metadata = {
  title: forLabelsContent.meta.title,
  description: forLabelsContent.meta.description,
  openGraph: {
    description: forLabelsContent.meta.description
  }
};

export default function ForLabelsPage() {
  const { hero, visual, benefits } = forLabelsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <ForLabelsHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <ForLabelsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
