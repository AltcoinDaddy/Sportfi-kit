import {
  ConnectButton,
  SafeAreaWrapper,
  PredictionCard,
  WagerCard,
  PollCard,
  useSportFiConnect,
  CloseMiniAppButton,
} from 'sportfi-kit';
import { useState } from 'react';
import { parseEther } from 'viem';

function App() {
  const { isSociosBrowser } = useSportFiConnect();
  const [hasVoted, setHasVoted] = useState(false);
  const [userVoteId, setUserVoteId] = useState<string | number>();

  const handlePredict = (label: string) => {
    console.log(`Prediction placed for: ${label}`);
  };

  const handleVote = (id: string | number) => {
    setUserVoteId(id);
    setHasVoted(true);
    console.log('Vote recorded');
  };

  return (
    <SafeAreaWrapper className="bg-[#f8fafc] min-h-screen text-slate-900 font-sans">
      <header className="flex justify-between items-center px-4 py-4 md:px-6 md:py-6 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          {isSociosBrowser && <CloseMiniAppButton />}
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight leading-none">
              Match Center
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              Powered by SportFi
            </span>
          </div>
        </div>
        <ConnectButton />
      </header>

      <main className="max-w-xl mx-auto px-4 py-8 space-y-8">
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">Live Match</h2>
          </div>
          <PredictionCard
            homeTeam={{ name: 'Man City', symbol: 'CITY', score: 2 }}
            awayTeam={{ name: 'Real Madrid', symbol: 'RMA', score: 1 }}
            isLive={true}
            matchStatus="74'"
            predictionTitle="Who scores next?"
            options={[
              { label: 'Man City', odds: '1.80' },
              { label: 'No Goal', odds: '2.50' },
              { label: 'Real Madrid', odds: '3.10' },
            ]}
            onSelect={handlePredict}
          />
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">P2P Wagering Pool</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <WagerCard
              matchName="Tournament Finals"
              homeTeam="Man City"
              awayTeam="Real Madrid"
              totalVolume={parseEther('5240')}
              homePool={parseEther('3100')}
              awayPool={parseEther('1800')}
              drawPool={parseEther('340')}
              onPlaceWager={(id, amount) => {
                console.log(`Wager of ${amount} CHZ placed on outcome ${id}`);
              }}
            />
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Fan Voting</h2>
          <PollCard
            title="Man of the Match"
            subtitle="Live Chiliz Chain Poll"
            totalVotes={12450}
            hasVoted={hasVoted}
            userVoteId={userVoteId}
            onVote={handleVote}
            options={[
              { id: 1, label: 'Kevin De Bruyne', votes: 5400 },
              { id: 2, label: 'Erling Haaland', votes: 4200 },
              { id: 3, label: 'Vinícius Júnior', votes: 2850 },
            ]}
          />
        </section>
      </main>

      <footer className="py-8 text-center">
        <p className="text-xs font-medium text-slate-400">
          Built with SportFi Kit
        </p>
      </footer>
    </SafeAreaWrapper>
  );
}

export default App;
