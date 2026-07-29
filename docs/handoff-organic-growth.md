# Handoff — organic growth work on bodytransportsolutions.co.za

Written for whoever (human or agent) picks this up next. Branch:
`claude/marketing-audit-organic-growth-57kc9p`, 6 commits ahead of `main`,
working tree clean as of this handoff. Not yet merged or PR'd.

## The business, in one paragraph

Body Transport Solutions (Pty) Ltd — CIPC reg 2026/464849/07, founded 2026 —
is a B2B refrigerated human-remains transport operator based in Cato Ridge,
KwaZulu-Natal, South Africa. Customers are funeral parlours, mortuaries,
hospitals, insurers and repatriation coordinators, never the public directly.
The company is explicitly transport-only: no storage, embalming, funeral
arrangement. That distinction is load-bearing throughout the site's copy —
every page carries a "transport-only disclaimer" — and it matters for any
new content: don't blur it.

NAP (keep identical everywhere it appears):
```
Body Transport Solutions (Pty) Ltd
6 Selby Rd, Unit 1, Cato Ridge, KwaZulu-Natal, 3680, South Africa
+27 61 589 1505
info@bodytransportsolutions.co.za
https://bodytransportsolutions.co.za/
```

## What this thread was asked to do

User asked for a marketing/SEO audit of the live site, then to act on it.
The audit found the on-site technical SEO was already unusually strong for
a two-month-old company (real schema, clean URLs, consent-gated analytics)
but the off-site footprint was ~zero (no GBP, no citations, no reviews, no
social). That gap — not the code — was and still is the main blocker to
organic traffic.

## What's shipped (6 commits, chronological)

1. **`62ca961`** — Built 6 missing area landing pages (Camperdown, Hillcrest,
   Pinetown, Richards Bay, Port Shepstone, Newcastle) matching areas the
   homepage's `areaServed` schema already claimed but had no page for.
   Near areas (≤30 min) keep same-day dispatch framing; the three 2–3hr
   areas are framed as scheduled/by-arrangement. Cross-linked, added to
   sitemap.
2. **`d72a13a`** — Wired the user's verified Google Business Profile URL
   (`https://share.google/afWrhkKX7n3Av6KVX`) into the homepage's
   Organization schema `sameAs`. Added a 4-article resource hub
   (`/resources/transport-request-checklist/`, `/after-hours-dispatch/`,
   `/funeral-home-overflow-capacity/`, `/repatriation-logistics-kzn/`) —
   deliberately kept to operational content only, no new regulatory claims
   (see "Guardrails" below for why).
3. **`3827ccd`** — Added colloquial search phrasing ("dead body collection",
   "body from hospital to mortuary") to FAQ entries on 3 key pages, after
   confirming via WebSearch that the site owned none of that phrasing while
   real searches use it. Kept to FAQ questions only, not headlines — the
   user explicitly approved this scope via AskUserQuestion before it was
   done.
4. **`299a79c`** — Full site audit of `<title>`/meta description lengths
   against Google's practical display limits (~60 char titles, ~160 char
   descriptions). Fixed 13 pages that were over. Verified no duplicate
   titles were introduced.
5. **`4fbb6d8`** — Added `404.html` (was missing entirely — Vercel would
   have served a generic host error page) and image sitemap entries
   (`xmlns:image`) for the real vehicle photography.
6. **`11278eb`** — Found the site's LocalBusiness schema was missing
   `streetAddress` everywhere (homepage and all 21 subpages) despite the
   real address being public elsewhere. Added it + `postalCode` across
   every PostalAddress node. Also saved ready-to-paste GBP/Facebook/LinkedIn
   profile copy to `docs/marketing-profile-copy.md` since those need an
   authenticated session the agent doesn't have.

Every commit was validated before pushing: JSON-LD parses on every page,
`sitemap.xml` is well-formed XML, no broken internal directory links, no
duplicate `<title>` tags. Re-run these checks if you touch schema or links
again — the validation one-liners are simple `python3` scripts, easy to
reconstruct with a `glob` over `**/index.html`.

## What's genuinely still open

- **Local citations — the single biggest lever, untouched.** Brabys,
  Yellow Pages ZA, Cylex, Hotfrog, Yalwa, Bing Places, plus filling out the
  existing thin thebusinessdirectory.co.za listing. All need
  business-owner account verification — an agent cannot do this without
  the user's login. Exact NAP + description text is in
  `docs/marketing-profile-copy.md`.
- **GBP dashboard content** — category, services list, description, Q&A —
  is drafted in `docs/marketing-profile-copy.md` but not yet pasted in.
  Needs the user's Google account (lydiafoxy@gmail.com was mentioned as
  the account in use).
- **Facebook Business Page / LinkedIn Company Page** — don't exist yet.
  Copy is ready in the same doc. Once live, their URLs should be added to
  the `sameAs` array in `index.html` near `"foundingDate": "2026"` (same
  pattern used for the GBP URL).
- **Reviews** — zero, anywhere. Only unblocked once real jobs happen; ask
  those contacts for a Google review once GBP is live.
- **Search Console indexing status** — user has Search Console access
  (verification meta tag `google-site-verification` is already in
  `index.html` head), but nobody has checked whether the 23 sitemap URLs
  are actually indexed vs. "Discovered — not indexed." Worth checking
  before assuming any of the content work above is even being seen.

## What NOT to do (learned the hard way / by investigation)

- **Don't touch `support.js` or `image-slot.js`.** They're generated —
  header says "GENERATED from dc-runtime/src/*.ts — do not edit. Rebuild
  with `cd dc-runtime && bun run build`" — and that build tooling isn't in
  this repo. The homepage runs on a proprietary template runtime ("Claude
  Design" / `dc-runtime`): `<x-dc>...</x-dc>` holds an HTML template with
  `{{ }}` placeholders, `<script data-dc-script>` holds a `class Component
  extends DCLogic` logic class, and `support.js` hydrates it client-side.
- **The "client-side rendering is a CDN/Babel risk" claim from the first
  draft of the audit was wrong — corrected mid-thread.** Checked the
  actual runtime: React/ReactDOM load from local `/assets/vendor/` files
  with SRI (not a CDN), and Babel-from-unpkg is dead code — it only loads
  if a page does a dynamic `x-import` of a `.jsx`/`.tsx` file, and this
  site has none anywhere. The real reason `support.js` loads
  render-blocking (no `defer`) in `<head>` is deliberate:
  `hideRawTemplate()` injects `x-dc{display:none!important}` into `<head>`
  synchronously before `<body>` parses, guaranteeing nobody ever sees raw
  unhydrated `{{ waLink }}` template syntax. Adding `defer` trades that
  guarantee for a marginal speed gain, with real regression risk (a flash
  of broken-looking text) on a 240KB document. **Left alone on purpose.**
  If perf ever becomes a real problem (once there's real traffic), this
  needs careful before/after testing in an actual browser, not just
  reasoning about it — attempts to verify empirically with Playwright in
  this sandbox failed on network restrictions (`ERR_CONNECTION_RESET`
  through the agent proxy to the live domain), so it was never actually
  measured, only reasoned through from source.
- **Don't add new compliance/regulatory claims without the user's
  sign-off.** There's a prior commit in the repo's history
  ("Correct compliance copy to legally-precise R363 position") showing
  legal copy here has been deliberately, carefully worded before. The user
  was explicitly asked (AskUserQuestion) whether new resource articles
  could reference R363/regulatory specifics or should stay operational-only
  — they chose operational-only. Every new page since respects that; don't
  relitigate it without asking again.
- **Don't fabricate reviews, ratings, or AggregateRating schema.** Checked
  — none exist anywhere in the repo. Keep it that way until real ones
  exist.
- **Keep the transport-only positioning intact in any new copy.** Every
  page disclaims funeral/mortuary/embalming services. This is both a legal
  boundary and the brand's whole differentiator (B2B logistics, not
  consumer funeral services) — don't let SEO copy blur it, including when
  chasing consumer-style search phrasing (see the FAQ colloquial-phrasing
  commit for the pattern: blunt phrasing in FAQ *questions* only, answers
  stay in the existing professional voice).

## Reference facts

- Live domain: `https://bodytransportsolutions.co.za/` — Vercel, static,
  no build step, deploys on push to `main`.
- Sitemap: `/sitemap.xml`, 23 URLs as of this handoff.
- 9 KZN areas now have pages (was 3 at audit start): Cato Ridge, Durban,
  Pietermaritzburg, Camperdown, Hillcrest, Pinetown, Richards Bay, Port
  Shepstone, Newcastle.
- GA4 measurement ID `G-ENLSDKGPEM` and Meta Pixel `27659132467077469` are
  in `seo-analytics.js`, consent-gated behind a `localStorage` key
  (`bts_marketing_consent_v1`) — POPIA-aware, don't remove the gate.
- Full profile copy for GBP/Facebook/LinkedIn: `docs/marketing-profile-copy.md`.
