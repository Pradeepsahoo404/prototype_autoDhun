import type { CopyrightProtectionVisualContent } from "@/data/services/copyright-protection";

import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";

export function CopyrightProtectionVisualHighlight({
  content,
  className
}: {
  content: CopyrightProtectionVisualContent;
  className?: string;
}) {
  return <ServiceVisualHighlightAnimated content={content} className={className} />;
}
