import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, PredictionCard } from 'sportfi-kit';
import { useState } from 'react';

function App() {
  const [isVoting, setIsVoting] = useState(false);
  
  const marketData = {
    homeTeam: { name: "Team Spicy", symbol: "SPY", score: "2" },
    awayTeam: { name: "Team Chiliz", symbol: "CHZ", score: "1" },
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
    setTimeout(() => setIsVoting(false), 2000);
  };

  return (
    <SportFiKitProvider config={{ reownProjectId: 'demo' }}>
      <SafeAreaWrapper className="p-4">
        <header className="flex justify-between items-center mb-8">
          <span className="font-bold text-xl text-emerald-600">Prediction Market</span>
          <ConnectButton />
        </header>

        <div className="flex justify-center">
          <PredictionCard 
            {...marketData}
            onSelect={handleSelect}
            isLoading={isVoting}
            matchStatus="LIVE - 85'"
            isLive={true}
          />
        </div>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
