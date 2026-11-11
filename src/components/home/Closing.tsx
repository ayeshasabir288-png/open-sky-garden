import { useId, useState } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import cta from "@/assets/cta-panorama.jpg";
import { Eyebrow, Logo, Reveal } from "./primitives";
import { NAV } from "./SiteHeader";
import { cn } from "@/lib/utils";

export const FAQS = [
  { q: "How do I arrange an airport taxi transfer?", a: "Enter your pickup and drop-off locations, date, time and number of passengers in the form at the top of this page, then choose a vehicle category. Online booking is still being connected, so the form currently shows a summary of your request rather than a confirmed booking." },
  { q: "Can I request an airport to hotel transfer?", a: "Yes. Enter the airport as your pickup location and the hotel name or address as your drop-off." },
  { q: "Can I book a return journey?", a: "The form has a return journey option where you add a return date and time alongside your outward trip." },
  { q: "Which vehicle should I choose for my luggage?", a: "As a guide, sedans suit one to three passengers with standard suitcases, the Business Van suits families and small groups, and the Minibus suits larger groups or bulky items. Exact capacity is confirmed for each journey." },
  { q: "Can I request a transfer between European cities?", a: "Yes, you can enter any destination. Longer and cross-border routes are checked individually, and availability is confirmed before travel." },
  { q: "How will my transfer price be confirmed?", a: "Prices are not shown on the site yet. The price depends on the route, date and vehicle and will be confirmed with you before the journey." },
  { q: "What information is needed for airport pickup?", a: "The airport, your arrival date and time, flight number, number of passengers and amount of luggage, and the drop-off address." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <section aria-labelledby="faq-title" className="bg-pale py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl">Frequently Asked <span className="text-primary">Questions</span></h2>
        </Reveal>
        <div className="divide-y divide-border rounded-3xl bg-card px-2 shadow-soft">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-4">
                <h3>
                  <button type="button" id={`${base}-b${i}`} aria-expanded={isOpen} aria-controls={`${base}-p${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-bold text-navy hover:text-primary focus-visible:outline-2 focus-visible:outline-ring sm:text-lg">
                    {f.q}
                    <ChevronDown className={cn("h-5 w-5 shrink-0 text-primary transition-transform", isOpen && "rotate-180")} />
                  </button>
                </h3>
                <div id={`${base}-p${i}`} role="region" aria-labelledby={`${base}-b${i}`} hidden={!isOpen} className="pb-5 pr-8 leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-3 py-12 sm:px-6 md:py-16">
      <Reveal>
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 md:py-20">
          <img src={cta} alt="" width={1920} height={832} loading="lazy" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-teal opacity-85 mix-blend-multiply" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-overlay/50 to-transparent" />
          <h2 id="cta-title" className="mx-auto max-w-2xl text-4xl font-extrabold text-primary-foreground sm:text-5xl md:text-6xl">Your Next Journey Starts Here</h2>
          <p className="mx-auto mt-5 max-w-lg text-primary-foreground/85">Plan your airport transfer in a few simple steps.</p>
          <a href="#book" className="mt-9 inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 font-semibold text-primary shadow-float transition-transform hover:-translate-y-0.5">
            Plan Your Transfer <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-6 text-navy-foreground/75">Airport taxi and private transfer planning for travellers moving between European airports, cities and destinations.</p>
        </div>
        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-bright">Navigate</h3>
          <ul className="mt-4 grid gap-2 text-sm text-navy-foreground/75">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary-bright">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-bright">Airports</h3>
          <ul className="mt-4 grid gap-2 text-sm text-navy-foreground/75">
            {["Frankfurt (FRA)", "Amsterdam Schiphol (AMS)", "Paris CDG (CDG)", "Barcelona (BCN)", "Rome Fiumicino (FCO)", "London Heathrow (LHR)"].map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className="mt-3 text-xs text-navy-foreground/45">Airport pages coming soon.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-bright">Contact</h3>
          <ul className="mt-4 grid gap-3 text-sm text-navy-foreground/75">
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary-bright" /> [Email address – to be added]</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary-bright" /> [Phone number – to be added]</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary-bright" /> [Business address – to be added]</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Europe Airport Taxi</p>
          <ul className="flex flex-wrap gap-4">
            <li>Privacy Policy <span className="text-navy-foreground/55">(placeholder)</span></li>
            <li>Terms and Conditions <span className="text-navy-foreground/55">(placeholder)</span></li>
            <li>Cookie Policy <span className="text-navy-foreground/55">(placeholder)</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
