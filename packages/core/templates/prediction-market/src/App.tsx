import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, PredictionCard } from 'sportfi-kit';
import { useState } from 'react';

function App() {
  const [isVoting, setIsVoting] = useState(false);
  const prediction = {
    id: "1",
    question: "Who will win the Chiliz Cup final?",
    options: ["Team Spicy", "Team Chiliz", "Draw"],
    endTime: Date.now() + 86400000,
    totalPool: "25000",
  };

  const handleVote = (index: number) => {
    setIsVoting(true);
    console.log(`Voting for ${prediction.options[index]}`);
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
            prediction={prediction}
            onVote={handleVote}
            isVoting={isVoting}
          />
        </div>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
