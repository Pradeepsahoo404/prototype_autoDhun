import Image from "next/image";
import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

const SERVICE_STROKE_PX = 2;

/** Stronger violet line like `SectionPillHeading` / `PillRightStroke`, stays visible on black. */
const STOCK_GRADIENT_LTR =
  "linear-gradient(90deg,rgba(196,181,253,1)0%,rgba(167,139,250,0.98)22%,rgba(139,92,246,0.85)55%,rgba(124,58,237,0.4)82%,transparent 100%)";
const STOCK_GRADIENT_RTL =
  "linear-gradient(270deg,rgba(196,181,253,1)0%,rgba(167,139,250,0.98)22%,rgba(139,92,246,0.85)55%,rgba(124,58,237,0.4)82%,transparent 100%)";

type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const SERVICES: ServiceItem[] = [
  {
    title: "Music Distribution",
    description:
      "Deliver your releases to major streaming platforms with clean metadata, scheduling, and the operational support labels need to ship on time.",
    imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Music Distribution",
  },
  {
    title: "Analytics & Worldwide Payouts",
    description:
      "Track your music’s performance with daily and monthly reports, detailed revenue insights, trends, and easy-to-understand analytics charts.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Analytics",
  },
  {
    title: "YouTube Content ID & CMS",
    description:
      "Claim and manage sound recordings on YouTube with the right channel and rights setup so your catalog can earn where videos use your music.",
    imageSrc: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=85",
    imageAlt: "YouTube Content ID",
  },
  {
    title: "Copyright Protection",
    description:
      "Reduce unauthorized use with workflows aligned to your releases—so your team can respond quickly while distribution stays organized.",
    imageSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Copyright Protection",
  },
  {
    title: "Dolby Atmos & VEVO",
    description:
      "Bring immersive mixes and official videos to supported platforms with delivery paths that match how premium catalogs are expected to look and sound.",
    imageSrc: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=85",
    imageAlt: "Dolby Atmos",
  },
];

const strokeStyle = {
  ["--svc-s"]: `${SERVICE_STROKE_PX}px`,
  ["--svc-gap"]: "1.75rem",
} as CSSProperties;

/** Short segment straddling the image border (half in frame, half toward gap) — Cosmos-style “little cut”, not full width. */
function StockEdgeBite({ edge }: { edge: "left" | "right" }) {
  const background =
    edge === "right"
      ? "linear-gradient(90deg,transparent 0%,rgba(196,181,253,0.35)22%,rgba(196,181,253,1)50%,rgba(167,139,250,0.85)78%,transparent 100%)"
      : "linear-gradient(270deg,transparent 0%,rgba(196,181,253,0.35)22%,rgba(196,181,253,1)50%,rgba(167,139,250,0.85)78%,transparent 100%)";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-1/2 z-[6] hidden h-[var(--svc-s)] w-9 -translate-y-1/2 rounded-full sm:w-10 lg:block",
        "shadow-[0_0_16px_rgba(167,139,250,0.5)]",
        edge === "right" ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
      )}
      style={{ ...strokeStyle, background } as CSSProperties}
    />
  );
}

/**
 * Stock under the title — stays in the text column; on lg+ only extends across the flex gap
 * (not across the full image).
 */
function ServiceTitleStock({ imageOnLeft }: { imageOnLeft: boolean }) {
  const background = imageOnLeft ? STOCK_GRADIENT_LTR : STOCK_GRADIENT_RTL;

  return (
    <div
      aria-hidden
      className={cn(
        "mt-3 max-w-xl rounded-full sm:mt-3.5",
        "h-[var(--svc-s)]",
        "shadow-[0_0_18px_rgba(167,139,250,0.45),0_0_36px_rgba(139,92,246,0.22)]",
        "lg:mt-4 lg:max-w-none",
        imageOnLeft
          ? "lg:-ml-[var(--svc-gap)] lg:w-[calc(100%+var(--svc-gap))]"
          : "lg:ml-auto lg:-mr-[var(--svc-gap)] lg:w-[calc(100%+var(--svc-gap))]"
      )}
      style={
        {
          ...strokeStyle,
          background,
        } as CSSProperties
      }
    />
  );
}

export function ServicesSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black pb-8 pt-4 text-white sm:pb-10 sm:pt-5 lg:pb-12 lg:pt-6",
        className
      )}
      style={strokeStyle}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff08_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {SERVICES.map((item, index) => {
          const isEven = index % 2 === 0;
          const imageOnLeft = isEven;

          return (
            <div
              key={index}
              className={cn(
                "relative mb-8 flex flex-col items-center gap-5 last:mb-0 sm:mb-10 sm:gap-6 lg:flex-row lg:items-center lg:gap-7 lg:overflow-visible",
                "overflow-x-clip",
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              )}
            >
              <div className="relative z-[1] w-full max-w-[360px] shrink-0 overflow-visible lg:w-[360px]">
                <StockEdgeBite edge={imageOnLeft ? "right" : "left"} />
                <div
                  className={cn(
                    "relative z-[1] overflow-hidden rounded-2xl bg-black p-1",
                    "shadow-[0_0_0_1px_rgba(167,139,250,0.35),0_0_28px_rgba(167,139,250,0.32),0_0_48px_rgba(139,92,246,0.15)]"
                  )}
                  style={
                    {
                      borderWidth: SERVICE_STROKE_PX,
                      borderStyle: "solid",
                      borderColor: "rgba(196,181,253,0.95)",
                    } as CSSProperties
                  }
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-[calc(1rem-var(--svc-s))] bg-black">
                    <Image
                      alt={item.imageAlt}
                      className="object-cover"
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1024px) 360px, 360px"
                      src={item.imageSrc}
                    />
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 -z-10 rounded-[22px] bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.38)_0%,rgba(139,92,246,0.2)_48%,transparent_72%)] opacity-[0.6] blur-2xl"
                />
              </div>

              <div
                className={cn(
                  "relative z-[2] flex min-w-0 flex-1 flex-col justify-center overflow-visible",
                  !imageOnLeft && "lg:items-end lg:text-right"
                )}
              >
                <div
                  className={cn(
                    "min-w-0 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    !imageOnLeft && "lg:ml-auto"
                  )}
                >
                  <h3 className="faq-title m-0 w-max min-w-0 text-white !text-[clamp(1.05rem,1.35vw+0.55rem,2.65rem)] whitespace-nowrap tracking-[-0.01em]">
                    {item.title}
                  </h3>
                </div>

                <ServiceTitleStock imageOnLeft={imageOnLeft} />

                <p
                  className={cn(
                    "mt-3 max-w-prose text-[15px] leading-relaxed text-[#989898] sm:mt-2.5 sm:text-base sm:leading-[1.65] lg:mt-3",
                    !imageOnLeft && "lg:ml-auto"
                  )}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
