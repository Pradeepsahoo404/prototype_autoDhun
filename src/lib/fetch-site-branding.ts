import type { SiteDetailsDto } from "@/types/api";

export async function fetchSiteBranding(): Promise<SiteDetailsDto | null> {
  const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

  try {
    const res = await fetch(`${base}/site-details`, {
      cache: "no-store",
      headers: { Accept: "application/json" }
    });
    if (!res.ok) return null;

    const json = (await res.json()) as { success?: boolean; data?: SiteDetailsDto };
    if (json?.success && json.data) {
      return json.data;
    }
  } catch {
    /* client will refetch */
  }

  return null;
}
