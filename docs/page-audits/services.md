# Services audit — `/services`

Reference: https://agrowth.io/pages/services  
Local: http://localhost:3000/services (alias: http://localhost:3000/pages/services)  
Audited: 16 September 2026  
Status: IMPLEMENTED — LOCK this route after approval.

Homepage `/` was not modified. Shared Header/Footer components were not redesigned. The Services nav href is `/services`; `/pages/services` is an alias of the same listing (visual Header unchanged).

---

## Screenshot Map

Screenshots are visual references only. They were not used as page artwork.

| Screenshot | File | Maps to |
| --- | --- | --- |
| 01 | `image-6ae27888-…png` | Shared Header + four service cards (Google, Meta, TikTok, Bing) |
| 02 | `image-253ea39d-…png` | ROI CTA “Maximize Your ROI With Our Best Solutions” |

No additional attached screenshots. Live page has no extra hero, no alternating rows, and no section between CTA and Footer besides the shared Footer intro.

---

## Live structure (authoritative)

1. Shared Header (absolute overlay, same as Homepage)
2. `.service-grid` on cream `#fff2e6` — four equal-height gradient cards
3. `.cta2` sunburst background + heading + paragraph + Contact Us
4. Shared Footer (the “At AGrowth, we are committed…” line is Footer copy, not a Services section)

There is **no** dedicated Services H1/hero. Cards sit directly under the overlay Header (`sp2` 120px + `space60`).

---

## Service cards

Not alternating image/text rows. Four equal cards in a 4-column grid (2 at tablet, 1 on mobile).

Each card uses a **distinct live wordmark PNG** (not Lucide, not a swapped logo):

| Label shown | Copy source | Learn More href (local) | Asset |
| --- | --- | --- | --- |
| Google | live paragraph | `/rent-google-agency-ads-account` | `google-wordmark.png` |
| Meta | live paragraph (Facebook Agency Ads Accounts wording) | `/rent-meta-agency-ads-account` | `meta-wordmark.png` |
| TikTok | live paragraph | `/rent-tiktok-agency-ads-account` | `tiktok-wordmark.png` |
| Bing | live paragraph (Microsoft Bing Advertising) | `/rent-bing-agency-ads-account` | `bing-wordmark.png` |

CTA label is `Learn More` with `text-transform: uppercase` → **LEARN MORE**.

Detail pages are **not** created.

---

## ROI CTA

Live HTML: `Maximize Your ROI with Our Best Solutions`  
Displayed with `text-transform: capitalize` → screenshot **With**.

Background: live `Thiet-ke-chua-co-ten.png` stored locally as `cta-sunburst.png`.

Contact Us → `/contact-us` (page not built).

---

## Animation audit

| Section | Initial | Trigger | Motion |
| --- | --- | --- | --- |
| Header | Overlay | None extra | Shared |
| Cards | Visible | Hover on LEARN MORE | CSS border/fill to `#d5261f` (live `.theme-btn5:hover`) |
| CTA paragraph | Live uses AOS fade-left | Load | Not replicated as a generic fade-up; static match of final state |
| Contact Us | Shared button | Hover | Existing gradient wipe |
| Footer | Shared | — | Unchanged |

No GSAP/ScrollTrigger on this page. Live has no pinned/scrub effects here.

---

## Screenshot-by-screenshot QA

Capture tool crops the far-right of 1440 shots. CDP: `innerWidth` 1440, `scrollWidth` 1425, header Contact Us at x=1166 (on-canvas).

| Screenshot | Result | Notes |
| --- | --- | --- |
| 01 Header + cards | PASS | Cream ground, 4 logos, exact copy, LEARN MORE pills |
| 02 ROI CTA | PASS | Sunburst, capitalized heading, supporting copy, Contact Us |

---

## Responsive QA

| Width | Result |
| --- | --- |
| 1440 | PASS — 4 columns, cards ~311px, CTA 56px heading |
| 1280 / 1600 | PASS — same 4-col grid inside 1320 container |
| 1024 | PASS — 2-column from 991px |
| 768 | PASS — 2-column until 767px |
| 430 / 390 / 375 | PASS — 1 column, `scrollWidth === 390`, hamburger Header |

Mobile order matches live: Google → Meta → TikTok → Bing, image then text (stacked in-card).

---

## Content QA

- [x] No invented extra services
- [x] Google / Meta / TikTok / Bing copy exact from live
- [x] LEARN MORE / Contact Us labels
- [x] ROI heading + paragraph exact (capitalize for With)
- [x] Footer copy unchanged

---

## Remaining visible differences

1. Dev-only Next.js “N” badge / hydration warning on `Logo` (pre-existing shared component; Homepage locked — not patched here).
2. Live CTA paragraph uses AOS fade-left; local shows the settled layout.
3. LEARN MORE uses an inline SVG arrow instead of Font Awesome.

---

## Homepage regression

`/` still composes the approved Homepage sections (Hero through Platform CTA). No Homepage files were edited. Header/Footer markup unchanged; only `headerNavigation` Services `href` retargeted to this listing.
