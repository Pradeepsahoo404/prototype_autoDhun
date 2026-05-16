/** Copy for `/about/our-story` — two side-by-side blocks (text + image each). */

export type OurStorySplitBlock = {
  /** Lime kicker line (shown uppercase via `.faq-kicker`). */
  kicker: string;
  /** Large white headline — same classes as About Us hero (“Empowering the Future…”). */
  headline: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type OurStoryPageContent = {
  meta: {
    title: string;
    description: string;
  };
  ourStory: OurStorySplitBlock;
  whereWeWant: OurStorySplitBlock;
};

export const ourStoryContent: OurStoryPageContent = {
  meta: {
    title: "Our Story",
    description:
      "How AUTODHUN was built for India’s independent artists — and where we’re headed next."
  },
  ourStory: {
    kicker: "OUR STORY",
    headline: "Built for Independent Artists",
    paragraphs: [
      "India’s independent music movement is evolving rapidly, with talented artists shaping the future of music every day. Yet many creators still face challenges in reaching global audiences, growing sustainably, and unlocking fair monetization opportunities.",
      "AUTODHUN was founded to bridge that gap. With a strong understanding of India’s diverse music culture and a global vision for artist growth, we provide the technology, distribution, marketing, and support artists need to expand their reach beyond borders.",
      "Our mission is simple — empower independent talent with the right tools, opportunities, and industry support to grow, thrive, and build lasting impact worldwide."
    ],
    image: {
      src: "/OUR STORY.png",
      alt: "Autodhun — our story, independent artists and the music ecosystem"
    }
  },
  whereWeWant: {
    kicker: "WHERE DO WE WANT TO BE?",
    headline: "Our Aim",
    paragraphs: [
      "We want to connect creativity with success. Our platform helps artists not just make money but also build their brand and grow their audience. From sync opportunities and playlist placements to detailed analytics, we offer everything you need to stand out in a competitive world.",
      "We’re here to make a difference in the independent music industry. We ensure that every artist gets the support they need to take their music to new heights."
    ],
    image: {
      src: "/Our Aim.png",
      alt: "Our aim — connecting creativity with success for independent artists"
    }
  }
};
