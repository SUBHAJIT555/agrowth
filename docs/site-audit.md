# AGrowth site audit

Audited from the live public website on 16 September 2026.

Primary sources:

- https://agrowth.io/
- https://agrowth.io/pages/about-us
- https://agrowth.io/pages/agrowth-platform
- https://agrowth.io/pages/contact-us
- https://agrowth.io/pages/careers
- representative service, partnership, policy, and blog routes
- computed CSS, loaded stylesheets, `@font-face` / Google Fonts links, and public sitemaps

This document records the **shared visual language**. It is not a page implementation spec.

---

## Brand

### Logo variants

| Variant | Live source | Local path | Notes |
| --- | --- | --- | --- |
| White wordmark | `cdn/shop/files/Copy_of_logo_AG_tr_ng.png` | `/assets/logos/agrowth-logo-white.png` | Used in desktop header and footer. Natural asset 3334×3439. Displayed ~70×72 in the header and ~142×120 in the footer. |
| White wordmark small | `cdn/shop/files/Copy_of_logo_AG_tr_ng_small.png` | `/assets/logos/agrowth-logo-white-small.png` | Mobile header. Natural 97×100. Displayed ~43×44. |
| Color mark / “A” badge | `cdn/shop/files/cropped-logo-A-bl-02-1-1-800x800-2.png` | `/assets/logos/agrowth-mark.png` | Favicon / site icon. 800×676 PNG. |

No separate dark wordmark is used in the current header/footer. The capsule is dark, so the white logo is used on both the homepage hero and inner pages such as About Us.

### Logo dimensions (computed)

- Desktop header logo display: **70×72**
- Header `body .site-logo` CSS cap: `max-width: 70px`
- Footer logo display: **142×120**
- Mobile header logo display: **43×44**

### Light / dark versions

- Header and footer always use the **white** logo on a dark brown/orange field.
- Favicon uses the **color mark** on a light/transparent field.

### Favicon

- `rel="icon"` PNG: cropped color “A” mark, requested at 32×32.
- Configured locally via `src/app/icon.png` and metadata icons.

### Recurring brand graphics

- Orange-red gradient: `linear-gradient(90deg, #F09138 2.31%, #D5261F 100%)`
- Dark translucent surfaces: `rgba(18, 9, 4, 0.65)` header capsule / `0.98` mobile panel
- Cream wash `#FFF2E6` on inner marketing sections
- Partner badges: Meta, Google, TikTok Marketing Partner
- Trustpilot strip
- Footer full-bleed orange artwork (`icon-08_...png`)
- Circular “A” mark used as a homepage section divider (page-specific, not downloaded in Phase 1)

---

## Typography

Identified from loaded stylesheets **and computed styles** on the live site. See `docs/typography-audit.md`.

### Font families (computed)

- **Body / nav / buttons / most marketing display: Outfit**
  - Live: `https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap`
  - Local: `next/font/google` Outfit, `--font-outfit`
- **Default headings (`h1–h5` unless overridden): Assistant**
  - Live Shopify `--font-heading-family: Assistant, sans-serif` plus CDN woff2
  - Local: `next/font/google` Assistant 400–800, `--font-assistant`
- **Hero chips, pills, stat labels, choose bullets: Inter**
  - Live CSS declares Inter but does not ship the webfont
  - Local: `next/font/google` Inter, `--font-inter`

### Also loaded, not used in computed text

- **Poppins 900** is requested; `document.fonts.check` is false and no text computes to Poppins.
- **GT Standard** is a Shopify leftover and is unloaded.

### Heading / body family

Body is Outfit. Headings default to Assistant. Custom homepage sections override selected headings to Outfit. Inter is limited to UI chips/copy listed in the audit.

### Weights observed

| Role | Family | Weight |
| --- | --- | --- |
| Body | Outfit | 400 |
| Footer titles | Assistant | 500 |
| Nav, theme buttons | Outfit | 600 |
| Theme `.heading5 h2` | Assistant | 600 |
| Hero CTA / See More | Outfit | 700 |
| Homepage custom H2 / stats | Outfit | 800 |
| H1 / tab H3 / step numbers | Outfit | 900 |

### H1

Homepage computed:

- Outfit 900
- 56px / 64.4px
- letter-spacing `-1.5px`
- color `#FFFFFF` on the hero
- inner-page display headings use near-black `#0B0314`

### H2

Not universal. Examples at 1440:

- Homepage custom: Outfit 800 / 42px / 50.4px
- Theme `.heading5 h2`: Assistant 600 / 44px / 54px
- Services CTA: Assistant 600 / 42px / 48.3px / capitalize
- Google “Why Choose”: Assistant 800 / 42px / 50.4px / -0.5px

### H3

Varies by section. One homepage display H3 computed at 52px / 900 / white. Footer titles compute at 24px / 500 / white. Do not treat one H3 as universal.

### Body

- Outfit 18px / 26px / 400
- letter-spacing `0.6px`
- `-webkit-font-smoothing: auto`
- color `#212529` on light surfaces
- muted descriptive copy `#454444` or `rgba(255,255,255,0.85)` on dark surfaces

### Small labels

- 14px / 500 uppercase appears on eyebrow chips
- Nav dropdown items: 14px / 500
- Mobile submenu: 15px / 500 at 75% white

### Button typography

- Primary/secondary: 18px / 600 / 18px line-height
- Outline (`theme-btn5`): 14px / 600 / uppercase

---

## Colors

Recorded from computed styles and live CSS, not guessed from screenshots.

| Token | Value | Where |
| --- | --- | --- |
| Brand orange | `#F09138` | Gradient start, process icons, cards |
| Brand red | `#D5261F` | Gradient end, icon color, hover fills |
| CTA orange (text) | `#E04300` | White hero CTA text |
| Mid orange | `#FA7D3C` | Form submit, pagination hover, secondary accent |
| Pink-red | `#FB3F52` | Alternate gradient with `#FA7D3C` on pagination |
| Page background | `#FFFFFF` | Body |
| Ink | `#0B0314` | Headings on light sections |
| Body text | `#212529` | Default body color |
| Muted text | `#454444` | Supporting copy |
| Header capsule | `rgba(18, 9, 4, 0.65)` | Desktop + mobile header bar |
| Header/menu strong | `rgba(18, 9, 4, 0.95–0.98)` | Dropdown + mobile panel |
| Hero dark wash | `rgb(11, 4, 1)` | Homepage hero container |
| Cream | `#FFF2E6` | Section washes, pagination idle |
| Form lilac | `#F5F5FD` | Legacy form shells |
| Form input | `#FFFFFF` | Contact inputs on the current homepage form |
| Border | `#E7E7E7` / `#E0E0E0` | Dividers |
| Footer text | `#FFFFFF` / `rgba(255,255,255,0.85)` | Over orange footer artwork |

Primary CTA gradient:

`linear-gradient(90deg, #F09138 2.31%, #D5261F 100%)`

Hover wipe reverses that gradient.

---

## Layout

### Max container widths

Bootstrap 5 `.container` is used on the live site.

Computed at 1440 CSS pixels:

- `max-width: 1320px`
- content width about **1250px** after gutters

At ~1155px the same container computed to 960px (Bootstrap `lg` / `xl` step).

Local default container: **1320px** (`max-w-site`) with 15px side padding.

Do **not** force every future section into 1320px. Homepage hero, marquee, and some media are full-bleed.

### Gutters

- Observed container padding: **7.5px–15px** depending on Bootstrap gutter.
- Desktop header capsule padding: **12px 35px**
- Mobile header: **~16px** horizontal, 69px tall
- Mobile menu panel: **40px 30px** (opened state uses extra top padding)

### Section spacing

Recurring live utility scale (do not auto-apply):

- `.sp` 200px
- `.sp2` 120px
- `.sp3` 100px
- Footer top padding **100px**

The shared `Section` primitive does **not** hardcode vertical spacing.

### Grid behavior

- Footer: 4 columns from ~992px, 2 then 1 on smaller screens
- Header switches at Bootstrap `lg` **992px** (local `nav:` breakpoint)
- Cards, process steps, and service grids are page-specific

---

## Buttons

Audited recurring variants:

### Primary — `theme-btn3`

- Pill `border-radius: 80px`
- Gradient fill `#F09138 → #D5261F`
- White 18/600 text
- 32px white circle with red up-right arrow (`arrow-right` rotated -45deg)
- Hover: reverse-gradient wipe from the right, 0.4s

Used in the header, mobile menu, and several mid-page CTAs.

### Secondary — `theme-btn4` / `.cta-btn.btn-white`

- White pill
- Dark / orange text (`#0B0927` or `#E04300` depending on context)
- Gradient icon circle
- Soft shadow `0 8px 24px rgba(0,0,0,0.3)`
- Used on the homepage hero (page-specific placement later)

### Outline — `theme-btn5`

- 14px uppercase
- 30px radius
- 2px border
- Hover fills `#D5261F`

### Text-link

- Footer and dropdown links: no underline, hover to mid-orange
- “Read More” and blog links are page-specific

### Icon buttons

- Mobile hamburger: 40×40, 4px radius, `1px solid rgba(255,255,255,0.2)`
- Mobile close: 25px white X
- Footer social icons: brand glyphs, no filled chip on the current footer

---

## Cards

Recurring patterns (not implemented in Phase 1):

- Gradient service cards `linear-gradient(130deg, #F09138, #D5261F)`, 20px radius, white text
- Cream/peach case-study cards `#FEE8CD → #F9D3C3`, 20px radius
- Gradient-border boxes (white or cream fill with orange-red border)
- Blog cards: image, author, date, title, “Read More”
- Job cards on Careers (audit later with that page)

---

## Header

### Desktop (from 992px)

- Outer header: absolute, transparent, `z-index` high, padding 12px 0, height ~138–154px
- Inner capsule: `background rgba(18,9,4,0.65)`, `border-radius: 100px`, padding `12px 35px`, shadow `0 15px 35px rgba(0,0,0,0.3)`
- Logo left, nav center, Contact Us pill right
- Nav: Outfit 18/600, white, `letter-spacing: 0.6px`, `text-transform: capitalize`, item padding `8px 12px`
- Items: About us, Services ▾, Platform, Blog ▾, Case study, Partner, Careers
- Services dropdown (not a mega menu on the current public header):
  - Rent Google Agency Ads Account
  - Rent Facebook Agency Ads Account
  - Rent TikTok Agency Ads Account
- Blog dropdown:
  - Google Ads, Facebook Ads, TikTok Ads, Knowledge, News
- Dropdown panel: `rgba(18,9,4,0.95)`, 14px radius, ~200px+ wide, 14px/500 white links, shadow, 0.3s visibility/transform
- CTA: primary gradient pill
- Bing Ads is **not** in the header dropdown even though `/pages/rent-bing-agency-ads-account` exists

### Sticky / scroll

Legacy CSS still contains `.header-area5.sticky` turning the bar white. The **current homepage header computes `position: absolute`** and keeps the dark capsule. Phase 1 follows the observed current overlay capsule, not the leftover sticky-white rule.

### Tablet / 1024

Still the desktop capsule. At narrower desktop widths the live nav can wrap onto two rows inside the capsule.

### Mobile (<992px)

- Separate mobile header, **fixed**, 69px, same dark translucent fill
- White small logo left
- Staggered hamburger right
- Opening the menu reveals a **full-viewport panel sliding in from the left** (not a right drawer)
- Panel fill `rgba(18, 9, 4, 0.98)`
- Logo + close control
- Stacked links 18/500 white
- Nested services/blog revealed with a plus control
- Primary Contact Us button at the bottom

---

## Footer

Structure from the live DOM:

1. Brand column: white logo, description, Meta/Google/TikTok badges, Trustpilot
2. Company: Contact Us, About Us, Privacy Policy, Payment Methods, Refund Policy
3. Our Services: Google / Facebook / TikTok account pages
4. Contact Us: WhatsApp, Email, Telegram, Telegram channel
5. Our Location spanning most of the lower row: USA and Hong Kong branches
6. Copyright: `AGrowth, LLC reserved 2026`
7. Social: Facebook, LinkedIn, X

Background: orange artwork image, `cover`, centered.

Titles: 24px / 500 / white.

Body/description: 18px / 28px / white 85%.

Contact rows: 16px white with 18–24px icons.

Live email/Telegram rows currently reuse an envelope SVG with a dark `#0B0314` stroke. Locally those two rows use generic Mail/Send icons in white so the contact type stays visible on the orange footer. WhatsApp and location use the original PNGs.

Public destinations preserved exactly:

- WhatsApp `https://wa.me/84865497283`
- Email `sales@agrowth.io`
- Telegram `https://t.me/agrowthagency`
- Channel `https://t.me/agrowth_agency`
- Facebook / LinkedIn / X URLs as on the live footer

---

## Forms

Shared homepage / contact form language:

- Fields: name, email, phone with country code, company, contact details, message
- Platform checkboxes: Google, Facebook, TikTok, Bing, Others
- Privacy / refund agreement checkbox
- Inputs: 58px tall, 4px radius, 16px padding, 18px Outfit, white fill, no border
- Textarea ~160px
- Submit: 56px pill, 18/600, orange / gradient
- Intl-tel-input is used live for the phone field (page-specific later)
- Frontend only; no submission backend in this project

Phase 1 stores shared input classes (`.ag-input`, `.ag-textarea`, `.ag-checkbox`) without building the form.

---

## Animation language

Only patterns actually observed:

- Dropdown show/hide (opacity, translate, rotateX leftover from theme CSS)
- Mobile panel 0.3s left slide
- Button gradient wipe 0.4s
- AOS stylesheet is loaded (page sections later)
- Carousels / tabs on the homepage (page-specific)
- Logo marquee
- Modal fade for popups

There is **no** sitewide fade-up on every section. Future animation is page-by-page.

---

## Responsive strategy

Test at 1600 / 1440 / 1280 / 1024 / 768 / 430 / 390 / 375.

Primary: **1440** and **390**.

Navigation breakpoint matches the live Bootstrap `lg` of **992px** (`nav:`).
