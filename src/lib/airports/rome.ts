import { PHOTOS } from "@/components/home/photos";
import { CHECKED, privateTransfer, type Airport } from "./types";
const root = "https://www.adr.it/web/aeroporti-di-roma-en/";
const rail = "https://www.trenitalia.com/en/services/leonardo-express.html";
const taxi = root + "pax-fco-taxi";
const bus = root + "pax-fco-bus";
const map = root + "pax-fco-airport-map";
const trains = root + "pax-fco-train";
export const rome: Airport = {
  slug: "rome-fiumicino-airport-transfer",
  name: "Leonardo da Vinci–Rome Fiumicino Airport",
  shortName: "Rome Fiumicino",
  code: "FCO",
  city: "Rome",
  country: "Italy",
  location: "Fiumicino, on the coast west of Rome",
  photo: PHOTOS["airport-fco"],
  website: "https://www.adr.it/",
  checked: CHECKED,
  description:
    "Understand Leonardo Express versus FL1, the Rome taxi fare boundary and the different bus destinations from Fiumicino.",
  terminals:
    "Terminal 1 and Terminal 3. ADR maps identify Arrivals at Level 0, Departures at Level 1 and the Mezzanine at Level 2; check your airline and arrival terminal.",
  arrivals: [
    "Use the terminal screens for baggage collection and complete border and customs formalities before leaving the arrivals area.",
    "Follow railway signs for Fiumicino Aeroporto station inside the airport area. Terminal maps distinguish the arrivals level from the departure and mezzanine levels.",
    "ADR locates official taxis at the arrivals level of T1 and T3. A prearranged NCC car needs its own confirmed instructions; do not assume it is waiting in a public taxi queue.",
  ],
  connections:
    "Leonardo Express to Roma Termini, FL1 regional trains, buses to Rome and other cities, and regulated local taxis.",
  accessibility:
    "ADR’s terminal maps indicate lifts, ramps and dedicated routes. Trenitalia states that Leonardo Express has seating and toilets suitable for reduced mobility; arrange any required station or airport assistance separately.",
  train: {
    title: "Leonardo Express to Termini, FL1 for other stations",
    station:
      "Fiumicino Aeroporto railway station inside the airport area, reached by following terminal railway signs.",
    paragraphs: [
      "Leonardo Express is Trenitalia’s non-stop service to Roma Termini. The operator publishes a 32-minute train journey and departures scheduled every 15 minutes; check the timetable for your arrival date.",
      "FL1 regional trains are a different service. ADR identifies them as useful for other Rome stations and the regional network; do not assume every airport train goes to Termini.",
      "The checked Leonardo Express standard ticket is €14. Trenitalia sells tickets online and describes contactless purchase at fare gates, with one ticket per card per passenger; verify the product before boarding.",
      "Trenitalia permits large luggage without a luggage surcharge on Leonardo Express and identifies reduced-mobility facilities. Integrated Metrebus tickets are not valid for this service. Add walking and waiting to the 32-minute onboard journey.",
    ],
    url: rail,
  },
  taxi: {
    paragraphs: [
      "ADR confirms licensed taxis at Arrivals in Terminal 1 and Terminal 3. Official vehicles are white with a TAXI roof sign and a displayed licence number.",
      "ADR lists a €55 fixed fare for Rome city centre within the Aurelian Walls, subject to the competent municipality’s applicable rules. A hotel marketed as “Rome” is not necessarily inside that boundary.",
      "Confirm destination eligibility, municipality and payment method before departure. Avoid unlicensed approaches inside arrivals. NCC chauffeur-driven services must be requested in advance and are separate from rank taxis.",
    ],
    url: taxi,
  },
  cityGuide:
    "Leonardo Express is particularly convenient for a Termini-connected address or an onward intercity train. FL1 may be better for a different Rome station. Coaches serve several Rome districts, not just one terminus; road traffic affects them as well as taxis. A direct road journey avoids carrying luggage beyond the station.",
  comparison: [
    privateTransfer(),
    {
      option: "Licensed local taxi",
      route: "FCO ↔ qualifying Rome address within Aurelian Walls",
      time: "Destination and traffic dependent",
      fare: "€55 fixed qualifying city-centre route; confirm conditions",
      url: taxi,
      luggage: "Direct to address; confirm vehicle size",
      advantage: "Avoids the last station-to-hotel connection",
      limitation: "Boundary and municipality rules matter; not every Rome-area address qualifies",
    },
    {
      option: "Leonardo Express",
      route: "Fiumicino Aeroporto ↔ Roma Termini",
      time: "32 minutes onboard",
      fare: "€14 standard ticket",
      url: rail,
      luggage: "Large luggage without surcharge under operator rules",
      advantage: "Non-stop station-to-station journey",
      limitation: "No intermediate stops; walk or change after Termini",
    },
    {
      option: "FL1 regional train",
      route: "Airport → other Rome / regional stations",
      time: "Check station-specific timetable",
      fare: "Check operator fare",
      url: trains,
      luggage: "Carry bags onto regional train",
      advantage: "May suit a non-Termini destination",
      limitation: "Not the non-stop Termini service",
    },
    {
      option: "Airport coach / bus",
      route: "Airport → Termini and other Rome districts",
      time: "Check operator; traffic dependent",
      fare: "Check operator fare",
      url: bus,
      luggage: "Check the carrier’s baggage rules",
      advantage: "Choice of city stops and operators",
      limitation: "Stop and timetable vary by carrier",
    },
  ],
  routes: [
    {
      name: "Roma Termini",
      text: "Leonardo Express runs non-stop in a published 32 minutes, before walking and waiting.",
    },
    {
      name: "Other Rome railway stations",
      text: "Compare FL1 regional services with your destination rather than automatically choosing Termini.",
    },
    {
      name: "Vatican / Aurelia area",
      text: "ADR lists bus connections to these areas. Choose the correct carrier and drop-off stop.",
    },
    {
      name: "Fiumicino town",
      text: "ADR lists local public transport from outside Terminal 3 towards Fiumicino city centre.",
    },
  ],
  scenarios: [
    {
      title: "Solo, light luggage",
      text: "Leonardo Express is simple for Termini; compare FL1 if your destination is elsewhere.",
    },
    {
      title: "Family with suitcases",
      text: "Compare group rail ticket conditions and the hotel connection with a licensed taxi or prearranged correctly sized car.",
    },
    {
      title: "Business traveller",
      text: "Termini gives onward intercity connections; a different business district may suit FL1 or a direct road trip.",
    },
    {
      title: "Late evening arrival",
      text: "Check the actual train departure and coach timetable. ADR notes night buses, but service depends on the route and date.",
    },
    {
      title: "Larger group",
      text: "Compare official rail group products and vehicle capacity; this website does not guarantee a van at FCO.",
    },
    {
      title: "Outside central Rome",
      text: "Do not apply the Aurelian Walls taxi fare to an outlying address. Check regional trains, bus operators or an individual road quote.",
    },
  ],
  tips: [
    "Check whether your address is inside the taxi fare boundary.",
    "Read the train destination: FL1 and Leonardo Express serve different needs.",
    "Use the carrier’s current bus stand and timetable rather than an old exit number.",
  ],
  faqs: [
    {
      q: "How long is Leonardo Express to Termini?",
      a: "Trenitalia publishes 32 minutes onboard. Add time for baggage collection, walking and waiting.",
    },
    {
      q: "Is every Fiumicino train a Termini train?",
      a: "No. FL1 is a regional service for other stations; Leonardo Express is the non-stop Termini service.",
    },
    {
      q: "Where is the airport station?",
      a: "Fiumicino Aeroporto station is inside the airport area and is signposted from the terminals.",
    },
    {
      q: "What is the standard Leonardo Express fare?",
      a: "The official Trenitalia page lists €14, checked on 17 November 2026. Check current conditions before purchase.",
    },
    {
      q: "Does the €55 taxi fare cover every Rome hotel?",
      a: "No. ADR describes the fixed city-centre fare for qualifying destinations within the Aurelian Walls, under the applicable municipality rules.",
    },
    {
      q: "Where are authorised taxis?",
      a: "At Arrivals in T1 and T3. Look for a white taxi, roof sign and displayed licence number.",
    },
    {
      q: "Can the form reserve an FCO pickup?",
      a: "No. It creates a demo summary only; no enquiry, fare, availability or pickup is confirmed.",
    },
  ],
  sources: [
    {
      label: "ADR — terminal maps",
      url: map,
      scope: "T1/T3, arrival levels and accessible routes",
    },
    {
      label: "Trenitalia — Leonardo Express",
      url: rail,
      scope: "32 minutes, €14, operating pattern, luggage and accessibility",
    },
    { label: "ADR — airport trains", url: trains, scope: "Airport station and FL1 alternative" },
    {
      label: "ADR — taxi guidance",
      url: taxi,
      scope: "Licensed ranks, €55 boundary, municipality and NCC distinction",
    },
    { label: "ADR — buses", url: bus, scope: "Rome districts, local and interregional services" },
  ],
};
