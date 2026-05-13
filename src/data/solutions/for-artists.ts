export type ForArtistsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type ForArtistsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ForArtistsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type ForArtistsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: ForArtistsBenefit[];
};

export const forArtistsContent = {
  meta: {
    title: "For Artists",
    description:
      "Simplify operations and scale artist growth with catalogs, royalties, rights, worldwide distribution, analytics, and transparent payouts in one platform."
  },
  hero: {
    kicker: "FOR ARTISTS",
    titleLine1: "Everything Your Artists Need.",
    titleLine2: "One Unified Platform.",
    subtitle:
      "Simplify operations and scale artist growth with complete control over music catalogs, royalties, rights, and worldwide distribution.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/for_artice.png` */
    imageSrc: "/ForArtice.png",
    imageAlt:
      "Publishing administration for artists: registration, rights, royalties, and reporting around a creator at a desk."
  },
  benefits: {
    sectionTitleLine1: "Release. Own.",
    sectionTitleLine2: "Grow Everywhere.",
    items: [
      {
        id: "worldwide-distribution",
        title: "Worldwide Music Distribution",
        description:
          "Release your music globally across all major streaming platforms with ease.",
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt: "Music distribution hub with streaming platforms."
      },
      {
        id: "ownership",
        title: "Keep 100% Ownership",
        description:
          "Maintain full rights and creative control over your music and content.",
        imageSrc: "/Copyright%20Protection%20%20.png",
        imageAlt: "Copyright and rights protection illustration."
      },
      {
        id: "analytics",
        title: "Real-Time Analytics",
        description:
          "Track streams, audience insights, revenue growth, and performance in one place.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Analytics and performance insights illustration."
      },
      {
        id: "payouts",
        title: "Fast & Transparent Payouts",
        description:
          "Receive secure worldwide payouts with clear royalty reporting and tracking.",
        imageSrc: "/Artist%20Funding%20%20.png",
        imageAlt: "Artist funding and payout illustration."
      }
    ] satisfies ForArtistsBenefit[]
  }
} as const;
