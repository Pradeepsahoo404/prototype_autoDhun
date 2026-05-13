import type { Metadata } from "next";

import { HeroService } from "@/components/services/hero-service";
import { MusicDistributionBenefitsSection } from "@/components/services/music-distribution-benefits";
import { MusicDistributionVisualHighlight } from "@/components/services/music-distribution-visual-highlight";
import { musicDistributionContent } from "@/data/services/music-distribution";

export const metadata: Metadata = {
  title: musicDistributionContent.meta.title,
  description: musicDistributionContent.meta.description,
  openGraph: {
    description: musicDistributionContent.meta.description
  }
};

export default function MusicDistributionPage() {
  const { hero, visual, benefits } = musicDistributionContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <HeroService content={hero} />
      <MusicDistributionVisualHighlight content={visual} />
      <MusicDistributionBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
