import { AboutSectionColumns } from "@/components/sections/about-section-columns";
import { SectionPillHeading } from "@/components/sections/section-pill-heading";
import { homeAboutFallback } from "@/data/home/home-about";
import { cn } from "@/lib/utils";

/** Homepage about block — static content (not managed in admin). */
export function AboutSection({ className }: { className?: string }) {
  const { pillHeading, title, imageSrc, imageAlt, paragraphs } = homeAboutFallback;

  return (
    <section
      className={cn(
        "relative w-full min-w-0 overflow-x-clip bg-black py-14 text-white sm:py-16 md:py-20 lg:py-24",
        className
      )}
      id="overview"
    >
      <div className="relative w-full min-w-0 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <AboutSectionColumns imageAlt={imageAlt} imageSrc={imageSrc}>
          <SectionPillHeading
            as="div"
            className="mb-6 sm:mb-8"
            heading={pillHeading}
            variant="inline"
          />

          <div className="min-w-0 max-w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <h2 className="faq-title m-0 w-max min-w-0 text-white !text-[clamp(1.05rem,1.35vw+0.55rem,2.65rem)] whitespace-nowrap tracking-[-0.01em]">
              {title}
            </h2>
          </div>

          <div className="mt-6 max-w-prose space-y-4 text-[15px] leading-relaxed text-[#989898] sm:text-base sm:leading-[1.65]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </AboutSectionColumns>
      </div>
    </section>
  );
}
