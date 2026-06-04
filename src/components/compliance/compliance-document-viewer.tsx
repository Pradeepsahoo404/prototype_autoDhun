"use client";

import Link from "next/link";
import { Download } from "lucide-react";

import { CompliancePdfPreview } from "@/components/compliance/compliance-pdf-preview";
import { useGetComplianceDocumentQuery } from "@/store/api/autodhunApi";
import { cn } from "@/lib/utils";

const clash = "font-['Clash_Display','Satoshi',system-ui,sans-serif]";

export function ComplianceDocumentViewer({ slug }: { slug: string }) {
  const { data, isLoading, isError } = useGetComplianceDocumentQuery(slug);

  if (isLoading) {
    return (
      <div className="compliance-viewer-shell">
        <div className="faq-container">
          <p className="text-sm text-white/50">Loading document…</p>
        </div>
      </div>
    );
  }

  if (isError || !data?.document) {
    return (
      <div className="compliance-viewer-shell">
        <div className="faq-container">
          <p className={cn("compliance-viewer-title", clash)}>Document not available</p>
          <p className="mt-3 max-w-lg text-sm text-white/60">
            This policy has not been published yet. Please check back later or contact us.
          </p>
          <Link href="/" className="compliance-download-btn mt-8 inline-flex">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const { label, fileName, downloadUrl, pdfUrl } = data.document;
  const downloadHref = downloadUrl || pdfUrl;

  return (
    <div className="compliance-viewer-shell">
      <div className="faq-container">
        <p className="faq-kicker !mb-3">Compliance</p>
        <h1 className={cn("compliance-viewer-title", clash)}>{label}</h1>
        <p className="mt-3 text-sm text-white/55">
          Scroll to read the full document, or download a copy for your records.
        </p>

        <div className="compliance-viewer-actions">
          <a
            href={downloadHref}
            className="compliance-download-btn"
            download={fileName}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="size-4" aria-hidden />
            Download PDF
          </a>
        </div>

        <div className="compliance-pdf-frame-wrap">
          <CompliancePdfPreview slug={slug} />
        </div>
      </div>
    </div>
  );
}
