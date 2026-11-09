import { useId, useState, type ReactNode } from "react";
import { CalendarDays, Clock, MapPin, Minus, Navigation, Plus, Search, Users, Info } from "lucide-react";
import { MAX_PASSENGERS, MIN_PASSENGERS, toIsoDate, validateBooking, type BookingErrors, type BookingInput } from "@/lib/booking";
import { cn } from "@/lib/utils";

/**
 * Booking search form. No booking backend is connected yet: on valid submit it shows a
 * clearly labelled preview. Replace `onSearch` handling with a real API call later.
 */
export function BookingForm({ onSearch }: { onSearch?: (v: BookingInput) => void }) {
  const id = useId();
  const [v, setV] = useState<BookingInput>({ pickup: "", dropoff: "", date: "", time: "", passengers: 1, returnTrip: false, returnDate: "", returnTime: "" });
  const [errors, setErrors] = useState<BookingErrors>({});
  const [preview, setPreview] = useState<BookingInput | null>(null);
  const today = toIsoDate(new Date());

  const set = <K extends keyof BookingInput>(k: K, val: BookingInput[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateBooking(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setPreview(null);
      const first = Object.keys(errs)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setPreview(v);
    onSearch?.(v);
  };

  return (
    <div id="book" className="w-full">
      <form onSubmit={submit} noValidate aria-label="Search airport transfer" className="rounded-[1.75rem] bg-card p-3 shadow-float ring-1 ring-border/60">
        <div className="grid gap-2 lg:grid-cols-[1.4fr_1.4fr_1fr_0.8fr_0.9fr_auto] lg:gap-0 lg:divide-x lg:divide-border">
          <Field id={`${id}-pickup`} label="Pickup location" icon={<MapPin />} error={errors.pickup}>
            <input id={`${id}-pickup`} required autoComplete="off" placeholder="Airport, hotel or address" value={v.pickup} onChange={(e) => set("pickup", e.target.value)} aria-invalid={!!errors.pickup} aria-describedby={errors.pickup ? `${id}-pickup-err` : undefined} className={inputCls} />
          </Field>
          <Field id={`${id}-dropoff`} label="Drop-off location" icon={<Navigation />} error={errors.dropoff}>
            <input id={`${id}-dropoff`} required autoComplete="off" placeholder="Where to?" value={v.dropoff} onChange={(e) => set("dropoff", e.target.value)} aria-invalid={!!errors.dropoff} aria-describedby={errors.dropoff ? `${id}-dropoff-err` : undefined} className={inputCls} />
          </Field>
          <Field id={`${id}-date`} label="Pickup date" icon={<CalendarDays />} error={errors.date}>
            <input id={`${id}-date`} type="date" required min={today} value={v.date} onChange={(e) => set("date", e.target.value)} aria-invalid={!!errors.date} aria-describedby={errors.date ? `${id}-date-err` : undefined} className={inputCls} />
          </Field>
          <Field id={`${id}-time`} label="Pickup time" icon={<Clock />} error={errors.time}>
            <input id={`${id}-time`} type="time" required value={v.time} onChange={(e) => set("time", e.target.value)} aria-invalid={!!errors.time} aria-describedby={errors.time ? `${id}-time-err` : undefined} className={inputCls} />
          </Field>
          <Field id={`${id}-passengers`} label="Passengers" icon={<Users />} error={errors.passengers}>
            <div className="flex items-center gap-2">
              <StepBtn label="Remove passenger" disabled={v.passengers <= MIN_PASSENGERS} onClick={() => set("passengers", v.passengers - 1)}><Minus className="h-3.5 w-3.5" /></StepBtn>
              <input id={`${id}-passengers`} type="number" inputMode="numeric" min={MIN_PASSENGERS} max={MAX_PASSENGERS} value={v.passengers} onChange={(e) => set("passengers", Number(e.target.value))} className={cn(inputCls, "w-8 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none")} />
              <StepBtn label="Add passenger" disabled={v.passengers >= MAX_PASSENGERS} onClick={() => set("passengers", v.passengers + 1)}><Plus className="h-3.5 w-3.5" /></StepBtn>
            </div>
          </Field>
          <div className="p-1 lg:pl-3">
            <button type="submit" className="flex h-full min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-teal px-6 font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:rounded-[1.25rem]">
              <Search className="h-4 w-4" /> Search Transfer
            </button>
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-3 border-t border-border px-3 pt-3 pb-1 sm:flex-row sm:items-center">
          <label className="inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-navy">
            <span className="relative inline-flex">
              <input type="checkbox" className="peer sr-only" checked={v.returnTrip} onChange={(e) => set("returnTrip", e.target.checked)} />
              <span className="h-6 w-11 rounded-full bg-input transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring" />
              <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-card shadow transition-transform peer-checked:translate-x-5" />
            </span>
            Add return journey
          </label>
          {v.returnTrip && (
            <div className="grid flex-1 grid-cols-2 gap-2 sm:max-w-md">
              <div>
                <label htmlFor={`${id}-returnDate`} className="sr-only">Return date</label>
                <input id={`${id}-returnDate`} type="date" min={v.date || today} value={v.returnDate} onChange={(e) => set("returnDate", e.target.value)} aria-invalid={!!errors.returnDate} className="h-11 w-full rounded-xl border border-input bg-pale/60 px-3 text-sm text-navy" />
                {errors.returnDate && <p role="alert" className="mt-1 text-xs text-destructive">{errors.returnDate}</p>}
              </div>
              <div>
                <label htmlFor={`${id}-returnTime`} className="sr-only">Return time</label>
                <input id={`${id}-returnTime`} type="time" value={v.returnTime} onChange={(e) => set("returnTime", e.target.value)} aria-invalid={!!errors.returnTime} className="h-11 w-full rounded-xl border border-input bg-pale/60 px-3 text-sm text-navy" />
                {errors.returnTime && <p role="alert" className="mt-1 text-xs text-destructive">{errors.returnTime}</p>}
              </div>
            </div>
          )}
        </div>
      </form>

      {preview && (
        <div role="status" className="mt-3 animate-rise rounded-2xl border border-primary/30 bg-card/95 p-4 text-sm text-navy shadow-soft backdrop-blur">
          <p className="flex items-center gap-2 font-semibold text-primary"><Info className="h-4 w-4" /> Search preview (demo)</p>
          <p className="mt-1">
            {preview.pickup} → {preview.dropoff} · {preview.date} at {preview.time} · {preview.passengers} passenger{preview.passengers > 1 ? "s" : ""}
            {preview.returnTrip && ` · return ${preview.returnDate} at ${preview.returnTime}`}
          </p>
          <p className="mt-1 text-muted-foreground">Online booking isn't connected yet, so no availability or prices are shown. Your details have not been sent anywhere.</p>
        </div>
      )}
    </div>
  );
}

const inputCls = "w-full bg-transparent text-[15px] font-medium text-navy placeholder:text-muted-foreground/80 focus:outline-none";

function Field({ id, label, icon, error, children }: { id: string; label: string; icon: ReactNode; error?: string | undefined; children: ReactNode }) {
  return (
    <div className={cn("group rounded-2xl px-4 py-2.5 transition-colors focus-within:bg-pale/70 lg:rounded-none lg:first:rounded-l-[1.25rem]", error && "bg-destructive/5")}>
      <label htmlFor={id} className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="text-primary [&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

function StepBtn({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: ReactNode }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} disabled={disabled} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-input text-navy transition-colors hover:border-primary hover:text-primary disabled:opacity-40">
      {children}
    </button>
  );
}
