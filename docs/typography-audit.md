# Typography audit

Inspected live from DevTools computed styles, `@font-face` / `document.fonts`, stylesheet `font-family` rules, and font-related `<link>` tags on:

- https://agrowth.io/ (1440)
- https://agrowth.io/pages/services (1440)
- https://agrowth.io/pages/rent-google-agency-ads-account (1440)

Do not treat this as a single-family site.

---

# Font Families

Heading (Shopify default, `h1–h5`):
Assistant, sans-serif (`--font-heading-family`)

Body:
Outfit, sans-serif (`body { font-family: Outfit, sans-serif }` in `main.css`)

Navigation:
Outfit, sans-serif

Buttons:
Outfit, sans-serif

Special/display:
Inter, sans-serif — hero taglines, feature chips, proof text, card pills, stat labels, choose-section bullets

---

# Font Sources

## Outfit

- Google Fonts stylesheet: `https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap`
- Variable axis 100–900
- Local: `next/font/google` `Outfit` (self-hosted at build), CSS variable `--font-outfit`

## Assistant

- Shopify theme heading/body variables: `--font-heading-family: Assistant, sans-serif` and `--font-body-family: Assistant, sans-serif`
- Self-hosted on the live Shopify CDN, e.g. `https://agrowth.io/cdn/fonts/assistant/assistant_n4.…woff2`
- Open Font License; local: `next/font/google` `Assistant` weights 400, 500, 600, 700, 800, CSS variable `--font-assistant`
- Applied by `base.css` to `h1, h2, h3, h4, h5` unless a section overrides to Outfit

## Inter

- Declared in section CSS as `font-family: Inter, sans-serif`
- **Not** loaded as a webfont on the live site (`document.fonts` has no Inter face)
- Renders from the OS Inter (Windows) or falls back to `sans-serif`
- Local: `next/font/google` `Inter` variable, CSS variable `--font-inter` so those 45+ nodes are not system-fallback

## Loaded but not used in computed text

- Poppins 900 via `https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap` — `document.fonts.check` false; no computed text uses it
- GT Standard (Shopify leftover) — unloaded
- Font Awesome 6 Brands — icons only (`fa-meta`, `fa-google`, `fa-tiktok`)

---

# Available Weights

## Outfit (variable 100–900; observed)

| Weight | Role |
| --- | --- |
| 400 | Body, footer links, form labels, inputs |
| 500 | Dropdown items |
| 600 | Nav, default theme buttons |
| 700 | Hero CTA, See More, tab labels, review titles, author names, stats tagline |
| 800 | Homepage custom H2s, stats numbers, step titles, Special Offer |
| 900 | Hero H1, platform tab H3, homepage step numbers |

## Assistant (observed)

| Weight | Role |
| --- | --- |
| 400 | Theme heading default variable |
| 500 | Footer column titles, some blog H5 |
| 600 | Theme `.heading5 h2` (platform, contact, blogs, services CTA, Google FAQ/contact) |
| 700 | Form info titles, Google why-choose card titles, platform feature H3s |
| 800 | Final homepage CTA title, several Google section H2s |

## Inter (observed)

| Weight | Role |
| --- | --- |
| 400 | Choose-section bullets / subtitle |
| 500 | Hero tagline, feature chips, proof text, section-desc |
| 600 | Card pills, stat labels, pill-text |
| 700 | Proof `strong` (+1000) |

---

# Typography matrix (computed, 1440)

| Element | Family | Weight | Size | Line-height | Letter-spacing | Transform | Style |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Body | Outfit | 400 | 18px | 26px | 0.6px | none | normal |
| Hero H1 | Outfit | 900 | 56px | 64.4px | -1.5px | none | normal |
| Hero tagline | Inter | 500 | 14px | 26px | 0.5px | none | normal |
| Hero feature chip | Inter | 500 | 16px | 26px | 0.6px | none | normal |
| Hero proof | Inter | 500 | 14px | 26px | 0.6px | none | normal |
| Hero CTA | Outfit | 700 | 18px | 26px | 0.6px | none | normal |
| Nav | Outfit | 600 | 18px | 26px | 0.6px | capitalize | normal |
| Dropdown | Outfit | 500 | 14px | 26px | 0.6px | capitalize | normal |
| Theme button | Outfit | 600 | 18px | 18px | 0.6px | none | normal |
| Outline LEARN MORE | Outfit | 600 | 14px | 17.5px | normal | uppercase | normal |
| Unstable H2 | Outfit | 800 | 42px | 50.4px | 0.6px | none | normal |
| Platform tabs H2 | Outfit | 800 | 42px | 54.6px | 0.6px | none | normal |
| Platform tab H3 | Outfit | 900 | 52px | 54.6px | -1px | none | normal |
| Card pill | Inter | 600 | 14px | 26px | 0.6px | none | normal |
| See More | Outfit | 700 | 17px | 26px | 0.6px | none | normal |
| Stats number | Outfit | 800 | 44px | 44px | -0.5px | none | normal |
| Stats label | Inter | 600 | 13px | 26px | 0.1px | none | normal |
| Stats tagline | Outfit | 700 | 26px | 31.2px | -0.5px | none | normal |
| Choose H2 | Outfit | 700 | 26px | 32.5px | -0.3px | none | normal |
| Choose H3 | Outfit | 600 | 23px | 27.6px | -0.2px | none | normal |
| Choose bullets | Inter | 400 | 19px | 34.2px | 0.6px | none | normal |
| Platform H2 | Assistant | 600 | 44px | 54px | 0.6px | none | normal |
| Platform H3 | Assistant | 600 | 32px | 40px | 0.6px | none | normal |
| Steps H2 | Outfit | 900 | 44px | — | — | none | normal |
| Step number | Outfit | 900 | 110px | 110px | -4px | none | normal |
| Step title | Outfit | 800 | 20px | 24px | 0.2px | none | normal |
| Testimonials H2 | Outfit | 800 | 44px | — | -0.5px | none | normal |
| Review title | Outfit | 700 | 16px | 20.8px | 0.6px | none | normal |
| Author name | Outfit | 700 | 15px | 19.5px | 0.6px | none | normal |
| Author role | Outfit | 400 | 12px | 14.4px | 0.6px | none | normal |
| Contact H2 | Assistant | 600 | 44px + 85/71 spans | 54px | 0.6px | none | normal |
| Form label | Outfit | 400 | 18px | 26px | 0.6px | none | normal |
| Form input | Outfit | 400 | 18px | 26px | normal | none | normal |
| Blog H2 | Assistant | 600 | 44px | 54px | 0.6px | none | normal |
| Final CTA H2 | Assistant | 800 | 33px | 36.96px | -0.6px | none | normal |
| Footer heading | Assistant | 500 | 24px | 24px | 0.6px | none | normal |
| Footer link | Outfit | 400 | 16px | 16px | 0.6px | none | normal |
| Services CTA H2 | Assistant | 600 | 42px | 48.3px | 0.6px | capitalize | normal |
| Services CTA p | Outfit | 500 | 14px | 21px | 0.6px | none | normal |
| Google H1 | Outfit | 900 | 56px | 64.4px | -1.5px | none | normal |
| Google Why H2 | Assistant | 800 | 42px | 50.4px | -0.5px | none | normal |
| Google Special Offer | Outfit | 800 | 38px | 41.8px | -0.5px | none | normal |
| Google FAQ H2 | Assistant | 600 | 44px | 54px | 0.6px | none | normal |

Font smoothing on live `html`/`body`: `-webkit-font-smoothing: auto` (not `antialiased`).
Root font-size on live: `10px` (Shopify rem). Local stays 16px root and uses px tracking (`0.6px`) instead of `0.06rem`.

No `clamp()` on the audited heading sizes; they are fixed px with media-query overrides.

---

# Local Differences

## Previous local setup

- Single family: Outfit via `next/font/google` weights 400–900
- `html` had Tailwind `antialiased` (`-webkit-font-smoothing: antialiased`)
- Body tracking `0` (missing live `0.6px`)
- `h1–h6` inherited Outfit from `body`
- Inter declared in extracted CSS but **not loaded**
- `--font-heading` forced to Outfit on homepage and Google page
- Homepage Meta tab used a custom broken “M” SVG instead of Font Awesome `fa-meta` infinity

## Original vs previous local (meaningful)

| Token | Original | Previous local |
| --- | --- | --- |
| Body tracking | Outfit / 400 / 18px / 26px / 0.6px | Outfit / 400 / 18px / 26px / 0 |
| Font smoothing | auto | antialiased |
| Default headings | Assistant | Outfit |
| Footer titles | Assistant / 500 / 24px | Outfit / 500 / 24px |
| Platform / contact / blog H2 | Assistant / 600 / 44px | Outfit / 600 / 44px |
| Google section H2s | Assistant 600–800 | Outfit (via body + `--font-heading`) |
| Hero tagline / chips / pills | Inter | Outfit (or system sans if Inter CSS won without a face) |
| Hero CTA | Outfit / 700 | Outfit / 700 (ok) / theme buttons 600 with 0 tracking |
| Services CTA H2 | Assistant / 600 / 42px / 48.3px | Outfit / 600 / 56px / 64px |
| Services CTA p | Outfit / 500 / 14px / 21px | Outfit / 500 / 20px / 30px |
| Meta tab icon | FA Brands infinity 22.5×18 | Incorrect custom path, often forced 22×22 |

---

# Implementation

- `src/app/layout.tsx` loads Outfit (variable), Inter (variable), Assistant (400–800) through `next/font/google`
- `body` = Outfit + 0.6px tracking + smoothing `auto`
- `h1–h6` = Assistant unless a section sets Outfit/Inter
- `--font-heading` default Assistant; `.home-page` keeps Outfit for custom homepage sections that already use `var(--font-heading)`
- Inter wired to the live Inter selectors
- Forms use `font: inherit`; inputs reset tracking to `normal`
- GSAP `ScrollTrigger.refresh()` after `document.fonts.ready`
- Homepage Meta tab icon uses the Font Awesome Free 6 Brands Meta path (CC BY 4.0), same glyph as live `fa-brands fa-meta`
