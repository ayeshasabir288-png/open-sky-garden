import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { AIRPORTS } from "@/lib/airports";
import { airportHead, notFoundHead } from "@/lib/airports/seo";
import { AirportPage } from "@/components/airports/AirportPage";
export const Route = createFileRoute("/airports/$slug")({
  loader: ({ params }) => {
    const airport = AIRPORTS.find((a) => a.slug === params.slug);
    if (!airport) throw notFound();
    return airport;
  },
  head: ({ loaderData }) => (loaderData ? airportHead(loaderData) : notFoundHead()),
  component: Detail,
  errorComponent: () => (
    <div className="p-12">
      <h1>This airport guide did not load</h1>
      <Link to="/airports/">Airport directory</Link>
    </div>
  ),
  notFoundComponent: () => (
    <div className="p-12">
      <h1>Airport guide not found</h1>
      <Link to="/airports/">Airport directory</Link>
    </div>
  ),
});
function Detail() {
  const airport = Route.useLoaderData();
  return <AirportPage airport={airport} />;
}
