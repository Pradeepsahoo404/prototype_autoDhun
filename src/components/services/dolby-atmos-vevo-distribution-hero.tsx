"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { LinkButton } from "@/components/ui/button";
import type { DolbyAtmosVevoDistributionHeroContent } from "@/data/services/dolby-atmos-vevo-distribution";
import { cn } from "@/lib/utils";

const navActionBtn =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-semibold no-underline transition-[background-color,border-color,color,transform] sm:px-6";

const heroLeadParagraphClass =
  "mx-auto w-full max-w-[min(100%,62rem)] text-pretty text-[clamp(12px,min(2.5vw,2.75vmin),19px)] leading-relaxed text-white/65 sm:max-w-[min(100%,80rem)] sm:leading-7 md:leading-8";

export function DolbyAtmosVevoDistributionHero({
  content,
  className
}: {
  content: DolbyAtmosVevoDistributionHeroContent;
  className?: string;
}) {
  const { kicker, titleLine1, titleLine2, subtitle, primaryCta, secondaryCta } = content;

  return (
    <section className={cn("relative overflow-hidden bg-black", className)}>
      <div className="mx-auto flex min-h-[44vh] w-full min-w-0 max-w-[100vw] flex-col px-3 pb-6 pt-10 text-center sm:min-h-[52vh] sm:px-4 sm:pb-7 sm:pt-12 md:min-h-[56vh] md:px-5 md:pb-8 md:pt-14 lg:min-h-[58vh] lg:px-6 lg:pb-9 lg:pt-16 xl:px-8">
        <div aria-hidden className="h-9 shrink-0 sm:h-11 md:h-14 lg:h-16" />
        <div className="flex min-h-0 flex-1 flex-col justify-end">
          <div className="relative w-full min-w-0 max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[-18%] -z-10 opacity-80 blur-2xl sm:inset-[-24%] sm:opacity-90 sm:blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 55% at 50% 55%, color-mix(in oklab, var(--color-primary) 55%, transparent) 0%, transparent 70%)"
              }}
            />
            <p className="faq-kicker mx-auto max-w-full text-center">{kicker}</p>
            <h1 className="faq-title mx-auto mt-1 w-full max-w-full px-2 text-center text-white !text-[clamp(14px,min(5vw,5.5vmin),42px)] sm:mt-2 sm:px-4">
              <span className="inline-block whitespace-normal sm:whitespace-nowrap">{titleLine1}</span>
              <br />
              <span className="inline-block whitespace-normal sm:whitespace-nowrap">{titleLine2}</span>
            </h1>
            <p className={cn(heroLeadParagraphClass, "mt-3 sm:mt-4")}>{subtitle}</p>

            <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-0 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <LinkButton
                className={`${navActionBtn} footer-newsletter-button !h-11 w-full !rounded-full !px-6 border-0 !text-[#0b0b0b] text-sm font-bold hover:brightness-95 active:translate-y-px sm:!h-12 sm:w-auto sm:!px-8 sm:text-base`}
                href={primaryCta.href}
                variant="ghost"
              >
                {primaryCta.label}
                <ArrowRight aria-hidden="true" className="ml-2 size-4 shrink-0 sm:size-5" />
              </LinkButton>
              <Link
                className={`${navActionBtn} !h-11 w-full !rounded-full !px-6 border-0 bg-white text-sm text-[#0b0b0b] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[opacity,transform] hover:opacity-90 active:translate-y-px sm:!h-12 sm:w-auto sm:!px-8 sm:text-base`}
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
