export function Performance() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Performance & ROI</h1>
        <p className="subtitle">
          Which assets justify the supply chain investment. Engagement, revenue influenced, content ROI.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">4.2x</div>
          <div className="metric-label">Avg content ROI</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">Revenue influenced</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">—</div>
          <div className="metric-label">Top performing modules</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Content ROI Leaderboard</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          Engagement per asset, by market.
        </p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Market</th>
              <th>ROI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Launch Video</td>
              <td>US</td>
              <td className="num">8.2x</td>
            </tr>
            <tr>
              <td>Product Guide</td>
              <td>DE</td>
              <td className="num">6.1x</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}
