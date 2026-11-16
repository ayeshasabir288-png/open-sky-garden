import { describe, expect, it } from "vitest";
import { validateBooking, type BookingInput } from "./booking";

const today = new Date(2026, 10, 10);
const ok: BookingInput = {
  pickup: "Paris CDG",
  dropoff: "Louvre",
  date: "2026-11-12",
  time: "10:00",
  passengers: 2,
  returnTrip: false,
};

describe("validateBooking", () => {
  it("accepts a complete future journey", () => expect(validateBooking(ok, today)).toEqual({}));
  it("rejects a past pickup date", () =>
    expect(validateBooking({ ...ok, date: "2026-11-09" }, today).date).toBeDefined());
  it("requires pickup and drop-off", () => {
    const e = validateBooking({ ...ok, pickup: "", dropoff: "" }, today);
    expect(e.pickup).toBeDefined();
    expect(e.dropoff).toBeDefined();
  });
  it("rejects 0 passengers", () =>
    expect(validateBooking({ ...ok, passengers: 0 }, today).passengers).toBeDefined());
  it("requires return date not before pickup", () =>
    expect(
      validateBooking(
        { ...ok, returnTrip: true, returnDate: "2026-11-11", returnTime: "09:00" },
        today,
      ).returnDate,
    ).toBeDefined());
});
