import type { PricingConfiguration } from "./types";

/**
 * Master pricing/membership data — the single source of truth for Section 06.
 *
 * PURE FRONTEND: there is no CMS, database, API or backend pricing source.
 * Everything the pricing register renders is authored here; the component in
 * components/sections/Membership.tsx consumes this verbatim and never hardcodes
 * a price, name, duration, label or CTA. To re-price the site for a real gym,
 * edit ONLY this file.
 *
 * Do not add discounts, savings, "best value" / "most popular" tags, urgency,
 * scarcity or guarantees — none of those exist in this contract by design.
 *
 * PRICE STATUS
 *   "exact"   -> render the numeric `price`, INR-formatted.
 *   "contact" -> render `contactLabel` ("Consult management") instead of an
 *                amount; `price` may be omitted.
 *   "hidden"  -> the entry does not render publicly at all.
 * Change a single plan's `priceStatus` to move it between these states without
 * touching the component.
 */
/**
 * RESHAPE FITNESS GYM pricing/membership data — Section 06.
 *
 * MIXED PRICING (prospect-demo rules, Cases A/B/D/F):
 *
 * docs/gym-research.md PRICING: Banjara Hills direct membership pricing is
 * NOT publicly disclosed. The only exact figures are third-party CULT Pass
 * prices reported for the NANAKRAMGUDA branch (Justdial service catalog),
 * PUBLICLY_REPORTED, not owner-confirmed. They are applied because they are
 * exact, publicly documented amounts (Case A), but they are NOT verified
 * Banjara Hills prices and REQUIRE OWNER VERIFICATION before final-client
 * production:
 *  - daily      INR 499    (1-Day Pass)
 *  - quarterly  INR 9,990  (3-month package)
 *  - half-year  INR 14,990 (6-month package)
 *  - annual     INR 22,990 (annual package)
 * The source adds "2 complimentary months" to the 3/6/12-month packages;
 * that extra term is not shown, and no other terms are invented.
 *
 *  - Every other plan KEEPS THE EXISTING TEMPLATE DEMO PRICE (Case B):
 *    weekly INR 1,000 and monthly INR 2,500 (the research has no weekly or
 *    distinct monthly price; the reported 2-Day Pass, INR 1,000, has no
 *    matching plan and is not mapped onto Weekly), and Personal Coaching
 *    INR 8,000 / month (no personal-training price in the research).
 *    None of these demo amounts is a verified Reshape Fitness price.
 *
 * No "Consult management" state was introduced; all plans stay
 * `priceStatus: "exact"`. The festival offer engine
 * (lib/festival-offers.ts) references the `half-year` and `annual` plan IDs
 * below — do not rename those IDs. No second pricing or offer calculation
 * exists; the engine derives every discounted amount from these prices.
 */
export const pricing: PricingConfiguration = {
  enabled: true,
  currency: "INR",
  locale: "en-IN",
  eyebrow: "Membership / Pricing",
  index: "06",
  headlineLines: ["Train on", "your terms."],
  accentLastLine: true,
  deck: "Flexible day passes and memberships for every commitment level. Reach out on WhatsApp or by phone and the team will get you started.",
  contactLabel: "Consult management",
  specialLabel: "Special training",
  plans: [
    {
      id: "daily",
      name: "Daily Pass",
      duration: "1 Day",
      term: "One day",
      price: 499,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      duration: "1 Week",
      term: "One week",
      price: 1000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "monthly",
      name: "1 Month",
      duration: "1 Month",
      term: "Per month",
      price: 2500,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "quarterly",
      name: "3 Months",
      duration: "3 Months",
      term: "Billed once",
      price: 9990,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "half-year",
      name: "6 Months",
      duration: "6 Months",
      term: "Billed once",
      price: 14990,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "annual",
      name: "1 Year",
      duration: "12 Months",
      term: "Billed once",
      price: 22990,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
  ],
  special: {
    id: "special-training",
    name: "Personal Coaching",
    duration: "1 Month",
    term: "Per month",
    price: 8000,
    priceStatus: "exact",
    description:
      "One-on-one personal training and dedicated trainer guidance, programmed around your goals.",
    ctaLabel: "Enquire",
  },
};
