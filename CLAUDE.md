# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page Jekyll portfolio website for EK Keramik (Eva Kobel, ceramics artist). Content is in Danish. Deployed automatically to GitHub Pages on push to `master`.

## Local Development

No Gemfile is present; Jekyll must be installed separately.

```bash
jekyll serve   # Build and serve at localhost:4000
jekyll build   # Build static site to _site/
```

## Deployment

Pushing to `master` triggers `.github/workflows/jekyll-gh-pages.yml`, which builds with `actions/jekyll-build-pages` and deploys to GitHub Pages automatically.

## Architecture

The site uses a single layout (`_layouts/front.html`) that composes the page entirely from includes. `index.html` (root) uses `layout: front` and has no body content of its own — all sections live in `_includes/`.

**Section order in `_layouts/front.html`:**
navigation → header → om → udstilling-og-salg → kontakt → callout → portfolio → vaerksted → udstillinger → map → footer → scripts

**Active includes:**
- `head.html` — meta, CSS, favicon
- `navigation.html` — slide-in sidebar with links to all sections (note: sidebar brand still reads "Start Bootstrap", a leftover from the template)
- `header.html` — hero section with logo (`img/ekkeramik_sort_web.png`) and "Læs mere" CTA button
- `om.html` — about section with Danish biography and portrait photo
- `udstilling-og-salg.html` — upcoming markets (Sanderumgaard, Clausholm, Langesø) and permanent sales location (Torup Bakkegård)
- `kontakt.html` — contact section with hardcoded address and a Formspree contact form (action `https://formspree.io/f/xvzbbvnn`)
- `callout.html` — visual break aside with background image; currently contains placeholder text ("Vertically Centered Text")
- `portfolio.html` — 4 portfolio images (ek1–ek4) plus Instagram link (`@evakobel`)
- `vaerksted.html` — open workshop/ceramic course info; links to Verninge Husflid for course registration
- `udstillinger.html` — list of past exhibitions and markets with links
- `map.html` — Leaflet.js map (CDN) with OpenStreetMap tiles
- `footer.html` — footer with owner name, address, phone, and email from `_config.yml`
- `scripts.html` — jQuery, Bootstrap JS, and custom.js

**Unused includes (leftover template files, not included in `front.html`):**
- `services.html` — original "Our Services" template section with placeholder content
- `call-to-action.html` — original template call-to-action aside with placeholder buttons

**Site-wide variables** (owner, email, telephone, address, Facebook handle) are set in `_config.yml` and accessed via `{{ site.* }}` in includes. The Google Maps API key field exists in `_config.yml` but is unused.

**Assets:** Bootstrap 3 + Font Awesome (both vendored locally in `css/`, `js/`, `font-awesome/`). Custom styles in `css/stylish-portfolio.css`. Custom JS (sidebar toggle, smooth scroll) in `js/custom.js`. Leaflet.js loaded from CDN in `map.html`. A `fonts/` directory is also present.

**Images:**
- `img/ekkeramik_sort_web.png` — main logo (used in header)
- `img/ekkeramik_sort_web_nodrop.png` — logo variant without drop shadow
- `img/ek_ikon_sort_web_kvadrat.png` — favicon (square icon)
- `img/ek_ikon_sort_web.png` — icon variant
- `img/ek_portrait1.jpg` — portrait photo (used in om.html)
- `img/ek1.jpg`–`img/ek4.jpg` — portfolio images (used in portfolio.html)
- `img/bg.jpg` — hero header background image
- `img/bg_old.jpg` — previous hero background (unused)
- `img/callout.jpg` — callout section background
- `img/portfolio-1.jpg`–`img/portfolio-4.jpg` — unused portfolio images from original template

**Map:** `map.html` uses Leaflet.js (CDN) with OpenStreetMap tiles. The map is static (non-interactive) with a permanent tooltip marker at Torupvej 7, Sandager (55.32779, 9.93626). Clicking anywhere on the map opens `https://maps.app.goo.gl/f6z2HgVGCYrWafji7` in a new tab via a transparent overlay link.

**Contact form:** `kontakt.html` uses Formspree (`https://formspree.io/f/xvzbbvnn`) with fields for name, email (reply-to), phone, and message. Subject and language are set via hidden fields.
