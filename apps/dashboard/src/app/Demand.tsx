export function Demand() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Demand Signal</h1>
        <p className="subtitle">
          What content the organization needs. Detects content shortages before production starts.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">47</div>
          <div className="metric-label">Campaigns planned</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">128</div>
          <div className="metric-label">Content briefs created</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">89</div>
          <div className="metric-label">Market requests</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">24</div>
          <div className="metric-label">Channel demand</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">12</div>
          <div className="metric-label">Content gap index</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Demand Heatmap</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          By market, campaign, needed assets, and gap.
        </p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Market</th>
              <th>Campaign</th>
              <th>Needed Assets</th>
              <th>Gap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>US</td>
              <td>Product launch</td>
              <td className="num">24</td>
              <td className="num"><span className="badge warn">6</span></td>
            </tr>
            <tr>
              <td>DE</td>
              <td>Brand awareness</td>
              <td className="num">12</td>
              <td className="num">0</td>
            </tr>
            <tr>
              <td>JP</td>
              <td>Education</td>
              <td className="num">10</td>
              <td className="num"><span className="badge warn">4</span></td>
            </tr>
          </tbody>
        </table>
        <div className="insight-box">
          <p>Detects content shortages before production starts.</p>
        </div>
      </section>
    </div>
  )
}
