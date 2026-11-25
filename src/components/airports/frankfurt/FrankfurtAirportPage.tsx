import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  ArrowUpRight,
  BusFront,
  Building2,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  Globe2,
  Info,
  Luggage,
  MapPin,
  Navigation,
  Plane,
  ShieldCheck,
  TrainFront,
} from "lucide-react";

import heroAirport from "@/assets/hero-slide-sedan-airport.jpg";
import fraHeroPanorama from "@/assets/frankfurt/fra-hero-terminal.jpg";
import fraTaxiMunich from "@/assets/frankfurt/fra-taxi-munich.jpg";
import fraBusAirliner from "@/assets/frankfurt/fra-bus-airliner.jpg";
import privateCar from "@/assets/fleet-business-sedan.jpg";
import { BookingForm } from "@/components/home/BookingForm";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import type { Photo } from "@/components/home/photos";
import { Breadcrumbs, OfficialLink, PhotoCredit } from "@/components/airports/AirportParts";
import { galleryFor } from "@/components/airports/GuideBlocks";
import { Button } from "@/components/ui/button";
import { AIRPORTS, type Airport } from "@/lib/airports";
import { DESTINATION_PHOTOS } from "@/lib/airports/destinations";
import { previewNotice, type Transport } from "@/lib/airports/types";
import { cn } from "@/lib/utils";

const contents = [
  ["facts", "Quick facts"],
  ["terminals", "Terminals"],
  ["pickup", "Pickup & drop-off"],
  ["compare", "Compare transport"],
  ["trains", "Trains"],
  ["taxis", "Taxis"],
  ["routes", "Destinations"],
  ["gallery", "Photos"],
  ["faq", "Questions"],
] as const;

type LicensedPhoto = Photo & {
  licenseUrl: string;
  changes: string;
  creditLine?: string;
  homepageUrl?: string;
};

const heroPanoramaPhoto: LicensedPhoto = {
  src: fraHeroPanorama,
  alt: "Elevated view of Frankfurt Airport Terminal 1, runways and aircraft aprons",
  credit: "Arne Müseler / arne-mueseler.com",
  license: "CC BY-SA 3.0",
  source: "https://commons.wikimedia.org/wiki/File:Germany_frankfurt_airport_terminal-1.JPG",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.de",
  changes: "Resized from the original",
  creditLine: "Photo/Map: Arne Müseler / arne-mueseler.com / CC-BY-SA-3.0",
  homepageUrl: "https://arne-mueseler.com",
};

const taxiIllustrationPhoto: LicensedPhoto = {
  src: fraTaxiMunich,
  alt: "Mercedes taxis waiting at a rank outside Munich Airport Terminal 1",
  credit: "Bene16",
  license: "CC BY-SA 3.0",
  source: "https://commons.wikimedia.org/wiki/File:Almost_Mercedes-Taxis_at_Raetia-Secunda12.jpg",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
  changes: "Resized from the original",
};

const busIllustrationPhoto: LicensedPhoto = {
  src: fraBusAirliner,
  alt: "Airliner coach used for the Darmstadt to Frankfurt Airport service",
  credit: "Erkaha",
  license: "CC BY-SA 4.0",
  source: "https://commons.wikimedia.org/wiki/File:Airliner-Bus-Darmstadt.jpg",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  changes: "Resized from the original",
};

const destinationLabels: Record<string, string> = {
  "Frankfurt city centre": "Skyline & river Main",
  Mainz: "Cathedral & old town",
  Wiesbaden: "Kurhaus façade",
  Darmstadt: "Mathildenhöhe",
};

type TransportCardItem = {
  title: string;
  label: string;
  text: string;
  image: string;
  alt: string;
  note: string;
  href: string;
  cta: string;
  icon: typeof CarFront;
  photo?: Photo | LicensedPhoto | undefined;
};

function sourceUrl(airport: Airport, fragment: string) {
  return (
    airport.sources.find((source) => source.label.toLowerCase().includes(fragment))?.url ??
    airport.website
  );
}

function photoCaption(photo: Photo): string | undefined {
  return "caption" in photo && typeof photo.caption === "string" ? photo.caption : undefined;
}

function isLicensedPhoto(photo: Photo): photo is LicensedPhoto {
  return "licenseUrl" in photo && "changes" in photo;
}

function HeroPhotoCredit({ photo }: { photo: LicensedPhoto }) {
  return (
    <p className="w-fit max-w-full rounded-lg bg-navy/70 px-3 py-1.5 text-[11px] leading-5 text-navy-foreground/90 backdrop-blur">
      <a
        className="underline underline-offset-2 hover:text-primary-bright"
        href={photo.licenseUrl}
        target="_blank"
        rel="noreferrer"
      >
        {photo.creditLine ?? `${photo.credit} · ${photo.license}`}
      </a>{" "}
      ·{" "}
      <a
        className="underline underline-offset-2 hover:text-primary-bright"
        href={photo.source}
        target="_blank"
        rel="noreferrer"
      >
        Original on Wikimedia Commons
      </a>{" "}
      · {photo.changes}
      {photo.homepageUrl && (
        <>
          {" "}
          ·{" "}
          <a
            className="underline underline-offset-2 hover:text-primary-bright"
            href={photo.homepageUrl}
            target="_blank"
            rel="noreferrer"
          >
            Photographer's website
          </a>
        </>
      )}
    </p>
  );
}

function LicensedPhotoCredit({ photo }: { photo: LicensedPhoto }) {
  return (
    <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
      Photo:{" "}
      <a
        className="underline underline-offset-2 hover:text-primary"
        href={photo.source}
        target="_blank"
        rel="noreferrer"
      >
        {photo.credit}
      </a>{" "}
      ·{" "}
      <a
        className="underline underline-offset-2 hover:text-primary"
        href={photo.licenseUrl}
        target="_blank"
        rel="noreferrer"
      >
        {photo.license}
      </a>{" "}
      · Wikimedia Commons · {photo.changes}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description?: ReactNode | undefined;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p
        className={cn(
          "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
          light ? "text-primary-bright" : "text-primary",
          center && "justify-center",
        )}
      >
        <span aria-hidden className="h-px w-7 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl",
          light ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      {description && (
        <div
          className={cn(
            "mt-3 text-base leading-7 sm:text-lg",
            light ? "text-navy-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
}

function PhotoFrame({
  photo,
  caption,
  ratio = "aspect-[4/3]",
  eager = false,
  onDark = false,
}: {
  photo: Photo;
  caption?: string | undefined;
  ratio?: string | undefined;
  eager?: boolean | undefined;
  onDark?: boolean | undefined;
}) {
  return (
    <figure>
      <div className={cn("group relative overflow-hidden rounded-[1.75rem] shadow-float", ratio)}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={1200}
          height={900}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "low"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay/65 via-transparent to-transparent" />
        {caption && (
          <p className="absolute bottom-5 left-6 right-6 font-display text-lg font-bold text-navy-foreground [text-shadow:0_1px_10px_rgb(0_0_0/0.45)] sm:text-xl">
            {caption}
          </p>
        )}
      </div>
      <div className={cn("mt-3", onDark && "inline-block rounded-lg bg-card/90 px-2 py-1")}>
        <PhotoCredit photo={photo} />
      </div>
    </figure>
  );
}

function EditorialRow({
  photo,
  caption,
  reverse = false,
  icon: Icon,
  eyebrow,
  title,
  children,
}: {
  photo: Photo;
  caption?: string | undefined;
  reverse?: boolean | undefined;
  icon: typeof Plane;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 grid items-center gap-7 lg:mt-8 lg:grid-cols-2 lg:gap-10">
      <div className={cn(reverse && "lg:order-2")}>
        <PhotoFrame photo={photo} caption={caption} ratio="aspect-[5/4]" />
      </div>
      <div className={cn("min-w-0", reverse && "lg:order-1")}>
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          <Icon className="h-4 w-4" />
          {eyebrow}
        </p>
        <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
          {title}
        </h3>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

function PickupPanel({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof CarFront;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-t border-primary-bright/45 pt-6">
      <Icon className="h-7 w-7 text-primary-bright" />
      <h3 className="mt-4 font-display text-xl font-bold text-navy-foreground">{title}</h3>
      <div className="mt-3 text-base leading-7 text-navy-foreground/85">{children}</div>
    </div>
  );
}

function TransportCard({ item }: { item: TransportCardItem }) {
  const Icon = item.icon;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-float">
      <div className="relative aspect-[16/10] overflow-hidden bg-pale">
        <img
          src={item.image}
          alt={item.alt}
          width={800}
          height={500}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-overlay/5 to-transparent" />
        <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-card/95 text-primary shadow-soft">
          <Icon className="h-4 w-4" />
        </span>
        <span className="absolute right-3 top-3 max-w-[72%] rounded-full bg-card/95 px-2.5 py-1 text-center text-[10px] font-bold uppercase leading-4 tracking-wide text-navy shadow-soft">
          {item.label}
        </span>
        <h3 className="absolute inset-x-4 bottom-3 font-display text-lg font-extrabold leading-tight text-navy-foreground sm:text-xl">
          {item.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[15px] leading-6 text-muted-foreground">{item.text}</p>
        <p className="mt-1.5 text-xs leading-5 font-medium text-navy/75">{item.note}</p>
        {item.photo && (
          <div className="mt-1.5">
            {isLicensedPhoto(item.photo) ? (
              <LicensedPhotoCredit photo={item.photo} />
            ) : (
              <PhotoCredit photo={item.photo} />
            )}
          </div>
        )}
        <div className="mt-auto pt-3">
          <OfficialLink href={item.href}>{item.cta}</OfficialLink>
        </div>
      </div>
    </article>
  );
}

const comparisonColumns: { key: Exclude<keyof Transport, "url">; label: string; width: string }[] =
  [
    { key: "option", label: "Option", width: "w-[15%]" },
    { key: "route", label: "Typical route", width: "w-[17%]" },
    { key: "time", label: "Time", width: "w-[14%]" },
    { key: "fare", label: "Fare", width: "w-[13%]" },
    { key: "luggage", label: "Luggage", width: "w-[15%]" },
    { key: "advantage", label: "Advantage", width: "w-[13%]" },
    { key: "limitation", label: "Trade-off", width: "w-[13%]" },
  ];

function ComparisonTable({ airport }: { airport: Airport }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft lg:block">
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Transport options from {airport.name}</caption>
          <thead className="bg-pale">
            <tr>
              <th scope="col" className="p-4 text-sm font-bold uppercase tracking-wide text-navy">
                Transport option
              </th>
              {comparisonColumns.slice(1).map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={cn(
                    "p-4 text-sm font-bold uppercase tracking-wide text-navy",
                    column.width,
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {airport.comparison.map((row) => (
              <tr key={row.option} className="border-t border-border even:bg-background/70">
                <th
                  scope="row"
                  className="p-4 align-top font-display text-base font-bold text-navy"
                >
                  {row.option}
                </th>
                {comparisonColumns.slice(1).map((column) => (
                  <td key={column.key} className="p-4 align-top text-[15px] leading-7 text-navy/80">
                    {row[column.key]}
                    {column.key === "fare" && (
                      <div className="mt-3">
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

      <div className="grid gap-5 lg:hidden">
        {airport.comparison.map((row) => (
          <article
            key={row.option}
            className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm"
          >
            <h3 className="font-display text-xl font-extrabold text-navy">{row.option}</h3>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              {comparisonColumns.map((column) => (
                <div key={column.key}>
                  <dt className="text-sm font-bold uppercase tracking-wide text-primary">
                    {column.label}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-navy/80">{row[column.key]}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 border-t border-border pt-4">
              <OfficialLink href={row.url}>
                {row.url === "#book" ? "Enquiry preview" : "Official source"}
              </OfficialLink>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function DecisionRow({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <div className="flex gap-5 border-t border-navy-foreground/15 pt-6">
      <span className="font-display text-2xl font-extrabold text-primary-bright/75">
        {String(index).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-navy-foreground">{title}</h3>
        <p className="mt-2 text-base leading-7 text-navy-foreground/85">{text}</p>
      </div>
    </div>
  );
}

function RouteCard({
  route,
  photo,
  photoLabel,
  wide = false,
}: {
  route: Airport["routes"][number];
  photo?: Photo | undefined;
  photoLabel?: string | undefined;
  wide?: boolean | undefined;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-float",
        wide ? "lg:col-span-7" : "lg:col-span-5",
      )}
    >
      {photo && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-overlay/10 to-transparent" />
          {photoLabel && (
            <span className="absolute left-5 top-5 rounded-full bg-card/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-navy shadow-soft sm:text-[11px]">
              {photoLabel}
            </span>
          )}
          <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl font-extrabold text-navy-foreground sm:text-3xl">
            {route.name}
          </h3>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {!photo && <h3 className="font-display text-2xl font-extrabold text-navy">{route.name}</h3>}
        <p className="mt-2 text-base leading-7 text-muted-foreground">{route.text}</p>
        {photo && (
          <div className="mt-2">
            <PhotoCredit photo={photo} />
          </div>
        )}
        <Button asChild variant="outline" className="mt-4 self-start rounded-full">
          <a href="#book">
            Enquiry preview <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </article>
  );
}

function FaqList({ faqs }: { faqs: Airport["faqs"] }) {
  return (
    <div className="divide-y divide-border rounded-[2rem] bg-card px-5 shadow-soft sm:px-8">
      {faqs.map((faq) => (
        <details key={faq.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-navy marker:content-none focus-visible:outline-2 focus-visible:outline-ring sm:text-xl">
            {faq.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <p className="mt-4 max-w-3xl text-base leading-8 text-navy/80">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FrankfurtAirportPage({ airport: a }: { airport: Airport }) {
  const [hall, rail] = galleryFor(a);
  const terminalPhoto = hall ?? a.photo;
  const railPhoto = rail ?? hall ?? a.photo;
  const destinationPhotos = DESTINATION_PHOTOS[a.code] ?? {};
  const terminalUrl = sourceUrl(a, "terminal 3");
  const busUrl = a.comparison.find((row) => row.option === "Local bus 61")?.url ?? a.website;

  const transportCards: TransportCardItem[] = [
    {
      title: "Private transfer",
      label: "Pre-booked car",
      text: "A direct journey to a specified address, arranged in advance with the destination and pickup agreed first.",
      image: privateCar,
      alt: "Black executive sedan ready for an airport transfer",
      note: "Illustrative vehicle — not photographed at Frankfurt Airport",
      href: "#book",
      cta: "Open the enquiry preview",
      icon: CarFront,
    },
    {
      title: "Local airport taxi",
      label: "Licensed taxi",
      text: "Licensed taxis serve the terminals and long-distance station. Follow official rank signage.",
      image: taxiIllustrationPhoto.src,
      alt: taxiIllustrationPhoto.alt,
      note: "Taxi rank at Munich Airport — illustrative only",
      href: a.taxi.url,
      cta: "Official taxi guidance",
      icon: CarFront,
      photo: taxiIllustrationPhoto,
    },
    {
      title: "Train",
      label: "Rail",
      text: "S-Bahn and regional trains at Terminal 1, with a separate long-distance station for IC and ICE services.",
      image: railPhoto.src,
      alt: railPhoto.alt,
      note: photoCaption(railPhoto) ?? "Frankfurt Airport rail station",
      href: a.train.url,
      cta: "Official rail guidance",
      icon: TrainFront,
      photo: railPhoto,
    },
    {
      title: "Bus",
      label: "Coach / bus",
      text: "Local and regional buses serve selected destinations. Check the current stop, route and timetable.",
      image: busIllustrationPhoto.src,
      alt: busIllustrationPhoto.alt,
      note: "Airliner coach used on the Darmstadt–Frankfurt Airport service — illustrative only",
      href: busUrl,
      cta: "Official bus guidance",
      icon: BusFront,
      photo: busIllustrationPhoto,
    },
  ];

  return (
    <>
      <SiteHeader homepage={false} />
      <main id="main-content" tabIndex={-1}>
        <section className="relative isolate overflow-hidden bg-overlay text-navy-foreground">
          <img
            src={heroPanoramaPhoto.src}
            alt={heroPanoramaPhoto.alt}
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-overlay/75 via-overlay/35 to-overlay/10 md:bg-gradient-to-r md:from-overlay/75 md:via-overlay/35 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-background/75 to-transparent" />

          <div className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 md:pb-28 md:pt-28">
            <Breadcrumbs airport={a} />
            <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div className="animate-rise">
                <p className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 bg-navy-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
                  <Plane className="h-4 w-4 text-primary-bright" />
                  {a.code} · {a.city}, {a.country}
                </p>
                <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.03] tracking-tight [text-shadow:0_2px_18px_rgb(0_0_0/0.35)] sm:text-6xl lg:text-7xl">
                  {a.shortName} Airport
                  <span className="block text-primary-bright">Transfers ({a.code})</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-navy-foreground/90 sm:text-xl">
                  {a.description}
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full px-7">
                    <a href="#book">
                      Plan a transfer <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-navy-foreground/50 bg-transparent px-7 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground"
                  >
                    <a href="#compare">Compare transport</a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -inset-5 rounded-[2.75rem] border border-navy-foreground/20" />
                <div className="relative overflow-hidden rounded-[2.15rem] shadow-float">
                  <img
                    src={a.photo.src}
                    alt={a.photo.alt}
                    width={900}
                    height={675}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-transparent to-transparent" />
                  <p className="absolute bottom-6 left-6 font-display text-xl font-bold text-navy-foreground">
                    Frankfurt Terminal 1
                  </p>
                </div>
                <div className="relative mt-3 rounded-lg bg-card/90 px-3 py-2">
                  <PhotoCredit photo={a.photo} />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <HeroPhotoCredit photo={heroPanoramaPhoto} />
            </div>
          </div>
        </section>

        <div className="relative z-30 -mt-20 pb-8 sm:-mt-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <section
              aria-label="Transfer enquiry preview"
              className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-pale/90 to-card p-3 shadow-float backdrop-blur"
            >
              <p className="mb-3 flex items-start gap-3 px-3 pt-2 text-sm leading-6 text-navy sm:px-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {previewNotice}
              </p>
              <BookingForm />
            </section>
          </div>
        </div>

        <div className="border-y border-border bg-card/80">
          <nav
            aria-label="On this page"
            className="mx-auto flex max-w-6xl gap-7 overflow-x-auto px-4 py-4 text-sm font-semibold whitespace-nowrap text-primary sm:px-6"
          >
            {contents.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-navy">
                {label}
              </a>
            ))}
          </nav>
        </div>

        <section id="facts" className="border-b border-border bg-background py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="At a glance"
                title="Frankfurt Airport transfers: the essentials at a glance."
                description="Check your terminal, station and road options before you choose how to continue your journey."
              />
              <OfficialLink href={a.website}>Official airport website</OfficialLink>
            </div>
            <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { icon: Plane, label: "IATA code", value: a.code },
                { icon: MapPin, label: "Serving", value: `${a.city}, ${a.country}` },
                { icon: Navigation, label: "Location", value: a.location },
                { icon: Building2, label: "Terminals", value: "Terminal 1 & Terminal 3" },
                { icon: TrainFront, label: "Rail", value: a.train.station },
                { icon: BusFront, label: "Connections", value: a.connections },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-card/75 p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-pale text-primary">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wide text-primary">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[15px] font-medium leading-6 text-navy">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex gap-3 rounded-2xl bg-pale p-4 text-base leading-7 text-navy">
              <Accessibility className="mt-1 h-5 w-5 shrink-0 text-primary" />
              {a.accessibility}
            </p>
          </div>
        </section>

        <section id="terminals" className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Terminals & arrivals"
              title="Find your terminal, then choose your onward route."
              description={a.terminals}
            />
            <EditorialRow
              photo={terminalPhoto}
              caption={photoCaption(terminalPhoto) ?? "Terminal 1 departures hall"}
              icon={Building2}
              eyebrow="After landing"
              title="From the gate to ground transport"
            >
              <ol className="space-y-6">
                {a.arrivals.map((step, index) => (
                  <li key={step} className="flex gap-4 text-base leading-8 text-navy/85">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-teal font-display text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Button asChild className="rounded-full">
                  <a href="#book">
                    Plan this journey <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <OfficialLink href={terminalUrl}>Terminal 3 guidance</OfficialLink>
              </div>
            </EditorialRow>
          </div>
        </section>

        <section
          id="pickup"
          className="relative overflow-hidden bg-navy py-12 text-navy-foreground md:py-16"
        >
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-primary-bright/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              light
              eyebrow="Pickup & drop-off"
              title="Where to meet your driver or taxi."
              description="A public taxi rank and a prearranged private pickup are not the same meeting point. Agree the details before you land."
            />
            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="relative">
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-float">
                  <img
                    src={heroAirport}
                    alt="Black luxury sedan driving past a modern European airport terminal at sunset"
                    width={900}
                    height={1125}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-5 left-6 right-6 font-display text-lg font-bold text-navy-foreground sm:text-xl">
                    Prearranged pickup — illustrative vehicle
                  </figcaption>
                </figure>
              </div>
              <div>
                <div className="grid gap-10 sm:grid-cols-2">
                  <PickupPanel icon={CarFront} title="At the official taxi rank">
                    {a.taxi.paragraphs[0] ??
                      "Follow airport taxi signage and ask staff if terminal arrangements are unclear."}
                  </PickupPanel>
                  <PickupPanel icon={Navigation} title="At a prearranged pickup">
                    {a.arrivals[2] ??
                      "Agree the exact terminal and meeting point with your provider in advance."}
                  </PickupPanel>
                </div>

                <div className="mt-9 rounded-[1.75rem] border border-navy-foreground/15 bg-navy-foreground/5 p-6 sm:p-8">
                  <p className="flex items-center gap-2 font-display text-xl font-bold text-navy-foreground">
                    <Luggage className="h-5 w-5 text-primary-bright" />
                    Drop-off details to agree first
                  </p>
                  <ul className="mt-5 grid gap-3 text-base leading-7 text-navy-foreground/85 sm:grid-cols-2">
                    {[
                      "Flight number",
                      "Arrival terminal",
                      "Landing date and time",
                      "Final address",
                      "Passenger count",
                      "Luggage details",
                    ].map((detail) => (
                      <li key={detail} className="flex items-center gap-3">
                        <Check className="h-4 w-4 shrink-0 text-primary-bright" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 flex gap-3 text-sm leading-7 text-navy-foreground/70">
                  <Info className="mt-1 h-4 w-4 shrink-0 text-primary-bright" />
                  {previewNotice}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="compare" className="bg-pale py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Transport comparison"
              title="Compare Frankfurt Airport transfer options."
              description="Private transfers, licensed taxis, trains and buses each suit a different journey. Compare the full door-to-door trip, including the Terminal 3 connection."
            />

            <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {transportCards.map((item) => (
                <TransportCard key={item.title} item={item} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
                Private transfer vs taxi vs train vs bus
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-navy/80">
                Indicative times exclude baggage collection, waiting and walking unless stated.
                Traffic, terminal and final destination change the total. Fare guidance was checked
                on {a.checked}; reconfirm before travel.
              </p>
              <div className="mt-7">
                <ComparisonTable airport={a} />
              </div>
            </div>
          </div>
        </section>

        <section id="trains" className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Rail connections"
              title={a.train.title}
              description={a.train.station}
            />
            <EditorialRow
              reverse
              photo={railPhoto}
              caption={photoCaption(railPhoto) ?? "Frankfurt Airport rail station"}
              icon={TrainFront}
              eyebrow="Rail guide"
              title="Choose the station that matches the journey"
            >
              <ul className="space-y-3">
                {a.train.paragraphs.map((paragraph) => (
                  <li key={paragraph} className="flex gap-3 text-base leading-8 text-navy/85">
                    <Check className="mt-2 h-4 w-4 shrink-0 text-primary" />
                    {paragraph}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <OfficialLink href={a.train.url}>Official rail guidance</OfficialLink>
              </div>
            </EditorialRow>
          </div>
        </section>

        <section id="taxis" className="border-y border-border bg-card py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Road transport"
              title="How licensed taxis work at Frankfurt Airport."
              description="A taxi is direct to an address, but road time and fare depend on traffic and the destination."
            />
            <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="rounded-[1.75rem] bg-pale p-8 sm:p-10">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <p className="mt-6 font-display text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
                  {a.cityGuide}
                </p>
                <div className="mt-8">
                  <OfficialLink href={a.taxi.url}>Official taxi guidance</OfficialLink>
                </div>
              </div>
              <ul className="space-y-6">
                {a.taxi.paragraphs.map((paragraph) => (
                  <li
                    key={paragraph}
                    className="flex gap-4 border-b border-border pb-6 text-base leading-8 text-navy/85 last:border-0"
                  >
                    <CarFront className="mt-1.5 h-5 w-5 shrink-0 text-primary" />
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="routes" className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Popular destinations"
              title="Where travellers go after landing at FRA."
              description="Planning references only. Distances and driving times are not shown because they have not been verified from an official source; check your exact address before travel."
            />
            <div className="mt-7 grid gap-6 lg:grid-cols-12">
              {a.routes.map((route, index) => (
                <RouteCard
                  key={route.name}
                  route={route}
                  photo={destinationPhotos[route.name]}
                  photoLabel={destinationLabels[route.name]}
                  wide={index === 0 || index === 3}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-12 text-navy-foreground md:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              light
              eyebrow="Choosing well"
              title="Match the transfer to your journey."
              description="These scenarios use the verified route information above without claiming that one choice is best for everyone."
            />
            <div className="mt-7 grid gap-x-12 gap-y-4 md:grid-cols-2">
              {a.scenarios.map((scenario, index) => (
                <DecisionRow
                  key={scenario.title}
                  index={index + 1}
                  title={scenario.title}
                  text={scenario.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Frankfurt in focus"
              title="See the airport, terminal and station."
              description="Licensed photographs used in this guide, with attribution retained."
            />
            <div className="mt-7 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <PhotoFrame
                  photo={a.photo}
                  caption="Frankfurt Airport terminal exterior"
                  ratio="aspect-[16/10]"
                />
              </div>
              <div className="lg:col-span-5">
                <PhotoFrame
                  photo={terminalPhoto}
                  caption="Terminal 1 departures hall"
                  ratio="aspect-[4/3]"
                />
              </div>
              <div className="lg:col-span-12">
                <PhotoFrame
                  photo={railPhoto}
                  caption="Long-distance train station"
                  ratio="aspect-[21/9]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-pale py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Before you travel"
              title="Three checks that make the arrival smoother."
            />
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {a.tips.map((tip, index) => (
                <li key={tip} className="border-t border-primary/40 pt-6">
                  <span className="font-display text-3xl font-extrabold text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-base leading-8 text-navy">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faq" className="py-10 md:py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <SectionHeading
                eyebrow="Questions"
                title="Frankfurt transfer questions, answered."
                description="Clear answers grounded in the official references listed below."
              />
              <Button asChild variant="outline" className="mt-8 rounded-full">
                <a href="#book">
                  Open the enquiry preview <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <FaqList faqs={a.faqs} />
          </div>
        </section>

        <section className="border-t border-border bg-card py-10 md:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Sources & verification"
              title="Where this Frankfurt guide was checked."
              description={`Official source material checked ${a.checked}. These are planning references, not live departures or availability. Recheck your travel date.`}
            />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {a.sources.map((source) => (
                <li
                  key={source.url}
                  className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <OfficialLink href={source.url}>{source.label}</OfficialLink>
                    <p className="mt-2 text-base leading-7 text-navy/80">{source.scope}</p>
                  </div>
                  <Globe2 className="h-5 w-5 text-primary" aria-hidden />
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-7 text-muted-foreground">
              Terminal-specific private pickup points, private prices and airport-specific vehicle
              availability are not verified by this website.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-teal py-14 text-primary-foreground md:py-20">
          <div
            aria-hidden
            className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-primary-foreground/20"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-primary-foreground/10 blur-2xl"
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/85">
              <CalendarDays className="h-4 w-4" />
              Enquiry preview
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Ready to plan your Frankfurt transfer?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              Summarise your journey in the booking form above. Nothing is sent, reserved or
              charged.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-9 rounded-full bg-card px-8 text-primary shadow-float hover:bg-card/90"
            >
              <a href="#book">
                Open the booking form <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="bg-pale py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Keep exploring"
              title="More European airport guides."
              description="Each guide is researched separately, with its own official sources and verified facts."
            />
            <div className="mt-8 divide-y divide-border rounded-[1.75rem] bg-card px-6 shadow-soft sm:px-8">
              {AIRPORTS.filter((airport) => airport.slug !== a.slug)
                .slice(0, 3)
                .map((airport) => (
                  <Link
                    key={airport.code}
                    to="/airports/$slug/"
                    params={{ slug: airport.slug }}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wide text-primary">
                        {airport.code} · {airport.country}
                      </span>
                      <span className="mt-2 block font-display text-xl font-bold text-navy transition-colors group-hover:text-primary sm:text-2xl">
                        {airport.shortName} Airport transfers
                      </span>
                    </span>
                    <ArrowUpRight className="h-6 w-6 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/airports/">
                  All airport guides <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter homepage={false} />
    </>
  );
}
