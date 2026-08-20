# Aequum Final Website v1.0

This is the final public-site pass prepared before the Hub71 application.

## Critical gaps fixed

- Hero now says what the product does in plain language.
- Buyer / user profile is explicit under the hero.
- Differentiation no longer compares Aequum only with point tools.
- The site now acknowledges the Professional Services Automation (PSA) category and explains the planned Aequum wedge:
  - PSA: optimise the service firm.
  - Aequum: operate the cross-organisational network around the client engagement.
- AI positioning is reframed around structured engagement context rather than generic AI features.
- AdTractive is used as founder-market-fit / problem-origin context, while Aequum is framed as a distinct product.
- Public privacy policy added at `/privacy`.
- Early-access consent links directly to the Privacy Policy.
- Footer now includes Privacy, Contact and Company context.
- Favicon and OpenGraph / social preview image added.
- Product concept currency changed from INR to a globally legible USD example.
- Sitemap now includes the privacy page.
- Existing Payload, Postgres, security, admin and lead-capture architecture remains intact.

## Important application note

The site deliberately does not invent:
- traction,
- pilot numbers,
- revenue,
- customer logos,
- TAM figures,
- performance improvements.

Use only real numbers in the Hub71 application and pitch deck.

## Deploy

If v0.3.2 is currently deployed, use the drop-in package and replace the listed files.

Suggested commit:

Finalize Aequum website for Hub71 application

After Vercel deploys:

1. Hard refresh the homepage.
2. Confirm `/privacy` opens.
3. Confirm the Privacy link in the form opens.
4. Submit one test early-access lead.
5. Confirm the lead appears in Payload Admin.
6. Confirm favicon appears in the browser tab.
7. Share the homepage URL once in a messaging app / social preview checker to verify the OpenGraph image.

Then freeze the website and move to the application.
