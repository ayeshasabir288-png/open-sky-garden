import type { Photo } from "@/components/home/photos";
export type Source = { label: string; url: string; scope: string };
export type Transport = {
  option: string;
  route: string;
  time: string;
  fare: string;
  url: string;
  luggage: string;
  advantage: string;
  limitation: string;
};
export type Airport = {
  slug: string;
  name: string;
  shortName: string;
  code: string;
  city: string;
  country: string;
  location: string;
  photo: Photo;
  website: string;
  description: string;
  terminals: string;
  arrivals: string[];
  connections: string;
  accessibility: string;
  train: { title: string; station: string; paragraphs: string[]; url: string };
  taxi: { paragraphs: string[]; url: string };
  cityGuide: string;
  comparison: Transport[];
  routes: { name: string; text: string }[];
  scenarios: { title: string; text: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
  sources: Source[];
  checked: string;
};
export const CHECKED = "2026-11-17";
export const previewNotice =
  "Demo / enquiry preview only. This form shows your journey summary; it does not send an enquiry, reserve a driver, confirm availability or take payment.";
export function filterAirports(airports: Airport[], query: string, country: string) {
  const needle = query.trim().toLocaleLowerCase();
  return airports.filter(
    (a) =>
      (country === "All countries" || a.country === country) &&
      `${a.name} ${a.city} ${a.country} ${a.code}`.toLocaleLowerCase().includes(needle),
  );
}
export function privateTransfer(): Transport {
  return {
    option: "Prearranged private transfer",
    route: "Airport to a specified address",
    time: "Route and traffic dependent",
    fare: "Not quoted — booking not enabled",
    url: "#book",
    luggage: "Discuss bags, child seats and vehicle size before arranging",
    advantage: "A direct itinerary may avoid public transport changes",
    limitation:
      "Availability, price and pickup must be agreed with a provider; this site is a preview",
  };
}
