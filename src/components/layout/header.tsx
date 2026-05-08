import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="text-base font-semibold tracking-normal text-zinc-950" href="/">
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 sm:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
