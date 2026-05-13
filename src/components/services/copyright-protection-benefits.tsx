import Image from "next/image";

import type { CopyrightProtectionBenefitsContent } from "@/data/services/copyright-protection";

import { FadeUp } from "@/components/services/fade-up";
import { cn } from "@/lib/utils";

function BenefitCard({
  title,
  description,
  imageSrc,
  imageAlt
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <article
      className={cn(
        "relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-[32px] border border-white/[0.2]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_56px_72px_-22px_rgba(0,0,0,0.42)]",
        "transition-[border-color,box-shadow] duration-300 ease-out",
        "hover:border-white/[0.28] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.11),inset_0_60px_80px_-20px_rgba(0,0,0,0.46),0_18px_44px_rgba(0,0,0,0.38)]"
      )}
      style={{
        background:
          "linear-gradient(180deg, #141414 0%, #191919 28%, #232323 62%, #2a2a2a 100%)"
      }}
    >
      <div
        className="pointer-events-none absolute bottom-2 right-2 z-[1] sm:bottom-3 sm:right-3"
        style={{
          width: "clamp(210px, 44vw, 248px)",
          height: "clamp(190px, 40vw, 226px)"
        }}
      >
        <Image
          alt={imageAlt}
          className="object-contain object-bottom-right"
          fill
          sizes="(max-width: 640px) 44vw, 248px"
          src={imageSrc}
        />
      </div>

      <div className="relative z-[2] flex w-full flex-col p-7 sm:p-9">
        <h3
          className={cn(
            "m-0 w-full text-left text-xl font-extrabold uppercase leading-[1.1] tracking-[-0.01em] text-white",
            "font-['Clash_Display','Satoshi',system-ui,sans-serif]",
            "sm:text-2xl md:text-[1.65rem]"
          )}
        >
          {title}
        </h3>
        <p className="mt-3 line-clamp-6 w-full max-w-none text-pretty text-left text-base font-normal leading-relaxed tracking-normal text-gray-400 sm:line-clamp-7 sm:text-[1.05rem]">
          {description}
        </p>
      </div>
    </article>
  );
}

export function CopyrightProtectionBenefitsSection({
  content,
  className,
  hideTopRule = false
}: {
  content: CopyrightProtectionBenefitsContent;
  className?: string;
  hideTopRule?: boolean;
}) {
  const n = content.items.length;
  const isLastOdd = n % 2 === 1;

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black pb-16 pt-2 text-white sm:pb-20 sm:pt-4 md:pb-24",
        !hideTopRule && "border-t border-white/[0.06]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 55%)"
          }}
        />
      </div>

      <div className="faq-container relative z-[1]">
        <FadeUp>
          <header className="mx-auto mb-8 max-w-full px-2 text-center sm:mb-10 md:mb-11 sm:px-4">
            <h2
              className="faq-title mx-auto w-full max-w-full text-center text-white !text-[clamp(14px,min(5vw,5.5vmin),42px)]"
              id="copyright-protection-benefits-heading"
            >
              <span className="inline-block whitespace-normal sm:whitespace-nowrap">
                {content.sectionTitleLine1}
              </span>
              <br />
              <span className="inline-block whitespace-normal sm:whitespace-nowrap">
                {content.sectionTitleLine2}
              </span>
            </h2>
          </header>
        </FadeUp>

        <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-2 md:gap-8 lg:gap-10">
          {content.items.map((item, index) => {
            const isLast = index === n - 1;
            const centerLast = isLastOdd && isLast;

            return (
              <li
                key={item.id}
                className={cn("min-w-0", centerLast && "md:col-span-2 md:flex md:justify-center")}
              >
                <FadeUp
                  className={cn(
                    centerLast && "w-full md:max-w-[calc(50%-1rem)] lg:max-w-[calc(50%-1.25rem)]"
                  )}
                  delay={index * 0.06}
                >
                  <BenefitCard
                    description={item.description}
                    imageAlt={item.imageAlt}
                    imageSrc={item.imageSrc}
                    title={item.title}
                  />
                </FadeUp>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
