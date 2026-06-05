# Sokole Fragrance — Shopify Theme

> My first e-commerce project. A luxury fragrance brand store built on Shopify, designed and developed from scratch.

---

## About the Project

**Sokole** is a premium fragrance brand with a dual identity — dark burgundy and gold for drama, warm cream and blush for elegance. This repository contains the full Shopify theme customization built on the **Sense 15.4.1** base theme, transformed into a luxury retail experience inspired by high-end fragrance houses.

The store targets two markets — Greece and international — with full **bilingual support (English / Greek)**.

---

## Live Store

|                |                                                           |
| -------------- | --------------------------------------------------------- |
| **Store**      | sokole-sqcoggyz.myshopify.com                             |
| **Live theme** | Sense (customized)                                        |
| **Dev theme**  | Development — preview at `?preview_theme_id=186688962941` |

---

## Brand Identity

### Color Palette

| Name          | Hex       | Used for                       |
| ------------- | --------- | ------------------------------ |
| Cream         | `#F5EFE6` | Page background, product cards |
| Deep Burgundy | `#2A1209` | Hero sections, dark moments    |
| Truffle       | `#4A2E24` | Primary buttons, body text     |
| Gold          | `#C9A84C` | Accents on dark backgrounds    |
| Copper        | `#B5622A` | Links, hover states            |
| Mushroom      | `#D4B896` | For Him sections               |
| Rose Quartz   | `#C4837A` | For Her sections               |
| Blush         | `#EDD5CA` | Feminine soft backgrounds      |
| Dark Brown    | `#1A0D08` | Footer, newsletter             |

### Typography

| Role     | Font                        | Rationale                                      |
| -------- | --------------------------- | ---------------------------------------------- |
| Headings | Cormorant Garamond Semibold | Serif elegance, suits the French/Arabic naming |
| Body     | Jost Regular                | Clean geometric sans — readable, modern        |

---

## What Was Built

### Phase 1 — Brand Foundation

- Replaced all 5 default Sense color schemes with the Sokole palette
- Set typography: Cormorant Garamond headings + Jost body
- Global style overhaul: sharp rectangular buttons (`radius: 0`), flush section spacing, no card shadows
- Created `sokole-brand.css` — custom stylesheet with brand CSS tokens, gold hover states, letter-spacing refinements, and animation polish
- Injected brand CSS into `theme.liquid` globally

### Phase 2 — Homepage

- Built a 12-section homepage layout: hero banner → brand story → collection grid → featured products → gift sets → trust badges → newsletter
- Dark/light section rhythm (burgundy hero, cream product sections, dark footer)
- Mobile-first: swipeable collection rows, full-width CTAs, centered logo

### Multilingual Setup

- Published Greek (`el`) alongside English (`en`) in Shopify Admin
- Full 382-key Greek translation file (`locales/el.json`) — 100% coverage
- Language switcher enabled in header (desktop + mobile drawer)
- URL structure: `/` for English, `/el` for Greek

---

## Repository Structure

```
sokole/
├── theme/                        # Shopify theme files
│   ├── assets/
│   │   ├── sokole-brand.css      # Custom brand stylesheet
│   │   └── sokole-hero.css       # Hero section styles
│   ├── config/
│   │   └── settings_data.json    # Theme settings (colors, fonts, layout)
│   ├── layout/
│   │   └── theme.liquid          # Global layout — brand CSS injected here
│   ├── locales/
│   │   ├── en.default.json       # English translations
│   │   └── el.json               # Greek translations (full coverage)
│   ├── sections/                 # Theme sections
│   ├── snippets/                 # Reusable Liquid snippets
│   └── templates/                # Page templates
├── images/                       # Brand assets and references
├── instructions/                 # Setup screenshots
├── products-import.csv           # Product data
├── PLAN.md                       # Design & implementation plan
├── CHANGELOG.md                  # What changed and why
└── STATUS.md                     # Environment and CLI info
```

---

## Development Setup

### Requirements

- [Shopify CLI 4.x](https://shopify.dev/docs/themes/tools/cli)
- Node.js 18+

### Running locally

```bash
cd sokole/theme
shopify theme dev
```

Opens a live preview at `http://127.0.0.1:9292` synced to the development theme.

### Pushing to live

```bash
# Push to the live Sense theme
shopify theme push --theme 186688799101

# Push to development theme only
shopify theme push
```

---

## Markets & Languages

| Market        | Countries | Currency    | Language                  |
| ------------- | --------- | ----------- | ------------------------- |
| Greece        | GR        | EUR         | Greek (el) + English (en) |
| International | CA + rest | CAD / local | English (en)              |

The language switcher renders automatically when more than one language is published — no theme code change needed.

---

## Design Decisions

**Why Sense?**
Sense has one of the cleanest product card implementations in Shopify's free theme library. Its section architecture maps well to the dark/light rhythm the Sokole brand needs.

**Why sharp buttons (`radius: 0`)?**
Rounded buttons read as playful or tech. Luxury fragrance brands (CAIA, Maison Margiela, Byredo) universally use sharp rectangular buttons. Zero radius signals precision and premium.

**Why flush sections (`spacing_sections: 0`)?**
Dramatic transitions between dark burgundy hero sections and cream product sections only work when sections sit directly against each other. Any gap breaks the editorial feel.

**Why Cormorant Garamond?**
The brand name "Sokole" and product lines ("Mythology", "Cashmere Aura") carry a French/classical weight. Cormorant renders beautifully at large display sizes and pairs well with the geometric simplicity of Jost for body text.

---

## Roadmap

- [ ] Product photography (styled bottle shots for hero and collections)
- [ ] Greek product descriptions and translations
- [ ] Fragrance notes component (top / heart / base notes on product page)
- [ ] Collection editorial headers (italic subtitle per CAIA style)
- [ ] Pricing finalized and updated across all products

---

## Tech Stack

|            |                                    |
| ---------- | ---------------------------------- |
| Platform   | Shopify                            |
| Theme base | Sense 15.4.1                       |
| Templating | Liquid                             |
| Custom CSS | Vanilla CSS with custom properties |
| CLI        | Shopify CLI 4.1.0                  |
| Languages  | English, Greek                     |

---

_First e-commerce project — June 2026_
