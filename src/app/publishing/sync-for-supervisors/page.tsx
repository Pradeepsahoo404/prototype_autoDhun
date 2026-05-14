import type { Metadata } from "next";

import { PublishingSyncForSupervisorsBenefitsSection } from "@/components/publishing/sync-for-supervisors-benefits";
import { PublishingSyncForSupervisorsHero } from "@/components/publishing/sync-for-supervisors-hero";
import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { publishingSyncForSupervisorsContent } from "@/data/publishing/sync-for-supervisors";

export const metadata: Metadata = {
  title: publishingSyncForSupervisorsContent.meta.title,
  description: publishingSyncForSupervisorsContent.meta.description,
  openGraph: {
    description: publishingSyncForSupervisorsContent.meta.description
  }
};

export default function PublishingSyncForSupervisorsPage() {
  const { hero, visual, benefits } = publishingSyncForSupervisorsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <PublishingSyncForSupervisorsHero content={hero} />
      <ServiceVisualHighlightAnimated content={visual} />
      <PublishingSyncForSupervisorsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}
