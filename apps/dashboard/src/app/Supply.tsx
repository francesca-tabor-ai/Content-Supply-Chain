export function Supply() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Supply Capacity</h1>
        <p className="subtitle">
          How much content production capacity exists. Capacity vs demand and creator workload.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">186</div>
          <div className="metric-label">Assets in production</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">260</div>
          <div className="metric-label">Production capacity</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">94%</div>
          <div className="metric-label">Creator workload</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">38%</div>
          <div className="metric-label">Automation rate</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">Cost per asset</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Capacity vs Demand</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }} />
        <div className="metric-grid" style={{ marginBottom: 0 }}>
          <div className="metric-block">
            <div className="metric-value">320</div>
            <div className="metric-label">Demand (assets)</div>
          </div>
          <div className="metric-block">
            <div className="metric-value">260</div>
            <div className="metric-label">Supply capacity</div>
          </div>
          <div className="metric-block">
            <div className="metric-value" style={{ color: 'var(--color-accent)' }}>60</div>
            <div className="metric-label">Shortage</div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="card-title">Creator Load Map</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          Team capacity, assigned, and utilization. Bottlenecks highlighted.
        </p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Capacity</th>
              <th>Assigned</th>
              <th>Utilization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Design</td>
              <td className="num">80</td>
              <td className="num">92</td>
              <td><span className="badge danger">115%</span></td>
            </tr>
            <tr>
              <td>Copy</td>
              <td className="num">100</td>
              <td className="num">78</td>
              <td><span className="badge success">78%</span></td>
            </tr>
            <tr>
              <td>Video</td>
              <td className="num">40</td>
              <td className="num">51</td>
              <td><span className="badge danger">127%</span></td>
            </tr>
          </tbody>
        </table>
        <div className="insight-box warn">
          <p>Design and Video are over capacity — instant bottleneck visibility.</p>
        </div>
      </section>
    </div>
  )
}
