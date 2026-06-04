import { SiteImage } from "@/components/ui/site-image";

import { cn } from "@/lib/utils";

const RED = "#e8222a";

const imageBoxStyle = {
  width: "clamp(210px, 44vw, 248px)",
  height: "clamp(190px, 40vw, 226px)"
} as const;

export function AutodhunRedBentoCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-[28px] sm:rounded-[32px] md:min-h-[420px] md:rounded-[36px]",
        "border border-white/[0.1] bg-zinc-950/90",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-32px_48px_-24px_rgba(0,0,0,0.55),0_20px_48px_-20px_rgba(0,0,0,0.55)]",
        "backdrop-blur-[2px]",
        "transition-[border-color,box-shadow,transform] duration-500 ease-out",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-[linear-gradient(165deg,rgba(255,255,255,0.07)_0%,transparent_42%,transparent_58%,rgba(0,0,0,0.35)_100%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500",
        "after:bg-[radial-gradient(90%_70%_at_100%_100%,color-mix(in_oklab,#e8222a_18%,transparent)_0%,transparent_55%)]",
        "hover:border-[color-mix(in_oklab,#e8222a_35%,transparent)]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_color-mix(in_oklab,#e8222a_22%,transparent),0_28px_64px_-24px_rgba(0,0,0,0.6),0_0_48px_-12px_rgba(232,34,42,0.14)]",
        "hover:-translate-y-0.5 hover:after:opacity-100",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #171717 0%, #121212 36%, #0c0c0c 100%), linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
        backgroundBlendMode: "normal, overlay"
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -right-10 z-0 h-[min(52%,280px)] w-[min(72%,360px)] rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, color-mix(in oklab, ${RED} 28%, transparent) 0%, transparent 70%)`
        }}
      />

      <div
        className={cn(
          "relative z-[2] flex w-full flex-col p-7 sm:p-9",
          "max-md:max-w-none",
          "md:max-w-[min(100%,26rem)] lg:max-w-[min(100%,28rem)]"
        )}
      >
        <h3
          className={cn(
            "m-0 w-full text-left text-xl font-extrabold uppercase leading-[1.12] tracking-[0.02em] text-white",
            "font-['Clash_Display','Satoshi',system-ui,sans-serif]",
            "drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]",
            "sm:text-2xl md:text-[1.65rem]"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-3.5 w-full max-w-none text-pretty text-left text-base font-normal leading-relaxed tracking-[0.01em] text-zinc-400",
            "max-md:pr-1 sm:text-[1.05rem] sm:leading-relaxed",
            "md:line-clamp-6 lg:line-clamp-7"
          )}
        >
          {description}
        </p>
      </div>

      {/* md+: overlay art (same as service cards). Below md: in-flow under text. */}
      <div
        className={cn(
          "relative z-[1] shrink-0 self-end px-3 pb-3 pt-1 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04]",
          "max-md:flex max-md:justify-end",
          "md:pointer-events-none md:absolute md:bottom-2 md:right-2 md:px-0 md:pb-0 md:pt-0"
        )}
        style={imageBoxStyle}
      >
        <SiteImage
          alt={imageAlt}
          className="object-contain object-bottom-right drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
          fill
          sizes="(max-width: 768px) 72vw, (max-width: 1024px) 44vw, 248px"
          src={imageSrc}
        />
      </div>
    </article>
  );
}
