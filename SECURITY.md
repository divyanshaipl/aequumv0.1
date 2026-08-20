# Aequum landing site — security baseline

This repository is intentionally small and conservative. It is a marketing / early-access site, not the Aequum SaaS application.

## Threat model and implemented controls

### XSS / script injection
- React output escaping is used throughout; the codebase contains no `dangerouslySetInnerHTML`.
- Public pages receive a nonce-based Content Security Policy from `src/middleware.ts`.
- CSP blocks plugins/objects, framing, off-origin scripts, off-origin forms, and unexpected network destinations.
- No third-party analytics, tag managers, chat widgets, ad pixels, or arbitrary script loaders are included in v0.1.
- Production browser source maps are disabled.

### CSRF / cross-origin submissions
- Payload `csrf` and `cors` are explicit origin allowlists, never `*`.
- The public lead endpoint independently verifies the request `Origin` in production.
- The public form does not write to a public Payload collection endpoint.

### Lead / PII exposure
- `early-access-leads` is admin-only for create/read/update/delete through Payload access control.
- The website uses a dedicated server route and Payload Local API to create records after validation.
- Duplicate-email responses are intentionally indistinguishable from new-email responses to discourage list enumeration.
- The application does not log submitted form data, raw email addresses, or raw client IP addresses.
- Do not add passwords, payment details, IDs, health data, or other sensitive data to this form.

### Admin authentication
- Payload uses HTTP-only auth cookies.
- Secure cookies are enabled in production.
- Session lifetime is 8 hours.
- Accounts lock after 5 failed login attempts for 15 minutes.
- Admin and CMS API responses are `no-store` and `noindex`.
- GraphQL is disabled and no GraphQL Next.js route is mounted.

### Abuse / bots
- 8 KB body limit at the application route.
- Strict JSON content type.
- Zod server validation with conservative field length limits.
- Honeypot field and minimum form-completion time.
- Lightweight per-instance burst limit pseudonymizes the client IP with HMAC; raw IP is not retained by application code.
- **Production requirement:** configure a Vercel Firewall rate-limit rule for `POST /api/early-access`; application memory is not a global distributed rate limiter.
- Enable Vercel Bot Protection in Challenge mode after checking legitimate form behavior.

### Upload / storage risks
- Media create/read/update/delete is admin-only.
- Only JPEG, PNG, WebP, and AVIF are accepted.
- SVG is deliberately not accepted because active SVG content can introduce script/security problems in some rendering contexts.
- Remote/pasted URL uploads are disabled to reduce SSRF / remote-fetch risk.
- Payload-wide upload limit is 4 MB and safe filenames are enabled.
- Metadata retention is disabled.

### Hotlinking
- Site-served resources use `Cross-Origin-Resource-Policy: same-origin`.
- v0.1 does not publicly render Payload-uploaded media, so Blob URLs are not intentionally exposed by the landing page.
- Public object-storage URLs can never be considered confidential. If Aequum later stores sensitive/private files, use private storage + short-lived signed URLs rather than relying on referer-based anti-hotlinking.

### Browser / field leakage
- No third-party JavaScript receives form data.
- Only expected browser autocomplete hints (`name`, `email`, `organization`) are used.
- No secrets are placed in `NEXT_PUBLIC_*` variables other than the public site URL.
- `PAYLOAD_SECRET`, database URLs, Blob write tokens, and rate-limit salt must remain server-only Vercel environment variables.
- Browser permissions (camera, mic, geolocation, payment, USB, browsing topics) are disabled through `Permissions-Policy`.

### Clickjacking, MIME confusion, referrer leakage
- CSP `frame-ancestors 'none'` + `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- HSTS is set in production.

## Required Vercel production configuration

Before launch:
1. Set `NEXT_PUBLIC_SITE_URL=https://aequum.adtractive.co`.
2. Generate a unique high-entropy `PAYLOAD_SECRET` and `RATE_LIMIT_SALT`.
3. Connect Neon/Postgres and set `POSTGRES_URL`.
4. Connect Vercel Blob only if the media library is needed; keep `BLOB_READ_WRITE_TOKEN` server-side.
5. Set `ALLOWED_ORIGINS=https://aequum.adtractive.co` (add exact Vercel preview origin only when you need authenticated preview testing).
6. In Vercel Firewall, add a rate limit to `POST /api/early-access` (starting point: 5-10 requests / 10 minutes / IP, then tune from logs).
7. Enable Bot Protection in Log mode first, verify legitimate submissions, then move to Challenge mode.
8. Keep the Vercel project and GitHub repository private while the pre-launch product story is still confidential.
9. Turn on GitHub branch protection and secret scanning where available.
10. Review Dependabot PRs; do not auto-merge major framework/CMS updates without a build and smoke test.

## Deliberately excluded in v0.1
- No customer authentication.
- No payments.
- No file uploads from public visitors.
- No user-generated rich text.
- No public GraphQL.
- No arbitrary HTML fields.
- No Google Tag Manager / Meta Pixel / external chat widgets.

These exclusions materially reduce attack surface for an accelerator-facing validation site.
