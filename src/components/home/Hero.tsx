import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slideAirport from "@/assets/hero-slide-sedan-airport.jpg";
import slideVan from "@/assets/hero-slide-van-highway.jpg";
import slideHotel from "@/assets/hero-slide-sedan-hotel.jpg";
import slideAerial from "@/assets/hero-aerial.jpg";
import { BookingForm } from "./BookingForm";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    img: slideAirport,
    alt: "Black luxury sedan driving past a modern European airport terminal at sunset",
    title: (
      <>
        <span className="text-primary-bright">Airport Taxi</span> Transfers Across{" "}
        <span className="text-primary-bright">Europe</span>
      </>
    ),
    text: "Explore airport taxi and private transfer journeys between European airports, cities and destinations.",
  },
  {
    img: slideVan,
    alt: "Black executive van travelling along a scenic European mountain highway",
    title: (
      <>
        Comfortable Transfers for <span className="text-primary-bright">Every Journey</span>
      </>
    ),
    text: "Explore vehicle options for individuals, families and groups, with journey details tailored to your requirements.",
  },
  {
    img: slideHotel,
    alt: "Black executive sedan arriving outside an elegant European hotel at dusk",
    title: (
      <>
        From Airports to <span className="text-primary-bright">Hotels</span> and City Destinations
      </>
    ),
    text: "Plan airport pickups, hotel transfers and journeys to your chosen destination through one simple interface.",
  },
  {
    img: slideAerial,
    alt: "Aerial view of black vehicles travelling on a European motorway beside a river and historic city",
    title: (
      <>
        Discover More of <span className="text-primary-bright">Europe</span> by Road
      </>
    ),
    text: "Explore transfer routes connecting major European airports and popular city destinations.",
  },
];
const INTERVAL = 6000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false); // enabled after mount unless reduced motion
  const [paused, setPaused] = useState(false);
  const resumeT = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setAuto(!mq.matches);
    set();
    mq.addEventListener("change", set);
    const vis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", vis);
    return () => {
      mq.removeEventListener("change", set);
      document.removeEventListener("visibilitychange", vis);
    };
  }, []);

  useEffect(() => {
    if (!auto || paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [active, auto, paused]);

  // Manual control pauses autoplay, then resumes after a quiet period.
  const go = useCallback((i: number) => {
    setActive((i + SLIDES.length) % SLIDES.length);
    setPaused(true);
    clearTimeout(resumeT.current);
    resumeT.current = setTimeout(() => !document.hidden && setPaused(false), INTERVAL * 1.5);
  }, []);
  useEffect(() => () => clearTimeout(resumeT.current), []);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-overlay">
        {SLIDES.map((s, i) => (
          <img
            key={i}
            src={s.img}
            alt={i === active ? s.alt : ""}
            aria-hidden={i !== active}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            className={cn(
              "hero-slide absolute inset-0 h-full w-full object-cover object-[65%_center]",
              i === active && "is-active",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/75 via-overlay/45 to-overlay/80 md:bg-gradient-to-r md:from-overlay/85 md:via-overlay/50 md:to-overlay/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pt-32 pb-10 sm:px-6 md:pt-40 md:pb-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 bg-navy-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" /> Airport taxi & private
            transfers
          </p>
          {/* All slide texts share one grid cell so the height never shifts between slides. */}
          <div className="mt-5 grid">
            {SLIDES.map((s, i) => {
              const on = i === active;
              const Heading = i === 0 ? "h1" : "p";
              return (
                <div
                  key={i}
                  className={cn(
                    "hero-copy col-start-1 row-start-1",
                    i === 0 && "hero-copy-primary",
                    on && "is-active",
                  )}
                  aria-hidden={i !== 0 && !on}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${SLIDES.length}`}
                >
                  <Heading
                    id={i === 0 ? "hero-title" : undefined}
                    className="hero-copy-title font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-navy-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    {s.title}
                  </Heading>
                  <p className="hero-copy-text mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/90 sm:text-lg">
                    {s.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="grid h-9 w-9 place-items-center rounded-full border border-navy-foreground/30 bg-navy-foreground/10 text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/20 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === active}
                  className="grid h-6 place-items-center px-0.5 focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span
                    className={cn(
                      "block h-1.5 rounded-full transition-all duration-500",
                      i === active ? "w-7 bg-primary-bright" : "w-1.5 bg-navy-foreground/50",
                    )}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="grid h-9 w-9 place-items-center rounded-full border border-navy-foreground/30 bg-navy-foreground/10 text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/20 focus-visible:outline-2 focus-visible:outline-ring"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        {/* Booking form sits outside the slides so it never re-renders, moves or resets. */}
        <div className="mt-8 md:mt-10">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
