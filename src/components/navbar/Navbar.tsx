"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { MenuOverlay } from "@/components/navbar/MenuOverlay";

import { cn } from "@/lib/utils";

/** Matches reserved space under fixed header (hero sections, etc.). */
export const NAVBAR_TOP_HEIGHT_CLASS = "h-[var(--site-header-height)]";

function NavMenuGlyph({ open }: { open: boolean }) {
  const reduceMotion = useReducedMotion();
  const t = { duration: reduceMotion ? 0.14 : 0.42, ease: [0.22, 1, 0.36, 1] as const };
  const line = "absolute left-0 h-0.5 w-full rounded-full bg-[var(--color-primary)]";

  return (
    <span aria-hidden className="relative block h-4 w-[22px] shrink-0">
      <motion.span
        animate={open ? { top: 7, rotate: 45 } : { top: 0, rotate: 0 }}
        className={line}
        transition={t}
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0.55 } : { opacity: 1, scaleX: 1 }}
        className={line}
        style={{ top: 7 }}
        transition={t}
      />
      <motion.span
        animate={open ? { top: 7, rotate: -45 } : { top: 14, rotate: 0 }}
        className={line}
        transition={t}
      />
    </span>
  );
}

const navActionBtn =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-md px-5 text-sm font-semibold no-underline transition-[background-color,border-color,color,transform] sm:px-6";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reactId = useId();
  const menuPanelId = `site-menu-panel-${reactId.replace(/:/g, "")}`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const id = window.requestAnimationFrame(() => {
      toggleRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  const onNavigate = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] flex flex-col overflow-x-hidden border-b border-white/[0.09] bg-black text-white transition-[background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "h-dvh min-h-0" : ""
        )}
      >
        <div className={cn("relative w-full max-md:overflow-hidden md:overflow-visible", NAVBAR_TOP_HEIGHT_CLASS)}>
          {/*
            Do not combine `flex` + `md:grid` on the same node — the later rule can lose and
            everything stays `flex-start`. Use `max-md:flex` + `md:grid` only.
            max-md: menu left, logo right (CTAs hidden). md+: menu | centered logo | CTAs.
          */}
          <div className="h-full min-h-0 w-full items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-4 md:px-5 md:py-3 lg:px-6 max-md:flex max-md:justify-between max-md:gap-2">
            <div className="relative z-20 flex min-w-0 shrink-0 items-center justify-start self-stretch pl-0 sm:pl-0.5">
              <button
                ref={toggleRef}
                suppressHydrationWarning
                aria-controls={menuPanelId}
                aria-expanded={open}
                className={cn(
                  "relative flex h-full min-h-[72px] items-center gap-2 overflow-hidden pr-5 pl-3 sm:min-h-[76px] sm:gap-3 sm:pr-10 sm:pl-4 md:min-h-0 md:pr-12 md:pl-5",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                )}
                type="button"
                onClick={() => setOpen((value) => !value)}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-[-35%] z-0 w-[165%] -skew-x-[11deg] bg-black shadow-[4px_0_24px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.08]"
                />
                <span className="relative z-[1] flex items-center gap-3">
                  <NavMenuGlyph open={open} />
                  <span
                    className={cn(
                      "text-xs font-bold uppercase tracking-[0.14em] [font-style:normal] sm:text-sm",
                      open ? "text-[var(--color-primary)]" : "text-white"
                    )}
                  >
                    {open ? "Close" : "Menu"}
                  </span>
                </span>
              </button>
            </div>

            <div className="relative z-30 flex min-w-0 shrink-0 items-center justify-end self-center md:justify-center">
              <Link
                className="inline-flex min-w-0 max-w-[134px] shrink-0 origin-center scale-[0.88] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] sm:scale-90 md:scale-100"
                href="/"
                onClick={() => setOpen(false)}
              >
                <span className="footer-logo-mark max-[380px]:!h-[38px] max-[380px]:!w-[112px]">
                  <Image
                    alt="Autodhun Digital"
                    className="h-auto w-full max-w-[134px]"
                    height={46}
                    priority
                    src="/autodhun-logo.png"
                    style={{ width: "auto", height: "auto" }}
                    width={134}
                  />
                </span>
              </Link>
            </div>

            <div className="relative z-40 min-w-0 shrink-0 max-md:hidden md:flex md:flex-row md:flex-nowrap md:items-center md:justify-end gap-1.5 self-center sm:gap-2 md:pr-1 lg:pr-2">
              <Link
                className={cn(
                  navActionBtn,
                  "h-9 shrink-0 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm md:h-11 md:px-5",
                  "border border-white/30 text-white hover:border-white/45 hover:bg-white/[0.08] active:translate-y-px"
                )}
                href="/sign-in"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Link>
              <Link
                className={cn(
                  navActionBtn,
                  "h-9 shrink-0 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm md:h-11 md:px-5",
                  "footer-newsletter-button !rounded-md border-0 font-bold text-[#0b0b0b] hover:brightness-95 active:translate-y-px"
                )}
                href="/get-started"
                onClick={() => setOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {open ? (
            <MenuOverlay id={menuPanelId} onClose={close} onNavigate={onNavigate} />
          ) : null}
        </AnimatePresence>
      </header>

      <div aria-hidden className={cn("shrink-0", NAVBAR_TOP_HEIGHT_CLASS)} />
    </>
  );
}
