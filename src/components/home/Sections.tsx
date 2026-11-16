import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarCheck,
  CarFront,
  ClipboardList,
  DoorOpen,
  Globe2,
  MapPinned,
  MousePointerClick,
  Plane,
  Repeat,
  Route,
  ShieldCheck,
  Sofa,
  Users,
  Headset,
  Luggage,
  Compass,
  Building2,
} from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import { PHOTOS, type Photo } from "./photos";
import paris from "@/assets/city-paris.jpg";
import amsterdam from "@/assets/city-amsterdam.jpg";
import barcelona from "@/assets/city-barcelona.jpg";
import rome from "@/assets/city-rome.jpg";
import sedanTop from "@/assets/sedan-top.webp";
import economy from "@/assets/fleet-economy-sedan.jpg";
import business from "@/assets/fleet-business-sedan.jpg";
import van from "@/assets/fleet-business-van.jpg";
import minibus from "@/assets/fleet-minibus.jpg";

/* ---------- Intro ---------- */
const CITIES = [
  {
    name: "Paris",
    note: "France",
    img: paris,
    alt: "Paris street at sunset with the Eiffel Tower",
  },
  {
    name: "Amsterdam",
    note: "Netherlands",
    img: amsterdam,
    alt: "Amsterdam canal houses with bicycles on a bridge",
  },
  {
    name: "Barcelona",
    note: "Spain",
    img: barcelona,
    alt: "Sagrada Família in Barcelona framed by palm trees",
  },
  { name: "Rome", note: "Italy", img: rome, alt: "The Colosseum in Rome at golden hour" },
];

export function Intro() {
  return (
    <section id="about" aria-labelledby="intro-title" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <Eyebrow>About the service</Eyebrow>
          <h2
            id="intro-title"
            className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
          >
            Your Journey Across Europe <span className="text-primary">Starts Here</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Europe Airport Taxi is for travellers who want a private vehicle waiting for their own
            group rather than a taxi queue or a train change with luggage. You can plan airport
            pickups and drop-offs, airport to hotel journeys, transfers within a city and longer
            trips between cities.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To start, enter your pickup and drop-off points, travel date, time and passenger numbers
            in the form above. Online booking is still being connected, so the form currently shows
            a summary of your journey request.
          </p>
          <a
            href="#book"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
          >
            Plan a transfer <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {CITIES.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 90}
              className={i % 2 === 1 ? "translate-y-8 sm:translate-y-12" : ""}
            >
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={c.img}
                  alt={c.alt}
                  width={768}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-overlay/85 via-overlay/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-widest text-navy-foreground/85">
                      {c.note}
                    </span>
                    <span className="font-display text-xl font-bold text-navy-foreground sm:text-2xl">
                      {c.name}
                    </span>
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-card/90 text-primary transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
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
  {
    icon: Plane,
    title: "Airport Pickup",
    text: "Your onward journey is planned before you land, so there is no need to find transport at the terminal.",
  },
  {
    icon: DoorOpen,
    title: "Door-to-Door Transfers",
    text: "Travel directly from the terminal to your hotel, home or meeting address.",
  },
  {
    icon: Sofa,
    title: "Comfortable Vehicles",
    text: "Choose from sedans, vans and minibuses to suit your group and luggage.",
  },
  {
    icon: MousePointerClick,
    title: "Simple Booking",
    text: "Route, date, time and passengers are entered in one short form.",
  },
  {
    icon: Repeat,
    title: "Flexible Journey Options",
    text: "Plan a one-way trip or add a return journey in the same search.",
  },
  {
    icon: Globe2,
    title: "European Destinations",
    text: "Enter airports and cities in several European countries; each route is checked individually.",
  },
];

export function Benefits() {
  const left = BENEFITS.slice(0, 3);
  const right = BENEFITS.slice(3);
  return (
    <section
      id="services"
      aria-labelledby="benefits-title"
      className="relative overflow-hidden bg-pale py-16 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 sm:h-[42rem] sm:w-[42rem]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 sm:h-[30rem] sm:w-[30rem]"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Our services</Eyebrow>
          <h2
            id="benefits-title"
            className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
          >
            Why Choose <span className="text-primary">Europe Airport Taxi</span>
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            What a pre-arranged private transfer changes about your arrival.
          </p>
        </Reveal>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.8fr)_minmax(0,1fr)] lg:gap-8">
          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
            {left.map((b, i) => (
              <BenefitItem key={b.title} {...b} side="left" delay={i * 100} />
            ))}
          </ul>
          <Reveal className="mx-auto flex h-full items-center justify-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-2 top-8 rounded-full bg-primary/20 blur-3xl"
              />
              <img
                src={sedanTop}
                alt="Black executive sedan viewed from directly above"
                width={768}
                height={1344}
                loading="lazy"
                decoding="async"
                className="relative h-[25rem] w-auto drop-shadow-2xl sm:h-[30rem] lg:h-[34rem]"
              />
            </div>
          </Reveal>
          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3">
            {right.map((b, i) => (
              <BenefitItem key={b.title} {...b} side="right" delay={i * 100} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({
  icon: Icon,
  title,
  text,
  side,
  delay,
}: {
  icon: typeof Plane;
  title: string;
  text: string;
  side: "left" | "right";
  delay: number;
}) {
  return (
    <li className="h-full">
      <Reveal delay={delay} className="h-full">
        <div
          className={`group flex h-full items-start gap-3.5 ${side === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}
        >
          <span
            aria-hidden
            className={`mt-6 hidden h-px w-8 shrink-0 from-primary/60 to-transparent lg:block ${side === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"}`}
          />
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-card text-primary shadow-soft ring-1 ring-primary/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:ring-primary/35">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
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
  {
    code: "FRA",
    photo: PHOTOS["airport-fra"],
    welcome: "Frankfurt Airport",
    name: "Frankfurt Airport",
    city: "Frankfurt am Main",
    country: "Germany",
  },
  {
    code: "AMS",
    photo: PHOTOS["airport-ams"],
    welcome: "Schiphol Airport",
    name: "Amsterdam Schiphol",
    city: "Haarlemmermeer, near Amsterdam",
    country: "Netherlands",
  },
  {
    code: "CDG",
    photo: PHOTOS["airport-cdg"],
    welcome: "Charles de Gaulle Airport",
    name: "Paris Charles de Gaulle",
    city: "Roissy-en-France, near Paris",
    country: "France",
  },
  {
    code: "BCN",
    photo: PHOTOS["airport-bcn"],
    welcome: "Barcelona–El Prat Airport",
    name: "Barcelona–El Prat",
    city: "El Prat de Llobregat, near Barcelona",
    country: "Spain",
  },
  {
    code: "FCO",
    photo: PHOTOS["airport-fco"],
    welcome: "Fiumicino Airport",
    name: "Rome Fiumicino",
    city: "Fiumicino, near Rome",
    country: "Italy",
  },
  {
    code: "LHR",
    photo: PHOTOS["airport-lhr"],
    welcome: "Heathrow Airport",
    name: "London Heathrow",
    city: "Hillingdon, west London",
    country: "United Kingdom",
  },
];

export function Airports() {
  return (
    <section id="airports" aria-labelledby="airports-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>European airports</Eyebrow>
            <h2
              id="airports-title"
              className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
            >
              Major Airports <span className="text-primary">Across Europe</span>
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            Popular hubs travellers often ask about. Enter your airport in the booking form to plan
            a transfer.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AIRPORTS.map((a, i) => (
            <li key={a.code} className="h-full">
              <Reveal delay={i * 70} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-float focus-within:border-primary/40">
                  <figure className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={a.photo.src}
                      alt={a.photo.alt}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-overlay/80 via-overlay/10 to-transparent" />
                    <p className="absolute inset-x-4 bottom-3 font-display text-lg font-bold leading-tight text-navy-foreground sm:text-xl">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-navy-foreground/85">
                        Welcome to
                      </span>
                      {a.welcome}
                    </p>
                  </figure>
                  <PhotoCredit photo={a.photo} className="px-6 pt-2 sm:px-7" />
                  <div className="relative flex flex-1 flex-col p-6 pt-4 sm:p-7 sm:pt-4">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-pale px-3 py-1.5 text-[11px] font-bold tracking-widest text-primary ring-1 ring-primary/10">
                      <Plane className="h-3.5 w-3.5" /> {a.code}
                    </span>
                    <h3 className="mt-4 max-w-64 text-xl font-bold leading-snug text-navy">
                      {a.name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
                      {a.city} · {a.country}
                    </p>
                    <a
                      href="#book"
                      className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      Plan a transfer{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-10 rounded-3xl border border-border bg-pale p-6 sm:p-8">
          <h3 className="text-xl font-bold text-navy">Popular Airport Transfer Routes</h3>
          <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
            Example journeys travellers plan. Prices and journey times depend on the route, date and
            vehicle and are not shown until confirmed.
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {ROUTES.map((r) => (
              <li
                key={r}
                className="flex items-center gap-2 rounded-2xl bg-card px-4 py-3 text-[15px] font-semibold text-navy shadow-soft"
              >
                <Route className="h-4 w-4 shrink-0 text-primary" /> {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const ROUTES = [
  "Paris CDG to central Paris",
  "Amsterdam Schiphol to Amsterdam city centre",
  "Frankfurt Airport to Frankfurt city centre",
  "Barcelona–El Prat to Barcelona hotels",
  "Rome Fiumicino to central Rome",
  "London Heathrow to central London",
];

/* ---------- Fleet ---------- */
const FLEET = [
  {
    name: "Economy Sedan",
    img: economy,
    alt: "Black economy sedan on a European city street",
    use: "Suited to one to three passengers with standard luggage",
    icon: CarFront,
  },
  {
    name: "Business Sedan",
    img: business,
    alt: "Black executive sedan at an airport departures curb",
    use: "Suited to business travellers wanting a more spacious car",
    icon: Briefcase,
  },
  {
    name: "Business Van",
    img: van,
    alt: "Black passenger van at airport arrivals",
    use: "Suited to families and small groups with several suitcases",
    icon: Users,
  },
  {
    name: "Minibus",
    img: minibus,
    alt: "Black passenger minibus outside an airport terminal",
    use: "Suited to larger groups, sports gear or bulky luggage",
    icon: Luggage,
  },
];

export function Fleet() {
  return (
    <section
      id="fleet"
      aria-labelledby="fleet-title"
      className="bg-navy py-16 text-navy-foreground md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-primary-bright">Our fleet</Eyebrow>
          <h2
            id="fleet-title"
            className="mt-4 text-[2rem] font-extrabold leading-[1.12] sm:text-4xl md:text-5xl"
          >
            A Vehicle for <span className="text-primary-bright">Every Journey</span>
          </h2>
          <p className="mt-4 leading-7 text-navy-foreground/75">
            Choose by group size and luggage. The descriptions are a guide only; exact passenger and
            luggage capacity and vehicle models are confirmed for each journey.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FLEET.map((f, i) => (
            <li key={f.name}>
              <Reveal delay={i * 80}>
                <article className="group overflow-hidden rounded-3xl bg-navy-foreground/5 ring-1 ring-navy-foreground/10 transition-all hover:-translate-y-1 hover:ring-primary-bright/50">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={f.img}
                      alt={f.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{f.name}</h3>
                    <p className="mt-2 flex items-center gap-2 text-[15px] text-navy-foreground/75">
                      <f.icon className="h-4 w-4 text-primary-bright" /> {f.use}
                    </p>
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
  {
    icon: Route,
    title: "Enter Your Journey",
    text: "Add your pickup, drop-off, date, time and number of passengers.",
  },
  {
    icon: CarFront,
    title: "Choose Your Transfer",
    text: "Pick the vehicle category that suits your group and luggage.",
  },
  {
    icon: CalendarCheck,
    title: "Review Your Request",
    text: "Check the journey summary. Online confirmation and payment are not available yet.",
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">How it works</Eyebrow>
          <h2
            id="how-title"
            className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
          >
            How Airport Taxi <span className="text-primary">Booking Works</span>
          </h2>
        </Reveal>
        <ol className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          <span
            aria-hidden
            className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-primary/30 md:block"
          />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <Reveal delay={i * 120}>
                <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-teal text-primary-foreground shadow-float">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-coral text-xs font-bold text-coral-foreground">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-6 text-muted-foreground">
                  {s.text}
                </p>
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
  { name: "Germany", photo: PHOTOS["dest-germany"] },
  { name: "France", photo: PHOTOS["dest-france"] },
  { name: "Spain", photo: PHOTOS["dest-spain"] },
  { name: "Italy", photo: PHOTOS["dest-italy"] },
  { name: "Netherlands", photo: PHOTOS["dest-netherlands"] },
  { name: "Switzerland", photo: PHOTOS["dest-switzerland"] },
  { name: "Austria", photo: PHOTOS["dest-austria"] },
  { name: "Portugal", photo: PHOTOS["dest-portugal"] },
];

export function Destinations() {
  return (
    <section id="countries" aria-labelledby="dest-title" className="bg-pale py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Destinations</Eyebrow>
            <h2
              id="dest-title"
              className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
            >
              Popular Destinations <span className="text-primary">Across Europe</span>
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            Countries travellers often plan trips to. Coverage is checked route by route, so
            availability for a specific airport or address is confirmed when you make a request.
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {COUNTRIES.map((c, i) => (
            <li key={c.name}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft ring-1 ring-overlay/5">
                  <img
                    src={c.photo.src}
                    alt={c.photo.alt}
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover contrast-[1.04] saturate-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-overlay/90 via-overlay/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-overlay/25 px-3 py-2.5 font-display text-base font-bold text-navy-foreground backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:text-xl">
                    {c.name}
                  </figcaption>
                </figure>
                <PhotoCredit photo={c.photo} className="mt-1.5 px-1" />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PhotoCredit({ photo, className }: { photo: Photo; className?: string }) {
  return (
    <p className={`truncate text-[10px] leading-4 text-muted-foreground ${className ?? ""}`}>
      Photo:{" "}
      <a
        href={photo.source}
        target="_blank"
        rel="noopener noreferrer license"
        className="underline-offset-2 hover:text-primary hover:underline"
      >
        {photo.credit}
      </a>{" "}
      · {photo.license}
    </p>
  );
}

/* ---------- Trust ---------- */
const JOURNEY = [
  {
    icon: ClipboardList,
    title: "Clear details up front",
    text: "Your route, date, time and passenger count are captured in one place before you travel.",
  },
  {
    icon: MapPinned,
    title: "Direct to your address",
    text: "A private transfer takes your group straight to where you need to be, without changes.",
  },
  {
    icon: ShieldCheck,
    title: "Plan before you fly",
    text: "Arranging your ride in advance means one less thing to organise after landing.",
  },
  {
    icon: Headset,
    title: "Support before you travel",
    text: "Contact details are listed at the bottom of this page for questions or special requests.",
  },
];

export function Trust() {
  return (
    <section aria-labelledby="trust-title" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Your journey</Eyebrow>
          <h2
            id="trust-title"
            className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
          >
            A Calmer Way to <span className="text-primary">Arrive</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            You send the journey details; the route, vehicle and price are then confirmed with you
            before travel. Details of how each transfer is carried out will be published here once
            finalised.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-3xl bg-gradient-teal p-6 text-primary-foreground shadow-float">
            <Compass className="h-10 w-10 shrink-0" />
            <p className="font-display text-lg font-bold leading-snug">
              Land, meet your ride, and continue your journey.
            </p>
          </div>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {JOURNEY.map((j, i) => (
            <li key={j.title}>
              <Reveal delay={i * 80}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pale text-primary">
                    <j.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{j.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-muted-foreground">{j.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICES = [
  {
    icon: Plane,
    title: "Airport Pickup and Drop-off",
    text: "Travel to or from the terminal at a time you choose, with luggage loaded at the kerb.",
  },
  {
    icon: Building2,
    title: "Airport to Hotel Transfers",
    text: "Go straight from arrivals to your hotel entrance, using the hotel name or address as your drop-off.",
  },
  {
    icon: MapPinned,
    title: "Private City Transfers",
    text: "Move between stations, offices, venues and hotels within a city in a vehicle for your group only.",
  },
  {
    icon: Route,
    title: "Long-Distance Transfers",
    text: "Request a journey between cities or across borders; each long route is reviewed before it is confirmed.",
  },
];

export function Services() {
  return (
    <section id="transfer-services" aria-labelledby="services-title" className="pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow>Transfer types</Eyebrow>
          <h2
            id="services-title"
            className="mt-4 text-[2rem] font-extrabold leading-[1.12] text-navy sm:text-4xl md:text-5xl"
          >
            Airport Taxi Services <span className="text-primary">Across Europe</span>
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((sv, i) => (
            <li key={sv.title} className="h-full">
              <Reveal delay={i * 80} className="h-full">
                <article className="h-full rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-teal text-primary-foreground shadow-soft">
                    <sv.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold leading-snug text-navy">{sv.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-muted-foreground">{sv.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Pickup info ---------- */
const PICKUP = [
  {
    title: "Select an airport pickup",
    text: "Enter the airport name or code as your pickup location.",
  },
  {
    title: "Share your flight details",
    text: "Keep your flight number and arrival time ready so the pickup time can be agreed.",
  },
  {
    title: "Confirm the pickup point",
    text: "The exact meeting point at the terminal is agreed with you before travel.",
  },
  {
    title: "Passengers and luggage",
    text: "Give the number of passengers and large items so a suitable vehicle is chosen.",
  },
  {
    title: "Receive journey details",
    text: "Journey details are sent once your request is confirmed. Online confirmation is not live yet.",
  },
];

export function PickupInfo() {
  return (
    <section aria-labelledby="pickup-title" className="pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="rounded-[2rem] bg-pale p-6 sm:p-10">
          <h2
            id="pickup-title"
            className="text-[1.75rem] font-extrabold leading-[1.15] text-navy sm:text-4xl"
          >
            Airport Pickup <span className="text-primary">Information</span>
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PICKUP.map((p, i) => (
              <li key={p.title} className="rounded-2xl bg-card p-5 shadow-soft">
                <span className="font-display text-sm font-extrabold text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-bold leading-snug text-navy">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
