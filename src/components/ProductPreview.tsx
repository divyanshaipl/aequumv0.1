type ProductPreviewProps = {
  compact?: boolean
}

export function ProductPreview({ compact = false }: ProductPreviewProps) {
  return (
    <div className={`product-shell ${compact ? 'product-shell-compact' : ''}`.trim()} aria-label="Conceptual Aequum engagement workspace">
      <div className="product-topbar">
        <div className="mini-mark">A</div>
        <div className="product-search">Search clients, people, scopes, approvals...</div>
        <div className="avatar">DS</div>
      </div>

      <div className="product-body">
        <aside className="product-sidebar" aria-hidden="true">
          <span>Portfolio</span>
          <span className="side-active">Engagements</span>
          <span>Clients</span>
          <span>Talent</span>
          <span>Commercials</span>
        </aside>

        <div className="product-main">
          <div className="preview-heading">
            <div>
              <p>CLIENT ENGAGEMENT / NORTHSTAR</p>
              <h3>Brand launch programme</h3>
            </div>
            <span className="concept-pill">Product concept</span>
          </div>

          <div className="engagement-progress" aria-label="Engagement progress">
            <div className="progress-step complete"><i>✓</i><span>Brief</span></div>
            <div className="progress-step complete"><i>✓</i><span>Assemble</span></div>
            <div className="progress-step active"><i>3</i><span>Structure</span></div>
            <div className="progress-step"><i>4</i><span>Execute</span></div>
            <div className="progress-step"><i>5</i><span>Settle</span></div>
          </div>

          <div className="engagement-workspace">
            <div className="workspace-primary">
              <div className="workspace-card brief-card">
                <div className="workspace-card-head">
                  <span>CLIENT BRIEF</span>
                  <b>Approved</b>
                </div>
                <h4>Launch a new consumer brand across paid and owned channels.</h4>
                <div className="brief-meta">
                  <span><small>Target launch</small><b>6 weeks</b></span>
                  <span><small>Budget band</small><b>₹8L - ₹12L</b></span>
                  <span><small>Client owner</small><b>Maya K.</b></span>
                </div>
              </div>

              <div className="workspace-card team-card">
                <div className="workspace-card-head">
                  <span>TEAM ASSEMBLY</span>
                  <b className="ai-badge">AI assisted</b>
                </div>
                <div className="talent-list">
                  <div><i>AK</i><span><b>Arjun K.</b><small>Brand strategy · 92% fit</small></span><em>Available</em></div>
                  <div><i>NP</i><span><b>Naina P.</b><small>Paid media · 89% fit</small></span><em>Available</em></div>
                  <div><i>RS</i><span><b>Rhea S.</b><small>Design systems · 86% fit</small></span><em>2 days</em></div>
                </div>
              </div>
            </div>

            <div className="workspace-secondary">
              <div className="workspace-card readiness-card">
                <div className="workspace-card-head">
                  <span>ENGAGEMENT READINESS</span>
                </div>
                <div className="readiness-score"><strong>72%</strong><span>ready to launch</span></div>
                <div className="readiness-list">
                  <span className="done">✓ Brief approved</span>
                  <span className="done">✓ Core team selected</span>
                  <span>○ Scope approval pending</span>
                  <span>○ Payment milestone missing</span>
                </div>
              </div>

              <div className="workspace-card ai-card">
                <span className="ai-label">AEQUUM ASSIST</span>
                <p>Two commercial dependencies should be resolved before kickoff.</p>
                <button type="button" tabIndex={-1}>Review dependencies</button>
              </div>
            </div>
          </div>

          <div className="product-footnote">Conceptual interface for product communication. Final product design is in development.</div>
        </div>
      </div>
    </div>
  )
}
