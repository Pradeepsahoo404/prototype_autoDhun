export const siteConfig = {
  name: "autoDhun",
  description: "A production-ready foundation for the autoDhun platform.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Workflow", href: "#workflow" },
    { label: "Contact", href: "#contact" }
  ]
};
