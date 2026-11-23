import type { ReactNode } from "react";
import {
  ArrowRight,
  BusFront,
  Building2,
  CarFront,
  Globe,
  Hash,
  MapPin,
  Navigation,
  Plane,
  TrainFront,
  Accessibility,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/home/BookingForm";
import type { Photo } from "@/components/home/photos";
import sedan from "@/assets/fleet-business-sedan.jpg";
import type { Airport } from "@/lib/airports";
import { previewNotice } from "@/lib/airports/types";
import { DESTINATION_PHOTOS } from "@/lib/airports/destinations";
import { Breadcrumbs, OfficialLink, PhotoCredit } from "./AirportParts";
import { Bullets, Callout, Steps, galleryFor } from "./GuideBlocks";

const zoom =
  "h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105";

/** Full-width band that alternates background tone between sections. */
export function Band({
  id,
  tone = "white",
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  tone?: "white" | "pale" | "navy";
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  const bg =
    tone === "pale" ? "bg-pale" : tone === "navy" ? "bg-navy text-navy-foreground" : "bg-card";
  return (
    <section id={id} className={`${bg} py-14 md:py-20`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {eyebrow && (
          <p
            className={`text-xs font-bold uppercase tracking-[0.18em] ${tone === "navy" ? "text-primary-bright" : "text-primary"}`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-3 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-4xl ${tone === "navy" ? "" : "text-navy"}`}
        >
          {title}
        </h2>
        {intro && (
          <div
            className={`mt-4 max-w-2xl text-[15px] leading-7 ${tone === "navy" ? "text-navy-foreground/85" : "text-muted-foreground"}`}
          >
            {intro}
          </div>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Figure({
  photo,
  caption,
  ratio = "aspect-[4/3]",
}: {
  photo: Photo;
  caption?: string | undefined;
  ratio?: string;
}) {
  return (
    <figure>
      <div className={`group overflow-hidden rounded-2xl shadow-lg ${ratio}`}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={1000}
          height={750}
          loading="lazy"
          decoding="async"
          className={zoom}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm font-semibold text-navy">{caption}</figcaption>
      )}
      <PhotoCredit photo={photo} />
    </figure>
  );
}

/** Large alternating image-and-text row. */
export function Feature({
  photo,
  caption,
  reverse,
  icon: Icon,
  label,
  title,
  children,
}: {
  photo?: Photo | undefined;
  caption?: string | undefined;
  reverse?: boolean;
  icon: typeof Plane;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      {photo && (
        <div className={reverse ? "md:order-2" : undefined}>
          <Figure photo={photo} caption={caption} />
        </div>
      )}
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          <Icon className="h-4 w-4" />
          {label}
        </p>
        <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-navy">
          {title}
        </h3>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

export function PremiumHero({ airport: a }: { airport: Airport }) {
  return (
    <>
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-overlay text-navy-foreground md:min-h-[640px]">
        <img
          src={a.photo.src}
          alt={a.photo.alt}
          width={1200}
          height={800}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Lighter overlay: dark only where the text sits, so the terminal stays visible. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-overlay/85 via-overlay/35 to-overlay/10 md:bg-gradient-to-r md:from-overlay/80 md:via-overlay/40 md:to-transparent" />
        <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-12 sm:px-6 md:pb-16 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)]">
          <Breadcrumbs airport={a} />
          <p className="mt-10 inline-flex items-center gap-2 rounded-full bg-overlay/50 px-3 py-1 text-sm font-semibold backdrop-blur-sm">
            <Plane className="h-4 w-4 text-primary-bright" />
            {a.code} · {a.city}, {a.country}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl">
            {a.shortName} Airport Transfers ({a.code})
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-navy-foreground/95 sm:text-lg">
            {a.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#book">
                Plan a transfer <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-navy-foreground/60 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
            >
              <a href="#compare">Compare transport</a>
            </Button>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <PhotoCredit photo={a.photo} />
        <section className="relative z-10 py-8" aria-label="Transfer enquiry preview">
          <p className="mb-4 rounded-lg border border-border bg-pale p-4 text-sm leading-6 text-navy">
            {previewNotice}
          </p>
          <BookingForm />
        </section>
      </div>
    </>
  );
}

export function CompactFacts({ airport: a }: { airport: Airport }) {
  const rows: { icon: typeof Plane; label: string; value: ReactNode }[] = [
    { icon: Plane, label: "Airport", value: a.name },
    { icon: Hash, label: "IATA code", value: a.code },
    { icon: MapPin, label: "City served", value: `${a.city}, ${a.country}` },
    { icon: Navigation, label: "Location", value: a.location },
    { icon: Building2, label: "Terminals", value: a.terminals },
    { icon: TrainFront, label: "Rail access", value: a.train.station },
    { icon: BusFront, label: "Ground connections", value: a.connections },
    {
      icon: CarFront,
      label: "Taxi / private transfer",
      value:
        "Licensed taxis from official ranks; private transfers are arranged in advance with a provider.",
    },
    { icon: Accessibility, label: "Accessibility", value: a.accessibility },
  ];
  return (
    <Band id="facts" tone="pale" eyebrow="At a glance" title="Quick airport facts">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <dl className="grid md:grid-cols-2">
          {rows.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex gap-4 border-b border-border px-5 py-4 md:odd:border-r"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <dt className="text-xs font-bold uppercase tracking-wide text-navy">{label}</dt>
                <dd className="mt-1 break-words text-sm leading-6 text-muted-foreground">
                  {value}
                </dd>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4 px-5 py-4">
            <Globe className="h-5 w-5 shrink-0 text-primary" />
            <OfficialLink href={a.website}>
              {a.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </OfficialLink>
          </div>
        </dl>
      </div>
    </Band>
  );
}

export function InfoSections({ airport: a }: { airport: Airport }) {
  const [hall, rail] = galleryFor(a);
  return (
    <>
      <Band
        id="terminals"
        eyebrow="Terminals & arrivals"
        title="Airport terminals and arrivals"
        intro={a.terminals}
      >
        <Feature
          photo={hall}
          caption={hall?.caption}
          icon={Building2}
          label="After landing"
          title="From the gate to ground transport"
        >
          <Steps items={a.arrivals} />
        </Feature>
      </Band>
      <Band
        id="pickup"
        tone="pale"
        eyebrow="Pickup guidance"
        title="Airport taxi and private transfer information"
      >
        <Feature
          photo={a.photo}
          caption={`Outside ${a.shortName} Airport`}
          reverse
          icon={CarFront}
          label="Two different services"
          title="Taxi rank or prearranged pickup"
        >
          <div className="space-y-5 text-[15px] leading-7">
            <p>
              <strong className="text-navy">Local airport taxi.</strong> Taken from an authorised
              rank under local taxi rules.
            </p>
            <p>
              <strong className="text-navy">Private transfer.</strong> Arranged in advance with a
              provider, with the destination, vehicle requirements and pickup agreed before travel.
            </p>
            <p>
              Neither is universally better: rail may be faster for a station-connected address, and
              a road journey may avoid changes with luggage.
            </p>
            <Callout title="Booking is not live">
              Europe Airport Taxi’s booking engine is not live. This guide is travel information,
              not evidence of airport coverage or vehicle availability. The form only shows a demo
              summary; it sends nothing and confirms no driver, fare, waiting period or meeting
              point.
            </Callout>
          </div>
        </Feature>
      </Band>
      <Band
        id="trains"
        eyebrow="Rail connections"
        title="Train and metro services"
        intro={a.train.station}
      >
        <Feature
          photo={rail}
          caption={rail?.caption}
          icon={TrainFront}
          label="Rail guide"
          title={a.train.title}
        >
          <Bullets items={a.train.paragraphs} />
          <div className="mt-6">
            <OfficialLink href={a.train.url}>Official rail guidance</OfficialLink>
          </div>
        </Feature>
      </Band>
      <Band id="taxis" tone="pale" eyebrow="Road transport" title="Local taxi services">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-14">
          <div>
            <h3 className="flex items-center gap-3 font-display text-xl font-bold text-navy">
              <CarFront className="h-5 w-5 text-primary" />
              Use official, licensed transport
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{a.cityGuide}</p>
            <div className="mt-5">
              <OfficialLink href={a.taxi.url}>Official taxi guidance</OfficialLink>
            </div>
          </div>
          <Bullets items={a.taxi.paragraphs} />
        </div>
      </Band>
    </>
  );
}

export function TransportIntro({ airport: a }: { airport: Airport }) {
  const [, rail] = galleryFor(a);
  const cards: {
    title: string;
    text: string;
    icon: typeof Plane;
    photo?: Photo | undefined;
    note: string;
  }[] = [
    {
      title: "Private transfer",
      text: "Direct to a specified address, arranged in advance.",
      icon: CarFront,
      photo: { src: sedan, alt: "Black business sedan", credit: "", license: "", source: "" },
      note: "Illustrative vehicle — not photographed at this airport",
    },
    {
      title: "Local taxi",
      text: "Licensed taxis from the official airport rank.",
      icon: CarFront,
      photo: a.photo,
      note: `${a.shortName} terminal entrance`,
    },
    {
      title: "Train",
      text: "S-Bahn, regional and long-distance rail.",
      icon: TrainFront,
      photo: rail,
      note: rail?.caption ?? "",
    },
    {
      title: "Bus",
      text: "Local and regional public buses.",
      icon: BusFront,
      note: "No licensed airport bus photo available",
    },
  ];
  return (
    <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ title, text, icon: Icon, photo, note }) => (
        <article
          key={title}
          className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm motion-safe:transition-shadow hover:shadow-lg"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-pale">
            {photo ? (
              <img
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className={zoom}
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <Icon className="h-16 w-16 text-primary/60" strokeWidth={1.25} />
              </div>
            )}
            <span className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary shadow">
              <Icon className="h-4 w-4" />
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
            <p className="mt-3 text-xs text-muted-foreground">{note}</p>
            {photo?.credit ? <PhotoCredit photo={photo} /> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function DestinationCards({ airport: a }: { airport: Airport }) {
  const photos = DESTINATION_PHOTOS[a.code] ?? {};
  return (
    <Band
      id="routes"
      tone="pale"
      eyebrow="Popular destinations"
      title={`Popular routes from ${a.shortName}`}
      intro="Distances and driving times are not shown because they have not been verified from an official source. Check your exact address before travel."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {a.routes.map((r) => {
          const p = photos[r.name];
          return (
            <article
              key={r.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm motion-safe:transition-shadow hover:shadow-lg"
            >
              {p && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={900}
                    height={506}
                    loading="lazy"
                    decoding="async"
                    className={zoom}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay/70 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-2xl font-extrabold text-navy-foreground">
                    {r.name}
                  </h3>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                {!p && <h3 className="font-display text-xl font-bold text-navy">{r.name}</h3>}
                <p className="text-[15px] leading-7 text-muted-foreground">{r.text}</p>
                {p && <PhotoCredit photo={p} />}
                <Button asChild variant="outline" className="mt-5 self-start rounded-full">
                  <a href="#book">
                    Transfer enquiry preview <ArrowRight />
                  </a>
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </Band>
  );
}
