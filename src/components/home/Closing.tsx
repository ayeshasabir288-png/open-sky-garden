import { useId, useState } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import cta from "@/assets/cta-panorama.jpg";
import { Eyebrow, Logo, Reveal } from "./primitives";
import { NAV } from "./SiteHeader";
import { cn } from "@/lib/utils";

export const FAQS = [
  { q: "How can I book an airport taxi?", a: "Enter your pickup and drop-off locations, date, time and number of passengers in the booking form at the top of this page. Online booking is being connected; until then the form shows a preview of your search." },
  { q: "Can I arrange a transfer from an airport to a hotel?", a: "Yes. Enter the airport as your pickup location and your hotel name or address as the drop-off location." },
  { q: "Can I book a return journey?", a: "The booking form includes a return journey option where you can add a return date and time alongside your outward trip." },
  { q: "What types of vehicles can I choose?", a: "Vehicle categories include Economy Sedan, Business Sedan, Business Van and Minibus. Exact models and capacity are confirmed with each booking." },
  { q: "Can I request a transfer to another European city?", a: "You can enter any destination in the form. Availability for longer cross-border routes depends on the specific journey and will be confirmed when booking." },
  { q: "How will I receive my booking details?", a: "Once online booking is live, booking details will be provided after you confirm. Until then, please use the contact details below for any questions." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <section aria-labelledby="faq-title" className="bg-pale py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="faq-title" className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">Frequently Asked <span className="text-primary">Questions</span></h2>
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
    <section aria-labelledby="cta-title" className="px-3 py-16 sm:px-6 md:py-24">
      <Reveal>
        <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-12 md:py-28">
          <img src={cta} alt="" width={1920} height={832} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
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
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/65">Airport taxi and private transfer planning for travellers moving between European airports, cities and destinations.</p>
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
            <li>Privacy Policy (coming soon)</li>
            <li>Terms and Conditions (coming soon)</li>
            <li>Cookie Policy (coming soon)</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
