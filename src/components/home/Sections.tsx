import { ArrowRight, ArrowUpRight, Briefcase, CalendarCheck, CarFront, ClipboardList, DoorOpen, Globe2, MapPinned, MousePointerClick, Plane, Repeat, Route, ShieldCheck, Sofa, Users, Headset, Luggage, Compass } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import paris from "@/assets/city-paris.jpg";
import amsterdam from "@/assets/city-amsterdam.jpg";
import barcelona from "@/assets/city-barcelona.jpg";
import rome from "@/assets/city-rome.jpg";
import sedanTop from "@/assets/sedan-top.webp";
import economy from "@/assets/fleet-economy-sedan.jpg";
import business from "@/assets/fleet-business-sedan.jpg";
import van from "@/assets/fleet-business-van.jpg";
import minibus from "@/assets/fleet-minibus.jpg";
import germany from "@/assets/country-germany.jpg";
import switzerland from "@/assets/country-switzerland.jpg";
import austria from "@/assets/country-austria.jpg";
import portugal from "@/assets/country-portugal.jpg";

/* ---------- Intro ---------- */
const CITIES = [
  { name: "Paris", note: "France", img: paris, alt: "Paris street at sunset with the Eiffel Tower" },
  { name: "Amsterdam", note: "Netherlands", img: amsterdam, alt: "Amsterdam canal houses with bicycles on a bridge" },
  { name: "Barcelona", note: "Spain", img: barcelona, alt: "Sagrada Família in Barcelona framed by palm trees" },
  { name: "Rome", note: "Italy", img: rome, alt: "The Colosseum in Rome at golden hour" },
];

export function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <Eyebrow>About the service</Eyebrow>
          <h2 id="intro-title" className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl">
            Your Journey Across Europe <span className="text-primary">Starts Here</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Europe Airport Taxi helps you plan a private transfer between airports, hotels, city centres and other destinations. Instead of queuing for a taxi or juggling train connections with luggage, you arrange a vehicle in advance for your own group.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tell us where you're landing and where you need to go. Choose a vehicle that suits your group, add a return trip if you need one, and travel on to your destination.
          </p>
          <a href="#book" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            Plan a transfer <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {CITIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 90} className={i % 2 === 1 ? "translate-y-8 sm:translate-y-12" : ""}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
                <img src={c.img} alt={c.alt} width={768} height={1024} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-overlay/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-widest text-navy-foreground/75">{c.note}</span>
                    <span className="font-display text-xl font-bold text-navy-foreground sm:text-2xl">{c.name}</span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-card/90 text-primary transition-transform group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefits ---------- */
const BENEFITS = [
  { icon: Plane, title: "Airport Pickup", text: "Arrange a pickup from the airport so your onward journey is planned before you land." },
  { icon: DoorOpen, title: "Door-to-Door Transfers", text: "Travel directly from the terminal to your hotel, home or meeting address." },
  { icon: Sofa, title: "Comfortable Vehicles", text: "Choose from sedans, vans and minibuses to suit your group and luggage." },
  { icon: MousePointerClick, title: "Simple Booking", text: "Enter your route, date and passengers in one clear search form." },
  { icon: Repeat, title: "Flexible Journey Options", text: "Plan a one-way trip or add a return journey in the same search." },
  { icon: Globe2, title: "European Destinations", text: "Plan transfers around major airports and cities across Europe." },
];

export function Benefits() {
  const left = BENEFITS.slice(0, 3);
  const right = BENEFITS.slice(3);
  return (
    <section id="services" aria-labelledby="benefits-title" className="relative overflow-hidden bg-pale py-16 md:py-20">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 sm:h-[42rem] sm:w-[42rem]" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 sm:h-[30rem] sm:w-[30rem]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Our services</Eyebrow>
          <h2 id="benefits-title" className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl">
            Why Choose <span className="text-primary">Europe Airport Taxi</span>
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">A private transfer designed around the way you travel.</p>
        </Reveal>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.8fr)_minmax(0,1fr)] lg:gap-8">
          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
            {left.map((b, i) => <BenefitItem key={b.title} {...b} side="left" delay={i * 100} />)}
          </ul>
          <Reveal className="mx-auto flex h-full items-center justify-center">
            <div className="relative">
              <div aria-hidden className="absolute inset-x-4 bottom-2 top-8 rounded-full bg-primary/20 blur-3xl" />
              <img src={sedanTop} alt="Black executive sedan viewed from directly above" width={768} height={1344} loading="lazy" decoding="async" className="relative h-[25rem] w-auto drop-shadow-2xl sm:h-[30rem] lg:h-[34rem]" />
            </div>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
            {right.map((b, i) => <BenefitItem key={b.title} {...b} side="right" delay={i * 100} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon: Icon, title, text, side, delay }: { icon: typeof Plane; title: string; text: string; side: "left" | "right"; delay: number }) {
  return (
    <li className="h-full">
      <Reveal delay={delay} className="h-full">
        <div className={`group flex h-full items-start gap-3.5 ${side === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
          <span aria-hidden className={`mt-6 hidden h-px w-8 shrink-0 from-primary/60 to-transparent lg:block ${side === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"}`} />
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-card text-primary shadow-soft ring-1 ring-primary/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:ring-primary/35"><Icon className="h-5 w-5" strokeWidth={2} /></span>
          <div className="min-w-0 flex-1">
            <h3 className="text-[17px] font-bold leading-snug text-navy">{title}</h3>
            <p className="mt-1.5 text-[15px] leading-6 text-muted-foreground">{text}</p>
          </div>
        </div>
      </Reveal>
    </li>
  );
}

/* ---------- Airports ---------- */
const AIRPORTS = [
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt am Main", country: "Germany" },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Haarlemmermeer, near Amsterdam", country: "Netherlands" },
  { code: "CDG", name: "Paris Charles de Gaulle", city: "Roissy-en-France, near Paris", country: "France" },
  { code: "BCN", name: "Barcelona–El Prat", city: "El Prat de Llobregat, near Barcelona", country: "Spain" },
  { code: "FCO", name: "Rome Fiumicino", city: "Fiumicino, near Rome", country: "Italy" },
  { code: "LHR", name: "London Heathrow", city: "Hillingdon, west London", country: "United Kingdom" },
];

export function Airports() {
  return (
    <section id="airports" aria-labelledby="airports-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>European airports</Eyebrow>
            <h2 id="airports-title" className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">Major Airports <span className="text-primary">Across Europe</span></h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Popular hubs travellers often ask about. Enter your airport in the booking form to plan a transfer.</p>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AIRPORTS.map((a, i) => (
            <li key={a.code}>
              <Reveal delay={i * 70}>
                <article className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-float">
                  <span aria-hidden className="absolute -right-4 -top-6 font-display text-8xl font-extrabold text-pale transition-colors group-hover:text-accent">{a.code}</span>
                  <div className="relative">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-pale px-3 py-1 text-xs font-bold tracking-widest text-primary"><Plane className="h-3.5 w-3.5" /> {a.code}</span>
                    <h3 className="mt-5 text-xl font-bold text-navy">{a.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{a.city} · {a.country}</p>
                    <a href="#book" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Plan a transfer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Fleet ---------- */
const FLEET = [
  { name: "Economy Sedan", img: economy, alt: "Black economy sedan on a European city street", use: "Solo travellers and couples", icon: CarFront },
  { name: "Business Sedan", img: business, alt: "Black executive sedan at an airport departures curb", use: "Business trips and extra comfort", icon: Briefcase },
  { name: "Business Van", img: van, alt: "Black passenger van at airport arrivals", use: "Families and small groups", icon: Users },
  { name: "Minibus", img: minibus, alt: "Black passenger minibus outside an airport terminal", use: "Larger groups and extra luggage", icon: Luggage },
];

export function Fleet() {
  return (
    <section id="fleet" aria-labelledby="fleet-title" className="bg-navy py-20 text-navy-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-primary-bright">Our fleet</Eyebrow>
          <h2 id="fleet-title" className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">A Vehicle for <span className="text-primary-bright">Every Journey</span></h2>
          <p className="mt-4 text-navy-foreground/70">Vehicle categories to match your group. Exact capacity and models will be confirmed with your booking.</p>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET.map((f, i) => (
            <li key={f.name}>
              <Reveal delay={i * 80}>
                <article className="group overflow-hidden rounded-3xl bg-navy-foreground/5 ring-1 ring-navy-foreground/10 transition-all hover:-translate-y-1 hover:ring-primary-bright/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={f.img} alt={f.alt} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{f.name}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-navy-foreground/70"><f.icon className="h-4 w-4 text-primary-bright" /> {f.use}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
const STEPS = [
  { icon: Route, title: "Enter Your Journey", text: "Add your pickup, drop-off, date, time and number of passengers." },
  { icon: CarFront, title: "Choose Your Transfer", text: "Pick the vehicle category that suits your group and luggage." },
  { icon: CalendarCheck, title: "Confirm Your Booking", text: "Review your details and confirm. Online confirmation is coming soon." },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">How it works</Eyebrow>
          <h2 id="how-title" className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">Booking in <span className="text-primary">Three Steps</span></h2>
        </Reveal>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          <span aria-hidden className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-primary/30 md:block" />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <Reveal delay={i * 120}>
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-teal text-primary-foreground shadow-float">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-coral text-xs font-bold text-coral-foreground">{i + 1}</span>
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Destinations ---------- */
const COUNTRIES = [
  { name: "Germany", img: germany, alt: "Brandenburg Gate in Berlin" },
  { name: "France", img: paris, alt: "Eiffel Tower seen from a Paris street" },
  { name: "Spain", img: barcelona, alt: "Sagrada Família in Barcelona" },
  { name: "Italy", img: rome, alt: "Colosseum in Rome" },
  { name: "Netherlands", img: amsterdam, alt: "Amsterdam canal houses" },
  { name: "Switzerland", img: switzerland, alt: "The Matterhorn above Zermatt" },
  { name: "Austria", img: austria, alt: "Hallstatt village on the lake" },
  { name: "Portugal", img: portugal, alt: "Yellow tram in Lisbon" },
];

export function Destinations() {
  return (
    <section id="countries" aria-labelledby="dest-title" className="bg-pale py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Destinations</Eyebrow>
            <h2 id="dest-title" className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">Popular Destinations <span className="text-primary">Across Europe</span></h2>
          </div>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {COUNTRIES.map((c, i) => (
            <li key={c.name} className={i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <figure className="group relative h-full min-h-44 overflow-hidden rounded-3xl shadow-soft sm:min-h-56">
                  <img src={c.img} alt={c.alt} width={816} height={816} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay/75 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 font-display text-lg font-bold text-navy-foreground sm:text-2xl">{c.name}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Trust ---------- */
const JOURNEY = [
  { icon: ClipboardList, title: "Clear details up front", text: "Your route, date, time and passenger count are captured in one place before you travel." },
  { icon: MapPinned, title: "Direct to your address", text: "A private transfer takes your group straight to where you need to be, without changes." },
  { icon: ShieldCheck, title: "Plan before you fly", text: "Arranging your ride in advance means one less thing to organise after landing." },
  { icon: Headset, title: "Questions welcome", text: "Get in touch before booking if you have special requests about your journey." },
];

export function Trust() {
  return (
    <section aria-labelledby="trust-title" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Your journey</Eyebrow>
          <h2 id="trust-title" className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">A Calmer Way to <span className="text-primary">Arrive</span></h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">From the moment you search to the moment you reach your door, the focus is on a simple, predictable transfer.</p>
          <div className="mt-8 flex items-center gap-4 rounded-3xl bg-gradient-teal p-6 text-primary-foreground shadow-float">
            <Compass className="h-10 w-10 shrink-0" />
            <p className="font-display text-lg font-bold leading-snug">Land, meet your ride, and continue your journey.</p>
          </div>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {JOURNEY.map((j, i) => (
            <li key={j.title}>
              <Reveal delay={i * 80}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pale text-primary"><j.icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{j.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

