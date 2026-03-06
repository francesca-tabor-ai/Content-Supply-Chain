import { Link } from 'react-router-dom'
import { FlowMap } from '../components/FlowMap'

const sections = [
  { to: '/demand', title: 'Demand Signal', desc: 'Content the organization needs' },
  { to: '/supply', title: 'Supply Capacity', desc: 'Production capacity & workload' },
  { to: '/flow', title: 'Flow Pipeline', desc: 'Pipeline health & bottlenecks' },
  { to: '/localization', title: 'Localization Intelligence', desc: 'Global rollout readiness' },
  { to: '/reuse', title: 'Reuse & Modular Content', desc: 'Asset reuse & adaptation' },
  { to: '/performance', title: 'Performance & ROI', desc: 'Content ROI & engagement' },
  { to: '/governance', title: 'Governance', desc: 'Compliance & brand' },
  { to: '/automation', title: 'AI & Automation', desc: 'Automation adoption & savings' },
  { to: '/system-health', title: 'System Health', desc: 'Metadata, DAM, CMS sync' },
]

export function ControlTower() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Content Supply Chain Control Tower</h1>
        <p className="subtitle">
          Four operational layers: Demand → Supply → Flow → Impact. Real-time visibility across the content pipeline.
        </p>
      </header>

      <section className="card flow-map-card">
        <h2 className="card-title">Content Supply Chain Flow Map</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-6)' }}>
          Live pipeline visualization. Red nodes indicate bottlenecks.
        </p>
        <FlowMap />
      </section>

      <div className="control-tower-grid">
        {sections.map(({ to, title, desc }) => (
          <Link key={to} to={to} className="tower-card">
            <h3 className="tower-card-title">{title}</h3>
            <p className="tower-card-desc">{desc}</p>
          </Link>
        ))}
      </div>

      <section className="card" style={{ marginTop: 'var(--space-8)' }}>
        <h2 className="card-title">Predictive Delivery Risk</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-4)' }}>
          At-risk campaigns before they slip.
        </p>
        <div className="insight-box warn">
          <p>
            Product launch campaign at risk — Needed: 48 assets. Ready by launch: 39. Probability of delay: 72%.
          </p>
        </div>
      </section>
    </div>
  )
}
