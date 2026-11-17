# Airport directory delivery

## Pages created
- `/airports/`
- `/airports/frankfurt-airport-transfer/`
- `/airports/amsterdam-schiphol-airport-transfer/`
- `/airports/paris-cdg-airport-transfer/`
- `/airports/barcelona-airport-transfer/`
- `/airports/rome-fiumicino-airport-transfer/`
- `/airports/london-heathrow-airport-transfer/`

## Files
New: `src/components/airports/AirportParts.tsx`, `AirportPage.tsx`, `AirportsDirectory.tsx`; `src/lib/airports/types.ts`, `index.ts`, `seo.ts`, `frankfurt.ts`, `amsterdam.ts`, `paris.ts`, `barcelona.ts`, `rome.ts`, `heathrow.ts`, `airports.test.ts`; `src/routes/airports.index.tsx`, `src/routes/airports.$slug.tsx`; `public/sitemap.xml`; this review record.
Changed: `src/components/home/SiteHeader.tsx`, `src/components/home/Closing.tsx` (requested airport navigation and footer links only); `src/router.tsx` (trailing-slash URL consistency); `AGENTS.md`; `roadmap.md`. `src/routeTree.gen.ts` regenerated automatically, not manually edited.

Homepage hero, booking logic, photographs, credits, content sections, theme, metadata and original FAQ wording were not edited.

## Verification
All seven new URLs returned 200 at 1440, 768 and 390 pixels. Each has one H1 in initial HTML, a self-referencing canonical, unique metadata and WebPage/BreadcrumbList JSON-LD. No horizontal page overflow, failed images or browser errors were observed. Unknown airport slug returned 404. Search by LHR, combined country/search no-result state, reset filters, keyboard-accessible native FAQ, header → directory → guide, footer → Heathrow, return to homepage anchors and a completed demo form submission passed. Desktop comparison tables and mobile per-option detail cards were inspected visually. Homepage auto-slide advanced to slide 2 after approximately six seconds while the typed pickup stayed unchanged and form geometry stayed fixed.

All 11 tests passed. Lint: zero errors, eight existing Fast Refresh warnings. Latest harness production build/typecheck: build OK. No manual production build/typecheck was run, in accordance with the platform's automatic checking workflow. Real published-network performance and search indexing are not verified; the project is not published.

## Factual sources checked 17 November 2026
Each airport record contains precise source URLs and the claims they support; all appear on its page.
- Frankfurt: Frankfurt Airport rail, bus, Terminal 3 and road-transport guides; RMV. Current Terminal 3 opening and former Terminal 2 airline migration included.
- Amsterdam: Schiphol public transport, taxi, arrivals and assistance guides; NS Schiphol and airport rail guides. About 17-minute Sprinter journey included; outdated 2025 fare not reused.
- Paris: Île-de-France Mobilités RoissyBus closure and Express 9517; RATP airport ticket guidance; Service Public 2026 taxi rules; Paris Aéroport easy-read guide and official Extime naming guidance. RoissyBus closure on 1 March 2026 included; upcoming terminal renumbering is distinguished from current names.
- Barcelona: Aena airport, rail, taxi and terminal-shuttle guides; TMB airport metro; Aerobús lines/stops; Renfe Sants. L9 airport ticket exclusions and A1/A2 distinctions included.
- Rome: ADR current terminal maps, trains, taxi and buses; Trenitalia Leonardo Express. €14 rail fare and qualifying €55 taxi fare boundary explicitly attributed.
- Heathrow: Heathrow central-London, Elizabeth line, terminal-transfer, accessible-travel, local-bus and transport FAQ guides; TfL. Conflicting/possibly stale advertised fares were not copied: official fare links are provided instead.

Google Search Central Search Essentials, helpful people-first content and spam-policy documentation were consulted. No ranking guarantees or new FAQ rich-result claims were added.

## Omitted or unverified
ICAO codes are optional in the brief and omitted rather than added without a checked source. Exact road distances, unverified taxi payment methods, private prices, airport-specific coverage, vehicle availability, waiting periods, child-seat availability and driver meeting points are not invented. CDG terminal-specific taxi doors and exact station-access paths are not stated without current airport confirmation. Official Paris Aéroport transport pages returned empty content during direct checks, so current operator/government sources supply transport guidance and the guide explicitly avoids unverified pickup detail.

All private transfer interactions are labelled demo/enquiry preview and state that no enquiry is sent. Fleet remains general guidance, not an airport availability claim. Current operator fare links replace unverified prices.

## Sitemap and deployment
The brief prohibits including unpublished pages. Because no page is published, the XML sitemap is deliberately empty and contains no airport URLs. Completed canonical airport URLs must be added when publication is authorised. No deployment was performed.
