export type PublishingAdministrationBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type PublishingAdministrationHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type PublishingAdministrationVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type PublishingAdministrationBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: PublishingAdministrationBenefit[];
};

export const publishingAdministrationContent = {
  meta: {
    title: "Publishing Administration",
    description:
      "Global royalty collection, copyright registration and protection, transparent reporting, and sync and licensing opportunities — we handle publishing complexity worldwide."
  },
  hero: {
    kicker: "PUBLISHING ADMINISTRATION",
    titleLine1: "Your Music. Your Rights.",
    titleLine2: "Your Royalties.",
    subtitle:
      "From streams to performances, ensure you receive every royalty your music generates while we manage the complexities of publishing worldwide.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    imageSrc: "/Picture1.png",
    imageAlt:
      "Publishing administration infographic: royalties, licenses, global collection, claims, and registration around central rights and earnings imagery."
  },
  benefits: {
    sectionTitleLine1: "Register. Collect.",
    sectionTitleLine2: "Grow Your Catalog.",
    items: [
      {
        id: "global-royalty",
        title: "Global Royalty Collection",
        description:
          "Collect publishing royalties from streaming platforms, radio, live performances, and more worldwide.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Global royalties and payouts illustration."
      },
      {
        id: "copyright-registration",
        title: "Copyright Registration & Protection",
        description:
          "Secure your compositions with proper copyright management and rights protection.",
        imageSrc: "/Copyright%20Protection%20%20.png",
        imageAlt: "Copyright and rights protection illustration."
      },
      {
        id: "transparent-reporting",
        title: "Transparent Royalty Reporting",
        description:
          "Access detailed royalty statements and earnings reports with complete transparency.",
        imageSrc: "/Marketing%20Tools.png",
        imageAlt: "Reporting and analytics illustration."
      },
      {
        id: "sync-licensing",
        title: "Sync & Licensing Opportunities",
        description:
          "Unlock opportunities for placements in films, TV shows, ads, games, and digital media.",
        imageSrc: "/Sync%20For%20Artists%20.png",
        imageAlt: "Sync and licensing for artists illustration."
      }
    ] satisfies PublishingAdministrationBenefit[]
  }
} as const;
