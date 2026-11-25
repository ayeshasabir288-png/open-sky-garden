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

import { BookingForm } from "@/components/home/BookingForm";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import type { Photo } from "@/components/home/photos";
import { Breadcrumbs, OfficialLink } from "@/components/airports/AirportParts";
import { Button } from "@/components/ui/button";
import { AIRPORTS, type Airport } from "@/lib/airports";
import {
  type LicensedPhoto,
  type PremiumAirportContent,
  type PremiumIconName,
  type PremiumTransportCard,
} from "@/lib/airports/premium";
import { previewNotice, type Transport } from "@/lib/airports/types";
import { getPremiumContent } from "@/lib/airports/premiumContent";
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

const iconFor = {
  private: CarFront,
  taxi: CarFront,
  train: TrainFront,
  bus: BusFront,
} satisfies Record<PremiumIconName, typeof CarFront>;

type TransportCardItem = PremiumTransportCard;

function isLicensedPhoto(photo: Photo): photo is LicensedPhoto {
  return "licenseUrl" in photo && "changes" in photo;
}

function PhotoCredit({
  photo,
  onDark = false,
}: {
  photo: Photo | LicensedPhoto;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-[11px] leading-4 text-muted-foreground",
        onDark && "rounded-lg bg-card/90 px-2 py-1 text-navy",
      )}
    >
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
      {isLicensedPhoto(photo) ? (
        <a
          className="underline underline-offset-2 hover:text-primary"
          href={photo.licenseUrl}
          target="_blank"
          rel="noreferrer"
        >
          {photo.license}
        </a>
      ) : (
        photo.license
      )}{" "}
      · Wikimedia Commons
      {isLicensedPhoto(photo) && ` · ${photo.changes}`}
      {isLicensedPhoto(photo) && photo.homepageUrl && (
        <>
          {" "}
          ·{" "}
          <a
            className="underline underline-offset-2 hover:text-primary"
            href={photo.homepageUrl}
            target="_blank"
            rel="noreferrer"
          >
            Photographer’s website
          </a>
        </>
      )}
    </p>
  );
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
            Photographer’s website
          </a>
        </>
      )}
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
  photo: Photo | LicensedPhoto;
  caption?: string | undefined;
  ratio?: string;
  eager?: boolean;
  onDark?: boolean;
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
        <PhotoCredit photo={photo} onDark={onDark} />
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
  photo: Photo | LicensedPhoto;
  caption?: string | undefined;
  reverse?: boolean;
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
  const Icon = iconFor[item.icon];
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
            <PhotoCredit photo={item.photo} />
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
  photo?: LicensedPhoto | undefined;
  photoLabel?: string | undefined;
  wide?: boolean;
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

export function PremiumAirportPage({ airport: a }: { airport: Airport }) {
  const content: PremiumAirportContent = getPremiumContent(a.code);
  const { copy, captions } = content;
  const busUrl =
    content.officialLinks.bus ??
    a.comparison.find((row) => /bus|coach|metro/i.test(row.option))?.url ??
    a.website;
  const terminalUrl = content.officialLinks.terminal ?? a.website;

  return (
    <>
      <SiteHeader homepage={false} />
      <main id="main-content" tabIndex={-1}>
        <section className="relative isolate overflow-hidden bg-overlay text-navy-foreground">
          <img
            src={content.heroPhoto.src}
            alt={content.heroPhoto.alt}
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
                    src={content.insetPhoto.src}
                    alt={content.insetPhoto.alt}
                    width={900}
                    height={675}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-transparent to-transparent" />
                  <p className="absolute bottom-6 left-6 font-display text-xl font-bold text-navy-foreground">
                    {captions.inset}
                  </p>
                </div>
                <div className="relative mt-3 rounded-lg bg-card/90 px-3 py-2">
                  <PhotoCredit photo={content.insetPhoto} />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <HeroPhotoCredit photo={content.heroPhoto} />
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
                title={copy.factsHeading}
                description={copy.factsDescription}
              />
              <OfficialLink href={a.website}>Official airport website</OfficialLink>
            </div>
            <dl className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {[
                { icon: Plane, label: "IATA code", value: a.code },
                { icon: MapPin, label: "Serving", value: `${a.city}, ${a.country}` },
                { icon: Navigation, label: "Location", value: a.location },
                { icon: Building2, label: "Terminals", value: a.terminals },
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
              title={copy.terminalsHeading}
              description={a.terminals}
            />
            <EditorialRow
              photo={content.terminalPhoto}
              caption={captions.terminal}
              icon={Building2}
              eyebrow="After landing"
              title={copy.arrivalsTitle}
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
                <OfficialLink href={terminalUrl}>Terminal guidance</OfficialLink>
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
              title={copy.pickupHeading}
              description={copy.pickupDescription}
            />
            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div className="relative">
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-float">
                  <img
                    src={content.pickupPhoto.image}
                    alt={content.pickupPhoto.alt}
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
                {content.pickupPhoto.photo && (
                  <div className="mt-3 rounded-lg bg-card/90 px-3 py-2">
                    <PhotoCredit photo={content.pickupPhoto.photo} />
                  </div>
                )}
              </div>
              <div>
                <div className="grid gap-10 sm:grid-cols-2">
                  <PickupPanel icon={CarFront} title={copy.taxiRankTitle}>
                    {a.taxi.paragraphs[0] ??
                      "Follow airport taxi signage and ask staff if terminal arrangements are unclear."}
                  </PickupPanel>
                  <PickupPanel icon={Navigation} title={copy.privatePickupTitle}>
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
              title={copy.compareHeading}
              description={copy.compareDescription}
            />

            <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {content.transportCards.map((item) => (
                <TransportCard key={item.title} item={item} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-extrabold text-navy sm:text-3xl">
                {copy.comparisonTableHeading}
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
              photo={content.railPhoto}
              caption={captions.rail}
              icon={TrainFront}
              eyebrow="Rail guide"
              title={copy.trainFeatureTitle}
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
              title={copy.taxiHeading}
              description={copy.taxiDescription}
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
              title={copy.routesHeading}
              description={copy.routesDescription}
            />
            <div className="mt-7 grid gap-6 lg:grid-cols-12">
              {a.routes.map((route, index) => (
                <RouteCard
                  key={route.name}
                  route={route}
                  photo={content.destinationPhotos[route.name]}
                  photoLabel={content.destinationLabels[route.name]}
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
              title={copy.decisionsHeading}
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
              eyebrow={`${a.shortName} in focus`}
              title={copy.galleryHeading}
              description={copy.galleryDescription}
            />
            <div className="mt-7 grid gap-6 lg:grid-cols-12">
              {content.galleryPhotos.map(({ photo, caption, wide }, index) => (
                <div
                  key={photo.src}
                  className={cn(
                    wide ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4",
                  )}
                >
                  <PhotoFrame
                    photo={photo}
                    caption={caption}
                    ratio={wide ? "aspect-[16/10]" : index === 1 ? "aspect-[4/3]" : "aspect-[5/4]"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-pale py-10 md:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Before you travel" title={copy.tipsHeading} />
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
                title={copy.faqHeading}
                description={copy.faqDescription}
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
              title={copy.sourcesHeading}
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
              {copy.ctaHeading}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
              {copy.ctaText}
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
              title={copy.relatedHeading}
              description={copy.relatedDescription}
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
