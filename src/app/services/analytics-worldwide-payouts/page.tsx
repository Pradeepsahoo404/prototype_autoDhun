import type { Metadata } from "next";

import { AnalyticsWorldwidePayoutsBenefitsSection } from "@/components/services/analytics-worldwide-payouts-benefits";
import { AnalyticsWorldwidePayoutsHero } from "@/components/services/analytics-worldwide-payouts-hero";
import { AnalyticsWorldwidePayoutsVisualHighlight } from "@/components/services/analytics-worldwide-payouts-visual-highlight";
import { analyticsWorldwidePayoutsContent } from "@/data/services/analytics-worldwide-payouts";

export const metadata: Metadata = {
  title: analyticsWorldwidePayoutsContent.meta.title,
  description: analyticsWorldwidePayoutsContent.meta.description,
  openGraph: {
    description: analyticsWorldwidePayoutsContent.meta.description
  }
};

export default function AnalyticsWorldwidePayoutsPage() {
  const { hero, visual, benefits } = analyticsWorldwidePayoutsContent;

  return (
    <div className="relative overflow-hidden bg-black">
      <AnalyticsWorldwidePayoutsHero content={hero} />
      <AnalyticsWorldwidePayoutsVisualHighlight content={visual} />
      <AnalyticsWorldwidePayoutsBenefitsSection content={benefits} hideTopRule />
    </div>
  );
}

