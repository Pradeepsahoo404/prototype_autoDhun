"use client";

import { useEffect } from "react";
import { Download, X } from "lucide-react";

import { CompliancePdfPreview } from "@/components/compliance/compliance-pdf-preview";
import { useGetComplianceDocumentQuery } from "@/store/api/autodhunApi";
import { cn } from "@/lib/utils";

const clash = "font-['Clash_Display','Satoshi',system-ui,sans-serif]";

export function ComplianceModal({ slug, onClose }: { slug: string; onClose: () => void }) {
  const { data, isLoading, isError } = useGetComplianceDocumentQuery(slug);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const doc = data?.document;
  const downloadHref = doc?.downloadUrl || doc?.pdfUrl;

  return (
    <div
      className="compliance-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="compliance-modal-title"
    >
      <button
        type="button"
        className="compliance-modal-backdrop"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="compliance-modal-panel">
        <div className="compliance-modal-header">
          <div className="min-w-0 flex-1">
            <p className="compliance-modal-kicker">Compliance</p>
            <h2 id="compliance-modal-title" className={cn("compliance-modal-title", clash)}>
              {isLoading ? "Loading…" : doc?.label ?? "Document"}
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {downloadHref ? (
              <a
                href={downloadHref}
                className="compliance-download-btn compliance-download-btn--sm"
                download={doc?.fileName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="size-4" aria-hidden />
                Download PDF
              </a>
            ) : null}
            <button
              type="button"
              className="compliance-modal-close"
              aria-label="Close"
              onClick={onClose}
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        <div className="compliance-modal-body">
          {isLoading ? (
            <p className="compliance-pdf-preview-status">Loading document…</p>
          ) : isError || !doc ? (
            <p className="compliance-pdf-preview-status text-amber-400/90">
              This document is not available yet. Please try again later.
            </p>
          ) : (
            <CompliancePdfPreview slug={slug} className="compliance-pdf-preview--modal" />
          )}
        </div>
      </div>
    </div>
  );
}
