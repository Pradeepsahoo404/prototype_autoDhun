import type { Metadata } from "next";

import { PublishingAdministrationBenefitsSection } from "@/components/publishing/publishing-administration-benefits";
import { PublishingAdministrationHero } from "@/components/publishing/publishing-administration-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { publishingAdministrationContent } from "@/data/publishing/publishing-administration";

export const metadata: Metadata = {
  title: publishingAdministrationContent.meta.title,
  description: publishingAdministrationContent.meta.description,
  openGraph: {
    description: publishingAdministrationContent.meta.description
  }
};

export default function PublishingAdministrationPage() {
  const { hero, visual, benefits } = publishingAdministrationContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <PublishingAdministrationHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <PublishingAdministrationBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
