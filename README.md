# Aequum — Hub71 / early-access landing site

A focused pre-seed landing site for **Aequum**, built with Next.js and Payload CMS for Vercel. The goal is to make Aequum legible to accelerator/investor reviewers while collecting early-access and design-partner interest without exposing the deeper product blueprint.

## Brand baseline
- Midnight: `#0B1F3A`
- Teal: `#18A6A3`
- Cloud: `#F6F8FB`
- Display: Sora (self-hosted by Next Font at build time)
- Body/UI: Inter (self-hosted by Next Font at build time)
- Visual device: the horizontal equilibrium line
- Working principle: **Structure without friction.**

## Stack
- Next.js 15.4.x / React 19
- Payload CMS 3.72.x
- TypeScript
- Neon/Postgres through `@payloadcms/db-vercel-postgres`
- Optional Vercel Blob media storage
- Vercel deployment

Next.js 15 is pinned deliberately for this v0.1 instead of jumping to Next.js 16 immediately. A late-July 2026 Payload issue documents blank unauthenticated admin routes with some Next.js 16 configurations; the Hub71 site does not need that upgrade risk yet.

## Collections / CMS
- `users`: Payload admin users only
- `early-access-leads`: admin-only lead records
- `media`: admin-only image library, restricted file types
- `site-settings`: small editable global for hero copy; layout/design stays code-owned

Payload Admin: `/admin`
Payload REST base: `/cms-api`
Public lead endpoint: `/api/early-access`

## Local setup

1. Install Node.js 22 and pnpm.
2. Copy `.env.example` to `.env` and fill in a Postgres connection.
3. Install and run:

```bash
pnpm install
pnpm dev
```

4. Open `http://localhost:3000/admin` and create the first Payload admin user.
5. Open `http://localhost:3000` for the landing page.

## Vercel setup

1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel.
3. Create/connect a Neon Postgres database and expose its connection string as `POSTGRES_URL`.
4. Add `PAYLOAD_SECRET`, `RATE_LIMIT_SALT`, `NEXT_PUBLIC_SITE_URL`, and `ALLOWED_ORIGINS`.
5. Optionally connect Vercel Blob for CMS media.
6. Deploy.
7. Add `aequum.adtractive.co` to the Vercel project and create the DNS record Vercel requests.
8. Apply the Vercel Firewall controls documented in `SECURITY.md`.

## Security

Read `SECURITY.md` before production deployment. Important: the in-code burst limiter is intentionally a secondary safeguard only. A Vercel WAF rate-limit rule is required for globally consistent form-abuse protection in a serverless environment.

## Content positioning

The site deliberately communicates the category and operating thesis without publishing detailed product architecture, pricing, internal workflow design, AI implementation details, or the longer Aequum roadmap.
