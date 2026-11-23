import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import { Fleet } from "@/components/home/Sections";
import type { Airport } from "@/lib/airports";
import { AirportFAQ, OfficialLink, RelatedAirports, TransportComparison } from "./AirportParts";
import { Bullets, EnquiryCta, Gallery } from "./GuideBlocks";
import {
  Band,
  CompactFacts,
  DestinationCards,
  InfoSections,
  PremiumHero,
  TransportIntro,
} from "./PremiumGuide";

const contents = [
  ["facts", "Quick facts"],
  ["terminals", "Terminals"],
  ["pickup", "Pickup"],
  ["trains", "Trains"],
  ["taxis", "Taxis"],
  ["compare", "Compare transport"],
  ["routes", "Destinations"],
  ["gallery", "Photos"],
  ["faq", "Questions"],
];

export function PremiumAirportPage({ airport: a }: { airport: Airport }) {
  return (
    <>
      <SiteHeader homepage={false} />
      <main>
        <PremiumHero airport={a} />
        <div className="border-y border-border bg-card">
          <nav
            aria-label="On this page"
            className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-4 text-sm font-semibold whitespace-nowrap text-primary sm:px-6"
          >
            {contents.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:underline">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <CompactFacts airport={a} />
        <InfoSections airport={a} />
        <section className="bg-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <TransportComparison airport={a} intro={<TransportIntro airport={a} />} />
          </div>
        </section>
        <Band tone="navy" eyebrow="Choosing well" title="Which transport option should you choose?">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {a.scenarios.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6"
              >
                <h3 className="font-display font-bold text-primary-bright">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-navy-foreground/85">{s.text}</p>
              </div>
            ))}
          </div>
        </Band>
        <DestinationCards airport={a} />
        <Band eyebrow="Before you land" title="Arriving at the airport">
          <div className="grid gap-8 md:grid-cols-2 md:gap-14">
            <div>
              <h3 className="font-display font-bold text-navy">Keep these details ready</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm leading-6 sm:grid-cols-2">
                {[
                  "Flight number",
                  "Arrival terminal",
                  "Landing date and time",
                  "Final address",
                  "Passenger count",
                  "Luggage details",
                ].map((d) => (
                  <li key={d} className="rounded-lg bg-pale px-3 py-2 font-semibold text-navy">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-[15px] leading-7">
              <p>
                Complete baggage collection and arrival formalities before leaving for ground
                transport. Use official airport screens, signs and staff for current directions.
              </p>
              <p>
                For a prearranged pickup, agree the exact location with the provider in advance and
                recheck it if your terminal changes. Landing time is not the time you will be ready
                outside. Discuss mobility needs, child seats and bulky items before arranging a
                vehicle; the demo form does not collect or send all these details.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your terminal, final address and the current operator timetable.
                Station-to-station times are not door-to-door promises.
              </p>
            </div>
          </div>
        </Band>
        <div className="bg-pale">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
            <p className="text-sm leading-6">
              Vehicle categories below are general planning examples—not confirmed availability at{" "}
              {a.shortName}. Exact models, luggage capacity, child seats and accessibility need
              verification before any arrangement.
            </p>
          </div>
        </div>
        <Fleet />
        <Band tone="pale" eyebrow="Good to know" title="Helpful airport travel tips">
          <div className="max-w-3xl">
            <Bullets items={a.tips} />
          </div>
        </Band>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Gallery airport={a} />
          <div className="max-w-4xl">
            <AirportFAQ faqs={a.faqs} />
            <section className="py-12 md:py-16">
              <h2 className="mb-5 font-display text-2xl font-extrabold text-navy sm:text-3xl">
                Sources and verification
              </h2>
              <p className="mb-5 text-sm leading-6 text-muted-foreground">
                Official source material checked {a.checked}. These are planning references, not
                live departures or availability. Recheck your travel date. Terminal-specific private
                pickup points, private prices and airport-specific vehicle availability are not
                verified.
              </p>
              <ul className="space-y-5">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <OfficialLink href={s.url}>{s.label}</OfficialLink>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{s.scope}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <OfficialLink href={a.website}>Airport website</OfficialLink>
              </div>
            </section>
          </div>
        </div>
        <EnquiryCta airport={a} />
        <RelatedAirports airport={a} />
      </main>
      <SiteFooter homepage={false} />
    </>
  );
}
