"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { NavMenuEntry } from "@/components/navbar/menuData";

import { cn } from "@/lib/utils";

const easeLux = [0.22, 1, 0.36, 1] as const;

type MenuItemProps = {
  item: NavMenuEntry;
  index: number;
  isRouteActive: boolean;
  isHighlighted: boolean;
  onHighlight: (id: string) => void;
  onClearHighlight: () => void;
  onNavigate: () => void;
  listId: string;
  /** Inline accordion submenu: only below lg breakpoint (see MenuOverlay). */
  accordionMode: boolean;
  mobileExpanded: boolean;
  onMobileToggle: (id: string) => void;
  isSubRouteActive: (href: string) => boolean;
};

export function MenuItem({
  item,
  index,
  isRouteActive,
  isHighlighted,
  onHighlight,
  onClearHighlight,
  onNavigate,
  listId,
  accordionMode,
  mobileExpanded,
  onMobileToggle,
  isSubRouteActive
}: MenuItemProps) {
  const reduceMotion = useReducedMotion();
  const active = isRouteActive;
  const hasSubmenu = Boolean(item.submenu?.length);
  const arrowOn = isHighlighted || active;
  const titleGreen = active || isHighlighted;

  /** Layout on the row; color lives on title/chevron so `a { color: inherit }` cannot block hover/active. */
  const rowLayoutClass =
    "nav-menu-primary group relative flex w-full max-w-[min(100%,336px)] items-center py-0 pr-12 text-left sm:pr-16 sm:whitespace-nowrap";

  const titleClass = cn(
    "relative inline-flex min-h-[56px] w-full min-w-0 max-w-[280px] items-center transition-colors duration-500 ease-out sm:min-h-[72px] sm:whitespace-nowrap",
    titleGreen
      ? "text-[var(--color-primary)]"
      : "text-white group-hover:text-[var(--color-primary)]"
  );

  const submenuId = `${listId}-${item.id}-submenu`;

  return (
    <motion.li
      animate={{ opacity: 1, y: 0 }}
      className="relative list-none"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      transition={{
        delay: reduceMotion ? 0 : 0.06 + index * 0.085,
        duration: reduceMotion ? 0.14 : 0.52,
        ease: easeLux
      }}
    >
      <div
        className="w-full max-w-[min(100%,320px)] lg:max-w-[min(42vw,360px)]"
        onBlurCapture={(event) => {
          const next = event.relatedTarget;
          if (next instanceof Node && event.currentTarget.contains(next)) {
            return;
          }
          onClearHighlight();
        }}
        onPointerOver={() => onHighlight(item.id)}
      >
        {hasSubmenu ? (
          <button
            aria-controls={submenuId}
            aria-expanded={accordionMode && mobileExpanded}
            className={cn(
              rowLayoutClass,
              "cursor-pointer border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            )}
            id={`${listId}-${item.id}`}
            type="button"
            onClick={() => {
              onHighlight(item.id);
              if (accordionMode) {
                onMobileToggle(item.id);
              }
            }}
            onFocus={() => onHighlight(item.id)}
            onPointerOver={() => onHighlight(item.id)}
          >
            <motion.span
              animate={{ x: reduceMotion ? 0 : active ? 4 : 0 }}
              className={titleClass}
              transition={{ duration: 0.48, ease: easeLux }}
            >
              {item.title}
            </motion.span>

            <motion.span
              aria-hidden
              className={cn(
                "pointer-events-none absolute right-5 top-1/2 inline-flex -translate-y-1/2 transition-[color,transform] duration-300 sm:right-6",
                arrowOn ? "text-[var(--color-primary)]" : "text-white/35 group-hover:text-[var(--color-primary)]",
                mobileExpanded && "max-lg:rotate-90"
              )}
              initial={false}
              transition={{ duration: 0.45, ease: easeLux }}
              variants={{
                rest: { x: reduceMotion ? 0 : -8 },
                on: { x: 0 }
              }}
              animate={arrowOn ? "on" : "rest"}
            >
              <ChevronRight className="size-6 shrink-0 sm:size-7" strokeWidth={1.15} />
            </motion.span>
          </button>
        ) : (
          <Link
            aria-current={isRouteActive ? "page" : undefined}
            className={rowLayoutClass}
            href={item.href}
            id={`${listId}-${item.id}`}
            onClick={onNavigate}
            onFocus={() => onHighlight(item.id)}
            onPointerOver={() => onHighlight(item.id)}
          >
            <motion.span
              animate={{ x: reduceMotion ? 0 : active ? 4 : 0 }}
              className={titleClass}
              transition={{ duration: 0.48, ease: easeLux }}
            >
              {item.title}
            </motion.span>

            <motion.span
              aria-hidden
              className={cn(
                "pointer-events-none absolute right-5 top-1/2 inline-flex -translate-y-1/2 transition-[color,transform] duration-300 sm:right-6",
                arrowOn ? "text-[var(--color-primary)]" : "text-white/35 group-hover:text-[var(--color-primary)]"
              )}
              initial={false}
              transition={{ duration: 0.45, ease: easeLux }}
              variants={{
                rest: { x: reduceMotion ? 0 : -8 },
                on: { x: 0 }
              }}
              animate={arrowOn ? "on" : "rest"}
            >
              <ChevronRight className="size-6 shrink-0 sm:size-7" strokeWidth={1.15} />
            </motion.span>
          </Link>
        )}

        {hasSubmenu && item.submenu ? (
          <ul
            className={cn(
              "m-0 mt-1 list-none flex-col gap-0 border-l border-white/15 py-1 pl-4 sm:pl-5 lg:!hidden",
              !accordionMode && "hidden",
              accordionMode && (mobileExpanded ? "flex" : "hidden")
            )}
            id={submenuId}
          >
            {item.submenu.map((sub) => {
              const subActive = isSubRouteActive(sub.href);
              return (
                <li className="w-full" key={sub.href}>
                  <Link
                    className={cn(
                      "nav-menu-submenu-link group relative flex w-full !min-h-[44px] !min-w-0 items-center py-2 pr-12 text-left text-[13px] leading-snug sm:text-[14px]"
                    )}
                    href={sub.href}
                    onClick={onNavigate}
                  >
                    <span
                      className={cn(
                        "relative inline-flex min-h-[44px] w-full min-w-0 flex-1 items-center transition-colors duration-500 ease-out",
                        subActive
                          ? "text-[var(--color-primary)]"
                          : "text-white/75 group-hover:text-[var(--color-primary)]"
                      )}
                    >
                      {sub.title}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute right-2 top-1/2 inline-flex -translate-y-1/2 transition-colors duration-300 sm:right-3",
                        subActive
                          ? "text-[var(--color-primary)]"
                          : "text-white/35 group-hover:text-[var(--color-primary)]"
                      )}
                    >
                      <ChevronRight className="size-5 shrink-0" strokeWidth={1.15} />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </motion.li>
  );
}
