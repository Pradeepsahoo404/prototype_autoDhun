export type DolbyAtmosVevoDistributionBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type DolbyAtmosVevoDistributionHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type DolbyAtmosVevoDistributionVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type DolbyAtmosVevoDistributionBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: DolbyAtmosVevoDistributionBenefit[];
};

export const dolbyAtmosVevoDistributionContent = {
  meta: {
    title: "Dolby Atmos & VEVO Distribution",
    description:
      "Release music in Dolby Atmos with technically optimized delivery and global distribution — including professional VEVO video presence."
  },
  hero: {
    kicker: "DOLBY ATMOS · VEVO",
    titleLine1: "Dolby Atmos Distribution.",
    titleLine2: "Powerful Sound with Professional Delivery.",
    subtitle:
      "Release music in Dolby Atmos format with confidence through technically optimized and globally supported distribution services.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/Dolby Atmos & VEVO Distribution .png` */
    imageSrc: "/Dolby%20Atmos%20%26%20VEVO%20Distribution%20.png",
    imageAlt: "Dolby Atmos promotional artwork with profile and logo on black."
  },
  benefits: {
    sectionTitleLine1: "Immersive Audio.",
    sectionTitleLine2: "Premium Video Reach.",
    items: [
      {
        id: "immersive-audio",
        title: "Immersive Audio Experience",
        description:
          "Deliver studio-quality Dolby Atmos sound with enhanced depth, clarity, and spatial audio.",
        imageSrc: "/Dolby%20Atmos%20%26%20VEVO%20Distribution%20.png",
        imageAlt: "Dolby Atmos and spatial audio branding."
      },
      {
        id: "vevo-distribution",
        title: "Professional VEVO Video Distribution",
        description:
          "Showcase your music videos on premium VEVO channels for stronger brand visibility.",
        imageSrc: "/Music%20Marketing%20.png",
        imageAlt: "Music marketing and video presence illustration."
      },
      {
        id: "global-reach",
        title: "Global Platform Reach",
        description:
          "Distribute high-quality audio and video content across leading streaming and entertainment platforms worldwide.",
        imageSrc: "/For%20Distribution%20.png",
        imageAlt: "Distribution illustration."
      },
      {
        id: "artist-branding",
        title: "Enhanced Artist Branding",
        description:
          "Build a premium artist identity with cinematic sound experiences and professional video presence.",
        imageSrc: "/For%20Artist%20%20.png",
        imageAlt: "For artists illustration."
      }
    ] satisfies DolbyAtmosVevoDistributionBenefit[]
  }
} as const;
