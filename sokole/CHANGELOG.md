# Changelog

## Phase 1 — Theme Foundation
**Date:** 2026-06-04
**Branch:** main
**Scope:** Color schemes, typography, global style settings, brand CSS

---

### `theme/config/settings_data.json`

**Color schemes** — replaced all 5 default Sense schemes with Sokole brand palette:

| Scheme | Old | New | Used for |
|---|---|---|---|
| scheme-1 | Cream/purple `#FDFBF7` + `#9B046F` | Cream `#F5EFE6` + Truffle `#4A2E24` | Main/default, product cards |
| scheme-2 | Lime gradient `#EDFFA7` | Burgundy `#2A1209` + Gold `#C9A84C` | Hero, dark feature sections |
| scheme-3 | Dark `#2E2A39` | Dark Truffle `#1A0D08` + Blush text `#E8C4B8` | Footer, newsletter |
| scheme-4 | Magenta `#9B046F` | Mushroom `#D4B896` + Truffle button | For Him, warm sections |
| scheme-5 | Purple `#5E3653` gradient | Blush `#EDD5CA` + Copper `#B5622A` | For Her, feminine sections |

**Typography:**
- `type_header_font`: `poppins_n5` → `cormorant_garamond_n6`
- `type_body_font`: `poppins_n4` → `jost_n4`
- `heading_scale`: `120` → `130`

**Logo:**
- `logo_width`: `70` → `140`

**Buttons (sharp luxury style):**
- `buttons_radius`: `10` → `0`
- `buttons_border_opacity`: `55` → `100`
- `buttons_shadow_opacity`: `0` (unchanged, shadows removed)
- `buttons_shadow_vertical_offset`: `4` → `0`

**Variant pills:**
- `variant_pills_radius`: `10` → `0`
- `variant_pills_border_opacity`: `10` → `40`

**Inputs:**
- `inputs_radius`: `10` → `0`
- `inputs_border_opacity`: `55` → `40`

**Cards (CAIA-style clean, no decoration):**
- `card_style`: `"card"` → `"standard"`
- `card_corner_radius`: `12` → `0`
- `card_shadow_opacity`: `5` → `0`
- `card_border_opacity`: `10` → `0`
- Same applied to `collection_card_*` and `blog_card_*`

**Text boxes:**
- `text_boxes_radius`: `24` → `0`
- `text_boxes_border_opacity`: `10` → `0`

**Media:**
- `media_radius`: `12` → `0`
- `media_shadow_opacity`: `10` → `0`

**Popup:**
- `popup_corner_radius`: `22` → `0`
- `popup_shadow_opacity`: `10` → `0`

**Layout:**
- `page_width`: `1200` → `1300`
- `spacing_sections`: `36` → `0` (flush sections between dark/light)
- `spacing_grid_horizontal`: `40` → `24`
- `spacing_grid_vertical`: `40` → `24`

**Animations:**
- `animations_hover_elements`: `"none"` → `"image"` (subtle scale on hover)

---

### `theme/assets/sokole-brand.css` *(new file)*

Custom brand stylesheet loaded globally. Contains:
- CSS custom properties for all 8 brand colors + spacing tokens
- Cormorant Garamond letter-spacing and weight refinements
- Uppercase + wide-tracking for nav, captions, announcement bar
- Button text treatment: uppercase, 0.12em tracking, 1.1rem, 200ms transitions
- Gold/copper hover states per scheme (dark schemes → gold, light schemes → copper)
- Product card hover: 1.04 scale image animation
- Header nav: uppercase + tracked
- Input/select: border-radius 0
- Footer: uppercase nav links, tracked

---

### `theme/layout/theme.liquid`

**Line 259:** Added `sokole-brand.css` stylesheet tag immediately after `base.css`:
```liquid
{{ 'sokole-brand.css' | asset_url | stylesheet_tag }}
```
Loads synchronously (same as `base.css`) so brand tokens are available before section CSS.

---

## Files NOT modified in Phase 1
- `templates/index.json` — homepage sections (Phase 2)
- `templates/collection.json` — collection grid (Phase 3)
- `templates/product.json` — product page (Phase 3)
- All section `.liquid` files
- All snippet `.liquid` files
