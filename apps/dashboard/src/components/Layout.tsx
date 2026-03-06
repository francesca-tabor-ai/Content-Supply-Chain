import { Link, Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', gap: '1rem' }}>
        <Link to="/">Command Centre</Link>
        <Link to="/assets">Asset Hub</Link>
        <Link to="/playbook">Playbook</Link>
        <Link to="/briefs">Briefs</Link>
      </nav>
      <main style={{ padding: '1rem', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}
