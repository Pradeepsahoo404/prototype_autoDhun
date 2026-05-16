/**
 * Copy for `/about/about-us`. Update here to change content site-wide.
 */

export type AboutUsHeroContent = {
  kicker: string;
  headline: string;
};

/** Intro + mirrored “rights” row (images + copy) for `/about/about-us`. */
export type AboutUsLeadSplitContent = {
  mission: {
    paragraph: string;
    imageSrc: string;
    imageAlt: string;
  };
  rights: {
    headline: string;
    paragraphs: string[];
    imageSrc: string;
    imageAlt: string;
  };
};

/** Plain paragraphs, no pill. */
export type AboutUsSectionProse = {
  kind: "prose";
  id: string;
  paragraphs: string[];
};

/** Pill heading + paragraphs. */
export type AboutUsSectionPillProse = {
  kind: "pill-prose";
  id: string;
  pill: string;
  pillVariant: "band" | "inline";
  paragraphs: string[];
};

/** Pill + titled blocks (Purpose / Vision / Future). */
export type AboutUsSectionPillStack = {
  kind: "pill-stack";
  id: string;
  pill: string;
  pillVariant: "band" | "inline";
  stacks: { title: string; paragraphs: string[] }[];
};

/** Pill + titled bullet items (title + description). */
export type AboutUsSectionPillBullets = {
  kind: "pill-bullets";
  id: string;
  pill: string;
  pillVariant: "band" | "inline";
  bullets: { title: string; description: string }[];
};

/** Pill + optional subheading + paragraphs (OUR STORY). */
export type AboutUsSectionPillLeadProse = {
  kind: "pill-lead-prose";
  id: string;
  pill: string;
  pillVariant: "band" | "inline";
  subheading: string;
  paragraphs: string[];
};

export type AboutUsSection =
  | AboutUsSectionProse
  | AboutUsSectionPillProse
  | AboutUsSectionPillStack
  | AboutUsSectionPillBullets
  | AboutUsSectionPillLeadProse;

export const aboutUsContent = {
  meta: {
    title: "About Us",
    description:
      "AUTODHUN was created to transform the independent music ecosystem in India and beyond — transparent royalties, global reach, and tools built for artists, labels, and rights owners."
  },
  hero: {
    kicker: "ABOUT AUTODHUN",
    headline: "Empowering the Future of Independent Music"
  } satisfies AboutUsHeroContent,

  leadSplit: {
    mission: {
      paragraph:
        "AUTODHUN was created with a mission to transform the independent music ecosystem in India and beyond. We believe incredible talent exists everywhere — artists with passion, originality, and ambition who deserve access to the right opportunities, technology, and support systems. Our platform is built to empower creators with the tools, services, and global reach they need to grow independently and succeed on their own terms.",
      imageSrc: "/About.png",
      imageAlt: "Autodhun — mission and independent music ecosystem"
    },
    rights: {
      headline: "Empowering Rights Holders in the Digital Music Era",
      paragraphs: [
        "AUTODHUN is a global music rights and distribution platform dedicated to empowering labels, artists, and rights owners in the evolving digital music ecosystem.",
        "AUTODHUN strongly supports independent and regional music labels by providing transparent licensing solutions, accurate royalty management, and worldwide monetization opportunities. From streaming services and public performances to radio, social platforms, and emerging AI-driven technologies, AUTODHUN helps rights holders maximize the value and reach of their music catalog globally."
      ],
      imageSrc: "/Empowering Rights Holders in the Digital Music Era        .png",
      imageAlt:
        "Empowering rights holders in the digital music era — global platform for labels, artists, and rights owners."
    }
  } satisfies AboutUsLeadSplitContent,

  sections: [
    {
      kind: "pill-stack",
      id: "purpose-vision-future",
      pill: "Our Purpose, Vision & Future",
      pillVariant: "band",
      stacks: [
        {
          title: "Purpose",
          paragraphs: [
            "Our Purpose is to empower artists, labels, and rights owners with transparent royalty management, smart licensing solutions, and global monetization opportunities — helping creators grow, protect their rights, and maximize the value of their music."
          ]
        },
        {
          title: "Vision",
          paragraphs: [
            "Our vision is to create a transparent and future-ready music ecosystem where every song — from timeless catalogues to new releases — receives fair value and global recognition. We aim to empower artists, labels, and rights owners with innovative technology, trusted licensing solutions, and smarter monetization tools that maximize the full potential of their music worldwide."
          ]
        },
        {
          title: "Future",
          paragraphs: [
            "Our future is focused on building a fair, transparent, and technology-driven music ecosystem where every use of music is accurately tracked, protected, and monetized. We aim to eliminate unauthorized usage, empower creators with stronger rights protection, and ensure artists, labels, and rights owners receive the full value of their work across every platform and emerging digital landscape."
          ]
        }
      ]
    },
    {
      kind: "pill-prose",
      id: "regional-global",
      pill: "Regional Expertise. Global Impact.",
      pillVariant: "band",
      paragraphs: [
        "At AUTODHUN, we understand that music connects differently across every region, language, and culture. That’s why our multilingual marketing and content teams work closely across diverse parts of India, bringing deep local insights and authentic audience understanding.",
        "From regional folk and devotional music to independent and contemporary genres, we create tailored promotion strategies that align with regional preferences, language dynamics, and listening behavior — helping your music connect with the right audiences locally while expanding its reach globally."
      ]
    },
    {
      kind: "pill-prose",
      id: "protecting-music",
      pill: "Protecting Music. Maximizing Revenue.",
      pillVariant: "band",
      paragraphs: [
        "At AUTODHUN, we go beyond rights protection — we help transform every legitimate use of your music into measurable revenue opportunities. From streaming and downloads to sync licensing and digital usage, we ensure your catalog is properly licensed, tracked, and monetized across platforms worldwide."
      ]
    },
    {
      kind: "pill-bullets",
      id: "why-choose",
      pill: "Why Choose AUTODHUN?",
      pillVariant: "band",
      bullets: [
        {
          title: "Transparent Royalty Reporting & Analytics",
          description:
            "Access accurate reports, real-time insights, and complete earning visibility."
        },
        {
          title: "Dedicated Industry Support",
          description:
            "Work with experienced teams that provide personalized guidance and responsive support."
        },
        {
          title: "Strong Rights Protection & Enforcement",
          description:
            "Monitor unauthorized usage and safeguard your music against piracy and misuse."
        },
        {
          title: "Regional & Multilingual Marketing Support",
          description:
            "Promote your music effectively with localized marketing strategies across languages and regions."
        },
        {
          title: "Collective Industry & Policy Advocacy",
          description:
            "Benefit from stronger industry representation, licensing support, and evolving policy initiatives designed to protect creators and rights owners."
        }
      ]
    }
  ] satisfies AboutUsSection[]
};
