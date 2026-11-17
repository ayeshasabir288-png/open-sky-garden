import { PHOTOS } from "@/components/home/photos";
import { CHECKED, privateTransfer, type Airport } from "./types";
const base = "https://www.aena.es/en/josep-tarradellas-barcelona-el-prat";
const rail = base + "/getting-there/trains.html";
const taxi = base + "/getting-there/taxi.html";
const metro = "https://www.tmb.cat/en/visit-barcelona/public-transport/metro-airport";
const bus =
  "https://aerobusbarcelona.es/en/guia-de-viaje/all-the-information-about-lines-schedules-and-stops-of-the-aerobus-service/";
const shuttle = base + "/airport-services/free-transport-between-terminals.html";
export const barcelona: Airport = {
  slug: "barcelona-airport-transfer",
  name: "Josep Tarradellas Barcelona–El Prat Airport",
  shortName: "Barcelona–El Prat",
  code: "BCN",
  city: "Barcelona",
  country: "Spain",
  location: "El Prat de Llobregat, southwest of Barcelona",
  photo: PHOTOS["airport-bcn"],
  website: base + ".html",
  checked: CHECKED,
  description:
    "Compare Terminal 1 and Terminal 2 access, the L9 Sud metro, R2 Nord rail and Aerobús before choosing your Barcelona journey.",
  terminals:
    "Terminal 1 and Terminal 2, including the T2A, T2B and T2C areas. Aena operates a free shuttle between T1 and T2; check your airline’s terminal before choosing a train or airport bus.",
  arrivals: [
    "Keep the terminal on your flight details handy. T1 and T2 have distinct transport access points, and changing terminals adds time.",
    "After baggage and customs, follow the ground-transport signs. Aena identifies the official T1 taxi service on the ground floor and taxi ranks opposite arrival areas at T2.",
    "Prearranged transfer instructions must specify the actual terminal. A public taxi rank or Aerobús stop is not automatically your private meeting point.",
  ],
  connections:
    "R2 Nord suburban rail, L9 Sud metro, Aerobús A1/A2, terminal shuttle and licensed black-and-yellow taxis.",
  accessibility:
    "Check Aena’s assistance arrangements and TMB’s accessible-route information before travel. Assess the full itinerary, including station changes, luggage and the terminal shuttle; no accessible private vehicle is confirmed by this website.",
  train: {
    title: "R2 Nord or L9 Sud? Start with your terminal",
    station:
      "Aeroport rail connection for R2 Nord and separate Aeroport T1 / Aeroport T2 stations on metro L9 Sud.",
    paragraphs: [
      "Aena lists the R2 North airport–Maçanet-Massanes suburban service. Use its official Renfe/Rodalies links to confirm the airport station access, stops and current timetable for your arrival terminal.",
      "Metro L9 Sud serves both T1 and T2. It does not end at Plaça Catalunya: plan a change, for example at Torrassa for L1, Collblanc for L5 or Zona Universitària for L3, depending on your destination.",
      "TMB explains that not all standard metro tickets cover Aeroport T1/T2. In particular, a standard single ticket and T-casual are not valid for these L9 airport stations; choose an airport-valid ticket or pass.",
      "Buy from official operator channels and check operating hours for your date. With luggage, compare the number of changes against the direct Aerobús city-centre service.",
    ],
    url: metro,
  },
  taxi: {
    paragraphs: [
      "Aena lists ranks opposite arrivals at T1, the Barcelona–Madrid shuttle and T2A, T2B and T2C. At T1, the official service is on the ground floor.",
      "The airport states that official Barcelona taxis are black and yellow. Join the signed rank rather than accepting an unsolicited approach.",
      "Check the displayed regulated tariff and any airport supplement with the driver or Metropolitan Taxi Institute. No private fare, terminal exit or driver meeting location is promised here.",
    ],
    url: taxi,
  },
  cityGuide:
    "For Plaça Catalunya, Aerobús offers a direct city-centre route: A1 is the T1 line and A2 the T2 line. L9 Sud can be useful for a metro-connected destination but requires a change for many central areas. A road vehicle may simplify a hotel or coastal address, while traffic can make it slower.",
  comparison: [
    privateTransfer(),
    {
      option: "Local black-and-yellow taxi",
      route: "T1 / T2 rank → Barcelona address",
      time: "Destination and traffic dependent",
      fare: "Check operator fare",
      url: taxi,
      luggage: "Confirm capacity for suitcases and passengers",
      advantage: "Direct arrival at a specified address",
      limitation: "Regulated supplements and traffic affect cost and time",
    },
    {
      option: "R2 Nord train",
      route: "Airport → Rodalies rail network",
      time: "Check current Rodalies timetable",
      fare: "Check operator fare",
      url: rail,
      luggage: "Shared train; plan station and terminal access",
      advantage: "Useful for an onward railway itinerary",
      limitation: "Check access from your terminal before choosing",
    },
    {
      option: "L9 Sud metro",
      route: "Aeroport T1 / T2 → metro network",
      time: "Depends on interchange and final station",
      fare: "Check operator fare",
      url: metro,
      luggage: "Carry bags through metro changes",
      advantage: "Serves both airport terminals",
      limitation: "Airport ticket rules; no direct Plaça Catalunya service",
    },
    {
      option: "Aerobús A1 / A2",
      route: "T1 / T2 ↔ Plaça Catalunya",
      time: "About 35 minutes; road conditions vary",
      fare: "Check operator fare",
      url: bus,
      luggage: "Airport bus; keep bags safely stowed",
      advantage: "Direct city-centre route from each terminal",
      limitation: "Traffic and last leg from bus stop to hotel",
    },
  ],
  routes: [
    {
      name: "Plaça Catalunya",
      text: "Aerobús A1 from T1 or A2 from T2 connects with this city-centre stop.",
    },
    {
      name: "Plaça Espanya",
      text: "Both Aerobús lines list this city stop; compare the walk to your address.",
    },
    {
      name: "Fira de Barcelona",
      text: "L9 Sud serves Fira station; check the venue entrance and walking distance.",
    },
    {
      name: "Barcelona Sants",
      text: "Sants connects with Rodalies and longer-distance rail. Confirm the airport itinerary and current stop pattern before buying.",
    },
  ],
  scenarios: [
    {
      title: "Solo, light luggage",
      text: "Choose Aerobús for the Plaça Catalunya area or metro for a destination suited to L9 and an easy change.",
    },
    {
      title: "Family with suitcases",
      text: "Aerobús avoids a metro interchange for city-centre stops; a confirmed road vehicle can remove the final hotel walk.",
    },
    {
      title: "Business traveller",
      text: "L9 Sud may suit a Fira visit better than travelling into the historic centre first.",
    },
    {
      title: "Late evening arrival",
      text: "The Aerobús operator describes all-day operation, but check your date and chosen terminal line before relying on it.",
    },
    {
      title: "Larger group",
      text: "Compare per-person tickets with a correctly sized road vehicle and confirm luggage capacity.",
    },
    {
      title: "Outside the city centre",
      text: "For a coastal or regional address, plan the actual rail/bus interchange rather than assuming a city-centre airport service goes there.",
    },
  ],
  tips: [
    "Choose A1 for Terminal 1 and A2 for Terminal 2.",
    "Check airport validity before using a metro pass at T1 or T2.",
    "Use the free terminal shuttle when your flight and selected transport require different terminals.",
  ],
  faqs: [
    {
      q: "Does L9 Sud serve both terminals?",
      a: "Yes. TMB lists Aeroport T1 and Aeroport T2 on L9 Sud.",
    },
    {
      q: "Does the airport metro go straight to Plaça Catalunya?",
      a: "No. Plan an interchange to the relevant central line; Aerobús offers a direct Plaça Catalunya route.",
    },
    {
      q: "Is T-casual valid at the airport metro stations?",
      a: "TMB states T-casual is not valid for access to Aeroport T1/T2 on L9 Sud. Use an airport-valid ticket or pass.",
    },
    {
      q: "Which Aerobús line should I use?",
      a: "A1 serves Terminal 1; A2 serves Terminal 2. Both connect with central Barcelona stops.",
    },
    {
      q: "Where are official taxis at T1?",
      a: "Aena places the official T1 taxi service on the ground floor, opposite arrivals. Follow current taxi signage.",
    },
    {
      q: "Can I book a Barcelona vehicle here?",
      a: "No. The existing form is a demo preview and does not confirm a vehicle, price or enquiry.",
    },
  ],
  sources: [
    {
      label: "Aena — Barcelona airport",
      url: base + ".html",
      scope: "Official airport name and transport network",
    },
    { label: "Aena — train", url: rail, scope: "R2 North route and official railway links" },
    {
      label: "Aena — taxis",
      url: taxi,
      scope: "Terminal ranks and black-and-yellow vehicle guidance",
    },
    { label: "Aena — terminal shuttle", url: shuttle, scope: "T1/T2 free shuttle" },
    {
      label: "TMB — airport metro",
      url: metro,
      scope: "L9 Sud stations, interchanges and ticket exclusions",
    },
    {
      label: "Aerobús — lines and stops",
      url: bus,
      scope: "A1/A2, Plaça Catalunya/Espanya and approximate 35-minute route",
    },
    {
      label: "Renfe — Barcelona Sants",
      url: "https://www.renfe.com/es/en/inspirate/estaciones/barcelona-sants",
      scope: "Sants rail connections",
    },
  ],
};
