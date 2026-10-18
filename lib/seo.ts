import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * RESHAPE FITNESS GYM SEO configuration, from docs/gym-research.md
 * (SEO.title_candidate / description_candidate — INFERRED from researched
 * names, locations and services). The title is the research candidate; the
 * description drops the research's internal "confirm before publication" note
 * and keeps only the factual service + location wording. No ranking claim or
 * superlative is used.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO website for this gym, and reshapefitnessgym.com
 * belongs to an unrelated UK business, so it must not be used here.
 */
export const seo: SEOConfiguration = {
  title: "Reshape Fitness Gym | Banjara Hills & Nanakramguda, Hyderabad",
  description:
    "Reshape Fitness Gym in Banjara Hills, Hyderabad: strength training, functional fitness, personal training, calisthenics, boxing-related training and nutrition coaching.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
