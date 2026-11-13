import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-aerial.jpg";
import { BookingForm } from "./BookingForm";

/**
 * Future animation slot: set HERO_VIDEO_SRC to an optimized aerial MP4/WebM (top-down drone
 * footage of roads and vehicles). It plays only on wider screens without reduced motion;
 * everyone else sees the poster image.
 */
const HERO_VIDEO_SRC: string | null = null;

export function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (!HERO_VIDEO_SRC) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    setPlayVideo(!reduce && wide);
  }, []);

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Aerial view of black taxis and vans on a European motorway beside a river and historic city" width={1920} height={1088} fetchPriority="high" className="h-full w-full object-cover object-[60%_center]" />
        {playVideo && HERO_VIDEO_SRC && (
          <video className="absolute inset-0 h-full w-full object-cover" src={HERO_VIDEO_SRC} poster={heroImg} autoPlay muted loop playsInline aria-hidden />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-overlay/70 via-overlay/35 to-overlay/75 md:bg-gradient-to-r md:from-overlay/80 md:via-overlay/40 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pt-32 pb-10 sm:px-6 md:pt-40 md:pb-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 bg-navy-foreground/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" /> Airport taxi & private transfers
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-primary-bright">Airport Taxi</span> Transfers Across <span className="text-primary-bright">Europe</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
            Arrange airport taxi and private transfer journeys between major European airports, cities and destinations. Enter your pickup and drop-off details to start planning your journey.
          </p>
        </div>
        <div className="mt-8 md:mt-12">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
