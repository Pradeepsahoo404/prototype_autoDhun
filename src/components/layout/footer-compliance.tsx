"use client";

import { useEffect, useState } from "react";

import { ComplianceModal } from "@/components/compliance/compliance-modal";
import { useGetComplianceDocumentsQuery } from "@/store/api/autodhunApi";

const FALLBACK_LINKS = [
  { slug: "corporate-policy", label: "Corporate Policy" },
  { slug: "content-guidelines", label: "Content Guidelines" },
  { slug: "privacy-data", label: "Privacy & Data" },
  { slug: "terms-conditions", label: "Terms & Conditions" },
  { slug: "cookie-preferences", label: "Cookie Preferences" },
  { slug: "distribution-terms", label: "Distribution Terms" },
  { slug: "sync-licensing-terms", label: "Sync Licensing Terms" },
  { slug: "fraud-abuse-policy", label: "Fraud & Abuse Policy" }
];

export function FooterComplianceColumn() {
  const { data } = useGetComplianceDocumentsQuery();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  /** Avoid hydration mismatch when form-filler extensions inject attrs on <button>. */
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setInteractive(true);
  }, []);

  const items =
    data?.documents && data.documents.length > 0
      ? data.documents.map((d) => ({
          slug: d.slug,
          label: d.label,
          hasPdf: d.hasPdf
        }))
      : FALLBACK_LINKS.map((d) => ({ ...d, hasPdf: true }));

  return (
    <>
      <div>
        <h3 className="footer-heading">COMPLIANCE</h3>
        <ul className="footer-list">
          {items.map((item) => (
            <li key={item.slug}>
              {interactive ? (
                <button
                  type="button"
                  className="footer-link"
                  disabled={!item.hasPdf}
                  onClick={() => item.hasPdf && setOpenSlug(item.slug)}
                >
                  {item.label}
                </button>
              ) : (
                <span className="footer-link">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {openSlug ? <ComplianceModal slug={openSlug} onClose={() => setOpenSlug(null)} /> : null}
    </>
  );
}
