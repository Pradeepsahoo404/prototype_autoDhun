import { MapPin } from "lucide-react";

import { GetInTouchForm } from "@/components/get-in-touch/get-in-touch-form";
import { getInTouchContent } from "@/data/get-in-touch";
import { cn } from "@/lib/utils";

const clash = "font-['Clash_Display','Satoshi',system-ui,sans-serif]";

export function GetInTouchSection() {
  const { kicker, headline, body, address, email, phone } = getInTouchContent;

  return (
    <section
      aria-labelledby="get-in-touch-heading"
      className="border-t border-white/[0.06] bg-black pb-[clamp(64px,9vw,108px)] pt-[calc(var(--site-header-height)+clamp(40px,6vw,64px))] text-white"
    >
      <div className="faq-container">
        <div className="faq-grid !gap-12 lg:!grid-cols-2 lg:!items-start">
          <div className="faq-left flex min-w-0 flex-col">
            <p className="faq-kicker !mb-3 sm:!mb-4">{kicker}</p>

            <h1
              className={cn(
                "faq-title !mx-0 !mt-0 !mb-0 max-w-[18ch] text-balance sm:max-w-[22ch] lg:max-w-none",
                clash
              )}
              id="get-in-touch-heading"
            >
              {headline}
            </h1>

            <p className={cn("faq-subtitle !mt-5 max-w-xl !normal-case sm:!mt-6")}>{body}</p>

            <div className="mt-10 border-t border-white/[0.06] pt-8 sm:mt-12 sm:pt-10 lg:mt-14 lg:border-t-0 lg:pt-0">
              <p className="m-0 text-[11px] font-semibold uppercase tracking-[2px] text-[#989898]">Reach us</p>
              <div className="mt-4 flex flex-col gap-1">
                <a className="footer-link !mb-2 inline-block w-fit !text-[14px]" href={`mailto:${email}`}>
                  {email}
                </a>
                <a className="footer-link !mb-0 inline-block w-fit !text-[14px]" href={`tel:${phone.replace(/\D/g, "")}`}>
                  {phone}
                </a>
              </div>

              <div className="contact-item mt-8 max-w-md sm:mt-9">
                <MapPin aria-hidden className="footer-contact-icon shrink-0" />
                <address className="m-0 min-w-0 not-italic text-[14px] font-normal leading-[1.45] text-white sm:text-[15px] sm:leading-[1.5]">
                  {address.lines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </div>

          <div className="faq-right !justify-start lg:!sticky lg:top-[calc(var(--site-header-height)+1.5rem)]">
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
