export function Reuse() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Reuse & Modular Content</h1>
        <p className="subtitle">
          Critical for modern content supply chains. Global asset reuse, modular usage, adaptation cost vs new production.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">46%</div>
          <div className="metric-label">Global asset reuse rate</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">38%</div>
          <div className="metric-label">Modular asset usage</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">Adaptation vs new cost</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Content Reuse Rate</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          Goal for mature systems: 60–70% reuse.
        </p>
        <div className="bar-chart">
          <div className="bar-row">
            <span className="bar-label">New production</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: '54%' }} />
            </div>
            <span className="bar-value">54%</span>
          </div>
          <div className="bar-row">
            <span className="bar-label">Adapted</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: '46%', background: 'var(--color-accent)' }} />
            </div>
            <span className="bar-value">46%</span>
          </div>
        </div>
        <div className="insight-box">
          <p>Target 60–70% reuse to reduce cost and speed time-to-market.</p>
        </div>
      </section>
    </div>
  )
}
