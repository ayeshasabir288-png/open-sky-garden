<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.

<!-- LOVABLE:END -->

# Europe Airport Taxi — Permanent Development Instructions

This file is the authoritative instruction set for future work on the Europe
Airport Taxi self-contained project. Follow these rules for every code change,
content update, design adjustment, test, build and deployment. If a request
appears to conflict with these rules, stop and ask for explicit permission
before proceeding.

## 1. Project information

- **Brand:** Europe Airport Taxi
- **Production domain:** https://europeairporttaxi.com/
- **Approved temporary website:** https://mannered-mediumblue-dolphin-07.hostingersite.com/
- **Technology:** TanStack Start, React, TypeScript, Vite and Nitro SSR
- **Hostinger build environment:** `NITRO_PRESET=node-server`
- **Production output:** `.output`
- **Server command:** `node .output/server/index.mjs`

The local self-contained project is the source of truth for source code and
local assets. Do not rely on external preview-hosted assets for production.

## 2. Project structure and implementation rules

- Homepage sections live in `src/components/home`.
- Booking validation lives in `src/lib/booking.ts` and must remain tested so a
  real booking API can replace the demo preview without touching layout.
- Airport guides use separate typed, source-attributed records per airport in
  `src/lib/airports` and shared presentation in `src/components/airports`.
- The validated airport slug route must serve only completed records. Do not
  create placeholder airport pages or mix facts between airports.
- Shared navigation accepts a homepage flag so existing in-page links remain
  unchanged at home and resolve back to the homepage from airport guides.
- Keep the static sitemap limited to published URLs. Add completed airport URLs
  only when publishing. Unpublished pages must not be listed.

## 3. Strict development rules

- Modify only the files and pages specifically requested.
- Never change unrelated content, design, components or functionality.
- Preserve the existing booking system.
- Never rebuild the website from scratch.
- Never modify the original ZIP backup.
- Test all changes before deployment.
- Report the exact files created or modified.
- Do not push to GitHub without explicit permission.
- Never rewrite published git history, including force pushes or rebasing,
  amending or squashing commits that are already pushed.
- Keep the connected branch in a working state because commits can sync back
  to Lovable.

## 4. Permanent SEO, AEO, GEO and content rules

### 4.1 Research and trust

- Verify the latest official Google Search Central updates before significant
  SEO or content development.
- Follow Google Search Essentials and current spam policies.
- Follow people-first content principles.
- Implement SEO, AEO, GEO, E-E-A-T and AI-search readability best practices.
- Research every airport, city, country and route individually.
- Use official airport and transport operator sources.
- Include useful contextual internal links and verified authoritative external
  links.
- Never invent prices, distances, travel times, terminal information or
  transport availability.
- Do not make unsupported claims about service coverage, reliability, vehicle
  availability, licensing, safety, reviews, partnerships or local knowledge.
- Avoid keyword stuffing, doorway pages, scaled low-value content, fake reviews
  and unsupported claims.

### 4.2 Content quality

- Write for travellers first, not for search engines.
- Give each airport, city, country and route page a distinct purpose and truly
  unique, verified information.
- Prefer clear answers, concise summaries, descriptive headings and scannable
  structure that is easy for people and AI search systems to understand.
- Add FAQs only when they answer real user questions and are supported by
  verified information.
- Keep facts source-attributed in the relevant typed data or content records.
- Provide balanced comparisons between private transfers, local taxis, trains
  and buses. Do not present one option as universally best without context.
- Include practical caveats where information can change, such as seasonal
  services, road conditions, strikes, terminal changes or operator updates.

### 4.3 Technical SEO

- Maintain unique metadata for every published page.
- Use correct canonical URLs.
- Maintain valid structured data that matches visible page content.
- Maintain breadcrumbs where they improve navigation and hierarchy.
- Maintain a clean XML sitemap containing only published, indexable URLs.
- Do not add unpublished, thin, duplicate or doorway pages to the sitemap.
- Ensure important pages are crawlable and internally reachable.
- Avoid deceptive redirects, hidden text, cloaking and manipulative link
  patterns.

## 5. Permanent design and UX rules

- Maintain the premium light teal-and-white brand identity.
- Use gorgeous cinematic European photography.
- Create clear, distinctive and visually attractive sections.
- Avoid excessive small cards, clutter and generic AI-generated layouts.
- Use professional SVG or Lucide icons instead of emojis.
- Preserve excellent desktop, tablet and mobile responsiveness.
- Optimize images, animations and Core Web Vitals.
- Keep typography, spacing, contrast and hierarchy polished and readable.
- Do not introduce heavy effects or layout shifts that harm performance.
- Prefer purposeful visual storytelling over decorative filler.

## 6. Image preservation and asset rules

- Never remove or replace approved images without explicit permission.
- Preserve the favourite aerial European river, bridge and road image.
- Preserve all six automatic homepage hero slides.
- Keep all 30 recovered WebP files permanently in the local project.
- All new images must be included in the source project and production build.
- Never depend on Lovable preview-hosted image assets.
- Preserve all required photographer credits and licence attribution.
- If an image is added, moved or renamed, verify the production build includes
  it and that attribution remains visible where required.
- Do not replace approved photography with generic stock imagery or generated
  images unless the user explicitly requests it.

## 7. Booking system rules

- Preserve the existing booking system unless a change is explicitly requested.
- Keep validation logic in `src/lib/booking.ts`.
- Keep booking tests passing.
- Do not couple validation to layout or visual components.
- If a real booking API is introduced later, replace the demo preview through
  the existing validation boundary rather than redesigning unrelated layout.
- Do not expose secrets, API keys or private endpoints in browser code.

## 8. Testing rules

Before deployment, verify all applicable checks:

- Run the project's available test, typecheck, lint and build commands.
- Confirm `NITRO_PRESET=node-server` produces the expected `.output`.
- Confirm the server starts with `node .output/server/index.mjs`.
- Test desktop, tablet and mobile layouts.
- Test all changed links, routes, navigation states and canonical URLs.
- Verify metadata, breadcrumbs, structured data and sitemap on changed pages.
- Verify local images load and are included in the production build.
- Verify image credits and licence attribution remain present.
- Verify the booking flow and validation still work.
- Verify the temporary website remains `noindex` after every approved
  deployment.

## 9. Hostinger safety rules

- Deploy only to the approved temporary website:
  https://mannered-mediumblue-dolphin-07.hostingersite.com/
- Never touch the existing europeairporttaxi.com WordPress website.
- Never modify other Hostinger websites.
- Never change DNS without explicit approval.
- Never purchase hosting or additional services.
- Preserve and reverify temporary-site noindex protection after each approved
  deployment.
- Do not blindly overwrite existing Passenger configuration when restoring
  HTTP headers.
- Never apply temporary noindex protection to the future production website.
- Confirm the deployment target before any deployment action.
- Do not deploy until all requested changes are tested and the exact changed
  files have been reported.

## 10. Definition of done

A task is complete only when:

1. Only the requested files and pages were changed.
2. Existing approved content, images and functionality were preserved.
3. SEO, design, image, booking, testing and Hostinger rules were respected.
4. All applicable tests and the production build passed.
5. No deployment or external side effect occurred without explicit permission.
6. The exact files created or modified were reported.
