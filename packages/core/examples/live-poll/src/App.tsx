import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, useSimpleVote } from 'sportfi-kit';

function App() {
  // Replace with your deployed SimpleVote contract address
  const POLL_CONTRACT = "0x0000000000000000000000000000000000000000";
  const { vote, isPending, isSuccess } = useSimpleVote(POLL_CONTRACT);

  const options = ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr."];

  return (
    <SportFiKitProvider config={{ reownProjectId: 'demo' }}>
      <SafeAreaWrapper className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        <header className="flex justify-between items-center px-4 py-4 md:px-6 md:py-6 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-10">
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight leading-none">Live Poll</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">SportFi Kit</span>
          </div>
          <ConnectButton />
        </header>

        <main className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Player of the Month</h2>
              <p className="text-sm text-slate-500">Cast your vote on the Chiliz Chain. The results are immutable and transparent.</p>
            </div>

            <div className="space-y-3">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => vote(i)}
                  disabled={isPending || isSuccess}
                  className={`w-full p-4 flex items-center justify-between border rounded-xl font-medium transition-all ${
                    isSuccess
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-700 opacity-70 cursor-not-allowed'
                      : isPending
                        ? 'border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed'
                        : 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700'
                  }`}
                >
                  <span>{opt}</span>
                  {isSuccess && <span className="text-emerald-500">✓</span>}
                </button>
              ))}
            </div>

            <div className="mt-6 h-6 text-center">
              {isSuccess ? (
                <p className="text-sm text-emerald-600 font-medium animate-fade-in">Your vote has been recorded! 🎉</p>
              ) : isPending ? (
                 <p className="text-sm text-slate-500 animate-pulse">Waiting for confirmation...</p>
              ) : (
                <p className="text-xs text-slate-400">Requires a connected wallet</p>
              )}
            </div>
          </div>
        </main>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
