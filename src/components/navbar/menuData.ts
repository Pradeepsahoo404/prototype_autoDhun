import { navImages } from "@/lib/site-images";

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
    image: navImages.home,
    imageAlt: "City skyline at dusk",
    description: "Return to the home experience."
  },
  {
    id: "about",
    title: "About",
    href: "/about",
    image: navImages.about,
    imageAlt: "Autodhun brand identity — logo grid",
    description: "Who we are and how we work with creators.",
    submenu: [
      { title: "About Us", href: "/about/about-us" },
      { title: "Our Story", href: "/about/our-story" },
      // { title: "Work With Autodhun", href: "/about/work-with-autodhun" }
    ]
  },
  {
    id: "services",
    title: "Services",
    href: "/services",
    image: navImages.services,
    imageAlt: "Modern architecture at dusk",
    description: "Distribution, protection, and premium delivery for your music.",
    submenu: [
      { title: "Music Distribution", href: "/services/music-distribution" },
      { title: "Analytics & Worldwide Payouts", href: "/services/analytics-worldwide-payouts" },
      { title: "YouTube Content ID, OAC & CMS", href: "/services/youtube-content-id-oac-cms" },
      { title: "Copyright Protection", href: "/services/copyright-protection" },
      { title: "Dolby Atmos & VEVO Distribution", href: "/services/dolby-atmos-vevo-distribution" }
    ]
  },
  {
    id: "solutions",
    title: "Solutions",
    href: "/solutions",
    image: navImages.solutions,
    imageAlt: "Creative team collaborating",
    description: "Programs built for artists, labels, and partners.",
    submenu: [
      { title: "For Distribution Partners", href: "/solutions/for-distribution-partners" },
      { title: "For Labels", href: "/solutions/for-labels" },
      { title: "For Artists", href: "/solutions/for-artists" }
    ]
  },
  {
    id: "publishing",
    title: "Publishing",
    href: "/publishing",
    image: navImages.publishing,
    imageAlt: "Studio mixing desk",
    description: "Administration and sync opportunities for your catalog.",
    submenu: [
      { title: "Publishing Administration", href: "/publishing/administration" },
      { title: "Sync for Artists", href: "/publishing/sync-for-artists" },
      { title: "Sync for Supervisors", href: "/publishing/sync-for-supervisors" }
    ]
  },
  {
    id: "growth",
    title: "Growth",
    href: "/growth",
    image: navImages.growth,
    imageAlt: "Marketing analytics workspace",
    description: "Marketing, promotion, and funding to grow your reach.",
    submenu: [
      { title: "Marketing Tools", href: "/growth/marketing-tools" },
      { title: "Artist Funding", href: "/growth/artist-funding" },
      { title: "Music Marketing", href: "/growth/music-marketing" }
    ]
  },
  // {
  //   id: "foundation",
  //   title: "Foundation",
  //   href: "/foundation",
  //   image:
  //     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
  //   imageAlt: "Security and technology abstract",
  //   description: "Initiatives that protect creators and support the ecosystem.",
  //   submenu: [{ title: "Autodhun Anti-Piracy", href: "/foundation/autodhun-anti-piracy" }]
  // },
  {
    id: "autodhun-red",
    title: "Autodhun Red",
    href: "/autodhun-red",
    image: navImages.autodhunRed,
    imageAlt: "Bold red abstract gradient",
    description: "The Autodhun Red experience."
  },
  {
    id: "get-in-touch",
    title: "Get in Touch",
    href: "/get-in-touch",
    image: navImages.getInTouch,
    imageAlt: "Contact and communication",
    description: "Reach our team for partnerships and support."
  }
];
