# JTK Spares Website — Project Plan

## Company Overview
JTK Spares is a Cape Town-based industrial machinery repair and spare parts supplier serving the Western Cape. They provide crane repair, forklift maintenance, battery replacement, and precision engineering services.

## Tech Stack
- **Frontend**: HTML, Tailwind CSS (CDN), Material Symbols, Google Fonts (Inter)
- **Backend**: Node.js + Express, Prisma ORM
- **React App**: React 18, TypeScript, shadcn/ui, Framer Motion
- **Deployment**: Vercel

---

## Phase 1 — Design Foundation ✅
- [x] Establish colour palette (deep navy `#040d1b`, orange accent `#ea5c27`, Tailwind custom tokens)
- [x] Typography system (Inter, uppercase headings, tracking-tighter)
- [x] Component structure (NavBar, Hero, Trust Badges, Service Grid, Why Choose JTK, Map, Testimonials, CTA, Footer)

## Phase 2 — Page Sections ✅
- [x] TopNavBar with logo, nav links (Inventory, Industries, Certifications, Contact) and CTA button
- [x] Hero section with background image, headline, and action buttons
- [x] Trust badges (Licensed & Certified, 24/7 Support, Global Sourcing)
- [x] Specialised Solutions bento grid (Crane Repair, Forklift Maintenance, Battery Replacement)
- [x] "Engineered for Uninterrupted Performance" section with 3 key benefits
- [x] Western Cape Coverage map section
- [x] Previous Partners testimonials (3 cards)
- [x] Final CTA section with gradient
- [x] Footer with resource and corporate links

## Phase 3 — Responsive Design, Accessibility & Performance 🚧
- [x] Mobile hamburger navigation menu
- [x] Page `<title>` and meta description for SEO
- [x] Skip-to-content link for keyboard/screen-reader users
- [x] ARIA labels on navigation, buttons, and interactive elements
- [x] `aria-expanded` / `aria-controls` on mobile menu toggle
- [x] Semantic landmark roles (`<main>`, `<header>`, `<footer>`, `<nav>`)
- [x] `loading="lazy"` on below-the-fold images for performance
- [x] Star rating `aria-label` for screen readers
- [x] Smooth-scroll behaviour

## Design Principles Applied
1. **Industrial aesthetic** — deep navy + orange, uppercase type, sharp geometry
2. **Hierarchy** — oversized headings, clear section divisions, numbered lists
3. **Motion** — hover transitions on cards, button scale effects
4. **Accessibility** — WCAG 2.1 AA compliance target: skip nav, ARIA, contrast
5. **Performance** — lazy images, system font stack fallback, CDN assets
6. **Responsive** — mobile-first breakpoints via Tailwind (`md:`, `lg:`)

## Navigation Structure
| Label          | Target     | Notes                   |
|----------------|------------|-------------------------|
| Inventory      | #inventory | Parts catalogue section |
| Industries     | #industries | Sector focus cards      |
| Certifications | #certifications | Compliance badges   |
| Contact        | #contact   | Contact / CTA section   |
| Request Quote  | #contact   | Primary CTA button      |
