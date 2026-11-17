import { PHOTOS } from "@/components/home/photos";
import { CHECKED, privateTransfer, type Airport } from "./types";
const rail = "https://www.ns.nl/en/travel/destinations/schiphol";
const transit = "https://www.schiphol.nl/en/from-to-schiphol/by-public-transport/";
const taxi = "https://www.schiphol.nl/en/from-to-schiphol/taxi/";
const arrivals = "https://www.schiphol.nl/en/blog/all-about-your-arrival-at-schiphol/";
const assistance = "https://www.schiphol.nl/en/assistance/request/";
export const amsterdam: Airport = {
  slug: "amsterdam-schiphol-airport-transfer",
  name: "Amsterdam Airport Schiphol",
  shortName: "Amsterdam Schiphol",
  code: "AMS",
  city: "Amsterdam",
  country: "Netherlands",
  location: "Schiphol, in Haarlemmermeer, southwest of Amsterdam",
  photo: PHOTOS["airport-ams"],
  website: "https://www.schiphol.nl/",
  checked: CHECKED,
  description:
    "Find the station below Schiphol Plaza, choose the right Amsterdam connection and understand the difference between rank taxis and app pickups.",
  terminals:
    "Schiphol’s terminal has numbered arrival and departure halls around Schiphol Plaza. Use your flight’s arrival hall and baggage belt rather than treating a hall number as a separate airport.",
  arrivals: [
    "Follow the yellow “Baggage Hall” signs from the pier. Flights arriving from outside the Schengen area may require passport control before baggage reclaim.",
    "The Schiphol app and information screens identify your baggage belt and arrival hall. Share the hall with anyone meeting you, rather than just your gate.",
    "After customs, follow signs to Schiphol Plaza for the station below the airport or ground transport outside. The official taxi rank and app pickup point are different locations.",
  ],
  connections:
    "NS trains beneath the terminal; buses outside Schiphol Plaza; official taxi rank and separately signed app pickups.",
  accessibility:
    "Request airport assistance through your airline, ideally when booking and at least 48 hours before departure. Schiphol also describes help from the train station, bus stop and taxi stand via assistance call points.",
  train: {
    title: "From Schiphol Plaza to Amsterdam Centraal",
    station:
      "Schiphol Airport station, directly beneath the airport and accessed from Schiphol Plaza.",
    paragraphs: [
      "NS publishes an approximately 17-minute Sprinter journey to Amsterdam Centraal via Lelylaan and Sloterdijk. Choose the destination shown on the platform displays rather than assuming every Amsterdam-bound train serves Centraal.",
      "NS describes frequent Sprinter departures on this route. Check the journey planner for your date, disruptions and the last connection; do not rely on a remembered platform number.",
      "Buy an NS ticket online or from a station ticket machine. For eligible contactless journeys, check in and out using the same bank card or phone; Schiphol uses check-in poles and Centraal uses gates.",
      "Keep bags out of doors and aisles and allow enough time to board together. For Amsterdam Zuid or other Dutch cities, use the NS planner to choose a different direct train or interchange.",
    ],
    url: rail,
  },
  taxi: {
    paragraphs: [
      "Schiphol’s official taxi stand is in front of Schiphol Plaza. Follow terminal taxi signs and floor stickers to the approved rank.",
      "Uber and Bolt use a separately signed app pickup point. A provider’s app instructions do not apply to a taxi from the public stand.",
      "Confirm destination, vehicle size and fare conditions before leaving. Avoid unsolicited offers away from the official rank; a private transfer also needs separately agreed pickup instructions.",
    ],
    url: taxi,
  },
  cityGuide:
    "The station beneath the airport makes rail especially convenient for central Amsterdam. Centraal is useful for the historic centre, while another station may be closer to a southern business address. Airport buses can suit nearby hotels and towns; check current stops because the airport reports bus-station renovation.",
  comparison: [
    privateTransfer(),
    {
      option: "Official local taxi",
      route: "Schiphol Plaza → Amsterdam address",
      time: "Check route; traffic dependent",
      fare: "Check operator fare",
      url: taxi,
      luggage: "Direct to address; confirm bag and passenger capacity",
      advantage: "Avoids the last station-to-hotel leg",
      limitation: "Road congestion and vehicle size matter",
    },
    {
      option: "NS Sprinter",
      route: "Schiphol Airport → Amsterdam Centraal",
      time: "About 17 minutes on the train",
      fare: "Check operator fare",
      url: rail,
      luggage: "Carry bags onto shared train",
      advantage: "Station directly below the terminal",
      limitation: "Hotel may still require a walk or another connection",
    },
    {
      option: "Airport-area bus",
      route: "Schiphol Plaza → local towns and hotels",
      time: "Check route timetable",
      fare: "Check operator fare",
      url: transit,
      luggage: "Shared bus; confirm space for bulky bags",
      advantage: "May stop closer to an airport-area address",
      limitation: "Stops may move during bus-station renovation",
    },
  ],
  routes: [
    {
      name: "Amsterdam Centraal",
      text: "NS Sprinter via Lelylaan and Sloterdijk; the published train journey is about 17 minutes.",
    },
    {
      name: "Leiden",
      text: "NS lists Leiden among the airport’s rail destinations. Select a train for your date.",
    },
    {
      name: "The Hague",
      text: "Compare NS station choices and the final connection to your address.",
    },
    {
      name: "Rotterdam",
      text: "Check the service type: NS notes an Intercity direct supplement between Schiphol and Rotterdam.",
    },
  ],
  scenarios: [
    {
      title: "Solo, light luggage",
      text: "A Sprinter to Centraal is convenient if your accommodation is near the station.",
    },
    {
      title: "Family with suitcases",
      text: "Rail can work well, but compare station walking and tram changes with a direct vehicle sized for all bags.",
    },
    {
      title: "Business traveller",
      text: "Use NS to compare Centraal with Amsterdam Zuid or your actual meeting address.",
    },
    {
      title: "Late evening arrival",
      text: "Check the departure board and destination-specific night itinerary; frequent daytime service is not a promise for every hour.",
    },
    {
      title: "Larger group",
      text: "Keep the group together at the station and compare individual tickets with a confirmed suitable vehicle.",
    },
    {
      title: "Outside Amsterdam",
      text: "Look at direct trains to Leiden, The Hague or Rotterdam before routing through the city centre.",
    },
  ],
  tips: [
    "Use your arrival hall and baggage belt to coordinate a meeting.",
    "Check in and out with the same contactless card or device.",
    "Review bus-stop changes before walking outside with luggage.",
  ],
  faqs: [
    {
      q: "Where is Schiphol’s train station?",
      a: "Schiphol Airport station is directly below the airport, reached from Schiphol Plaza.",
    },
    {
      q: "How long is the train to Amsterdam Centraal?",
      a: "NS gives about 17 minutes for the Sprinter via Lelylaan and Sloterdijk, excluding waiting and walking.",
    },
    {
      q: "Where is the official taxi stand?",
      a: "In front of Schiphol Plaza. Follow the taxi signs and floor stickers, not unsolicited offers.",
    },
    {
      q: "Is the app pickup the same as the taxi rank?",
      a: "No. The airport signs a separate app pickup point for Uber and Bolt.",
    },
    {
      q: "How do I find my baggage belt?",
      a: "Check the airport screens or Schiphol app, and follow the yellow Baggage Hall signs from your arrival pier.",
    },
    {
      q: "Can this site confirm a Schiphol driver?",
      a: "No. The form is a demo/enquiry preview only and does not send or confirm a booking.",
    },
  ],
  sources: [
    {
      label: "Schiphol — public transport",
      url: transit,
      scope: "Station, bus stops, renovation and contactless travel",
    },
    {
      label: "NS — Schiphol rail guide",
      url: rail,
      scope: "17-minute Sprinter, city routes, ticketing and station validation",
    },
    {
      label: "NS — luggage and Intercity direct",
      url: "https://www.ns.nl/en/travel/destinations/taking-the-train-to-the-airport",
      scope: "Luggage considerations and Rotterdam supplement",
    },
    {
      label: "Schiphol — taxi guidance",
      url: taxi,
      scope: "Official rank and separate app pickups",
    },
    {
      label: "Schiphol — arrivals",
      url: arrivals,
      scope: "Baggage Hall signs and arrival hall information",
    },
    {
      label: "Schiphol — assistance",
      url: assistance,
      scope: "Airline requests and assistance call points",
    },
  ],
};
