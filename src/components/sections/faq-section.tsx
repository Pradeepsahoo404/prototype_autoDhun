"use client";

import { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const defaultItems: FaqItem[] = [
  {
    id: "music-distribution",
    question: "What does music distribution do for independent artists?",
    answer:
      "Music distribution helps get your songs onto platforms like Spotify, Apple Music, and more, so people everywhere can listen. It's important because it boosts your audience, grows your fanbase, and helps you earn money from your music."
  },
  {
    id: "autodhun-distribution",
    question: "How does Autodhun Digital distribution work?",
    answer:
      "You upload your release once, we prepare and deliver it to major streaming platforms, and you track performance and earnings through your dashboard."
  },
  {
    id: "grow-music",
    question: "How can Autodhun Digital help grow my music?",
    answer:
      "We support releases with the right platform coverage, metadata, and optional marketing tools so your music can reach more listeners consistently."
  },
  {
    id: "get-started",
    question: "How do I get started?",
    answer:
      "Create an account, add your artist profile, upload your track(s), and choose a release date—your distribution can be live within days."
  },
  {
    id: "audience-better",
    question: "Want to understand your audience better?",
    answer:
      "Use audience analytics to see where your listeners are, which tracks perform best, and what to improve for your next release."
  },
  {
    id: "global",
    question: "Can I distribute globally?",
    answer:
      "Yes. We distribute to major platforms worldwide so fans across regions can find and stream your music."
  },
  {
    id: "music-videos",
    question: "Can Autodhun Digital distribute my music videos?",
    answer:
      "We can help you prepare video assets and deliver them to supported video platforms depending on your release plan."
  },
  {
    id: "sync",
    question: "What is sync licensing and how does Autodhun Digital help?",
    answer:
      "Sync licensing places your music in films, ads, and content. We help with rights readiness and matching opportunities when available."
  },
  {
    id: "one-link",
    question: "One link, all your music?",
    answer:
      "Create a smart link that collects your music in one place so fans can choose their favorite platform instantly."
  }
];

export function FaqSection({ items = defaultItems }: { items?: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="faq-shell" aria-label="Frequently asked questions">
      <div className="faq-container">
        <div className="faq-grid">
          <div className="faq-left">
            <p className="faq-kicker">FAQS</p>
            <h2 className="faq-title">
              YOUR MUSIC QUESTIONS ,
              <br />
              ANSWERED
            </h2>
            <p className="faq-subtitle">Unlock Everything About Autodhun Digital</p>
          </div>

          <div className="faq-spacer" aria-hidden="true" />

          <div className="faq-right">
            <div className="faq-accordion" aria-label="FAQ accordion">
              {items.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <div
                    className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                    key={item.id}
                  >
                    <button
                      className="faq-button"
                      type="button"
                      aria-expanded={isOpen}
                      suppressHydrationWarning
                      onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                    >
                      <span className="faq-button-text">{item.question}</span>
                      <span className="faq-button-icon" aria-hidden="true">
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>
                    <div
                      aria-hidden={!isOpen}
                      className={`faq-panel-wrap ${isOpen ? "is-open" : ""}`}
                    >
                      <div className="faq-panel">{item.answer}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

