import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import { Fleet } from "@/components/home/Sections";
import type { Airport } from "@/lib/airports";
import {
  AirportHero,
  AirportFacts,
  TransportComparison,
  TrainGuide,
  TaxiGuide,
  PopularRoutes,
  AirportFAQ,
  RelatedAirports,
  Section,
  OfficialLink,
} from "./AirportParts";
const contents = [
  ["facts", "At a glance"],
  ["compare", "Compare transport"],
  ["trains", "Trains"],
  ["taxis", "Taxis"],
  ["routes", "Routes"],
  ["faq", "Questions"],
];
export function AirportPage({ airport: a }: { airport: Airport }) {
  return (
    <>
      <SiteHeader homepage={false} />
      <main>
        <AirportHero airport={a} />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav
            aria-label="On this page"
            className="flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-5 text-sm font-semibold text-primary"
          >
            {contents.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:underline">
                {label}
              </a>
            ))}
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
            <div className="min-w-0">
              <AirportFacts airport={a} />
              <Section title="Airport terminals and arrivals">
                <div className="space-y-4 text-[15px] leading-7">
                  {a.arrivals.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Section>
              <Section title="Airport taxi and private transfer information">
                <p className="text-[15px] leading-7">
                  A local airport taxi is taken from an authorised rank under local taxi rules. A
                  private transfer is arranged in advance with a provider, with the destination,
                  vehicle requirements and pickup agreed before travel. Neither is universally
                  better: rail may be faster for a station-connected address, and a road journey may
                  avoid changes with luggage.
                </p>
                <p className="mt-4 text-[15px] leading-7">
                  Europe Airport Taxi’s booking engine is not live. This guide is travel
                  information, not evidence of airport coverage or vehicle availability. The form
                  only shows a demo summary; it sends nothing and confirms no driver, fare, waiting
                  period or meeting point.
                </p>
              </Section>
              <Section title={`${a.shortName} Airport to ${a.city} city centre`}>
                <p className="text-[15px] leading-7">{a.cityGuide}</p>
              </Section>
            </div>
            <aside className="hidden pt-10 lg:block">
              <div className="sticky top-28 border-l-2 border-primary-bright pl-5">
                <p className="text-xs font-bold uppercase text-primary">Before you travel</p>
                <p className="mt-3 text-sm leading-6">
                  Check your terminal, final address and the current operator timetable.
                  Station-to-station times are not door-to-door promises.
                </p>
                <p className="mt-5 text-xs text-muted-foreground">Research checked {a.checked}</p>
                <div className="mt-4">
                  <OfficialLink href={a.website}>Airport website</OfficialLink>
                </div>
              </div>
            </aside>
          </div>
          <TransportComparison airport={a} />
          <div className="max-w-4xl">
            <TrainGuide airport={a} />
            <TaxiGuide airport={a} />
            <PopularRoutes airport={a} />
            <Section title="Which transport option should you choose?">
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {a.scenarios.map((s) => (
                  <div key={s.title}>
                    <h3 className="font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{s.text}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Arriving at the airport">
              <p className="text-[15px] leading-7">
                Keep your flight number, arrival terminal, landing date and time, final address,
                passenger count and luggage details ready. Complete baggage collection and arrival
                formalities before leaving for ground transport. Use official airport screens, signs
                and staff for current directions.
              </p>
              <p className="mt-4 text-[15px] leading-7">
                For a prearranged pickup, agree the exact location with the provider in advance and
                recheck it if your terminal changes. Landing time is not the time you will be ready
                outside. Discuss mobility needs, child seats and bulky items before arranging a
                vehicle; the demo form does not collect or send all these details.
              </p>
            </Section>
          </div>
        </div>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-4xl">
            <Section title="Helpful airport travel tips">
              <ul className="list-disc space-y-3 pl-5 text-[15px] leading-7">
                {a.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Section>
            <AirportFAQ faqs={a.faqs} />
            <Section title="Sources and verification">
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
            </Section>
          </div>
        </div>
        <RelatedAirports airport={a} />
      </main>
      <SiteFooter homepage={false} />
    </>
  );
}
