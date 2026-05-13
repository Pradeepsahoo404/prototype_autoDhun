/**
 * Copy and URLs for the Music Distribution service page.
 * Update here to change marketing text site-wide.
 */

export type MusicDistributionBenefit = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const musicDistributionContent = {
  meta: {
    title: "Music Distribution",
    description:
      "Distribute your music worldwide with Autodhun — 150+ streaming platforms, fast releases, full rights control, catalog tools, and real-time analytics."
  },
  hero: {
    /** Lime eyebrow above the headline (`.faq-kicker` = primary green + tracking). */
    kicker: "RELEASE YOUR MUSIC",
    /** Two lines — `.faq-title` applies uppercase to match the home hero. */
    titleLine1: "Release Your Music.",
    titleLine2: "Own Your Future.",
    subtitle:
      "Distribute your music worldwide without giving up your rights or creative control. With Autodhun, your releases reach 150+ leading streaming platforms — including Spotify, Apple Music, YouTube Music, Amazon Music, TikTok, and more.",
    /** Same tagline strip as the home hero (`page.tsx`). */
    tagline: "Autodhun  — Building the future for independent labels and artists.",
    primaryCta: { label: "Get Started", href: "/get-started" },
    secondaryCta: { label: "View Pricing", href: "/services" }
  },
  visual: {
    /** Public asset — filename includes trailing space before `.png`. */
    imageSrc: "/Music%20Distribution%20.png",
    imageAlt:
      "Stylized music distribution hub: a note at the center with streaming and social platform icons on dotted orbits, on black."
  },
  benefits: {
    /** Two lines — same as hero: `.faq-title` + uppercase; store in title case in data. */
    sectionTitleLine1: "Why Choose Autodhun for Music.",
    sectionTitleLine2: "Distribution.",
    items: [
      {
        id: "worldwide-reach",
        title: "Worldwide Music Reach",
        description:
          "Distribute your music globally across leading streaming platforms and digital stores while keeping full control of your releases and metadata.",
        /** Same orbit / platform graphic as the hero visual — matches reference “Release your music” tile. */
        imageSrc: "/Music%20Distribution%20.png",
        imageAlt:
          "Streaming and social platform icons on orbital paths around a central music mark."
      },
      {
        id: "fast-releases",
        title: "Fast & Seamless Releases",
        description:
          "Launch tracks on your timeline with a smooth delivery pipeline—from upload to live on stores without unnecessary delays.",
        /** `public/For Distribution .png` */
        imageSrc: "/For%20Distribution%20.png",
        imageAlt: "Distribution workflow illustration from Autodhun brand assets."
      },
      {
        id: "revenue",
        title: "Maximized Revenue Opportunities",
        description:
          "Monetize your music across multiple platforms and audiences worldwide.",
        /** `public/Artist Funding  .png` */
        imageSrc: "/Artist%20Funding%20%20.png",
        imageAlt: "Artist funding and revenue illustration from Autodhun brand assets."
      },
      {
        id: "catalog",
        title: "Complete Catalog Management",
        description:
          "Manage releases, metadata, and music assets from one centralized platform.",
        /** `public/Publishing  Administration.png` */
        imageSrc: "/Publishing%20%20Administration.png",
        imageAlt: "Publishing and rights administration illustration from Autodhun brand assets."
      },
      // {
      //   id: "analytics",
      //   title: "Performance Tracking & Insights",
      //   description:
      //     "Analyze streaming numbers, revenue trends, listener demographics, and more to make informed decisions about your next release.",
      //   /** `public/Analytics & Worldwide Payouts .png` */
      //   imageSrc: "/Analytics%20%26%20Worldwide%20Payouts%20.png",
      //   imageAlt: "Analytics and worldwide payouts illustration from Autodhun brand assets."
      // }
    ] satisfies MusicDistributionBenefit[]
  }
} as const;

export type MusicDistributionHeroContent = (typeof musicDistributionContent)["hero"];
export type MusicDistributionVisualContent = (typeof musicDistributionContent)["visual"];
export type MusicDistributionBenefitsContent = (typeof musicDistributionContent)["benefits"];
