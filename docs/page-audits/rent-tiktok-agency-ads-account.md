# Rent TikTok Agency Ads Account audit

# Reference

Reference:  
https://agrowth.io/pages/rent-tiktok-agency-ads-account

Local:  
`/pages/rent-tiktok-agency-ads-account`  
Alias (Services LEARN MORE): `/rent-tiktok-agency-ads-account`

Homepage `/`, Services `/pages/services`, Google `/pages/rent-google-agency-ads-account`, and Meta `/pages/rent-meta-agency-ads-account` were not modified.

This page was audited independently. It is **not** a Google or Meta search-and-replace.

# Screenshot Map

Built from the eight attached screenshots.

| Screenshot | Section |
| --- | --- |
| 01 | Header overlay + Hero (TikTok Marketing Partner badge, tagline, H1, 4 checks, Get Access, TikTok ad-card visual) |
| 02 | Why Choose TikTok Agency Account (6 benefit cards) |
| 03 | AGrowth Platform (6 features + fox/phone mockup) |
| 04 | Get your TikTok Agency Ad Accounts in 4 steps |
| 05 | How AGrowth Beats Regular Ad Accounts (text comparison, 7 rows) |
| 06 | Guarantees certificate |
| 07 | Customer Testimonials chat screenshots + slider nav |
| 08 | Let’s Scale Your Ads contact / lead form |

Live page also contains two sections beyond the attached set (authoritative for copy):

- Frequently Asked Questions (4 payment/top-up questions)
- Final CTA “Ready To Scale Without Limits?”

No Special Offer / $384 coupon. No statistics strip.

# Actual Page Structure

## 1. Header

- Screenshot: 01 (top)
- Shared approved Header overlay capsule
- CTA: Contact Us → `/contact-us`
- Services dropdown includes “Rent TikTok Agency Ads Account”

## 2. Hero

- Screenshot: 01
- Exact heading: `Scale Limitlessly with TikTok Agency Accounts` (2 lines at 1440)
- Tagline: `Rent TikTok Agency Ads Account`
- Checks: `Instant Budget Allocation`, `Dedicated Support`, `High-trust Accounts`, `24/7 Auto Top-up`
- CTA: Get Access → `#lets-scale-your-ads`
- Visual: TikTok Marketing Partner white pill + `Web_Tiktok_2-02.png` ad-card composition
- Background: ribbed orange `Web_Tiktok_2-02` hashed bleed, `min-height: 750px`
- H1 Outfit 900 **54px**/1.15/−1.5px (not Google 56 or Meta 50)
- Desktop 2-col; mobile stack, centered title, CTA below visual
- Animation: CSS fade-in copy; fade-in-right media

## 3. Why Choose TikTok Agency Account

- Screenshot: 02
- Exact heading: `Why Choose` + orange `TikTok Agency Account`
- Six cards:
  1. UNLIMITED SPEND & FAST FUNDING — orange — bolt
  2. VERIFIED AGENCY ACCOUNTS — white — shield-halved
  3. 24/7 OPERATIONAL AUTONOMY — white — business-time
  4. INSTANT REPLACEMENTS — orange — medal
  5. PREMIUM AD CREDIT REWARDS — orange — arrows-spin
  6. PRIORITY TIKTOK AM SUPPORT — white — headset
- Background: map-grid hashed `Web_GG_3-06` (same public file as other service why-choose bgs)
- 2-col even grid; mobile 1-col
- Fade-up stagger; hover lift

## 4. AGrowth Platform

- Screenshot: 03
- Copy and fox/phone mockup: live file `Web_GG_3-06.png` — same public asset as other service pages
- CTA pill → `/agrowth-platform`
- Fade-right / fade-left

## 5. Get your TikTok Agency Ad Accounts in 4 steps

- Screenshot: 04
- Step 1 body is **TikTok-specific**: `…from a TikTok specialist`
- Oversized numerals, dashed connectors desktop; stack on tablet/mobile
- Fade-up stagger

## 6. How AGrowth Beats Regular Ad Accounts

- Screenshot: 05
- Heading: `How AGrowth Beats` + orange `Regular Ad Accounts Every Single Time`
- **Text comparison** (not Meta check/cross). Headers: `AGrowth Premium Agency Account` / `Regular Ads Account`
- Seven rows: Global Market Targeting, Top-up & Spend, Ban Risk & Recovery, Account Approval, Operational Downtime, Balance Management, Support
- No Feature pill, no card footers
- ≤991 hide left criteria card; `data-label` prefixes
- IntersectionObserver stagger

## 7. Guarantees

- Screenshot: 06
- Same public `guarantees.png` served on the live TikTok page
- Static

## 8. Customer Testimonials

- Screenshot: 07
- Same eight public chat PNGs as the live TikTok page
- Contact us now → `/contact-us`; prev/next; autoplay 4s

## 9. Let’s Scale Your Ads contact form

- Screenshot: 08
- Copy matches live TikTok form
- Frontend only
- Submit gated by agreement

## 10. Frequently Asked Questions

- Not in attached screenshots; present live
- Four questions (payment, top-up speed, restricted balance, hidden fees)
- All closed initially, one open at a time

## 11. Final CTA

- Not in attached screenshots; present live
- `Ready To Scale Without Limits?`
- Exact paragraph including `scalling roadblocks`
- CONTACT US NOW → `/contact-us`
- Wave `cta-back_ground.png`

## 12. Footer

- Shared approved Footer

# Animation notes

| Section | Initial | Trigger | Motion | Duration |
| --- | --- | --- | --- | --- |
| Hero copy | fade | load | CSS | 0.8s |
| Hero media | fade from right | load | CSS | 1s |
| Why cards | opacity 0 / translateY | in-view | stagger 0–500ms | 800ms |
| Platform | fade-right / fade-left | in-view | 800ms | |
| Steps | fade-up | in-view | 0/150/300/450ms | 800ms |
| Comparison | cards/rows hidden | 15% in-view | stagger | 0.6–0.8s |
| Testimonials | autoplay | interval | translateX | 4s |
| FAQ | max-height 0 | click | 0.35s | |

No GSAP pin/scrub on the live page. No generic fade-up on static sections.

# Differences vs Google / Meta (do not copy-swap)

- Unique H1, TikTok Partner badge, TikTok ad-card artwork, 54px H1
- Six TikTok-specific Why Choose cards (Google has 5 Google cards; Meta has 6 Facebook/Meta cards)
- No Special Offer
- Steps H2 / specialist line are TikTok
- Comparison is 7 text rows with “AGrowth Premium Agency Account” / “Regular Ads Account” — not Google’s billing/$384 table and not Meta’s check/cross table
- FAQ is the 4 payment questions present on this live page (not Meta’s 3 Facebook/Meta FAQs)

# Screenshot QA (after implementation)

Compared attached screenshots + live 1440/390 against local `/pages/rent-tiktok-agency-ads-account`.

| Screenshot | Result | Notes |
| --- | --- | --- |
| 01 Hero | PASS | H1 Outfit 900 54px, 2-line wrap, TikTok Partner badge, 4 checks, Get Access, TikTok ad-card visual, hero 750px |
| 02 Why Choose | PASS | 6 TikTok-specific cards, orange/white pattern, live copy |
| 03 Platform | PASS | Shared live mockup `Web_GG_3-06.png` reused because the TikTok page serves it |
| 04 Steps | PASS | “TikTok specialist”, 4 numbered steps |
| 05 Comparison | PASS | 7 text rows; headers “AGrowth Premium Agency Account” / “Regular Ads Account”; not check/cross |
| 06 Guarantees | PASS | Same public certificate PNG as live |
| 07 Testimonials | PASS | Same 8 chat images as live; Contact us now |
| 08 Contact | PASS | Let’s Scale Your Ads copy + form |

FAQ + final CTA (live-only, not in screenshots): present with exact live copy.

Remaining visible differences: Next.js dev-tools overlay is not on production; hero-bg uses a 15px bleed like live CSS. Not pixel-identical at every sub-pixel.

# Content crosscheck

Copy taken from this live TikTok page + attached screenshots only. Form platform checkboxes include Google/Facebook/TikTok/Bing because the live form does. No Google Partner / Meta Partner / Facebook specialist leakage.
