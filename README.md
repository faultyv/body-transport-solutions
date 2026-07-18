# Body Transport Solutions — website

This repo contains the **exact final build** exported from Claude Design
(`BTS Website v2.dc.html`), deployed as-is. It is a single-page site: all nine
pages (Home, About, Services, Compliance, Job Process, Areas, Partners,
Request, Contact) live inside `index.html` and are switched client-side via
hash navigation (`#about`, `#services`, …).

## Files

- `index.html` — the whole site: markup, copy and page logic (the `data-dc-script`
  block at the bottom holds the nav, routes, form state and all list content).
- `support.js` — the Claude Design runtime that renders `index.html`
  (loads React 18 + Babel from unpkg CDN at page load). Generated file — don't edit.
- `image-slot.js` — the image placeholder component used by the hero and vehicle
  sections. Generated file — don't edit.

## Editing

- **Copy / content / pages** → edit `index.html` directly.
- **Phone / WhatsApp / email** → in `index.html`, they appear in the
  `data-props` attribute of the script tag (HTML-escaped JSON) and as fallbacks
  in `renderVals()`. Currently set to +27 61 589 1505 /
  info@bodytransportsolutions.co.za.

## Deploying

Vercel serves this repo statically — no build step. Pushes to `main`
auto-deploy to production on the connected Vercel project (`dist`).
