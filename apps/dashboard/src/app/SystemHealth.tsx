export function SystemHealth() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">System Health</h1>
        <p className="subtitle">
          Integration layer. Metadata completeness, DAM sync, CMS publishing success, tagging accuracy.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">91%</div>
          <div className="metric-label">Metadata completeness</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">DAM synchronization</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">CMS publishing success</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">3%</div>
          <div className="metric-label">Tagging errors</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Integration Health</h2>
        <p className="card-desc">
          Metadata completeness: 91%. Tagging errors: 3%.
        </p>
      </section>
    </div>
  )
}
