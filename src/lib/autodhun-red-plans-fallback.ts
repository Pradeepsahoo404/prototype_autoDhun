import { autodhunRedMembershipContent } from "@/data/autodhun-red/membership";
import type { AutodhunRedPlansDto } from "@/types/api";

const { sectionKicker, sectionTitle, plan } = autodhunRedMembershipContent;

/** Static fallback when the plans API is loading or unavailable. */
export const autodhunRedPlansFallback: AutodhunRedPlansDto = {
  sectionKicker,
  sectionTitle,
  plans: [
    {
      id: "autodhun-red",
      badge: plan.badge,
      namePrimary: plan.namePrimary,
      nameAccent: plan.nameAccent,
      price: plan.price,
      period: plan.period,
      tagline: plan.tagline,
      cta: { label: plan.cta.label, href: plan.cta.href },
      benefitsIntro: plan.benefitsIntro,
      benefits: [...plan.benefits]
    }
  ]
};
