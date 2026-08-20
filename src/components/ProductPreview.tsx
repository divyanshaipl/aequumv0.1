export function ProductPreview() {
  return (
    <div className="product-shell" aria-label="Conceptual Aequum product interface">
      <div className="product-topbar">
        <div className="mini-mark">A</div>
        <div className="product-search">Search across your operating system…</div>
        <div className="avatar">DS</div>
      </div>
      <div className="product-body">
        <aside className="product-sidebar" aria-hidden="true">
          <span className="side-active">Overview</span>
          <span>Clients</span>
          <span>Talent</span>
          <span>Work</span>
          <span>Commercials</span>
        </aside>
        <div className="product-main">
          <div className="preview-heading">
            <div>
              <p>WORKSPACE</p>
              <h3>Operations, aligned.</h3>
            </div>
            <span className="concept-pill">Product concept</span>
          </div>
          <div className="metric-grid">
            <div><span>Active work</span><strong>18</strong><small>Across 7 clients</small></div>
            <div><span>Specialists</span><strong>34</strong><small>12 currently engaged</small></div>
            <div><span>Commercial flow</span><strong>₹8.4L</strong><small>Current cycle</small></div>
          </div>
          <div className="workflow-card">
            <div className="workflow-labels"><span>Opportunity</span><span>Assemble</span><span>Execute</span><span>Settle</span></div>
            <div className="equilibrium-track"><i /><i /><i /><i /></div>
            <div className="work-list">
              <div><b>Northstar</b><span>Scope approved</span><em>Ready</em></div>
              <div><b>Atlas</b><span>Team assembled</span><em>In progress</em></div>
              <div><b>Fieldwork</b><span>Invoice pending</span><em>Action</em></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
