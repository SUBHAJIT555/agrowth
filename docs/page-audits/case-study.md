# Case Study listing audit

# Reference

Reference:  
https://agrowth.io/case-study

Local:  
`/case-study`

No user section-wise screenshots were attached with this request. Visual audit used the live page at 1440 and 390.

Locked pages were not modified. Shared Header/Footer are reused. Header Case Study destination is updated to `/case-study` so it matches the live listing URL.

# Screenshot Map

User screenshots: **none attached**.

Live captures used during audit:

| Capture | Section |
| --- | --- |
| Live 1440 top | Header + H1 “Case Study” + orange rule + ALL / E-COMMERCE filters + first row of cards |
| Live 1440 lower | MarketWatch + Good in the Woods + Footer (no mid-page CTA) |
| Live 390 | Stacked cards, 1 column, filters left-aligned |

# Actual Page Structure

1. **Shared Header** — approved overlay header. Live listing also uses the global header. Local keeps the approved nav (Home present, Blog absent). Case Study is the active item on this route.
2. **Listing block** (`.case-study-section`) — grey `#f8f9fa`, padding `200px 0 60px`. Container `1200px` / `20px` gutters.
   - H1 “Case Study” — Assistant 800, computed 60px / 72px, `#1a1a1a`, centered.
   - Full-width 3px `#ff6b35` rule, 2px radius.
   - Filters: **ALL** (default active, solid `#ff6b35`) and **E-COMMERCE** (white fill + brand gradient outline). Client-side filter. Faith Hope Love has empty `data-tags` so it hides on E-COMMERCE. No other categories. Instant `display: none`, no stagger.
   - Grid: `auto-fill, minmax(300px, 1fr)`, 24px gap, 3 columns at 1440. Cards max-width 400px, 16px radius, white, 1px `#f0f0f0`, shadow. Hover: `translateY(-5px)` + deeper shadow.
   - Card anatomy: 400×200 cover thumbnail (metrics are **baked into the PNG**, not DOM), orange title link, author `👤 BY ALAN TRAN`, optional `🏷️ E-COMMERCE` pill. No excerpt, no extra CTA button.
   - Title (and visually the card via `cursor: pointer`) goes to `/blogs/case-study/{slug}`. **Detail pages are not built in this task.**
   - No See More / pagination in the current DOM (script exists but the button is absent; all 5 cards show).
3. **Shared Footer** — no extra conversion band on this page.

# Unique case studies (5)

| Order | Title | Tags | Thumbnail | href |
| --- | --- | --- | --- | --- |
| 1 | Faith Hope Love | (none) | `Google_Ads_revenue_35_in_2_months_3.png` | `/blogs/case-study/faith-hope-love` |
| 2 | Lumeera | e-commerce | `Lumeera_conversion.png` | `/blogs/case-study/lumeera` |
| 3 | Schaedelsucht | e-commerce | `Case2-Schaedelsucht_….png` | `/blogs/case-study/schaedelsucht` |
| 4 | MarketWatch | e-commerce | `Results_overview_1.png` | `/blogs/case-study/marketwatch` |
| 5 | Good in the Woods | e-commerce | `Results_overview_-_new.png` | `/blogs/case-study/good-in-the-woods` |

Author on every card: `BY ALAN TRAN`.

# Animation notes

| Section | Motion |
| --- | --- |
| Listing | Static on load |
| Cards | Hover lift 0.3s |
| Filters | Instant hide/show, active fill change 0.3s |
| Mobile | 1 column; image height 160px; title 2rem on live 10px root (= 20px). Local uses 32px at 768 so the heading stays larger than body text on a 16px root. |

# Screenshot QA

User screenshots were not attached. Compared live captures vs local.

| Capture | Result |
| --- | --- |
| Live 1440 opening + first row | PASS — heading, rule, filters, 3-up cards, titles, author, tags |
| Live 1440 second row + footer | PASS — MarketWatch / Good in the Woods, no extra CTA, shared footer |
| Live 390 | PASS with notes — 1-col cards and filters match; local H1 is 32px vs live 20px (Shopify 10px root + `2rem`) |

Remaining visible differences are listed in the implementation report.
