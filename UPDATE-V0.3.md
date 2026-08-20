# Aequum Hub71 Landing Page v0.3

This version upgrades the public story from a product explainer into a product + business vision narrative.

## What changed

- Stronger hero built around the full engagement outcome.
- Explicit business thesis: service companies are becoming networks of employees, specialists, partners and AI.
- New Before / After Aequum section.
- Expanded customer outcomes and clear note that these are product goals, not proven performance claims.
- Future service company visual.
- Now / Next / Later roadmap showing a narrow starting wedge and larger infrastructure ambition.
- Why Now section.
- Planned business-model expansion from SaaS to advanced workflow / AI and future network / commercial layers.
- Abu Dhabi / MENA launch-base narrative written as an intention, not a claim of current presence.
- Updated SEO and OpenGraph metadata.
- Existing Payload, database, admin, lead-form and security architecture preserved.
- Existing `allowJs: true` Payload import-map build fix preserved.
- No em dash characters are used in the v0.3 public copy.

## Important: Payload Site Settings

v0.3 contains upgrade logic for the exact v0.2 default hero values. If your database still contains those old defaults, the new v0.3 hero is used automatically.

If you manually customised Site Settings in Payload, your custom values remain authoritative.

Recommended v0.3 hero values:

Eyebrow:
OPERATING INFRASTRUCTURE FOR THE NEXT SERVICE ECONOMY

Headline:
Build the right team. Run the engagement. Get paid. Make the next one smarter.

Subheadline:
Aequum is building an AI-assisted engagement operating system for agencies, consultancies and specialist service firms. One place to turn a client opportunity into a staffed, scoped, delivered and commercially connected engagement.

CTA:
Request Early Access

## Deployment

Copy the v0.3 files into the same paths in the current project, commit, push to GitHub and allow Vercel to redeploy.

Suggested commit:
Update Aequum business vision landing page v0.3

After deployment, hard refresh the browser with Ctrl + Shift + R.

## What to validate before submitting Hub71

1. Desktop and mobile layouts.
2. `/admin` still loads.
3. Submit one test Early Access lead and confirm it appears in Payload.
4. Check that the hero shows the v0.3 wording.
5. Review the Abu Dhabi paragraph and keep it only if it matches the founder's actual intent.
6. Make the Hub71 application use the same vocabulary as the website:
   - engagement operating system
   - initial ICP: agencies, consultancies and specialist service firms
   - operating context
   - every engagement makes the next one smarter
   - now / next / later expansion thesis
