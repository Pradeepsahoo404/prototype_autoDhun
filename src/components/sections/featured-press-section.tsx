import Image from "next/image";

import { featuredPressContent, featuredPressLogos } from "@/data/home/featured-press";
import { cn } from "@/lib/utils";

export function FeaturedPressSection({ className }: { className?: string }) {
  const { titleLine1, titleLine2 } = featuredPressContent;

  return (
    <section
      aria-label="Featured in press and industry publications"
      className={cn(
        "relative w-full min-w-0 overflow-x-clip border-0 bg-black py-12 text-white sm:py-14 md:py-16 lg:py-20",
        className
      )}
    >
      <div className="mx-auto flex w-full min-w-0 max-w-[min(calc(100%-2rem),1320px)] flex-col items-center px-4 text-center sm:px-6 md:px-8 lg:px-10">
        <h2 className="faq-title m-0 w-full max-w-[min(100%,40rem)] text-balance text-center text-white !text-[clamp(0.8125rem,2.8vw,1.5rem)] !leading-[1.3] !tracking-[0.02em] sm:max-w-[min(100%,52rem)] sm:!leading-[1.25] md:!text-[clamp(0.9rem,2.2vw,1.65rem)]">
          <span className="block">{titleLine1}</span>
          <span className="mt-1.5 block sm:mt-2">{titleLine2}</span>
        </h2>

        <div
          className={cn(
            "mt-8 w-full max-w-[min(100%,1180px)] rounded-2xl sm:mt-10 md:mt-12 md:rounded-3xl",
            "bg-[#111111]",
            "px-4 py-7 sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-12 lg:py-11"
          )}
        >
          <ul className="m-0 grid w-full list-none grid-cols-2 items-center justify-items-center gap-x-4 gap-y-7 p-0 sm:gap-x-8 sm:gap-y-8 md:grid-cols-4 md:gap-x-4 md:gap-y-0 lg:gap-x-8">
            {featuredPressLogos.map((logo) => (
              <li
                key={logo.id}
                className="flex w-full max-w-[11rem] items-center justify-center sm:max-w-[12.5rem] md:max-w-none"
              >
                <Image
                  alt={logo.name}
                  className="h-auto w-full max-h-[26px] object-contain object-center opacity-[0.88] sm:max-h-[30px] md:max-h-[32px] lg:max-h-[34px]"
                  height={logo.height}
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 22vw, 180px"
                  src={logo.src}
                  width={logo.width}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
