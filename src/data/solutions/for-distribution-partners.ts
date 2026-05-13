export type ForDistributionPartnersBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type ForDistributionPartnersHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ForDistributionPartnersVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type ForDistributionPartnersBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: ForDistributionPartnersBenefit[];
};

export const forDistributionPartnersContent = {
  meta: {
    title: "For Distribution Partners",
    description:
      "Empower your distribution ecosystem with intelligent tools and scalable solutions for labels, catalogs, global reach, automation, and centralized rights and revenue."
  },
  hero: {
    kicker: "FOR DISTRIBUTION PARTNERS",
    titleLine1: "Elevate Your Music",
    titleLine2: "Operations",
    subtitle:
      "Empower your distribution ecosystem with intelligent tools and scalable solutions built to handle everything from emerging labels to global catalogs.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/For Distribution .png` */
    imageSrc: "/For%20Distribution%20.png",
    imageAlt:
      "Distribution hub graphic: central music mark with streaming platform nodes and global reach, on black."
  },
  benefits: {
    sectionTitleLine1: "Scale Smarter.",
    sectionTitleLine2: "Distribute Globally.",
    items: [
      {
        id: "scalable-infrastructure",
        title: "Scalable Distribution Infrastructure",
        description:
          "Manage and distribute music efficiently from a single label to thousands of artists and catalogs.",
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt: "Music distribution hub with platforms on orbital paths."
      },
      {
        id: "global-reach",
        title: "Global Platform Reach",
        description:
          "Deliver music worldwide across leading streaming platforms and digital stores seamlessly.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Analytics and worldwide reach illustration."
      },
      {
        id: "automated-workflows",
        title: "Automated Workflow Management",
        description:
          "Simplify releases, metadata handling, reporting, and royalty operations with smart automation.",
        imageSrc: "/Marketing%20Tools.png",
        imageAlt: "Marketing and workflow tools illustration."
      },
      {
        id: "rights-revenue",
        title: "Integrated Rights & Revenue Management",
        description:
          "Control content ownership, royalty splits, payouts, and monetization from one centralized platform.",
        imageSrc: "/Publishing%20%20Administration.png",
        imageAlt: "Publishing and rights administration illustration."
      }
    ] satisfies ForDistributionPartnersBenefit[]
  }
} as const;
