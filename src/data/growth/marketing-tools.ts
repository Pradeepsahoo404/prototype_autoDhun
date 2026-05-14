export type GrowthMarketingToolsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type GrowthMarketingToolsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type GrowthMarketingToolsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type GrowthMarketingToolsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: GrowthMarketingToolsBenefit[];
};

export const growthMarketingToolsContent = {
  meta: {
    title: "Marketing Tools",
    description:
      "Build real fans with targeted audience growth, social promotion, playlist and campaign support, and real-time performance tracking across major platforms."
  },
  hero: {
    kicker: "MARKETING TOOLS",
    titleLine1: "Build Real Fans,",
    titleLine2: "Not Just Metrics",
    // Swap when you have final hero lead copy (brief had no paragraph).
    subtitle:
      "Turn streams into loyal listeners with data-driven campaigns, social promotion, playlist pitching, and analytics that show what actually moves the needle.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    imageSrc: "/Marketing%20Tools.png",
    imageAlt:
      "Marketing partnership illustration: handshake, puzzle pieces, calendar, revenue, growth chart, and target icons on a dark background."
  },
  benefits: {
    sectionTitleLine1: "Reach The Right Fans.",
    sectionTitleLine2: "Prove Every Win.",
    items: [
      {
        id: "audience-growth",
        title: "Targeted Audience Growth",
        description:
          "Reach the right listeners through data-driven marketing strategies and audience targeting.",
        imageSrc: "/Future.png",
        imageAlt: "Growth and future-forward marketing illustration."
      },
      {
        id: "social-promotion",
        title: "Social Media Promotion",
        description:
          "Boost visibility across Instagram, YouTube, TikTok, Facebook, and other major platforms.",
        imageSrc: "/Music%20Marketing%20.png",
        imageAlt: "Music marketing and social promotion illustration."
      },
      {
        id: "playlist-campaigns",
        title: "Playlist & Campaign Support",
        description:
          "Increase streams and engagement with curated playlist pitching and promotional campaigns.",
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt: "Distribution and playlist campaign illustration."
      },
      {
        id: "performance-tracking",
        title: "Real-Time Performance Tracking",
        description:
          "Monitor campaign results, audience behavior, and engagement analytics in one place.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Analytics and performance tracking illustration."
      }
    ] satisfies GrowthMarketingToolsBenefit[]
  }
} as const;
