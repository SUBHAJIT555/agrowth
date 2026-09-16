# Pages

Contact Us  
Reference:  
https://agrowth.io/pages/contact-us  
Local:  
/pages/contact-us  
(alias `/contact-us` so locked Header CTA and existing CTAs keep working)

Privacy Policy  
Reference:  
https://agrowth.io/pages/privacy-policy  
Local:  
/pages/privacy-policy  
(alias `/privacy-policy`)

Payment Methods Policy  
Reference:  
https://agrowth.io/pages/payment-methods-policy  
Local:  
/pages/payment-methods-policy  
(alias `/payment-methods-policy`)

Refund Policy  
Reference:  
https://agrowth.io/pages/refund-policy  
Local:  
/pages/refund-policy  
(alias `/refund-policy`)

Audited: 16 September 2026 from the current live pages. No user screenshots were attached in this request.

Status: IMPLEMENTED — wait for approval, then LOCK.

# Screenshot Map

No section screenshots were attached in this turn. Live pages were the visual and copy source.

| Screenshot | Page | Section |
| --- | --- | --- |
| None attached | Contact Us | Live DOM + computed CSS at the current public URL |
| None attached | Privacy Policy | Full `.rich-text__blocks` HTML from the current public URL |
| None attached | Payment Methods Policy | Full `.rich-text__blocks` HTML from the current public URL |
| None attached | Refund Policy | Full custom `main .container` HTML from the current public URL |

When screenshots are attached later, map each file here and mark PASS / NEEDS FIX.

# Actual Page Structure

## Contact Us — marketing / conversion

One content section. Class: `faq-contact contact-page sp2`. White background. Header overlay. Pad `200px 0 100px`. Top border `#e7e7e7`. No separate hero image/artwork besides the CONTACT US pill icon.

### 1. Header

Shared approved Header. CTA stays `/contact-us` (alias of `/pages/contact-us`). No ContactHeader.

### 2. Opening / Contact Us title

Peach pill `#fff2e6`, radius 42px, pad 4×10. `span5.png` 20×18 + “CONTACT US” uppercase Outfit 14/500, gradient clip `#f09138 → #d5261f`.

### 3. Let’s Start Growing Together

H1 visual (live H2): `Let's Start` `#000` + `Growing Together` `#f5822a`. Assistant 44/600/54. Wraps at ~405px as “Let's Start Growing / Together”.

Three live paragraphs (Outfit 18/28 `#495057`):

1. Ready to take your advertising campaigns to the next level? Whether you have questions, need expert advice, or are looking for the perfect ad account solution, we’re here to help.
2. Fill out the form and our team will get back to you quickly with tailored support and solutions.
3. Need immediate assistance? Contact us directly through our 24/7 support channels. Let’s connect today!

### 4. Support rows

Calendar + chat inline SVGs (not Lucide brand marks). Copy:

- Fill out the form / our team will get in touch within hours
- Need help now? / Chat with us through our 24/7 support channels

Live computed title/subtitle colors are `#ffffff` / `#e2e8f0` (homepage snippet leak on a white page). Local uses readable dark `#212529` / `#5d6369` so the live copy is actually visible. Remaining difference vs live computed CSS.

### 5. Email / Phone cards

`.faq-contact-boxs .single-box`: `#f5f5fd`, 8px radius, 24px pad, flex, hover `translateY(-10px)`. 60px circle icon gradient `#3B32F6 → #49A6FF`.

- Our Email → `mailto:sales@agrowth.io`
- Phone → `tel:+84865497283` display `(+84) 865 497 283`

### 6. Form (frontend only)

`.faq-contact-form` `#f5f5fd`, pad 32×28, radius 8. Title “Send Us A Message”.

Fields (live):

| Field | Placeholder / label | Required |
| --- | --- | --- |
| text | Your name | yes |
| email | Your email | yes |
| tel + country flag | Your phone number (intl-tel-input, preferred US/VN/GB/AU/JP/KR/SG) | yes |
| text | Company name | no |
| select Telegram / WhatsApp + text | Contact details | details yes |
| textarea | Your Message | no |
| checkboxes | Google, Facebook, TikTok, Bing, Others | at least one (live marks Google `required`) |
| checkbox | I agree to the Privacy Policy and Refund Policy. | checked by default |
| submit | Submit | orange `#fa7d3c`, 56px, radius 80, no arrow |

Consent hrefs: `/pages/privacy-policy` and `/pages/refund-policy` (`target=_blank` on live).

No backend. Invalid: “Please complete the required fields.” Valid submit: `preventDefault` only — no fake success.

### 7. Footer

Shared approved Footer. Company hrefs wired to `/pages/...` routes. Visual Footer unchanged.

## Privacy Policy — document

Shopify rich-text. `common-hero` 145px header clearance. `.rich-text` pad 40px 0 52px. Wrapper pad 0 50px. Body column ~780px.

Title (live H2.h1 + strong): **AGrowth Policy**

Complete live body retrieved 16 September 2026:

- Intro paragraph + **Collecting and Using Your Personal Data**
- **Types of Data Collected**
- **Personal Data** + 3-item list (Email address / First name and last name / Usage Data)
- **Usage Data** (four paragraphs: automatic collection; device/browser; mobile device; browser-sent data)
- **Retention of Your Personal Data** (two paragraphs)

Footer “At AGrowth, we are committed…” is **not** policy body.

## Payment Methods Policy — document

Same rich-text chrome as Privacy. Title: **AGrowth Agency – Payment Methods Policy**

Live sections (strong paragraph headings, not H2s):

- Intro
- Accepted Payment Methods (Payoneer, Secure Online Payment Gateway, Cryptocurrencies, SWIFT, Wise, Local Bank Transfer USD/EUR/GBP/CAD/AUD/MXN/JPY/SGD/HKD) as italic-strong dashed paragraphs, not a `<ul>`
- Payment Terms (two paragraphs)
- Taxes
- Refunds and Chargebacks (live has missing spaces: `not available.Exceptions` / `Policy).We` / `us.Please`)
- Security
- Updates to this Policy
- Contact: `sales@agrowth.io` mailto

## Refund Policy — document

Custom container document (not the same rich-text wrapper). Title is live **H1**: **AGrowth Agency – Refund Policy**

- Intro + bold fee responsibility sentence
- **1. Refund Conditions** (5 dash paragraphs; last includes bold termination/no-refund sentence)
- **2. Refund noted** (4 dash paragraphs; methods and 3–5 business days bold)
- **3. Non-Refundable Cases**
  - **General** (1 dash paragraph)
  - **TikTok** (3 dash paragraphs; *data theft* / *non-delivery*)
  - **Other Platforms** (1 dash paragraph)

Dashes are `<p>` text, not lists. Empty live `<h3></h3>` spacers omitted (no visible content).

# Screenshot QA

| Item | Result |
| --- | --- |
| Contact Us live vs local | Implemented from live DOM; no attached screenshot to mark PASS |
| Privacy live vs local | Exact live rich-text copy |
| Payment live vs local | Exact live rich-text copy including missing spaces |
| Refund live vs local | Exact live document copy |

# Cross-policy contamination

Privacy, Payment Methods, and Refund content live in separate files. No shared legal body.

# Locked pages

Footer Company `href` values only. No visual Footer change. No edits to Homepage / Services / Google / Meta / TikTok / Platform / Case Study / Stronger Together sections, CSS, or copy.

# Remaining visible differences

- No user screenshots were attached, so screenshot PASS/NEEDS FIX is against live DOM only.
- Live Contact “Fill out the form” / “Need help now?” titles compute `#ffffff` / `#e2e8f0` on a white page (homepage snippet). Local uses readable `#212529` / `#5d6369`.
- Live phone country list is full intl-tel-input. Local uses the live preferred set: US, VN, GB, AU, JP, KR, SG.
- Live Privacy/Payment titles are `h2.h1`; local uses one `h1` with the same visible title text.
- Refund empty live `<h3></h3>` spacers omitted (no visible content).
- Contact form is frontend-only: invalid shows “Please complete the required fields.” Valid submit does not send and does not show a success message.
