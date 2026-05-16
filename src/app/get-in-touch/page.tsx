import type { Metadata } from "next";

import { GetInTouchSection } from "@/components/get-in-touch/get-in-touch-section";
import { getInTouchContent } from "@/data/get-in-touch";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: getInTouchContent.meta.title,
  description: getInTouchContent.meta.description,
  openGraph: {
    title: `${getInTouchContent.meta.title} | ${siteConfig.name}`,
    description: getInTouchContent.meta.description
  }
};

export default function GetInTouchPage() {
  return <GetInTouchSection />;
}
