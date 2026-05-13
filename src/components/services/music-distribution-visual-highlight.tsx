import type { MusicDistributionVisualContent } from "@/data/services/music-distribution";

import { ServiceVisualHighlightAnimated } from "@/components/services/service-visual-highlight-animated";
import { cn } from "@/lib/utils";

/** Stylized dark “Spotify” desktop panel — illustrative only. */
function SpotifyMockupCard({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none select-none rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)] sm:rounded-3xl sm:p-3",
        "[transform:perspective(1100px)_rotateY(14deg)_rotateX(6deg)_translateZ(0)]",
        className
      )}
    >
      <div className="flex gap-2 sm:gap-2.5">
        <div className="flex w-6 shrink-0 flex-col gap-1.5 pt-0.5 sm:w-7">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <span className="mt-2 h-6 w-6 rounded-md bg-white/10" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[8px] font-semibold text-white/90 sm:text-[9px]">Good morning</p>
          <div className="mt-1.5 grid grid-cols-3 gap-1 sm:gap-1.5">
            {["#1db954", "#7c3aed", "#e11d48", "#0ea5e9", "#f97316", "#eab308"].map((c, i) => (
              <div key={i} className="aspect-square rounded-md shadow-inner sm:rounded-lg" style={{ background: c }} />
            ))}
          </div>
          <div className="mt-2 flex items-center gap-1.5 rounded-md bg-black/50 px-1.5 py-1 sm:mt-2.5">
            <span className="size-4 shrink-0 rounded-full bg-white/15 sm:size-5" />
            <div className="h-0.5 flex-1 rounded-full bg-white/15">
              <div className="h-full w-1/3 rounded-full bg-white/35" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Stylized “Apple Music” phone — illustrative only. */
function AppleMusicMockupCard({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none select-none rounded-[1.35rem] border border-white/[0.1] bg-[#0a0a0a] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.05)] sm:rounded-[1.75rem] sm:p-3",
        "[transform:perspective(1100px)_rotateY(-12deg)_rotateX(5deg)_translateZ(0)]",
        className
      )}
    >
      <div className="mx-auto h-1 w-10 rounded-full bg-white/15 sm:w-12" />
      <div
        className="mx-auto mt-2 aspect-square w-[78%] rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-600 to-emerald-500 shadow-inner sm:mt-2.5 sm:rounded-2xl"
        style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.35)" }}
      />
      <p className="mt-2 truncate text-center text-[8px] font-semibold text-white/90 sm:mt-2.5 sm:text-[9px]">
        Now Playing
      </p>
      <p className="truncate text-center text-[7px] text-white/45 sm:text-[8px]">Artist · Track</p>
      <div className="mx-auto mt-2 flex w-[88%] items-center justify-center gap-3 sm:mt-2.5">
        <span className="size-2.5 rounded-full bg-white/20 sm:size-3" />
        <span className="flex size-7 items-center justify-center rounded-full bg-white text-black shadow-lg sm:size-8">
          <span className="ml-0.5 block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-black sm:border-y-[6px] sm:border-l-[10px]" />
        </span>
        <span className="size-2.5 rounded-full bg-white/20 sm:size-3" />
      </div>
    </div>
  );
}

export function MusicDistributionVisualHighlight({
  content,
  blendWithHero = true,
  className
}: {
  content: MusicDistributionVisualContent;
  blendWithHero?: boolean;
  className?: string;
}) {
  return (
    <ServiceVisualHighlightAnimated
      blendWithHero={blendWithHero}
      beforeMainColumn={
        <>
          <SpotifyMockupCard className="absolute left-[1%] top-[30%] z-[12] hidden w-[min(26vw,300px)] md:left-[2%] lg:block xl:top-[26%] xl:w-[min(24vw,340px)]" />
          <AppleMusicMockupCard className="absolute right-[1%] top-[26%] z-[12] hidden w-[min(22vw,200px)] max-w-[220px] md:right-[2%] lg:block xl:top-[22%] xl:w-[min(20vw,220px)]" />
          <SpotifyMockupCard className="absolute left-0 top-[32%] z-[12] w-[140px] scale-[0.82] opacity-90 max-md:hidden md:block lg:hidden" />
          <AppleMusicMockupCard className="absolute right-0 top-[28%] z-[12] w-[120px] scale-[0.82] opacity-90 max-md:hidden md:block lg:hidden" />
        </>
      }
      className={className}
      content={content}
      waveformDetail="music"
    />
  );
}
