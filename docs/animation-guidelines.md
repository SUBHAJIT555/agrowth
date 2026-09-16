# Animation guidelines

Rule: **reference-first animation**.

Do not add a global fade-up, scroll reveal, or parallax system. If a live section is static, keep it static.

---

## Future page process

For each animated section:

1. Inspect the live section.
2. Identify the actual movement.
3. Determine the trigger (hover, click, load, scroll, pin, scrub).
4. Determine duration and easing.
5. Check desktop / tablet / mobile differences.
6. Choose the implementation below.

---

## Implementation choice

| Tool | Use for |
| --- | --- |
| CSS | Simple hovers, color fades, button wipes, 0.3–0.4s menu transitions, infinite marquees that are CSS in the reference |
| Motion for React | Menus, dropdowns, accordions, tabs, modal/dialog, lightweight presence |
| GSAP + ScrollTrigger | Pinned sections, scrubbed timelines, coordinated multi-element scroll, reference-specific parallax |

GSAP is installed and registered once through `registerGsapPlugins()` / `GsapProvider`. It is **not** applied to the shell.

---

## Observed AGrowth patterns

Already seen on the live public site (do not auto-reuse everywhere):

- Header dropdown: ~0.3s visibility + transform
- Mobile nav: 0.3s panel from the left
- Primary button: 0.4s reverse-gradient wipe
- AOS CSS is loaded for some sections
- Homepage tabs, sliders, and logo marquee (page-specific later)

The current homepage hero artwork is a static image, not a video.

---

## Reduced motion

Honor `prefers-reduced-motion: reduce` for non-essential motion.

Approach:

- `usePrefersReducedMotion()` for JS / Motion / GSAP
- `motion-reduce:` Tailwind variants for CSS transitions
- If reduced motion is on: skip GSAP timelines, skip menu slide (instant presence is fine), keep focus states

Do not disable all CSS (focus rings, color changes) globally.

---

## GSAP cleanup

Every future GSAP effect must:

- Register plugins once (`src/lib/gsap.ts`)
- Use `gsap.context()` scoped to a component root
- Revert the context on unmount
- Kill related `ScrollTrigger` instances
- Avoid duplicating triggers during HMR (`useGsapContext` helper)

```ts
const context = gsap.context(() => {
  // tweens / ScrollTriggers
}, scope);

return () => context.revert();
```

---

## Performance

- Keep most sections as Server Components
- Mark `"use client"` only for real interaction or animation
- Do not attach IntersectionObservers to every section
- Do not preload page-specific video globally
- Prefer CSS when the reference is a simple transition
