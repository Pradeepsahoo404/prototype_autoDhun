"use client";

import { SiteImage } from "@/components/ui/site-image";
import { getIntroVideoSrc } from "@/lib/site-images";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const DIALOG_TITLE_ID = "about-video-dialog-title";

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  );
}

type AboutSectionMediaProps = {
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  className?: string;
};

export function AboutSectionMedia({
  imageSrc,
  imageAlt,
  videoSrc = getIntroVideoSrc(),
  className,
}: AboutSectionMediaProps) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (open) {
      void video.play().catch(() => {
        /* autoplay may be blocked until user gesture — play button click satisfies this */
      });
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "relative aspect-video w-full min-w-0 overflow-hidden rounded-[20px] bg-[#131313]",
          "border border-white/[0.06] shadow-[0_16px_34px_rgba(0,0,0,0.4)] ring-1 ring-black/40",
          className
        )}
      >
        <SiteImage alt={imageAlt} className="object-cover" fill sizes="(max-width: 1024px) 100vw, 48vw" src={imageSrc} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <button
            suppressHydrationWarning
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-label="Play video about Autodhun"
            className="group relative flex size-[4.5rem] shrink-0 cursor-pointer items-center justify-center sm:size-[5.25rem]"
            type="button"
            onClick={() => setOpen(true)}
          >
            <span
              aria-hidden
              className="about-play-ring pointer-events-none absolute inset-[-18%] rounded-full border border-[#6fd60a]/70 bg-[#5bc000]/22"
            />
            <span
              aria-hidden
              className="about-play-ring-delayed pointer-events-none absolute inset-[-28%] rounded-full border border-[#5bc000]/55 bg-[#4a9f08]/12"
            />
            <span
              className={cn(
                "relative z-[1] flex size-16 items-center justify-center rounded-full sm:size-[4.5rem]",
                "bg-[#84eb0c] text-[#0b0b0b] shadow-[0_0_0_8px_rgba(132,235,12,0.18),0_12px_36px_rgba(0,0,0,0.5)]",
                "transition-transform duration-300 ease-out group-hover:scale-105 group-active:scale-[0.97]"
              )}
            >
              <PlayGlyph className="ml-0.5 size-7 shrink-0 text-[#0b0b0b] sm:size-8" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          aria-labelledby={DIALOG_TITLE_ID}
          aria-modal="true"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
        >
          <button
            aria-label="Close video"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            type="button"
            onClick={close}
          />
          <div className="relative z-[1] w-full max-w-5xl">
            <p className="sr-only" id={DIALOG_TITLE_ID}>
              About Autodhun — intro video
            </p>
            <button
              aria-label="Close"
              className="absolute -right-1 -top-12 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:-right-2 sm:-top-14 sm:size-11"
              type="button"
              onClick={close}
            >
              <X aria-hidden className="size-5" strokeWidth={2} />
            </button>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                src={videoSrc}
                title="About Autodhun — intro video"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
