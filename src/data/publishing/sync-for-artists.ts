export type PublishingSyncForArtistsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type PublishingSyncForArtistsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type PublishingSyncForArtistsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type PublishingSyncForArtistsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: PublishingSyncForArtistsBenefit[];
};

export const publishingSyncForArtistsContent = {
  meta: {
    title: "Sync for Artists",
    description:
      "Get your tracks into films, commercials, TV, games, and OTT — global exposure, new revenue from sync and royalties, stronger branding, and access to supervisors and industry partners."
  },
  hero: {
    kicker: "SYNC FOR ARTISTS",
    titleLine1: "Where Great Music Meets",
    titleLine2: "Big Opportunities",
    subtitle:
      "Get your tracks featured in visual media including films, commercials, shows, and games — helping your music connect with new audiences everywhere.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    imageSrc: "/syncArtict.png",
    imageAlt:
      "Artist in a home studio with guitar and production gear, surrounded by icons for film, ads, TV, games, and brand sync opportunities."
  },
  benefits: {
    sectionTitleLine1: "Hear Your Music.",
    sectionTitleLine2: "See It Everywhere.",
    items: [
      {
        id: "global-exposure",
        title: "Global Exposure Opportunities",
        description:
          "Get your music featured in films, TV shows, commercials, OTT platforms, and video games worldwide.",
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt: "Global reach and distribution illustration."
      },
      {
        id: "revenue-streams",
        title: "New Revenue Streams",
        description:
          "Earn additional income through sync licensing fees, royalties, and performance rights.",
        imageSrc: "/Artist%20Funding%20%20.png",
        imageAlt: "Revenue and funding illustration."
      },
      {
        id: "branding",
        title: "Stronger Artist Branding",
        description:
          "Build recognition and connect with larger audiences through high-visibility media placements.",
        imageSrc: "/Music%20Marketing%20.png",
        imageAlt: "Music marketing and branding illustration."
      },
      {
        id: "industry-networks",
        title: "Access to Industry Networks",
        description:
          "Connect with music supervisors, production houses, advertising agencies, and entertainment platforms.",
        imageSrc: "/Sync%20For%20Supervisors.png",
        imageAlt: "Sync supervisors and industry illustration."
      }
    ] satisfies PublishingSyncForArtistsBenefit[]
  }
} as const;
