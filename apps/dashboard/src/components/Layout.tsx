import { Link, NavLink, Outlet } from 'react-router-dom'
import { navSections } from '../config/nav'

export function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Link to="/" className="sidebar-brand">
          CSC Dashboard
        </Link>
        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          {navSections.map((section) => (
            <div key={section.label} className="sidebar-group">
              <span className="sidebar-group-label">{section.label}</span>
              {section.children.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `sidebar-link sidebar-link-nested ${isActive ? 'active' : ''}`}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
