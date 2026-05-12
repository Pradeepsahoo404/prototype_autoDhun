import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { AboutSection } from "@/components/sections/about-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PreferredProviderSection } from "@/components/sections/preferred-provider-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SectionPillHeading } from "@/components/sections/section-pill-heading";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { LinkButton } from "@/components/ui/button";

const navActionBtn =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-semibold no-underline transition-[background-color,border-color,color,transform] sm:px-6";

export default function Home() {
  return (
    <div className="bg-black">
      <section className="relative overflow-hidden">
        <div className="mx-auto flex min-h-[44vh] w-full min-w-0 max-w-[100vw] flex-col items-center justify-end px-3 pb-6 pt-10 text-center sm:min-h-[52vh] sm:px-4 sm:pb-7 sm:pt-12 md:min-h-[56vh] md:px-5 md:pb-8 md:pt-14 lg:min-h-[58vh] lg:px-6 lg:pb-9 lg:pt-16 xl:px-8">
          <div className="relative w-full min-w-0 max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[-18%] -z-10 opacity-80 blur-2xl sm:inset-[-24%] sm:opacity-90 sm:blur-3xl"
              style={{
                background:
                  "radial-gradient(45% 55% at 50% 55%, color-mix(in oklab, var(--color-primary) 55%, transparent) 0%, transparent 70%)"
              }}
            />
          <h1 className="faq-title mx-auto w-full max-w-full px-2 text-center text-white !text-[clamp(14px,min(5vw,5.5vmin),42px)] sm:px-4">
              <span className="inline-block whitespace-nowrap">
                Every Song Has a Story. Every Artist Has a Dream.
              </span>
              <br />
              <span className="inline-block whitespace-nowrap">
                Your music deserves recognition beyond a single play.
              </span>
            </h1>
            <p className="mx-auto mt-3 w-full max-w-[min(100%,62rem)] text-pretty text-[clamp(12px,min(2.5vw,2.75vmin),19px)] leading-relaxed text-white/65 sm:mt-4 sm:max-w-[min(100%,80rem)] sm:leading-7 md:leading-8">
            Autodhun  — Building the future for independent labels and artists.
            </p>
            <div className="mx-auto mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-0 sm:mt-8 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center">
              <LinkButton
                className={`${navActionBtn} footer-newsletter-button !h-11 w-full !rounded-full !px-6 border-0 !text-[#0b0b0b] text-sm font-bold hover:brightness-95 active:translate-y-px sm:!h-12 sm:w-auto sm:!px-8 sm:text-base`}
                href="/get-started"
                variant="ghost"
              >
                Get Started
                <ArrowRight aria-hidden="true" className="ml-2 size-4 shrink-0 sm:size-5" />
              </LinkButton>
              <Link
                className={`${navActionBtn} !h-11 w-full !rounded-full !px-6 border-0 bg-white text-sm text-[#0b0b0b] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-[opacity,transform] hover:opacity-90 active:translate-y-px sm:!h-12 sm:w-auto sm:!px-8 sm:text-base`}
                href="/sign-in"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionPillHeading className="pt-5 pb-5 sm:pt-6 sm:pb-6" heading="Spotlight on Artists" />

      <PreferredProviderSection />

      <SectionPillHeading className="pt-10 pb-6 sm:pt-12 sm:pb-8" heading="Testimonials" />

      <TestimonialsSection />

      <SectionPillHeading className="pt-10 pb-6 sm:pt-12 sm:pb-8" heading="Services" />

      <ServicesSection />

      <AboutSection />

      <FaqSection />
    </div>
  );
}
