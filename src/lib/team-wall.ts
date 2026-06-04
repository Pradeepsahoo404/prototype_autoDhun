import type { TeamMemberDto } from "@/types/api";

const H_MD = 260;
const H_XL = 420;

export { H_MD, H_XL };

export type PortraitItem = {
  id: string;
  src: string;
  alt: string;
  heightPx: typeof H_MD | typeof H_XL;
};

/** Map API members into wall columns (column 2 = static Preferred Provider tile). */
export function groupTeamMembersByColumn(members: TeamMemberDto[]) {
  const byColumn = new Map<number, PortraitItem[]>();

  for (const m of members) {
    const list = byColumn.get(m.column) ?? [];
    list.push({
      id: m.id,
      src: m.imageUrl,
      alt: m.alt,
      heightPx: m.height === "xl" ? H_XL : H_MD
    });
    byColumn.set(m.column, list);
  }

  return {
    col1: byColumn.get(1) ?? [],
    col3: byColumn.get(3) ?? [],
    col4: byColumn.get(4) ?? [],
    col5: byColumn.get(5) ?? [],
    col6: byColumn.get(6) ?? []
  };
}

/** Default portraits from the original static layout (fallback). */
export const fallbackPortraits: PortraitItem[] = [
  {
    id: "fallback-1",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_MD
  },
  {
    id: "fallback-2",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_MD
  },
  {
    id: "fallback-3",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_MD
  },
  {
    id: "fallback-4",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_MD
  },
  {
    id: "fallback-5",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_XL
  },
  {
    id: "fallback-6",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_MD
  },
  {
    id: "fallback-7",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_MD
  },
  {
    id: "fallback-8",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    alt: "Artist portrait",
    heightPx: H_XL
  }
];

export function fallbackWallColumns() {
  const [a, b, c, d, e, f, g, h] = fallbackPortraits;
  return {
    col1: [a!, b!],
    col3: [c!, d!],
    col4: [e!],
    col5: [f!, g!],
    col6: [h!]
  };
}
