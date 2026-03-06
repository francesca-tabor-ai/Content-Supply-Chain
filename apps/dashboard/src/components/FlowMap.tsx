import { Link } from 'react-router-dom'

const stages = [
  { id: 'strategy', label: 'Strategy', count: 20, bottleneck: false },
  { id: 'brief', label: 'Brief', count: 23, bottleneck: false },
  { id: 'creation', label: 'Creation', count: 112, bottleneck: true },
  { id: 'review', label: 'Review', count: 45, bottleneck: true },
  { id: 'approval', label: 'Approval', count: 38, bottleneck: false },
  { id: 'localization', label: 'Localization', count: 67, bottleneck: false },
  { id: 'distribution', label: 'Distribution', count: 38, bottleneck: false },
]

export function FlowMap() {
  return (
    <div className="flow-map">
      <div className="flow-map-stages">
        {stages.map((stage, i) => (
          <div key={stage.id} className="flow-map-cell">
            <Link
              to="/content-production/pipeline"
              className={`flow-map-node ${stage.bottleneck ? 'bottleneck' : ''}`}
              title={stage.bottleneck ? 'Bottleneck — see Content Pipeline' : ''}
            >
              <span className="flow-map-label">{stage.label}</span>
              <span className="flow-map-count">{stage.count}</span>
            </Link>
            {i < stages.length - 1 && (
              <div className="flow-map-arrow" aria-hidden>
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="flow-map-legend">
        <span className="flow-map-legend-dot bottleneck" /> Bottleneck
      </p>
    </div>
  )
}
