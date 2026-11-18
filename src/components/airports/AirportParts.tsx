import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MapPin, Plane, TrainFront, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/home/BookingForm";
import type { Photo } from "@/components/home/photos";
import { AIRPORTS, type Airport } from "@/lib/airports";
import { previewNotice } from "@/lib/airports/types";
import { Bullets, SplitMedia, galleryFor } from "./GuideBlocks";

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-border py-12 md:py-16">
      <span aria-hidden className="mb-4 block h-1 w-10 rounded-full bg-primary-bright" />
      <h2 className="mb-8 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
export function PhotoCredit({ photo }: { photo: Photo }) {
  return (
    <p className="mt-2 text-xs leading-5 text-muted-foreground">
      Photo:{" "}
      <a
        className="underline underline-offset-2 hover:text-primary"
        href={photo.source}
        target="_blank"
        rel="noreferrer"
      >
        {photo.credit} · {photo.license} · Wikimedia Commons
      </a>
    </p>
  );
}
export function OfficialLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className="inline-flex items-center gap-1 text-sm font-semibold text-primary underline underline-offset-4"
    >
      {children}
      <ExternalLink className="h-3 w-3 shrink-0" />
    </a>
  );
}
export function Breadcrumbs({ airport }: { airport?: Airport }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <span aria-hidden>/</span>
      {airport ? (
        <>
          <Link to="/airports/" className="hover:underline">
            Airports
          </Link>
          <span aria-hidden>/</span>
          <span aria-current="page">{airport.shortName}</span>
        </>
      ) : (
        <span aria-current="page">Airports</span>
      )}
    </nav>
  );
}
export function AirportHero({ airport }: { airport: Airport }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-overlay text-navy-foreground">
        <img
          src={airport.photo.src}
          alt={airport.photo.alt}
          width={1200}
          height={800}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-overlay/90 via-overlay/70 to-overlay/30" />
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-12 sm:px-6 md:pt-32 md:pb-16">
          <Breadcrumbs airport={airport} />
          <p className="mt-10 flex items-center gap-2 text-sm font-semibold text-primary-bright">
            <Plane className="h-4 w-4" />
            {airport.code} · {airport.city}, {airport.country}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            {airport.shortName} Airport Transfers ({airport.code})
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-navy-foreground/90 sm:text-lg">
            {airport.description}
          </p>
          <Button asChild size="lg" className="mt-7 rounded-full">
            <a href="#book">
              Plan a transfer <ArrowRight />
            </a>
          </Button>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PhotoCredit photo={airport.photo} />
        <section className="py-8" aria-label="Transfer enquiry preview">
          <p className="mb-4 rounded-lg border border-border bg-pale p-4 text-sm leading-6 text-navy">
            {previewNotice}
          </p>
          <BookingForm />
        </section>
      </div>
    </>
  );
}
export function AirportFacts({ airport: a }: { airport: Airport }) {
  const facts = [
    ["Official name", a.name],
    ["IATA code", a.code],
    ["City / country", `${a.city}, ${a.country}`],
    ["Location", a.location],
    ["Terminals", a.terminals],
    ["Ground connections", a.connections],
  ];
  return (
    <Section id="facts" title="Airport at a glance">
      <dl className="grid gap-x-8 sm:grid-cols-2">
        {facts.map(([name, value]) => (
          <div key={name} className="border-b border-border py-4">
            <dt className="text-xs font-bold uppercase text-primary">{name}</dt>
            <dd className="mt-2 text-[15px] leading-7">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6">
        <OfficialLink href={a.website}>Official airport website</OfficialLink>
        <p className="mt-4 flex gap-3 text-[15px] leading-7">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
          {a.accessibility}
        </p>
      </div>
    </Section>
  );
}
const columns = [
  ["route", "Typical route"],
  ["time", "Estimated journey time"],
  ["fare", "Verified fare / fare guidance"],
  ["luggage", "Luggage convenience"],
  ["advantage", "Main advantage"],
  ["limitation", "Main limitation"],
] as const;
export function TransportComparison({ airport: a }: { airport: Airport }) {
  return (
    <Section id="compare" title="Private Airport Transfer vs Local Taxi vs Train vs Bus">
      <p className="mb-6 text-[15px] leading-7 text-muted-foreground">
        Indicative journey times exclude baggage collection, waiting and walking unless stated.
        Traffic, terminal and final destination change the total. Published fares are in EUR (€) or
        GBP (£) as shown and were checked on {a.checked}; reconfirm before travel.
      </p>
      <div className="hidden lg:block">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full table-fixed text-left text-sm leading-6">
            <caption className="sr-only">Transport options at {a.name}</caption>
            <thead className="bg-pale text-xs uppercase tracking-wide text-navy">
              <tr>
                <th scope="col" className="w-[14%] p-3">
                  Transport option
                </th>
                {columns.map(([, label]) => (
                  <th scope="col" key={label} className="p-3 align-top">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {a.comparison.map((row) => (
                <tr key={row.option} className="border-t border-border even:bg-background">
                  <th scope="row" className="p-3 align-top font-bold text-navy">
                    {row.option}
                  </th>
                  {columns.map(([key]) => (
                    <td key={key} className="break-words p-3 align-top">
                      {row[key]}
                      {key === "fare" && (
                        <div className="mt-2">
                          <OfficialLink href={row.url}>
                            {row.url === "#book" ? "Enquiry preview" : "Official source"}
                          </OfficialLink>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid gap-4 lg:hidden">
        {a.comparison.map((row) => (
          <article key={row.option} className="rounded-xl border border-border bg-card p-5">
            <h3 className="border-b border-border pb-3 text-lg font-bold text-navy">
              {row.option}
            </h3>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {columns.map(([key, label]) => (
                <div key={key}>
                  <dt className="text-xs font-semibold text-primary">{label}</dt>
                  <dd className="mt-1 text-sm leading-6">{row[key]}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4">
              <OfficialLink href={row.url}>
                {row.url === "#book" ? "Enquiry preview" : "Official source / fares"}
              </OfficialLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
export function TrainGuide({ airport: a }: { airport: Airport }) {
  const rail = galleryFor(a)[1];
  return (
    <Section id="trains" title="Train and metro services">
      <h3 className="flex items-center gap-3 text-xl font-bold text-navy">
        <TrainFront className="h-5 w-5 text-primary" />
        {a.train.title}
      </h3>
      <p className="mt-4 rounded-lg bg-pale p-4 text-sm font-semibold leading-6">
        {a.train.station}
      </p>
      <div className="mt-6">
        <SplitMedia photo={rail} caption={rail?.caption} reverse>
          <Bullets items={a.train.paragraphs} />
          <div className="mt-6">
            <OfficialLink href={a.train.url}>Official rail guidance</OfficialLink>
          </div>
        </SplitMedia>
      </div>
    </Section>
  );
}
export function TaxiGuide({ airport: a }: { airport: Airport }) {
  return (
    <Section id="taxis" title="Local taxi services">
      <h3 className="flex items-center gap-3 text-lg font-bold text-navy">
        <CarFront className="h-5 w-5 text-primary" />
        Use official, licensed transport
      </h3>
      <div className="mt-6">
        <Bullets items={a.taxi.paragraphs} />
      </div>
      <div className="mt-5">
        <OfficialLink href={a.taxi.url}>Official taxi guidance</OfficialLink>
      </div>
    </Section>
  );
}
export function PopularRoutes({ airport: a }: { airport: Airport }) {
  return (
    <Section id="routes" title={`Popular routes from ${a.shortName}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        {a.routes.map((r) => (
          <article
            key={r.name}
            className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <h3 className="flex items-center gap-2 font-bold text-navy">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {r.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{r.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
export function AirportFAQ({ faqs }: { faqs: Airport["faqs"] }) {
  return (
    <Section id="faq" title="Helpful airport questions">
      <div className="divide-y divide-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer font-display font-bold text-navy focus-visible:outline-2 focus-visible:outline-ring">
              {f.q}
            </summary>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
export function AirportCard({ airport: a }: { airport: Airport }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={a.photo.src}
          alt={a.photo.alt}
          width={900}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-transparent to-transparent" />
        <p className="absolute inset-x-5 bottom-4 text-sm font-semibold leading-6 text-navy-foreground">
          Welcome to {a.shortName} Airport
        </p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase text-primary">
          {a.code} · {a.country}
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-navy">{a.shortName}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {a.city}, {a.country}
        </p>
        <PhotoCredit photo={a.photo} />
        <Button asChild variant="link" className="mt-auto justify-start px-0 pt-4">
          <Link to="/airports/$slug/" params={{ slug: a.slug }}>
            Airport transfer guide <ArrowRight />
          </Link>
        </Button>
      </div>
    </article>
  );
}
export function RelatedAirports({ airport: a }: { airport: Airport }) {
  return (
    <section className="bg-pale py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-navy">Explore other European airports</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AIRPORTS.filter((b) => b.slug !== a.slug)
            .slice(0, 3)
            .map((b) => (
              <AirportCard key={b.code} airport={b} />
            ))}
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/airports/">
            All airport guides <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
