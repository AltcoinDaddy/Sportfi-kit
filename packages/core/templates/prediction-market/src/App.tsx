import { ConnectButton, PredictionCard, SafeAreaWrapper } from 'sportfi-kit';
import { useState } from 'react';
import { TrendingUp, Clock, Target, ChevronRight } from 'lucide-react';

function App() {
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = (label: string) => {
    setIsVoting(true);
    console.log(`Voting for ${label}`);
    setTimeout(() => setIsVoting(false), 2000);
  };

  return (
    <SafeAreaWrapper className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/20 font-sans">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
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
                  MARKET_TERMINAL_v4
                </span>
              </div>
            </div>
          </div>
          <ConnectButton />
        </header>

        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
            {/* Market Context Section */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 lg:p-12 flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-transparent to-transparent opacity-30" />
              
              <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-8">
                <TrendingUp size={12} /> High Volatility Alert
              </div>

              <h1 className="text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl uppercase leading-[0.9] mb-6">
                Predict the <br />
                <span className="text-slate-500 text-3xl sm:text-4xl lg:text-5xl">Outcome.</span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-400 font-medium mb-10">
                Execute predictions on live match data. Real-time odds indexing powered by Chiliz Chain.
              </p>

              <div className="mt-auto space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Market Type', value: 'Match Result', icon: Target },
                    { label: 'Settlement', value: 'Auto-Protocol', icon: Clock },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                        <stat.icon size={12} className="text-emerald-500" /> {stat.label}
                      </div>
                      <div className="text-sm font-black text-white font-mono uppercase truncate">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                    <TrendingUp size={80} />
                  </div>
                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Featured Fixture</div>
                      <div className="text-xl font-black tracking-tighter text-white uppercase">AC Milan <span className="text-emerald-500">vs</span> Inter</div>
                    </div>
                    <div className="rounded-md bg-rose-500/20 border border-rose-500/30 px-3 py-1 text-xs font-black text-rose-500 font-mono">
                      82:00
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-800 text-[10px] font-black text-white">ACM</div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-emerald-600 text-[10px] font-black text-white">INT</div>
                      </div>
                      <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Match Score: <span className="text-white font-mono">2 - 1</span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-700" />
                  </div>
                </div>
              </div>
            </section>

            {/* Trading Terminal Section */}
            <section className="rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col shadow-2xl">
              <div className="p-8 border-b border-slate-800 bg-slate-950/50">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-2">Market Board</div>
                <h2 className="text-2xl font-black text-white tracking-tighter uppercase">Prediction Interface</h2>
              </div>
              
              <div className="p-8 flex-1 bg-slate-900/50 backdrop-blur-sm">
                <PredictionCard
                  homeTeam={{
                    name: 'AC Milan',
                    symbol: 'ACM',
                    score: '2',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_A.C._Milan.svg',
                  }}
                  awayTeam={{
                    name: 'Inter Milan',
                    symbol: 'INT',
                    score: '1',
                    logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Inter_Milan_2021_logo.svg',
                  }}
                  predictionTitle="Match Winner"
                  isLive={true}
                  matchStatus="82'"
                  options={[
                    { label: 'HOME', odds: '2.10' },
                    { label: 'DRAW', odds: '3.45' },
                    { label: 'AWAY', odds: '3.80' },
                  ]}
                  onSelect={handleVote}
                  isLoading={isVoting}
                />
                
                <div className="mt-8 p-6 rounded-xl border border-slate-800 bg-slate-950/30">
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-600 mb-2">Protocol Note</div>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
                    Market odds are subject to real-time adjustments based on match events and chain liquidity. Continuous monitoring advised.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SafeAreaWrapper>
  );
}

export default App;

