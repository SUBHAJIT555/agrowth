# Current Case Study Inventory

Live listing re-audited 16 September 2026 from:

- Listing href: https://agrowth.io/blogs/case-study (redirects to https://agrowth.io/case-study)
- Local listing: `/case-study` (LOCKED — visual design unchanged)

No extra or removed cards versus the five titles in the original brief.

User section-wise screenshots were **not attached** for this task. Live detail pages are the visual and copy authority.

# Route table

| Case Study | Listing card title | Listing thumbnail | Category | Author | Live listing href | Live canonical after click | Local detail route | Service / platform | Screenshots supplied? | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Faith Hope Love | Faith Hope Love | `Google_Ads_revenue_35_in_2_months_3.png` | (none on listing) | BY ALAN TRAN | `/blogs/case-study/faith-hope-love` | https://agrowth.io/case-study/faith-hope-love | `/blogs/case-study/faith-hope-love` (`/case-study/faith-hope-love` alias) | Meta Agency Ad Account | No | IMPLEMENTED |
| Lumeera | Lumeera | `Lumeera_conversion.png` | E-COMMERCE | BY ALAN TRAN | `/blogs/case-study/lumeera` | https://agrowth.io/case-study/lumeera | `/blogs/case-study/lumeera` (`/case-study/lumeera` alias) | Google Agency Ads Account | No | IMPLEMENTED |
| Schaedelsucht | Schaedelsucht | `Case2-Schaedelsucht_….png` | E-COMMERCE | BY ALAN TRAN | `/blogs/case-study/schaedelsucht` | https://agrowth.io/case-study/schaedelsucht | `/blogs/case-study/schaedelsucht` (`/case-study/schaedelsucht` alias) | Meta Agency Ad Account | No | IMPLEMENTED |
| MarketWatch | MarketWatch | `Results_overview_1.png` | E-COMMERCE | BY ALAN TRAN | `/blogs/case-study/marketwatch` | https://agrowth.io/case-study/marketwatch | `/blogs/case-study/marketwatch` (`/case-study/marketwatch` alias) | Google Agency Ad Account | No | IMPLEMENTED |
| Good in the Woods | Good in the Woods | `Results_overview_-_new.png` | E-COMMERCE | BY ALAN TRAN | `/blogs/case-study/good-in-the-woods` | https://agrowth.io/case-study/good-in-the-woods | `/blogs/case-study/good-in-the-woods` (`/case-study/good-in-the-woods` alias) | Meta Agency Ad Account | No | IMPLEMENTED |

Faith Hope Love slug was **verified from the live listing card href**, not guessed: `/blogs/case-study/faith-hope-love`.

Sitemap case-study URLs = listing + these five details. No sixth public case study.

# Href verification

Clicked/inspected every listing card on the live listing:

1. Faith Hope Love → `/blogs/case-study/faith-hope-love`
2. Lumeera → `/blogs/case-study/lumeera`
3. Schaedelsucht → `/blogs/case-study/schaedelsucht`
4. MarketWatch → `/blogs/case-study/marketwatch`
5. Good in the Woods → `/blogs/case-study/good-in-the-woods`

Local listing already used the same five hrefs. After this task they resolve to local detail pages. Listing visuals were not redesigned.

# Comparison matrix (actual live pages)

| Case Study | Challenge | Services | Solution | Results | About | Testimonial | Why This Worked | Extra sections | Page CTA | Shared CTA |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Faith Hope Love | Yes + screenshot | Meta Agency Ad Account | Yes (no “Here’s what AGrowth delivered”) | Metrics + 2 images | About the Client + website screenshot | Yes | No | — | Ready to Turn Chaos Into Growth? | Ready to scale without limit? |
| Lumeera | Yes + screenshot + caption | Google Agency Ads Account | Yes + 33% budget note | Metrics + 1 image | About the Client - Lumeera | No | No | GMC copy in Challenge/Solution | Ready to Scale Without Limits? (Google/GMC) | Yes |
| Schaedelsucht | Yes + screenshot | Meta Agency Ad Account | Yes + “Here’s what AGrowth delivered” + CPA/ROAS spend close | Metrics + 1 image | About the Client | Yes (Schädelsucht Team) | Yes | — | Ready To Scale Without Limits? (rejections/returns) | Yes |
| MarketWatch | Yes + auction screenshot | Google Agency Ad Account | Yes + “Here’s what AGrowth delivered” | Metrics + 2 images | About the Client – MarketWatch | No | No | VND/auction competitor copy | Ready to Scale Without Limits? (spend caps/CPA) | Yes |
| Good in the Woods | Yes, no bullets + screenshot | Meta Agency Ad Account | Yes + billing screenshot + support bullets | Intro + 2 result images (metrics in screenshot) | About the Client - Good in the Woods | Yes (Marketing Manager) | Yes | Billing caption; Shopify caption | Ready to Scale Without Limits? (restrictions/roadblocks) | Yes |

# Shared vs page-specific

Shared: overlay Header/Footer, orange clipped hero, back link copy, Challenge/Solution/Results title treatment, Share + Services Provided sidebar, article column ~1250px, shared `cta2` band (restriction / roadbloacks / Contact Us).

Page-specific: copy, metrics, images, About fields, testimonial presence, Why This Worked presence, contextual CTA wording, number of result screenshots, GMC vs Meta vs Google auction content.

# Architecture

- Dynamic route `src/app/blogs/case-study/[slug]/page.tsx`
- Alias `src/app/case-study/[slug]/page.tsx` (matches live canonical after click)
- Shared layout primitives in `src/components/case-studies/`
- Per-client JSX in `src/data/case-studies/*.tsx` (not a CMS section builder)
- Unknown slugs: `notFound()`

Back-to-listing href is local `/case-study`, not agrowth.io.
