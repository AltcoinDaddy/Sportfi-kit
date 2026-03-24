import { ConnectButton, SafeAreaWrapper, useSimpleVote } from 'sportfi-kit';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Users, Globe, ChevronRight } from 'lucide-react';

function App() {
  const POLL_CONTRACT = '0x...abc';
  const { submitVote, isSubmitting, isConfirmed } = useSimpleVote(POLL_CONTRACT);

  const options = ['Messi', 'Ronaldo', 'Neymar'];

  return (
    <SafeAreaWrapper className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/20 font-sans">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        {/* Elite Broadcast Header */}
        <header className="mb-12 flex items-center justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <img src="/logo.png" className="h-8 w-8 object-contain" alt="SportFi Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                SPORTFI<span className="text-emerald-500">KIT</span>
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                  LIVE_POLL_TERMINAL
                </span>
              </div>
            </div>
          </div>

          <ConnectButton />
        </header>

        <main className="grid flex-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Info Section */}
          <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 lg:p-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-transparent to-transparent opacity-30" />
            
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400">
              <Globe size={12} /> Active Network
            </div>

            <h1 className="mt-8 text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl uppercase leading-none">
              Cast your vote <br />
              <span className="text-slate-500">for the MVP.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 font-medium">
              Join the global fan base and influence the outcome in real-time. Secure, transparent, and built on the Chiliz Chain.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: 'Poll Type', value: 'Open Fan Vote', icon: Users },
                { label: 'Status', value: 'Operational', icon: BarChart3 },
                { label: 'Latency', value: 'On-Chain', icon: Globe },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                    <stat.icon size={12} className="text-emerald-500" /> {stat.label}
                  </div>
                  <div className="text-sm font-black text-white font-mono uppercase tracking-tight">{stat.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Voting Terminal */}
          <aside className="rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col">
            <div className="p-8 border-b border-slate-800 bg-slate-950/50">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">Voting Interface</div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Matchday Selection</h2>
            </div>
            
            <div className="p-8 flex-1 space-y-4">
              {options.map((opt, i) => {
                const isVoted = isConfirmed && i === 0; // Mocking for demo
                return (
                  <motion.button
                    key={opt}
                    whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => submitVote(i)}
                    disabled={isSubmitting || isConfirmed}
                    className={`group w-full rounded-xl border p-5 text-left transition-all ${
                      isVoted
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-600'
                    } disabled:opacity-50`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono font-black text-slate-600 group-hover:text-emerald-500">0{i + 1}</span>
                        <span className={`text-sm font-black uppercase tracking-tight ${isVoted ? 'text-emerald-400' : 'text-white'}`}>
                          {opt}
                        </span>
                      </div>
                      <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${isVoted ? 'text-emerald-500' : 'text-slate-700'}`} />
                    </div>
                  </motion.button>
                );
              })}

              <div className="mt-8 rounded-xl bg-slate-950 border border-slate-800 p-6 text-center">
                <AnimatePresence mode="wait">
                  {isConfirmed ? (
                    <motion.p key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-black uppercase tracking-widest text-emerald-400">
                      Transmission Confirmed ✅
                    </motion.p>
                  ) : isSubmitting ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-500 italic">Syncing Data...</span>
                    </motion.div>
                  ) : (
                    <motion.p key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 italic">
                      Ready for Input
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </SafeAreaWrapper>
  );
}

export default App;

