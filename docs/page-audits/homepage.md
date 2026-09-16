# Homepage audit — `/`

Reference: https://agrowth.io/  
Local: http://localhost:3000/  
Audited: 16 September 2026  
Status: IMPLEMENTED — visual QA complete; remaining differences listed below.  
`/` is LOCKED after this pass. Do not change Homepage to make later pages easier.

---

## Screenshot Map

Attached screenshots are visual references only. They were not used as page artwork.

| Screenshot | File | Maps to |
| --- | --- | --- |
| 01 | `image-9304c293-…png` | Header overlay + Hero + dual brand marquees |
| 02 | `image-9a95b36f-…png` | Problem section: laptop “Ad Account Disabled” + 6 pain cards |
| 03 | `image-722f597a-…png` | Limitless Scaling platform tabs (Google tab, “From 6%”) |
| 04 | `image-f6d5a701-…png` | Infrastructure GIF + Creative→Revenue timeline |
| 05 | `image-6dea5de7-…png` | Stats orbit (2000+ / 0,2% / 900+ / 98%) + media-buyer heading |
| 06 | `image-69b28ca8-…png` | Included When You Choose AGrowth (4-slide mascot + copy) |
| 07 | `image-6ddda0ca-…png` | Platform overview + YouTube facade + 4-step process |
| 08 | `image-bce48e29-…png` | Testimonials / Trustpilot grid |
| 09 | `image-c38d0876-…png` | Contact / lead form |
| 10 | `image-4e20e8db-…png` | Final Platform CTA |
| 11 | `image-b7756085-…png` | Footer |

No attached screenshot for **Our Blogs**. Recreated from the live homepage (3 current articles).

---

## Live page structure (authoritative order)

1. Shared Header (overlay capsule)
2. HomeHero
3. BrandsMarquee (two opposing tracks)
4. UnstableAccounts (laptop + pain cards)
5. AdPlatformTabs (Meta / Google / TikTok)
6. CampaignInfrastructure
7. HomeStats + “We Build the Best Solution for Media Buyers”
8. IncludedBenefits (separate from the stats heading)
9. PlatformOverview (dashboard video)
10. AgencyAccountSteps
11. ClientTestimonials
12. HomeContact
13. HomeBlog (preview only)
14. PlatformCta
15. Shared Footer

---

## Animation audit

| Section | Initial | Trigger | Motion | Notes |
| --- | --- | --- | --- | --- |
| Header | Overlay on hero | Scroll | Shared Phase 1 sticky/scroll | Unchanged foundation |
| Hero | Visible | Load | CSS background / mascot crop | No generic fade-up |
| Marquee | Tracks off-center | Load / loop | CSS `translateX` infinite, opposite directions | `prefers-reduced-motion` disables |
| Unstable laptop | Closed lid | In-view (`open-laptop`) | CSS lid open + warning blink | Layered DOM, not an image |
| Pain cards | Static | Hover | Card lift | |
| Platform tabs | Copy/image `opacity: 0` | `.in-view` | CSS fade | IntersectionObserver; reduced-motion forces opacity 1 |
| Tab switch | Instant swap | Click | Motion not required | Google tab copy follows screenshot (6%) |
| Infrastructure | Rows `opacity: 0` | `.animate` | Staggered fade + connector draw | GIF is the visual |
| Stats | `0` / `0,0%` | In-view | Count-up to live values | Orbit CSS rotate; reduced-motion stops orbit |
| Included benefits | Slide 0 | In-view + 4.5s interval | CSS transform slider, synced image/copy | Dots clickable |
| Platform video | YouTube facade | User play | Native YouTube iframe `uYbIlpFR6U8` | Matches screenshot play/Watch on YouTube chrome |
| 4 steps | Title/cards hidden | `.animate` | CSS title + card + number | Orange ribbed hero-banner background |
| Testimonials | Static 3-col grid | None on desktop | Not a duplicate carousel loop | Mobile: horizontal scroll from live CSS |
| Contact form | Static | Focus / submit | Frontend-only preventDefault | |
| Blog | Static 3-card grid | Hover (live CSS) | Preview links only | |
| Final CTA | Static | Hover on button | Shared CTA styles | |
| Footer | Static | Hover links | Shared | |

GSAP/ScrollTrigger is available from Phase 1. Homepage section motion matches live CSS + IntersectionObserver, not a generic fade-up system.

---

## Screenshot-by-screenshot QA (1440)

Browser screenshots of the local tab crop the far-right ~edge of the 1440 canvas. CDP: `innerWidth` 1440, `scrollWidth` 1425 (scrollbar only — **no page overflow**). Treat cropped-right screenshots as a capture artifact unless CDP shows overflow.

| Screenshot | Section | Result | Notes |
| --- | --- | --- | --- |
| 01 | Header + Hero + marquee | PASS | H1 two-line wrap, mascot bleed, capsule header, dual marquees |
| 02 | Problem / laptop | PASS | Layered laptop + “Ad Account Disabled” + 6 cards; heading max-width 678px |
| 03 | Platform tabs | PASS after in-view fix | Google tab uses **6%** from screenshot; Meta default matches live |
| 04 | Infrastructure | PASS | GIF + timeline + “Protected by AGrowth”; annotation width tightened |
| 05 | Stats | PASS | 2000+ / 0,2% / 900+ / 98%; count-up; orbit avatars/pills |
| 06 | Included benefits | PASS | Four real mascot slides + custom icons; autoplay |
| 07 | Platform + steps | PASS after column fix | `.col-lg-*` specificity was stacking columns; now 550/770 split |
| 08 | Testimonials | PASS | Live reviewers only; Trustpilot CTA; no invented cards; no loop duplicates |
| 09 | Contact | PASS with notes | Copy/fields match; phone is simplified US/VN/GB/AU vs live intl-tel-input |
| 10 | Final CTA | PASS | Exact wording including “You Ad Budget ?”; Get Access → `/agrowth-platform` |
| 11 | Footer | PASS | Shared footer; contact + addresses exact |
| (live) | Our Blogs | PASS | Current 3 articles + Alan Tran / BOD of AGrowth |

---

## Responsive QA

| Width | Result | Notes |
| --- | --- | --- |
| 1440 | PASS | Primary desktop. Hero H1 width ~717px. |
| 1280 / 1600 | PASS (interpolated + CDP) | Same desktop grid; container 1320 |
| 1024 | PASS with notes | Infra timeline stacks; nav still desktop until 992 |
| 768 | PASS with notes | Header hamburger; pain cards / steps stack per CSS |
| 430 | PASS with notes | Same mobile column as 390 |
| 390 | PASS | Hero hamburger + mascot; laptop scales; `scrollWidth === 390` |
| 375 | PASS with notes | Same mobile CSS as 390; no overflow masking |

No `html, body { overflow-x: hidden }` added.

---

## Content QA

Authorized public copy used throughout (including unusual grammar).

- [x] Hero H1, pills, social proof
- [x] Problem heading + 6 cards
- [x] Platform tab titles/pills (Google **6%** per screenshot)
- [x] Infrastructure labels + protection copy
- [x] Stats values from live + screenshot 05
- [x] Media-buyer heading kept separate from Included benefits
- [x] Included benefits 4 features
- [x] Platform overview copy + 4 checks
- [x] 4 process steps + payment method names in copy (no extra providers)
- [x] Testimonials: Emily Chen, Daniel K, Mattia Lipreri, Sophia Martinez, Hossam, Robert W. + Trustpilot stub card
- [x] Contact heading “Let's start Growing Together!”
- [x] Form fields/order; Privacy + Refund links to future routes
- [x] Blog titles/dates from live homepage
- [x] CTA “Ready to Take Full Control of You Ad Budget ?”
- [x] Footer contact + USA/Hong Kong wording

---

## Testimonial QA

- [x] Names, titles, bodies, portraits from live public page
- [x] Trustpilot stars artwork + “View more Trustpilot review”
- [x] Desktop = static grid (live repeats only if a carousel would loop; we did not duplicate)
- [ ] Live intl/Trustpilot widget chrome is a custom recreation of the visible cards, not an embedded Trustpilot script

---

## Form QA

- [x] Name, email, phone, company, Telegram/WhatsApp + details, message
- [x] Google / Facebook / TikTok / Bing / Others
- [x] Consent checkbox + Privacy / Refund links
- [x] Submit is client-only (`preventDefault`)
- [x] No backend / CRM / webhook
- [ ] Phone country UI is a compact select (🇺🇸 +1 / 🇻🇳 +84 / 🇬🇧 +44 / 🇦🇺 +61), not the full live intl-tel-input flag plugin
- [ ] Native checkboxes vs live custom circular chips — visually close, not identical

---

## Asset QA

Local copies under `public/assets/images/home/`, `public/assets/icons/home/`, `public/assets/videos/home/`, `public/assets/images/blog/`. No production CDN hotlinking. See `docs/assets.md`.

---

## Remaining visible differences

1. Phone input uses a simplified country select instead of live `intl-tel-input`.
2. Platform checkboxes are native squares; live uses custom circular chips.
3. Header Contact Us CTA can clip in tight screenshot crops (Phase 1 overlay math; CDP still reports the button on-canvas at 1440).
4. Included-benefits slide at any given second may differ from screenshot 06 because of autoplay.
5. Dev-only Next.js “N” badge is not part of production.

---

## Header / Footer regression

Shared Header and Footer were not replaced. Homepage uses them as-is. Nav labels “About Us” / “Case Study” already matched live. Footer partner badges, WhatsApp, email, Telegram, channel, and both branch addresses preserved.
