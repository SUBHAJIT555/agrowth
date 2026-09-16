# AGrowth Platform audit

# Reference

Reference:  
https://agrowth.io/pages/agrowth-platform

Local:  
`/pages/agrowth-platform`  
Alias (Homepage “See How It Works”, header): `/agrowth-platform`

Locked pages (`/`, `/pages/services`, Google/Meta/TikTok service details) were not modified.

# Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero — eyebrow “AGrowth Platform”, H1 “YOUR AD BUDGET, FULLY IN YOUR CONTROL”, Try Now, YouTube product visual |
| 02 | Why Choose AGrowth Platform — Without vs With comparison cards |
| 03 | Key Features — 6 icon cards |
| 04 | How It Works — 3-step stepper + laptop product screenshot |
| 05 | Frequently Asked Questions — 6 accordion rows |
| 06 | Final CTA — Ready To Scale Without Limits? |

# Actual Page Structure

1. **Hero** — Screenshot 01. H1 eyebrow “AGrowth Platform” (Assistant 42/700, `#f09138`). Display line “YOUR AD BUDGET, FULLY IN YOUR CONTROL” (Outfit 32/800, uppercase, white). Body copy about Auto Top-up Platform. CTA Try Now → `/contact-us`. Background PNG `20260508-134225.png`. Product visual is YouTube embed `uYbIlpFR6U8` (same public video as Homepage, different presentation: 16:9 radius 16px iframe, not the Homepage “Manage Every Platform” layout). Padding 200px 0 100px, min-height 80vh. Desktop text 40% / video flex. ≤991 video stacks first. CSS only.
2. **Why Choose** — Screenshot 02. Two bordered cards, grey header + exclamation vs orange header + rocket. Exact five/six list items. White bg, 80px padding. Fade-up. ≤991 column stack, Without first.
3. **Key Features** — Screenshot 03. Intro line + 3×2 icon cards (chart-line, user-plus, up-down, share-nodes, clock-rotate-left, file-invoice-dollar). Orange 2px radius 14px cards, circular tinted icon wells. Hover shadow. No product screenshots. ≤991 2-col, ≤576 stacked icon-above-copy.
4. **How It Works** — Screenshot 04. Full-bleed red→orange gradient, decorative rings. Three clickable steps; active card gradient, inactive white. Number circles + 4s SVG progress. Images `walet.png` / `topup.png` / `request.png` opacity-swap. Autoplay 4000ms, pause out of view. ≤991 image first.
5. **FAQ** — Screenshot 05. Six questions, all start closed, one open at a time, caret rotate. White background (not cream). Live padding `200px 0` via `.sp`.
6. **Final CTA** — Screenshot 06. Wave `cta-back_ground.png` (same public file as service CTAs). “Ready To Scale Without Limits?” + “scaling” (not the Google “scalling” typo). CONTACT US NOW → `/contact-us`.
7. **Header / Footer** — shared. Live Platform nav is white (no active orange) on this URL.

# Animation notes

| Section | Initial | Trigger | Motion | Duration |
| --- | --- | --- | --- | --- |
| Hero | static | load | none beyond YouTube | — |
| Why heading/cards | fade-up | in-view | AOS fade-up | 800ms |
| Feature cards | fade-up | in-view | stagger | 800ms |
| How It Works | step 1 active | click + 4s timer | image opacity 0.4s, circle stroke 4000ms linear | |
| FAQ | max-height 0 | click | 0.35s | |
| CTA | static | — | button hover lift | 0.3s |

# Screenshot QA

Filled during visual QA.
