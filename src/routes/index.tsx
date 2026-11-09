import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { Airports, Benefits, Destinations, Fleet, HowItWorks, Intro, Trust } from "@/components/home/Sections";
import { Faq, FAQS, FinalCta, SiteFooter } from "@/components/home/Closing";

const SITE = "https://europeairporttaxi.com/";
const TITLE = "Europe Airport Taxi | Airport Transfers Across Europe";
const DESC = "Book an airport taxi or private transfer between major European airports, cities and hotels. Simple booking for sedans, vans and minibuses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: SITE },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", name: "Europe Airport Taxi", url: SITE },
        { "@type": "WebSite", name: "Europe Airport Taxi", url: SITE },
        { "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      ] }) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Benefits />
        <Airports />
        <Fleet />
        <HowItWorks />
        <Destinations />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
