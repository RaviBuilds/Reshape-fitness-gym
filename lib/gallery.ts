import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * RESHAPE FITNESS GYM — real facility photographs supplied by the operator
 * (public/assets/gallery/reshape-fitness-banjara-hills-gallery-<subject>.jpg).
 * Filenames are descriptive and stable: replace a file in place and no code
 * change is needed.
 *
 * ALT TEXT describes only what is visible in each frame. Equipment brands and
 * claims about the branch are not stated; the research does not confirm which
 * branch each photo was taken at, so alts name the gym, not a specific branch.
 *
 * ORDER is editorial: wide floor views first, then strength equipment, then
 * the functional / turf area, with the one frame carrying a third-party
 * (cult.fit) watermark last.
 *
 * NOT IN THE RAIL: reshape-fitness-banjara-hills-about-gym-interior.jpg
 * (reception wall mural) also sits in this folder, but it is the About
 * section image (public/assets/about/, identical file), so it is not repeated
 * here.
 *
 * OWNER / OPERATOR CHECKS: several frames show the gym's own brand wall art
 * and one (air-bike-floor) carries a visible "cult.fit" watermark — confirm
 * the right to use it or swap in an unmarked photo at the same filename.
 *
 * No claim, count, award or superlative is encoded here.
 */
const GALLERY = "/assets/gallery/reshape-fitness-banjara-hills-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-training-floor-turf-lane.jpg`,
    alt: "Reshape Fitness Gym training floor with a green turf lane, plate-loaded machines and a barbell rack, with members and a trainer on the floor",
  },
  {
    src: `${GALLERY}-cardio-strength-floor.jpg`,
    alt: "Wide view of the Reshape Fitness Gym floor with treadmills and cross-trainers, a heavy bag, benches and a Smith machine",
  },
  {
    src: `${GALLERY}-plate-loaded-machines.jpg`,
    alt: "Plate-loaded strength machines and loaded barbells in front of a mirror wall at Reshape Fitness Gym",
  },
  {
    src: `${GALLERY}-heavy-bag-strength-area.jpg`,
    alt: "Heavy punching bag beside a preacher curl bench and strength machines at Reshape Fitness Gym",
  },
  {
    src: `${GALLERY}-dumbbell-racks.jpg`,
    alt: "Racks of rubber-coated dumbbells and strength machines on the rubber-floored area at Reshape Fitness Gym",
  },
  {
    src: `${GALLERY}-dumbbell-rack-closeup.jpg`,
    alt: "Close-up of a dumbbell rack with chrome-handle dumbbells at Reshape Fitness Gym",
  },
  {
    src: `${GALLERY}-turf-lane-battle-ropes.jpg`,
    alt: "Turf lane with battle ropes in front of the Reshape Fitness wall mural",
  },
  {
    src: `${GALLERY}-functional-corner.jpg`,
    alt: "Functional training corner at Reshape Fitness Gym with stability balls, a battle rope, medicine balls and a wall mural",
  },
  {
    src: `${GALLERY}-air-bike-floor.jpg`,
    alt: "Reshape Fitness Gym floor with an air bike in the foreground, a turf lane and a heavy bag behind",
  },
];
