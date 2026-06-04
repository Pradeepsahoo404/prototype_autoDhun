import { AutodhunRedBentoCard } from "@/components/autodhun-red/autodhun-red-bento-card";
import { FadeUp } from "@/components/services/fade-up";
import { serviceBenefitsGridClass } from "@/components/services/service-benefits-shared";
import { autodhunRedKeyFeaturesContent } from "@/data/autodhun-red/key-features";

const RED = "#e8222a";

function RedSectionAmbient() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklab, ${RED} 14%, transparent) 0%, transparent 55%)`
        }}
      />
      <div
        className="absolute -right-[6%] -top-[10%] h-[min(44vh,420px)] w-[min(60vw,560px)] rounded-[50%] opacity-[0.28] blur-[100px]"
        style={{
          background: `radial-gradient(closest-side, color-mix(in oklab, ${RED} 42%, transparent) 0%, transparent 100%)`
        }}
      />
    </div>
  );
}

function KeyFeaturesHeader({ titleLine1, titleLine2 }: { titleLine1: string; titleLine2: string }) {
  return (
    <header className="relative mx-auto mb-8 max-w-full px-2 text-center sm:mb-10 sm:px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,420px)] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-3xl sm:h-[min(100%,480px)] sm:w-[min(85vw,820px)]"
        style={{
          background: `radial-gradient(ellipse 50% 42% at 50% 45%, color-mix(in oklab, ${RED} 24%, transparent) 0%, transparent 62%)`
        }}
      />
      <h2
        className="faq-title relative mx-auto w-full max-w-full text-center !text-[clamp(14px,min(5vw,5.5vmin),42px)]"
        id="autodhun-red-key-features-heading"
      >
        <span className="inline-block whitespace-normal text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] sm:whitespace-nowrap">
          {titleLine1}
        </span>
        <br />
        <span className="mt-1 inline-block whitespace-normal bg-gradient-to-br from-white via-white to-[#ff6b6b] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(232,34,42,0.28)] sm:whitespace-nowrap">
          {titleLine2}
        </span>
      </h2>
    </header>
  );
}

export function AutodhunRedKeyFeatures() {
  const { sectionTitleLine1, sectionTitleLine2, items } = autodhunRedKeyFeaturesContent;

  return (
    <section
      aria-labelledby="autodhun-red-key-features-heading"
      className="autodhun-red-block relative overflow-hidden bg-black text-white"
    >
      <RedSectionAmbient />

      <div className="faq-container relative z-[1]">
        <FadeUp>
          <KeyFeaturesHeader titleLine1={sectionTitleLine1} titleLine2={sectionTitleLine2} />
        </FadeUp>

        <ul className={serviceBenefitsGridClass}>
          {items.map((item, index) => (
            <li key={item.id} className="min-w-0">
              <FadeUp delay={index * 0.06}>
                <AutodhunRedBentoCard
                  description={item.description}
                  imageAlt={item.imageAlt}
                  imageSrc={item.imageSrc}
                  title={item.title}
                />
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
