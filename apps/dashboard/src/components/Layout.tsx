import { Link, NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Control Tower' },
  { to: '/demand', label: 'Demand Signal' },
  { to: '/supply', label: 'Supply Capacity' },
  { to: '/flow', label: 'Flow Pipeline' },
  { to: '/localization', label: 'Localization' },
  { to: '/reuse', label: 'Reuse & Modular' },
  { to: '/performance', label: 'Performance & ROI' },
  { to: '/governance', label: 'Governance' },
  { to: '/automation', label: 'AI & Automation' },
  { to: '/system-health', label: 'System Health' },
]

export function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Link to="/" className="sidebar-brand">
          CSC Control Tower
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
