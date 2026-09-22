# Public route inventory

Discovered from the live header, footer, public sitemaps, and internal links on 16 September 2026.

Status is **NOT STARTED** for every page except the global foundation and the completed/locked pages listed below.

Implemented pages keep a Shopify-shaped `/pages/...` route **and** a short alias where that file exists. Header and Footer use the `/pages/...` path when it is implemented. Blog/case-study paths stay under `/blogs` and `/case-study`.

The Services listing is available at both `/pages/services` (Header/Footer) and `/services` (alias). Both render the same page.

Do **not** create placeholder implementations for missing routes (About, Blog, Careers, Bing). Header/Footer omit destinations that are not implemented locally.

---

## Foundation

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| Global shell (header/footer) | https://agrowth.io/ | shared layout | OTHER | FOUNDATION COMPLETE |

---

## Company / marketing pages

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| Home | https://agrowth.io/ | `/` | HOME | COMPLETE (LOCKED) |
| About us | https://agrowth.io/pages/about-us | `/about-us` | COMPANY | NOT STARTED — omitted from Header/Footer |
| Services | https://agrowth.io/pages/services | `/pages/services` (`/services` alias) | SERVICE | COMPLETE (LOCKED) |
| AGrowth Platform | https://agrowth.io/pages/agrowth-platform | `/pages/agrowth-platform` (`/agrowth-platform` alias) | PLATFORM | COMPLETE |
| Contact us | https://agrowth.io/pages/contact-us | `/pages/contact-us` (`/contact-us` alias) | CONTACT | COMPLETE |
| Checkout | — | `/checkout` (`/checkout/success`) | CHECKOUT | COMPLETE — frontend only |
| Partner | https://agrowth.io/pages/stronger-together-agrowth | `/pages/stronger-together-agrowth` (`/stronger-together-agrowth` alias) | PARTNERSHIP | COMPLETE |
| Careers | https://agrowth.io/pages/careers | `/careers` | CAREERS | NOT STARTED — omitted from Header/Footer |

---

## Service pages

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| Rent Google Agency Ads Account | https://agrowth.io/pages/rent-google-agency-ads-account | `/pages/rent-google-agency-ads-account` (`/rent-google-agency-ads-account` alias) | SERVICE | COMPLETE (LOCKED) |
| Rent Facebook / Meta Agency Ads Account | https://agrowth.io/pages/rent-meta-agency-ads-account | `/pages/rent-meta-agency-ads-account` (`/rent-meta-agency-ads-account` alias) | SERVICE | COMPLETE |
| Rent TikTok Agency Ads Account | https://agrowth.io/pages/rent-tiktok-agency-ads-account | `/pages/rent-tiktok-agency-ads-account` (`/rent-tiktok-agency-ads-account` alias) | SERVICE | COMPLETE |
| Rent Bing Agency Ads Account | https://agrowth.io/pages/rent-bing-agency-ads-account | `/rent-bing-agency-ads-account` | SERVICE | NOT STARTED |

Bing exists in the sitemap and on some content pages. It is **not** in the current header Services dropdown.

---

## Careers / jobs

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| Sales Intern | https://agrowth.io/pages/careers/sales-intern | `/careers/sales-intern` | CAREERS | NOT STARTED |
| Sales Executive | https://agrowth.io/pages/careers/sales-executive | `/careers/sales-executive` | CAREERS | NOT STARTED |
| Affiliate Research Executive | https://agrowth.io/pages/careers/affiliate-research-executive | `/careers/affiliate-research-executive` | CAREERS | NOT STARTED |
| Account Manager | https://agrowth.io/pages/careers/account-manager | `/careers/account-manager` | CAREERS | NOT STARTED |

---

## Legal / policy

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| Privacy Policy | https://agrowth.io/pages/privacy-policy | `/pages/privacy-policy` (`/privacy-policy` alias) | LEGAL/POLICY | COMPLETE |
| Refund Policy | https://agrowth.io/pages/refund-policy | `/pages/refund-policy` (`/refund-policy` alias) | LEGAL/POLICY | COMPLETE |
| Payment Methods Policy | https://agrowth.io/pages/payment-methods-policy | `/pages/payment-methods-policy` (`/payment-methods-policy` alias) | LEGAL/POLICY | COMPLETE |

No separate public Terms of Service or Cookie Policy URL was present in the current page sitemap.

---

## Blog listings

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| All Blogs | https://agrowth.io/blogs/all-blogs | `/blogs/all-blogs` | BLOG LISTING | NOT STARTED |
| Google Ads | https://agrowth.io/blogs/google-ads | `/blogs/google-ads` | BLOG LISTING | NOT STARTED |
| Facebook Ads | https://agrowth.io/blogs/facebook-ads | `/blogs/facebook-ads` | BLOG LISTING | NOT STARTED |
| TikTok Ads | https://agrowth.io/blogs/tiktok-ads | `/blogs/tiktok-ads` | BLOG LISTING | NOT STARTED |
| Knowledge | https://agrowth.io/blogs/knowledge | `/blogs/knowledge` | BLOG LISTING | NOT STARTED |
| News | https://agrowth.io/blogs/news | `/blogs/news` | BLOG LISTING | NOT STARTED |
| Case Study | https://agrowth.io/case-study | `/case-study` | CASE STUDY LISTING | COMPLETE (LOCKED) |
| Faith Hope Love | https://agrowth.io/case-study/faith-hope-love | `/blogs/case-study/faith-hope-love` | CASE STUDY DETAIL | COMPLETE |
| Lumeera | https://agrowth.io/case-study/lumeera | `/blogs/case-study/lumeera` | CASE STUDY DETAIL | COMPLETE |
| Schaedelsucht | https://agrowth.io/case-study/schaedelsucht | `/blogs/case-study/schaedelsucht` | CASE STUDY DETAIL | COMPLETE |
| MarketWatch | https://agrowth.io/case-study/marketwatch | `/blogs/case-study/marketwatch` | CASE STUDY DETAIL | COMPLETE |
| Good in the Woods | https://agrowth.io/case-study/good-in-the-woods | `/blogs/case-study/good-in-the-woods` | CASE STUDY DETAIL | COMPLETE |

Blog architecture (CMS, article renderer, categories) is deferred.

---

## Blog articles

`https://agrowth.io/sitemap_blogs_1.xml` currently lists **382** blog URLs.

That count includes the 7 listing routes above, leaving **375 article URLs**.

Pattern:

`https://agrowth.io/blogs/{category}/{slug}`  
local: `/blogs/{category}/{slug}`

Approximate category counts from the sitemap:

| Category | URLs (listing + articles) |
| --- | --- |
| Facebook Ads | 116 |
| Google Ads | 112 |
| TikTok Ads | 84 |
| Knowledge | 43 |
| News | 20 |
| Case Study | 6 |
| All Blogs listing | 1 |

Articles are **BLOG ARTICLE / NOT STARTED**. They will be inventoried in detail when Blog is requested. Do not build a CMS now.

---

## Other discovered URLs

| Page | Reference URL | Local route | Type | Status |
| --- | --- | --- | --- | --- |
| agents.md | https://agrowth.io/agents.md | not in public nav | OTHER | ignored for marketing clone |

Shopify cart/account/checkout routes are disallowed in robots.txt and are **not** part of the public marketing clone.

---

## Counts

| Category | Count |
| --- | --- |
| HOME | 1 |
| COMPANY | 1 |
| SERVICE | 5 (hub + 4 platform pages) |
| PLATFORM | 1 |
| CONTACT | 1 |
| PARTNERSHIP | 1 |
| CAREERS | 5 (index + 4 jobs) |
| LEGAL/POLICY | 3 |
| BLOG LISTING | 7 |
| BLOG ARTICLE | 375 |
| OTHER (foundation / agents.md) | 2 |
| **Public marketing URLs excluding agents.md** | **400** |

Header-linked subset is smaller than the full sitemap (Bing and job permalinks are public but not in the top nav).
