import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/Closing";
import { Fleet } from "@/components/home/Sections";
import type { Airport } from "@/lib/airports";
import {
  AirportHero,
  TransportComparison,
  TrainGuide,
  TaxiGuide,
  PopularRoutes,
  AirportFAQ,
  RelatedAirports,
  Section,
  OfficialLink,
} from "./AirportParts";
import { FrankfurtAirportPage } from "./frankfurt/FrankfurtAirportPage";
import { PremiumAirportPage } from "./PremiumAirportPage";
import {
  Bullets,
  Callout,
  EnquiryCta,
  Gallery,
  QuickFacts,
  SplitMedia,
  Steps,
  galleryFor,
} from "./GuideBlocks";
const contents = [
  ["facts", "Quick facts"],
  ["terminals", "Terminals"],
  ["pickup", "Pickup"],
  ["compare", "Compare transport"],
  ["trains", "Trains"],
  ["taxis", "Taxis"],
  ["routes", "Routes"],
  ["gallery", "Photos"],
  ["faq", "Questions"],
];
const premiumCodes = new Set(["AMS", "CDG", "BCN", "FCO", "LHR"]);

export function AirportPage({ airport: a }: { airport: Airport }) {
  // Frankfurt keeps its approved dedicated redesign; the five upgraded guides share one premium layout.
  if (a.code === "FRA") return <FrankfurtAirportPage airport={a} />;
  if (premiumCodes.has(a.code)) return <PremiumAirportPage airport={a} />;
  return (
    <>
      <SiteHeader homepage={false} />
      <main id="main-content" tabIndex={-1}>
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
              <QuickFacts airport={a} />
              <Section id="terminals" title="Airport terminals and arrivals">
                <SplitMedia photo={galleryFor(a)[0]} caption={galleryFor(a)[0]?.caption}>
                  <Steps items={a.arrivals} />
                </SplitMedia>
              </Section>
              <Section id="pickup" title="Airport taxi and private transfer information">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-navy">Local airport taxi</h3>
                    <p className="mt-2 text-sm leading-6">
                      Taken from an authorised rank under local taxi rules.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-bold text-navy">Private transfer</h3>
                    <p className="mt-2 text-sm leading-6">
                      Arranged in advance with a provider, with the destination, vehicle
                      requirements and pickup agreed before travel.
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-7">
                  Neither is universally better: rail may be faster for a station-connected address,
                  and a road journey may avoid changes with luggage.
                </p>
                <div className="mt-5">
                  <Callout title="Booking is not live">
                    Europe Airport Taxi’s booking engine is not live. This guide is travel
                    information, not evidence of airport coverage or vehicle availability. The form
                    only shows a demo summary; it sends nothing and confirms no driver, fare,
                    waiting period or meeting point.
                  </Callout>
                </div>
              </Section>
              <Section title={`${a.shortName} Airport to ${a.city} city centre`}>
                <Callout title={`Getting into ${a.city}`}>
                  <p className="text-[15px] leading-7">{a.cityGuide}</p>
                </Callout>
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
              <div className="grid gap-4 sm:grid-cols-2">
                {a.scenarios.map((s) => (
                  <div key={s.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{s.text}</p>
                  </div>
                ))}
              </div>
            </Section>
            <Section title="Arriving at the airport">
              <SplitMedia photo={a.photo} caption={`Outside ${a.shortName} Airport`}>
                <h3 className="font-display font-bold text-navy">Keep these details ready</h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm leading-6 sm:grid-cols-2">
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
                <p className="mt-5 text-[15px] leading-7">
                  Complete baggage collection and arrival formalities before leaving for ground
                  transport. Use official airport screens, signs and staff for current directions.
                </p>
                <p className="mt-4 text-[15px] leading-7">
                  For a prearranged pickup, agree the exact location with the provider in advance
                  and recheck it if your terminal changes. Landing time is not the time you will be
                  ready outside. Discuss mobility needs, child seats and bulky items before
                  arranging a vehicle; the demo form does not collect or send all these details.
                </p>
              </SplitMedia>
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
              <Bullets items={a.tips} />
            </Section>
            <Gallery airport={a} />
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
        <EnquiryCta airport={a} />
        <RelatedAirports airport={a} />
      </main>
      <SiteFooter homepage={false} />
    </>
  );
}
