import { describe, it, expect } from "vitest";
import { AIRPORTS } from "./index";
import { filterAirports } from "./types";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
describe("Airport directory rules", () => {
  it("starts with the six requested airports", () =>
    expect(AIRPORTS.map((a) => a.code)).toEqual(["FRA", "AMS", "CDG", "BCN", "FCO", "LHR"]));
  it("searches by airport IATA code", () =>
    expect(filterAirports(AIRPORTS, " lhr ", "All countries").map((a) => a.code)).toEqual(["LHR"]));
  it("filters by the selected country", () =>
    expect(filterAirports(AIRPORTS, "", "Germany").map((a) => a.code)).toEqual(["FRA"]));
  it("combines country and search without returning a wrong airport", () =>
    expect(filterAirports(AIRPORTS, "LHR", "Germany")).toEqual([]));
  it("matches the directory and every completed airport URL", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const path of ["/airports/", ...AIRPORTS.map((a) => `/airports/${a.slug}/`)])
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
