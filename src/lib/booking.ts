export type BookingInput = {
  pickup: string;
  dropoff: string;
  date: string; // yyyy-mm-dd
  time: string; // hh:mm
  passengers: number;
  returnTrip: boolean;
  returnDate?: string;
  returnTime?: string;
};

export type BookingErrors = Partial<Record<keyof BookingInput, string>>;

export const MIN_PASSENGERS = 1;
export const MAX_PASSENGERS = 16;

export function toIsoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Validates the booking search form. `today` is injectable for testing. */
export function validateBooking(v: BookingInput, today: Date = new Date()): BookingErrors {
  const e: BookingErrors = {};
  const todayIso = toIsoDate(today);
  if (v.pickup.trim().length < 2) e.pickup = "Please enter a pickup location.";
  if (v.dropoff.trim().length < 2) e.dropoff = "Please enter a drop-off location.";
  if (!e.pickup && !e.dropoff && v.pickup.trim().toLowerCase() === v.dropoff.trim().toLowerCase())
    e.dropoff = "Drop-off must differ from pickup.";
  if (!v.date) e.date = "Please choose a pickup date.";
  else if (v.date < todayIso) e.date = "Pickup date can't be in the past.";
  if (!v.time) e.time = "Please choose a pickup time.";
  if (!Number.isInteger(v.passengers) || v.passengers < MIN_PASSENGERS || v.passengers > MAX_PASSENGERS)
    e.passengers = `Choose between ${MIN_PASSENGERS} and ${MAX_PASSENGERS} passengers.`;
  if (v.returnTrip) {
    if (!v.returnDate) e.returnDate = "Please choose a return date.";
    else if (v.date && v.returnDate < v.date) e.returnDate = "Return can't be before pickup.";
    if (!v.returnTime) e.returnTime = "Please choose a return time.";
  }
  return e;
}
