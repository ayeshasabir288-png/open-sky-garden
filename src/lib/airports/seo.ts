import type { Airport } from "./types";
const SITE = "https://europeairporttaxi.com";
export function airportHead(airport?: Airport) {
  const path = airport ? `/airports/${airport.slug}/` : "/airports/";
  const title = airport
    ? `${airport.shortName} Airport Transfers (${airport.code}) | Europe Airport Taxi`
    : "European Airports & Transfer Guides | Europe Airport Taxi";
  const description = airport
    ? airport.description
    : "Explore six European airport guides. Compare official rail, taxi and bus options, find terminal information and preview a transfer enquiry.";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: SITE + path },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE + path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebPage", name: title, description, url: SITE + path },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
                { "@type": "ListItem", position: 2, name: "Airports", item: SITE + "/airports/" },
                ...(airport
                  ? [
                      {
                        "@type": "ListItem",
                        position: 3,
                        name: airport.shortName,
                        item: SITE + path,
                      },
                    ]
                  : []),
              ],
            },
          ],
        }),
      },
    ],
  };
}
