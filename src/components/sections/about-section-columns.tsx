import type { ReactNode } from "react";

import { AboutSectionMedia } from "@/components/sections/about-section-media";
import { cn } from "@/lib/utils";

type AboutSectionColumnsProps = {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  youtubeVideoId?: string;
  children: ReactNode;
};

export function AboutSectionColumns({
  className,
  imageSrc,
  imageAlt,
  youtubeVideoId,
  children,
}: AboutSectionColumnsProps) {
  return (
    <div
      className={cn(
        "grid w-full min-w-0 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16 2xl:gap-20",
        className
      )}
    >
      <div className="relative w-full min-w-0 self-start lg:mx-0">
        <AboutSectionMedia imageAlt={imageAlt} imageSrc={imageSrc} youtubeVideoId={youtubeVideoId} />
      </div>

      <div className="flex min-w-0 w-full flex-col text-left lg:max-w-none">{children}</div>
    </div>
  );
}
