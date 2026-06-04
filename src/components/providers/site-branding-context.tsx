"use client";

import { createContext, useContext } from "react";

import type { SiteDetailsDto } from "@/types/api";

const SiteBrandingContext = createContext<SiteDetailsDto | null>(null);

export function SiteBrandingProvider({
  value,
  children
}: {
  value: SiteDetailsDto;
  children: React.ReactNode;
}) {
  return <SiteBrandingContext.Provider value={value}>{children}</SiteBrandingContext.Provider>;
}

export function useSeededSiteBranding() {
  return useContext(SiteBrandingContext);
}
