import { 
  ConnectButton, 
  SafeAreaWrapper, 
  FanTokenGate, 
  PredictionCard, 
  WagerCard, 
  PollCard,
  ActionToast,
  useSportFiConnect,
  CloseMiniAppButton
} from 'sportfi-kit';
import { useState } from 'react';
import { parseEther } from 'viem';

function App() {
  const { isSociosBrowser, isConnected } = useSportFiConnect();
  const [hasVoted, setHasVoted] = useState(false);
  const [userVoteId, setUserVoteId] = useState<string | number>();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handlePredict = (label: string) => {
    setToastMessage(`Prediction placed for: ${label}`);
    setShowToast(true);
  };

  const handleVote = (id: string | number) => {
    setUserVoteId(id);
    setHasVoted(true);
    setToastMessage("Vote recorded on Chiliz Chain!");
    setShowToast(true);
  };

  return (
    <SafeAreaWrapper className="bg-slate-50 min-h-screen pb-20">
      {/* Premium Header */}
      <header className="flex justify-between items-center px-6 py-8 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
            <span className="text-white font-black text-xl italic mt-0.5">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">SportFi</span>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Match Center</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isSociosBrowser && <CloseMiniAppButton className="mr-2" />}
          <ConnectButton />
        </div>
      </header>

      <main className="px-6 space-y-10">
        {/* Live Match Prediction */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Featured Market</h2>
          </div>
          <PredictionCard
            homeTeam={{ name: "Man City", symbol: "CITY", score: 2 }}
            awayTeam={{ name: "Real Madrid", symbol: "RMA", score: 1 }}
            isLive={true}
            matchStatus="74'"
            predictionTitle="Full Time Result"
            options={[
              { label: "Home", odds: "1.45" },
              { label: "Draw", odds: "3.20" },
              { label: "Away", odds: "5.50" }
            ]}
            onSelect={handlePredict}
          />
        </section>

        {/* Token Gated Content */}
        <section>
          <FanTokenGate 
            tokenAddress="0x1234..." // Placeholder for $CITY Fan Token
            tokenSymbol="CITY"
            minBalance={10}
            label="Locker Room Chat"
            description="Unlock exclusive gameday tactical analysis and live fan chat."
          >
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl">
              <h3 className="text-xl font-black mb-4">Exclusive Analysis</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Pep's tactical switch in the 65th minute has completely neutralized Madrid's counter-attack. Expect City to sit deeper now.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-700 text-xs font-bold">
                ✓ You have verified access as a $CITY holder.
              </div>
            </div>
          </FanTokenGate>
        </section>

        {/* P2P Wagering Pool */}
        <section>
          <WagerCard
            matchName="Tournament Finals"
            homeTeam="Man City"
            awayTeam="Real Madrid"
            totalVolume={parseEther("5240")}
            homePool={parseEther("3100")}
            awayPool={parseEther("1800")}
            drawPool={parseEther("340")}
            onPlaceWager={(id, amount) => {
              setToastMessage(`Wager of ${amount} CHZ placed on outcome ${id}`);
              setShowToast(true);
            }}
          />
        </section>

        {/* Fan Poll */}
        <section>
          <PollCard 
            title="Man of the Match"
            subtitle="Fan Voting"
            totalVotes={12450}
            hasVoted={hasVoted}
            userVoteId={userVoteId}
            onVote={handleVote}
            options={[
              { id: 1, label: "Kevin De Bruyne", votes: 5400 },
              { id: 2, label: "Erling Haaland", votes: 4200 },
              { id: 3, label: "Vinícius Júnior", votes: 2850 }
            ]}
          />
        </section>
      </main>

      <footer className="mt-12 mb-8 text-center px-10">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Powered by Chiliz Chain</p>
      </footer>

      {showToast && (
        <ActionToast 
          isVisible={showToast}
          status="success"
          title="Success"
          message={toastMessage} 
          onClose={() => setShowToast(false)} 
        />
      )}
    </SafeAreaWrapper>
  );
}

export default App;
