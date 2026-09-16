# Global navigation + footer audit

Audited 16 September 2026 against the live site `https://agrowth.io/` (desktop 1440 and mobile 390, interactive scroll/hover/click — not screenshot-only) and the local codebase under `src/`.

Project overrides that beat the live site:

- No company contact phone numbers
- No `tel:` links
- No WhatsApp channel / widget / footer / header links
- No social profile links or icons
- Footer and Header may only point at **implemented local routes**
- Do not invent About Us, Blog, Careers, or other missing pages

---

## 1. Current original AGrowth Header structure

Desktop (`#header.header-area5`):

- Outer header overlays the hero (`position: absolute`, `padding: 12px 0`, height ~138px at top).
- Inner `.header-elements` is a dark glass pill inside a 1320px container (`max-w-site`).
- Pill at top of page: `background: rgba(18,9,4,0.65)`, `backdrop-filter: blur(20px)`, `1px solid rgba(255,255,255,0.08)`, `border-radius: 100px`, `padding: 12px 35px`, `box-shadow: 0 15px 35px rgba(0,0,0,0.3)`, height ~98px, width ~1235px.
- Left: white logo (~70×72).
- Center: primary nav. **No Home item** (logo is home).
- Right: `Contact Us` gradient CTA with arrow (`theme-btn3`).
- Top-level items (live): About us, Services (dropdown), Platform, Blog (dropdown), Case study, Partner, Careers, CTA Contact Us.

Mobile (390):

- `.mobile-header.mobile-header-main` is `position: fixed`, height 69px, `background: rgba(18,9,4,0.65)`, padding `6px 0`.
- Inner padding `6px 16px`. Logo 43×44. Trigger is `.mobile-nav-icon` with staggered bars (`fa-bars-staggered`).
- Open panel: `.mobile-sidebar.mobile-menu-active`, full viewport, `background: rgba(18,9,4,0.98)`, `backdrop-filter: blur(20px)`, padding `40px 30px`, slides in from the left, `z-index: 9999`. Close is an X. CTA is full-width Contact Us.

---

## 2. Current local Header structure

Single shared `Header` in `src/components/layout/Header/Header.tsx`, rendered from `SiteShell`. Desktop markup is inline (`DesktopItem`). Mobile is `src/components/layout/MobileNavigation/MobileNavigation.tsx`. Data is `src/config/navigation.ts`.

Local desktop:

- Absolute overlay, `py-3`, capsule `bg-header` `rounded-[100px]` `px-[35px] py-3` with the correct shadow.
- **Missing** live pill `backdrop-filter` and `1px` white/8 border.
- **Missing** sticky/fixed scroll state.
- Nav includes **Home** and **About Us** (`/about-us` does not exist).
- Services/Platform/Partner use short routes (`/services`, `/agrowth-platform`, `/stronger-together-agrowth`) instead of the implemented `/pages/...` aliases that match live paths.
- Google child uses `/rent-google-agency-ads-account` not `/pages/rent-google-agency-ads-account`.
- CTA uses `/contact-us` (alias exists) rather than `/pages/contact-us`.
- Dropdown uses `top-[calc(100%+8px)]` (hover gap) and `scale-y-75` (not live).

Local mobile: 69px fixed bar, Motion left-sheet, Plus accordion, body `overflow: hidden` while open. Includes the same incorrect Home/About items.

No duplicated Header/Footer components (`Header2`, policy header, etc.).

---

## 3. Differences

| Topic | Live | Local (before fix) |
| --- | --- | --- |
| Home nav item | Absent (logo only) | Present |
| About / Blog / Careers | Present, real Shopify pages | About linked to missing `/about-us`; Blog/Careers omitted |
| Services href | `/pages/services` | `/services` |
| Sticky on `scrollY > 0` | Yes, `position: fixed` + denser pill | No |
| Hide on scroll-down | No | N/A |
| Pill blur + border | Yes | No |
| Dropdown gap | 8px between trigger and panel; CSS `:hover` still fragile | Explicit `top: 100% + 8px` — panel dies in the gap |
| Dropdown motion | Opacity + translateY(20→0), ~0.3s | ScaleY + translateY |
| Active color | Leftover purple `rgb(77,50,165)` on live (theme bug) | Orange `#fa7d3c` (keep — matches live hover `#ff8235` and local design system) |

---

## 4. Original desktop navbar behavior

Observed at 1440 on Homepage, Services, and while opening the mobile breakpoint.

1. Header is **not** `position: sticky`.
2. At the top of the page it is **absolute over the hero**.
3. After any `window.scrollY > 0` the outer header gets class `sticky`: `position: fixed; top: 0`, `animation: fade-in-down 1s` (`translate3d(0,-50px,0)` → none).
4. Pill background goes from `rgba(18,9,4,0.65)` to `rgba(18,9,4,0.85)`, padding `12px 35px` → `8px 35px`, height ~98 → ~90. Outer height ~138 → ~114.
5. Header **does not hide** while scrolling down and **does not** use direction detection.
6. Returning to `scrollY === 0` removes `sticky` and restores the overlay/pill.
7. Threshold is **0** (any scroll). Live JS: `if (window.scrollY > 0) header.classList.add('sticky')`.
8. Logo size 70×72 does **not** change.
9. Nav text stays white (hover/active orange on a healthy theme; live leftover purple is not copied).
10. CTA size (~56×167, radius 80px, gradient + arrow) does **not** change after scroll.
11. Blur stays on the pill (`20px`). Dropdown blur is `15px`.
12. Capsule shadow remains. Outer leftover CSS also declares a light `box-shadow` / white background on `.header-area5.sticky`; the **visible** chrome is still the dark pill. Local will not paint a white bar behind the pill.
13. Dropdown geometry/behavior does not change after scroll.
14. Every representative route starts with the same overlay header. Policy/common-hero pages still overlay; they use extra hero padding, not a solid header variant.

---

## 5. Current local desktop navbar behavior

- Always `position: absolute`. Never becomes `fixed`.
- Capsule does not densify or darken.
- No `fade-in-down`.
- Home is in the menu.
- About Us 404s.

---

## 6. Original dropdown behavior

Only Services (and live Blog) are dropdowns. **Not a mega-menu.** One column, no icons, no descriptions.

| Property | Observed |
| --- | --- |
| Activation | CSS `:hover` on `li` (immediate). Click is not required to open. |
| Open delay | None |
| Close delay | None beyond the 0.3s opacity/transform transition |
| Pointer travel | Panel `top: 50px` vs trigger ~42px → **8px physical gap**. Live can drop the menu in that gap. Local must add a **small 8px transparent bridge**, not a huge hover slab. |
| Trigger active | Parent `<a>` stays a real link (`/pages/services` is clickable). Caret is `::after` / chevron. |
| Panel | `min-width: 200px`, `border-radius: 14px`, `background: rgba(18,9,4,0.95)`, `backdrop-filter: blur(15px)`, `padding: 8px 0`, shadow `0 10px 30px rgba(0,0,0,0.5)` |
| Open motion | `visibility` + `opacity 0→1` + `translateY(20px)→0`, ~0.3s |
| Close motion | Reverse of open (not an instant cut) |
| Items | 14px / 500, padding `8px 20px`, hover color `#ff8235`, hover bg `rgba(255,255,255,0.06)`, padding-left 24px |
| A → B | Independent CSS hovers. Previous panel fades out while the next fades in. No shared outer shell. |

Services children (live):

- Rent Google Agency Ads Account → `/pages/rent-google-agency-ads-account`
- Rent Facebook Agency Ads Account → `/pages/rent-meta-agency-ads-account`
- Rent TikTok Agency Ads Account → `/pages/rent-tiktok-agency-ads-account`

---

## 7. Current local dropdown behavior

- `group-hover` on `li`.
- Panel `top-[calc(100%+8px)]` — the 8px is a **dead zone**, so the menu closes when moving into it.
- Uses `scale-y-75` (not live).
- Missing hover bg / pad-left / blur on the panel.
- Parent Services **is** a `Link` (good).
- Google/Meta/TikTok aliases incomplete for active state (Google missing from `aliases`).

---

## 8. Original scroll behavior

Confirmed by `window.scrollTo` + computed style:

- Top: absolute overlay.
- Scroll down (slow or fast): as soon as `scrollY > 0`, header becomes fixed and the pill densifies. It **stays visible**.
- Scroll up slightly / significantly: still visible while `scrollY > 0`.
- Return to top: overlay restored.
- No hide-on-down / show-on-up.
- `fade-in-down` plays when sticky is applied.
- Mobile bar is always fixed at 69px and does not swap to a second style.

GSAP is **not** required. CSS animation + a throttled `scrollY > 0` flag is enough.

---

## 9. Current local scroll behavior

No scroll listener. Header never sticks. Mobile bar is already fixed (correct).

---

## 10. Original mobile behavior (390 / 375 / 430)

- Fixed 69px dark bar, logo 43×44, staggered-bars trigger.
- Full-viewport left sheet (`width = viewport`, `background: rgba(18,9,4,0.98)`, blur 20px).
- Top: larger logo + X close.
- Items match desktop labels. Services/Blog have a `submenu-button` accordion (`display: none` until opened). Parent Services remains a link.
- Bottom: Contact Us CTA.
- Body overflow is constrained while open.
- Close via X (and navigating). Not a click-outside overlay — the sheet **is** the viewport.
- No phone, but live menu also has no social icons in the sheet itself.

---

## 11. Current local mobile behavior

Matches the live sheet pattern (Motion `x: -100%` → 0, Plus accordion, CTA, overflow lock, remount on pathname so it closes after navigation). Gaps: wrong items (Home, About Us), hamburger sits in a bordered 40px button (acceptable tap target; live is icon-only), no Escape handler.

---

## 12. Existing local routes

Inventoried from `src/app/**/page.tsx` (source of truth). 25 route files, 17 unique pages, dual aliases where listed.

| Page | Local Route | Exists? | Header? (after fix) | Footer? (after fix) | Original AGrowth equivalent |
| --- | --- | --- | --- | --- | --- |
| Homepage | `/` | Yes | Logo only | Logo | `/` |
| Services | `/pages/services` (`/services`) | Yes | Yes | Yes | `/pages/services` |
| Google Agency Ads | `/pages/rent-google-agency-ads-account` (`/rent-google-agency-ads-account`) | Yes | Dropdown | Yes | `/pages/rent-google-agency-ads-account` |
| Meta / Facebook Agency Ads | `/pages/rent-meta-agency-ads-account` (`/rent-meta-agency-ads-account`) | Yes | Dropdown | Yes | `/pages/rent-meta-agency-ads-account` |
| TikTok Agency Ads | `/pages/rent-tiktok-agency-ads-account` (`/rent-tiktok-agency-ads-account`) | Yes | Dropdown | Yes | `/pages/rent-tiktok-agency-ads-account` |
| AGrowth Platform | `/pages/agrowth-platform` (`/agrowth-platform`) | Yes | Yes | Yes | `/pages/agrowth-platform` |
| Case Study listing | `/case-study` (`/blogs/case-study`) | Yes | Yes | Yes | `/blogs/case-study` and `/case-study` |
| Case Study details (5) | `/case-study/[slug]` + `/blogs/case-study/[slug]` | Yes | Via listing active | Listing only | `/case-study/{slug}` |
| Stronger Together / Partner | `/pages/stronger-together-agrowth` (`/stronger-together-agrowth`) | Yes | Yes (Partner) | Yes | `/pages/stronger-together-agrowth` |
| Contact Us | `/pages/contact-us` (`/contact-us`) | Yes | CTA | Yes | `/pages/contact-us` |
| Privacy Policy | `/pages/privacy-policy` (`/privacy-policy`) | Yes | No | Yes | `/pages/privacy-policy` |
| Payment Methods Policy | `/pages/payment-methods-policy` (`/payment-methods-policy`) | Yes | No | Yes | `/pages/payment-methods-policy` |
| Refund Policy | `/pages/refund-policy` (`/refund-policy`) | Yes | No | Yes | `/pages/refund-policy` |
| About us | — | **No** | Omit | Omit | `/pages/about-us` |
| Blog listings | — | **No** | Omit | Omit | `/blogs/all-blogs` + categories |
| Careers | — | **No** | Omit | Omit | `/pages/careers` |
| Bing Agency Ads | — | **No** | Omit | Omit | `/pages/rent-bing-agency-ads-account` |

Detail slugs present: `faith-hope-love`, `lumeera`, `schaedelsucht`, `marketwatch`, `good-in-the-woods`.

---

## 13. Current Footer links (before fix)

From `footerCompanyLinks` + `footerServiceLinks` + hardcoded Contact / Location / socials:

- Company: Contact Us, **About Us `/about-us` (BROKEN)**, Privacy Policy, Payment Methods, Refund Policy
- Our Services: Google / Facebook / TikTok ads (short routes; aliases exist)
- Contact Us: WhatsApp + phone, Email, Telegram, Channel
- Our Location: USA + Hong Kong (keep)
- Copyright + Facebook / LinkedIn / X icons

Missing from Footer relative to implemented routes: Services listing, Platform, Case Study, Stronger Together / Partner.

---

## 14. Broken Footer links

| Link | Target | Status |
| --- | --- | --- |
| About Us | `/about-us` | **BROKEN** — no `src/app/about-us` |

Short service routes (`/rent-*-agency-ads-account`) resolve via aliases (PASS) but should prefer `/pages/...` to match live and Header.

---

## 15. Routes missing from Footer

Implemented locally but not in the Footer before fix:

- `/pages/services`
- `/pages/agrowth-platform`
- `/case-study`
- `/pages/stronger-together-agrowth`

---

## 16. Footer links pointing to non-existing routes

- `/about-us` only.

---

## 17. Phone-number occurrences

| Location | What | Action |
| --- | --- | --- |
| `src/config/site.ts` | `phoneDisplay` `(+84) 865 497 283`, `phoneHref` `https://wa.me/84865497283` | Remove |
| `src/components/layout/Footer/Footer.tsx` | WhatsApp + displayed number | Remove |
| `src/components/contact/ContactMethods.tsx` | `tel:+84865497283` card | Remove (Contact Us overlap is in scope) |
| Visitor form fields named Phone / WhatsApp **option** | Contact, Home, Google, Meta, TikTok, Partner forms | **Keep** (visitor input, not company number) |

No JSON-LD `telephone` in `src/app/layout.tsx`.

---

## 18. Social-media occurrences

| Location | What | Action |
| --- | --- | --- |
| `src/config/site.ts` `social[]` | Facebook, LinkedIn, X profile URLs | Remove |
| `src/config/site.ts` contact | Telegram handle, `t.me/agrowthagency`, channel `t.me/agrowth_agency` | Remove (social/channel) |
| Footer | WhatsApp icon/link, Telegram, Channel, social icon row | Remove |
| `layout.tsx` `twitter: { card: "summary_large_image" }` | Twitter **card type**, not a profile | **Keep** |
| YouTube `embed` on Home / Platform | Product video | **Keep** |
| Forms `<option>WhatsApp</option>` | Visitor preferred contact method | **Keep** |
| `src/data/case-studies/*.tsx` `t.me/agrowth_agency` | Locked case-study **page body** copy | **Leave** (do not redesign locked pages). Documented as remaining. |

No Header/mobile social icons. No floating WhatsApp widget.

---

## 19. Required fixes

1. Rewrite `headerNavigation`: drop Home, About, Blog, Careers; use `/pages/...` (and `/case-study`) for implemented routes; Services dropdown + clickable parent; complete aliases including Google.
2. Header scroll: `scrollY > 0` → `position: fixed` + `fade-in-down` + denser/darker pill. Passive listener + rAF. Do **not** hide on scroll-down.
3. Capsule: `backdrop-filter: blur(20px)` + `1px rgba(255,255,255,0.08)` border.
4. Dropdown: 8px hover bridge, opacity/translateY (no scaleY), blur 15px, item hover `#ff8235` + pad-left + faint bg. Parent remains a link.
5. Active: orange; Services active on listing **and** child ads routes.
6. Mobile: same nav data, Escape closes, reliable scroll lock, no phone/social.
7. Footer: existing local routes only; drop About Us; add Services, Platform, Case Study, Partner; keep Email + locations; drop phone/WhatsApp/Telegram/channel/socials; no empty columns.
8. `site.ts`: remove phone, wa.me, telegram, channel, `social`.
9. Contact methods: email only, full width (no empty 50% column).
10. Update `docs/routes.md` so filesystem aliases are the source of truth for Header/Footer.
11. Do not create missing pages. Do not change verified typography. Do not redesign page heroes.

---

## Navbar geometry (live 1440)

| Measure | Value |
| --- | --- |
| Header total height (top) | ~138px (`padding 12px 0` + pill ~98px) |
| Header total height (scrolled) | ~114px |
| Content max-width | 1320px (`max-w-site`) |
| Left/right padding | Container 15px; pill 35px |
| Logo | 70×72 (unchanged on scroll) |
| Nav font | Outfit 18 / 600 / 26 / 0.6px / capitalize / white |
| Nav item padding | ~12px × 8px (`px-3 py-2`) |
| CTA | ~167×56, radius 80px, gradient + 32px icon circle |
| Dropdown min-width | 200px |
| Dropdown radius | 14px |
| Mobile header | 69px; logo 43×44 |

---

## Internal link test plan (after fix)

All Header/Footer internal hrefs must PASS against `src/app/**/page.tsx`. About Us must not appear. No `https://agrowth.io/...` for pages that exist locally.

---

## Remaining differences after implementation (expected)

- Live still has About / Blog / Careers — omitted locally because those pages do not exist.
- Live leftover active purple is not copied; local uses verified orange.
- Locked case-study bodies still mention `t.me/agrowth_agency`.
- Live Footer WhatsApp / socials removed by project requirement.
- Live outer `.header-area5.sticky { background: white }` leftover is not reproduced (would flash a white bar on dark heroes).
