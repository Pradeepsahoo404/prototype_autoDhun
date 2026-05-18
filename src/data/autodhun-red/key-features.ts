export type AutodhunRedKeyFeature = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const autodhunRedKeyFeaturesContent = {
  sectionTitleLine1: "Key Features of",
  sectionTitleLine2: "Autodhun Red",
  items: [
    {
      id: "artist-support",
      title: "Professional Artist Support System",
      description:
        "Autodhun Red provides dedicated professional support to help Artists, Labels, and Producers manage their music journey smoothly. From release guidance to technical assistance, our expert team ensures every creator receives reliable support at every stage of growth.",
      imageSrc: "/Artist%20Funding%20%20.png",
      imageAlt: "Professional artist support for Autodhun Red members."
    },
    {
      id: "secure-management",
      title: "Secure & Transparent Music Management",
      description:
        "We believe trust is the foundation of every successful partnership. Autodhun Red offers a secure and transparent system for managing music releases, royalties, copyrights, and earnings — giving creators complete confidence and control over their content.",
      imageSrc: "/Copyright%20Protection%20%20.png",
      imageAlt: "Secure and transparent music rights management."
    },
    {
      id: "fast-release",
      title: "Fast Release Delivery on Streaming Platforms",
      description:
        "Speed matters in the modern music industry. With Autodhun Red, your music is delivered quickly and efficiently to leading streaming platforms worldwide, helping artists release tracks on time and reach audiences without delay.",
      imageSrc: "/Music%20Distribution%20.png",
      imageAlt: "Fast music distribution to streaming platforms worldwide."
    },
    {
      id: "promotional-branding",
      title: "Promotional & Branding Support",
      description:
        "Beyond distribution, Autodhun Red helps creators build a strong identity in the music industry. Our promotional and branding support is designed to increase visibility, strengthen artist presence, and help talent connect with a larger global audience.",
      imageSrc: "/Music%20Marketing%20.png",
      imageAlt: "Promotional and branding support for independent creators."
    }
  ] satisfies AutodhunRedKeyFeature[]
} as const;
