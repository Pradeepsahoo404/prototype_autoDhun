"use client";

import { useRouter } from "next/navigation";
import { use } from "react";

import { ComplianceModal } from "@/components/compliance/compliance-modal";

type Props = { params: Promise<{ slug: string }> };

/** Direct /compliance/:slug links open the same modal, then return home on close. */
export default function ComplianceDocumentPage({ params }: Props) {
  const { slug } = use(params);
  const router = useRouter();

  return <ComplianceModal slug={slug} onClose={() => router.push("/")} />;
}
