import type { Metadata } from "next";

import { ForArtistsBenefitsSection } from "@/components/solutions/for-artists-benefits";
import { ForArtistsHero } from "@/components/solutions/for-artists-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { forArtistsContent } from "@/data/solutions/for-artists";

export const metadata: Metadata = {
  title: forArtistsContent.meta.title,
  description: forArtistsContent.meta.description,
  openGraph: {
    description: forArtistsContent.meta.description
  }
};

export default function ForArtistsPage() {
  const { hero, visual, benefits } = forArtistsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <ForArtistsHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <ForArtistsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
