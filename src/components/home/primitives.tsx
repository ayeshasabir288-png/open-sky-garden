import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Content is visible by default (server HTML, no JS, failed scripts, reduced motion).
 * Only elements still below the fold after hydration are briefly hidden, then fade in on scroll.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.remove("reveal-pending");
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, []);
  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${Math.min(delay, 150)}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary",
        className,
      )}
    >
      <span className="h-px w-6 bg-primary-bright" aria-hidden />
      {children}
    </p>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-teal text-primary-foreground shadow-soft">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M3 18c4-1 7-4 9-8s5-6 9-6" />
          <path d="M14.5 6.5 20 4l-2.5 5.5" />
          <path d="M3 21h18" strokeDasharray="2 2.5" />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-[15px] font-extrabold leading-none tracking-tight",
          inverted ? "text-navy-foreground" : "text-navy",
        )}
      >
        Europe<span className="text-primary">Airport</span>Taxi
      </span>
    </span>
  );
}
