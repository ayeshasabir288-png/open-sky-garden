import { PHOTOS } from "@/components/home/photos";
import { CHECKED, privateTransfer, type Airport } from "./types";
const city = "https://www.heathrow.com/transport-and-directions/getting-to-central-london";
const rail = "https://www.heathrow.com/transport-and-directions/by-rail-or-train/elizabeth-line";
const faq = "https://www.heathrow.com/customer-support/faq/travelling-to-and-from-heathrow-faqs";
const terminals = "https://www.heathrow.com/at-the-airport/airport-maps/travel-between-terminals";
const access =
  "https://www.heathrow.com/at-the-airport/assistance-and-accessibility/accessible-travel";
export const heathrow: Airport = {
  slug: "london-heathrow-airport-transfer",
  name: "London Heathrow Airport",
  shortName: "London Heathrow",
  code: "LHR",
  city: "London",
  country: "United Kingdom",
  location: "Heathrow, west of central London",
  photo: PHOTOS["airport-lhr"],
  website: "https://www.heathrow.com/",
  checked: CHECKED,
  description:
    "Choose between Heathrow Express, the Elizabeth line, the Piccadilly line and road transport for the London address you actually need.",
  terminals:
    "Four operating terminals: 2, 3, 4 and 5. Terminals 2 and 3 share rail stations; Terminals 4 and 5 each have their own stations.",
  arrivals: [
    "Confirm Terminal 2, 3, 4 or 5 from your flight information. Collect checked baggage and complete border and customs checks before going to ground transport.",
    "Follow the signs for the chosen train or bus service. Terminal 2/3 rail access uses pedestrian subways; T4 and T5 have stations within their terminal buildings.",
    "Heathrow describes black cabs outside the terminals and pre-booked minicabs as separate options. Obtain the precise pickup instructions from a pre-booked provider; no Europe Airport Taxi terminal meeting point is confirmed.",
  ],
  connections:
    "Heathrow Express, Elizabeth line, Piccadilly line, local buses, intercity coaches and licensed black cabs.",
  accessibility:
    "Heathrow publishes assistance guidance for trains, Underground, buses and taxis. Request airport assistance through your airline in advance and check the destination station’s accessible route; airport assistance does not automatically cover an onward journey.",
  train: {
    title: "Three rail choices, different London destinations",
    station: "Heathrow Terminals 2 & 3, Heathrow Terminal 4 and Heathrow Terminal 5 stations.",
    paragraphs: [
      "Heathrow Express is the non-stop Paddington option. Heathrow quotes 15 minutes from Terminals 2/3, with extra time from Terminal 5. Terminal 4 passengers should check the operator’s terminal connection before travelling.",
      "The Elizabeth line serves all three airport rail stations and continues across central London. It can avoid a change for destinations near Bond Street, Tottenham Court Road, Farringdon or Liverpool Street; check the actual train and destination.",
      "The Piccadilly line serves the airport’s Underground stations. Heathrow describes it as the lowest-cost rail choice, but it can take longer and luggage may be harder to manage on a busy Tube train.",
      "T2/3 railway station is between the terminals via a pedestrian subway; T4 is below Arrivals and T5 in the basement. Use the current TfL or train-operator planner for fares, engineering work, first/last services and step-free access.",
    ],
    url: rail,
  },
  taxi: {
    paragraphs: [
      "Heathrow confirms black cabs outside each terminal and pre-booked minicabs as an alternative. Follow the taxi signs to the terminal queue rather than accepting an unsolicited approach.",
      "A black cab journey is traffic- and destination-dependent. Confirm the fare basis, luggage requirements and any applicable charges; no Heathrow private-transfer fare is published by this site.",
      "Pre-booked minicabs need a prior arrangement and their own meeting instructions. Do not assume a forecourt, public cab rank or a particular car-park level is your pickup point.",
    ],
    url: faq,
  },
  cityGuide:
    "Paddington-bound passengers can compare the fast Heathrow Express with the Elizabeth line. The Elizabeth line continues through central London, while the Piccadilly line can suit a lower-budget Underground itinerary. Coaches link to Victoria Coach Station and other UK destinations. A direct vehicle avoids station changes, but London traffic may outweigh that advantage.",
  comparison: [
    privateTransfer(),
    {
      option: "Licensed black cab",
      route: "Terminal taxi queue → London address",
      time: "Address and traffic dependent",
      fare: "Check operator fare",
      url: faq,
      luggage: "Direct loading; confirm passenger and bag capacity",
      advantage: "Door-to-door journey without rail changes",
      limitation: "Road conditions and fare charges affect cost and time",
    },
    {
      option: "Heathrow Express",
      route: "Heathrow Central (T2/3) → Paddington",
      time: "15 minutes onboard; other terminals add time",
      fare: "Check operator fare (GBP)",
      url: city,
      luggage: "Airport train; manage station-to-address leg",
      advantage: "Non-stop Paddington connection",
      limitation: "A different London district may still need a change",
    },
    {
      option: "Elizabeth line",
      route: "Airport stations → central London and beyond",
      time: "Under 45 minutes to central London in airport guidance; station dependent",
      fare: "Check operator fare (GBP)",
      url: rail,
      luggage: "Shared train; check accessibility at final station",
      advantage: "Direct access to several central districts",
      limitation: "Destination, terminal and stopping pattern matter",
    },
    {
      option: "Piccadilly line",
      route: "Airport Underground → London Tube network",
      time: "Around an hour or less to central areas; destination dependent",
      fare: "Check operator fare (GBP)",
      url: "https://tfl.gov.uk/",
      luggage: "Busy Tube trains and onward stairs may complicate bags",
      advantage: "Heathrow’s lowest-cost rail option",
      limitation: "Longer journey and station access vary",
    },
    {
      option: "Coach",
      route: "Heathrow → Victoria Coach Station / UK destinations",
      time: "Check operator timetable; traffic dependent",
      fare: "Check operator fare (GBP)",
      url: city,
      luggage: "Check carrier baggage allowance",
      advantage: "Useful for an onward intercity journey",
      limitation: "Terminal stops, tickets and travel time vary",
    },
  ],
  routes: [
    {
      name: "London Paddington",
      text: "Heathrow Express is non-stop from Heathrow Central; Elizabeth line is another option.",
    },
    {
      name: "Farringdon / Liverpool Street",
      text: "Elizabeth line serves these central London stations. Check your hotel’s last leg.",
    },
    {
      name: "Victoria Coach Station",
      text: "Heathrow lists coach connections; confirm the operator’s terminal stop and current ticket.",
    },
    {
      name: "Kingston / Richmond",
      text: "Heathrow lists local bus routes to these areas. Use the route planner for your terminal and destination.",
    },
  ],
  scenarios: [
    {
      title: "Solo, light luggage",
      text: "Compare Piccadilly line value with the Elizabeth line’s more direct central stations.",
    },
    {
      title: "Family with suitcases",
      text: "A direct Elizabeth line journey may work well; multiple Underground changes can make a suitable road vehicle more practical.",
    },
    {
      title: "Business traveller",
      text: "Paddington may suit Heathrow Express, while Farringdon or Liverpool Street may favour the Elizabeth line.",
    },
    {
      title: "Late evening arrival",
      text: "Check TfL and the operator’s final service for your terminal; do not assume every rail line runs through the night.",
    },
    {
      title: "Larger group",
      text: "Compare individual rail tickets with the actual capacity and confirmed fare of a road vehicle.",
    },
    {
      title: "Outside central London",
      text: "Check an intercity coach or rail itinerary before adding an unnecessary trip through central London.",
    },
  ],
  tips: [
    "Keep the terminal number in all transport plans.",
    "Compare the final London station, not just the fastest airport train segment.",
    "Check TfL engineering work and step-free station access before travel.",
  ],
  faqs: [
    {
      q: "How fast is Heathrow Express?",
      a: "Heathrow quotes 15 minutes from Terminals 2/3 to Paddington, with extra time from Terminal 5 and a separate connection to consider from T4.",
    },
    {
      q: "Does the Elizabeth line serve all terminals?",
      a: "It serves the shared T2/3 station and separate T4 and T5 stations.",
    },
    {
      q: "Where is the T2/3 railway station?",
      a: "Between Terminals 2 and 3, connected by pedestrian subways a few minutes from each terminal.",
    },
    {
      q: "Which rail choice is usually cheapest?",
      a: "Heathrow describes the Piccadilly line as the lowest-cost rail option. Compare the current TfL fare for your full itinerary.",
    },
    {
      q: "Are there taxis outside arrivals?",
      a: "Heathrow confirms black cabs outside each terminal. Follow official taxi signs; pre-booked minicabs have separate instructions.",
    },
    {
      q: "Where do local buses leave?",
      a: "Many use the Central Bus Station near T2/3; some routes serve T4 or T5. Check the route-specific stop.",
    },
    {
      q: "Can I reserve a Heathrow car on this site?",
      a: "Not yet. The form is a demo/enquiry preview only and sends no booking request.",
    },
  ],
  sources: [
    {
      label: "Heathrow — central London options",
      url: city,
      scope: "Express, Underground, Elizabeth line and coach journey guidance",
    },
    {
      label: "Heathrow — Elizabeth line",
      url: rail,
      scope: "Terminal station locations and central connections",
    },
    {
      label: "Heathrow — transport FAQ",
      url: faq,
      scope: "Black cab / minicab arrangements and comparative rail guidance",
    },
    { label: "Heathrow — terminal transfers", url: terminals, scope: "Four-terminal layout" },
    {
      label: "Heathrow — accessible travel",
      url: access,
      scope: "Transport assistance considerations",
    },
    {
      label: "Heathrow — local buses",
      url: "https://www.heathrow.com/transport-and-directions/by-coach-or-bus/local-buses",
      scope: "Central Bus Station, Kingston and Richmond routes",
    },
    {
      label: "TfL — journey and fare planning",
      url: "https://tfl.gov.uk/",
      scope: "Current transport fares and accessible itineraries",
    },
  ],
};
