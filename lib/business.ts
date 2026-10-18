import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * RESHAPE FITNESS GYM (Banjara Hills, Hyderabad) — populated from
 * docs/gym-research.md. Every field below is PUBLICLY_REPORTED or INFERRED
 * (no VERIFIED_OFFICIAL business fact exists in the research), so owner
 * verification is required before final-client production.
 *
 * PRIMARY BRANCH: the site represents the Banjara Hills branch (Aziks
 * Castle). The Nanakramguda branch and the partially verified Lingampally
 * location are not rendered as addresses here.
 *
 * HOURS — UNRESOLVED SOURCE CONFLICT (not silently resolved): Google Business
 * Profile says "Closed - Opens 5 pm", Nears.me lists 06:00-11:00 (Friday
 * 06:00-22:00) and Justdial lists 06:00-21:00 for the Nanakramguda branch.
 * The research forbids selecting a value arbitrarily, so `hours` is left
 * empty: structured data lists no opening hours, Section 01 shows no
 * schedule readout and the Location section tells visitors to confirm
 * timings with the gym. OWNER QUESTION: exact opening and closing times for
 * every day, including split shifts and Sunday.
 *
 * WHATSAPP: INFERRED — the research assumes the listed mobile number is also
 * used for WhatsApp and asks for confirmation.
 *
 * EMAIL: PUBLICLY_REPORTED (Facebook page). Owner must confirm it is current
 * and intended for public display.
 *
 * POSTAL CODE: 500034 is the Banjara Hills value (PUBLICLY_REPORTED). The
 * conflicting Nanakramguda pincode is not used.
 *
 * mapUrl: no verified Google Maps / Place URL was found (the research only
 * supplies a Yandex Maps page). This is a standard Google Maps
 * search-by-name-and-address URL built from the reported address text. No
 * latitude, longitude or Place ID has been invented.
 */
export const business: Business = {
  name: "Reshape Fitness Gym",
  tagline: "Here to help you build the body you want.",
  description:
    "Reshape Fitness Gym is a Banjara Hills, Hyderabad gym combining strength training and free weights with functional conditioning, boxing and kickboxing-style training, personal training and nutrition guidance.",
  phone: "+917989978952",
  whatsapp: {
    number: "+917989978952",
    message: "Hi, I'd like to know more about membership and training at Reshape Fitness Gym, Banjara Hills.",
  },
  email: "azmathsiddique@gmail.com",
  address: {
    // Research LOCATION.primary_branch.address_line, trimmed of the repeated
    // "Banjara Hills" (kept in `locality`) so the rendered address does not
    // say it twice. Locality is the short public-facing "Banjara Hills".
    addressLine: "First Floor, Aziks Castle, 8-8-268/1/16/D1, Road Number 3, Sagar Society, Sri Nagar Colony, Aurora Colony",
    locality: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500034",
    landmark: "Aziks Castle",
  },
  hours: [],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Reshape+Fitness+Gym+Aziks+Castle+Road+Number+3+Sri+Nagar+Colony+Banjara+Hills+Hyderabad+500034",
  // Prompt A — PRIMARY brand colour "Athletic Golden Yellow" #FFCF00
  // (logo-extracted; action / energy / major brand signal). Entered here
  // exactly once and never altered. Yellow fails white-text contrast, so
  // lib/color.ts derives dark text (--accent-foreground) for primary fills.
  accentColor: "#FFCF00",
  // Prompt A — SECONDARY brand colour "Deep Slate Blue" #243447 (structure /
  // support / depth). Authentic hex is entered here exactly once. It is too
  // deep to read as small text on the near-black base, so app/layout.tsx
  // passes it through lib/color.ts secondaryOnDark() for dark-surface text,
  // ticks and focus (--brand-secondary), and exposes the untouched value as
  // --brand-secondary-base (used for light-surface ink).
  secondaryColor: "#243447",
};
