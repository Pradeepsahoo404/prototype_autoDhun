import type { Metadata } from "next";

import { GrowthArtistFundingBenefitsSection } from "@/components/growth/artist-funding-benefits";
import { GrowthArtistFundingHero } from "@/components/growth/artist-funding-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { growthArtistFundingContent } from "@/data/growth/artist-funding";

export const metadata: Metadata = {
  title: growthArtistFundingContent.meta.title,
  description: growthArtistFundingContent.meta.description,
  openGraph: {
    description: growthArtistFundingContent.meta.description
  }
};

export default function GrowthArtistFundingPage() {
  const { hero, visual, benefits } = growthArtistFundingContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <GrowthArtistFundingHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <GrowthArtistFundingBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
