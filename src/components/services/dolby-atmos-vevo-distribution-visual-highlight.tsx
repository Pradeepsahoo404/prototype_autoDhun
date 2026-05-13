import type { DolbyAtmosVevoDistributionVisualContent } from "@/data/services/dolby-atmos-vevo-distribution";

import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";

export function DolbyAtmosVevoDistributionVisualHighlight({
  content,
  className
}: {
  content: DolbyAtmosVevoDistributionVisualContent;
  className?: string;
}) {
  return <ServiceVisualHighlightAnimated content={content} className={className} />;
}
