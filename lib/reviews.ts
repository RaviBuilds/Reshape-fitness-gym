import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * RESHAPE FITNESS GYM — rating/reviewCount are the Banjara Hills branch's
 * Google Business Profile values from docs/gym-research.md (REVIEWS +
 * conflicts): 4.7 stars / 183 reviews (GBP screenshot, the research's
 * priority-1 identity anchor). The status of both fields is
 * CONFLICTING_SOURCES, so they are PUBLICLY_REPORTED, not VERIFIED_OFFICIAL:
 *   - Nears.me lists 184 reviews for the same branch;
 *   - the Nanakramguda branch (Justdial) is a different listing: 4.9 / 185.
 * The research says branch figures must not be merged into one brand-wide
 * number, so only the Banjara Hills branch values are used, matching the
 * Banjara Hills address on this site. The research gives no read-on date.
 * OWNER / OPERATOR: re-read the live Google rating and count before launch.
 *
 * REVIEWS ARE DELIBERATELY EMPTY. The research supplies one quotation only:
 * it is truncated, has no reviewer attribution, and its cited source is a
 * Justdial listing for a different gym (Gritpex Fitness). It is therefore not
 * displayed. The Reviews section renders nothing when `reviews` is empty
 * (graceful omission); the rating and count still appear in the hero, trust
 * strip and footer. Add reviews here only when the owner supplies full text
 * with reviewer attribution and permission. `tagline` is left empty for the
 * same reason — the research's sentiment summary is INFERRED.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Justdial URL
 * for the Google review CTA. googleBusinessProfileUrl uses the same Google
 * Maps search-by-name-and-address fallback as lib/business.ts mapUrl. No
 * Place ID or profile slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 4.7,
  reviewCount: 183,
  tagline: "",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Reshape+Fitness+Gym+Aziks+Castle+Road+Number+3+Sri+Nagar+Colony+Banjara+Hills+Hyderabad+500034",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [],
};
