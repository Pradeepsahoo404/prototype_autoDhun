"use client";

import { AutodhunRedPlansGrid } from "@/components/autodhun-red/autodhun-red-plans-grid";
import { SectionLoader } from "@/components/ui/section-loader";
import { autodhunRedPlansFallback } from "@/lib/autodhun-red-plans-fallback";
import { useApiOrFallback } from "@/lib/api-section";
import { useGetAutodhunRedPlansQuery } from "@/store/api/autodhunApi";
import type { AutodhunRedPlansDto } from "@/types/api";

export function AutodhunRedMembershipPricing() {
  const query = useGetAutodhunRedPlansQuery();

  const { value: content, isLoading } = useApiOrFallback(
    query,
    (d) => (d.plans?.length ? d : null),
    autodhunRedPlansFallback
  );

  const resolved: AutodhunRedPlansDto =
    query.isSuccess && query.data?.plans?.length
      ? query.data
      : content;

  const { sectionKicker, sectionTitle, plans } = resolved;

  if (isLoading) {
    return (
      <section
        aria-labelledby="autodhun-red-pricing-heading"
        className="autodhun-red-block autodhun-red-block--pricing relative overflow-hidden bg-transparent text-white"
      >
        <div className="faq-container relative z-[1]">
          <SectionLoader label="Loading plans…" minHeight="min-h-[420px]" />
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="autodhun-red-pricing-heading"
      className="autodhun-red-block autodhun-red-block--pricing relative overflow-hidden bg-transparent text-white"
    >
      <div className="faq-container relative z-[1]">
        <header className="mb-10 min-w-0 sm:mb-12 md:mb-14">
          <p className="faq-kicker !mb-3 !text-[#e8222a]">{sectionKicker}</p>
          <h2
            id="autodhun-red-pricing-heading"
            className="faq-title !mx-0 max-w-[min(100%,52rem)] text-left !text-[clamp(1.25rem,min(3.8vw,4vmin),2.25rem)] !leading-[1.14] text-white"
          >
            {sectionTitle}
          </h2>
        </header>

        <AutodhunRedPlansGrid plans={plans} />
      </div>
    </section>
  );
}
