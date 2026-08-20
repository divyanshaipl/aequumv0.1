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
  {
    number: '01',
    title: 'Team assembly takes too long',
    text: 'Skills, availability, rates and past performance are scattered across spreadsheets, chats, memory and external platforms.',
    impact: 'Slower project starts',
  },
  {
    number: '02',
    title: 'Scope drifts away from delivery',
    text: 'The proposal, contract, change requests and approvals often live somewhere different from the work being executed.',
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

const beforeSteps = [
  'Client brief',
  'Chats and inboxes',
  'Talent search',
  'Spreadsheet',
  'Proposal and scope',
  'Contract tool',
  'Project tool',
  'Client approvals',
  'Invoice',
  'Knowledge lost',
]

const afterSteps = [
  'Requirement understood',
  'Right capability assembled',
  'Scope and commercials structured',
  'Execution context maintained',
  'Changes and approvals recorded',
  'Approved work becomes invoice-ready',
  'Skills, economics and knowledge retained',
]

const engagementSteps = [
  ['01', 'Brief', 'Capture the client requirement, desired outcome and commercial context.'],
  ['02', 'Assemble', 'Identify the right internal and external capabilities for the engagement.'],
  ['03', 'Structure', 'Turn the approved requirement into scope, responsibilities, milestones and agreements.'],
  ['04', 'Execute', 'Keep the team, client, work, changes and approvals inside one operating context.'],
  ['05', 'Settle', 'Connect approved work to invoicing, contributor settlement and commercial records.'],
  ['06', 'Learn', 'Retain reusable knowledge about skills, delivery patterns and project economics.'],
]

const outcomes = [
  ['Launch client work faster', 'Reduce the coordination between winning work and getting the right team moving.'],
  ['Scale flexible capacity', 'Combine employees, specialists and partners without multiplying operational chaos.'],
  ['Operate with fewer handoffs', 'Keep delivery and commercial context connected instead of recreating it across tools.'],
  ['Protect project economics', 'Keep scope, changes, approvals and commercial milestones visible throughout delivery.'],
  ['Create a cleaner path to cash', 'Connect approved work with invoicing and settlement readiness from the operating workflow.'],
  ['Build institutional intelligence', 'Retain knowledge about capabilities, team combinations, delivery patterns and project economics.'],
]

const aiUses = [
  ['Capability matching', 'Use engagement requirements and talent context to help identify suitable specialists.'],
  ['Scope and workflow drafting', 'Turn approved requirements into a first structured scope, workflow and responsibility model.'],
  ['Commercial checks', 'Surface missing approvals, changes or dependencies before they create billing friction.'],
  ['Knowledge continuity', 'Preserve engagement context across handoffs so teams do not repeatedly rebuild the same information.'],
]

const pointTools = [
  ['CRM', 'Opportunity'],
  ['Talent tools', 'People'],
  ['PM tools', 'Tasks'],
  ['Chat', 'Conversations'],
  ['Contract tools', 'Agreements'],
  ['Accounting', 'Invoices'],
]

const whyNow = [
  {
    number: '01',
    title: 'Workforces are becoming fluid',
    text: 'Service companies increasingly combine employees, independent specialists, partner firms and distributed teams around client outcomes.',
  },
  {
    number: '02',
    title: 'AI is becoming a participant in work',
    text: 'AI is moving beyond content generation toward operational tasks, but useful automation needs structured business context and clear approvals.',
  },
  {
    number: '03',
    title: 'The service stack is still fragmented',
    text: 'Software has specialised by function while a client engagement still crosses sales, talent, delivery, contracts and finance.',
  },
]

const horizons = [
  {
    stage: 'NOW',
    title: 'Engagement operating system',
    goal: 'Prove the core workflow with service-business design partners.',
    text: 'Connect people, scope, delivery, approvals and commercial context around each client engagement.',
  },
  {
    stage: 'NEXT',
    title: 'Operational intelligence layer',
    goal: 'Make every engagement improve the next one.',
    text: 'Build reusable context around capabilities, availability, project economics, delivery patterns and commercial dependencies so AI can assist with better decisions.',
  },
  {
    stage: 'LATER',
    title: 'Service economy infrastructure',
    goal: 'Coordinate capability across organisational boundaries.',
    text: 'Enable businesses to assemble employees, specialists, partner firms and AI capabilities around outcomes, with Aequum coordinating the operating and commercial relationship.',
  },
]

const revenueLayers = [
  {
    stage: 'CORE',
    title: 'Platform subscription',
    text: 'Recurring SaaS revenue from organisations using Aequum to operate client engagements.',
  },
  {
    stage: 'EXPAND',
    title: 'AI and advanced workflow',
    text: 'Higher-value workflow, automation and intelligence capabilities as customers deepen usage.',
  },
  {
    stage: 'FUTURE',
    title: 'Network and commercial layers',
    text: 'Potential revenue from network, transaction and cross-border commercial capabilities as those products mature.',
  },
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
          <a href="#product">Product</a>
          <a href="#outcomes">Outcomes</a>
          <a href="#vision">Vision</a>
          <a href="#why-now">Why now</a>
        </nav>
        <a className="button small" href="#early-access">{copy.primaryCTA}</a>
      </header>

      <section className="hero container" id="top">
        <div className="hero-grid hero-grid-v03">
          <div className="hero-copy">
            <p className="eyebrow"><span />{copy.eyebrow}</p>
            <h1>{copy.headline}</h1>
            <p className="hero-sub">{copy.subheadline}</p>
            <div className="hero-actions">
              <a className="button primary" href="#early-access">{copy.primaryCTA}</a>
              <a className="text-link" href="#after-aequum">See what changes <span>↘</span></a>
            </div>
            <p className="build-note"><i /> Product development and design-partner validation underway</p>
          </div>

          <aside className="hero-thesis" aria-label="Aequum business thesis">
            <span>THE THESIS</span>
            <p>Service companies are becoming networks of people, partners and AI.</p>
            <strong>Every engagement should make the business smarter.</strong>
          </aside>
        </div>

        <ProductPreview />

        <div className="hero-belief-strip" aria-label="Aequum operating model">
          <span>CLIENT OUTCOME</span>
          <i>+</i>
          <span>PEOPLE</span>
          <i>+</i>
          <span>PARTNERS</span>
          <i>+</i>
          <span>AI</span>
          <i>+</i>
          <span>COMMERCIAL CONTEXT</span>
        </div>
      </section>

      <section className="section container" id="problem">
        <div className="section-head">
          <p className="section-kicker">THE OPERATING GAP</p>
          <h2>Winning the work should be hard. Operating it should not be.</h2>
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

      <section className="before-after-section" id="after-aequum">
        <div className="container">
          <div className="section-head before-after-head">
            <p className="section-kicker">BEFORE AND AFTER AEQUUM</p>
            <h2>Software everywhere. Operating context nowhere.</h2>
            <p>
              Aequum is not trying to create another isolated box. It is designed to carry the engagement
              context through the chain of work so the business does not restart from zero at every handoff.
            </p>
          </div>

          <div className="before-after-grid">
            <article className="state-panel state-before">
              <div className="state-head">
                <span>TODAY</span>
                <h3>The company carries context manually.</h3>
              </div>
              <div className="state-flow state-flow-before">
                {beforeSteps.map((step, index) => (
                  <div key={step}>
                    <i>{String(index + 1).padStart(2, '0')}</i>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <p>More tools can still mean more handoffs, duplicated context and operational dependence on individual memory.</p>
            </article>

            <article className="state-panel state-after">
              <div className="state-head">
                <span>WITH AEQUUM</span>
                <h3>The engagement carries the context.</h3>
              </div>
              <div className="after-object">
                <div className="after-core">
                  <Logo compact />
                  <b>ENGAGEMENT</b>
                  <small>One operating context</small>
                </div>
                <div className="after-steps">
                  {afterSteps.map((step, index) => (
                    <div key={step}><i>0{index + 1}</i><span>{step}</span></div>
                  ))}
                </div>
              </div>
              <p>Each completed engagement can leave behind reusable capability, commercial and delivery intelligence for the next one.</p>
            </article>
          </div>

          <div className="after-promise">
            <span>THE COMPOUNDING IDEA</span>
            <strong>Every engagement should make the company operationally smarter.</strong>
          </div>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="container">
          <div className="section-head inverse">
            <p className="section-kicker">ONE CONNECTED SERVICE WORKFLOW</p>
            <h2>Turn opportunity into organised execution, then execution into cash.</h2>
            <p>
              Aequum is designed around the client engagement and carries its people, work and commercial
              context from the first requirement through settlement and learning.
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

      <section className="outcome-section" id="outcomes">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">WHAT AEQUUM CAN DO FOR THE BUSINESS</p>
            <h2>Grow service revenue without letting operational complexity grow at the same rate.</h2>
            <p>
              These are the outcomes Aequum is being designed to create. They are product goals, not yet
              performance claims, and will be validated with design partners.
            </p>
          </div>

          <div className="outcome-grid outcome-grid-six">
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
            <div><b>Memory</b><span>What the organisation should retain for the next engagement.</span></div>
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
              Aequum is being designed to use shared operating context to assist with repetitive coordination and
              decision support. Commercially significant actions remain subject to human review and approval.
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

      <section className="vision-section" id="vision">
        <div className="container vision-grid">
          <div className="vision-copy">
            <p className="section-kicker">THE BUSINESS VISION</p>
            <h2>The next generation of service companies will assemble capability, not just headcount.</h2>
            <p>
              A modern service company can combine permanent employees, independent specialists, partner firms
              and AI capabilities around each client outcome. Aequum is being built to become the operating
              infrastructure for that model.
            </p>

            <blockquote>
              What if a company could assemble the right people, AI and commercial structure around every client
              outcome, then retain what it learned for the next engagement?
            </blockquote>

            <div className="vision-principles">
              <span>Dynamic capability</span>
              <span>Shared operating context</span>
              <span>AI with business context</span>
              <span>Commercial continuity</span>
            </div>
          </div>

          <FutureCompanyVisual />
        </div>
      </section>

      <section className="horizon-section">
        <div className="container">
          <div className="section-head horizon-head">
            <p className="section-kicker">NOW, NEXT, LATER</p>
            <h2>Start with a painful workflow. Build toward infrastructure.</h2>
            <p>
              The ambition is large, but the product is deliberately sequenced. Aequum starts with the client
              engagement workflow and expands only after proving value in the core operating problem.
            </p>
          </div>

          <div className="horizon-grid">
            {horizons.map((item, index) => (
              <article className="horizon-card" key={item.stage}>
                <div className="horizon-card-top">
                  <span>{item.stage}</span>
                  <i>0{index + 1}</i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="horizon-goal"><b>GOAL</b><span>{item.goal}</span></div>
              </article>
            ))}
          </div>

          <p className="vision-disclaimer">Sequenced product vision. Future capabilities are directional and not presented as currently available features.</p>
        </div>
      </section>

      <section className="section container" id="why-now">
        <div className="section-head">
          <p className="section-kicker">WHY NOW</p>
          <h2>Three shifts are converging around the client engagement.</h2>
        </div>

        <div className="why-now-grid">
          {whyNow.map((item) => (
            <article className="why-now-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="why-now-conclusion">
          <span>THE MISSING LAYER</span>
          <strong>People, AI and commercial work need shared operating context.</strong>
          <p>Aequum is being built around that context.</p>
        </div>
      </section>

      <section className="business-model-section">
        <div className="container business-model-grid">
          <div className="business-model-copy">
            <p className="section-kicker">HOW THE BUSINESS CAN SCALE</p>
            <h2>Designed as recurring software first, with expansion as the operating layer deepens.</h2>
            <p>
              The initial business model is planned around SaaS subscriptions. Over time, deeper workflow,
              intelligence and network capabilities can create additional revenue layers.
            </p>
          </div>

          <div className="revenue-layer-grid">
            {revenueLayers.map((item) => (
              <article className="revenue-layer" key={item.stage}>
                <span>{item.stage}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
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

      <section className="global-expansion-section">
        <div className="container global-expansion-grid">
          <div>
            <p className="section-kicker">GLOBAL BY DESIGN</p>
            <h2>Built in India. Designed for global service businesses. Expanding next into the UAE.</h2>
          </div>

          <div className="global-expansion-copy">
            <p>
              Aequum is being built for service businesses that already operate across clients, specialists,
              partners and markets. India gives us a strong operating base inside a deep digital and
              professional-services ecosystem. The UAE is a natural next market for validating Aequum with
              international businesses, cross-border service operators and globally distributed teams.
            </p>

            <div className="expansion-path" aria-label="Aequum expansion path">
              <article>
                <span>01</span>
                <b>INDIA</b>
                <strong>Build and validate</strong>
                <p>Develop the product close to a large services, technology and specialist-talent ecosystem.</p>
              </article>

              <i aria-hidden="true">→</i>

              <article>
                <span>02</span>
                <b>UAE</b>
                <strong>First international expansion market</strong>
                <p>Build design-partner, enterprise and ecosystem relationships across a highly international business market.</p>
              </article>

              <i aria-hidden="true">→</i>

              <article>
                <span>03</span>
                <b>GLOBAL</b>
                <strong>Scale the engagement layer</strong>
                <p>Expand wherever service businesses need to coordinate clients, talent, partners, AI and commercial work across borders.</p>
              </article>
            </div>

            <p className="expansion-note">
              The product vision is global. Geographic expansion will follow customer validation, partnerships
              and market readiness rather than being tied to a single city or programme.
            </p>
          </div>
        </div>
      </section>

      <section className="early-section" id="early-access">
        <div className="container early-grid">
          <div>
            <p className="section-kicker">DESIGN PARTNER PROGRAMME</p>
            <h2>Help shape the operating infrastructure for the next service economy.</h2>
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
