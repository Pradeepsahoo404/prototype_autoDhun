import { GetInTouchForm } from "@/components/get-in-touch/get-in-touch-form";
import { GetInTouchReachUs } from "@/components/get-in-touch/get-in-touch-reach-us";
import { getInTouchContent } from "@/data/get-in-touch";
import { cn } from "@/lib/utils";

const clash = "font-['Clash_Display','Satoshi',system-ui,sans-serif]";

export function GetInTouchSection() {
  const { kicker, headline, body } = getInTouchContent;

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

            <GetInTouchReachUs />
          </div>

          <div className="faq-right !justify-start lg:!sticky lg:top-[calc(var(--site-header-height)+1.5rem)]">
            <GetInTouchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
