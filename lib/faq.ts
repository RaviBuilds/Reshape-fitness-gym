import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * RESHAPE FITNESS GYM — from docs/gym-research.md (FAQ.*). Only the entries
 * the research answers are used. The two entries whose answer is `null`
 * (opening hours — CONFLICTING_SOURCES; trainer qualifications — NOT_FOUND)
 * are deliberately NOT created. No cancellation / freeze / trial / joining-fee
 * / guest / refund FAQ is added because the research supports none of them.
 *
 * Every answer is PUBLICLY_REPORTED, so answers are worded as "reported" and
 * keep the research's "confirm with the gym" caveats. Owner verification is
 * required before final-client production.
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is the Banjara Hills branch located?",
    answer:
      "First Floor, Aziks Castle, 8-8-268/1/16/D1, Road Number 3, Sagar Society, Sri Nagar Colony, Aurora Colony, Banjara Hills, Hyderabad, Telangana 500034.",
  },
  {
    id: "02",
    question: "Does Reshape Fitness have more than one location?",
    answer:
      "Banjara Hills and Nanakramguda are reported as operating branches. A Lingampally location is also mentioned, but its address is not yet confirmed. Ask the team which services each branch offers.",
  },
  {
    id: "03",
    question: "What training programs are listed?",
    answer:
      "Personal training, group fitness and circuit workouts, functional training, CrossFit-style training, boxing and kickboxing-related training, calisthenics, bodybuilding and hypertrophy, weight-management journeys and nutrition coaching are publicly listed. Exact schedules and formats should be confirmed with the gym.",
  },
  {
    id: "04",
    question: "What amenities are reported?",
    answer:
      "Lockers, showers, gender-neutral restrooms, on-site parking, cardio equipment, strength and free-weight areas, and Google Pay are reported. Confirm current branch-level availability with the gym.",
  },
  {
    id: "05",
    question: "Is parking available?",
    answer:
      "On-site parking is reported by a directory. Confirm availability at your branch before you visit.",
  },
  {
    id: "06",
    question: "What are the membership prices?",
    answer:
      "Publicly listed CULT Pass rates for the Nanakramguda branch are \u20B9499 for a 1-day pass, \u20B91,000 for a 2-day pass, \u20B99,990 for 3 months, \u20B914,990 for 6 months and \u20B922,990 for a year. Direct membership pricing for Banjara Hills is not publicly disclosed. Confirm current plans and terms with the team on WhatsApp or by phone.",
  },
];
