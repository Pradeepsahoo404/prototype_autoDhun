"use client";

import { SiteImage } from "@/components/ui/site-image";

import { useSiteDetails } from "@/hooks/use-site-details";
import { cn } from "@/lib/utils";

type SiteBrandLogoProps = {
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
};

export function SiteBrandLogo({
  className,
  imageClassName,
  width = 134,
  height = 46
}: SiteBrandLogoProps) {
  const site = useSiteDetails();
  const src = site.logoUrl.trim();

  return (
    <span className={cn("inline-flex max-w-full", className)}>
      <SiteImage
        key={src}
        alt={site.brandName}
        className={cn("h-auto w-full max-w-full object-contain object-left", imageClassName)}
        height={height}
        src={src}
        style={{ width: "auto", height: "auto" }}
        width={width}
      />
    </span>
  );
}
