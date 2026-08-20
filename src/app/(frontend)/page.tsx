import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { EarlyAccessForm } from '@/components/EarlyAccessForm'
import { FutureCompanyVisual } from '@/components/FutureCompanyVisual'
import { Logo } from '@/components/Logo'
import { ProductPreview } from '@/components/ProductPreview'

export const dynamic = 'force-dynamic'

const fallback = {
  eyebrow: 'OPERATING INFRASTRUCTURE FOR THE NEXT SERVICE ECONOMY',
  headline: 'Build the right team. Run the engagement. Get paid. Make the next one smarter.',
  subheadline:
    'Aequum is building an AI-assisted engagement operating system for agencies, consultancies and specialist service firms. One place to turn a client opportunity into a staffed, scoped, delivered and commercially connected engagement.',
  primaryCTA: 'Request Early Access',
}

const legacyV02 = {
  eyebrow: 'AI-ASSISTED OPERATING SYSTEM FOR SERVICE BUSINESSES',
  headline: 'Turn a client opportunity into a delivered, paid project in one connected workflow.',
  subheadline:
    'Aequum is building the operating platform for agencies, consultancies and specialist service firms. It connects team assembly, scope, contracts, delivery, approvals, invoicing and payments around the client engagement.',
  primaryCTA: 'Request Early Access',
}

function upgradedCopy(value: string | null | undefined, legacy: string, next: string) {
  if (!value || value === legacy) return next
  return value
}

async function getCopy() {
  try {
    const payload = await getPayload({ config: configPromise })
    const settings = await payload.findGlobal({ slug: 'site-settings', overrideAccess: true })
    return {
      eyebrow: upgradedCopy(settings.eyebrow, legacyV02.eyebrow, fallback.eyebrow),
      headline: upgradedCopy(settings.headline, legacyV02.headline, fallback.headline),
      subheadline: upgradedCopy(settings.subheadline, legacyV02.subheadline, fallback.subheadline),
      primaryCTA: upgradedCopy(settings.primaryCTA, legacyV02.primaryCTA, fallback.primaryCTA),
    }
  } catch {
    return fallback
  }
}

const problems = [
  ['01', 'Team assembly takes too long', 'Skills, availability, rates and past performance are scattered across spreadsheets, chats, memory and external platforms.'],
  ['02', 'Scope gets disconnected from delivery', 'The proposal, contract, changes and approvals often live somewhere different from the work being executed.'],
  ['03', 'Context disappears between tools', 'Teams recreate the same background across CRM, chat, project tools, documents and client systems.'],
  ['04', 'Billing starts too late', 'Revenue operations often begin after delivery instead of being connected to milestones, approvals and commercials from the start.'],
]

const workflow = [
  ['01', 'Brief', 'Capture the client requirement and commercial context.'],
  ['02', 'Assemble', 'Identify the right internal and external capabilities.'],
  ['03', 'Structure', 'Define scope, responsibilities, milestones and agreements.'],
  ['04', 'Execute', 'Keep work, changes and approvals inside one operating context.'],
  ['05', 'Settle', 'Connect approved work to invoicing and contributor settlement.'],
  ['06', 'Learn', 'Retain capability, delivery and project-economics knowledge.'],
]

const outcomes = [
  ['Launch work faster', 'Reduce the coordination between winning work and getting the right team moving.'],
  ['Scale flexible capacity', 'Combine employees, specialists and partners without multiplying operational chaos.'],
  ['Protect project economics', 'Keep scope, changes, approvals and commercial milestones connected throughout delivery.'],
  ['Create a cleaner path to cash', 'Link approved work with invoicing and settlement readiness from the operating workflow.'],
]

const pointTools = [
  ['CRM', 'Opportunity'],
  ['Talent', 'People'],
  ['PM', 'Tasks'],
  ['Chat', 'Conversations'],
  ['Contracts', 'Agreements'],
  ['Accounting', 'Invoices'],
]

const whyNow = [
  ['Fluid workforces', 'Employees, specialists and partners increasingly work together around client outcomes.'],
  ['Operational AI', 'AI can participate in workflows only when it has structured context and clear approval boundaries.'],
  ['Fragmented infrastructure', 'Current tools organise functions while a client engagement crosses all of them.'],
]

export default async function HomePage() {
  const copy = await getCopy()

  return (
    <main>
      <header className="site-header container">
        <a href="#top" className="brand-link" aria-label="Aequum home"><Logo /></a>
        <nav aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#product">Product</a>
          <a href="#outcomes">Outcomes</a>
          <a href="#vision">Vision</a>
        </nav>
        <a className="button small" href="#early-access">{copy.primaryCTA}</a>
      </header>

      <section className="hero container" id="top">
        <div className="hero-grid hero-grid-compact">
          <div className="hero-copy">
            <p className="eyebrow"><span />{copy.eyebrow}</p>
            <h1>{copy.headline}</h1>
            <p className="hero-sub">{copy.subheadline}</p>
            <div className="hero-actions">
              <a className="button primary" href="#early-access">{copy.primaryCTA}</a>
              <a className="text-link" href="#product">See how it works <span>↘</span></a>
            </div>
            <p className="build-note"><i /> Product development and design-partner validation underway</p>
          </div>

          <aside className="hero-thesis compact-thesis">
            <span>THE THESIS</span>
            <p>Service companies are becoming networks of people, partners and AI.</p>
            <strong>Aequum is building the operating layer for that model.</strong>
          </aside>
        </div>

        <ProductPreview />

        <div className="hero-belief-strip compact-belief-strip">
          <span>CLIENT OUTCOME</span><i>+</i><span>PEOPLE</span><i>+</i><span>PARTNERS</span><i>+</i><span>AI</span><i>+</i><span>COMMERCIAL CONTEXT</span>
        </div>
      </section>

      <section className="section compact-section container" id="problem">
        <div className="section-head">
          <p className="section-kicker">THE OPERATING GAP</p>
          <h2>Winning the work should be hard. Operating it should not be.</h2>
          <p>A client engagement crosses staffing, scope, delivery, approvals and finance. The software stack is fragmented by function, so teams manually carry the operating context between tools.</p>
        </div>

        <div className="problem-grid compact-problem-grid">
          {problems.map(([number, title, text]) => (
            <article className="problem-card compact-problem-card" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="problem-conclusion">
          <span>THE REAL PROBLEM</span>
          <strong>The gap is not a lack of software. It is the missing operating context between the software.</strong>
        </div>
      </section>

      <section className="compact-product-section" id="product">
        <div className="container">
          <div className="section-head inverse">
            <p className="section-kicker">HOW AEQUUM WORKS</p>
            <h2>One engagement. One operating context.</h2>
            <p>Aequum is designed around the client engagement and carries its people, work and commercial context from the first requirement through settlement and learning.</p>
          </div>

          <div className="compact-workflow" aria-label="Aequum engagement lifecycle">
            {workflow.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="engagement-context-card">
            <div className="engagement-context-title">
              <Logo compact />
              <div><span>AEQUUM ENGAGEMENT</span><strong>What stays connected</strong></div>
            </div>
            <div className="engagement-context-items">
              <span>Client requirement</span><span>People</span><span>Scope</span><span>Work</span><span>Approvals</span><span>Commercials</span><span>Invoice readiness</span><span>Knowledge</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section compact-section container" id="outcomes">
        <div className="section-head">
          <p className="section-kicker">WHAT CHANGES FOR THE BUSINESS</p>
          <h2>Grow service revenue without letting operational complexity grow at the same rate.</h2>
          <p>These are product goals being validated with design partners, not yet proven performance claims.</p>
        </div>

        <div className="outcome-grid compact-outcome-grid">
          {outcomes.map(([title, text], index) => (
            <article className="outcome-card compact-outcome-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="compact-difference-section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">WHY AEQUUM</p>
            <h2>Point tools organise functions. Aequum organises the engagement.</h2>
          </div>

          <div className="compact-difference-grid">
            <div className="compact-point-tools">
              <div className="difference-label">TODAY</div>
              <h3>Each tool owns one slice.</h3>
              <div className="compact-point-tool-grid">
                {pointTools.map(([tool, owns]) => (
                  <div key={tool}><b>{tool}</b><span>{owns}</span></div>
                ))}
              </div>
            </div>

            <div className="compact-engagement-model">
              <div className="difference-label">WITH AEQUUM</div>
              <h3>One engagement carries the context.</h3>
              <div className="compact-engagement-object">
                <Logo compact />
                <strong>CLIENT ENGAGEMENT</strong>
                <p>People + work + commercial context + knowledge</p>
              </div>
              <div className="compact-ai-line">
                <span>AI ASSISTS WITH</span>
                <div><b>Capability matching</b><b>Scope assistance</b><b>Commercial checks</b><b>Knowledge continuity</b></div>
                <small>Human review remains part of commercially significant workflows.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="compact-vision-section" id="vision">
        <div className="container compact-vision-grid">
          <div className="compact-vision-copy">
            <p className="section-kicker">THE BUSINESS VISION</p>
            <h2>The next generation of service companies will assemble capability, not just headcount.</h2>
            <p>A modern service company can combine permanent employees, independent specialists, partner firms and AI around each client outcome. Aequum is being built to become the operating infrastructure for that model.</p>

            <div className="compact-why-now">
              {whyNow.map(([title, text]) => (
                <article key={title}><strong>{title}</strong><p>{text}</p></article>
              ))}
            </div>

            <div className="compact-horizons">
              <div><span>NOW</span><b>Engagement OS</b></div><i>→</i>
              <div><span>NEXT</span><b>Operational intelligence</b></div><i>→</i>
              <div><span>LATER</span><b>Service economy infrastructure</b></div>
            </div>

            <p className="compact-model-note">Planned as subscription software first, with future expansion into advanced intelligence and network capabilities as the core product proves value.</p>
          </div>

          <FutureCompanyVisual />
        </div>
      </section>

      <section className="section compact-section container compact-team-section" id="who">
        <div className="compact-team-grid">
          <div>
            <p className="section-kicker">WHY THIS TEAM</p>
            <h2>Built from operating the problem, not describing it.</h2>
            <p>Aequum is being shaped from first-hand experience running client-service operations across business development, employees, contractors, scopes, delivery, approvals, invoicing and distributed teams.</p>
            <p>The repeated pattern was clear: individual tools may work well, but the operating context between them does not.</p>
            <a href="https://adtractive.co" target="_blank" rel="noopener noreferrer" className="text-link">About AdTractive <span>↗</span></a>
          </div>

          <aside className="compact-global-card">
            <span>GLOBAL BY DESIGN</span>
            <h3>Built in India. Designed for global service businesses.</h3>
            <p>The UAE is our planned first international expansion market, followed by broader global expansion as customer validation and partnerships mature.</p>
            <div><b>INDIA</b><i>→</i><b>UAE</b><i>→</i><b>GLOBAL</b></div>
          </aside>
        </div>
      </section>

      <section className="early-section compact-early-section" id="early-access">
        <div className="container early-grid">
          <div>
            <p className="section-kicker">DESIGN PARTNER PROGRAMME</p>
            <h2>Help shape the operating infrastructure for the next service economy.</h2>
            <p>We are speaking with agency, consultancy and professional-service operators while the first version of Aequum takes shape. If your team loses time or margin between winning work, assembling people, delivering projects and getting paid, we would like to learn from your workflow.</p>
            <div className="privacy-points">
              <span><i>✓</i> No account required</span>
              <span><i>✓</i> No sensitive business data requested</span>
              <span><i>✓</i> Opt out of contact at any time</span>
            </div>
          </div>
          <EarlyAccessForm />
        </div>
      </section>

      <footer className="site-footer container">
        <div><Logo /><p>Structure without friction.</p></div>
        <div className="footer-meta">
          <span>An AdTractive Internet Pvt. Ltd. venture</span>
          <span>© {new Date().getFullYear()} Aequum</span>
        </div>
      </footer>
    </main>
  )
}
