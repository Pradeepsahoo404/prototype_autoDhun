import type { Metadata } from "next";

import { CopyrightProtectionBenefitsSection } from "@/components/services/copyright-protection-benefits";
import { CopyrightProtectionHero } from "@/components/services/copyright-protection-hero";
import { CopyrightProtectionVisualHighlight } from "@/components/services/copyright-protection-visual-highlight";
import { copyrightProtectionContent } from "@/data/services/copyright-protection";

export const metadata: Metadata = {
  title: copyrightProtectionContent.meta.title,
  description: copyrightProtectionContent.meta.description,
  openGraph: {
    description: copyrightProtectionContent.meta.description
  }
};

export default function CopyrightProtectionPage() {
  const { hero, visual, benefits } = copyrightProtectionContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <CopyrightProtectionHero content={hero} />
      <CopyrightProtectionVisualHighlight content={visual} />
      <CopyrightProtectionBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
