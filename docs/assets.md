# Asset strategy

Phase 1 downloads **only** shared header/footer/brand assets. Page-specific images, videos, illustrations, and icons are audited when that page is implemented.

Never hotlink AGrowth CDN files in production.

Never use screenshots as page artwork.

---

## Workflow for every future page

1. Inspect the live section (DOM, network, computed CSS).
2. Prefer the real PNG / JPG / WebP / AVIF / SVG / GIF / WebM / MP4 / CSS background.
3. Search this repo before downloading.
4. Store locally with a purpose-based filename.
5. Keep SVG as SVG.
6. Use `next/image` without changing crop, ratio, or object-position.
7. Record the asset in the table below.

---

## Permission / reuse status

These files are taken from the current public AGrowth website for a high-fidelity public frontend recreation. If a later page uses third-party artwork that cannot be reused, mark `replacement required` and stop rather than inventing a lookalike.

---

## Phase 1 shared assets

| Source page | Source section | Role | Type | Original | Local path | Dimensions | Format | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Global | Header / footer | White wordmark | image | `Copy_of_logo_AG_tr_ng.png` | `public/assets/logos/agrowth-logo-white.png` | 3334×3439 | PNG | yes | public brand logo | no |
| Global | Mobile header | Small white wordmark | image | `Copy_of_logo_AG_tr_ng_small.png` | `public/assets/logos/agrowth-logo-white-small.png` | 97×100 | PNG | yes | public brand logo | no |
| Global | Favicon | Color “A” mark | image | `cropped-logo-A-bl-02-1-1-800x800-2.png` | `public/assets/logos/agrowth-mark.png` and `src/app/icon.png` | 800×676 | PNG | yes | public favicon | no |
| Global | Footer | Orange footer artwork | background | `icon-08_94636858-7413-4de4-bc66-cd7bdbf4a5bb.png` | `public/assets/images/shared/footer-background.png` | 6042×2881 | PNG | yes | public site graphic | no |
| Global | Footer | Meta partner badge | image | `Meta_Partner.png` | `public/assets/images/shared/badge-meta-partner.png` | 772×325 | PNG | yes | public badge | no |
| Global | Footer | Google partner badge | image | `GG_partner.png` | `public/assets/images/shared/badge-google-partner.png` | 700×295 | PNG | yes | public badge | no |
| Global | Footer | TikTok marketing partner badge | image | `TikTok_marketing-_partner.jpg` | `public/assets/images/shared/badge-tiktok-marketing-partner.jpg` | 625×246 | JPG | yes | public badge | no |
| Global | Footer | Trustpilot strip | image | `Trustpilot_partner.png` | `public/assets/images/shared/badge-trustpilot.png` | 3861×507 | PNG | yes | public badge | no |
| Global | Footer contact | WhatsApp icon | image | `icon-06.png` | `public/assets/icons/icon-whatsapp.png` | 58×58 | PNG | yes | public icon | no |
| Global | Footer location | Pin icon | image | `icon-06_abf2dd23-576f-4192-838c-1950c7341498.png` | `public/assets/icons/icon-location.png` | 58×58 | PNG | yes | public icon | no |

Generic UI icons (chevrons, plus, close, mail, send, social) use Lucide or small inline SVGs. They are not AGrowth artwork.

---

## Homepage assets (Phase 2)

Stored locally. Not hotlinked. Screenshots were not used as artwork.

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Hero | Mascot bleed | image | Shopify hero bleed | `public/assets/images/home/hero-bleed.png` | PNG | no | public page graphic | no |
| Home | Hero | Mobile mascot | image | Shopify hero mobile | `public/assets/images/home/hero-mobile.png` | PNG | no | public page graphic | no |
| Home | Hero / steps | Ribbed orange banner | image | Shopify hero-banner | `public/assets/images/home/hero-banner.png` | PNG | page | public page graphic | no |
| Home | Hero | Floating A badge | image | Shopify logo badge | `public/assets/images/home/hero-logo-badge.png` | PNG | no | public brand | no |
| Home | Marquee | Google / Taboola / Yandex / Yango / Lumeera / Gone in the Woods | image | Shopify marquee logos | `public/assets/images/home/marquee-*.png` | PNG | no | public brand marks as shown | no |
| Home | Problem | Glow bubbles | image | Shopify bubble | `public/assets/images/home/problem-bubble.png` | PNG | no | public decorative | no |
| Home | Platform tabs | Meta / Google / TikTok dashboards | image | Shopify tab artwork | `public/assets/images/home/platform-{meta,google,tiktok}.png` | PNG | no | public product visual | no |
| Home | Infrastructure | Bar chart GIF | gif | `Gif_visual.gif` | `public/assets/videos/home/infrastructure.gif` | GIF | no | public illustration | no |
| Home | Stats | Avatars + A mark | image | Shopify orbit assets | `public/assets/images/home/stats-*.png` | PNG | no | public decorative | no |
| Home | Included benefits | 4 mascot slides | image | Shopify choose slides | `public/assets/images/home/benefit-*.png` | PNG | no | public illustration | no |
| Home | Included benefits | 4 feature icons | image | Shopify choose icons | `public/assets/icons/home/benefit-*.png` | PNG | no | custom artwork | no |
| Home | Platform overview | YouTube | iframe | `https://www.youtube.com/embed/uYbIlpFR6U8` | n/a (YouTube embed, not a file) | video | no | public video | no |
| Home | Platform overview | Thumb (downloaded, unused if iframe) | image | YouTube poster | `public/assets/images/home/platform-video-thumb.jpg` | JPG | no | public video still | no |
| Home | Testimonials | Portraits + cluster + stars | image | Shopify review assets | `public/assets/images/home/review-*.png`, `trustpilot-stars.png` | PNG | no | public reviews | no |
| Home | Contact | Section background | image | `let_start-09.png` | `public/assets/images/home/contact-background.png` | PNG | no | public graphic | no |
| Home | Blog preview | 3 article covers | image | live blog cards | `public/assets/images/blog/*.png` | PNG | no | public articles | no |
| Home | Blog meta | Author / bag / date | svg | live blog icons | `public/assets/icons/home/{author,bag,date}.svg` | SVG | no | public icon | no |
| Home | Final CTA | Wave background | image | `footer-05.png` | `public/assets/images/home/cta-background.png` | PNG | no | public graphic | no |

Laptop “Ad Account Disabled”, infrastructure timeline icons, and generic chevrons are layered DOM / inline SVG (not Lucide brand marks).

---

## Services assets (Phase — `/services`)

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Dimensions | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Services | Google card | Google wordmark | image | `gg-removebg-preview.png` | `public/assets/images/services/google-wordmark.png` | PNG | 449×210 | no | public brand artwork as shown | no |
| Services | Meta card | Meta wordmark | image | `22-removebg-preview-e1734336893580.png` | `public/assets/images/services/meta-wordmark.png` | PNG | 420×200 | no | public brand artwork as shown | no |
| Services | TikTok card | TikTok wordmark | image | `tik-removebg-preview-300x140.png` | `public/assets/images/services/tiktok-wordmark.png` | PNG | 300×140 | no | public brand artwork as shown | no |
| Services | Bing card | Bing wordmark | image | `logochuan-300x140.png` | `public/assets/images/services/bing-wordmark.png` | PNG | 300×140 | no | public brand artwork as shown | no |
| Services | ROI CTA | Sunburst background | image | `Thiet-ke-chua-co-ten.png` | `public/assets/images/services/cta-sunburst.png` | PNG | 1000×250 | no | public page graphic | no |

Header/footer logos and partner badges reuse Phase 1 shared assets. LEARN MORE uses a generic inline arrow (not Lucide brand marks).

---

## Google Agency Ads assets (Phase — `/pages/rent-google-agency-ads-account`)

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Dimensions | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Google | Hero | Ribbed orange hero background | image | `Web_GG_3-05.png` | `public/assets/images/google-ads/hero-bg.png` | PNG | 2000×1117 | no | public page graphic | no |
| Google | Hero | Google search / SERP visual | image | `Web_GG_3-04.png` | `public/assets/images/google-ads/hero-search.png` | PNG | 1600×1440 | no | public product visual | no |
| Google | Hero | Google Partner badge | image | `GG_partner.png` | `public/assets/images/shared/badge-google-partner.png` | PNG | 700×295 | yes | reused shared badge | no |
| Google | Why Choose | Map-grid section background | image | `Web_GG_3-06_489b8dfa-5571-4cf3-a0ff-bb5872a04e8d.png` | `public/assets/images/google-ads/why-choose-bg.png` | PNG | 2000×1283 | no | public page graphic | no |
| Google | Platform | Fox mascot + phone mockup | image | `Web_GG_3-06.png` | `public/assets/images/google-ads/platform-mockup.png` | PNG | 1800×2209 | no | public product visual | no |
| Google | Special Offer | Gold coin | image | `coin.png` | `public/assets/images/google-ads/coin.png` | PNG | 448×453 | no | public illustration | no |
| Google | Special Offer | Large gold coin | image | `coin2.png` | `public/assets/images/google-ads/coin-2.png` | PNG | 741×748 | no | public illustration | no |
| Google | Guarantees | Certificate artwork | image | `guarantees.png` | `public/assets/images/google-ads/guarantees.png` | PNG | 5090×2843 | no | public page graphic | no |
| Google | Testimonials | WhatsApp / chat screenshots (8 unique) | image | `cus_4.png`, `cus1-done.png`, `cus_3.png`, `cus_2.png`, `20251230-1337*.png` | `public/assets/images/google-ads/review-01.png` … `review-08.png` | PNG | ~318×612 | no | public testimonials as shown | no |
| Google | Contact | Section background | image | `let_start-09.png` | `public/assets/images/home/contact-background.png` | PNG | reused home | yes | same live file as Homepage contact | no |
| Google | Final CTA | Wave gradient background | image | `cta-back_ground.png` | `public/assets/images/google-ads/cta-background.png` | PNG | 1366×379 | no | public page graphic | no |

Benefit / platform icons are inline SVGs matching the live Font Awesome marks (bolt, shield-halved, business-time, medal, headset, wallet, rotate, sitemap, transfer, hand-dollar, chart, trend-up). Envelope pocket is live SVG markup. No production hotlinking.

---

## Meta / Facebook Agency Ads assets (Phase — `/pages/rent-meta-agency-ads-account`)

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Dimensions | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Meta | Hero | Ribbed orange hero background | image | `Web_Meta_2-02` hashed Shopify file | `public/assets/images/meta-ads/hero-bg.png` | PNG | 2000×1028 | no | public page graphic | no |
| Meta | Hero | Ads Manager / laptop visual | image | `Web_Meta_2-02.png` | `public/assets/images/meta-ads/hero-visual.png` | PNG | 2174×1951 | no | public product visual | no |
| Meta | Hero | Meta Business Partner badge | image | `Meta_Partner.png` | `public/assets/images/shared/badge-meta-partner.png` | PNG | 772×325 | yes | reused shared badge | no |
| Meta | Why Choose | Map-grid section background | image | `Web_GG_3-06` hashed Shopify file | `public/assets/images/meta-ads/why-choose-bg.png` | PNG | 2000×1283 | page | public page graphic (same live file as Google why-choose bg) | no |
| Meta | Platform | Fox mascot + phone mockup | image | `Web_GG_3-06.png` | `public/assets/images/google-ads/platform-mockup.png` | PNG | 1800×2209 | yes | live Meta page serves this same public file | no |
| Meta | Guarantees | Certificate artwork | image | `guarantees.png` | `public/assets/images/google-ads/guarantees.png` | PNG | 5090×2843 | yes | live Meta page serves this same public file | no |
| Meta | Testimonials | WhatsApp / chat screenshots (8 unique) | image | same public chat PNGs as Google detail page | `public/assets/images/google-ads/review-01.png` … `review-08.png` | PNG | ~318×612 | yes | live Meta page uses the same files | no |
| Meta | Contact | Section background | image | `let_start-09.png` | `public/assets/images/home/contact-background.png` | PNG | reused home | yes | same live file as Homepage / Google contact | no |
| Meta | Final CTA | Wave gradient background | image | `cta-back_ground.png` | `public/assets/images/google-ads/cta-background.png` | PNG | 1366×379 | yes | live Meta page serves this same public file | no |

Why-choose / platform icons are inline SVGs matching the live Font Awesome marks (bolt, shield-halved, business-time, puzzle from screenshot-primary Instant Replacements, arrows-spin, headset). Comparison uses the live check-circle and X paths. No production hotlinking. Unused duplicate `public/assets/images/meta-ads/badge-meta-partner.png` is not referenced (shared badge is used).

---

## TikTok Agency Ads assets (Phase — `/pages/rent-tiktok-agency-ads-account`)

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Dimensions | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TikTok | Hero | Ribbed orange hero background | image | `Web_Tiktok_2-02` hashed Shopify file | `public/assets/images/tiktok-ads/hero-bg.png` | PNG | 2000×981 | no | public page graphic | no |
| TikTok | Hero | TikTok ad-card visual | image | `Web_Tiktok_2-02.png` | `public/assets/images/tiktok-ads/hero-visual.png` | PNG | 1841×2147 | no | public product visual | no |
| TikTok | Hero | TikTok Marketing Partner badge | image | `TikTok_marketing-_partner.jpg` | `public/assets/images/shared/badge-tiktok-marketing-partner.jpg` | JPG | 625×246 | yes | reused shared badge | no |
| TikTok | Why Choose | Map-grid section background | image | `Web_GG_3-06` hashed Shopify file | `public/assets/images/google-ads/why-choose-bg.png` | PNG | 2000×1283 | yes | live TikTok page serves this same public file | no |
| TikTok | Platform | Fox mascot + phone mockup | image | `Web_GG_3-06.png` | `public/assets/images/google-ads/platform-mockup.png` | PNG | 1800×2209 | yes | live TikTok page serves this same public file | no |
| TikTok | Guarantees | Certificate artwork | image | `guarantees.png` | `public/assets/images/google-ads/guarantees.png` | PNG | 5090×2843 | yes | live TikTok page serves this same public file | no |
| TikTok | Testimonials | WhatsApp / chat screenshots (8 unique) | image | same public chat PNGs as the live TikTok page | `public/assets/images/google-ads/review-01.png` … `review-08.png` | PNG | ~318×612 | yes | live TikTok page uses the same files | no |
| TikTok | Contact | Section background | image | `let_start-09.png` | `public/assets/images/home/contact-background.png` | PNG | reused home | yes | same live file as Homepage contact | no |
| TikTok | Final CTA | Wave gradient background | image | `cta-back_ground.png` | `public/assets/images/google-ads/cta-background.png` | PNG | 1366×379 | yes | live TikTok page serves this same public file | no |

Why-choose / platform icons are inline SVGs matching live Font Awesome marks (bolt, shield-halved, business-time, medal, arrows-spin, headset). No production hotlinking. No Google SERP or Meta Ads Manager artwork.

---

## AGrowth Platform assets (Phase — `/pages/agrowth-platform`)

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Dimensions | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Platform | Hero | Full-bleed ribbed orange background | image | `20260508-134225.png` | `public/assets/images/agrowth-platform/hero-bg.png` | PNG | 1920×986 | no | public page graphic | no |
| Platform | Hero | Product video | iframe | `https://www.youtube.com/embed/uYbIlpFR6U8` | n/a (YouTube embed, same public video as Homepage overview) | video | 16:9 | yes | public video, different presentation | no |
| Platform | How It Works step 1 | Wallet / fund screenshot | image | `walet.png` | `public/assets/images/agrowth-platform/how-wallet.png` | PNG | 2119×1234 | no | public product visual | no |
| Platform | How It Works step 2 | Ad account setup screenshot | image | `topup.png` | `public/assets/images/agrowth-platform/how-accounts.png` | PNG | 2119×1234 | no | public product visual | no |
| Platform | How It Works step 3 | Scaling screenshot | image | `request.png` | `public/assets/images/agrowth-platform/how-scaling.png` | PNG | 2119×1234 | no | public product visual | no |
| Platform | Final CTA | Wave gradient background | image | `cta-back_ground.png` | `public/assets/images/google-ads/cta-background.png` | PNG | 1366×379 | yes | same live file as service CTAs | no |

Why Choose / Key Features use inline SVGs matching live Font Awesome marks (circle-exclamation, rocket, chart-line, user-plus, up-down, share-nodes, clock-rotate-left, file-invoice-dollar). No production hotlinking. Homepage Platform Overview assets were not overwritten.

---

## Case Study listing assets (Phase — `/case-study`)

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Case Study | Faith Hope Love card | Thumbnail (metrics baked in) | image | `Google_Ads_revenue_35_in_2_months_3.png` | `public/assets/images/case-study/faith-hope-love.png` | PNG | no | public article image | no |
| Case Study | Lumeera card | Thumbnail (metrics baked in) | image | `Lumeera_conversion.png` | `public/assets/images/case-study/lumeera.png` | PNG | no | public article image | no |
| Case Study | Schaedelsucht card | Thumbnail (metrics baked in) | image | `Case2-Schaedelsucht_….png` | `public/assets/images/case-study/schaedelsucht.png` | PNG | no | public article image | no |
| Case Study | MarketWatch card | Thumbnail (metrics baked in) | image | `Results_overview_1.png` | `public/assets/images/case-study/marketwatch.png` | PNG | no | public article image | no |
| Case Study | Good in the Woods card | Thumbnail (metrics baked in) | image | `Results_overview_-_new.png` | `public/assets/images/case-study/good-in-the-woods.png` | PNG | no | public article image | no |

Author / category marks are the live emoji (`👤`, `🏷️`). No production hotlinking.

---

## Case Study detail assets (Phase — `/blogs/case-study/[slug]`)

Hero images reuse the listing thumbnails (same Shopify article PNGs). Result/challenge visuals are stored per client. No production hotlinking. Screenshots were not used as page artwork.

| Case study | Section | Role | Original / reference | Local path | Format | Dimensions | Reused/new | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Faith Hope Love | Hero | Listing/hero PNG | `Google_Ads_revenue_35_in_2_months_3.png` | `public/assets/images/case-study/faith-hope-love.png` | PNG | 719×404 | reused listing | no |
| Faith Hope Love | Challenge | Ads Manager screenshot | `nh_man_hinh_2025-09-23_luc_10.13.15.png` | `public/assets/images/case-studies/faith-hope-love/fhl-challenge-performance.png` | PNG | 2844×912 | new | no |
| Faith Hope Love | Results | Orders/revenue chart | `nh_man_hinh_2025-09-09_luc_11.07.55.png` | `public/assets/images/case-studies/faith-hope-love/fhl-results-orders.png` | PNG | 1892×456 | new | no |
| Faith Hope Love | Results | Ads Manager | `faith-hope-love-solution-2.png` | `public/assets/images/case-studies/faith-hope-love/fhl-results-ads-manager.png` | PNG | 939×452 | new | no |
| Faith Hope Love | About | Client website | `www.faith-hopelove.com.png` | `public/assets/images/case-studies/faith-hope-love/fhl-about-website.png` | PNG | 1829×1082 | new | no |
| Lumeera | Hero | Listing/hero PNG | `Lumeera_conversion.png` | `public/assets/images/case-study/lumeera.png` | PNG | 719×404 | reused listing | no |
| Lumeera | Challenge | Before performance | `lumeera_3.jpg` | `public/assets/images/case-studies/lumeera/lumeera-before-performance.jpg` | JPG | 1919×777 | new | no |
| Lumeera | Results | After performance | `lumeera_2.jpg` | `public/assets/images/case-studies/lumeera/lumeera-results.jpg` | JPG | 837×438 | new | no |
| Schaedelsucht | Hero | Listing/hero PNG | `Case2-Schaedelsucht_….png` | `public/assets/images/case-study/schaedelsucht.png` | PNG | 719×404 | reused listing | no |
| Schaedelsucht | Challenge | Ads Manager | `nh_man_hinh_2025-09-10_luc_10.19.08.png` | `public/assets/images/case-studies/schaedelsucht/schaedelsucht-challenge-ads.png` | PNG | 1850×1460 | new | no |
| Schaedelsucht | Results | Shopify/results strip | `Screenshot_2025-06-25_145459_-_H_i_S_n_1.png` | `public/assets/images/case-studies/schaedelsucht/schaedelsucht-results.png` | PNG | 1036×309 | new | no |
| MarketWatch | Hero | Listing/hero PNG | `Results_overview_1.png` | `public/assets/images/case-study/marketwatch.png` | PNG | 719×414 | reused listing | no |
| MarketWatch | Challenge | Auction overlap | `Ad_are_interrupted_due_to_the_challenge_from_other_big_brand_keyword.jpg` | `public/assets/images/case-studies/marketwatch/marketwatch-challenge-auction.jpg` | JPG | 839×740 | new | no |
| MarketWatch | Results | Growing features | `MarketWatch_growing_features.png` | `public/assets/images/case-studies/marketwatch/marketwatch-growing-features.png` | PNG | 2190×540 | new | no |
| MarketWatch | Results | Google Ads overview | `overview-the-result-after-using-google-ads-account-agency.jpg` | `public/assets/images/case-studies/marketwatch/marketwatch-google-results.jpg` | JPG | 1762×645 | new | no |
| Good in the Woods | Hero | Listing/hero PNG | `Results_overview_-_new.png` | `public/assets/images/case-study/good-in-the-woods.png` | PNG | 719×404 | reused listing | no |
| Good in the Woods | Challenge | Before dashboard | `casestudy-good-in-the-wood.jpg` | `public/assets/images/case-studies/good-in-the-woods/woods-challenge.jpg` | JPG | 1366×1110 | new | no |
| Good in the Woods | Solution | Meta billing $4,869 | `meta-ad-billing.png` | `public/assets/images/case-studies/good-in-the-woods/woods-meta-billing.png` | PNG | 997×471 | new | no |
| Good in the Woods | Results | April metrics graphic | `good-in-the-wood-results.png` | `public/assets/images/case-studies/good-in-the-woods/woods-results.png` | PNG | 1186×237 | new | no |
| Good in the Woods | Results | Shopify sales report | `good-in-the-wood-results-2.png` | `public/assets/images/case-studies/good-in-the-woods/woods-shopify-report.png` | PNG | 958×457 | new | no |
| All details | Shared final CTA | Wave background | `cta-back_ground.png` | `public/assets/images/google-ads/cta-background.png` | PNG | 1366×379 | reused | no |

Permission/reuse: public AGrowth marketing assets for the frontend recreation. No replacement required.

---

## Stronger Together / Strategic Partners (`/pages/stronger-together-agrowth`)

| Source page | Source section | Role | Original / reference | Local path | Format | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Stronger Together | Hero | Handshake / dashboard illustration | `A.1.png` | `public/assets/images/stronger-together/hero-handshake.png` | PNG | no | public page graphic | no |
| Stronger Together | Showcase | TopAds logo | `topads.jpg` | `public/assets/logos/stronger-together/topads.jpg` | JPG | no | public partner mark as shown | no |
| Stronger Together | Showcase | AdsPower logo | `adspower.png` | `public/assets/logos/stronger-together/adspower.png` | PNG | no | public partner mark as shown | no |
| Stronger Together | Why | Laptop / platforms illustration | `A.2.png` | `public/assets/images/stronger-together/why-partnerships.png` | PNG | no | public page graphic | no |
| Stronger Together | Benefits | Co-marketing megaphone | `Thi_t_k_ch_a_co_ten_24.png` | `public/assets/icons/stronger-together/benefit-comarketing.png` | PNG | no | public illustration | no |
| Stronger Together | Benefits | Client-network globe | `Thi_t_k_ch_a_co_ten_25.png` | `public/assets/icons/stronger-together/benefit-network.png` | PNG | no | public illustration | no |
| Stronger Together | Benefits | Income lock-shield | `ghag.png` | `public/assets/icons/stronger-together/benefit-income.png` | PNG | no | public illustration | no |
| Stronger Together | Benefits | End-to-end puzzle/lamp | `lamp_puzzle.png` | `public/assets/icons/stronger-together/benefit-solutions.png` | PNG | no | public illustration | no |
| Stronger Together | Who | Puzzle pieces illustration | `Thi_t_k_ch_a_co_ten_26.png` | `public/assets/images/stronger-together/who-partners.png` | PNG | no | public page graphic | no |
| Stronger Together | Types | Digital Agencies | `ic2.png` | `public/assets/icons/stronger-together/type-agencies.png` | PNG | no | public icon | no |
| Stronger Together | Types | SaaS & Tech Tools | `ic1.png` | `public/assets/icons/stronger-together/type-saas.png` | PNG | no | public icon | no |
| Stronger Together | Types | Affiliate Teams | `ic3-resize.png` | `public/assets/icons/stronger-together/type-affiliate.png` | PNG | no | public icon | no |
| Stronger Together | Types | Influencer Networks | `ic4-resize.png` | `public/assets/icons/stronger-together/type-influencer.png` | PNG | no | public icon | no |
| Stronger Together | Types | AdTech Providers | `ic5-resize.png` | `public/assets/icons/stronger-together/type-adtech.png` | PNG | no | public icon | no |
| Stronger Together | Types | Growth-Focused Firms | `ic6.png` | `public/assets/icons/stronger-together/type-growth.png` | PNG | no | public icon | no |
| Stronger Together | Grow CTA | Circular team photo | `anh-bo-1.png` | `public/assets/images/stronger-together/grow-together.png` | PNG | no | public photography | no |
| Stronger Together | Process | Apply icon | `Thi_t_k_ch_a_co_ten_27.png` | `public/assets/icons/stronger-together/step-apply.png` | PNG | no | public illustration | no |
| Stronger Together | Process | Connect icon | `Image_13_46_00_4_thg_7_2025.png` | `public/assets/icons/stronger-together/step-connect.png` | PNG | no | public illustration | no |
| Stronger Together | Process | Finalize icon | `g_es.png` | `public/assets/icons/stronger-together/step-finalize.png` | PNG | no | public illustration | no |
| Stronger Together | Process | Launch icon | `Thi_t_k_ch_a_co_ten_28.png` | `public/assets/icons/stronger-together/step-launch.png` | PNG | no | public illustration | no |

Calendar / chat form icons are inline SVGs matching the live markup (not Lucide brand marks). Header/Footer assets reused, not duplicated.

---

## Contact Us + policy pages

| Source page | Source section | Role | Type | Original / reference | Local path | Format | Dimensions | Shared | Reuse | Replacement |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Contact Us | Opening pill | Peach-pill spark icon | image | `span5.png` | `public/assets/icons/contact/span5.png` | PNG | 20×18 | no | public theme icon | no |
| Contact Us | Email card | Envelope in gradient circle | svg | `contact-icon1.svg` | `public/assets/icons/contact/email.svg` | SVG | 33×32 | no | public theme icon | no |
| Contact Us | Phone card | Handset in gradient circle | svg | `contact-icon2.svg` | `public/assets/icons/contact/phone.svg` | SVG | 32×32 | no | public theme icon | no |

Policy pages use the shared Header/Footer only. No unique visual assets.

Calendar / chat rows on Contact Us are inline SVGs matching the live markup (not Lucide brand marks).

---

## Not downloaded yet (later pages)

- Careers photography
- Inner-page heroes beyond implemented routes

---

## Naming

Prefer `agrowth-logo-white.png`, `badge-meta-partner.png`, `footer-background.png`.

Avoid `image1.png`, `asset-final.png`.

---

## Video

If a later page uses video, preserve autoplay, muted, loop, playsInline, poster, preload, and object-fit from the reference. Do not replace video with a still unless the live section does.
