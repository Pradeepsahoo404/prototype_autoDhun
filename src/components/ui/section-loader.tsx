"use client";

import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionLoaderProps = {
  label?: string;
  className?: string;
  minHeight?: string;
};

/** Centered spinner while homepage sections fetch API data. */
export function SectionLoader({
  label = "Loading content…",
  className,
  minHeight = "min-h-[280px]"
}: SectionLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4",
        minHeight,
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <span
          aria-hidden
          className="absolute size-16 rounded-full bg-[var(--color-primary)]/10 blur-xl"
        />
        <Loader2
          className="relative size-10 animate-spin text-[var(--color-primary)]"
          strokeWidth={2.25}
          aria-hidden
        />
      </div>
      <p className="text-sm font-medium tracking-wide text-white/55">{label}</p>
    </div>
  );
}
