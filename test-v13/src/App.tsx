import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, PredictionCard } from 'sportfi-kit';
import { useState } from 'react';

function App() {
  const [isVoting, setIsVoting] = useState(false);
  
  const handleVote = (label: string) => {
    setIsVoting(true);
    console.log(`Voting for ${label}`);
    setTimeout(() => setIsVoting(false), 2000);
  };

  return (
    <SportFiKitProvider config={{ reownProjectId: '744927b2671542f7d93416e9d6d51a66' }}>
      <SafeAreaWrapper className="p-4">
        <header className="flex justify-between items-center mb-12">
          <span className="font-black text-2xl text-emerald-600 tracking-tighter">PREDICTION MARKET</span>
          <ConnectButton />
        </header>

        <div className="flex justify-center max-w-lg mx-auto">
          <PredictionCard 
            homeTeam={{ name: "AC Milan", symbol: "ACM", score: "2", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_A.C._Milan.svg" }}
            awayTeam={{ name: "Inter Milan", symbol: "INT", score: "1", logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Inter_Milan_2021_logo.svg" }}
            predictionTitle="Match Winner"
            isLive={true}
            matchStatus="82'"
            options={[
              { label: 'HOME', odds: '2.10' },
              { label: 'DRAW', odds: '3.45' },
              { label: 'AWAY', odds: '3.80' }
            ]}
            onSelect={handleVote}
            isLoading={isVoting}
          />
        </div>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
