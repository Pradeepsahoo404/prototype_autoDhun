export type GrowthMusicMarketingBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type GrowthMusicMarketingHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type GrowthMusicMarketingVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type GrowthMusicMarketingBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: GrowthMusicMarketingBenefit[];
};

export const growthMusicMarketingContent = {
  meta: {
    title: "Music Marketing",
    description:
      "IMPACT by Autodhun: global music marketing for artists — audience growth, streaming visibility, social promotion, and playlist and media exposure across India and worldwide."
  },
  hero: {
    kicker: "MUSIC MARKETING",
    titleLine1: "Your Global",
    titleLine2: "Music Marketing Partner",
    subtitle:
      "IMPACT is AUTODHUN's dedicated music marketing division, created to empower artists in today's digital-first music industry. We connect international talent with audiences across India while helping Indian artists expand their reach worldwide. Through innovative marketing strategies, audience-focused campaigns, and data-driven promotion, we make sure your music not only gets discovered — but leaves a lasting impact.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** `public/Music Marketing .png` */
    imageSrc: "/Music%20Marketing%20.png",
    imageAlt:
      "Music marketing illustration: artist at work with social, playlists, influencers, press, and email campaign icons on a black background."
  },
  benefits: {
    sectionTitleLine1: "Reach Further.",
    sectionTitleLine2: "Land With Impact.",
    items: [
      {
        id: "audience-fan-engagement",
        title: "Audience Growth & Fan Engagement",
        description:
          "Build a loyal fanbase through targeted campaigns and meaningful audience connections.",
        imageSrc: "/Purpose.png",
        imageAlt: "Audience connection and purpose illustration."
      },
      {
        id: "streaming-visibility",
        title: "Increased Streaming & Visibility",
        description:
          "Boost streams, reach new listeners, and expand your presence across major platforms.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Streaming growth and analytics illustration."
      },
      {
        id: "social-promotion",
        title: "Strategic Social Media Promotion",
        description:
          "Strengthen your online presence with customized marketing across Instagram, TikTok, YouTube, and more.",
        imageSrc: "/Marketing%20Tools.png",
        imageAlt: "Marketing and social promotion illustration."
      },
      {
        id: "playlist-media",
        title: "Playlist & Media Exposure",
        description:
          "Gain opportunities for playlist placements, influencer collaborations, press coverage, and digital promotions.",
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt: "Distribution and playlist exposure illustration."
      }
    ] satisfies GrowthMusicMarketingBenefit[]
  }
} as const;
