import { Rocket, ShieldCheck, Zap, Layout, Terminal } from 'lucide-react';

export function Introduction() {
  return (
    <article className="doc-article">
      <header className="mb-16">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold tracking-widest text-[11px] uppercase mb-4">
          <Rocket className="h-4 w-4" />
          <span>Scaffold CLI</span>
        </div>
        <h1 className="text-zinc-900 dark:text-white">Introduction</h1>
        <p className="doc-subtitle text-zinc-500 dark:text-zinc-400">
          A modern CLI for scaffolding production-ready apps for EVM Blockchains, optimized for
          sports fan engagement.
        </p>
      </header>

      <section id="overview" className="doc-section-card relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors duration-500" />

        <h2 className="flex items-center gap-3 border-none p-0 mb-6">
          <Layout className="h-6 w-6 text-emerald-500" />
          Overview
        </h2>
        <div className="space-y-4">
          <p>
            <strong className="text-zinc-900 dark:text-white font-semibold">SportFi Kit</strong> is
            a modern CLI designed for developers scaffolding production-ready apps for{' '}
            <strong className="text-zinc-900 dark:text-white font-semibold">EVM Blockchains</strong>
            . It eliminates the boilerplate associated with Web3 sports apps, allowing you to focus
            on the unique mechanics of your fan experience.
          </p>
          <p>
            Whether you're building a prediction market, a wagering pool, or a custom fan-token
            utility, SportFi Kit provides the reliable scaffold you need to ship faster and with
            higher confidence.
          </p>
        </div>
      </section>

      <section className="doc-callout-info flex gap-4 my-12 p-4 rounded-md">
        <Zap className="h-6 w-6 shrink-0 mt-0.5" />
        <div>
          <strong className="block mb-1 text-emerald-800 dark:text-emerald-200 uppercase tracking-widest text-[11px] font-bold">
            Built for speed.
          </strong>
          The goal of SportFi Kit is to minimize the distance between a concept and a working
          application, ensuring your codebase remains readable and highly composable from day one.
        </div>
      </section>

      <section id="prerequisites" className="doc-section-card">
        <h2 className="flex items-center gap-3 border-none p-0 mb-6 font-bold text-2xl tracking-tight">
          <ShieldCheck className="h-6 w-6 text-emerald-500" />
          Prerequisites
        </h2>
        <p className="mb-6 opacity-80">Everything you need before running the scaffold CLI:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
          {[
            {
              title: 'Scaffold Template',
              desc: 'Choose from prediction-market, wagering, or token-gate presets.',
            },
            {
              title: 'Node.js 18+',
              desc: 'Ensures compatibility with modern ESM modules and CLI features.',
            },
            {
              title: 'EVM Wallet',
              desc: 'Any standard EVM-compatible wallet for testing and deployment.',
            },
            {
              title: 'Code Editor',
              desc: 'VS Code or similar for working with the generated TSX/CSS.',
            },
          ].map((item, i) => (
            <li
              key={i}
              className="p-4 rounded-xl border border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/5 flex flex-col gap-1 hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-colors duration-200"
            >
              <span className="font-bold text-zinc-900 dark:text-white text-sm tracking-tight">
                {item.title}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <div id="installation" className="mt-16">
        <section className="doc-section-card bg-emerald-950/5 dark:bg-emerald-500/5 border-emerald-100 dark:border-emerald-500/10 shadow-none">
          <h2 className="flex items-center gap-3 border-none p-0 m-0 mb-6 font-bold text-2xl tracking-tight">
            <Terminal className="h-6 w-6 text-emerald-500" />
            Initialization
          </h2>
          <p className="mb-4 text-emerald-900/60 dark:text-emerald-100/40 text-sm">
            Run the global create command to start the interactive scaffold wizard.
          </p>
          <div className="relative group/code">
            <pre className="doc-code bg-zinc-900 p-6 rounded-xl border-zinc-800 overflow-x-auto m-0 shadow-2xl">
              <code className="text-emerald-400 text-sm font-mono">
                {`npx sportfi-kit create my-app`}
              </code>
            </pre>
          </div>
        </section>
      </div>

      <section id="philosophy" className="mt-20 py-12 border-t border-zinc-100 dark:border-white/5">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
          Core Philosophy
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
          SportFi Kit follows a{' '}
          <strong className="text-zinc-900 dark:text-white">scaffold-first</strong> approach. We
          believe CLI tools should optimize the engineering foundation while giving you total
          aesthetic control over the final interface. It's built for rapid iteration on any EVM
          blockchian.
        </p>
      </section>
    </article>
  );
}
