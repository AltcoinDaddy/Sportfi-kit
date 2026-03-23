import { motion } from 'framer-motion';
import {
  ArrowRight,
  Box,
  Code2,
  Cpu,
  Github,
  Layers3,
  Sparkles,
  SquareTerminal,
  Zap,
} from 'lucide-react';

const installTabs = [
  { label: 'npm', command: '$ npm create sportfi-kit@latest' },
  { label: 'yarn', command: '$ yarn create sportfi-kit' },
  { label: 'pnpm', command: '$ pnpm create sportfi-kit' },
  { label: 'bun', command: '$ bun create sportfi-kit' },
];

const featureCards = [
  {
    icon: Zap,
    title: 'Instant Server Start',
    description:
      'Spin up docs and templates quickly with a lightweight, responsive developer experience.',
  },
  {
    icon: Code2,
    title: 'Rich Features Out of the Box',
    description:
      'TypeScript, React, CSS, and wallet-aware UI patterns are ready for your SportFi workflows.',
  },
  {
    icon: Layers3,
    title: 'Composable Foundation',
    description:
      'Mix pages, hooks, docs, and components into a clean structure that scales with your app.',
  },
  {
    icon: Cpu,
    title: 'Optimized Build',
    description:
      'Ship production-ready docs with cleaner content architecture and polished visual hierarchy.',
  },
];

const ecosystemStats = [
  { value: '8+', label: 'Docs sections' },
  { value: '5+', label: 'Starter templates' },
  { value: '100%', label: 'Open source' },
];

const bandItems = [
  {
    eyebrow: 'Developer Experience',
    title: 'A clean foundation to build on',
    text:
      'SportFi Kit keeps the docs site focused on fast navigation, useful examples, and a modern interface that feels deliberate.',
  },
  {
    eyebrow: 'UI System',
    title: 'Split hero, content bands, and grid sections',
    text:
      'The layout mirrors the visual rhythm of vite.dev with a prominent hero panel and supporting information bands below.',
  },
  {
    eyebrow: 'Product Focus',
    title: 'Made for sports apps and fan engagement',
    text:
      'Use the docs site to showcase prediction markets, wagering pools, and fan-token experiences without visual clutter.',
  },
];

export const Hero = () => {
  return (
    <section className="hero-vite">
      <div className="hero-vite-grid" aria-hidden="true" />
      <div className="hero-vite-glow hero-vite-glow-left" aria-hidden="true" />
      <div className="hero-vite-glow hero-vite-glow-right" aria-hidden="true" />

      <div className="landing-main">
        <div className="hero-shell">
          <div className="hero-split">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div className="hero-badge">
                <Sparkles className="h-4 w-4" />
                <span>SportFi Kit docs</span>
              </div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                The docs site for building
                <br />
                sports apps faster.
              </motion.h1>

              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              >
                SportFi Kit gives you a polished documentation experience for creating prediction
                markets, wagering pools, and fan-token features with a modern Vite-inspired visual
                rhythm.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
              >
                <a href="/docs" className="btn-primary">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/AltcoinDaddy/Sportfi-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  View source
                </a>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
              >
                {ecosystemStats.map((item) => (
                  <div key={item.label} className="hero-stat">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
            >
              <div className="hero-panel hero-panel-main">
                <div className="hero-panel-topbar">
                  <span className="hero-dot hero-dot-red" />
                  <span className="hero-dot hero-dot-yellow" />
                  <span className="hero-dot hero-dot-green" />
                  <span className="hero-panel-title">sportfi-kit</span>
                </div>

                <div className="hero-panel-body">
                  <div className="hero-panel-grid">
                    <div className="hero-panel-card">
                      <SquareTerminal className="h-5 w-5" />
                      <span>npm create sportfi-kit@latest</span>
                    </div>
                    <div className="hero-panel-card">
                      <Box className="h-5 w-5" />
                      <span>templates, hooks, components</span>
                    </div>
                    <div className="hero-panel-card">
                      <Layers3 className="h-5 w-5" />
                      <span>docs, layout, content bands</span>
                    </div>
                  </div>

                  <div className="hero-terminal-snippet">
                    <div className="hero-terminal-tabs" aria-label="Package managers">
                      {installTabs.map((tab) => (
                        <span key={tab.label} className="hero-terminal-tab">
                          {tab.label}
                        </span>
                      ))}
                    </div>

                    <pre className="hero-terminal-code">
                      {installTabs[0].command}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero-bands">
          {bandItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="hero-band"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.06, ease: 'easeOut' }}
            >
              <span className="hero-band-eyebrow">{item.eyebrow}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="hero-features-wrap">
          <div className="hero-features-header">
            <span className="hero-features-kicker">Redefining developer experience</span>
            <h2>Vite-style clarity, adapted for SportFi Kit</h2>
            <p>
              This section adds the extra content you asked for: a clean overview of what the docs
              site gives developers, plus a visual structure that feels closer to the Vite landing
              page.
            </p>
          </div>

          <div className="hero-features-grid">
            {featureCards.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  className="hero-feature-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + index * 0.05, ease: 'easeOut' }}
                >
                  <div className="hero-feature-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
