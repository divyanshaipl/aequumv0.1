import type { Metadata } from 'next'

import { Logo } from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for the Aequum early-access website and design-partner programme.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header container">
        <a href="/" className="brand-link" aria-label="Back to Aequum home"><Logo /></a>
        <a href="/" className="text-link">Back to Aequum <span>↗</span></a>
      </header>

      <article className="legal-content container">
        <div className="legal-intro">
          <p className="section-kicker">PRIVACY</p>
          <h1>Privacy Policy</h1>
          <p>
            This notice explains how information submitted through Aequum's early-access website is handled.
            Aequum is currently an early-stage product being developed from operating experience at AdTractive
            Internet Pvt. Ltd. For this website and early-access programme, submitted information is handled by
            AdTractive Internet Pvt. Ltd. while Aequum is being incubated.
          </p>
          <small>Last updated: 20 August 2026</small>
        </div>

        <section>
          <h2>1. Information we collect</h2>
          <p>When you request early access or participate in product research, we may collect:</p>
          <ul>
            <li>your work email address;</li>
            <li>your name and company, when you choose to provide them;</li>
            <li>your business type;</li>
            <li>information you voluntarily provide about operational challenges;</li>
            <li>your consent to be contacted;</li>
            <li>basic campaign-source information such as UTM parameters, when present.</li>
          </ul>
          <p>
            Our infrastructure also processes standard request metadata needed to deliver and protect the site.
            For abuse prevention, a one-way security fingerprint derived from an IP address may be kept
            temporarily in application memory for rate limiting. The early-access database does not intentionally
            store the raw IP address.
          </p>
        </section>

        <section>
          <h2>2. How we use information</h2>
          <p>We use submitted information to:</p>
          <ul>
            <li>manage early-access requests;</li>
            <li>contact people who have asked to participate in product research or design-partner discussions;</li>
            <li>understand which service-business workflows create the most operational friction;</li>
            <li>improve Aequum's product strategy, positioning and validation;</li>
            <li>protect the website against spam, abuse and security threats.</li>
          </ul>
          <p>We do not sell early-access information to advertisers.</p>
        </section>

        <section>
          <h2>3. Consent and communications</h2>
          <p>
            The early-access form asks for explicit consent before we contact you about Aequum early access and
            product research. You can withdraw that consent or ask us to stop contacting you at any time.
          </p>
        </section>

        <section>
          <h2>4. Service providers and international processing</h2>
          <p>
            We use cloud hosting, database and infrastructure providers to operate this website. Those providers
            may process information in countries different from your own as part of providing their services.
            We share information with service providers only as reasonably necessary to operate, secure and
            maintain the website and early-access programme.
          </p>
        </section>

        <section>
          <h2>5. Cookies and tracking</h2>
          <p>
            The public landing page does not currently include advertising pixels or behavioural advertising
            scripts. Essential hosting and security infrastructure may still process technical request data
            needed to deliver and protect the service.
          </p>
        </section>

        <section>
          <h2>6. Retention</h2>
          <p>
            We retain early-access and product-research information for as long as reasonably necessary to
            manage those activities, validate the product and maintain appropriate business records, unless a
            longer period is required by law. You may ask us to delete information that is no longer needed,
            subject to applicable legal requirements.
          </p>
        </section>

        <section>
          <h2>7. Your choices</h2>
          <p>
            Depending on the law that applies to you, you may have rights to request access, correction or
            deletion of your information, or to withdraw consent to communications.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            For privacy-related requests, use the public contact channels published by AdTractive Internet Pvt.
            Ltd. and state that your request relates to Aequum.
          </p>
          <a href="https://adtractive.co" target="_blank" rel="noopener noreferrer" className="button privacy-button">
            Contact via AdTractive
          </a>
        </section>

        <section>
          <h2>9. Changes to this notice</h2>
          <p>
            We may update this policy as Aequum's product, legal structure or data practices evolve. The latest
            version will be published on this page with an updated date.
          </p>
        </section>

        <p className="legal-note">
          This policy describes the current early-access website. A production Aequum product will require a
          separate privacy and data-governance framework appropriate to the features, markets and data it processes.
        </p>
      </article>

      <footer className="legal-footer container">
        <Logo />
        <span>© {new Date().getFullYear()} Aequum</span>
      </footer>
    </main>
  )
}
