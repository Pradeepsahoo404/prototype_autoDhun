import type { Metadata } from "next";

import { ForDistributionPartnersBenefitsSection } from "@/components/solutions/for-distribution-partners-benefits";
import { ForDistributionPartnersHero } from "@/components/solutions/for-distribution-partners-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { forDistributionPartnersContent } from "@/data/solutions/for-distribution-partners";

export const metadata: Metadata = {
  title: forDistributionPartnersContent.meta.title,
  description: forDistributionPartnersContent.meta.description,
  openGraph: {
    description: forDistributionPartnersContent.meta.description
  }
};

export default function ForDistributionPartnersPage() {
  const { hero, visual, benefits } = forDistributionPartnersContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <ForDistributionPartnersHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <ForDistributionPartnersBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
