import type { Metadata } from "next";

import { DolbyAtmosVevoDistributionBenefitsSection } from "@/components/services/dolby-atmos-vevo-distribution-benefits";
import { DolbyAtmosVevoDistributionHero } from "@/components/services/dolby-atmos-vevo-distribution-hero";
import { DolbyAtmosVevoDistributionVisualHighlight } from "@/components/services/dolby-atmos-vevo-distribution-visual-highlight";
import { dolbyAtmosVevoDistributionContent } from "@/data/services/dolby-atmos-vevo-distribution";

export const metadata: Metadata = {
  title: dolbyAtmosVevoDistributionContent.meta.title,
  description: dolbyAtmosVevoDistributionContent.meta.description,
  openGraph: {
    description: dolbyAtmosVevoDistributionContent.meta.description
  }
};

export default function DolbyAtmosVevoDistributionPage() {
  const { hero, visual, benefits } = dolbyAtmosVevoDistributionContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <DolbyAtmosVevoDistributionHero content={hero} />
      <DolbyAtmosVevoDistributionVisualHighlight content={visual} />
      <DolbyAtmosVevoDistributionBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
