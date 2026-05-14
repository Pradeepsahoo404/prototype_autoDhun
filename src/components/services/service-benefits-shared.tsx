import Image from "next/image";

import { cn } from "@/lib/utils";

/** Top wash + corner glows + subtle dot field (matches music distribution benefits section). */
export function ServiceBenefitsAmbientBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 55%)"
          }}
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute -right-[6%] -top-[10%] h-[min(44vh,420px)] w-[min(60vw,560px)] rounded-[50%] opacity-[0.26] blur-[100px] sm:opacity-[0.32]"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-primary) 42%, transparent) 0%, transparent 100%)"
          }}
        />
        <div
          className="absolute -bottom-[16%] -left-[8%] h-[min(40vh,380px)] w-[min(56vw,500px)] rounded-[50%] opacity-[0.14] blur-[88px] sm:opacity-[0.18]"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--color-primary) 28%, transparent) 0%, color-mix(in oklab, white 12%, transparent) 38%, transparent 72%)"
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.09] mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.14) 0.5px, transparent 0.6px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>
    </>
  );
}

export function ServiceBenefitsSectionHeader({
  headingId,
  titleLine1,
  titleLine2
}: {
  headingId: string;
  titleLine1: string;
  titleLine2: string;
}) {
  return (
    <header className="relative mx-auto mb-10 max-w-full px-2 text-center sm:mb-12 md:mb-14 sm:px-4">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(120%,420px)] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-3xl sm:h-[min(100%,480px)] sm:w-[min(85vw,820px)]"
        style={{
          background:
            "radial-gradient(ellipse 50% 42% at 50% 45%, color-mix(in oklab, var(--color-primary) 22%, transparent) 0%, transparent 62%)"
        }}
      />
      <div
        aria-hidden
        className="mx-auto mb-5 flex h-px w-[min(72vw,320px)] max-w-full items-center justify-center gap-3 sm:mb-6"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/25" />
        <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-primary)] opacity-90 shadow-[0_0_12px_color-mix(in_oklab,var(--color-primary)_60%,transparent)]" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/25" />
      </div>
      <h2
        className="faq-title relative mx-auto w-full max-w-full text-center !text-[clamp(14px,min(5vw,5.5vmin),42px)]"
        id={headingId}
      >
        <span className="inline-block whitespace-normal text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] sm:whitespace-nowrap">
          {titleLine1}
        </span>
        <br />
        <span className="mt-1 inline-block whitespace-normal bg-gradient-to-br from-white via-white to-[color-mix(in_oklab,var(--color-primary)_88%,white)] bg-clip-text text-transparent drop-shadow-[0_0_28px_color-mix(in_oklab,var(--color-primary)_22%,transparent)] sm:whitespace-nowrap">
          {titleLine2}
        </span>
      </h2>
    </header>
  );
}

export function ServiceBenefitsBentoCard({
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
        "group relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-[36px]",
        "border border-white/[0.1] bg-zinc-950/90",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-32px_48px_-24px_rgba(0,0,0,0.55),0_20px_48px_-20px_rgba(0,0,0,0.55)]",
        "backdrop-blur-[2px]",
        "transition-[border-color,box-shadow,transform] duration-500 ease-out",
        "sm:min-h-[420px]",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-[linear-gradient(165deg,rgba(255,255,255,0.07)_0%,transparent_42%,transparent_58%,rgba(0,0,0,0.35)_100%)]",
        "before:opacity-90",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500",
        "after:bg-[radial-gradient(90%_70%_at_100%_100%,color-mix(in_oklab,var(--color-primary)_18%,transparent)_0%,transparent_55%)]",
        "hover:border-[color-mix(in_oklab,var(--color-primary)_35%,transparent)]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_0_1px_color-mix(in_oklab,var(--color-primary)_22%,transparent),0_28px_64px_-24px_rgba(0,0,0,0.6),0_0_48px_-12px_color-mix(in_oklab,var(--color-primary)_14%,transparent)]",
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
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-primary) 28%, transparent) 0%, transparent 70%)"
        }}
      />

      <div
        className="pointer-events-none absolute bottom-2 right-2 z-[1] transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04] sm:bottom-3 sm:right-3"
        style={{
          width: "clamp(210px, 44vw, 248px)",
          height: "clamp(190px, 40vw, 226px)"
        }}
      >
        <Image
          alt={imageAlt}
          className="object-contain object-bottom-right drop-shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
          fill
          sizes="(max-width: 640px) 44vw, 248px"
          src={imageSrc}
        />
      </div>

      <div className="relative z-[2] flex w-full max-w-[min(100%,26rem)] flex-col p-7 sm:max-w-[min(100%,28rem)] sm:p-9">
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
        <p className="mt-3.5 line-clamp-6 w-full max-w-none text-pretty text-left text-base font-normal leading-relaxed tracking-[0.01em] text-zinc-400 sm:line-clamp-7 sm:text-[1.05rem] sm:leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

export const serviceBenefitsGridClass =
  "m-0 grid list-none grid-cols-1 gap-7 p-0 sm:gap-8 md:grid-cols-2 md:gap-9 lg:gap-10";
