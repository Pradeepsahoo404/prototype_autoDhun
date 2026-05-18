import type { ReactNode } from "react";

export function AutodhunRedPlansPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="autodhun-red-page autodhun-red-plans-page relative isolate min-h-screen bg-black text-white">
      <div aria-hidden className="autodhun-red-plans-ambient pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="autodhun-red-plans-ambient__pulse" />
        <div className="autodhun-red-plans-ambient__glow autodhun-red-plans-ambient__glow--top" />
        <div className="autodhun-red-plans-ambient__glow autodhun-red-plans-ambient__glow--mid" />
        <div className="autodhun-red-plans-ambient__glow autodhun-red-plans-ambient__glow--bottom" />
        <div className="autodhun-red-plans-ambient__vignette" />
      </div>

      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
