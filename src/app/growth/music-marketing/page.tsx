import type { Metadata } from "next";

import { GrowthMusicMarketingBenefitsSection } from "@/components/growth/music-marketing-benefits";
import { GrowthMusicMarketingHero } from "@/components/growth/music-marketing-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { growthMusicMarketingContent } from "@/data/growth/music-marketing";

export const metadata: Metadata = {
  title: growthMusicMarketingContent.meta.title,
  description: growthMusicMarketingContent.meta.description,
  openGraph: {
    description: growthMusicMarketingContent.meta.description
  }
};

export default function GrowthMusicMarketingPage() {
  const { hero, visual, benefits } = growthMusicMarketingContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <GrowthMusicMarketingHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <GrowthMusicMarketingBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
