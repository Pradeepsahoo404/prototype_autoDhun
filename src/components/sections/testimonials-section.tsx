"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

import { cn } from "@/lib/utils";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
};

const ITEMS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Autodhun made our first global release painless — metadata, timelines, and payouts all felt under control instead of scattered across spreadsheets.",
    name: "Priya N.",
    role: "Label ops, Mumbai",
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    id: "2",
    quote:
      "We finally have one place to see how catalog tracks perform and where listeners actually are. The dashboard language matches how our team talks.",
    name: "Marcus T.",
    role: "Independent artist, Berlin",
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    id: "3",
    quote:
      "Content ID used to be a black box for us. Support walked through claims and channel setup so our artists stopped guessing what was happening on YouTube.",
    name: "Elena V.",
    role: "Catalog manager, Toronto",
    avatarSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=128&h=128&q=80",
  },
  {
    id: "4",
    quote:
      "Distribution speed and clear communication matter for our sync pitches. Deliveries landed on the dates we promised supervisors — that alone paid for the switch.",
    name: "Jordan K.",
    role: "Publisher, Los Angeles",
    avatarSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128&q=80",
  },
];

const N = ITEMS.length;
/** [clone last, …items, clone first] — enables seamless wrap in the carousel */
const LOOP_SLIDES: Testimonial[] = [ITEMS[N - 1]!, ...ITEMS, ITEMS[0]!];

const AUTO_MS = 4500;
const SNIP_LEN = 148;

function useViewportWidth(ref: RefObject<HTMLElement | null>) {
  const [w, setW] = useState(0);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el);
    setW(el.clientWidth);
    return () => ro.disconnect();
  }, [ref]);
  return w;
}

const LEMON_RGB = "132,235,12";

/** Horizontal stock + EQ toward mic — primary / lemon */
function SliderToMicConnector({ className }: { className?: string }) {
  const bars = [6, 12, 8, 14, 10, 16, 9];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-0 top-[46%] z-[4] hidden -translate-x-full -translate-y-1/2 items-center gap-2 pr-1 md:flex",
        className
      )}
    >
      <div
        className="h-[3px] w-[min(10rem,18vw)] shrink-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(${LEMON_RGB},0.2) 28%, rgba(${LEMON_RGB},0.95) 72%, rgba(${LEMON_RGB},0.45) 100%)`,
          boxShadow: `0 0 16px rgba(${LEMON_RGB},0.35)`,
        }}
      />
      <div className="flex h-10 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-[rgba(132,235,12,0.2)] to-[rgba(132,235,12,0.95)]"
            style={{ height: h }}
          />
        ))}
      </div>
    </div>
  );
}

/** Local placeholder — swap for final art when ready */
const TESTIMONIALS_DUMMY_SRC = "./testimonials-mic-dummy.svg";

/** Right column: single dummy graphic, lemon frame (matches section style) */
function TestimonialsRightFigure({ showConnector }: { showConnector: boolean }) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col",
        showConnector
          ? "min-h-[min(420px,50vh)] justify-center"
          : "min-h-[min(360px,55vh)] justify-center"
      )}
    >
      {showConnector ? <SliderToMicConnector /> : null}
      <div className=" relative mx-auto flex w-full max-w-[min(380px,92vw)] flex-1 items-center justify-center md:max-w-[min(400px,36vw)] lg:max-w-[min(420px,34vw)]">
        <div className=" relative w-full max-w-[min(340px,88vw)] overflow-hidden rounded-2xl border-2 border-[rgba(132,235,12,0.55)] bg-black shadow-[0_0_48px_rgba(132,235,12,0.12),0_24px_60px_rgba(0,0,0,0.55)]">
          {/* `unoptimized` + intrinsic size: Next image optimizer often skips local SVG; `fill` can collapse without a sized box */}
          <Image
            alt=""
            className="h-auto w-full object-contain p-3 sm:p-4"
            height={480}
            src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=128&h=128&q=80"}
            unoptimized
            width={400}
          />
        </div>
      </div>
    </div>
  );
}

function StarsRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 shrink-0 fill-[var(--color-primary)] text-[var(--color-primary)]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  active,
  expanded,
  onToggleRead,
}: {
  item: Testimonial;
  active: boolean;
  expanded: boolean;
  onToggleRead: () => void;
}) {
  const long = item.quote.length > SNIP_LEN;
  const shown =
    expanded || !long ? item.quote : `${item.quote.slice(0, SNIP_LEN).trim()}…`;

  return (
    <article
      className={cn(
        "group relative flex h-full w-full shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border bg-[#0c0c0c] p-5 shadow-lg transition-[transform,box-shadow,opacity] duration-500 ease-out will-change-transform sm:p-6",
        "border-white/[0.08]",
        active
          ? "z-[2] scale-[1.06] opacity-100 shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_0_1px_rgba(132,235,12,0.42),0_0_44px_rgba(132,235,12,0.2)] md:scale-[1.12]"
          : "z-[1] scale-[0.94] opacity-[0.72] shadow-[0_0_0_1px_rgba(132,235,12,0.12)] md:scale-[0.92] md:opacity-[0.78]"
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-3 top-3 z-[2] size-8 origin-top-right border-t-2 border-r-2 border-[var(--color-primary)] transition-transform duration-300 ease-out group-hover:scale-[1.48]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-2 text-[4.5rem] font-serif leading-none text-white/[0.04]"
      >
        &ldquo;
      </div>

      <StarsRow />

      <p className="relative z-[1] mt-4 text-[15px] leading-relaxed text-white/88 sm:text-base sm:leading-[1.65]">
        {shown}
        {long ? (
          <>
            {" "}
            <button
              type="button"
              className="inline cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline"
              suppressHydrationWarning
              onClick={(e) => {
                e.stopPropagation();
                onToggleRead();
              }}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </>
        ) : null}
      </p>

      <div className="relative z-[1] mt-5 h-px w-full bg-white/[0.08]" />

      <div className="relative z-[1] mt-4 flex items-center gap-3">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-[rgba(132,235,12,0.45)]">
          {item.avatarSrc ? (
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="44px"
              src={item.avatarSrc}
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-zinc-500">
              <span className="text-xs font-medium">?</span>
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">{item.name}</p>
          <p className="truncate text-xs font-medium text-[var(--color-primary)] sm:text-sm">
            {item.role}
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="relative z-[1] mt-5 h-[3px] w-full rounded-full bg-gradient-to-r from-transparent via-[var(--color-primary)] to-[rgba(132,235,12,0.35)]"
      />
    </article>
  );
}

/** Active dot index 0..N-1 from loop slide index */
function slideIndexToDot(slideIndex: number) {
  if (slideIndex === 0) return N - 1;
  if (slideIndex === N + 1) return 0;
  return slideIndex - 1;
}

export function TestimonialsSection({ className }: { className?: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const vw = useViewportWidth(viewportRef);
  const [slideIndex, setSlideIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const jumpLock = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const advance = useCallback(() => {
    if (jumpLock.current) return;
    setExpandedId(null);
    setSlideIndex((s) => {
      if (reduceMotion) {
        if (s < 1 || s > N) return 1;
        return s + 1 > N ? 1 : s + 1;
      }
      if (s === 0 || s === N + 1) return s;
      if (s === N) return N + 1;
      return s + 1;
    });
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    if (paused) return;
    const id = window.setInterval(advance, AUTO_MS);
    return () => window.clearInterval(id);
  }, [advance, paused, reduceMotion]);

  const goToSlide = useCallback((dotIndex: number) => {
    setExpandedId(null);
    setSlideIndex(dotIndex + 1);
  }, []);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      if (e.propertyName !== "transform") return;
      if (jumpLock.current) return;
      if (slideIndex === N + 1) {
        jumpLock.current = true;
        setNoTransition(true);
        setSlideIndex(1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoTransition(false);
            jumpLock.current = false;
          });
        });
      } else if (slideIndex === 0) {
        jumpLock.current = true;
        setNoTransition(true);
        setSlideIndex(N);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setNoTransition(false);
            jumpLock.current = false;
          });
        });
      }
    },
    [reduceMotion, slideIndex]
  );

  /** Exactly three card columns (+ two gaps) fit in the carousel viewport width */
  const GAP = 12;
  const CARD =
    vw > 0 ? Math.max(168, Math.floor((vw - 2 * GAP - 2) / 3)) : 280;
  const pad = vw > 0 ? Math.max(8, (vw - CARD) / 2) : 16;

  const translate =
    vw > 0
      ? -(pad + slideIndex * (CARD + GAP) + CARD / 2 - vw / 2)
      : 0;

  const dotActive = slideIndexToDot(slideIndex);

  return (
    <section
      className={cn(
        "relative w-full overflow-x-clip overflow-y-visible bg-black pb-12 pt-2 text-white sm:pb-14 sm:pt-3 lg:pb-16 lg:pt-4",
        className
      )}
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute -left-[15%] top-0 h-[min(60%,480px)] w-[min(95%,640px)] rounded-full opacity-55 blur-3xl"
          style={{
            background: `radial-gradient(ellipse at 25% 25%, rgba(${LEMON_RGB},0.08) 0%, rgba(${LEMON_RGB},0.22) 42%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[min(1600px,calc(100%-24px))] px-4 sm:px-6 lg:px-10">
        <div className="relative grid w-full min-w-0 items-stretch gap-10 md:grid-cols-[minmax(0,1fr)_clamp(268px,34vw,430px)] md:gap-8 lg:gap-12 xl:gap-14">
          <div className="relative min-w-0 overflow-visible">
            <p className="faq-kicker mb-2 text-[12px] sm:text-sm">
              Voices from labels &amp; artists
            </p>
            <h2 className="faq-title !text-[clamp(1.25rem,2.2vw+0.6rem,2.25rem)]">
              Trusted by teams shipping music worldwide
            </h2>
            <p className="faq-subtitle mb-8 max-w-2xl sm:mb-10">
              Real workflows — distribution, rights, and analytics — told in
              their own words.
            </p>

            <div
              ref={viewportRef}
              className="relative overflow-x-hidden overflow-y-visible py-6 md:py-8"
            >
              <div
                className={cn(
                  "flex",
                  reduceMotion || noTransition
                    ? ""
                    : "transition-[transform] duration-[620ms] ease-out"
                )}
                style={{
                  gap: GAP,
                  paddingLeft: pad,
                  paddingRight: pad,
                  transform: `translate3d(${translate}px,0,0)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {LOOP_SLIDES.map((item, i) => {
                  const active = i === slideIndex;
                  const key = `loop-${i}-${item.id}`;
                  return (
                    <div
                      key={key}
                      className="flex shrink-0 items-stretch justify-center"
                      style={{ width: CARD }}
                    >
                      <TestimonialCard
                        active={active}
                        expanded={expandedId === item.id}
                        item={item}
                        onToggleRead={() =>
                          setExpandedId((prev) =>
                            prev === item.id ? null : item.id
                          )
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="mt-2 flex justify-center gap-2 md:mt-4"
              aria-label="Choose testimonial"
            >
              {ITEMS.map((item, i) => {
                const on = i === dotActive;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={on ? "true" : undefined}
                    suppressHydrationWarning
                    className={cn(
                      "size-2.5 rounded-full border transition-[background-color,transform,box-shadow] sm:size-3",
                      on
                        ? "scale-110 border-[var(--color-primary)] bg-[var(--color-primary)] shadow-[0_0_14px_rgba(132,235,12,0.55)]"
                        : "border-[rgba(132,235,12,0.5)] bg-transparent hover:border-[var(--color-primary)]"
                    )}
                    onClick={() => goToSlide(i)}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative min-h-0 min-w-0 md:flex md:flex-col md:justify-center lg:pl-1">
            <div className="relative mx-auto hidden w-full md:block">
              <TestimonialsRightFigure showConnector />
            </div>
            <div className="relative mx-auto mt-10 w-full md:mt-0 md:hidden">
              <TestimonialsRightFigure showConnector={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
