export type AnalyticsWorldwidePayoutsBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type AnalyticsWorldwidePayoutsHeroContent = {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type AnalyticsWorldwidePayoutsVisualContent = {
  imageSrc: string;
  imageAlt: string;
};

export type AnalyticsWorldwidePayoutsBenefitsContent = {
  sectionTitleLine1: string;
  sectionTitleLine2: string;
  items: AnalyticsWorldwidePayoutsBenefit[];
};

export const analyticsWorldwidePayoutsContent = {
  meta: {
    title: "Analytics & Worldwide Payouts",
    description:
      "Turn complex data into clear insights. Track performance, understand revenue, and distribute payouts worldwide with transparency."
  },
  hero: {
    kicker: "ANALYTICS & PAYOUTS",
    titleLine1: "Analyze Your Data",
    titleLine2: "with Precision",
    subtitle:
      "Turn complex data into clear insights. Monitor streaming trends, audience engagement, revenue performance, and campaign impact to make smarter business decisions.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
    imageAlt: "Hand holding cash representing analytics and worldwide payouts."
  },
  benefits: {
    sectionTitleLine1: "Powerful Analytics.",
    sectionTitleLine2: "Reliable Payouts.",
    items: [
      {
        id: "real-time-insights",
        title: "Real-Time Performance Insights",
        description:
          "Track streams, revenue, audience growth, and catalog performance with advanced analytics.",
        imageSrc: "/Marketing%20Tools.png",
        imageAlt: "Marketing tools illustration used as an analytics visual."
      },
      {
        id: "global-payments",
        title: "Global Payment Distribution",
        description:
          "Send secure and reliable payouts to artists and rights holders worldwide.",
        imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
        imageAlt: "Cash illustration representing worldwide payouts."
      },
      {
        id: "transparent-reporting",
        title: "Transparent Revenue Reporting",
        description:
          "Access detailed financial reports and earnings breakdowns with complete clarity.",
        imageSrc: "/Purpose.png",
        imageAlt: "Purpose illustration used as a reporting visual."
      },
      {
        id: "data-driven-growth",
        title: "Data-Driven Growth Decisions",
        description:
          "Identify trends, opportunities, and market performance to grow strategically.",
        imageSrc: "/Future.png",
        imageAlt: "Future illustration used as a growth visual."
      },
      // {
      //   id: "multi-currency",
      //   title: "Multi-Currency Payment Support",
      //   description:
      //     "Simplify international royalty payouts with seamless cross-border transactions.",
      //   imageSrc: "/For%20Labels.png",
      //   imageAlt: "For labels illustration used as a multi-currency payouts visual."
      // }
    ] satisfies AnalyticsWorldwidePayoutsBenefit[]
  }
} as const;

