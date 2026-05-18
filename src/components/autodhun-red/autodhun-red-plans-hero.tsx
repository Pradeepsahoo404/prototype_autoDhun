import { autodhunRedPlansContent } from "@/data/autodhun-red/plans";
import { cn } from "@/lib/utils";

const RED = "#e8222a";

/** Tight to the headline — matches service hero subtitle width. */
const heroSubtitleClass =
  "mx-auto w-full max-w-[min(100%,62rem)] text-pretty text-[clamp(13px,min(2.4vw,2.75vmin),19px)] font-normal leading-relaxed text-white/85 sm:max-w-[min(100%,80rem)] sm:leading-7 md:leading-8";

/** Secondary block — same full width as subtitle, softer color. */
const heroBodyParagraphClass =
  "mx-auto w-full max-w-[min(100%,62rem)] text-pretty text-[clamp(13px,min(2.5vw,2.75vmin),19px)] font-normal leading-relaxed text-white/55 sm:max-w-[min(100%,80rem)] sm:leading-7 md:leading-8";

export function AutodhunRedPlansHero() {
  const { kicker, titleLine1, titleLine2, subtitle, bodyParagraphs } = autodhunRedPlansContent;

  return (
    <section className="autodhun-red-block autodhun-red-block--hero relative overflow-hidden bg-transparent">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[min(70vw,520px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl"
        style={{
          background: `radial-gradient(45% 55% at 50% 55%, color-mix(in oklab, ${RED} 42%, transparent) 0%, transparent 70%)`
        }}
      />

      <div className="relative z-[1] mx-auto flex min-h-[44vh] w-full min-w-0 max-w-[100vw] flex-col px-4 text-center sm:min-h-[48vh] sm:px-6 md:min-h-[52vh] md:px-8">
        <div aria-hidden className="h-6 shrink-0 sm:h-8 md:h-10" />

        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <div className="relative w-full min-w-0 max-w-none">
            <p
              className="faq-kicker mx-auto max-w-full text-center !text-[#e8222a]"
              style={{ letterSpacing: "0.2em" }}
            >
              {kicker}
            </p>

            <h1 className="faq-title mx-auto mt-1 w-full max-w-full text-center text-white !text-[clamp(1.35rem,min(4.8vw,5vmin),2.65rem)] !leading-[1.12] sm:mt-2">
              <span className="block">{titleLine1}</span>
              <span className="mt-1 block bg-gradient-to-b from-[#ff3b3b] via-[#e8222a] to-[#9a0f14] bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(232,34,42,0.35)]">
                {titleLine2}
              </span>
            </h1>

            <p className={cn(heroSubtitleClass, "mt-4 sm:mt-5")}>{subtitle}</p>

            <div
              className="mx-auto mt-10 flex w-full max-w-[min(100%,80rem)] flex-col gap-5 sm:mt-12 sm:gap-6"
              role="group"
              aria-label="Membership details"
            >
              {bodyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={heroBodyParagraphClass}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
