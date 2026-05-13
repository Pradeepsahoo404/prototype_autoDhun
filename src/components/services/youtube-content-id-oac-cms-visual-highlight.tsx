import type { YoutubeContentIdOacCmsVisualContent } from "@/data/services/youtube-content-id-oac-cms";

import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";

export function YoutubeContentIdOacCmsVisualHighlight({
  content,
  className
}: {
  content: YoutubeContentIdOacCmsVisualContent;
  className?: string;
}) {
  return <ServiceVisualHighlightAnimated content={content} className={className} />;
}
