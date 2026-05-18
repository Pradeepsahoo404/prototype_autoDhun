"use client";

import { Check } from "lucide-react";
import Link from "next/link";

import { autodhunRedMembershipContent } from "@/data/autodhun-red/membership";
import { cn } from "@/lib/utils";

const ctaClass = cn(
  "group flex h-11 w-full items-center justify-center rounded-lg border border-[#e8222a]",
  "bg-transparent px-6 text-[15px] font-semibold text-[#e8222a] no-underline",
  "transition-[color,background-color,box-shadow,transform,border-color] duration-300 ease-out",
  "hover:border-[#ff4a4f] hover:bg-[#e8222a] hover:text-[#0a0a0a]",
  "hover:shadow-[0_0_28px_rgba(232,34,42,0.35)]",
  "active:scale-[0.99] sm:h-12 sm:text-base"
);

export function AutodhunRedMembershipPricing() {
  const { sectionKicker, sectionTitle, plan } = autodhunRedMembershipContent;

  return (
    <section
      aria-labelledby="autodhun-red-pricing-heading"
      className="autodhun-red-block autodhun-red-block--pricing relative overflow-hidden bg-transparent text-white"
    >
      <div className="faq-container relative z-[1]">
        <header className="mb-10 min-w-0 sm:mb-12 md:mb-14">
          <p className="faq-kicker !mb-3 !text-[#e8222a]">{sectionKicker}</p>
          <h2
            id="autodhun-red-pricing-heading"
            className="faq-title !mx-0 max-w-[min(100%,52rem)] text-left !text-[clamp(1.25rem,min(3.8vw,4vmin),2.25rem)] !leading-[1.14] text-white"
          >
            {sectionTitle}
          </h2>
        </header>

        <div className="flex justify-start sm:justify-center">
          <div className="relative w-full max-w-[400px]">
            {/* Gradient border shell (reference card frame) */}
            <div
              className={cn(
                "rounded-[24px] p-px",
                "bg-gradient-to-br from-[#ff5a5f] via-[#e8222a] to-[#7a1015]",
                "shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_40px_rgba(232,34,42,0.08)]"
              )}
            >
              <article className="relative overflow-hidden rounded-[23px] bg-[#050505]">
                {/* Diagonal ribbon */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 z-20 h-[88px] w-[88px] overflow-hidden"
                >
                  <span
                    className={cn(
                      "absolute right-[-42%] top-[26%] block w-[165%]",
                      "rotate-45 bg-gradient-to-r from-[#ff6b6f] via-[#e8222a] to-[#a0181e]",
                      "py-1.5 text-center text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#0a0a0a]",
                      "shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-[10px]"
                    )}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div className="px-7 pb-8 pt-8 sm:px-8 sm:pb-9 sm:pt-9">
                  {/* Plan name */}
                  <h3 className="m-0 text-left font-['Clash_Display','Satoshi',system-ui,sans-serif] text-[1.65rem] font-extrabold uppercase leading-none tracking-[0.02em] sm:text-[1.85rem]">
                    <span className="text-white">{plan.namePrimary} </span>
                    <span className="bg-gradient-to-b from-[#ff5a5f] via-[#e8222a] to-[#b0181e] bg-clip-text text-transparent">
                      {plan.nameAccent}
                    </span>
                  </h3>

                  {/* Price */}
                  <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-0 text-left">
                    <span className="text-[clamp(2.35rem,7vw,3rem)] font-extrabold leading-none tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.08em] text-white/45">
                      / {plan.period}
                    </span>
                  </p>

                  {/* Tagline */}
                  <p className="mt-3 text-left text-[15px] font-medium leading-snug text-[#e8222a] sm:text-base">
                    {plan.tagline}
                  </p>

                  {/* CTA */}
                  <div className="mt-7">
                    <Link className={ctaClass} href={plan.cta.href}>
                      {plan.cta.label}
                    </Link>
                  </div>

                  {/* Divider + benefits */}
                  <div className="mt-7 border-t border-white/[0.1] pt-7">
                    <p className="m-0 text-left text-[13px] font-medium leading-snug text-white/45 sm:text-sm">
                      {plan.benefitsIntro}
                    </p>

                    <ul className="mt-4 list-none space-y-3.5 p-0">
                      {plan.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-left">
                          <Check
                            aria-hidden
                            className="mt-[3px] size-[15px] shrink-0 text-[#e8222a]"
                            strokeWidth={2.75}
                          />
                          <span className="flex-1 text-[13px] leading-[1.45] text-white/62 sm:text-[14px] sm:leading-[1.5]">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
