import type { AnalyticsWorldwidePayoutsVisualContent } from "@/data/services/analytics-worldwide-payouts";

import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";

export function AnalyticsWorldwidePayoutsVisualHighlight({
  content,
  className
}: {
  content: AnalyticsWorldwidePayoutsVisualContent;
  className?: string;
}) {
  return <ServiceVisualHighlightAnimated content={content} className={className} />;
}
