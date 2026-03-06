export function Governance() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Governance & Compliance</h1>
        <p className="subtitle">
          Essential for regulated industries. Compliance approval, expired assets, brand compliance rate.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">6</div>
          <div className="metric-label">Assets awaiting compliance</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">18</div>
          <div className="metric-label">Expiring in 30 days</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">98%</div>
          <div className="metric-label">Brand compliance rate</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Compliance Overview</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }} />
        <p className="metric-value" style={{ marginBottom: 'var(--space-2)' }}>Compliance risk: <span className="badge success">LOW</span></p>
        <p className="card-desc">Assets expiring in 30 days: 18</p>
      </section>
    </div>
  )
}
