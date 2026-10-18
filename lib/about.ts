import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * RESHAPE FITNESS GYM — populated from docs/gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Everything below is PUBLICLY_REPORTED (Nears.me,
 * Facebook, source report); owner verification of branch-level availability
 * is required before final-client production. No station counts or
 * equipment quantities are stated in the research, so no metrics are shown.
 *
 * Not rendered: the research's `positioning` ("hybrid facility") is INFERRED
 * and is not asserted as a facility fact. Opening hours are an unresolved
 * source conflict (see lib/business.ts), so `business.hours` is empty and
 * the schedule readout stays hidden; `showSchedule` remains true so it
 * appears automatically once the owner confirms hours.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/reshape-fitness-banjara-hills-about-gym-interior.jpg",
    alt: "Reshape Fitness Gym training floor in Banjara Hills, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength and free weights",
      detail: "Strength-training machines and free-weight sections.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio",
      detail: "Cardio zone with treadmills, elliptical trainers and rowing machines.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "functional-conditioning",
      label: "Functional conditioning",
      detail: "Air bikes, SkiErg machines and battle ropes.",
      icon: "equipment",
      verified: true,
    },
  ],
  attributes: [
    { id: "lockers", label: "Lockers", verified: true },
    { id: "showers", label: "Showers", verified: true },
    { id: "restrooms", label: "Gender-neutral restrooms", verified: true },
    { id: "parking", label: "On-site parking", verified: true },
    { id: "digital-payments", label: "Google Pay accepted", verified: true },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
