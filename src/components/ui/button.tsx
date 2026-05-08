import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-zinc-950 text-white shadow-sm hover:bg-zinc-800",
  secondary: "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50",
  ghost: "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
};

const baseClassName =
  "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={cn(baseClassName, variants[variant], className)} {...props} />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(baseClassName, variants[variant], className)}
      href={href}
      {...props}
    />
  );
}
