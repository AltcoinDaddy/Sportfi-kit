import { Link } from 'react-router-dom';
import { SportFiLogo } from '../components/SportFiLogo';
import { useState } from 'react';
import { useTheme } from '../App';
import { Sports3DStack } from '../components/Sports3DStack';
import { ArrowRight, Layers3, Zap, Cpu, Code2, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Guide', to: '/docs' },
  { label: 'Quickstart', to: '/docs/quickstart' },
  { label: 'Components', to: '/docs/components' },
  { label: 'Hooks', to: '/docs/hooks' },
];

const installTabs = [
  { label: 'npm', command: 'npm create sportfi-kit@latest' },
  { label: 'yarn', command: 'yarn create sportfi-kit' },
  { label: 'pnpm', command: 'pnpm create sportfi-kit' },
  { label: 'bun', command: 'bun create sportfi-kit' },
];

const featureCards = [
  {
    icon: Zap,
    title: 'Scaffold Chiliz Apps',
    text: 'Initialize production-ready sports apps on Chiliz Chain with pre-configured RPCs.',
  },
  {
    icon: Code2,
    title: 'Fan-Token Gating',
    text: 'Built-in components for verifying fan-token ownership across the Chiliz ecosystem.',
  },
  {
    icon: Layers3,
    title: 'Socios Integration',
    text: 'Choose from Socios-style prediction markets, wagering pools, or fan utilities.',
  },
  {
    icon: Cpu,
    title: 'Dragon8 Ready',
    text: 'Fully optimized for the latest Chiliz Chain tokenomics and governance models.',
  },
];

export function LandingPage() {
  const [activeTab, setActiveTab] = useState(installTabs[0]);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-zinc-700 dark:text-white font-sans selection:bg-emerald-500/30 flex justify-center transition-colors duration-300">
      <div className="w-full max-w-[1440px] border-x border-zinc-100 dark:border-white/10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="border-b border-zinc-200 dark:border-white/10 flex items-center justify-between h-16 px-6 lg:px-8 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-zinc-800 dark:text-white flex items-center gap-2"
            >
              <SportFiLogo className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              SPORTFI
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="https://www.npmjs.com/package/sportfi-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-red-500 transition-colors"
              title="View on NPM"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M0 7.334v8h6.666v1.332H12V15.334h12v-8H0zm6.666 6.666H5.334v-4H4V14H1.334V8.666h5.332v5.334zm4 0H9.334v-4H8V14H6.666V8.666h4v5.334zm12-4H20v4h-1.334v-4H17.334v4H16v-4h-1.334v4h-1.332v-5.334h8v5.334z" />
              </svg>
            </a>
          </div>
        </header>

        <main className="flex flex-col flex-grow">
          {/* Main Hero Container */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column */}
            <div className="flex flex-col border-b lg:border-r border-zinc-100 dark:border-white/10 p-8 pt-16 lg:p-16 xl:p-24 relative overflow-hidden bg-white dark:bg-[#0A0A0A]">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-800 dark:text-white leading-[1.05] mb-6 z-10 w-full max-w-[600px] text-balance">
                SportFi Kit Build mini-apps
                 on Chiliz Chain
              </h1>

              <p className="text-zinc-500 dark:text-[#a8b3c7] text-lg lg:text-xl max-w-[480px] mb-10 z-10 leading-relaxed font-medium">
                Fan tokens, predictions, votes — instant Socios Wallet connect for developers building the next generation of fan engagement.
              </p>

              <div className="flex flex-wrap gap-4 mb-12 z-10">
                <Link
                  to="/docs"
                  className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[15px] shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://github.com/AltcoinDaddy/Sportfi-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-xl bg-white dark:bg-transparent border border-zinc-100 dark:border-white/10 hover:border-zinc-200 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-white/5 shadow-sm transition-all text-zinc-800 dark:text-white font-semibold text-[15px]"
                >
                  View GitHub
                </a>
              </div>

              {/* Terminal mock */}
              <div className="rounded-xl border border-zinc-100 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-xl dark:shadow-none overflow-hidden z-10 max-w-[480px]">
                <div className="flex items-center gap-6 px-5 pt-3 text-[13px] text-zinc-400 dark:text-zinc-500 font-medium bg-white dark:bg-transparent border-b border-zinc-100 dark:border-transparent">
                  {installTabs.map((tab) => (
                    <span
                      key={tab.label}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-2 cursor-pointer transition-all border-b-2 ${
                        activeTab.label === tab.label
                          ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                          : 'border-transparent hover:text-zinc-600 dark:hover:text-zinc-300'
                      }`}
                    >
                      {tab.label}
                    </span>
                  ))}
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-3 mb-2 opacity-50">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 rounded-full bg-amber-400"></div>
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-emerald-500">$</span>
                    <span className="text-zinc-600 dark:text-zinc-300">{activeTab.command}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Graphics) */}
            <div className="hidden lg:flex flex-col items-center justify-center border-b border-zinc-100 dark:border-white/10 relative p-16 bg-white dark:bg-[#0A0A0A] overflow-hidden min-h-[600px]">
              <Sports3DStack />
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="w-full flex flex-col border-b border-zinc-100 dark:border-white/10">
            <div className="w-full px-8 lg:px-12 py-8 border-b border-zinc-100 dark:border-white/10 text-center">
              <h2 className="text-zinc-500 dark:text-zinc-400 font-bold text-xs uppercase tracking-[0.2em]">
                Powering the Chiliz Ecosystem
              </h2>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100 dark:divide-white/10 bg-white dark:bg-[#060608]">
              {[
                { name: 'Socios.com', domain: 'socios.com' },
                { name: 'Chiliz Chain', domain: 'chiliz.com' },
                { name: 'Dragon8', domain: 'chiliz.com' },
                { name: 'FanTokens', domain: 'fantokens.com' },
                { name: 'FC Barcelona', domain: 'fcbarcelona.com' },
                { name: 'PSG', domain: 'psg.fr' },
              ].map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col items-center justify-center py-10 px-4 hover:bg-white dark:hover:bg-white/[0.04] transition-all cursor-default group gap-5"
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-zinc-50 dark:bg-white/5 rounded-xl p-2 group-hover:bg-zinc-100 dark:group-hover:bg-white/10 transition-colors overflow-hidden">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${platform.domain}&sz=128`}
                      alt={platform.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            platform.name,
                          )}&background=10b981&color=fff&bold=true`;
                      }}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-zinc-400 dark:text-zinc-500 font-bold text-[10px] uppercase tracking-[0.1em] group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features area */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100 dark:divide-white/10 border-b border-zinc-100 dark:border-white/10">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="p-8 lg:p-10 xl:p-12 hover:bg-zinc-50/50 dark:hover:bg-white/[0.02] transition-colors group bg-white dark:bg-transparent"
              >
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-white/[0.03] w-max border border-emerald-100 dark:border-white/5 group-hover:border-emerald-200 dark:group-hover:border-white/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-emerald-600 dark:text-zinc-400" />
                </div>
                <h3 className="text-zinc-800 dark:text-zinc-100 font-bold text-[18px] mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[15px] leading-relaxed font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-zinc-100 dark:border-white/10 p-8 text-center bg-white dark:bg-[#0A0A0A]">
          <p className="text-zinc-400 text-sm">
            © 2026 SportFi Kit. Built for the Chiliz Ecosystem.
          </p>
        </footer>
      </div>
    </div>
  );
}
