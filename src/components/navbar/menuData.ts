export type NavSubmenuItem = {
  title: string;
  href: string;
};

export type NavMenuEntry = {
  id: string;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  description?: string;
  submenu?: NavSubmenuItem[];
};

export const mainNavigation: NavMenuEntry[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "City skyline at dusk",
    description: "Return to the home experience."
  },
  {
    id: "distribution",
    title: "Distribution",
    href: "/distribution",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Low-angle view of modern skyscrapers at dusk",
    description: "Global distribution tools for your catalog.",
    submenu: [
      { title: "Release Your Music", href: "/distribution/release-your-music" },
      { title: "Royalties Split & Management", href: "/distribution/royalties-split-management" },
      { title: "Data & Analytics", href: "/distribution/data-analytics" },
      { title: "Dolby Atmos Distribution", href: "/distribution/dolby-atmos" },
      { title: "YouTube Content ID & OAC", href: "/distribution/youtube-content-id-oac" }
    ]
  },
  {
    id: "publishing",
    title: "Publishing",
    href: "/publishing",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Team collaborating in an office",
    description: "Publishing administration and creative opportunities.",
    submenu: [
      { title: "Publishing Administration", href: "/publishing/administration" },
      { title: "Creative Sync", href: "/publishing/creative-sync" },
      { title: "Licensing Exchange", href: "/publishing/licensing-exchange" }
    ]
  },
  {
    id: "growth",
    title: "Growth",
    href: "/growth",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Community gathering outdoors",
    description: "Marketing and growth services for artists and labels.",
    submenu: [
      { title: "Marketing Tools", href: "/growth/marketing-tools" },
      { title: "Artist Capital", href: "/growth/artist-capital" },
      { title: "Growth & Marketing", href: "/growth/growth-marketing" }
    ]
  },
  {
    id: "get-in-touch",
    title: "Get in Touch",
    href: "/get-in-touch",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Portrait in natural light",
    description: "Start a conversation with our team."
  }
];
