import { AutodhunRedPricingCard } from "@/components/autodhun-red/autodhun-red-pricing-card";
import { cn } from "@/lib/utils";
import type { AutodhunRedPlanDto } from "@/types/api";

export function AutodhunRedPlansGrid({ plans }: { plans: AutodhunRedPlanDto[] }) {
  const count = plans.length;

  return (
    <div
      className={cn(
        "w-full",
        count === 1 &&
          "flex justify-start sm:justify-center",
        count >= 2 &&
          "grid gap-8 sm:gap-10 lg:gap-12",
        count === 2 && "max-w-[880px] grid-cols-1 md:grid-cols-2",
        count >= 3 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      )}
    >
      {plans.map((plan) => (
        <AutodhunRedPricingCard
          key={plan.id}
          plan={plan}
          className={cn("h-full", count >= 2 && "mx-0 max-w-none")}
        />
      ))}
    </div>
  );
}
