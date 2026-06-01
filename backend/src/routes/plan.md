# JTK Spares — Master Implementation Plan

> Updated after full codebase scan. Reflects confirmed tech stack and current implementation state.

## Technology stack (confirmed)

| Layer | Technology | Hosting |
|-------|-----------|---------|
| Frontend | React 18 + TypeScript + Vite 8 + Tailwind v4 | Vercel |
| Serverless functions | Vercel Functions (`api/*.ts`, Node 20) | Vercel |
| Database | MySQL (cPanel) | Afrihost |
| Domain | Custom domain | Afrihost |
| Backend Express (future admin) | Express.js + Node.js | TBD (Railway / Render) |

**Database decision**: MySQL on Afrihost cPanel. `api/contact.ts` already uses `mysql2/promise` — this is correct. The Express backend `backend/src/` has a conflicting PostgreSQL Prisma config; this must be migrated before backend deployment.

---

## Always-enforced rules

- Never commit to `main` — `development` branch only.
- No `@apply` directives (Tailwind v4 incompatible).
- 45/45 Vitest tests must stay green after every change.
- Top nav links: About, Services, Certifications, Contacts — no Partners in nav.
- Lucide-react for all icons; no emoji in UI.
- All animations respect `prefers-reduced-motion`.

---

## Status: what is done

### Frontend (all complete)

| Component | Notes |
|-----------|-------|
| Header | Scroll glassmorphism, IntersectionObserver active section, mobile menu |
| HeroSection | BlurText h1, dot-grid SVG, radial glow, stat strip |
| AboutSection | 2-col grid, FadeContent entrances, orange left-border values |
| ServicesSection | 6 cards, staggered FadeContent, card-hover |
| CertificationsSection | 4 certifications, ShieldCheck icons, card-hover |
| PartnersSection | CSS marquee, sr-only accessible list (7 clients), mask fade |
| ContactSection | Blur validation, Loader2 spinner, aria-live, honeypot, auto-focus |
| Footer | 3-col, phone/email/WhatsApp, address, reg number |
| BlurText | framer-motion word-by-word blur, prefers-reduced-motion safe |
| FadeContent | Scroll-triggered fade-up, once=true |
| index.css tokens | Primitives → semantic → component → motion tokens |
| App.tsx | React.lazy + Suspense for all below-fold sections |
| App.js legacy | Deleted (was conflicting with App.tsx) |

### Serverless API

| File | Notes |
|------|-------|
| `api/contact.ts` | MySQL via mysql2/promise, honeypot, validation, CORS — ready |

### Express backend (built, not deployed)

All endpoints built with Zod validation and JWT auth. Prisma schema currently uses PostgreSQL — needs migration to MySQL before deployment.

Endpoints: `POST /api/quotes`, `GET/PATCH/DELETE /api/quotes`, `POST /api/inquiries`, `POST /api/diagnoses`, `GET /api/parts`, `POST /api/admin/auth/login`, `GET /api/admin/stats`, `GET /api/admin/activity`

### Tests

- 45/45 Vitest frontend tests: **passing**
- Jest backend tests: **0 configured** (not started)

### Vercel config

`vercel.json` complete: build command, SPA fallback rewrite, security headers, 1-year asset cache, nodejs20.x for `api/*.ts`.

---

## What still needs to be done

### P0 — Must complete before site goes live

1. **Create Afrihost MySQL database**
   - Create DB + user in cPanel → MySQL Databases
   - Run the contact table DDL (see below)
   - Note whether host is `localhost` (same cPanel) or a remote host

2. **Set Vercel environment variables**
   - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT=3306`, `DB_SSL=false`
   - `ALLOWED_ORIGIN=https://jtkspares.co.za`
   - `JWT_SECRET` (64+ random chars)

3. **Configure Afrihost domain on Vercel**
   - Add custom domain in Vercel → Settings → Domains
   - Set DNS CNAME in Afrihost cPanel pointing to `cname.vercel-dns.com`
   - Vercel auto-provisions HTTPS

4. **Smoke test contact form end-to-end**
   - Submit on live URL → verify row in Afrihost phpMyAdmin
   - Verify error states and honeypot

### P1 — Important, not blocking go-live

5. **SEO and meta tags** (`frontend/index.html`)
   - `<meta name="description">` with JTK Spares value prop
   - Open Graph tags (og:title, og:description, og:image)
   - `<link rel="canonical" href="https://jtkspares.co.za">`
   - `robots.txt` and `sitemap.xml`

6. **Favicon** (currently 404)
   - Add `favicon.ico` / `favicon.svg` to `frontend/assets/`
   - Reference in `frontend/index.html`

7. **Email notification on contact form submit**
   - Email `jasonkwalie@gmail.com` on every submission
   - Options: Resend API (simplest), SendGrid, or Nodemailer via SMTP
   - Modify `api/contact.ts` — save to DB first, then send email (non-blocking)
   - Add env vars: `EMAIL_TO`, `EMAIL_FROM`, `RESEND_API_KEY` or SMTP vars

8. **Analytics**
   - Add `@vercel/analytics` (1 import + 1 component in `App.tsx`) or Google Analytics 4

### P2 — Future phases

9. **Migrate Prisma schema to MySQL** (`backend/prisma/schema.prisma`)
   - Change `provider = "postgresql"` → `provider = "mysql"`
   - Update `DATABASE_URL` to `mysql://user:pass@host:3306/db`
   - Run `npx prisma generate` then `npx prisma migrate dev`

10. **Deploy Express backend**
    - Choose: Railway, Render, or Afrihost Node.js
    - Required for: quotes, inquiries, parts management, admin auth

11. **Admin dashboard (frontend)**
    - React page at `/admin` using `react-router-dom` (already installed)
    - Login → JWT → stats + activity feed + inquiry list

12. **Quote request form (extended)**
    - Dedicated "Request a Quote" flow tied to `POST /api/quotes`
    - Fields: machinery type, industry, urgency, problem description, attachments

13. **Parts catalogue page**
    - `GET /api/parts` is built (search, pagination, category filter)
    - Add frontend catalogue page when inventory is populated

### P3 — Cleanup

14. **Remove unused frontend stubs**
    - `frontend/src/components/ui/button.tsx`, `FlowHoverButton.jsx`, `shine-hover.*`, `vercel-tabs.tsx`, `about-us-section.tsx`
    - `frontend/components/` (root-level duplicates of the above)

15. **Backend tests**
    - Jest integration tests for `POST /api/contact` edge cases

16. **Update `.env.example`**
    - Replace PostgreSQL `DATABASE_URL` with MySQL format
    - Document all Afrihost-specific variables

---

## MySQL contact table DDL

Run once in Afrihost phpMyAdmin:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id            CHAR(36)     NOT NULL DEFAULT (UUID()),
  name          VARCHAR(255) NOT NULL,
  email         VARCHAR(255) NOT NULL,
  phone         VARCHAR(50)  NULL,
  company       VARCHAR(255) NULL,
  message       TEXT         NOT NULL,
  submitted_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address    VARCHAR(45)  NULL,
  PRIMARY KEY (id),
  INDEX idx_submitted_at (submitted_at DESC),
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;