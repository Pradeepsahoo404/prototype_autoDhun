"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { SiteBrandLogo } from "@/components/layout/site-brand-logo";
import { useSiteDetails } from "@/hooks/use-site-details";
import { formatIndiaPhoneDisplay } from "@/lib/format-phone";

/** Top bar logo only — same markup as original static footer. */
export function FooterTopbarLogo() {
  return (
    <div className="footer-brand" aria-label="Autodhun">
      <div className="footer-logo-mark">
        <SiteBrandLogo width={134} height={46} />
      </div>
    </div>
  );
}

/** Left column contact block — same markup as original static footer. */
export function FooterContactDetails() {
  const site = useSiteDetails();

  return (
    <address className="footer-contact">
      <div className="contact-item">
        <Mail aria-hidden="true" className="footer-contact-icon" />
        <span>{site.email}</span>
      </div>
      <div className="contact-item">
        <Phone aria-hidden="true" className="footer-contact-icon" />
        <span>{formatIndiaPhoneDisplay(site.phone)}</span>
      </div>
      <div className="contact-item">
        <MapPin aria-hidden="true" className="footer-contact-icon" />
        <span>
          {site.addressLine1}
          <br />
          {site.addressLine2}
        </span>
      </div>
    </address>
  );
}
