import { SafeAreaWrapper, WagerCard, ConnectButton, ActionToast, useWagerPool } from 'sportfi-kit';
import { useState } from 'react';

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
    <SafeAreaWrapper className="min-h-screen bg-slate-950 p-6">
      <header className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-3">
          <img src="/logo.png" className="w-10 h-10 object-contain" alt="SportFi Logo" />
          <span className="font-black text-2xl text-white tracking-tighter italic">SETTLE-IT <span className="text-emerald-500">P2P</span></span>
        </div>
        <ConnectButton />
      </header>

      <main className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">Matchday Wagering</h1>
          <p className="text-white/40 font-medium">Bet against other fans. Trustless. Automated. Elite.</p>
        </div>

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
      </main>

      <ActionToast 
        isVisible={isSubmitting || isConfirmed || isError}
        status={isError ? 'error' : isConfirmed ? 'success' : 'pending'}
        title={isError ? "Transaction Error" : isConfirmed ? "Success" : "Processing"}
        message={isError ? error?.message || "Wager failed" : isConfirmed ? "Wager Confirmed! 🚀" : "Confirming Wager..."}
        txHash={txHash}
        onClose={() => {}}
      />
    </SafeAreaWrapper>
  );
}

export default App;
