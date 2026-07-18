# Body Transport Solutions — website

Static HTML/CSS/JS site for BODY TRANSPORT SOLUTIONS (PTY) LTD, implemented from the
`BTS Website v2.dc.html` Claude Design export. No build step — deploy as-is.

## Before going live

1. **Contact details** — edit the three constants at the top of `js/partials.js`:
   `PHONE`, `WHATSAPP`, `EMAIL`. They flow through to the header CTA, sticky call/WhatsApp
   bar, footer and Contact page automatically.
2. **Domain** — `robots.txt` and `sitemap.xml` reference a placeholder domain
   (`bodytransportsolutions.co.za`). Update both once the real domain is set.
3. **Vehicle photos** — the hero and vehicle sections use a placeholder gradient panel
   (`.image-slot`) captioned "photo coming soon" instead of a stock photo, per the brief's
   "no fake stock photos" rule. Swap in real vehicle photos when available (replace the
   `.image-slot` markup in `index.html` with an `<img>`).
4. **Request form** — `request.html` currently submits via a `mailto:` link (opens the
   visitor's email client with the form pre-filled) so it works with zero backend. To
   upgrade to a hosted form endpoint (e.g. Web3Forms, Formspree) later, replace the
   submit handler in `js/main.js`.

## Structure

- `index.html`, `about.html`, `services.html`, `compliance.html`, `process.html`,
  `areas.html`, `partners.html`, `request.html`, `contact.html` — one file per page.
- `css/style.css` — all styling (design tokens + components).
- `js/partials.js` — shared header/footer/sticky-bar, injected via `document.write` at
  the top of `<body>` on every page (keeps markup DRY without a build step).
- `js/main.js` — request form handling.
- `vercel.json` — enables clean URLs (`/about` instead of `/about.html`).

## Content source

Copy and structure come from the Claude Design brief in the handoff bundle's
`chats/chat1.md` and `project/BTS Website v2.dc.html`. One gap in the original export:
the Services page's data list was referenced but never defined in the exported component
— it's been reconstructed here from the original brief's 6 listed services.
