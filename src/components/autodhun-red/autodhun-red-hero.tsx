import { AutodhunRedVisual } from "@/components/autodhun-red/autodhun-red-visual";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navActionBtn =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-semibold no-underline transition-[background-color,border-color,color,transform] sm:px-6";

const heroLeadParagraphClass =
  "mx-auto w-full max-w-full text-pretty text-[clamp(13px,min(2.2vw,2.5vmin),18px)] leading-relaxed text-white/70 sm:leading-7 md:leading-8";

export function AutodhunRedHero() {
  return (
    <section className="autodhun-red-block autodhun-red-block--hero relative overflow-hidden bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[min(70vw,520px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232, 34, 42, 0.42) 0%, rgba(139, 0, 0, 0.12) 45%, transparent 70%)"
        }}
      />

      <div className="mx-auto flex w-full min-w-0 max-w-[100vw] flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8">
        <div className="relative w-full min-w-0 max-w-[min(100%,1320px)]">
          <p className="mb-4 text-[clamp(11px,1.8vw,13px)] font-semibold uppercase tracking-[0.28em] text-[#e8222a]">
            Autodhun Red
          </p>

          <h1 className="faq-title mx-auto w-full text-center text-white !text-[clamp(1.35rem,min(4.8vw,5vmin),2.65rem)] !leading-[1.12]">
            <span className="block">Where Independent Talent</span>
            <span className="mt-1 block bg-gradient-to-b from-[#ff3b3b] via-[#e8222a] to-[#9a0f14] bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(232,34,42,0.35)]">
              Becomes a Global Brand.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[clamp(13px,2vw,17px)] font-medium uppercase tracking-[0.12em] text-white/55">
            Create. Release. Grow.{" "}
            <span className="text-[#e8222a]">Rule the Sound.</span>
          </p>

          <p className={cn(heroLeadParagraphClass, "mt-5 sm:mt-6")}>
            Autodhun Red is more than a membership — it is a movement for independent music
            creators who dream bigger, create fearlessly, and aim for worldwide recognition.
          </p>

          <AutodhunRedVisual />

          <div className="relative z-[1] mx-auto mt-6 flex justify-center sm:mt-8">
            <LinkButton
              className={`${navActionBtn} !h-11 w-auto !rounded-full !border-0 !bg-[#e8222a] !px-6 !text-[#0b0b0b] text-sm font-bold shadow-[0_0_40px_rgba(232,34,42,0.45)] transition-[filter,transform] hover:brightness-110 active:translate-y-px sm:!h-12 sm:!px-8 sm:text-base`}
              href="/autodhun-red/plans"
              variant="ghost"
            >
              BECOME A MEMBER
            </LinkButton>
          </div>

          <p className={cn(heroLeadParagraphClass, "mt-5 sm:mt-6")}>
            Autodhun Red is built for independent creators who want professional-level music
            distribution, trusted support, fast releases, and global growth opportunities — all in
            one premium platform.
          </p>
        </div>
      </div>
    </section>
  );
}
