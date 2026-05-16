import type { Metadata } from "next";

import { OurStorySplit } from "@/components/about/our-story-split";
import { AboutUsPageExperience } from "@/components/about/about-us-page-experience";
import { ourStoryContent } from "@/data/about/our-story";

export const metadata: Metadata = {
  title: ourStoryContent.meta.title,
  description: ourStoryContent.meta.description,
  openGraph: {
    description: ourStoryContent.meta.description
  }
};

export default function OurStoryPage() {
  return (
    <AboutUsPageExperience>
      <OurStorySplit content={ourStoryContent} />
    </AboutUsPageExperience>
  );
}
