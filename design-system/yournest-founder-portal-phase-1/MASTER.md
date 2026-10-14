# Design System Master File

> **Source of truth:** the tokens in `styles.css` (`:root`) and the component rules in `styles.css` and `phase1.css`.
> This file documents them. If the two ever disagree, the stylesheet wins and this file must be corrected.
>
> An earlier generated version of this file specified a blue `#1E40AF` palette with Fira Code / Fira Sans.
> That never matched the shipped portal and conflicted with `CLAUDE.md`. It has been replaced; do not reintroduce it.

**Project:** YourNest Founder Portal Phase 1
**Style:** Clean, professional, card-based dashboard. Subtle motion, standard density.

---

## Colour tokens

| Role | CSS variable | Value | Usage |
|------|--------------|-------|-------|
| Brand / primary action | `--red` | `#cf3b25` | Primary buttons, active chips, eyebrows, links, login brand panel |
| Primary hover | `--red-dark` | `#ae2e1e` | Hover state for primary buttons |
| Brand tint | `--red-soft` | `#fff0ec` | Notices, icon boxes, quick-access hover |
| Text | `--ink` | `#132238` | Body and heading text |
| Secondary text | `--muted` | `#64748b` | Meta text, captions, helper copy |
| Border | `--line` | `#dfe5eb` | Card, input and divider borders |
| Page background | `--bg` | `#f3f6f9` | App background |
| Surface | `--card` | `#ffffff` | Cards, modals, header |
| Info | `--blue` | `#2d69a3` | Focus outline tint, informational accents |
| Success | `--green` | `#16835d` | Activity dots, resolved states |
| Warning | `--gold` | `#b97811` | Attention accents |

Status pills (`.status.*`): review `#fff1dc / #a36300`, progress `#e9f2ff / #245b95`, resolved `#e6f7ef / #167252`, upcoming `#f1f3f5 / #59636e`.

Keep the YourNest red and the supplied logo proportions. Do not introduce a second brand colour.

## Typography

- System font stack only (`--font`): `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`.
- No web-font imports.
- Page title: 30px, tight letter-spacing (`-.035em`). Section titles: 17px. Body: 13–14px. Eyebrows: 11px, weight 800, `letter-spacing: .14em`, brand red.

## Shape and elevation

- Radius: `--radius` 14px for cards; 9–10px for buttons, inputs and inner panels; 16px for modals; 999px for chips and pills.
- Shadow: cards use a hairline shadow (`0 1px 2px rgba(18,35,56,.03)`) plus a `--line` border; overlays use `--shadow` (`0 12px 36px rgba(18,35,56,.12)`).

## Components

- **Buttons** (`.btn`): 42px min height, 9px radius, weight 700, 13px. `.primary` = red fill, white text. `.ghost` = white fill, `--line` border, ink text. Hover lifts 1px. Use one primary action per view.
- **Cards** (`.card`): white, 1px `--line` border, 14px radius, ~19px padding.
- **Chips** (`.chip`): pill filters; active and hover states use the brand red.
- **Notices** (`.notice`): brand-tint panel for assurance, privacy and context messages.
- **Inputs**: focus shows a red border with a `0 0 0 3px rgba(207,59,37,.12)` ring.
- **Modals** (`.modal`): max 620px wide, 16px radius, header / body / footer separated by `--line` borders; footer holds Cancel plus one submit action.
- **Icons**: inline SVG stroke icons from the `icons` map in `app.js` (Lucide-style, 1.8 stroke). No emoji icons.

## Accessibility and behaviour

- Visible focus on all interactive elements (`outline: 3px solid rgba(45,105,163,.32)`).
- Text contrast at least 4.5:1.
- `prefers-reduced-motion: reduce` disables transitions and animations.
- Transitions 150–250ms; no layout-shifting hover effects.
- `cursor: pointer` on all clickable elements.

## Pre-delivery checklist

- [ ] Uses only the tokens above
- [ ] No emoji icons; SVG icons from the shared map
- [ ] Visible keyboard focus
- [ ] Reduced motion respected
- [ ] Responsive at 375px, 768px, 1024px and 1440px; no horizontal scroll on mobile
- [ ] No duplicate navigation or duplicate calls to action
- [ ] `dist/` synchronised with changed source files
