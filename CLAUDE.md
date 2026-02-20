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
navigation → header → om → services → kontakt → callout → portfolio → call-to-action → map → footer

**Key includes:**
- `head.html` — meta, CSS, favicon
- `header.html` — hero section with logo and CTA button
- `om.html` — about section (Danish biography)
- `kontakt.html` — contact/address section
- `footer.html` — footer with social links pulled from `_config.yml`

**Site-wide variables** (owner, email, telephone, address, Facebook handle) are set in `_config.yml` and accessed via `{{ site.* }}` in includes. The Google Maps API key is no longer used.

**Assets:** Bootstrap 3 + Font Awesome (both vendored locally in `css/`, `js/`, `font-awesome/`). Custom styles in `css/stylish-portfolio.css`. Custom JS (sidebar toggle, smooth scroll) in `js/custom.js`. Leaflet.js loaded from CDN in `map.html`.

**Images:** Logo `img/ekkeramik_sort_web.png`, favicon `img/ek_ikon_sort_web_kvadrat.png`, portfolio images `img/ek1.jpg` through `img/ek4.jpg` (square), portrait `img/ek_portrait1.jpg`.

**Map:** `map.html` uses Leaflet.js (CDN) with OpenStreetMap tiles. The map is static (non-interactive) with a permanent tooltip marker at Torupvej 7, Sandager (55.32779, 9.93626). Clicking anywhere on the map opens `https://maps.app.goo.gl/f6z2HgVGCYrWafji7` in a new tab via a transparent overlay link.
