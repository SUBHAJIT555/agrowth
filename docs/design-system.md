# AGrowth design system

Tokens and primitives derived from the live public site. This is not a generic design-system essay.

---

## Typography

Verified against live computed styles. AGrowth is **not** a single-family site. Full matrix: `docs/typography-audit.md`.

| Role | Family | Size | Weight | Line-height | Tracking | Color |
| --- | --- | --- | --- | --- | --- | --- |
| Body | Outfit | 18px | 400 | 26px | 0.6px | `#212529` |
| Default headings (`h1–h6`) | Assistant | theme / section | 400–800 | Shopify heading stack | 0.6px unless overridden | — |
| H1 display | Outfit | 56px (40px mobile) | 900 | 64.4px | -1.5px | white on hero / `#0B0314` on light |
| Homepage custom H2 | Outfit | 42px | 800 | 50.4px | 0.6px | `#0B0314` |
| Theme `.heading5 h2` | Assistant | 44px | 600 | 54px | 0.6px | section color |
| Footer titles | Assistant | 24px | 500 | 24px | 0.6px | `#FFFFFF` |
| Nav | Outfit | 18px | 600 | 26px | 0.6px | `#FFFFFF`, capitalize |
| Primary/theme button | Outfit | 18px | 600 | 18px | 0.6px | `#FFFFFF` |
| Hero CTA | Outfit | 18px | 700 | 26px | 0.6px | — |
| Outline button | Outfit | 14px | 600 | 1.25em | 0 | uppercase |
| Dropdown item | Outfit | 14px | 500 | 26px | 0.6px | `#FFFFFF` |
| Hero tagline / chips / pills | Inter | 13–16px | 500–600 | 26px | 0.1px to 0.6px | — |

CSS variables: `--font-outfit`, `--font-assistant`, `--font-inter`  
Default heading token: `--font-heading` → Assistant  
Homepage custom sections override `--font-heading` to Outfit  
Tailwind: `font-sans` = Outfit

Smoothing: `-webkit-font-smoothing: auto` (do not use `antialiased` on `html`).

---

## Colors

Useful global tokens only:

| CSS variable | Tailwind | Hex / value |
| --- | --- | --- |
| `--background` | `background` | `#FFFFFF` |
| `--foreground` | `foreground` | `#212529` |
| `--muted` | `muted` | `#454444` |
| `--border` | `border` | `#E7E7E7` |
| `--primary` | `primary` | `#D5261F` |
| `--primary-foreground` | `primary-foreground` | `#FFFFFF` |
| `--accent` | `accent` | `#F09138` |
| `--ink` | `ink` | `#0B0314` |
| `--header` | `header` | `rgba(18, 9, 4, 0.65)` |
| `--header-strong` | `header-strong` | `rgba(18, 9, 4, 0.98)` |
| `--cream` | `cream` | `#FFF2E6` |
| `--form-muted` | `form-muted` | `#F5F5FD` |
| — | `brand-orange` | `#F09138` |
| — | `brand-red` | `#D5261F` |
| — | `brand-orange-deep` | `#E04300` |
| — | `brand-orange-mid` | `#FA7D3C` |
| — | `brand-pink` | `#FB3F52` |

Brand gradient: `linear-gradient(90deg, #F09138 2.31%, #D5261F 100%)`

There is no automatic dark theme. The live public site is light with orange/dark capsules.

---

## Containers

| Name | Max width | Use |
| --- | --- | --- |
| `default` | 1320px | Standard header/footer/content |
| `narrow` | 850px | Constrained text blocks (`w-850` on live) |
| `wide` | 1400px | Occasional blog shells |
| `full` | none | Full-bleed heroes, marquees, media |

Horizontal padding: 15px. Do not assume every section shares the default width.

---

## Spacing tendencies

- Header outer: 12px vertical
- Header capsule: 12×35
- Footer top: 100px
- Common section utilities on live: 50 / 100 / 120 / 200px
- Mobile header: 69px fixed

The `Section` component has **no baked-in padding**. Match each page from screenshots.

---

## Radii

| Use | Value |
| --- | --- |
| Header capsule | 100px |
| Buttons primary/secondary | 80px |
| Outline button | 30px |
| Dropdown | 14px |
| Form inputs | 4px |
| Many marketing cards | 20px |
| Mobile hamburger | 4px |

---

## Borders

- Inputs: none (fill only)
- Outline button: 2px solid
- Mobile menu toggle: 1px `rgba(255,255,255,0.2)`
- Light dividers: `#E7E7E7`

---

## Shadows

- Header capsule: `0 15px 35px rgba(0,0,0,0.3)`
- Mobile header: `0 10px 25px rgba(0,0,0,0.3)`
- Secondary/hero CTA: `0 8px 24px rgba(0,0,0,0.3)`
- Dropdown: `0 10px 30px rgba(0,0,0,0.5)`

---

## Buttons

Implemented primitives:

- `primary` — gradient pill + white icon circle
- `secondary` — white pill + gradient icon circle
- `outline` — uppercase bordered pill

Do not invent extra variants until a page needs them.

---

## Form controls

Shared classes in `globals.css`:

- `.ag-input`
- `.ag-textarea`
- `.ag-select`
- `.ag-checkbox`

58px inputs, 4px radius, 18px text, white fill. No backend.

---

## Navigation

Central data: `src/config/navigation.ts`

- Desktop from `nav:` (992px): capsule header
- Below 992px: fixed mobile bar + full-screen left panel
- Dropdowns only on Services and Blog

---

## Breakpoints

Tailwind defaults plus:

| Name | Width | Why |
| --- | --- | --- |
| `nav` | 992px | Live header/footer `lg` |

QA widths required by this project: 1600, 1440, 1280, 1024, 768, 430, 390, 375.

Primary: 1440 and 390.
