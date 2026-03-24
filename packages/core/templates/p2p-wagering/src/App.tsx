import { SafeAreaWrapper, WagerCard, ConnectButton, ActionToast, useWagerPool } from 'sportfi-kit';
import { useState } from 'react';
import { Activity, Shield, Zap } from 'lucide-react';

function App() {
  const WAGER_POOL_CONTRACT = "0x...123"; // Replace with your deployed contract address
  const { placeWager, isSubmitting, isConfirmed, isError, error, txHash } = useWagerPool(WAGER_POOL_CONTRACT);

  const [matchData] = useState({
    matchName: "Champions League Final",
    homeTeam: "Real Madrid",
    awayTeam: "Man City",
    totalVolume: BigInt(5000 * 1e18),
    homePool: BigInt(2500 * 1e18),
    awayPool: BigInt(1500 * 1e18),
    drawPool: BigInt(1000 * 1e18)
  });

  const handleWager = async (outcomeId: number, amount: string) => {
    try {
      await placeWager(0, outcomeId, amount);
    } catch (err) {
      console.error("Wager failed:", err);
    }
  };

  return (
    <SafeAreaWrapper className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/20">
      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <header className="flex justify-between items-center mb-16 border-b border-slate-800 pb-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <img src="/logo.png" className="w-10 h-10 object-contain" alt="SportFi Logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-white tracking-tighter uppercase">
                SETTLE-IT <span className="text-emerald-500">P2P</span>
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                  WAGERING_CORE_v2
                </span>
              </div>
            </div>
          </div>
          <ConnectButton />
        </header>

        <main className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
              <Shield size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Secured via Chiliz Chain</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
              Elite Matchday <br />
              <span className="text-slate-500">P2P Wagering</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto leading-relaxed">
              Proprietary peer-to-peer liquidity pools. Automated settlements. Zero-margin fan engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 items-start">
            <WagerCard 
              matchName={matchData.matchName}
              homeTeam={matchData.homeTeam}
              awayTeam={matchData.awayTeam}
              totalVolume={matchData.totalVolume}
              homePool={matchData.homePool}
              awayPool={matchData.awayPool}
              drawPool={matchData.drawPool}
              onPlaceWager={handleWager}
              isLoading={isSubmitting}
            />

            {/* Trading Signals Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Vol (24h)', value: '1.2M CHZ', icon: Activity },
                { label: 'Settlement', value: 'Automated', icon: Zap },
                { label: 'Platform Fee', value: '0.00%', icon: Shield },
              ].map((stat, i) => (
                <div key={i} className="rounded-xl border border-slate-900 bg-slate-900/50 p-4 border-l-2 border-l-emerald-500/30">
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{stat.label}</div>
                  <div className="text-sm font-black text-white font-mono">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <ActionToast 
          isVisible={isSubmitting || isConfirmed || isError}
          status={isError ? 'error' : isConfirmed ? 'success' : 'pending'}
          title={isError ? "Transmission Error" : isConfirmed ? "Confirmed" : "Processing"}
          message={isError ? error?.message || "Execution failed" : isConfirmed ? "Wager injected into block. 🚀" : "Encrypting transaction payload..."}
          txHash={txHash}
          onClose={() => {}}
        />
      </div>
    </SafeAreaWrapper>
  );
}

export default App;

