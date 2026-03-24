import { ConnectButton, SafeAreaWrapper } from 'sportfi-kit';

function App() {
  return (
    <SafeAreaWrapper className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-emerald-50 text-zinc-800 selection:bg-emerald-500/10">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
              <span className="text-xl">⚽</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-zinc-950">
                sportfi<span className="text-emerald-600">kit</span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                Starter Template
              </span>
            </div>
          </div>

          <div className="rounded-full border border-zinc-200 bg-white px-1.5 py-1 shadow-sm">
            <ConnectButton className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2" />
          </div>
        </header>

        <main className="flex flex-1 items-center">
          <div className="grid w-full gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_60px_-30px_rgba(24,24,27,0.35)] backdrop-blur sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Ready to build
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Build on the Chiliz Ecosystem.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                Your decentralized fan engagement app is up and running. Start editing{' '}
                <code className="mx-1 rounded-md bg-zinc-100 px-2 py-1 font-mono text-sm text-pink-500">
                  src/App.tsx
                </code>{' '}
                to build your web3 experience.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold text-zinc-500">Framework</div>
                  <div className="mt-2 text-sm font-bold text-zinc-950">React + Vite</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold text-zinc-500">Styling</div>
                  <div className="mt-2 text-sm font-bold text-zinc-950">Tailwind CSS</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold text-zinc-500">Network</div>
                  <div className="mt-2 text-sm font-bold text-zinc-950">Chiliz Chain</div>
                </div>
              </div>
            </section>

            <aside className="rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 to-teal-500 p-7 text-white shadow-[0_20px_60px_-30px_rgba(16,185,129,0.5)] sm:p-10">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-50/80">
                    Developer resources
                  </p>
                  <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                    Explore the Docs 📚
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-emerald-50/90 sm:text-base">
                    Learn how to integrate UI components, smart contract hooks, and the SportFi API.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-white/10 p-4 ring-1 ring-inset ring-white/15 backdrop-blur">
                  <div className="space-y-3">
                    <a
                      href="https://www.sportfikit.online/docs"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/5 px-4 py-4 text-left text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                    >
                      <div className="flex flex-col gap-1">
                        <span>Documentation</span>
                        <span className="text-xs font-medium text-white/70">Components & Hooks</span>
                      </div>
                      <span className="text-white/50 transition-transform group-hover:translate-x-1">→</span>
                    </a>

                    <a
                      href="https://github.com/AltcoinDaddy/Sportfi-kit"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/5 px-4 py-4 text-left text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                    >
                      <div className="flex flex-col gap-1">
                        <span>GitHub Source</span>
                        <span className="text-xs font-medium text-white/70">Contribute & Issues</span>
                      </div>
                      <span className="text-white/50 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </SafeAreaWrapper>
  );
}

export default App;
