import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { EarlyAccessForm } from '@/components/EarlyAccessForm'
import { Logo } from '@/components/Logo'
import { ProductPreview } from '@/components/ProductPreview'

export const dynamic = 'force-dynamic'

const fallback = {
  eyebrow: 'AI-ASSISTED OPERATING SYSTEM FOR SERVICE BUSINESSES',
  headline: 'Turn a client opportunity into a delivered, paid project in one connected workflow.',
  subheadline:
    'Aequum is building the operating platform for agencies, consultancies and specialist service firms. It connects team assembly, scope, contracts, delivery, approvals, invoicing and payments around the client engagement.',
  primaryCTA: 'Request Early Access',
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
  {
    number: '01',
    title: 'Team assembly takes too long',
    text: 'Skills, availability, rates and past performance are scattered across spreadsheets, chats, memory and external platforms.',
    impact: 'Slower project starts',
  },
  {
    number: '02',
    title: 'Scope drifts away from delivery',
    text: 'The proposal, contract, change requests and client approvals often live somewhere different from the work being executed.',
    impact: 'Margin and accountability risk',
  },
  {
    number: '03',
    title: 'Context gets rebuilt at every handoff',
    text: 'Teams repeat the same background across CRM, chat, project tools, documents and client systems because no layer carries it forward.',
    impact: 'Operational overhead',
  },
  {
    number: '04',
    title: 'Revenue operations start too late',
    text: 'Billing often begins after delivery instead of being connected to milestones, approvals and commercial terms from the start.',
    impact: 'A slower path to cash',
  },
]

const engagementSteps = [
  ['01', 'Brief', 'Capture the client requirement, desired outcome and commercial context.'],
  ['02', 'Assemble', 'Identify the right internal and external capabilities for the engagement.'],
  ['03', 'Structure', 'Turn the approved requirement into scope, responsibilities, milestones and agreements.'],
  ['04', 'Execute', 'Keep the team, client, work, changes and approvals inside one operating context.'],
  ['05', 'Settle', 'Connect approved work to invoicing, contributor settlement and commercial records.'],
  ['06', 'Learn', 'Retain reusable knowledge about skills, delivery patterns and project economics.'],
]

const aiUses = [
  ['Capability matching', 'Use engagement requirements and talent context to help identify suitable specialists.'],
  ['Scope and workflow drafting', 'Convert approved requirements into a first structured scope, workflow and responsibility model.'],
  ['Commercial checks', 'Surface missing approvals, changes or dependencies before they create billing friction.'],
  ['Knowledge continuity', 'Preserve the engagement context across handoffs so teams do not repeatedly rebuild the same information.'],
]

const outcomes = [
  ['Launch projects faster', 'Reduce the coordination required between winning work and getting the right team moving.'],
  ['Operate with fewer handoffs', 'Keep delivery and commercial context connected instead of recreating it across tools.'],
  ['Protect project economics', 'Make scope, changes, approvals and commercial milestones easier to follow.'],
  ['Create a cleaner path to cash', 'Connect completed and approved work with invoicing and settlement readiness.'],
]

const pointTools = [
  ['CRM', 'Opportunity'],
  ['Talent tools', 'People'],
  ['PM tools', 'Tasks'],
  ['Chat', 'Conversations'],
  ['Contract tools', 'Agreements'],
  ['Accounting', 'Invoices'],
]

export default async function HomePage() {
  const copy = await getCopy()

  return (
    <main>
      <header className="site-header container">
        <a href="#top" className="brand-link" aria-label="Aequum home">
          <Logo />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#workflow">How it works</a>
          <a href="#product">Product</a>
          <a href="#why-aequum">Why Aequum</a>
        </nav>
        <a className="button small" href="#early-access">{copy.primaryCTA}</a>
      </header>

      <section className="hero container" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />{copy.eyebrow}</p>
            <h1>{copy.headline}</h1>
            <p className="hero-sub">{copy.subheadline}</p>
            <div className="hero-actions">
              <a className="button primary" href="#early-access">{copy.primaryCTA}</a>
              <a className="text-link" href="#workflow">See the engagement workflow <span>↘</span></a>
            </div>
            <p className="build-note"><i /> Product development and design-partner validation underway</p>
          </div>
          <div className="hero-proof" aria-label="Initial customer focus">
            <span>INITIAL FOCUS</span>
            <strong>Agencies</strong>
            <strong>Consultancies</strong>
            <strong>Specialist service firms</strong>
          </div>
        </div>
        <ProductPreview />
      </section>

      <section className="section container" id="problem">
        <div className="section-head">
          <p className="section-kicker">THE OPERATING GAP</p>
          <h2>Winning the work is only the beginning.</h2>
          <p>
            A new client engagement triggers a chain of operational work: assemble the team, define scope,
            agree commercials, coordinate delivery, manage changes, collect approvals and get paid. Today,
            that lifecycle is fragmented across tools and manual handoffs.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.title}>
              <span>{problem.number}</span>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
              <small>{problem.impact}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="container">
          <div className="section-head inverse">
            <p className="section-kicker">ONE CONNECTED SERVICE WORKFLOW</p>
            <h2>The engagement becomes the operating object.</h2>
            <p>
              Instead of asking each tool to own one isolated function, Aequum is designed around the client
              engagement and carries its people, work and commercial context from opportunity through settlement.
            </p>
          </div>

          <div className="engagement-flow" aria-label="Aequum engagement lifecycle">
            {engagementSteps.map(([number, title, text]) => (
              <article className="engagement-step" key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
            <div className="flow-rail" aria-hidden="true"><span>AEQUUM</span></div>
          </div>
        </div>
      </section>

      <section className="section container product-section" id="product">
        <div className="product-copy">
          <p className="section-kicker">WHAT THE PRODUCT LOOKS LIKE</p>
          <h2>A workspace for the whole engagement, not another task list.</h2>
          <p>
            The product model brings the client brief, team assembly, scope, delivery status, approvals and
            commercial readiness into the same engagement workspace.
          </p>
          <div className="product-explainer-list">
            <div><b>Brief</b><span>What the client needs and what success means.</span></div>
            <div><b>Team</b><span>Who should deliver it and why they fit.</span></div>
            <div><b>Scope</b><span>What is approved, what changed and what is commercially covered.</span></div>
            <div><b>Settlement</b><span>What is ready to invoice or pay once work is approved.</span></div>
          </div>
        </div>
        <div className="product-preview-wrap">
          <ProductPreview compact />
        </div>
      </section>

      <section className="ai-section">
        <div className="container ai-grid">
          <div className="ai-copy">
            <p className="section-kicker">AI-ASSISTED OPERATIONS</p>
            <h2>AI should understand the engagement, not just generate another document.</h2>
            <p>
              Aequum is being designed to use the shared operating context of an engagement to assist with
              repetitive coordination and decision support. Commercially significant actions remain subject to
              human review and approval.
            </p>
          </div>
          <div className="ai-use-grid">
            {aiUses.map(([title, text], index) => (
              <article className="ai-use-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="why-aequum">
        <div className="section-head differentiation-head">
          <p className="section-kicker">WHY AEQUUM</p>
          <h2>The current stack is built around functions. Aequum is built around the engagement.</h2>
          <p>
            Point tools can be excellent at their individual job. The gap appears in the context between them,
            where teams still depend on manual coordination, memory and repeated handoffs.
          </p>
        </div>

        <div className="stack-comparison">
          <div className="stack-panel fragmented-panel">
            <div className="stack-panel-head">
              <span>TODAY</span>
              <h3>Each tool owns one slice.</h3>
            </div>
            <div className="point-tool-grid">
              {pointTools.map(([tool, owns]) => (
                <div key={tool}><b>{tool}</b><span>{owns}</span></div>
              ))}
            </div>
            <p className="stack-caption">The engagement context is carried manually between the boxes.</p>
          </div>

          <div className="comparison-arrow" aria-hidden="true">→</div>

          <div className="stack-panel aequum-panel">
            <div className="stack-panel-head">
              <span>WITH AEQUUM</span>
              <h3>One engagement carries the context.</h3>
            </div>
            <div className="engagement-object">
              <div className="engagement-object-title"><Logo compact /><b>CLIENT ENGAGEMENT</b></div>
              <div className="engagement-object-grid">
                <span>Requirement</span><span>People</span><span>Scope</span><span>Work</span>
                <span>Approvals</span><span>Commercials</span><span>Invoice readiness</span><span>Knowledge</span>
              </div>
            </div>
            <p className="stack-caption">The operating context moves with the engagement from opportunity to settlement.</p>
          </div>
        </div>
      </section>

      <section className="outcome-section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">WHAT CHANGES</p>
            <h2>Less operational friction between winning work and getting paid.</h2>
          </div>
          <div className="outcome-grid">
            {outcomes.map(([title, text], index) => (
              <article className="outcome-card" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container who-section" id="who">
        <div className="who-copy">
          <p className="section-kicker">INITIAL CUSTOMER FOCUS</p>
          <h2>For businesses that assemble expertise to deliver client outcomes.</h2>
          <p>
            Aequum is initially being designed for service operators managing multiple client engagements and a
            flexible mix of employees, contractors and specialist collaborators.
          </p>
          <div className="audience-chips">
            <span>Digital agencies</span>
            <span>Creative agencies</span>
            <span>Consultancies</span>
            <span>Technology studios</span>
            <span>Specialist professional services</span>
            <span>Distributed delivery teams</span>
          </div>
        </div>

        <div className="why-us-card">
          <p className="section-kicker">WHY THIS TEAM</p>
          <h3>Built from operating the problem, not describing it.</h3>
          <p>
            Aequum is being shaped from first-hand experience running client-service operations across business
            development, employees, contractors, scopes, delivery, approvals, invoicing and distributed teams.
          </p>
          <p>
            The repeated pattern was clear: individual tools may work well, but the operating context between them does not.
          </p>
          <a href="https://adtractive.co" target="_blank" rel="noopener noreferrer" className="text-link">
            About AdTractive <span>↗</span>
          </a>
        </div>
      </section>

      <section className="early-section" id="early-access">
        <div className="container early-grid">
          <div>
            <p className="section-kicker">DESIGN PARTNER PROGRAMME</p>
            <h2>Help shape the operating system for modern service businesses.</h2>
            <p>
              We are speaking with agency, consultancy and professional-service operators while the first version
              of Aequum takes shape. If your team loses time or margin between winning work, assembling people,
              delivering projects and getting paid, we would like to learn from your workflow.
            </p>
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
        <div>
          <Logo />
          <p>Structure without friction.</p>
        </div>
        <div className="footer-meta">
          <span>An AdTractive Internet Pvt. Ltd. venture</span>
          <span>© {new Date().getFullYear()} Aequum</span>
        </div>
      </footer>
    </main>
  )
}
