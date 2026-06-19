# Modash Clone — Design System Contract

Extracted 1:1 from modash.io ground truth (Webflow site). **All page agents must use
these tokens and patterns.** Do not hardcode hex values — use the Tailwind tokens
below (they map to CSS variables in `src/index.css`, so the whole site re-skins by
editing variables).

---

## Fonts

| Role    | Family                       | Tailwind class   | Notes |
|---------|------------------------------|------------------|-------|
| Display | **Mosans** (Modash custom)   | `font-display`   | Headings/hero. Falls back to Inter/Arial. Loaded via `@font-face` from Webflow CDN. Single weight (400). |
| Body    | **Inter** (300–700)          | `font-sans` (default) | All body/UI text. Loaded via Google Fonts. |

Headings use `font-display` and typically `font-normal` (Mosans is one weight) or
let the font carry the weight. Body uses Inter, weights 400/500/600/700.

```
<h1 className="font-display text-h1">…</h1>
<p className="text-body-md text-foreground/75">…</p>
```

---

## Color tokens (Tailwind names → hex)

### Surfaces & text
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-background` / `text-foreground` | `#ffffff` / `#141414` | page default |
| `bg-background-soft` | `#f6f6f4` | alternating soft section bg |
| `bg-background-warm` | `#f7f5f3` | warm page bg |
| `bg-ink` / `text-ink` | `#141414` | near-black; footer bg, primary button, dark sections |
| `text-foreground/75` | `#141414bf` | secondary body text (use opacity) |
| `text-foreground/50` | tertiary text |

### Brand accents (the colored feature blocks — pink/lime/purple/coral/orange/violet)
| Token | Hex | Notes |
|-------|-----|-------|
| `bg-pink` `text-pink` | `#ffa3d1` | **primary accent**. `pink.hot #fc83bf` = hover, `pink.light #ffdaed`, `pink.bg #ffedf6`, `pink.dark #99004a` |
| `bg-lime` | `#ddff00` | bright lime — tool/calculator CTAs, accent lines |
| `bg-purple` | `#e0a3f5` | `.light #f3dafb` `.bg #f9edfd` `.dark #65367d` |
| `bg-violet` | `#c9b8ff` | `.light #e9e3ff` `.bg #f4f1ff` `.dark #262659` |
| `bg-coral` | `#ff9999` | `.hover #ff8b8b` `.light #ffd6d6` `.bg #ffebeb` `.dark #b81430` |
| `bg-orange` | `#ffc6b2` | `.light #ffe8e0` `.bg #fff4f0` `.dark #522c14` |
| `bg-sand` | `#ebe9e0` | product card fills. `sand.dark #cfc4af` |

Each accent has a matching pale `-bg` for tinted section backgrounds and a `-dark`
for text-on-pale. The big home feature blocks (pink / lime / mint screenshots) use
the **full-strength** accent (`bg-pink`, `bg-lime`, etc.) with `text-ink`.

### Grays (Untitled-UI scale — borders, secondary buttons, muted UI)
`gray-50 #f9fafb` · `gray-100 #f2f4f7` · `gray-200 #eaecf0` · `gray-300 #d0d5dd`
· `gray-400 #98a2b3` · `gray-500 #667085` · `gray-600 #475467` · `gray-700 #344054`
· `gray-900 #101828`

### Status
`text-positive #16a34a` · `text-negative #dc2626`

---

## Radius scale
| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 8px | buttons, small chips |
| `rounded` (DEFAULT) | 12px | medium cards/inputs |
| `rounded-lg` | 16px | nav pill, large cards |
| `rounded-xl` | 24px | hero/feature blocks |
| `rounded-pill` | 100px | pill buttons, badges |

## Type scale (`text-*`)
`eyebrow .75rem/600` · `body-sm .875rem` · `body 1rem` · `body-md 1.25rem` ·
`body-lg 1.5rem` · `h4 2rem` · `h3 2.5rem` · `h2 4rem` · `h1 5.5rem` · `display 9rem`

## Layout
- Container max-width: **1136px** → `max-w-container`, side gutter `px-4 sm:px-6`.
- Section vertical rhythm: `py-16 md:py-24`.
- Nav/shadow tokens: `shadow-nav` (floating pill), `shadow-btn` (buttons).

---

## Reusable components (`src/components/ui/`)

```tsx
import Container from '@/components/ui/Container';   // or relative path
import Section from '@/components/ui/Section';        // bg: white|soft|warm|ink
import Button, { ButtonLink, ButtonA } from '@/components/ui/Button';
```

- `<Container>` — centered 1136px wrapper.
- `<Section bg="soft">` — padded section + Container (use `bleed` to skip Container).
- `<Button variant size>` / `<ButtonLink to>` / `<ButtonA href>` — variants:
  `primary | secondary | tertiary | accent | lime`, sizes `sm | md | lg`.

---

## Copy-paste class strings

**Primary button (black, "Try for free")**
```
inline-flex items-center justify-center gap-2 h-10 px-[1.125rem] rounded-sm bg-ink text-white text-body font-semibold shadow-btn transition hover:opacity-90
```

**Secondary button (white + gray border, "Get a demo")**
```
inline-flex items-center justify-center gap-2 h-10 px-[1.125rem] rounded-sm bg-white text-gray-700 border border-gray-300 text-body font-semibold shadow-btn transition hover:bg-gray-50
```

**Tertiary / text button ("Log in")**
```
inline-flex items-center justify-center gap-2 h-10 px-[1.125rem] rounded-sm text-gray-600 text-body font-semibold transition hover:bg-gray-50
```

**Accent (pink) button**
```
inline-flex items-center justify-center gap-2 h-10 px-[1.125rem] rounded-sm bg-pink text-ink text-body font-semibold transition hover:bg-pink-hot
```

**Lime button (tools/calculators)**
```
inline-flex items-center justify-center gap-2 h-12 px-6 rounded-sm bg-lime text-ink text-body-md font-semibold transition hover:opacity-90
```

**Section container**
```
mx-auto w-full max-w-container px-4 sm:px-6
```
…wrapped in a `<section className="py-16 md:py-24 bg-background">`.

**Eyebrow label** (small uppercase kicker above headings)
```
text-eyebrow font-semibold uppercase tracking-wide text-foreground/50
```

**Colored "feature block" card** (the big home pink/lime/purple blocks)
```
rounded-xl bg-pink text-ink p-8 md:p-12
```
Swap `bg-pink` for `bg-lime` / `bg-purple` / `bg-coral` / `bg-orange` / `bg-violet`.
For a pale tinted variant use `bg-pink-bg text-pink-dark` etc.

**Standard white card**
```
rounded-lg border border-black/5 bg-white p-6 shadow-nav
```

**Section heading**
```
font-display text-h2 leading-tight text-foreground
```

---

## Navbar / Footer
Already built 1:1 in `src/components/layout/Navbar.tsx` and `Footer.tsx`.
- Navbar = sticky floating **white pill** (`rounded-lg`, `shadow-nav`, h-14, max 1136px),
  4 dropdowns (Platform / API / Use cases / Resources) + Pricing link + CTAs
  (Get a demo / Log in / Try for free). Mobile hamburger.
- Footer = `bg-ink` dark, 4 link columns + 2 office addresses, socials, ISO/GDPR
  badges, legal bottom bar. Wrapped by `<Layout>` — page agents render only page body.

## Asset CDN
Real Modash assets live under `https://cdn.prod.website-files.com/5ef4691542433bca43839ceb/…`.
Logo (nav): `…/6839797ca1a594bbe217a8b9_img_hero_logo_modash.png`.
Logo (footer, white): `…/6825fd2f81791b56a1c55a5b_modash_logo.svg`.
Reference assets by absolute URL — do not invent them.
