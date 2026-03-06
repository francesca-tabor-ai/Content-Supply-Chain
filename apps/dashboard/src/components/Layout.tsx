import { Link, NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Command Centre' },
  { to: '/assets', label: 'Asset Hub' },
  { to: '/playbook', label: 'Playbook' },
  { to: '/briefs', label: 'Briefs' },
]

export function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Link to="/" className="sidebar-brand">
          CSC Dashboard
        </Link>
        <nav className="sidebar-nav">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
