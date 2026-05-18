import type { Metadata } from "next";

import { AutodhunRedHero } from "@/components/autodhun-red/autodhun-red-hero";
import { AutodhunRedFaq } from "@/components/autodhun-red/autodhun-red-faq";
import { AutodhunRedKeyFeatures } from "@/components/autodhun-red/autodhun-red-key-features";
import { AutodhunRedStageSplit } from "@/components/autodhun-red/autodhun-red-stage-split";

export const metadata: Metadata = {
  title: "Autodhun Red",
  description:
    "Where independent talent becomes a global brand. Professional music distribution, trusted support, and global growth for independent creators.",
  openGraph: {
    description:
      "Autodhun Red is built for independent creators who want professional-level music distribution, trusted support, fast releases, and global growth opportunities."
  }
};

export default function AutodhunRedPage() {
  return (
    <div className="autodhun-red-page bg-black">
      <AutodhunRedHero />
      <AutodhunRedStageSplit />
      <AutodhunRedKeyFeatures />
      <AutodhunRedFaq />
    </div>
  );
}
