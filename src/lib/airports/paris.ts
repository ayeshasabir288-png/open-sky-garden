import { PHOTOS } from "@/components/home/photos";
import { CHECKED, privateTransfer, type Airport } from "./types";
const rail = "https://www.iledefrance-mobilites.fr/actualites/fin-roissy-bus";
const fare = "https://www.ratp.fr/en/titres-et-tarifs/paris-aeroport?amp=";
const bus = "https://www.iledefrance-mobilites.fr/actualites/locales/detail/lancement9517";
const taxi = "https://www.service-public.gouv.fr/particuliers/actualites/A15396";
const terminal = "https://www.extime.com/en/paris/faq/faq-parking";
export const paris: Airport = {
  slug: "paris-cdg-airport-transfer",
  name: "Paris-Charles de Gaulle Airport",
  shortName: "Paris Charles de Gaulle",
  code: "CDG",
  city: "Paris",
  country: "France",
  location: "Roissy airport area, northeast of Paris",
  photo: PHOTOS["airport-cdg"],
  website: "https://www.parisaeroport.fr/",
  checked: CHECKED,
  description:
    "Plan a Paris arrival with RER B, regulated Paris taxis and the current bus alternatives—not the discontinued RoissyBus.",
  terminals:
    "Terminals 1, 2 and 3, with lettered areas in Terminal 2. The airport’s Extime guidance announces terminal renumbering for March 2027, so retain the designation on your actual flight and check updated airport information.",
  arrivals: [
    "Confirm the full terminal designation, including its letter when applicable. Terminal 2 is not a single small arrivals hall.",
    "Collect your baggage and pass the required arrival formalities before following public-transport or taxi signs. CDGVAL is the airport’s free automated terminal connection; check the airport map for your station access.",
    "Do not use an old door number as a private pickup instruction. Terminal-specific taxi doors and private meeting locations have not been verified for this guide; follow current official signs and provider instructions.",
  ],
  connections:
    "RER B towards Paris, onward rail connections, Express 9517 via Saint-Denis Pleyel, and licensed local taxis.",
  accessibility:
    "Check the airport assistance information and the Île-de-France Mobilités accessible itinerary for your complete journey. Express 9517 is described by the authority as accessible to passengers with reduced mobility; this does not establish step-free access for every connecting station.",
  train: {
    title: "RER B: the airport branch matters",
    station:
      "Airport RER B stations include Aéroport Charles de Gaulle 1 and Aéroport Charles de Gaulle 2–TGV. Use the airport map to match your arrival terminal to its access route.",
    paragraphs: [
      "RER B connects CDG with Paris. When returning to the airport, select a train towards Aéroport Charles de Gaulle 2–TGV rather than the other northern branch.",
      "Use the regional journey planner for your actual Paris station and any onward metro change. It is the complete station-to-hotel journey, not only the airport train segment, that determines convenience with luggage.",
      "The Paris Region Airports ticket is the airport rail ticket. RATP lists a €14 full fare; purchase via official machines or authorised apps and check whether an existing Navigo pass already covers the airport.",
      "The authority publishes frequent daytime RER B services, but engineering work and evening changes can affect a trip. Recheck your travel date, and verify lifts and assistance for all interchanges.",
    ],
    url: rail,
  },
  taxi: {
    paragraphs: [
      "Use the signed official taxi queue and a licensed vehicle with a taxi roof sign and meter. Avoid approaches inside the terminal that bypass official transport arrangements.",
      "French government guidance lists regulated direct Paris taxi fares between CDG and Paris: €56 to the right bank and €65 to the left bank in 2026. These are public taxi rules, not Europe Airport Taxi prices.",
      "The destination must meet the regulated journey conditions; other destinations and permitted supplements require a separate check. Exact terminal rank doors have not been verified here, so use the airport’s current signage.",
    ],
    url: taxi,
  },
  cityGuide:
    "RER B is often practical when the destination is close to a served station or an easy interchange. A licensed taxi is direct to a Paris address but remains traffic-dependent. RoissyBus ceased on 1 March 2026: the current Express 9517 connects Roissypôle with Saint-Denis Pleyel and Argenteuil, rather than running directly to Opéra.",
  comparison: [
    privateTransfer(),
    {
      option: "Licensed Paris taxi",
      route: "Direct CDG ↔ Paris right / left bank",
      time: "Traffic and address dependent",
      fare: "€56 right bank / €65 left bank; regulated 2026 direct-route fares",
      url: taxi,
      luggage: "Direct to address; ask about capacity and supplements",
      advantage: "No rail interchange with bags",
      limitation: "Regulated fares do not cover every suburban destination",
    },
    {
      option: "RER B",
      route: "CDG → Paris regional rail network",
      time: "Check station-specific journey planner",
      fare: "€14 full-fare Paris Region Airports ticket",
      url: fare,
      luggage: "Carry bags through stations and interchanges",
      advantage: "Avoids road traffic for station-connected destinations",
      limitation: "Onward metro changes and step-free access need checking",
    },
    {
      option: "Express 9517 bus",
      route: "Roissypôle ↔ Saint-Denis Pleyel ↔ Argenteuil",
      time: "About 45 minutes to Saint-Denis; traffic dependent",
      fare: "Check operator fare",
      url: bus,
      luggage: "Shared coach; check space and onward station access",
      advantage: "Connects to the Saint-Denis transport hub",
      limitation: "Not a replacement direct bus to Opéra",
    },
  ],
  routes: [
    {
      name: "Central Paris",
      text: "Use RER B and an appropriate onward connection, or a regulated direct taxi to a qualifying Paris address.",
    },
    {
      name: "Saint-Denis Pleyel",
      text: "Express 9517 links the airport’s Roissypôle bus area with this transport hub.",
    },
    {
      name: "Argenteuil",
      text: "Express 9517 continues to Argenteuil station; the authority quotes about an hour for the bus route.",
    },
  ],
  scenarios: [
    {
      title: "Solo, light luggage",
      text: "RER B can be useful when the Paris destination needs few changes.",
    },
    {
      title: "Family with suitcases",
      text: "Compare several rail tickets and interchange walking with a licensed taxi sized for everyone; verify child-seat requirements.",
    },
    {
      title: "Business traveller",
      text: "Choose by the meeting address: a direct road journey avoids changes, while RER B avoids motorway congestion.",
    },
    {
      title: "Late evening arrival",
      text: "Check current RER B and bus operations. Do not plan an arrival around the discontinued RoissyBus.",
    },
    {
      title: "Larger group",
      text: "Confirm passenger and luggage capacity before choosing a vehicle; taxi supplements and rail tickets have different rules.",
    },
    {
      title: "Outside central Paris",
      text: "The right/left-bank flat taxi fares are not a blanket suburban fare. Compare a regional itinerary for the actual address.",
    },
  ],
  tips: [
    "Check full Terminal 2 letters and any upcoming terminal-name changes.",
    "Do not confuse the two northern RER B branches on your return trip.",
    "Buy the airport-valid ticket rather than assuming a standard metro ticket covers CDG.",
  ],
  faqs: [
    {
      q: "Does RoissyBus still run to Opéra?",
      a: "No. Île-de-France Mobilités confirms it ended on 1 March 2026. RER B and the Express 9517 route are current alternatives.",
    },
    {
      q: "Which direction should I choose on RER B?",
      a: "For the return to CDG, choose the airport branch towards Aéroport Charles de Gaulle 2–TGV, not the other northern branch.",
    },
    {
      q: "How much is the airport rail ticket?",
      a: "RATP lists €14 for the full-fare Paris Region Airports ticket, checked on 17 November 2026. Eligibility and fares can change.",
    },
    {
      q: "What are the regulated Paris taxi fares?",
      a: "Government guidance lists €56 for a qualifying direct CDG/right-bank Paris journey and €65 for the left bank in 2026. These are local taxi fares, not private transfer quotes.",
    },
    {
      q: "Does bus 9517 go directly to Opéra?",
      a: "No. It links Roissypôle, Saint-Denis Pleyel and Argenteuil. Plan any onward metro or rail connection separately.",
    },
    {
      q: "Can I confirm a CDG transfer here?",
      a: "No. The form displays a demo summary only; it does not send an enquiry or reserve transport.",
    },
  ],
  sources: [
    {
      label: "Île-de-France Mobilités — end of RoissyBus",
      url: rail,
      scope: "2026 service change, RER B airport branch and ticket",
    },
    { label: "RATP — airport tickets", url: fare, scope: "€14 full fare and purchase options" },
    {
      label: "Île-de-France Mobilités — Express 9517",
      url: bus,
      scope: "Route, indicative 45-minute Saint-Denis journey and accessibility",
    },
    {
      label: "Service Public — 2026 taxi rules",
      url: taxi,
      scope: "Regulated direct Paris airport taxi fares",
    },
    {
      label: "Extime / Paris Aéroport — terminal naming",
      url: terminal,
      scope: "Upcoming 2027 terminal renumbering",
    },
    {
      label: "Paris Aéroport — easy-read airport guide",
      url: "https://www.parisaeroport.fr/docs/default-source/passager-fichiers/preparer/mon-guide-voyage-au-d%C3%A9part-falc.pdf?sfvrsn=cde114ff_2",
      scope: "CDGVAL automated terminal connection",
    },
  ],
};
