"use client";

import { useEffect, useId, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { mainNavigation, type NavMenuEntry } from "@/components/navbar/menuData";
import { MenuItem } from "@/components/navbar/MenuItem";
import { PreviewPanel } from "@/components/navbar/PreviewPanel";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

type MenuOverlayProps = {
  id: string;
  onClose: () => void;
  onNavigate: () => void;
};

function isRouteActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavEntryActive(pathname: string, item: NavMenuEntry) {
  if (isRouteActive(pathname, item.href)) {
    return true;
  }
  return item.submenu?.some((sub) => isRouteActive(pathname, sub.href)) ?? false;
}

const MOBILE_NAV_MQ = "(max-width: 1023px)";

function subscribeMobileNav(cb: () => void) {
  const mq = window.matchMedia(MOBILE_NAV_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMobileNavSnapshot() {
  return window.matchMedia(MOBILE_NAV_MQ).matches;
}

function getMobileNavServerSnapshot() {
  return false;
}

export function MenuOverlay({ id, onClose, onNavigate }: MenuOverlayProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const listReactId = useId();
  const listId = `nav-primary-${listReactId.replace(/:/g, "")}`;
  const [hoveredId, setHoveredId] = useState<string | null>(mainNavigation[0]?.id ?? null);
  const [hoveredSubHref, setHoveredSubHref] = useState<string | null>(null);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(null);

  const accordionMode = useSyncExternalStore(
    subscribeMobileNav,
    getMobileNavSnapshot,
    getMobileNavServerSnapshot
  );

  /** Collapse mobile accordion when viewport leaves mobile; avoid sync setState in effect (react-hooks/set-state-in-effect). */
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const clearIfDesktop = () => {
      if (!mq.matches) {
        setMobileExpandedId(null);
      }
    };
    mq.addEventListener("change", clearIfDesktop);
    return () => mq.removeEventListener("change", clearIfDesktop);
  }, []);

  const hoveredEntry = useMemo(() => {
    const match = mainNavigation.find((item) => item.id === hoveredId);
    return match ?? mainNavigation[0] ?? null;
  }, [hoveredId]);

  const activePreview = hoveredEntry;

  const tOverlay = reduceMotion ? 0.2 : 0.58;
  const submenu = hoveredEntry?.submenu;

  const navInner = (
    <div className="flex h-full min-h-0 w-full flex-col gap-8 text-white sm:gap-10 lg:flex-row lg:items-start lg:gap-0 lg:overflow-hidden lg:pl-0 lg:pr-0">
      <nav
        aria-labelledby={`${listId}-label`}
        className="w-full min-w-0 shrink-0 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:overflow-hidden lg:flex-[0_0_280px] lg:pl-8 lg:pt-5 xl:flex-[0_0_336px] xl:pl-16 xl:pt-6"
      >
        <p className="sr-only" id={`${listId}-label`}>
          Primary pages
        </p>
        <ul className="m-0 flex min-h-0 list-none flex-col gap-0 p-0 lg:max-h-full lg:flex-1 lg:justify-between lg:overflow-hidden lg:py-1">
          {mainNavigation.map((item, index) => (
            <MenuItem
              accordionMode={accordionMode}
              index={index}
              isHighlighted={hoveredId === item.id}
              isRouteActive={isNavEntryActive(pathname, item)}
              isSubRouteActive={(href) => isRouteActive(pathname, href)}
              item={item}
              key={item.id}
              listId={listId}
              mobileExpanded={mobileExpandedId === item.id}
              onClearHighlight={() => setHoveredId(null)}
              onHighlight={(hid) => setHoveredId(hid)}
              onMobileToggle={(id) =>
                setMobileExpandedId((prev) => (prev === id ? null : id))
              }
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      </nav>

      <div className="relative z-[1] hidden min-h-[100px] w-full min-w-0 shrink-0 flex-col justify-start pt-6 sm:pt-8 lg:!flex lg:min-h-0 lg:flex-[0_0_300px] lg:overflow-hidden lg:pl-8 lg:pt-5 xl:flex-[0_0_440px] xl:pl-16 xl:pt-6">
        {submenu?.length && hoveredEntry ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-1 lg:gap-0"
            initial={false}
            key={hoveredEntry.id}
            transition={{ duration: reduceMotion ? 0.12 : 0.4, ease: easeLux }}
          >
            <p className="nav-menu-submenu-heading mb-1 text-white/60 lg:mb-0.5">{hoveredEntry.title}</p>
            <ul className="m-0 flex list-none flex-col gap-0 p-0">
              {submenu.map((sub) => {
                const subActive = isRouteActive(pathname, sub.href);
                const subHovered = hoveredSubHref === sub.href;
                const subLit = subActive || subHovered;

                return (
                  <li className="w-full" key={sub.href}>
                    <Link
                      className={cn(
                        "nav-menu-submenu-link group relative !min-w-0 max-w-full pr-12 text-left"
                      )}
                      href={sub.href}
                      onClick={onNavigate}
                      onFocus={() => {
                        setHoveredId(hoveredEntry.id);
                        setHoveredSubHref(sub.href);
                      }}
                      onBlur={() => setHoveredSubHref(null)}
                      onPointerOver={() => {
                        setHoveredId(hoveredEntry.id);
                        setHoveredSubHref(sub.href);
                      }}
                      onPointerLeave={() => setHoveredSubHref(null)}
                    >
                      <motion.span
                        animate={{ x: reduceMotion ? 0 : subActive ? 4 : 0 }}
                        className={cn(
                          "relative inline-flex min-h-[48px] w-full items-center transition-colors duration-500 ease-out lg:min-h-[34px]",
                          subLit
                            ? "text-[var(--color-primary)]"
                            : "text-white/70 group-hover:text-[var(--color-primary)]"
                        )}
                        transition={{ duration: 0.48, ease: easeLux }}
                      >
                        {sub.title}
                      </motion.span>

                      <motion.span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute right-4 top-1/2 inline-flex -translate-y-1/2 transition-[color,transform] duration-300",
                          subLit
                            ? "text-[var(--color-primary)]"
                            : "text-white/35 group-hover:text-[var(--color-primary)]"
                        )}
                        initial={false}
                        transition={{ duration: 0.45, ease: easeLux }}
                        variants={{
                          rest: { x: reduceMotion ? 0 : -6 },
                          on: { x: 0 }
                        }}
                        animate={subLit ? "on" : "rest"}
                      >
                        <ChevronRight className="size-5 shrink-0 lg:size-4" strokeWidth={1.15} />
                      </motion.span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : (
          <div aria-hidden className="hidden flex-1 lg:block" />
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      animate={{ opacity: 1, x: 0, y: 0 }}
      aria-label="Site navigation"
      aria-modal="true"
      className="relative z-[52] flex min-h-0 w-full flex-1 flex-col overflow-x-hidden overflow-y-auto bg-black lg:absolute lg:left-0 lg:top-[var(--site-header-height)] lg:h-[calc(100svh-var(--site-header-height))] lg:max-h-[calc(100svh-var(--site-header-height))] lg:w-[100vw] lg:overflow-x-hidden lg:overflow-y-hidden"
      exit={{ opacity: 0, x: reduceMotion ? 0 : -28, y: reduceMotion ? 0 : -14 }}
      id={id}
      initial={{ opacity: 0, x: reduceMotion ? 0 : -32, y: reduceMotion ? 0 : -18 }}
      role="dialog"
      transition={{ duration: tOverlay, ease: easeLux }}
    >
      <button
        aria-label="Close navigation menu"
        className="absolute inset-0 z-0 cursor-default border-0 bg-transparent p-0"
        tabIndex={-1}
        type="button"
        onClick={onClose}
      />

      {/* One shell: explicit min-height on lg so absolute layers get height (fixes collapsed layout) */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col lg:h-full lg:min-h-0 lg:max-h-full lg:flex-1 lg:overflow-hidden">
        <div className="relative flex min-h-0 flex-1 flex-col lg:h-full lg:min-h-0 lg:max-h-full lg:overflow-hidden">
          {/* Hero: full viewport behind menu; Virgin-style diagonal revealed by white clipped panel */}
          <div className="relative z-0 order-2 min-h-[min(48vh,380px)] flex-1 lg:absolute lg:inset-0 lg:order-1 lg:z-0 lg:min-h-0">
            <PreviewPanel active={activePreview} fullBleed />
          </div>

          <aside
            className={cn(
              "relative z-20 order-1 border-b border-white/10 bg-[#0b0b0b] px-4 pb-10 pt-8 text-white shadow-sm sm:px-6 sm:pb-12 sm:pt-10 lg:absolute lg:inset-y-0 lg:left-0 lg:order-2 lg:z-20 lg:h-full lg:max-h-full lg:w-full lg:overflow-hidden lg:border-0 lg:px-0 lg:pb-0 lg:pt-0 lg:shadow-none lg:[clip-path:polygon(0_0,76vw_0,58vw_100%,0_100%)]"
            )}
            onPointerLeave={(event) => {
              // Desktop: nav + submenu share this aside; clearing here breaks side-by-side hover.
              if (!accordionMode) {
                return;
              }
              const root = event.currentTarget;
              if (root.matches(":focus-within")) {
                return;
              }
              setHoveredId(null);
            }}
          >
            {navInner}
          </aside>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none z-30 h-1.5 shrink-0 bg-zinc-950" />
    </motion.div>
  );
}
