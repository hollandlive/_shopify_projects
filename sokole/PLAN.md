# Sokole Fragrance — Shopify Theme Customization Plan
**Theme:** Sense 15.4.1 | **Reference:** CAIA Cosmetics | **Date:** 2026-06-04

---

## Findings from Scan

### Assets available
| File | Status | Notes |
|---|---|---|
| `images/logo-sokole.jpg` | Ready | Gold serif wordmark on dark burgundy — use as header logo |
| `images/color-scheme.jpg` | Reference | Copper, Truffle, Mushroom, Rose Quartz, Blush |
| `images/prod2.jpg` | Ready | Sokole Mythology bottle — good hero/section image |
| `images/PHOTO-2026-06-03-20-14-43.jpg` | Ready | Same bottle, warmer angle |
| `images/prod1.jpg` | Reference only | CAIA product — do not use |
| `images/example.PNG` | Reference | CAIA mobile layout screenshot |

### Current theme state
- Homepage: **2 default placeholder sections** — needs full rebuild
- Color schemes: **Default Sense palette** (purple/mauve) — full replacement required
- Typography: **Poppins** for heading + body — needs replacing for luxury feel
- Logo width: 70px — too small, needs increasing to ~140px

### Key design insight
Sokole has a dual visual identity:
- **Dark**: Deep burgundy + gold (logo, combo boxes, dark mist labels) — dramatic, Middle Eastern luxury
- **Light**: Cream/off-white (actual bottle — Sokole Mythology) — clean premium

Strategy: use **warm cream as the base** (like CAIA's off-white), with **dark burgundy sections for hero and newsletter** (drama). Same approach as how CAIA anchors in neutral with editorial dark moments.

---

## 1. Color Palette

### Brand color hex values
| Name | Hex | Use |
|---|---|---|
| Cream | `#F5EFE6` | Page background, light sections |
| Deep Burgundy | `#2A1209` | Hero, header (dark mode), newsletter |
| Truffle | `#4A2E24` | Primary button, text on light |
| Gold | `#C9A84C` | Accent, buttons on dark backgrounds |
| Copper | `#B5622A` | Links, hover states, badges |
| Mushroom | `#D4B896` | Warm accent sections |
| Rose Quartz | `#C4837A` | Feminine sections, for-her collection |
| Blush | `#EDD5CA` | Soft background for her range |
| Dark Brown | `#1A0D08` | Footer background |
| Off-White Text | `#E8C4B8` | Text on dark backgrounds |

### Sense Color Scheme Mapping (replaces all 5 default schemes)

**Scheme 1 — CREAM** *(main, product cards, collection pages)*
```
background:           #F5EFE6
background_gradient:  (none)
text:                 #2A1810
button:               #4A2E24
button_label:         #F5EFE6
secondary_button_label: #4A2E24
shadow:               #2A1810
```

**Scheme 2 — BURGUNDY** *(hero banner, dark feature sections)*
```
background:           #2A1209
background_gradient:  linear-gradient(160deg, #3D1A12, #2A1209 100%)
text:                 #F5EFE6
button:               #C9A84C
button_label:         #2A1209
secondary_button_label: #C9A84C
shadow:               #000000
```

**Scheme 3 — DARK TRUFFLE** *(footer, newsletter)*
```
background:           #1A0D08
background_gradient:  (none)
text:                 #E8C4B8
button:               #C9A84C
button_label:         #1A0D08
secondary_button_label: #C9A84C
shadow:               #000000
```

**Scheme 4 — MUSHROOM** *(warm accent, for-him, body mist)*
```
background:           #D4B896
background_gradient:  (none)
text:                 #2A1810
button:               #4A2E24
button_label:         #F5EFE6
secondary_button_label: #2A1810
shadow:               #2A1810
```

**Scheme 5 — BLUSH** *(for-her sections, soft feature blocks)*
```
background:           #EDD5CA
background_gradient:  (none)
text:                 #2A1810
button:               #B5622A
button_label:         #F5EFE6
secondary_button_label: #2A1810
shadow:               #4A2E24
```

---

## 2. Font Mapping

### Recommended fonts
| Role | Font | Shopify ID | Reason |
|---|---|---|---|
| Headings | Cormorant Garamond Semibold | `cormorant_garamond_n6` | Matches brand serif elegance, suits French/Arabic naming |
| Body | Jost Regular | `jost_n4` | Clean geometric sans — CAIA-style readability |

### Scale settings
```
heading_scale: 130   (larger, more dramatic headings)
body_scale:    100
```

### Changes in settings_data.json
```json
"type_header_font": "cormorant_garamond_n6",
"type_body_font": "jost_n4",
"heading_scale": 130
```

---

## 3. Global Style Settings

Changes to `settings_data.json` global values:

```json
"page_width": 1300,
"spacing_sections": 0,
"spacing_grid_horizontal": 24,
"spacing_grid_vertical": 24,
"buttons_radius": 0,
"buttons_border_thickness": 1,
"buttons_border_opacity": 100,
"buttons_shadow_opacity": 0,
"card_style": "standard",
"card_corner_radius": 0,
"card_shadow_opacity": 0,
"card_text_alignment": "center",
"media_radius": 0,
"logo_width": 140,
"animations_reveal_on_scroll": true,
"animations_hover_elements": "image"
```

Design rationale:
- `spacing_sections: 0` — sections flush against each other (CAIA style, dramatic transitions between dark/light)
- `buttons_radius: 0` — sharp rectangular buttons (luxury, not playful)
- `card_style: standard` — no card borders or shadows on products (clean like CAIA)
- `animations_hover_elements: image` — image zoom on hover (premium feel)

---

## 4. Homepage Layout

### Section order (mobile-first)

```
┌─────────────────────────────────────┐
│ 1. ANNOUNCEMENT BAR                 │  scheme-2 (burgundy)
├─────────────────────────────────────┤
│ 2. HEADER                           │  scheme-1 (cream) — logo centered mobile
├─────────────────────────────────────┤
│ 3. HERO IMAGE BANNER                │  scheme-2 (burgundy)
│    Full screen height               │
│    Image: prod2.jpg or placeholder  │
│    Overlay: 40%                     │
│    Heading: "The Scent of           │
│             Distinction"            │
│    Subheading: "Luxury Fragrance    │
│                for Every Moment"    │
│    CTA: "Explore the Collection"    │
├─────────────────────────────────────┤
│ 4. RICH TEXT — Brand Story          │  scheme-1 (cream)
│    Heading: "Born from Passion"     │
│    Body: short editorial paragraph  │
│    CTA: "Our Story"                 │
├─────────────────────────────────────┤
│ 5. COLLECTION LIST — 5 Collections  │  scheme-1 (cream)
│    Layout: horizontal scroll mobile │
│    2 cols mobile / 5 cols desktop   │
│    Collections: For Her, For Him,   │
│    Premium Boxes, Body Mist,        │
│    Exclusive Gift                   │
├─────────────────────────────────────┤
│ 6. FEATURED COLLECTION              │  scheme-5 (blush)
│    Title: "For Her"                 │
│    4 products, swipe on mobile      │
│    2 cols mobile / 4 cols desktop   │
│    Image ratio: portrait (3:4)      │
│    Show "View All" → For Her coll.  │
├─────────────────────────────────────┤
│ 7. IMAGE WITH TEXT — Premium Boxes  │  scheme-2 (burgundy)
│    Image: combo box PDF render      │
│    Heading: "The Art of Gifting"    │
│    Body: gift set editorial copy    │
│    CTA: "Shop Gift Sets"            │
│    Layout: image right, text left   │
├─────────────────────────────────────┤
│ 8. FEATURED COLLECTION              │  scheme-4 (mushroom)
│    Title: "For Him"                 │
│    4 products, swipe on mobile      │
│    Image ratio: portrait (3:4)      │
│    Show "View All" → For Him coll.  │
├─────────────────────────────────────┤
│ 9. IMAGE WITH TEXT — Body Mist      │  scheme-1 (cream)
│    Image: Cashmere Aura / Eclat     │
│    Heading: "Body Mist Collection"  │
│    Body: "Light. Luminous. Lasting."│
│    CTA: "Discover Body Mists"       │
│    Layout: image left, text right   │
├─────────────────────────────────────┤
│ 10. MULTICOLUMN — Trust Badges      │  scheme-1 (cream)
│    3 columns:                       │
│    • Crafted in Dubai               │
│    • Premium Packaging              │
│    • Ships Worldwide                │
│    Icons: perfume, box, plane       │
├─────────────────────────────────────┤
│ 11. EMAIL SIGNUP BANNER             │  scheme-3 (dark truffle)
│    Heading: "Join the Sokole World" │
│    Sub: "Be first. Exclusive offers"│
│    Input + Subscribe button         │
├─────────────────────────────────────┤
│ 12. FOOTER                          │  scheme-3 (dark truffle)
│    Logo, nav links, social, © 2026  │
└─────────────────────────────────────┘
```

### Mobile-first specifics
- Hero: `image_height: screen` on mobile, `large` on desktop
- Collection list: 2-up grid mobile with horizontal scroll
- Featured collections: `swipe_on_mobile: true`, `columns_mobile: "2"`
- All CTAs: full-width button on mobile
- Header: logo centered on mobile, hamburger left, cart right

---

## 5. Collection Page Layout

**File to modify:** `templates/collection.json` + `sections/main-collection-product-grid.liquid`

```
┌─────────────────────────────────────┐
│ COLLECTION BANNER                   │  scheme-2 (burgundy)
│ Full width, large height            │
│ Collection title centered           │
│ Optional: editorial 1-line subtext  │
├─────────────────────────────────────┤
│ FILTER BAR                          │  scheme-1 (cream)
│ Left: "Filter" | Right: "Sort by"   │
│ CAIA-style minimal, no sidebar      │
├─────────────────────────────────────┤
│ PRODUCT GRID                        │  scheme-1 (cream)
│ 2 cols mobile / 3 cols desktop      │
│ Image ratio: portrait 3:4           │
│ No card borders or shadows          │
│ Product name: Cormorant Garamond    │
│ Price: Jost, small                  │
│ Hover: image zoom + quick add       │
├─────────────────────────────────────┤
│ PAGINATION                          │  scheme-1
└─────────────────────────────────────┘
```

**Settings changes:**
```json
"columns_desktop": 3,
"columns_mobile": "2",
"image_ratio": "portrait",
"image_shape": "default",
"show_secondary_image": true,
"quick_add": "standard",
"enable_filtering": true,
"enable_sorting": true,
"filter_type": "horizontal"
```

---

## 6. Product Page Layout

**File to modify:** `templates/product.json` + `sections/main-product.liquid`

```
┌─────────────────────────────────────┐
│ BREADCRUMB — small, light           │
├─────────────────────────────────────┤
│ ┌───────────┐ ┌───────────────────┐ │
│ │  PRODUCT  │ │ PRODUCT INFO      │ │
│ │  GALLERY  │ │                   │ │
│ │           │ │ Title (serif lg)  │ │
│ │ Main img  │ │ Type / Collection │ │
│ │           │ │ Price             │ │
│ │ Thumbnail │ │                   │ │
│ │ strip     │ │ Short description │ │
│ │ below     │ │                   │ │
│ │ (mobile:  │ │ ─────────────     │ │
│ │  swipe)   │ │ [Qty] [Add Cart]  │ │
│ │           │ │ (full-width mob)  │ │
│ └───────────┘ └───────────────────┘ │
├─────────────────────────────────────┤
│ COLLAPSIBLE CONTENT                 │
│ ▸ Fragrance Notes (placeholder)     │
│ ▸ Ingredients                       │
│ ▸ Shipping & Returns                │
├─────────────────────────────────────┤
│ RELATED PRODUCTS                    │  scheme-1
│ "You may also like"                 │
│ 4 products, swipe on mobile         │
└─────────────────────────────────────┘
```

**Key settings:**
- `media_size: large` — bigger images
- `gallery_layout: thumbnail_slider` (desktop) / `stacked` (mobile)
- `enable_sticky_info: true` — product info sticks while scrolling gallery
- Add collapsible-content section below main-product

---

## 7. Native vs Custom Sections

### Native Sense sections — use as-is
| Section | Used for | Config needed |
|---|---|---|
| `announcement-bar` | Shipping offer strip | scheme-2, bilingual text |
| `header` | Logo, nav, search, cart | Logo upload, nav menu, scheme-1 |
| `image-banner` | Homepage hero | Full height, overlay, scheme-2 |
| `rich-text` | Brand story | scheme-1, centered, large heading |
| `collection-list` | 5 collections grid | scheme-1, 5-up desktop |
| `featured-collection` | For Her, For Him, Body Mists | Per-scheme, portrait ratio |
| `image-with-text` | Premium Boxes, Body Mist | scheme-2 / scheme-1 |
| `multicolumn` | Trust badges | scheme-1, 3 cols, icons |
| `email-signup-banner` | Newsletter | scheme-3 |
| `footer` | Links, social | scheme-3 |
| `main-collection-banner` | Collection heroes | scheme-2 |
| `main-collection-product-grid` | Product grid | portrait, 3-col |
| `main-product` | Product page | Large media, sticky info |
| `collapsible-content` | Product page accordions | scheme-1 |
| `related-products` | Product page bottom | scheme-1 |

### Custom sections — code required
| What | Why | Priority |
|---|---|---|
| CSS override: `sokole-brand.css` | Sharp buttons, Cormorant letter-spacing, gold hover on links, announcement bar bilingual styling | **Sprint 1 — required** |
| Fragrance notes component | Structured note display (top/heart/base) on product page | Sprint 2 — nice to have |
| Collection page editorial header | Italic subtitle below collection title (like CAIA's "Scent is the thing...") | Sprint 2 |
| Language switcher styling | Greek/English toggle in header | Sprint 1 if bilingual needed |

---

## 8. Implementation Order

### Phase 1 — settings_data.json (no file risk, instant preview)
1. Replace all 5 color schemes with Sokole palette
2. Change fonts to Cormorant Garamond + Jost
3. Update global spacing, border-radius, card styles
4. Set logo width to 140px

### Phase 2 — Homepage (templates/index.json)
5. Replace existing 2 sections with full 12-section homepage
6. Configure each section's color_scheme, content, and layout settings

### Phase 3 — Collection + Product templates
7. Update `templates/collection.json` — portrait grid, filter bar
8. Update `templates/product.json` — large gallery, sticky info, accordions

### Phase 4 — Custom CSS
9. Create `assets/sokole-brand.css` — typography refinements, gold accents, button styles
10. Add stylesheet link to `layout/theme.liquid`

### Phase 5 — Push & test
11. `shopify theme push` from theme directory
12. Test on mobile first (375px), then desktop

---

## Files to modify

| File | Change type | Risk |
|---|---|---|
| `theme/config/settings_data.json` | Full color + font replacement | Low — reverts in theme editor |
| `theme/templates/index.json` | Full homepage rebuild | Low — JSON only |
| `theme/templates/collection.json` | Grid + filter settings | Low |
| `theme/templates/product.json` | Layout + section order | Low |
| `theme/layout/theme.liquid` | Add 1 CSS stylesheet tag | Low |
| `theme/assets/sokole-brand.css` | New file — custom CSS | None |

---

## Notes for Victoria review (Sprint 0 → Sprint 1 handoff)

- All sections use **placeholder images** until real photography is delivered
- Product descriptions are in **English only** — Greek translations to be added in Sprint 1
- Prices show **€0.00** — to be updated when Victoria confirms pricing
- The hero banner currently has **no product image** — needs a dark mood photo or styled bottle shot
- Font (Cormorant Garamond) renders best at **40px+** — do not use for body text
