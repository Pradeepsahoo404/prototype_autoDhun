import type { Metadata } from "next";

import { PublishingSyncForArtistsBenefitsSection } from "@/components/publishing/sync-for-artists-benefits";
import { PublishingSyncForArtistsHero } from "@/components/publishing/sync-for-artists-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { publishingSyncForArtistsContent } from "@/data/publishing/sync-for-artists";

export const metadata: Metadata = {
  title: publishingSyncForArtistsContent.meta.title,
  description: publishingSyncForArtistsContent.meta.description,
  openGraph: {
    description: publishingSyncForArtistsContent.meta.description
  }
};

export default function PublishingSyncForArtistsPage() {
  const { hero, visual, benefits } = publishingSyncForArtistsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <PublishingSyncForArtistsHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <PublishingSyncForArtistsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
