/** Public folder: `public/Autodhun web img/` */
const ROOT = "Autodhun web img";

/** Build a public-folder path under the Autodhun web img asset root. */
export function siteImage(...segments: string[]): string {
  const parts = [ROOT];
  for (const segment of segments) {
    for (const piece of segment.split("/").filter(Boolean)) {
      parts.push(piece);
    }
  }
  // Keep spaces/`&` literal — encodeURIComponent breaks those paths. Only `%` must be
  // escaped (`%25`) or browsers treat it as URL encoding (e.g. "Keep 100% Ownership.png").
  return `/${parts.join("/")}`.replaceAll("%", "%25");
}

export const homeImages = {
  about: siteImage("Home page", "About us.png"),
  musicDistribution: siteImage("Home page", "Music Distribution 640x426.png"),
  analytics: siteImage("Home page", "Analytics & Worldwide Payouts.png"),
  youtube: siteImage("Home page", "YouTube Content ID & CMS.png"),
  copyright: siteImage("Home page", "Copyright Protection.png"),
  dolby: siteImage("Home page", "Dolby Atmos & VEVO.png"),
  testimonials: siteImage("Home page", "Testimonials 1024x1024.png")
} as const;

/** Local About-section intro (gitignored if >100MB — see `public/videos/`). */
export const LOCAL_INTRO_VIDEO_PATH = "/videos/autodhun_intro_video.mp4";

/**
 * About-section intro video.
 * - Dev: uses `public/videos/autodhun_intro_video.mp4` when env is unset.
 * - Production: set `NEXT_PUBLIC_INTRO_VIDEO_URL` (e.g. Cloudinary raw/video URL).
 */
export function getIntroVideoSrc(): string {
  const remote = process.env.NEXT_PUBLIC_INTRO_VIDEO_URL?.trim();
  return remote || LOCAL_INTRO_VIDEO_PATH;
}

export const navImages = {
  home: siteImage("Navigation menu", "Home nav 1600x1066.jpg"),
  about: siteImage("Navigation menu", "About us 1600x1066.jpg"),
  services: siteImage("Navigation menu", "Service nav 1600x1066.jpg"),
  solutions: siteImage("Navigation menu", "Solutions nav 1600x1066.jpg"),
  publishing: siteImage("Navigation menu", "publishing nav 1600x1066.jpg"),
  growth: siteImage("Navigation menu", "growth nav 1600x1066.jpg"),
  autodhunRed: siteImage("Navigation menu", "autodhun red nav 1600x1066.jpg"),
  getInTouch: siteImage("Navigation menu", "get in touch nav 1600x1066.jpg")
} as const;

export const autodhunRedImages = {
  banner: siteImage("Autodhun Red", "Autodhun red banner.png"),
  heroStage: siteImage("Autodhun Red", "Your Music. Your Identity. Your Global Stage.png")
} as const;

/** Benefit card image — file name matches the benefit title. */
export function benefitImage(sectionPath: string, title: string): string {
  return siteImage(sectionPath, `${title}.png`);
}
