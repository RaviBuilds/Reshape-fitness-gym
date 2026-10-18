import type { SocialConfiguration } from "./types";

/**
 * Master social/Instagram data. Curated content only — no live authenticated
 * Instagram API dependency in Factory v1. An empty posts array is valid and
 * renders a "Follow us on Instagram" fallback CTA, never a broken widget.
 *
 * NOTE: `social` below is not currently imported by any component — the live
 * Instagram section (components/sections/Instagram.tsx) reads from
 * lib/instagram.ts. See docs/gym-customization-manifest.md §9.1
 * ("lib/social.ts is orphaned"). Left in sync with lib/instagram.ts for data
 * consistency in case a future section consumes this module; not a live
 * rendering path. `socialLinks` further down IS live (footer icons).
 *
 * RESHAPE FITNESS GYM — docs/gym-research.md INSTAGRAM.handle and
 * INSTAGRAM.profile_url are NOT_FOUND, so both fields are empty strings here
 * (the type requires strings). See lib/instagram.ts for the full note.
 */
export const social: SocialConfiguration = {
  instagramHandle: "",
  instagramUrl: "",
  posts: [],
};

/**
 * Footer social icons (Facebook, Justdial, X) shown next to Instagram.
 *
 * SOURCE-FIRST: no handle or username is invented.
 *  - Facebook: docs/gym-research.md CONTACT.facebook_url (PUBLICLY_REPORTED;
 *    the report's official social anchor). Owner should confirm current
 *    control of the page.
 *  - Justdial: the research SOURCE_LOG documents the gym's own Justdial
 *    listing (Nanakramguda branch), so that exact URL is used.
 *  - X: no profile supplied; network homepage.
 *
 * Instagram is configured separately in lib/instagram.ts (it also drives the
 * Reel embeds) and is not repeated here.
 */
export interface SocialLink {
  id: "facebook" | "justdial" | "x";
  /** Accessible name for the icon, e.g. "Facebook". */
  label: string;
  /** Profile URL. Defaults to the network homepage until the gym's own is set. */
  href: string;
}

export const socialLinks: SocialLink[] = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/p/Reshapefitness-100064108390186/" },
  {
    id: "justdial",
    label: "Justdial",
    href: "https://www.justdial.com/Hyderabad/Reshape-Fitness-Gym-Opposite-Nanakramguda-Circle-Showkat-Nagar/040PXX40-XX40-220309155619-D9U2_BZDET",
  },
  { id: "x", label: "X", href: "https://x.com" },
];
