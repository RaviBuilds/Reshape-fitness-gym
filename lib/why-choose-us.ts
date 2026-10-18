import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — method, how the services connect,
 * reach. It never repeats facility metrics, amenities, opening hours or
 * program lists. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns zones, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs.
 *
 * RESHAPE FITNESS GYM — from docs/gym-research.md (WHY_CHOOSE_US.*), all
 * PUBLICLY_REPORTED:
 *   - strength + functional conditioning equipment mix,
 *   - range of reported training modalities,
 *   - more than one Hyderabad branch (Banjara Hills and Nanakramguda).
 *
 * Not used on purpose:
 *   - "CULT Pass access at Nanakramguda" — third-party, branch-specific.
 *   - "Supportive coaching and community themes" — INFERRED from review
 *     sentiment, not a documented fact.
 *   - The partially verified Lingampally location is not named.
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Strength and conditioning together",
    description:
      "Free weights and strength equipment sit alongside SkiErg machines and battle ropes.",
  },
  {
    title: "A range of training formats",
    description:
      "Coached, group, bodyweight and combat-style sessions, plus nutrition coaching, under one name.",
  },
  {
    title: "More than one Hyderabad branch",
    description:
      "Reshape Fitness is reported at Banjara Hills and Nanakramguda. Ask the team which services each branch offers.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the reasons above;
 * it is never a superlative. A clone edits this object and the array, never
 * the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Strength and conditioning. Under one roof.",
};
