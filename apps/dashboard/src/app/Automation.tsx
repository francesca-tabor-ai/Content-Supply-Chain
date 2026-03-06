export function Automation() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">AI & Automation Monitoring</h1>
        <p className="subtitle">
          How AI improves the supply chain. AI-generated assets, time saved, automation adoption, cost savings.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">38%</div>
          <div className="metric-label">AI assisted assets</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">27%</div>
          <div className="metric-label">Production time reduction</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">42%</div>
          <div className="metric-label">Automation adoption</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">Cost savings</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">AI & Automation Impact</h2>
        <p className="card-desc">
          AI assisted assets: 38%. Production time reduction: 27%.
        </p>
      </section>
    </div>
  )
}
