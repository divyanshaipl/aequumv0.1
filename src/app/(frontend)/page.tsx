import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { EarlyAccessForm } from '@/components/EarlyAccessForm'
import { Logo } from '@/components/Logo'
import { ProductPreview } from '@/components/ProductPreview'

export const dynamic = 'force-dynamic'

const fallback = {
  eyebrow: 'OPERATING INFRASTRUCTURE FOR SERVICE BUSINESSES',
  headline: 'Run your service business as one connected system.',
  subheadline:
    'Aequum is building the operating layer that brings clients, talent, work, contracts, workflows and commercial operations into alignment.',
  primaryCTA: 'Join Early Access',
}

async function getCopy() {
  try {
    const payload = await getPayload({ config: configPromise })
    const settings = await payload.findGlobal({ slug: 'site-settings', overrideAccess: true })
    return {
      eyebrow: settings.eyebrow || fallback.eyebrow,
      headline: settings.headline || fallback.headline,
      subheadline: settings.subheadline || fallback.subheadline,
      primaryCTA: settings.primaryCTA || fallback.primaryCTA,
    }
  } catch {
    return fallback
  }
}

const problems = [
  ['Fragmented client context', 'Critical decisions live across inboxes, chats, docs and people.'],
  ['Disconnected talent', 'Finding the right specialist is separate from engaging and operating with them.'],
  ['Commercial admin everywhere', 'Scopes, contracts, approvals, invoices and payments create avoidable drag.'],
  ['AI without an operating layer', 'Point tools can automate tasks, but not the whole service-business flow.'],
]

const pillars = [
  ['01', 'Connect', 'Bring businesses, specialists, clients and opportunities into a trusted operating environment.'],
  ['02', 'Orchestrate', 'Coordinate teams, agreements, workflows and commercial context without losing the thread.'],
  ['03', 'Execute', 'Give distributed service teams a shared system for moving work from intent to completion.'],
  ['04', 'Settle', 'Create cleaner paths from approved work to billing, payment and the next engagement.'],
]

export default async function HomePage() {
  const copy = await getCopy()

  return (
    <main>
      <header className="site-header container">
        <a href="#top" className="brand-link" aria-label="Aequum home"><Logo /></a>
        <nav aria-label="Primary navigation">
          <a href="#why">Why Aequum</a>
          <a href="#system">How it works</a>
          <a href="#who">For whom</a>
        </nav>
        <a className="button small" href="#early-access">{copy.primaryCTA}</a>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span />{copy.eyebrow}</p>
          <h1>{copy.headline}</h1>
          <p className="hero-sub">{copy.subheadline}</p>
          <div className="hero-actions">
            <a className="button primary" href="#early-access">{copy.primaryCTA}</a>
            <a className="text-link" href="#system">See the operating layer <span>↘</span></a>
          </div>
          <p className="build-note"><i /> Early product development & design-partner validation</p>
        </div>
        <ProductPreview />
      </section>

      <section className="section container" id="why">
        <div className="section-head">
          <p className="section-kicker">THE PROBLEM</p>
          <h2>Service businesses run on expertise.<br />Their infrastructure still runs on fragments.</h2>
          <p>Modern teams stitch together CRM, chat, freelancers, docs, contracts, project tools, invoicing and AI. The work moves. The operating context does not.</p>
        </div>
        <div className="problem-grid">
          {problems.map(([title, text], index) => (
            <article className="problem-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="container">
          <div className="section-head inverse">
            <p className="section-kicker">THE AEQUUM LAYER</p>
            <h2>Structure without friction.</h2>
            <p>One operating layer across the recurring lifecycle of service work, from opportunity and assembly to execution and settlement.</p>
          </div>
          <div className="operating-line" aria-label="Aequum operating model">
            <div><b>CLIENTS</b><small>Context & demand</small></div>
            <div><b>TALENT</b><small>Skills & capacity</small></div>
            <div><b>WORK</b><small>Scope & execution</small></div>
            <div><b>COMMERCIALS</b><small>Contracts & money</small></div>
            <span className="line-label">AEQUUM</span>
          </div>
          <div className="pillar-grid">
            {pillars.map(([number, title, text]) => (
              <article className="pillar" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container who-section" id="who">
        <div className="who-copy">
          <p className="section-kicker">BUILT FOR SERVICE OPERATORS</p>
          <h2>For teams whose product is expertise.</h2>
          <p>Aequum is being designed around the operational realities of businesses that assemble people and capabilities to deliver outcomes for clients.</p>
          <div className="audience-chips">
            <span>Agencies</span><span>Consultancies</span><span>Studios</span><span>Independent specialists</span><span>Distributed service teams</span>
          </div>
        </div>
        <div className="why-us-card">
          <p className="section-kicker">WHY THIS TEAM</p>
          <h3>Built from operating experience, not a whiteboard.</h3>
          <p>Aequum is being shaped by first-hand experience running service operations across clients, teams, contractors, scopes, delivery, approvals, invoicing and distributed workflows.</p>
          <a href="https://adtractive.co" target="_blank" rel="noopener noreferrer" className="text-link">About AdTractive <span>↗</span></a>
        </div>
      </section>

      <section className="early-section" id="early-access">
        <div className="container early-grid">
          <div>
            <p className="section-kicker">EARLY ACCESS</p>
            <h2>Help shape the operating layer you wish already existed.</h2>
            <p>We’re speaking with a small group of service-business operators and potential design partners while the first product version takes shape.</p>
            <div className="privacy-points">
              <span><i>✓</i> No account required</span>
              <span><i>✓</i> No sensitive business data</span>
              <span><i>✓</i> Opt out of contact anytime</span>
            </div>
          </div>
          <EarlyAccessForm />
        </div>
      </section>

      <footer className="site-footer container">
        <div>
          <Logo />
          <p>Balanced by design. Built for growth.</p>
        </div>
        <div className="footer-meta">
          <span>An AdTractive Internet Pvt. Ltd. venture</span>
          <span>© {new Date().getFullYear()} Aequum</span>
        </div>
      </footer>
    </main>
  )
}
