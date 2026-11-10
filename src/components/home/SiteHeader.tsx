import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./primitives";
import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Airports", href: "#airports" },
  { label: "Countries", href: "#countries" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-2 z-50 px-3 sm:top-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-card/60 bg-card/85 py-1.5 pl-3.5 pr-1.5 backdrop-blur-xl transition-shadow",
          scrolled ? "shadow-float" : "shadow-soft",
        )}
      >
        <a href="#top" aria-label="Europe Airport Taxi home"><Logo /></a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-navy/80 transition-colors hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-ring">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#book" className="hidden rounded-full bg-gradient-teal px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex">
            Book Now
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-pale text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="mx-auto mt-2 max-w-6xl animate-rise rounded-3xl border border-border bg-card p-3 shadow-float lg:hidden">
          <ul className="grid gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium text-navy hover:bg-pale hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#book" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-gradient-teal px-4 py-3.5 text-center font-semibold text-primary-foreground">
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
