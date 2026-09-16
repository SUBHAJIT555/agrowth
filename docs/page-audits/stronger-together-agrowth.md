# Reference

Reference: https://agrowth.io/pages/stronger-together-agrowth

Local: `/pages/stronger-together-agrowth` (alias `/stronger-together-agrowth`)

Audited: 16 September 2026 at 1440, 1280, 1024, 768, 390.

Status: IMPLEMENTED — wait for approval, then LOCK.

# Page Purpose

Strategic Partners / Partnership Program. Not About, Careers, Affiliate, service-detail, or Case Study.

# Screenshot Map

Screenshots are visual references only. They were not used as page artwork.

| Screenshot | File | Maps to |
| --- | --- | --- |
| 01 | `image-ee5887f0-…png` | Shared Header + Hero (“AGROWTH STRATEGIC PARTNERS…”, Become Our Partners, handshake art) |
| 02 | `image-e5cc9a0c-…png` | “See Who Growing With Us” orange banner + TopAds / AdsPower cards |
| 03 | `image-86757c43-…png` | “Why Partnerships Matter At AGrowth?” split (art left, copy right) |
| 04 | `image-7447ba74-…png` | Four partnership-benefit cards on peach |
| 05 | `image-2ff13f76-…png` | “Who Can Be Our Partners?” split (puzzle art left, copy right) |
| 06 | `image-db155bd2-…png` | Six partner-type cards |
| 07 | `image-5b39b954-…png` | “Let’s Grow Together!” CTA + circular team photo |
| 08 | `image-841cd98b-…png` | “How To Partner With Us?” four steps |
| 09 | `image-c3a65c26-…png` | Application intro + partnership form |

# Actual Page Structure

## 1. Header — Screenshot 01

- Shared approved Header overlay (`absolute`, dark pill).
- Partner item href stays `/stronger-together-agrowth`. Alias `/pages/stronger-together-agrowth` for active state only.
- No Header visual redesign.

## 2. Hero — Screenshot 01

- Heading: `AGROWTH STRATEGIC PARTNERS DRIVING GROWTH TOGETHER`
- Copy: `Grow your business with AGrowth's certified partners`
- CTA: `Become Our Partners` → `#contact-section` (no inner arrow span)
- Visual: `A.1.png` isometric handshake / dashboard art, ~500×419, **not** circular (screenshots; live `.hero-main-image img { border-radius: 50% }` incorrectly circles every split image)
- Desktop: text `col-lg-5` left / image `col-lg-7` right
- Background: white
- Section pad-top 30px + heading pad-top 60px on live; local adds header clearance (~140px) because the shared Header overlays the first section
- Typography: Assistant 44px/600/52px, gradient `#ff6b35 → #ff9500` clipped to text
- Paragraph: Outfit 16px/400/26px `#5d6369`
- Mobile: same DOM order (copy, then art)
- Animation: static; CTA hover gradient wipe. No generic fade-up.

## 3. Strategic partner showcase — Screenshot 02

- Banner: `See Who Growing With Us` — 56px/700 Assistant white, peach-to-orange gradient `135deg #ff6b35 → #ff9500`, pad 60px
- Cards on `#f8f9fa`, pad 60px
- Live CSS is `grid-template-columns: repeat(3, 1fr)` with only two cards (left-weighted leftover column). Screenshot 02 centers the pair — screenshot-first: two centered cards
- Card: white, 16px radius, pad 40×30, shadow `0 4px 20px rgba(0,0,0,.08)`, hover `translateY(-5px)`
- Logo 65×65
- Title 20px/600 `#2c3e50`; desc 15px/300 `#5a6c7d`, max-width 300
- TopAds + AdsPower only. No invented partners.
- Copy preserves live spacing: `e- commerce`, `anti- detect`
- Tablet 2-col; mobile 1-col

## 4. Why Partnerships Matter — Screenshot 03

- Heading: `Why Partnerships Matter At AGrowth?`
- Two live paragraphs (synergy / scalable solutions)
- Visual: `A.2.png` left (`col-lg-7`), copy right (`col-lg-5`)
- White background; heading same 44px gradient
- Mobile: image then text (DOM order)

## 5. Partnership benefits — Screenshot 04

- Peach `#f9e2cf` (screenshot; live `.service-support.bg` computed transparent)
- 2×2, max-width 1000px
- Cream fill `#fff2e6` + 190deg orange-red gradient border, 20px radius, 24px pad
- Icon LEFT of title (flex row). Icons: megaphone, globe, lock-shield, puzzle/lamp
- Headings split as live (`<br>` wrapping)
- Exact live descriptions with live `<br>` line breaks
- 480px: header stacks icon above title

## 6. Who Can Be Our Partners? — Screenshot 05

- Heading + `We welcome partners who share our vision for scalable, performance-driven advertising.`
- Puzzle illustration `Thi_t_k_ch_a_co_ten_26.png` left, copy right
- White background; same gradient H3
- Mobile: image then text

## 7. Partner types — Screenshot 06

- Peach `#f9e2cf`, pad 60px
- Grid `auto-fit minmax(320px, 1fr)` → 3 columns at 1440
- White cards + same gradient border
- Icon 80×90 left of 20px/700 title; 15px description
- Six types only, live copy
- Hover: live `::before` orange wash (opacity). Keep subtle.
- Mobile: 1 column

## 8. Let’s Grow Together CTA — Screenshot 07

- Heading: `Let’s Grow Together!`
- Copy: `Reach out to learn how our strategic alliances can help your business achieve more!`
- CTA: `Talk to Our Team` → `#contact-section`
- Circular photo `anh-bo-1.png` 350px, `border-radius: 50%`, `object-fit: cover`
- Desktop: copy left / circle right
- Not the Homepage wave CTA
- Mobile: copy then photo

## 9. How To Partner With Us? — Screenshot 08

- H2 44px/600 `#f5822a` Assistant, centered
- Peach `#f9e2cf`, pad 120px 0
- Four columns desktop; floating 3D icons `position:absolute; top:-120px; right:0; max-width:180px`
- White gradient-border cards, step `42px`, title `22px/500`, desc `16/24`
- Apply / Connect / Finalize / Launch — exact live copy
- Tablet 2×2; mobile stack with icons in flow (not inferred connectors — live has no connector lines)

## 10. Application + form — Screenshot 09

- Heading: `Partner With AGrowth` / `- Let’s Grow Together!` both `#f5822a` 44px/600
- Two live paragraphs (`forward thinking`, `grow—smarter`, `long- term`)
- Contact info list (calendar + chat SVGs): `Fill out the form` / `our team will get in touch within hours`; `Need help now?` / `Chat with us through our 24/7 support channels`
- Screenshot 09 washes those titles (live computed white-on-white from leaked homepage contact CSS). Local uses muted grey so the live structure remains visible without turning into homepage glass contact.
- Decorative orange circle peeking left (screenshot 09)
- Form `Send Us A Message`, bg `#f5f5fd`, radius 8px, pad 32×28
- Fields: name*, email*, phone*, company, Telegram|WhatsApp + contact details*, message, Google/Facebook/TikTok/Bing/Others* checkboxes, consent*, Submit
- Submit: full-width `#fa7d3c` 56px, radius 80, **no arrow**
- Frontend only. `preventDefault`. No fake CRM success.
- Consent text exact; hrefs `/privacy-policy` and `/refund-policy` (live form uses `#`; those are the public policy routes)

## 11. Footer

Shared approved Footer. Unchanged.

# Exact authorized public copy

Used verbatim from the live DOM (16 Sep 2026). Grammar, spacing, and punctuation were not “fixed”.

# Page-specific typography

Verified against `docs/typography-audit.md` + live computed styles.

| Element | Family | Weight | Size | Line-height |
| --- | --- | --- | --- | --- |
| Hero / Why / Who / Grow H3 | Assistant | 600 | 44px | 52px |
| Hero paragraph | Outfit | 400 | 16px | 26px |
| Banner H2 | Assistant | 700 | 56px | ~1.1 |
| Partner names | Assistant | 600 | 20px | — |
| Partner descriptions | Outfit | 300 | 15px | ~1.5 |
| Benefit H3 | Assistant | 500 | 22px | 34px |
| Benefit / type / process body | Outfit | 400 | 15–18px | 24–28px |
| Process H2 | Assistant | 600 | 44px | 54px |
| Process numbers | Assistant | 600 | 42px | — |
| Process titles | Assistant | 500 | 22px | — |
| Application H2 | Assistant | 600 | 44px | 54px |
| Form title | Outfit | 600 | 16px | — |
| Buttons | Outfit | 600 | 18px | 18px |
| Footer | shared | — | — | — |

No Inter / Poppins / Roboto / Montserrat substitutions.

# Animation audit

| Section | Initial | Trigger | Movement | Duration | Notes |
| --- | --- | --- | --- | --- | --- |
| Hero | Final state | — | none | — | Live has no pinned/scrub hero |
| Partner cards | Final | hover | `translateY(-5px)` + stronger shadow | 0.3s | CSS |
| Benefit / type / process cards | Final | none / mild hover | none required | — | No generic fade-up |
| CTAs | Final | hover | gradient wipe `::after` | 0.4s | `.theme-btn3` |
| Form submit | Final | hover | orange gradient wipe | 0.4s | `.button::after` |
| Process icons | Desktop absolute | — | none | — | Static float above cards |
| Form | Final | input/checkbox | native + custom checkbox | — | Motion not required |

No GSAP/ScrollTrigger on this page. Live has no pin/scrub/stagger here.

# 1440 / 390 QA

Local desktop comparison done in the Cursor browser (panel ~1131–1440) plus production build of both routes. Mobile 390: `overflow-x: 0`, stacked partner cards, hamburger Header, 32px hero heading.

## Screenshot-by-screenshot QA

| Screenshot | Result | Notes |
| --- | --- | --- |
| 01 Hero | PASS | 3-line gradient H1, copy, Become Our Partners (no arrow), handshake art not circular |
| 02 Showcase | PASS | Centered TopAds / AdsPower cards; live leftover 3rd column not reproduced (screenshot-first) |
| 03 Why | PASS | Art left / copy right; heading wrap depends on column width |
| 04 Benefits | PASS | Cream 2×2, real 3D icons, live `<br>` copy |
| 05 Who | PASS | Puzzle left / copy right |
| 06 Types | PASS | Six cards, live icons and copy |
| 07 Grow CTA | PASS | Circular photo, Talk to Our Team |
| 08 Process | PASS | Four steps, floating icons, peach ground |
| 09 Form | PASS | Fields, platforms, consent, Submit without arrow; contact-info muted to match screenshot 09 wash |

## Remaining visible differences (not claimed pixel-perfect)

- Live Shopify incorrectly circles every `.hero-main-image img`; local follows screenshots (only the Grow Together photo is circular).
- Live partner grid is `repeat(3, 1fr)` with two cards left-weighted; local centers two cards per screenshot 02.
- Live contact-info titles compute white-on-white; local uses muted grey matching screenshot 09.
- Decorative left orange circle is CSS (live had no `::before`); position is approximate.
- Consent links go to `/privacy-policy` and `/refund-policy` (live form hrefs are `#`).
- Form is frontend-only: submit is prevented and does not contact AGrowth.

Locked pages were not visually redesigned. Header gained Partner alias `/pages/stronger-together-agrowth` for active state only.


# Locked pages

Homepage, Services, Google, Meta, TikTok, Platform, Case Study listing, Case Study details: not modified (Header aliases only for Partner active state).
