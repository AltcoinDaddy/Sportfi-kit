import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const sidebarSections = [
  {
    title: 'Getting Started',
    links: [
      { to: '/docs', label: 'Introduction', exact: true },
      { to: '/docs/quickstart', label: 'Quickstart' },
      { to: '/docs/concepts', label: 'Core Concepts' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { to: '/docs/examples', label: 'Examples' },
      { to: '/docs/socios', label: 'Socios Integration' },
    ],
  },
  {
    title: 'API Reference',
    links: [
      { to: '/docs/components', label: 'Components' },
      { to: '/docs/hooks', label: 'Hooks' },
      { to: '/docs/smart-contracts', label: 'Smart Contracts' },
    ],
  },
];

export function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="docs-root">
      {/* Header */}
      <header className="docs-header">
        <div className="docs-header-inner">
          <div className="docs-header-left">
            <button
              className="docs-menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </button>
            <NavLink to="/" className="docs-logo-link">
              <img src="/logo.png" alt="SportFi Kit" className="docs-logo-img" />
              <span className="docs-logo-text">SportFi<span className="docs-logo-accent">.docs</span></span>
            </NavLink>
          </div>
          <div className="docs-header-right">
            <a
              href="https://github.com/AltcoinDaddy/Sportfi-kit"
              className="docs-github-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className="docs-body">
        {/* Sidebar */}
        <aside className={`docs-sidebar ${sidebarOpen ? 'docs-sidebar-open' : ''}`}>
          <nav className="docs-sidebar-nav">
            {sidebarSections.map((section) => (
              <div key={section.title} className="docs-sidebar-section">
                <h3 className="docs-sidebar-title">{section.title}</h3>
                <ul className="docs-sidebar-list">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.exact}
                        className={({ isActive }) =>
                          `docs-sidebar-link ${isActive ? 'docs-sidebar-link-active' : ''}`
                        }
                        onClick={() => setSidebarOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="docs-sidebar-overlay" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="docs-content">
          <Outlet />
        </main>

        {/* Table of Contents (Right Sidebar) */}
        <aside className="docs-toc">
          <div className="docs-toc-inner">
            <h4 className="docs-toc-title">On this page</h4>
            <ul className="docs-toc-list">
              <li><a href="#installation">Installation</a></li>
              <li><a href="#setup">Setup</a></li>
              <li><a href="#usage">Usage</a></li>
              <li><a href="#examples">Examples</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
