# Aequum Hub71 Landing Page v0.2 Update

This version changes the landing page from abstract brand messaging to a concrete product and customer narrative.

## Changed files

- `src/app/(frontend)/page.tsx`
- `src/app/(frontend)/styles.css`
- `src/app/(frontend)/layout.tsx`
- `src/components/ProductPreview.tsx`
- `src/globals/SiteSettings.ts`
- `src/app/(frontend)/api/early-access/route.ts` (punctuation-only change)
- `tsconfig.json` (`allowJs: true`, required for the Payload generated import map)

No lead database fields, Payload collections, API contracts, database schema, authentication logic, or security controls were changed.

## What changed in the public page

1. Clear initial customer segment: agencies, consultancies and specialist service firms.
2. Concrete hero promise: client opportunity to delivered, paid project.
3. Problem section now explains operational and commercial consequences.
4. A six-step engagement lifecycle explains what Aequum actually does.
5. Product mockup now shows an engagement workspace, team assembly, scope/readiness and AI assistance.
6. AI section explains specific assistance rather than generic AI positioning.
7. Differentiation section contrasts function-specific point tools with Aequum's engagement-centric model.
8. Outcome section explains the intended customer value without making unsupported performance claims.
9. Initial customer profile and founder-market-fit narrative are more explicit.
10. Responsive behavior was rebuilt for laptop, tablet, mobile and small mobile widths.

## After replacing / pushing the files

1. Commit and push to the GitHub `main` branch.
2. Let Vercel create a new deployment from the new commit.
3. Hard refresh the new deployment (`Ctrl + Shift + R`).
4. Test at desktop, tablet and phone widths.
5. Submit a test Early Access form and confirm it appears in Payload Admin.

## Important if you previously saved Site Settings in Payload Admin

The hero fields remain CMS-editable. If you had already saved the old hero copy in `Payload Admin > Site Settings`, that stored database value can override the new code defaults.

Update those fields to:

- Eyebrow: `AI-ASSISTED OPERATING SYSTEM FOR SERVICE BUSINESSES`
- Headline: `Turn a client opportunity into a delivered, paid project in one connected workflow.`
- Subheadline: `Aequum is building the operating platform for agencies, consultancies and specialist service firms. It connects team assembly, scope, contracts, delivery, approvals, invoicing and payments around the client engagement.`
- Primary CTA: `Request Early Access`
