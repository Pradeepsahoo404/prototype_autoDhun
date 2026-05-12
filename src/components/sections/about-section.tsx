import { AboutSectionColumns } from "@/components/sections/about-section-columns";
import { SectionPillHeading } from "@/components/sections/section-pill-heading";
import { cn } from "@/lib/utils";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85";


export function AboutSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "relative w-full min-w-0 overflow-x-clip border-t border-white/[0.06] bg-black py-14 text-white sm:py-16 md:py-20 lg:py-24",
        className
      )}
      id="overview"
    >
      <div className="relative w-full min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <AboutSectionColumns imageAlt="Recording studio — Autodhun Digital" imageSrc={ABOUT_IMAGE}>
          <SectionPillHeading as="div" className="mb-6 sm:mb-8" heading="About us" variant="inline" />

          <div className="min-w-0 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2 className="faq-title m-0 w-max min-w-0 text-white !text-[clamp(1.05rem,1.35vw+0.55rem,2.65rem)] whitespace-nowrap tracking-[-0.01em]">
              You Create, People Hear, You Earn
            </h2>
          </div>

          <p className="faq-subtitle mt-4 max-w-prose !text-[clamp(15px,1.7vw,17px)]">
            ... and we help you achieve that !
          </p>

          <div className="mt-6 max-w-prose space-y-4 text-[15px] leading-relaxed text-[#989898] sm:text-base sm:leading-[1.65]">
            <p>
            Autodhun is a digital music company made for independent artists, labels, and creators. We help music owners distribute, manage, protect, and earn from their content across major digital platforms worldwide.
            </p>
            <p>
            Our goal is simple — to give every artist and label the tools, support, and opportunities needed to grow in today’s digital music industry.
            </p>
            <p>From music distribution and royalty management to copyright protection and licensing, Autodhun helps creators turn their music into real revenue while keeping full control of their content.</p>
            <p>We work with leading platforms like Spotify, YouTube Music, JioSaavn, Amazon Music, and many more to make sure your music reaches listeners everywhere.
            Autodhun believes independent music deserves global reach, transparent reporting, and fair opportunities. That’s why we focus on simple technology, trusted partnerships, and creator-first services designed for the modern music business.
            </p>
            <p>Whether you are an artist, music label, producer, or rights owner, Autodhun is here to help you release your music, build your audience, and grow your brand in the digital world.</p>
            <p>We are building a stronger future for independent music.</p>
            <p>Together, we are Autodhun.</p>
          </div>
        </AboutSectionColumns>
      </div>
    </section>
  );
}
