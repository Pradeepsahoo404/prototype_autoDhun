export type ForLabelsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type ForLabelsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ForLabelsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type ForLabelsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: ForLabelsBenefit[];
};

export const forLabelsContent = {
  meta: {
    title: "For Labels",
    description:
      "From distribution to royalties, manage every part of your independent label with catalog control, global reach, analytics, and automated payouts."
  },
  hero: {
    kicker: "FOR LABELS",
    titleLine1: "Elevate Your Independent",
    titleLine2: "Label",
    subtitle:
      "From distribution to royalties, manage every part of your label with tools built for modern music companies.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/For Labels.png` */
    imageSrc: "/For_Label.png",
    imageAlt:
      "Label hub graphic: central label node connected to Spotify, Apple Music, and Amazon Music on a dark grid."
  },
  benefits: {
    sectionTitleLine1: "Run Your Label.",
    sectionTitleLine2: "One Platform.",
    items: [
      {
        id: "catalog-control",
        title: "Complete Catalog Control",
        description:
          "Manage releases, metadata, artists, and music assets from one centralized platform.",
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt: "Music distribution and catalog hub illustration."
      },
      {
        id: "global-distribution",
        title: "Global Distribution Reach",
        description:
          "Deliver music worldwide across major streaming services and digital platforms seamlessly.",
        imageSrc: "/For%20Distribution%20.png",
        imageAlt: "Global distribution and platform reach illustration."
      },
      {
        id: "analytics-insights",
        title: "Advanced Analytics & Insights",
        description:
          "Track streams, audience growth, earnings, and performance with real-time reporting tools.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Analytics and performance reporting illustration."
      },
      {
        id: "royalties-payouts",
        title: "Automated Royalties & Payouts",
        description:
          "Simplify royalty management, revenue splits, and worldwide payouts with transparent automation.",
        imageSrc: "/Publishing%20%20Administration.png",
        imageAlt: "Rights, royalties, and administration illustration."
      }
    ] satisfies ForLabelsBenefit[]
  }
} as const;
