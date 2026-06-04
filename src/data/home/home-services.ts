import { homeImages } from "@/lib/site-images";

export const homeServicesFallback = [
  {
    id: "music-distribution",
    title: "Music Distribution",
    description:
      "Deliver your releases to major streaming platforms with clean metadata, scheduling, and the operational support labels need to ship on time.",
    imageSrc: homeImages.musicDistribution,
    imageAlt: "Music Distribution"
  },
  {
    id: "analytics-payouts",
    title: "Analytics & Worldwide Payouts",
    description:
      "Track your music's performance with daily and monthly reports, detailed revenue insights, trends, and easy-to-understand analytics charts.",
    imageSrc: homeImages.analytics,
    imageAlt: "Analytics"
  },
  {
    id: "youtube-content-id",
    title: "YouTube Content ID & CMS",
    description:
      "Claim and manage sound recordings on YouTube with the right channel and rights setup so your catalog can earn where videos use your music.",
    imageSrc: homeImages.youtube,
    imageAlt: "YouTube Content ID"
  },
  {
    id: "copyright-protection",
    title: "Copyright Protection",
    description:
      "Reduce unauthorized use with workflows aligned to your releases—so your team can respond quickly while distribution stays organized.",
    imageSrc: homeImages.copyright,
    imageAlt: "Copyright Protection"
  },
  {
    id: "dolby-atmos-vevo",
    title: "Dolby Atmos & VEVO",
    description:
      "Bring immersive mixes and official videos to supported platforms with delivery paths that match how premium catalogs are expected to look and sound.",
    imageSrc: homeImages.dolby,
    imageAlt: "Dolby Atmos"
  }
] as const;
