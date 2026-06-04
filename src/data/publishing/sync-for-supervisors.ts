import { benefitImage, siteImage } from "@/lib/site-images";

const SECTION = "Publishing/Sync for Supervisors";

export type PublishingSyncForSupervisorsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type PublishingSyncForSupervisorsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type PublishingSyncForSupervisorsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type PublishingSyncForSupervisorsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: PublishingSyncForSupervisorsBenefit[];
};

export const publishingSyncForSupervisorsContent = {
  meta: {
    title: "Sync for Supervisors",
    description:
      "Discover standout independent music for film, TV, ads, and games. Autodhun Sync connects supervisors and creators with licensing, global partners, new revenue, and high-profile placements."
  },
  hero: {
    kicker: "SYNC FOR SUPERVISORS",
    titleLine1: "Transform Stories",
    titleLine2: "Through Music",
    subtitle:
      "Autodhun Sync helps creators discover standout independent music while opening new sync opportunities for artists across entertainment and media.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    imageSrc: siteImage(SECTION, "Sync for Supervisors banner.png"),
    imageAlt:
      "Sync for supervisors infographic: music licensing for film, TV, ads, and games with discovery, clearance, and workflow callouts."
  },
  benefits: {
    sectionTitleLine1: "License With Confidence.",
    sectionTitleLine2: "Place With Impact.",
    items: [
      {
        id: "premium-sync",
        title: "Premium Sync Opportunities",
        description:
          "Get your music placed in films, TV shows, commercials, games, OTT platforms, and digital campaigns.",
        imageSrc: benefitImage(SECTION, "Premium Sync Opportunities"),
        imageAlt: "Sync and visual media opportunities illustration."
      },
      {
        id: "creative-network",
        title: "Global Creative Network",
        description:
          "Connect with filmmakers, brands, agencies, production houses, and content creators worldwide.",
        imageSrc: benefitImage(SECTION, "Global Creative Network"),
        imageAlt: "Creative partnership and purpose illustration."
      },
      {
        id: "revenue",
        title: "New Revenue Streams",
        description:
          "Generate additional income through sync licensing deals, royalties, and media placements.",
        imageSrc: benefitImage(SECTION, "New Revenue Streams"),
        imageAlt: "Revenue and payouts illustration."
      },
      {
        id: "exposure",
        title: "Increased Artist Exposure",
        description:
          "Reach new audiences and boost your visibility through high-profile content integrations.",
        imageSrc: benefitImage(SECTION, "Increased Artist Exposure"),
        imageAlt: "Marketing and visibility illustration."
      }
    ] satisfies PublishingSyncForSupervisorsBenefit[]
  }
} as const;
