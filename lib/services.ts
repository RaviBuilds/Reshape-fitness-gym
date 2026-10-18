import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * RESHAPE FITNESS GYM — all 9 programs from docs/gym-research.md
 * (PROGRAMS.*). Every entry is PUBLICLY_REPORTED; exact formats, schedules,
 * per-branch availability and instructor credentials are NOT established, so
 * no schedule, trainer, outcome or health claim is added. Owner verification
 * of current availability is required before final-client production.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed even though the gym-facing program name differs. Here:
 *   - `strength-training` carries the research's "Bodybuilding / hypertrophy"
 *     program (strength category),
 *   - `conditioning` carries "Functional fitness / functional training"
 *     (conditioning category).
 *
 * CrossFit-style training is described as a service term only: the research
 * does not establish any official CrossFit affiliation, so none is implied.
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real Reshape Fitness photography — no code change.
 */
const ASSET = "/assets/programs/reshape-fitness-banjara-hills-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Bodybuilding / Hypertrophy",
    description:
      "Bodybuilding and lean-muscle programs, backed by strength machines and free-weight sections.",
    icon: "strength",
    image: `${ASSET}-bodybuilding-hypertrophy.jpg`,
    verified: true,
    ctaLabel: "Ask about bodybuilding",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-to-one personal training with a coach.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Functional Training",
    description:
      "Functional fitness and conditioning, with air bikes, SkiErg machines and battle ropes on the floor.",
    icon: "equipment",
    image: `${ASSET}-functional-training.jpg`,
    verified: true,
    ctaLabel: "Ask about functional training",
    ctaHref: undefined,
  },
  {
    id: "boxing-kickboxing",
    name: "Boxing / Kickboxing",
    description: "Combat-sports conditioning with boxing and kickboxing-style training.",
    icon: "cardio",
    image: `${ASSET}-boxing-kickboxing.jpg`,
    verified: true,
    ctaLabel: "Ask about boxing and kickboxing",
    ctaHref: undefined,
  },
  {
    id: "group-fitness",
    name: "Group Fitness",
    description: "Group classes and circuit workouts.",
    icon: "floor",
    image: `${ASSET}-group-fitness.jpg`,
    verified: true,
    ctaLabel: "Ask about group fitness",
    ctaHref: undefined,
  },
  {
    id: "crossfit-style",
    name: "CrossFit-Style",
    description: "CrossFit-style high-intensity conditioning.",
    icon: "equipment",
    image: `${ASSET}-crossfit-style.jpg`,
    verified: true,
    ctaLabel: "Ask about CrossFit-style training",
    ctaHref: undefined,
  },
  {
    id: "calisthenics",
    name: "Calisthenics",
    description: "Calisthenics and bodyweight workouts.",
    icon: "floor",
    image: `${ASSET}-calisthenics.jpg`,
    verified: true,
    ctaLabel: "Ask about calisthenics",
    ctaHref: undefined,
  },
  {
    id: "weight-management",
    name: "Weight Management",
    description: "Weight-management training journeys, alongside nutrition guidance.",
    icon: "cardio",
    image: `${ASSET}-weight-management.jpg`,
    verified: true,
    ctaLabel: "Ask about weight management",
    ctaHref: undefined,
  },
  {
    id: "nutrition-coaching",
    name: "Nutrition Coaching",
    description: "Dietician coaching, diet plans and clean-eating guidance.",
    icon: "coaching",
    image: `${ASSET}-nutrition-coaching.jpg`,
    verified: true,
    ctaLabel: "Ask about nutrition coaching",
    ctaHref: undefined,
  },
];
