import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "loading"> & {
  /** When true, loads eagerly (LCP only). Default false — lazy everywhere else. */
  priority?: boolean;
};

function srcNeedsUnoptimized(src: ImageProps["src"]): boolean {
  if (typeof src !== "string") return false;
  // Next.js /_next/image returns 500 when the public path contains "%" (e.g. "Keep 100% Ownership.png").
  return src.includes("%");
}

/** Next/Image with lazy loading by default across the marketing site. */
export function SiteImage({ priority = false, unoptimized, ...props }: SiteImageProps) {
  const bypassOptimizer = unoptimized ?? srcNeedsUnoptimized(props.src);

  return (
    <Image
      {...props}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      unoptimized={bypassOptimizer}
    />
  );
}
