# Rent Google Agency Ads Account audit

# Reference

Reference URL:  
https://agrowth.io/pages/rent-google-agency-ads-account

Local route:  
`/pages/rent-google-agency-ads-account`  
Alias (Services LEARN MORE, unchanged): `/rent-google-agency-ads-account`

Homepage `/` and Services `/pages/services` were not modified.

# Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Header overlay + Hero (Google Partner badge, H1, 4 checks, Get Access, SERP visual) |
| 02 | Why Choose Google Agency Account (5 benefit cards) |
| 03 | AGrowth Platform (features + fox/phone mockup) |
| 04 | Special Offer coupon $384 envelope |
| 05 | Get your Google Agency Ad Accounts in 4 steps |
| 06 | How AGrowth Beats Regular Ad Accounts comparison |
| 07 | Guarantees certificate |
| 08 | Customer Testimonials chat screenshots + slider nav |
| 09 | Let’s Scale Your Ads contact/lead form |
| 10 | Frequently Asked Questions accordion |
| 11 | Ready To Scale Without Limits final CTA |

# Page section inventory

1. **Header** — shared approved Header, overlay capsule on dark hero. Services active via child/alias routes. Animation: none beyond existing hover.
2. **Hero** — `Premium Google Ads Invoice Accounts`. Google Partner pill, eyebrow, 4 green-shield bullets, Get Access → `#lets-scale-your-ads`. Asset: `hero-bg.png`, `hero-search.png`. Desktop 2-col; mobile stacks, CTA moves to bottom. CSS fade-in.
3. **Why Choose** — 5 cards (orange/white alternating), last card centered on desktop. Hover lift. AOS fade-up stagger. Map background.
4. **AGrowth Platform** — 6 features, pill CTA → `/agrowth-platform`. Mockup image. Fade right/left.
5. **Special Offer** — $384 coupon envelope. IntersectionObserver opens flap; click toggles. CLAIM OFFER → `/contact-us`.
6. **4 steps** — numbers 1–4, dashed connectors desktop, stack on tablet/mobile. Fade-up stagger.
7. **Comparison** — 3 cards; left criteria hidden on ≤991 with `data-label` prefixes. Staggered pop-in on scroll.
8. **Guarantees** — single image, static.
9. **Testimonials** — 8 unique chat images, infinite carousel, 4/2/1 slides, autoplay 4s, prev/next + Contact us now → `/contact-us`.
10. **Contact form** — copy unique to this page (“Let’s Scale Your Ads!”, “pay flexibly”). Frontend-only. Shared visual form language from Homepage contact CSS.
11. **FAQ** — 4 items, all start closed, one open at a time, caret rotate. Cream `#fff2e6`.
12. **Final CTA** — “Ready to Scale Without Limits?” CONTACT US NOW → `/contact-us`. Wave background.
13. **Footer** — shared, unchanged.

No statistics count-up on this page. No Google Ads API. No invented campaign data (hero SERP is the live public PNG).

# Animation notes

| Section | Initial | Trigger | Motion | Duration |
| --- | --- | --- | --- | --- |
| Hero copy | fade/slide up | load | CSS keyframes | 0.8s |
| Hero media | fade from right | load | CSS | 1s |
| Why cards | opacity 0 / translateY | in-view | fade-up stagger 0/100/200/300/400ms | 800ms |
| Platform | fade-right / fade-left | in-view | 800ms | |
| Offer envelope | closed | 20% in-view + 300ms delay | flap + coupon slide | ~0.65s |
| Steps | fade-up | in-view | 0/150/300/450ms | 800ms |
| Comparison | cards/rows hidden | 15% in-view | stagger --col-delay + row index | 0.6–0.8s |
| Testimonials | autoplay | interval | translateX 500ms | 4s |
| FAQ | max-height 0 | click | 0.35s | |
| Hover | cards, CTAs, coins | pointer | translateY / scale | 0.2–0.3s |

# Screenshot QA (after implementation)

Filled during visual QA.

# Content crosscheck

Copy taken from this live page only. Not imported from Services Google card blurb, Facebook, TikTok, Bing, or Homepage 4-step specialist line (“Meta/TikTok/Google” replaced here with “Google specialist”).
