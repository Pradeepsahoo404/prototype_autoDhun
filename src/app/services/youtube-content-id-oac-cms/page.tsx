import type { Metadata } from "next";

import { YoutubeContentIdOacCmsBenefitsSection } from "@/components/services/youtube-content-id-oac-cms-benefits";
import { YoutubeContentIdOacCmsHero } from "@/components/services/youtube-content-id-oac-cms-hero";
import { YoutubeContentIdOacCmsVisualHighlight } from "@/components/services/youtube-content-id-oac-cms-visual-highlight";
import { youtubeContentIdOacCmsContent } from "@/data/services/youtube-content-id-oac-cms";

export const metadata: Metadata = {
  title: youtubeContentIdOacCmsContent.meta.title,
  description: youtubeContentIdOacCmsContent.meta.description,
  openGraph: {
    description: youtubeContentIdOacCmsContent.meta.description
  }
};

export default function YoutubeContentIdOacCmsPage() {
  const { hero, visual, benefits } = youtubeContentIdOacCmsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <YoutubeContentIdOacCmsHero content={hero} />
      <YoutubeContentIdOacCmsVisualHighlight content={visual} />
      <YoutubeContentIdOacCmsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
