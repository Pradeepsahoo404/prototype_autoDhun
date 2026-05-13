export type YoutubeContentIdOacCmsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type YoutubeContentIdOacCmsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type YoutubeContentIdOacCmsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type YoutubeContentIdOacCmsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: YoutubeContentIdOacCmsBenefit[];
};

export const youtubeContentIdOacCmsContent = {
  meta: {
    title: "YouTube Content ID, OAC & CMS",
    description:
      "Grow your music on YouTube with Content ID protection, Official Artist Channel support, and smart monetization through Autodhun."
  },
  hero: {
    kicker: "YOUTUBE · CONTENT ID · OAC · CMS",
    titleLine1: "YouTube Asset Protection & OAC Solutions.",
    titleLine2: "Make YouTube Work for Your Music.",
    subtitle:
      "Grow your music career on YouTube with confidence. Autodhun provides Content ID protection, OAC support, and smart monetization solutions designed to increase visibility, safeguard your content, and drive consistent earnings.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/YouTube Content ID, OAC & CMS  .png` */
    imageSrc: "/YouTube%20Content%20ID%2C%20OAC%20%26%20CMS%20%20.png",
    imageAlt:
      "YouTube play button at the center connected to protection, analytics, global reach, and audience icons."
  },
  benefits: {
    sectionTitleLine1: "Protect Your Sound.",
    sectionTitleLine2: "Own Your Channel.",
    items: [
      {
        id: "automatic-monetization",
        title: "Automatic Content Monetization",
        description:
          "Earn revenue from eligible videos using your music through YouTube Content ID claims.",
        imageSrc: "/YouTube%20Content%20ID%2C%20OAC%20%26%20CMS%20%20.png",
        imageAlt: "YouTube Content ID and connected service icons."
      },
      {
        id: "oac-verification",
        title: "Official Artist Channel Verification",
        description:
          "Strengthen your artist identity with a verified Official Artist Channel (OAC).",
        imageSrc: "/For%20Artist%20%20.png",
        imageAlt: "For artists brand illustration."
      },
      {
        id: "rights-management",
        title: "Advanced Rights Management",
        description:
          "Manage assets, claims, copyrights, and monetization efficiently with CMS access.",
        imageSrc: "/Copyright%20Protection%20%20.png",
        imageAlt: "Copyright protection illustration."
      },
      {
        id: "visibility-brand",
        title: "Improved Visibility & Brand Presence",
        description:
          "Boost discoverability and create a professional YouTube presence for your audience.",
        imageSrc: "/Music%20Marketing%20.png",
        imageAlt: "Music marketing illustration."
      }
    ] satisfies YoutubeContentIdOacCmsBenefit[]
  }
} as const;
