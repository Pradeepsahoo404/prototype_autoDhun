"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { SiteBrandingProvider } from "@/components/providers/site-branding-context";
import type { SiteDetailsDto } from "@/types/api";
import { autodhunApi } from "@/store/api/autodhunApi";
import { makeStore, type AppStore } from "@/store/store";

export function StoreProvider({
  children,
  initialSiteBranding
}: {
  children: React.ReactNode;
  initialSiteBranding?: SiteDetailsDto;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    if (initialSiteBranding) {
      storeRef.current.dispatch(
        autodhunApi.util.upsertQueryData("getSiteDetails", undefined, initialSiteBranding)
      );
    }
  }

  const content = initialSiteBranding ? (
    <SiteBrandingProvider value={initialSiteBranding}>{children}</SiteBrandingProvider>
  ) : (
    children
  );

  return <Provider store={storeRef.current}>{content}</Provider>;
}
