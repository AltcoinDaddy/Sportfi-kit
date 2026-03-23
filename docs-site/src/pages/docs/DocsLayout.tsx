import { useState } from 'react';
import { useTheme } from '../../App';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { SportFiLogo } from '../../components/SportFiLogo';
import {
  BookOpen,
  Zap,
  Layers,
  Code2,
  Cpu,
  Boxes,
  FileCode2,
  Sun,
  Moon,
  Github,
  Menu,
  X,
} from 'lucide-react';

const sidebarSections = [
  {
    title: 'Getting Started',
    links: [
      { to: '/docs', label: 'Introduction', end: true, icon: BookOpen },
      { to: '/docs/quickstart', label: 'Quickstart', end: false, icon: Zap },
      { to: '/docs/concepts', label: 'Core Concepts', end: false, icon: Layers },
    ],
  },
  {
    title: 'Guides',
    links: [
      { to: '/docs/examples', label: 'Examples', end: false, icon: FileCode2 },
      { to: '/docs/socios', label: 'Socios Integration', end: false, icon: Boxes },
    ],
  },
  {
    title: 'API Reference',
    links: [
      { to: '/docs/components', label: 'Components', end: false, icon: Cpu },
      { to: '/docs/hooks', label: 'Hooks', end: false, icon: Code2 },
      { to: '/docs/smart-contracts', label: 'Smart Contracts', end: false, icon: Boxes },
    ],
  },
];

const tocLinks = [
  { href: '#overview', label: 'Overview' },
  { href: '#prerequisites', label: 'Prerequisites' },
  { href: '#installation', label: 'Installation' },
  { href: '#philosophy', label: 'Core Philosophy' },
];

export function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-zinc-700 dark:text-white transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md z-[60] flex items-center justify-center">
        <div className="w-full max-w-[1440px] px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center gap-2.5 group">
              <SportFiLogo className="h-8 w-8 text-emerald-600 dark:text-emerald-500 group-hover:scale-110 transition-transform" />
              <span className="font-extrabold text-lg tracking-tight text-zinc-800 dark:text-white">
                SportFi{' '}
                <span className="text-emerald-600 dark:text-emerald-500 font-medium ml-0.5">
                  Docs
                </span>
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="https://www.npmjs.com/package/sportfi-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-red-500 transition-colors"
              title="View on NPM"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M0 7.334v8h6.666v1.332H12V15.334h12v-8H0zm6.666 6.666H5.334v-4H4V14H1.334V8.666h5.332v5.334zm4 0H9.334v-4H8V14H6.666V8.666h4v5.334zm12-4H20v4h-1.334v-4H17.334v4H16v-4h-1.334v4h-1.332v-5.334h8v5.334z" />
              </svg>
            </a>
            <a
              href="https://github.com/AltcoinDaddy/Sportfi-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all"
              title="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <div className="w-full max-w-[1440px] mx-auto pt-16 flex">
        <aside
          className={`fixed inset-0 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] w-72 bg-white dark:bg-[#0A0A0A] lg:bg-transparent border-r lg:border-r-0 border-zinc-200 dark:border-white/10 z-50 lg:z-40 transition-transform duration-300 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="h-full overflow-y-auto pt-8 pb-12 px-6 lg:pl-12 lg:pr-8 scrollbar-hide">
            <div className="flex justify-end lg:hidden mb-4">
              <button className="p-2 text-zinc-500" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-8" aria-label="Documentation sections">
              {sidebarSections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500 mb-4 ml-3">
                    {section.title}
                  </h2>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          end={link.end}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg text-[14px] font-medium transition-all ${
                              isActive
                                ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-100'
                            }`
                          }
                          onClick={() => setSidebarOpen(false)}
                        >
                          <link.icon className="h-4 w-4 shrink-0 opacity-80" />
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-grow min-w-0 py-12 px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[800px] mx-auto xl:ml-[10%] 2xl:ml-[15%]">
            <Outlet />
          </div>
        </main>

        <aside className="hidden xl:block w-64 pt-12 sticky top-16 h-[calc(100vh-64px)] px-4">
          <div className="sticky top-12 border-l border-zinc-100 dark:border-white/5 pl-6">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 mb-6">
              On this page
            </h2>
            <ul className="space-y-4">
              {tocLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-[13px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
