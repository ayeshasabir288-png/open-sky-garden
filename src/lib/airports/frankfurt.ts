import { PHOTOS } from "@/components/home/photos";
import { CHECKED, privateTransfer, type Airport } from "./types";
const rail =
  "https://www.frankfurt-airport.com/en/transport-and-parking/to-from-the-airport/travel-by-train.html";
const bus =
  "https://www.frankfurt-airport.com/en/transport-and-parking/to-from-the-airport/travel-by-bus.html";
const taxi =
  "https://www.frankfurt-airport.com/en/transport-and-parking/to-from-the-airport/travel-by-ride-hailing-car-sharing.html";
const terminal = "https://www.frankfurt-airport.com/en/flights-and-transfer/terminal-3.html";
export const frankfurt: Airport = {
  slug: "frankfurt-airport-transfer",
  name: "Frankfurt Airport",
  shortName: "Frankfurt",
  code: "FRA",
  city: "Frankfurt",
  country: "Germany",
  location: "Frankfurt am Main, southwest of the city centre",
  photo: PHOTOS["airport-fra"],
  website: "https://www.frankfurt-airport.com/",
  checked: CHECKED,
  description:
    "Navigate Frankfurt’s regional and long-distance stations, the new Terminal 3 and onward journeys across the Rhine–Main region.",
  terminals:
    "Terminal 1 and the operating Terminal 3. The airport reports that airlines previously in Terminal 2 have moved to Terminal 3; check your flight rather than relying on an older terminal guide.",
  arrivals: [
    "Confirm your arrival terminal on the airport flight information. Terminal 3 uses gates G, H and J; Terminal 1 and Terminal 3 are connected by the airport SkyLine.",
    "Collect checked luggage and complete any border or customs formalities before following ground-transport signs. At Terminal 3, allow additional time to reach the railway stations near Terminal 1.",
    "A public taxi rank is not automatically the meeting point for a prearranged car. Obtain the provider’s written terminal and pickup instructions; no Europe Airport Taxi meeting point is currently confirmed.",
  ],
  connections:
    "S8/S9 and regional trains, ICE/IC long-distance trains, local and long-distance buses, and airport taxis.",
  accessibility:
    "The airport rail guide identifies lifts and wheelchair-accessible routes at the regional station. Check the relevant platform and destination station, and arrange airport or railway assistance with the responsible operator.",
  train: {
    title: "Two stations, two different journeys",
    station:
      "Frankfurt (Main) Flughafen Regionalbahnhof at Terminal 1, Level 0; a separate Flughafen Fernbahnhof serves long-distance trains.",
    paragraphs: [
      "Follow “Train stations S T” for the regional station. S8 and S9 connect the airport with Frankfurt and onward Rhine–Main destinations; check direction and stopping pattern in the RMV planner.",
      "The long-distance station serves IC and ICE trains. Choose it for an intercity itinerary rather than assuming it is the city S-Bahn platform.",
      "From Terminal 3, use the SkyLine connection towards Terminal 1 and the stations. The airport estimates around 10–15 minutes for this connection; walking and waiting are additional.",
      "Buy regional tickets using RMV or authorised ticket machines; use Deutsche Bahn for long-distance tickets. Check your date for engineering work and the last useful connection, rather than relying on a fixed departure schedule.",
    ],
    url: rail,
  },
  taxi: {
    paragraphs: [
      "The airport confirms taxi services at the terminals and long-distance station. Follow airport taxi signage and ask staff if terminal arrangements are unclear during the transition to Terminal 3.",
      "Its published Frankfurt road-journey estimate is 20–30 minutes, depending on traffic. This is an indication for Frankfurt, not a guaranteed time to every hotel.",
      "Confirm the applicable fare and payment method before departure. Do not confuse app ride-hailing pickup areas with the taxi rank or a private-transfer meeting point.",
    ],
    url: taxi,
  },
  cityGuide:
    "For a central Frankfurt destination near the rail network, S8/S9 can avoid road congestion. A taxi is direct to an address; bus 61 is useful for Frankfurt Südbahnhof rather than the main station. Compare the complete journey, including the Terminal 3 connection and travel from your final station.",
  comparison: [
    privateTransfer(),
    {
      option: "Local airport taxi",
      route: "Airport → Frankfurt address",
      time: "About 20–30 minutes; traffic dependent",
      fare: "Check operator fare",
      url: taxi,
      luggage: "Direct loading; confirm vehicle capacity",
      advantage: "No change between trains or buses",
      limitation: "Traffic and address affect the journey and fare",
    },
    {
      option: "S-Bahn / regional train",
      route: "Regional station → Frankfurt and Rhine–Main region",
      time: "Check RMV journey planner",
      fare: "Check operator fare",
      url: "https://www.rmv.de/",
      luggage: "Carry bags through station and onto train",
      advantage: "Useful for station-connected city destinations",
      limitation: "Terminal 3 needs a connection to the station",
    },
    {
      option: "Local bus 61",
      route: "Airport → Frankfurt Südbahnhof",
      time: "Check current route timetable",
      fare: "Check operator fare",
      url: bus,
      luggage: "Shared public bus; keep aisles clear",
      advantage: "Useful for the south-station area",
      limitation: "Not a direct bus to Frankfurt Hauptbahnhof",
    },
  ],
  routes: [
    {
      name: "Frankfurt city centre",
      text: "Use the regional station for S8/S9, then plan the last leg to your hotel.",
    },
    {
      name: "Mainz",
      text: "S8 is the relevant S-Bahn route via Mainz Hauptbahnhof; check the current stopping pattern.",
    },
    {
      name: "Wiesbaden",
      text: "S8 and S9 appear in the RMV airport timetable; compare the route and destination station.",
    },
    {
      name: "Darmstadt",
      text: "The airport lists the AirLiner bus connection. Check the operator’s current stops and timetable.",
    },
  ],
  scenarios: [
    {
      title: "Solo, light luggage",
      text: "S8/S9 is a practical starting point for a hotel near Frankfurt’s rail network.",
    },
    {
      title: "Family with suitcases",
      text: "Compare the total group rail cost and terminal walking with a suitably sized road vehicle; confirm child seats separately.",
    },
    {
      title: "Business traveller",
      text: "For an intercity meeting, an ICE from the long-distance station may be more useful than travelling into Frankfurt first.",
    },
    {
      title: "Late evening arrival",
      text: "Check both the final train and the terminal connection. Airport guidance provides a shuttle outside SkyLine operating hours.",
    },
    {
      title: "Larger group",
      text: "Check luggage space before arranging a van. Rail avoids road congestion but requires everyone to manage station access.",
    },
    {
      title: "Outside the city centre",
      text: "Mainz, Wiesbaden and Darmstadt have their own connections; choose by your actual address, not just “Frankfurt”.",
    },
  ],
  tips: [
    "Do not follow an old Terminal 2 itinerary without checking your airline’s current terminal.",
    "Distinguish Regionalbahnhof from Fernbahnhof before buying a ticket.",
    "Allow for the Terminal 3 connection, baggage collection and walking before an onward train.",
  ],
  faqs: [
    {
      q: "Which Frankfurt terminals are operating?",
      a: "The current airport guide identifies Terminal 1 and the new Terminal 3, with former Terminal 2 airlines moved to Terminal 3. Confirm your flight’s terminal before travel.",
    },
    {
      q: "Where is the airport S-Bahn station?",
      a: "The regional station is beneath Terminal 1 at Level 0. Follow the train-station signs; Terminal 3 passengers need the airport connection.",
    },
    {
      q: "Is the ICE station the same as the regional station?",
      a: "No. Flughafen Fernbahnhof is the long-distance station; S-Bahn and regional services use Regionalbahnhof.",
    },
    {
      q: "Which bus goes to Frankfurt Südbahnhof?",
      a: "The airport lists bus 61 to Frankfurt Südbahnhof. Check the current timetable and stop before travelling.",
    },
    {
      q: "How long does a taxi to Frankfurt take?",
      a: "The airport gives around 20–30 minutes depending on traffic. Your terminal, address and road conditions can change the total.",
    },
    {
      q: "Can I book a Frankfurt transfer here?",
      a: "Not yet. The form provides a demo journey summary only; no enquiry is sent and no driver or fare is confirmed.",
    },
  ],
  sources: [
    {
      label: "Frankfurt Airport — rail connections",
      url: rail,
      scope: "Stations, S8/S9, regional and ICE/IC connections, lifts and Terminal 3 access",
    },
    {
      label: "Frankfurt Airport — Terminal 3",
      url: terminal,
      scope: "Current terminal migration and SkyLine connection",
    },
    {
      label: "Frankfurt Airport — buses",
      url: bus,
      scope: "Bus 61, 62, AirLiner and terminal bus connections",
    },
    {
      label: "Frankfurt Airport — taxis and road transport",
      url: taxi,
      scope: "Taxi availability and published Frankfurt journey estimate",
    },
    {
      label: "RMV — official transport planner",
      url: "https://www.rmv.de/",
      scope: "Current regional tickets and journey planning",
    },
  ],
};
