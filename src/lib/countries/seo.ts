const SITE = "https://europeairporttaxi.com";
const PATH = "/countries/";
const TITLE = "European Airport Transfer Guides by Country | Europe Airport Taxi";
const DESCRIPTION =
  "Explore six country-specific airport guides with arrival information, transport comparisons and official links for planning your onward journey.";

export function countriesHead() {
  return {
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE + PATH },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE + PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: TITLE,
              description: DESCRIPTION,
              url: SITE + PATH,
              breadcrumb: { "@id": SITE + PATH + "#breadcrumb" },
            },
            {
              "@type": "BreadcrumbList",
              "@id": SITE + PATH + "#breadcrumb",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
                { "@type": "ListItem", position: 2, name: "Countries", item: SITE + PATH },
              ],
            },
          ],
        }),
      },
    ],
  };
}
