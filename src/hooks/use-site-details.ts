"use client";

import { useSeededSiteBranding } from "@/components/providers/site-branding-context";
import { useGetSiteDetailsQuery } from "@/store/api/autodhunApi";
import type { SiteDetailsDto } from "@/types/api";

export const FALLBACK_SITE_DETAILS: SiteDetailsDto = {
  brandName: "Autodhun",
  logoUrl: "/Autodhun_logo_white_n_green_1388x250.png",
  email: "help@autodhun.com",
  phone: "9135555656",
  addressLine1: "Near Haria Industrial Compound",
  addressLine2: "Majiwada, Thane(W) - 400 601"
};

export function useSiteDetails() {
  const seeded = useSeededSiteBranding();
  const { data } = useGetSiteDetailsQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  return data ?? seeded ?? FALLBACK_SITE_DETAILS;
}
