import type { Metadata } from "next";

import { GrowthMarketingToolsBenefitsSection } from "@/components/growth/marketing-tools-benefits";
import { GrowthMarketingToolsHero } from "@/components/growth/marketing-tools-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { growthMarketingToolsContent } from "@/data/growth/marketing-tools";

export const metadata: Metadata = {
  title: growthMarketingToolsContent.meta.title,
  description: growthMarketingToolsContent.meta.description,
  openGraph: {
    description: growthMarketingToolsContent.meta.description
  }
};

export default function GrowthMarketingToolsPage() {
  const { hero, visual, benefits } = growthMarketingToolsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <GrowthMarketingToolsHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <GrowthMarketingToolsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
