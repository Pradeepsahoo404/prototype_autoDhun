"use client";

import { useSeededSiteBranding } from "@/components/providers/site-branding-context";
import { useGetSiteDetailsQuery } from "@/store/api/autodhunApi";
import type { SiteDetailsDto } from "@/types/api";

export const FALLBACK_SITE_DETAILS: SiteDetailsDto = {
  brandName: "Autodhun Digital",
  logoUrl: "/autodhun-logo.png",
  email: "admin@autodhundigital.in",
  phone: "9135555656",
  addressLine1: "New Sarpanch Colony",
  addressLine2: "Jamalpur, Ludhiana — 141010"
};

export function useSiteDetails() {
  const seeded = useSeededSiteBranding();
  const { data } = useGetSiteDetailsQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  return data ?? seeded ?? FALLBACK_SITE_DETAILS;
}
