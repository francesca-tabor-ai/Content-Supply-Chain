export function CommandCentre() {
  return (
    <div>
      <header className="page-header">
        <div className="accent-bar" aria-hidden />
        <h1 className="h1">Programme Command Centre</h1>
        <p className="subtitle">
          View all active toolbox programmes with milestones, RAG status, and task timelines in one place.
        </p>
      </header>
      <section className="card">
        <h2 className="card-title">Programmes</h2>
        <p className="card-desc">
          Gantt and card view, filters by toolbox, phase, owner, and at-risk flag. Drill into any programme for the full timeline.
        </p>
      </section>
    </div>
  )
}
