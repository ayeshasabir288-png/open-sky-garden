import { createFileRoute } from "@tanstack/react-router";
import { AirportsDirectory } from "@/components/airports/AirportsDirectory";
import { airportHead } from "@/lib/airports/seo";
export const Route = createFileRoute("/airports/")({
  head: () => airportHead(),
  component: AirportsDirectory,
});
