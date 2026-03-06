import { useLocation } from 'react-router-dom'
import { sectionTitles } from '../config/nav'

export function SectionPage() {
  const { pathname } = useLocation()
  const title = sectionTitles[pathname] ?? pathname.slice(1).replace(/\//g, ' / ')

  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">{title}</h1>
        <p className="subtitle">
          Section under the Content Supply Chain Dashboard. Configure content and metrics here.
        </p>
      </header>
      <section className="card">
        <h2 className="card-title">Overview</h2>
        <p className="card-desc">
          This area will show section-specific metrics, tables, and controls once connected to the backend.
        </p>
      </section>
    </div>
  )
}
