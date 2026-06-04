"use client";

import { MapPin } from "lucide-react";

import { useSiteDetails } from "@/hooks/use-site-details";
import { formatIndiaPhoneDisplay, formatIndiaPhoneTelHref } from "@/lib/format-phone";

export function GetInTouchReachUs() {
  const site = useSiteDetails();

  return (
    <div className="mt-10 border-t border-white/[0.06] pt-8 sm:mt-12 sm:pt-10 lg:mt-14 lg:border-t-0 lg:pt-0">
      <p className="m-0 text-[11px] font-semibold uppercase tracking-[2px] text-[#989898]">
        Reach us
      </p>
      <div className="mt-4 flex flex-col gap-1">
        <a
          className="footer-link !mb-2 inline-block w-fit !text-[14px]"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        <a
          className="footer-link !mb-0 inline-block w-fit !text-[14px]"
          href={formatIndiaPhoneTelHref(site.phone)}
        >
          {formatIndiaPhoneDisplay(site.phone)}
        </a>
      </div>

      <div className="contact-item mt-8 max-w-md sm:mt-9">
        <MapPin aria-hidden className="footer-contact-icon shrink-0" />
        <address className="m-0 min-w-0 not-italic text-[14px] font-normal leading-[1.45] text-white sm:text-[15px] sm:leading-[1.5]">
          <span className="block">{site.addressLine1}</span>
          <span className="block">{site.addressLine2}</span>
        </address>
      </div>
    </div>
  );
}
