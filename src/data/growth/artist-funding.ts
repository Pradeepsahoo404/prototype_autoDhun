import { benefitImage, siteImage } from "@/lib/site-images";

const SECTION = "Growth/Artist Funding";

export type GrowthArtistFundingBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type GrowthArtistFundingHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type GrowthArtistFundingVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type GrowthArtistFundingBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: GrowthArtistFundingBenefit[];
};

export const growthArtistFundingContent = {
  meta: {
    title: "Artist Funding",
    description:
      "Autodhun Select: exclusive artist development and label services — strategic funding, marketing, industry expertise, and growth resources while you keep ownership and creative freedom."
  },
  hero: {
    kicker: "ARTIST FUNDING",
    titleLine1: "Empowering Independent Artists",
    titleLine2: "to Grow Globally",
    subtitle:
      "Autodhun Select is an exclusive artist development and label services program built to support independent talent. Through strategic funding, marketing support, industry expertise, and growth-focused resources, artists can scale their careers independently while retaining full ownership and creative freedom.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/Artist Funding  .png` */
    imageSrc: siteImage(SECTION, "Artist Funding banner.png"),
    imageAlt:
      "Artist funding infographic: financial support, grants, collaborations, crowdfunding, and community around a creator at work."
  },
  benefits: {
    sectionTitleLine1: "Fund The Work.",
    sectionTitleLine2: "Own The Outcome.",
    items: [
      {
        id: "financial-support",
        title: "Financial Support for Music Projects",
        description:
          "Access funding for recording, production, music videos, promotions, and live performances.",
        imageSrc: benefitImage(SECTION, "Financial Support for Music Projects"),
        imageAlt: "Marketing and business partnership illustration."
      },
      {
        id: "career-growth",
        title: "Accelerated Career Growth",
        description:
          "Scale your music career faster with resources designed to support long-term artist development.",
        imageSrc: benefitImage(SECTION, "Accelerated Career Growth"),
        imageAlt: "Career growth and future illustration."
      },
      {
        id: "marketing-promotion",
        title: "Marketing & Promotion Assistance",
        description:
          "Boost visibility with funded marketing campaigns, playlist promotion, and digital advertising support.",
        imageSrc: benefitImage(SECTION, "Marketing & Promotion Assistance"),
        imageAlt: "Music marketing illustration."
      },
      {
        id: "creative-freedom",
        title: "Independent Creative Freedom",
        description:
          "Receive financial backing while maintaining full ownership and creative control over your music.",
        imageSrc: benefitImage(SECTION, "Independent Creative Freedom"),
        imageAlt: "Rights and creative control illustration."
      }
    ] satisfies GrowthArtistFundingBenefit[]
  }
} as const;
