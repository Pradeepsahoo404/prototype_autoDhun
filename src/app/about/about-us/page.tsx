import type { Metadata } from "next";

import { AboutUsLeadSplit } from "@/components/about/about-us-lead-split";
import { AboutUsPageExperience } from "@/components/about/about-us-page-experience";
import { AboutUsSections } from "@/components/about/about-us-sections";
import { aboutUsContent } from "@/data/about/about-us";

export const metadata: Metadata = {
  title: aboutUsContent.meta.title,
  description: aboutUsContent.meta.description,
  openGraph: {
    description: aboutUsContent.meta.description
  }
};

export default function AboutUsPage() {
  return (
    <AboutUsPageExperience>
      <AboutUsLeadSplit hero={aboutUsContent.hero} lead={aboutUsContent.leadSplit} />
      <AboutUsSections sections={aboutUsContent.sections} />
    </AboutUsPageExperience>
  );
}
