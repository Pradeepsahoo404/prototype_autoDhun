import Link from "next/link";

import { FooterComplianceColumn } from "./footer-compliance";
import { FooterContactDetails, FooterTopbarLogo } from "./footer-site-details";
import { FooterNewsletter } from "./footer-newsletter";

type FooterColumnLink = { label: string; href: string };

const ecosystemLinks: FooterColumnLink[] = [
  { label: "Distribution", href: "/services/music-distribution" },
  { label: "Publishing", href: "/publishing/administration" },
  { label: "Marketing", href: "/growth/marketing-tools" }
];

const organizationLinks: FooterColumnLink[] = [
  { label: "Our Story", href: "/about/our-story" },
  { label: "Get in Touch", href: "/get-in-touch" }
];

const dashboardLinks: FooterColumnLink[] = [
  { label: "Get Started", href: "/get-started" },
  { label: "Sign In", href: "/sign-in" }
];

const regions = [
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "Latin America",
  "North America"
];

function FooterColumn({ title, links }: { title: string; links: FooterColumnLink[] }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <ul className="footer-list">
        {links.map((link) => (
          <li key={link.label}>
            <Link className="footer-link" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-container">
        <FooterNewsletter />
        <div className="footer-topbar">
          <FooterTopbarLogo />

          <div className="footer-socials" aria-label="Social media">
            <a
              aria-label="Facebook"
              className="footer-social-link"
              href="https://www.facebook.com/Autodhun/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="fa-brands fa-facebook-f" />
            </a>
            <a
              aria-label="Instagram"
              className="footer-social-link"
              href="https://www.instagram.com/autodhun?igsh=MjE1bWJ3YTZ3YTl6&utm_source=qr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="fa-brands fa-instagram" />
            </a>
            <a
              aria-label="LinkedIn"
              className="footer-social-link"
              href="https://www.linkedin.com/company/autodhun/?viewAsMember=true"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i aria-hidden="true" className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="footer-main">
          <FooterContactDetails />

          <div className="footer-columns">
            <FooterColumn links={ecosystemLinks} title="ECOSYSTEM" />
            <FooterColumn links={organizationLinks} title="ORGANIZATION" />
            <FooterColumn links={dashboardLinks} title="DASHBOARD" />
            <FooterComplianceColumn />
          </div>
        </div>

        <div className="footer-presence">
          <h3 className="footer-presence-title">Global Presence</h3>
          <div className="footer-region-mask" aria-label="Global regions">
            <div className="footer-region-track">
              {[...regions, ...regions, ...regions].map((region, index) => (
                <span className="footer-region" key={`${region}-${index}`}>
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>
            <span className="footer-copy-symbol">&copy;</span> 2018 &mdash;2026 Autodhun
            India. All rights reserved. Crafted with excellence.
          </p>
          <p>Inspired in India. Built for the world.</p>
        </div>
      </div>
    </footer>
  );
}
