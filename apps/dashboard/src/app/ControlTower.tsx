import { Link } from 'react-router-dom'
import { FlowMap } from '../components/FlowMap'

const overviewSections = [
  { to: '/content-production/pipeline', title: 'Supply chain health', desc: 'Overall pipeline status and capacity' },
  { to: '/content-production/pipeline', title: 'Pipeline overview', desc: 'Stage-by-stage flow and throughput' },
  { to: '/insights/supply-chain-intelligence', title: 'Bottlenecks', desc: 'Bottleneck detection and impact' },
  { to: '/distribution/campaign-launch', title: 'Campaign readiness', desc: 'Active campaigns and launch schedules' },
  { to: '/localization/market-readiness', title: 'Market readiness', desc: 'Market rollout status and timelines' },
  { to: '/measurement/content-performance', title: 'Performance snapshot', desc: 'Content effectiveness and ROI' },
]

export function ControlTower() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Home</h1>
        <p className="subtitle">
          Executive overview of the entire content supply chain.
        </p>
      </header>

      <section className="card flow-map-card">
        <h2 className="card-title">Pipeline overview</h2>
        <p className="card-desc" style={{ marginBottom: 'var(--space-6)' }}>
          Live pipeline visualization. Red nodes indicate bottlenecks.
        </p>
        <FlowMap />
      </section>

      <div className="control-tower-grid">
        {overviewSections.map(({ to, title, desc }) => (
          <Link key={title} to={to} className="tower-card">
            <h3 className="tower-card-title">{title}</h3>
            <p className="tower-card-desc">{desc}</p>
          </Link>
        ))}
      </div>

      <section className="card" style={{ marginTop: 'var(--space-8)' }}>
        <h2 className="card-title">Predictive delivery risk</h2>
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
