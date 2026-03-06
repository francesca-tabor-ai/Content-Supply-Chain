export function Localization() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Localization Intelligence</h1>
        <p className="subtitle">
          Global rollout readiness. Market readiness score, localization speed, and transcreation efficiency.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">77%</div>
          <div className="metric-label">Avg market readiness</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">4.1d</div>
          <div className="metric-label">Localization speed</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">23</div>
          <div className="metric-label">Market backlog</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Market Completion Map</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }} />
        <div className="bar-chart">
          {[
            { market: 'US', pct: 100 },
            { market: 'UK', pct: 95 },
            { market: 'DE', pct: 80 },
            { market: 'FR', pct: 72 },
            { market: 'JP', pct: 40 },
          ].map(({ market, pct }) => (
            <div key={market} className="bar-row">
              <span className="bar-label">{market}</span>
              <div className="bar-track">
                <div
                  className={`bar-fill ${pct < 70 ? 'warn' : ''}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="bar-value">{pct}%</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="card-title">Localization SLA</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          Average turnaround by region.
        </p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Market</th>
              <th>Avg Turnaround</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>EU</td><td className="num">3 days</td></tr>
            <tr><td>APAC</td><td className="num">6 days</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
