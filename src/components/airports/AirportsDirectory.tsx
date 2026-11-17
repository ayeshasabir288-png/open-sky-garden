import { useState } from "react";
import { Search, ArrowRight, Plane } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import { AIRPORTS, frankfurt } from "@/lib/airports";
import { filterAirports } from "@/lib/airports/types";
import { AirportCard, AirportFAQ, Breadcrumbs, PhotoCredit } from "./AirportParts";
const countries = [...new Set(AIRPORTS.map((a) => a.country))].sort();
export function AirportsDirectory() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("All countries");
  const results = filterAirports(AIRPORTS, query, country);
  const photo = frankfurt.photo;
  return (
    <>
      <SiteHeader homepage={false} />
      <main>
        <section className="relative isolate overflow-hidden bg-overlay text-navy-foreground">
          <img
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={800}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-overlay/90 via-overlay/70 to-overlay/30" />
          <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 sm:px-6 md:pt-32">
            <Breadcrumbs />
            <p className="mt-10 flex items-center gap-2 text-sm font-bold text-primary-bright">
              <Plane className="h-4 w-4" />
              European airport guides
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Airport Taxi Transfers Across Europe
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7">
              Explore terminals, compare trains, taxis and buses, and plan the journey beyond
              arrivals.
            </p>
            <Button asChild size="lg" className="mt-7 rounded-full">
              <a href="#airport-list">
                Find your airport <ArrowRight />
              </a>
            </Button>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PhotoCredit photo={photo} />
          <section id="airport-list" className="py-12 md:py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-primary">
                  Popular European airports
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-navy">Where are you arriving?</h2>
              </div>
              <p className="text-sm text-muted-foreground">Six airport-specific travel guides</p>
            </div>
            <div className="mt-8 grid gap-4 border-y border-border py-5 sm:grid-cols-[1fr_250px]">
              <div>
                <label htmlFor="airport-search" className="mb-2 block text-sm font-semibold">
                  Search airports
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-primary" />
                  <input
                    id="airport-search"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Airport, city or IATA code"
                    className="h-11 w-full rounded-lg border border-input bg-card pr-3 pl-10 text-sm focus-visible:outline-2 focus-visible:outline-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="airport-country" className="mb-2 block text-sm font-semibold">
                  Country
                </label>
                <select
                  id="airport-country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <option>All countries</option>
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <p role="status" className="mt-5 text-sm text-muted-foreground">
              {results.length} {results.length === 1 ? "airport" : "airports"}
            </p>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((a) => (
                <AirportCard key={a.code} airport={a} />
              ))}
            </div>
            {results.length === 0 && (
              <div className="py-12 text-center">
                <h3 className="text-xl font-bold">No matching airports</h3>
                <p className="mt-3 text-muted-foreground">Try a different city, code or country.</p>
                <Button
                  variant="outline"
                  className="mt-5"
                  onClick={() => {
                    setQuery("");
                    setCountry("All countries");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </section>
        </div>
        <section className="bg-pale py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Plan, compare, prepare</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy">Your transfer enquiry</h2>
              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                The enquiry interface is currently a demo. It creates a summary only and does not
                send an enquiry or confirm transport.
              </p>
            </div>
            <ol className="grid gap-6 sm:grid-cols-3">
              {[
                ["01", "Choose an airport", "Read its terminal and public transport guide."],
                [
                  "02",
                  "Compare your journey",
                  "Consider luggage, station changes and the final address.",
                ],
                [
                  "03",
                  "Preview your plan",
                  "Enter journey details on the airport page; no booking or payment is made.",
                ],
              ].map(([n, title, text]) => (
                <li key={n} className="border-t-2 border-primary-bright pt-4">
                  <p className="font-display text-2xl font-bold text-primary">{n}</p>
                  <h3 className="mt-3 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AirportFAQ
            faqs={[
              {
                q: "Which airports have a guide?",
                a: "Frankfurt, Amsterdam Schiphol, Paris Charles de Gaulle, Barcelona–El Prat, Rome Fiumicino and London Heathrow. Guide inclusion does not confirm private-transfer coverage.",
              },
              {
                q: "Are the airport photos authentic?",
                a: "The terminal photographs come from Wikimedia Commons. Photographer credits and licence links are shown with each image.",
              },
              {
                q: "Can I book or pay for a transfer here?",
                a: "No. Airport pages use the existing demo form to display a journey summary. It does not send an enquiry, reserve a driver or take payment.",
              },
              {
                q: "How should I compare transport?",
                a: "Compare the whole route to your address, including waiting, walking, terminal changes, luggage and the number of travellers—not only the fastest train segment.",
              },
              {
                q: "Are fares and timetables live?",
                a: "No. Each guide links to official airport and operator sources and identifies its verification date. Check your actual travel date before buying a ticket.",
              },
              {
                q: "Where can I find vehicle guidance?",
                a: "Each detailed guide includes the existing general fleet presentation. Airport-specific availability, vehicle models and capacity remain unconfirmed.",
              },
            ]}
          />
          <div className="py-8">
            <Button asChild variant="link" className="px-0">
              <Link to="/">
                Back to Europe Airport Taxi <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter homepage={false} />
    </>
  );
}
