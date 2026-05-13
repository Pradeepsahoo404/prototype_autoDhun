export type CopyrightProtectionBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type CopyrightProtectionHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type CopyrightProtectionVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type CopyrightProtectionBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: CopyrightProtectionBenefit[];
};

export const copyrightProtectionContent = {
  meta: {
    title: "Copyright Protection",
    description:
      "Smart copyright management, transparent reporting, and reliable claim handling so you can protect your music and brand across platforms."
  },
  hero: {
    kicker: "COPYRIGHT PROTECTION",
    titleLine1: "Protect Your Music and Digital Content",
    titleLine2: "from Unauthorized Use.",
    subtitle:
      "With smart copyright management tools, transparent reporting, and reliable claim handling, you can focus on creating while we help secure your digital presence, protect your brand value, and maximize long-term revenue potential.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/Copyright Protection  .png` */
    imageSrc: "/Copyright%20Protection%20%20.png",
    imageAlt:
      "Infographic: intellectual property keys for trademark, copyright, and IP overview."
  },
  benefits: {
    sectionTitleLine1: "Secure Your Catalog.",
    sectionTitleLine2: "Protect Your Brand.",
    items: [
      {
        id: "advanced-protection",
        title: "Advanced Content Protection",
        description:
          "Detect and prevent unauthorized use of your music and digital assets across major platforms.",
        imageSrc: "/Copyright%20Protection%20%20.png",
        imageAlt: "Copyright and intellectual property protection illustration."
      },
      {
        id: "automated-rights",
        title: "Automated Rights Management",
        description:
          "Simplify copyright claims, monitoring, and enforcement with smart automated systems.",
        imageSrc: "/Publishing%20%20Administration.png",
        imageAlt: "Publishing and rights administration illustration."
      },
      {
        id: "transparent-reporting",
        title: "Transparent Reporting & Claim Tracking",
        description:
          "Gain complete visibility into content usage, claims, and earnings with accurate reporting tools.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Analytics and reporting illustration."
      },
      {
        id: "ownership-brand",
        title: "Full Ownership & Brand Control",
        description:
          "Maintain control over your intellectual property while strengthening your artist or label identity worldwide.",
        imageSrc: "/For%20Labels.png",
        imageAlt: "For labels brand illustration."
      }
    ] satisfies CopyrightProtectionBenefit[]
  }
} as const;
