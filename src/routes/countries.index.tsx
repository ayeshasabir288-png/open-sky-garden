import { createFileRoute } from "@tanstack/react-router";
import { CountriesDirectory } from "@/components/countries/CountriesDirectory";
import { countriesHead } from "@/lib/countries/seo";

export const Route = createFileRoute("/countries/")({
  head: () => countriesHead(),
  component: CountriesDirectory,
});
