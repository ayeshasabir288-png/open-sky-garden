import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./primitives";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Airports", href: "/airports/" },
  { label: "Countries", href: "#countries" },
  { label: "Services", href: "#transfer-services" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader({ homepage = true }: { homepage?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [footerAtTop, setFooterAtTop] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const wasOpen = useRef(false);
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 24);
      const footer = document.getElementById("contact");
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      setFooterAtTop(isMobile && !!footer && footer.getBoundingClientRect().top <= 80);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        e.preventDefault();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open && !wasOpen.current) {
      const first = mobileNavRef.current?.querySelector<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      first?.focus();
    } else if (!open && wasOpen.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  const trapMobileFocus = (e: ReactKeyboardEvent<HTMLElement>) => {
    if (e.key !== "Tab") return;
    const items = Array.from(
      mobileNavRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
    );
    if (!items.length) return;
    const first = items.at(0);
    const last = items.at(-1);
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-2 z-50 px-3 sm:top-4 sm:px-6",
        footerAtTop && "invisible max-sm:pointer-events-none",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full border border-card/60 bg-card/85 py-1.5 pl-3.5 pr-1.5 backdrop-blur-xl transition-shadow",
          scrolled ? "shadow-float" : "shadow-soft",
        )}
      >
        <a
          href={homepage ? "#top" : "/#top"}
          aria-label="Europe Airport Taxi home"
          className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Logo />
        </a>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                {n.label === "Airports" ? (
                  <Link
                    to="/airports/"
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {n.label}
                  </Link>
                ) : n.label === "Countries" ? (
                  <Link
                    to="/countries/"
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    href={homepage ? n.href : `/${n.href}`}
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    {n.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={homepage ? "#book" : "/#book"}
            className="hidden rounded-full bg-gradient-teal px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            Book Now
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-pale text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <nav
        ref={mobileNavRef}
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        onKeyDown={trapMobileFocus}
        className="mx-auto mt-2 max-h-[calc(100svh-6rem)] max-w-6xl overflow-y-auto rounded-3xl border border-border bg-card p-3 shadow-float lg:hidden"
      >
        <ul className="grid gap-1">
          {NAV.map((n) => (
            <li key={n.href}>
              {n.label === "Airports" ? (
                <Link
                  to="/airports/"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-navy hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {n.label}
                </Link>
              ) : n.label === "Countries" ? (
                <Link
                  to="/countries/"
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-navy hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  href={homepage ? n.href : `/${n.href}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-medium text-navy hover:bg-pale hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {n.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href={homepage ? "#book" : "/#book"}
          onClick={() => setOpen(false)}
          className="mt-2 block rounded-2xl bg-gradient-teal px-4 py-3.5 text-center font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}
