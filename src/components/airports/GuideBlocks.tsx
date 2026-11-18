import type { ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  CarFront,
  CheckCircle2,
  Globe,
  Hash,
  Info,
  MapPin,
  Plane,
  TrainFront,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Airport } from "@/lib/airports";
import { GALLERY, type GalleryPhoto } from "@/lib/airports/gallery";
import type { Photo } from "@/components/home/photos";
import { OfficialLink, PhotoCredit, Section } from "./AirportParts";

export function galleryFor(a: Airport): GalleryPhoto[] {
  return GALLERY[a.code] ?? [];
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-primary/20 bg-pale p-5">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div>
        <p className="font-display font-bold text-navy">{title}</p>
        <div className="mt-2 text-sm leading-6">{children}</div>
      </div>
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[15px] leading-7">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-5">
      {items.map((t, i) => (
        <li key={t} className="flex gap-4 text-[15px] leading-7">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
            {i + 1}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}

export function SplitMedia({
  photo,
  caption,
  children,
  reverse,
}: {
  photo?: Photo;
  caption?: string;
  children: ReactNode;
  reverse?: boolean;
}) {
  if (!photo) return <>{children}</>;
  return (
    <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
      <figure className={reverse ? "md:order-2" : undefined}>
        <img
          src={photo.src}
          alt={photo.alt}
          width={1000}
          height={667}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
        />
        {caption && (
          <figcaption className="mt-2 text-sm font-semibold text-navy">{caption}</figcaption>
        )}
        <PhotoCredit photo={photo} />
      </figure>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function QuickFacts({ airport: a }: { airport: Airport }) {
  const facts: { icon: typeof Plane; label: string; value: ReactNode }[] = [
    { icon: Plane, label: "Airport name", value: a.name },
    { icon: Hash, label: "IATA code", value: a.code },
    { icon: Building2, label: "Terminals", value: a.terminals },
    { icon: MapPin, label: "Main city served", value: `${a.city}, ${a.country}` },
    { icon: TrainFront, label: "Train access", value: a.train.station },
    {
      icon: CarFront,
      label: "Taxi / private transfer",
      value:
        "Licensed taxis from official ranks; private transfers are arranged in advance with a provider.",
    },
    {
      icon: Globe,
      label: "Official airport site",
      value: (
        <OfficialLink href={a.website}>
          {a.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
        </OfficialLink>
      ),
    },
  ];
  return (
    <Section id="facts" title="Quick airport facts">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4 rounded-xl border border-border bg-card p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pale text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs font-bold uppercase tracking-wide text-primary">{label}</dt>
              <dd className="mt-1.5 break-words text-sm leading-6">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Callout title="Location">{a.location}</Callout>
        <Callout title="Ground connections">{a.connections}</Callout>
      </div>
      <p className="mt-5 flex gap-3 text-[15px] leading-7">
        <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
        {a.accessibility}
      </p>
    </Section>
  );
}

export function Gallery({ airport: a }: { airport: Airport }) {
  const photos: GalleryPhoto[] = [
    { ...a.photo, caption: `${a.shortName} terminal exterior` },
    ...galleryFor(a),
  ];
  return (
    <Section id="gallery" title={`${a.shortName} Airport in pictures`}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.src}>
            <img
              src={p.src}
              alt={p.alt}
              width={1000}
              height={667}
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-2 text-sm font-semibold text-navy">{p.caption}</figcaption>
            <PhotoCredit photo={p} />
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function EnquiryCta({ airport: a }: { airport: Airport }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Planning a journey from {a.shortName}?
          </h2>
          <p className="mt-3 text-sm leading-6 text-navy-foreground/85">
            Try the enquiry preview to summarise your trip. It is a demo only: nothing is sent,
            reserved or charged.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-full">
          <a href="#book">
            Open the enquiry preview <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}
