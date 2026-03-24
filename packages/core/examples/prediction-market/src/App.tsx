import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, PredictionCard } from 'sportfi-kit';
import { useState } from 'react';

function App() {
  const [isVoting, setIsVoting] = useState(false);

  const marketData = {
    homeTeam: { name: "Team Spicy", symbol: "SPY", score: 2 },
    awayTeam: { name: "Team Chiliz", symbol: "CHZ", score: 1 },
    predictionTitle: "Who will win the Chiliz Cup final?",
    options: [
      { label: "Team Spicy", odds: "1.85" },
      { label: "Draw", odds: "3.40" },
      { label: "Team Chiliz", odds: "2.10" }
    ],
  };

  const handleSelect = (label: string) => {
    if (label === 'PREDICT_CTA') return;
    setIsVoting(true);
    console.log(`Voting for ${label}`);

    // Simulate network transaction
    setTimeout(() => {
      setIsVoting(false);
      alert(`Prediction placed for ${label}!`);
    }, 2000);
  };

  return (
    <SportFiKitProvider config={{ reownProjectId: 'demo' }}>
      <SafeAreaWrapper className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        {/* Modern Header */}
        <header className="flex justify-between items-center px-4 py-4 md:px-6 md:py-6 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-10">
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight leading-none">Prediction Market</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">SportFi Kit</span>
          </div>
          <ConnectButton />
        </header>

        {/* Centered Main Layout */}
        <main className="flex-1 flex flex-col items-center py-10 px-4 md:py-16">
          <div className="w-full max-w-lg">

            {/* Live Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Live Market</h2>
            </div>

            {/* Card Container */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-1">
              <PredictionCard
                {...marketData}
                onSelect={handleSelect}
                isLoading={isVoting}
                matchStatus="85'"
                isLive={true}
              />
            </div>

            {/* Footer Context */}
            <p className="text-center text-xs text-slate-400 mt-8">
              Powered by on-chain outcome resolution. Staked tokens are locked until the market settles.
            </p>
          </div>
        </main>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
