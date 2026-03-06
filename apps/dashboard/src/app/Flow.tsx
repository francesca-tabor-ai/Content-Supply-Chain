export function Flow() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Flow Pipeline</h1>
        <p className="subtitle">
          How fast content moves through the supply chain. Strategy → Brief → Creation → Review → Approval → Localization → Distribution.
        </p>
      </header>

      <div className="metric-grid">
        <div className="metric-block">
          <div className="metric-value">4.2d</div>
          <div className="metric-label">Avg cycle time</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">21</div>
          <div className="metric-label">Assets blocked</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">8%</div>
          <div className="metric-label">Rework rate</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">94%</div>
          <div className="metric-label">SLA compliance</div>
        </div>
        <div className="metric-block">
          <div className="metric-value">42%</div>
          <div className="metric-label">Automation coverage</div>
        </div>
      </div>

      <section className="card">
        <h2 className="card-title">Pipeline Flow Board</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          Stage, asset count, average time, and blocked items.
        </p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Assets</th>
              <th>Avg Time</th>
              <th>Blocked</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brief</td>
              <td className="num">23</td>
              <td className="num">2d</td>
              <td className="num"><span className="badge warn">3</span></td>
            </tr>
            <tr>
              <td>Creation</td>
              <td className="num">112</td>
              <td className="num">6d</td>
              <td className="num"><span className="badge danger">8</span></td>
            </tr>
            <tr>
              <td>Review</td>
              <td className="num">45</td>
              <td className="num">3d</td>
              <td className="num"><span className="badge danger">6</span></td>
            </tr>
            <tr>
              <td>Localization</td>
              <td className="num">67</td>
              <td className="num">5d</td>
              <td className="num"><span className="badge warn">4</span></td>
            </tr>
          </tbody>
        </table>
        <div className="insight-box warn">
          <p>Review stage slowing pipeline by 2.4 days — bottleneck indicator.</p>
        </div>
      </section>
    </div>
  )
}
