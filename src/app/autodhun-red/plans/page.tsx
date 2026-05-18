import type { Metadata } from "next";

import { AutodhunRedMembershipPricing } from "@/components/autodhun-red/autodhun-red-membership-pricing";
import { AutodhunRedPlansFaq } from "@/components/autodhun-red/autodhun-red-plans-faq";
import { AutodhunRedPlansHero } from "@/components/autodhun-red/autodhun-red-plans-hero";
import { AutodhunRedPlansPageShell } from "@/components/autodhun-red/autodhun-red-plans-page-shell";

export const metadata: Metadata = {
  title: "Find the Right Plan | Autodhun Red",
  description:
    "No matter where you are on your music journey, Autodhun Red has the perfect solution to help you grow, distribute, and monetize your music worldwide.",
  openGraph: {
    description:
      "Premium membership for independent artists, producers, and labels — professional tools, global reach, and complete creative freedom."
  }
};

export default function AutodhunRedPlansPage() {
  return (
    <AutodhunRedPlansPageShell>
      <AutodhunRedPlansHero />
      <AutodhunRedMembershipPricing />
      <AutodhunRedPlansFaq />
    </AutodhunRedPlansPageShell>
  );
}

