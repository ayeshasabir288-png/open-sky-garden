import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BusFront,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Plane,
  Search,
  TrainFront,
  X,
} from "lucide-react";
import { PhotoCredit } from "@/components/airports/AirportParts";
import { PHOTOS, type Photo } from "@/components/home/photos";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import { amsterdam, barcelona, frankfurt, heathrow, paris, rome } from "@/lib/airports";
import type { Airport } from "@/lib/airports/types";
import journeyIllustration from "@/assets/countries/countries-europe-journey-illustration.webp";

type CountryGuide = {
  airport: Airport;
  photo: Photo;
  description: string;
};

const COUNTRY_GUIDES: CountryGuide[] = [
  {
    airport: frankfurt,
    photo: frankfurt.photo,
    description:
      "Review Frankfurt’s terminal arrival notes, separate regional and long-distance rail stations, and the airport’s onward bus and taxi information.",
  },
  {
    airport: amsterdam,
    photo: PHOTOS["dest-netherlands"],
    description:
      "Start with Schiphol arrival guidance, then compare the airport’s rail, bus and official taxi information for your destination.",
  },
  {
    airport: paris,
    photo: PHOTOS["dest-france"],
    description:
      "Check Charles de Gaulle terminal guidance and compare current rail, bus and official taxi connections before you travel.",
  },
  {
    airport: barcelona,
    photo: PHOTOS["dest-spain"],
    description:
      "Use the Barcelona–El Prat guide to compare terminal details and the airport’s rail, metro, bus and taxi information.",
  },
  {
    airport: rome,
    photo: PHOTOS["dest-italy"],
    description:
      "Explore Fiumicino arrival details and compare the airport’s train, coach and official taxi information for onward travel.",
  },
  {
    airport: heathrow,
    photo: heathrow.photo,
    description:
      "Compare Heathrow terminal guidance with rail, Underground, bus, coach and black cab options for your London journey.",
  },
];

const HERO_PHOTO = PHOTOS["dest-germany"];

const TRANSPORT_OPTIONS = [
  {
    title: "Pre-arranged private transfer",
    icon: CarFront,
    detail:
      "A provider may agree a direct pickup and destination in advance. Confirm the total price, vehicle capacity, luggage, accessibility needs and any child-seat requirements with that provider.",
  },
  {
    title: "Local taxi",
    icon: MapPin,
    detail:
      "At an airport, follow its official taxi-rank guidance. Queueing, fare rules, payment methods and vehicle sizes vary by location; check the airport’s current instructions.",
  },
  {
    title: "Airport rail",
    icon: TrainFront,
    detail:
      "Rail can suit destinations close to a served station. Compare the complete route, changes, operating hours, step-free access and luggage arrangements.",
  },
  {
    title: "Public bus or coach",
    icon: BusFront,
    detail:
      "Check the route, stop locations, operating hours, accessibility and luggage rules with the airport or operator. Services and connections differ between airports.",
  },
];

const FAQS = [
  {
    question: "Which countries are included in this directory?",
    answer:
      "The directory links to guides for Frankfurt in Germany, Amsterdam Schiphol in the Netherlands, Paris Charles de Gaulle in France, Barcelona–El Prat in Spain, Rome Fiumicino in Italy and London Heathrow in the United Kingdom.",
  },
  {
    question: "Does each country guide cover every airport in that country?",
    answer:
      "No. Each link opens the guide for the named airport. The directory does not claim airport coverage throughout the rest of that country.",
  },
  {
    question: "Can I book an airport transfer on this website?",
    answer:
      "Online booking is not connected. The current form displays a demo journey summary; it does not send an enquiry, reserve a driver, confirm availability or take payment.",
  },
  {
    question: "How should I compare airport transport options?",
    answer:
      "Compare the full journey from arrivals to your address, including changes, walking, luggage, accessibility, group size, operating hours and current fares or prices.",
  },
  {
    question: "Where can I check current terminal and service information?",
    answer:
      "Use the airport’s official website and your airline’s flight information for current terminals and arrival details. Check the transport operator for current routes, timetables, accessibility and fares.",
  },
];

export function CountriesDirectory() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const results = useMemo(
    () =>
      COUNTRY_GUIDES.filter(({ airport }) =>
        `${airport.country} ${airport.name} ${airport.shortName} ${airport.city} ${airport.code}`
          .toLocaleLowerCase()
          .includes(normalizedQuery),
      ),
    [normalizedQuery],
  );

  return (
    <>
      <SiteHeader homepage={false} />
      <main id="main-content" tabIndex={-1}>
        <section className="relative isolate min-h-[34rem] overflow-hidden bg-overlay text-navy-foreground md:min-h-[38rem]">
          <img
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-overlay/90 via-overlay/65 to-overlay/25" />
          <div className="mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-4 pt-32 pb-12 sm:px-6 md:min-h-[38rem] md:pb-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-auto flex items-center gap-2 pt-4 text-sm text-navy-foreground/85"
            >
              <Link
                to="/"
                className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Countries</span>
            </nav>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-bright">
              <Plane aria-hidden="true" className="h-4 w-4" /> Plan your arrival across Europe
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              European Airport Transfer Guides by Country
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-navy-foreground/90 sm:text-lg sm:leading-8">
              Explore airport arrival information, compare onward transport options and follow
              official links for six European airport guides.
            </p>
            <a
              href="#explore-countries"
              className="mt-7 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-gradient-teal px-6 py-3 font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore the countries <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
          <PhotoCredit photo={HERO_PHOTO} />
        </div>

        <section
          id="explore-countries"
          aria-labelledby="countries-title"
          className="scroll-mt-24 py-14 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-7 border-b border-border pb-8 md:grid-cols-[1fr_minmax(18rem,0.65fr)] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Explore countries
                </p>
                <h2
                  id="countries-title"
                  className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
                >
                  Start with the country you’re arriving in
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  Each guide focuses on one airport and links to its official arrival and transport
                  information. Search by country, airport or IATA code.
                </p>
              </div>
              <div>
                <label
                  htmlFor="country-search"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Search country or airport
                </label>
                <div className="relative">
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute top-3.5 left-3 h-4 w-4 text-primary"
                  />
                  <input
                    id="country-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Try France, Heathrow or CDG"
                    aria-describedby="country-search-help country-results-count"
                    className="h-12 w-full rounded-xl border border-input bg-card pr-12 pl-10 text-sm shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear country search"
                      className="absolute top-1.5 right-1.5 grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-pale hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <X aria-hidden="true" className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <p id="country-search-help" className="mt-2 text-xs text-muted-foreground">
                  Search country, airport name, city or airport code.
                </p>
              </div>
            </div>

            <p
              id="country-results-count"
              role="status"
              aria-live="polite"
              className="mt-6 text-sm font-medium text-muted-foreground"
            >
              Showing {results.length} of {COUNTRY_GUIDES.length} country guides
            </p>

            {results.length ? (
              <ul className="mt-5 grid gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                {results.map(({ airport, photo, description }) => (
                  <li key={airport.code} className="min-w-0">
                    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-float motion-reduce:transform-none motion-reduce:transition-none">
                      <figure className="relative aspect-[4/3] overflow-hidden bg-pale">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-overlay/90 to-transparent px-5 pt-12 pb-4 text-sm font-semibold text-navy-foreground">
                          <span>{airport.country}</span>
                          <span className="rounded-full border border-navy-foreground/40 bg-overlay/35 px-3 py-1 text-xs tracking-wide">
                            {airport.code}
                          </span>
                        </figcaption>
                      </figure>
                      <PhotoCredit photo={photo} />
                      <div className="flex flex-1 flex-col p-5 pt-3 sm:p-6 sm:pt-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          {airport.name}
                        </p>
                        <h3 className="mt-2 font-display text-xl font-extrabold text-navy sm:text-2xl">
                          {airport.country}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4">
                          <Link
                            to="/airports/$slug/"
                            params={{ slug: airport.slug }}
                            aria-label={`Read the ${airport.name} (${airport.code}) airport guide`}
                            className="inline-flex min-h-10 items-center gap-2 rounded-md font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          >
                            Explore {airport.code} guide{" "}
                            <ArrowRight aria-hidden="true" className="h-4 w-4" />
                          </Link>
                          <a
                            href={airport.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit the official ${airport.name} website (opens in a new tab)`}
                            className="inline-flex min-h-10 items-center gap-1 rounded-md text-sm font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          >
                            Official airport <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-6 rounded-2xl border border-dashed border-border bg-card px-5 py-10 text-center">
                <MapPin aria-hidden="true" className="mx-auto h-6 w-6 text-primary" />
                <h3 className="mt-3 font-display text-lg font-bold text-navy">
                  No country guides match that search
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try a country, airport name or three-letter airport code.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full border border-input px-4 text-sm font-semibold text-navy hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Clear search <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        <section
          aria-labelledby="steps-title"
          className="border-y border-border bg-white py-14 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                A considered start
              </p>
              <h2
                id="steps-title"
                className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
              >
                Plan your airport journey in three steps
              </h2>
            </div>
            <ol className="mt-9 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
              <li className="py-6 md:pr-7 md:py-7">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  <span className="font-display text-2xl text-navy">01</span> Choose a country
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  Find the country that matches your arrival airport, then open its linked guide.
                </p>
              </li>
              <li className="py-6 md:px-7 md:py-7">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  <span className="font-display text-2xl text-navy">02</span> Check arrival details
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  Review terminal notes and compare the airport’s rail, bus, taxi and other
                  ground-transport guidance.
                </p>
              </li>
              <li className="py-6 md:pl-7 md:py-7">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  <span className="font-display text-2xl text-navy">03</span> Plan the onward trip
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
                  Compare the complete route to your destination and confirm changing details with
                  the relevant operator.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="transport-title" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Compare the whole trip
              </p>
              <h2
                id="transport-title"
                className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
              >
                Airport transport options across Europe
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                The useful choice depends on your address, group and travel date. Routes, access,
                luggage rules and fares vary by airport and operator, so check current details
                before setting out.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {TRANSPORT_OPTIONS.map(({ title, icon: Icon, detail }) => (
                <li
                  key={title}
                  className="grid gap-3 py-5 sm:grid-cols-[2.2rem_11rem_1fr] sm:items-start sm:gap-4"
                >
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 text-primary" />
                  <h3 className="font-display text-base font-bold text-navy">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="helpful-title" className="bg-pale py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Before you travel
              </p>
              <h2
                id="helpful-title"
                className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
              >
                Helpful airport arrival information
              </h2>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                <li className="flex gap-3 py-4">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    Confirm your terminal and arrival arrangements using your flight details and the
                    airport’s official information.
                  </p>
                </li>
                <li className="flex gap-3 py-4">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    Follow airport signs to the correct taxi rank, train station, bus or coach stop,
                    or your provider’s separately confirmed pickup point.
                  </p>
                </li>
                <li className="flex gap-3 py-4">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    For late arrivals, check service hours and the last departure. Arrange
                    accessibility assistance with the airport or transport operator responsible for
                    each part of the journey.
                  </p>
                </li>
                <li className="flex gap-3 py-4">
                  <Clock3 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted-foreground">
                    Schedules, terminal arrangements and road conditions can change. Recheck
                    official information close to your travel date.
                  </p>
                </li>
              </ul>
            </div>
            <aside
              className="rounded-[1.5rem] border border-border bg-card p-5 shadow-soft sm:p-7"
              aria-labelledby="airport-links-title"
            >
              <h3
                id="airport-links-title"
                className="font-display text-xl font-extrabold text-navy"
              >
                Open an airport guide
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Each guide links to the relevant airport’s official information.
              </p>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {COUNTRY_GUIDES.map(({ airport }) => (
                  <li key={airport.code}>
                    <Link
                      to="/airports/$slug/"
                      params={{ slug: airport.slug }}
                      className="flex min-h-12 items-center justify-between gap-3 py-2 text-sm font-semibold text-navy hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <span>
                        {airport.name}{" "}
                        <span className="font-normal text-muted-foreground">({airport.code})</span>
                      </span>
                      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Useful answers
              </p>
              <h2
                id="faq-title"
                className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl"
              >
                Airport guide questions
              </h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {FAQS.map(({ question, answer }) => (
                <details key={question} className="group py-4">
                  <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 rounded-sm font-display text-base font-bold text-navy hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                    {question}
                    <span
                      aria-hidden="true"
                      className="text-xl font-normal text-primary transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-3 pr-8 text-sm leading-6 text-muted-foreground">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="countries-cta-title" className="px-3 pb-14 sm:px-6 md:pb-20">
          <div className="relative isolate mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-navy text-navy-foreground shadow-float lg:grid-cols-[1fr_0.9fr]">
            <div className="relative z-10 flex flex-col items-start justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-bright">
                Your next step
              </p>
              <h2
                id="countries-cta-title"
                className="mt-3 max-w-xl font-display text-3xl font-extrabold leading-tight sm:text-4xl"
              >
                Plan with the right airport information
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-navy-foreground/80">
                Choose an airport guide or preview a journey on the homepage. Online booking is not
                connected: the form only displays a demo summary and sends no enquiry or
                reservation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/airports/"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-teal px-5 font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Browse airport guides <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
                <a
                  href="/#book"
                  className="inline-flex min-h-11 items-center rounded-full border border-navy-foreground/40 px-5 font-semibold text-navy-foreground hover:bg-navy-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  View demo enquiry form
                </a>
              </div>
            </div>
            <figure className="relative min-h-56 overflow-hidden border-t border-navy-foreground/10 lg:min-h-[25rem] lg:border-t-0 lg:border-l">
              <img
                src={journeyIllustration}
                alt="Illustration of a European journey combining several city and coastal scenes."
                width={1672}
                height={900}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <figcaption className="absolute right-4 bottom-4 rounded-full bg-overlay/75 px-3 py-1.5 text-xs font-medium text-navy-foreground backdrop-blur-sm">
                European journey illustration
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <SiteFooter homepage={false} />
    </>
  );
}
