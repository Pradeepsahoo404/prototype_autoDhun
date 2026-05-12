import Image from "next/image";

import { Mail, MapPin, Phone } from "lucide-react";

const ecosystemLinks = [
  "Audience Intelligence",
  "Artist Ecosystem",
  "Label Infrastructure",
  "Rights & Publishing",
  "Auxy Studio",
  "Creative Sync",
  "Licensing Exchange",
  "Growth & Marketing",
  "Artist Capital"
];

const organizationLinks = ["Our Story", "Get in Touch"];

const dashboardLinks = ["Get Started", "Sign In"];

const complianceLinks = [
  "Corporate Policy",
  "Content Guidelines",
  "Privacy & Data",
  "Terms & Conditions",
  "Cookie Preferences",
  "Distribution Terms",
  "Sync Licensing Terms",
  "Fraud & Abuse Policy"
];

const regions = [
  "Europe",
  "Asia",
  "Middle East",
  "Africa",
  "Latin America",
  "North America"
];

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <ul className="footer-list">
        {links.map((link) => (
          <li key={link}>
            <a className="footer-link" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterNewsletter() {
  return (
    <section className="footer-newsletter" aria-label="Newsletter signup">
      <div className="footer-newsletter-inner">
        <div className="newsletter-text">
          <p className="footer-newsletter-title">Stay Tuned - Get Music Updates First</p>
        </div>
        <form className="footer-newsletter-form">
          <label className="sr-only" htmlFor="footer-email">
            Enter your email
          </label>
          <input
            suppressHydrationWarning
            className="footer-newsletter-input"
            id="footer-email"
            name="email"
            placeholder="Enter your email"
            type="email"
            autoComplete="email"
          />
          <button suppressHydrationWarning className="footer-newsletter-button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-container">
        <FooterNewsletter />
        <div className="footer-topbar">
          <div className="footer-brand" aria-label="Autodhun Digital">
            <div className="footer-logo-mark">
              <Image
                alt="Autodhun Digital"
                src="/autodhun-logo.png"
                width={134}
                height={46}
                priority
              />
            </div>
            {/* <span>Autodhun Digital</span> */}
          </div>

          <div className="footer-socials" aria-label="Social media">
            <a aria-label="Facebook" className="footer-social-link" href="#">
              <i aria-hidden="true" className="fa-brands fa-facebook-f" />
            </a>
            <a aria-label="Instagram" className="footer-social-link" href="#">
              <i aria-hidden="true" className="fa-brands fa-instagram" />
            </a>
            <a aria-label="LinkedIn" className="footer-social-link" href="#">
              <i aria-hidden="true" className="fa-brands fa-linkedin-in" />
            </a>
          </div>
        </div>

        <div className="footer-main">
          <address className="footer-contact">
            <div className="contact-item">
              <Mail aria-hidden="true" className="footer-contact-icon" />
              <span>admin@autodhundigital.in</span>
            </div>
            <div className="contact-item">
              <Phone aria-hidden="true" className="footer-contact-icon" />
              <span>9135555656</span>
            </div>
            <div className="contact-item">
              <MapPin aria-hidden="true" className="footer-contact-icon" />
              <span>
                New Sarpanch Colony
                <br />
                Jamalpur Ludhiana- 141010
              </span>
            </div>
          </address>

          <div className="footer-columns">
            <FooterColumn links={ecosystemLinks} title="ECOSYSTEM" />
            <FooterColumn links={organizationLinks} title="ORGANIZATION" />
            <FooterColumn links={dashboardLinks} title="DASHBOARD" />
            <FooterColumn links={complianceLinks} title="COMPLIANCE" />
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
            Digital India. All rights reserved. Crafted with excellence.
          </p>
          <p>Inspired in India. Built for the world.</p>
        </div>
      </div>
    </footer>
  );
}
