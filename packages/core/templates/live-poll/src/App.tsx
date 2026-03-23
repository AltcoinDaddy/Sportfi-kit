import { ConnectButton, SafeAreaWrapper, useSimpleVote } from 'sportfi-kit';

function App() {
  const POLL_CONTRACT = "0x...abc";
  const { submitVote, isSubmitting, isConfirmed } = useSimpleVote(POLL_CONTRACT);

  const options = ["Messi", "Ronaldo", "Neymar"];

  return (
    <SafeAreaWrapper className="bg-white min-h-screen text-zinc-700 selection:bg-emerald-500/10">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <header className="flex justify-between items-center mb-16 px-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="SportFi Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-zinc-900 leading-none lowercase">
                sportfi<span className="text-emerald-600 font-medium">kit</span>
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Live Poll</span>
            </div>
          </div>
          <ConnectButton />
        </header>

      <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Vote for Player of the Month</h2>
        
        <div className="space-y-4">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => submitVote(i)}
              disabled={isSubmitting || isConfirmed}
              className={`w-full p-4 text-left border rounded-lg transition-all ${
                isConfirmed ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 hover:border-emerald-600'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {isConfirmed && (
          <p className="mt-4 text-center text-emerald-600 font-medium">Your vote has been cast! ✅</p>
        ) || isSubmitting && (
           <p className="mt-4 text-center text-slate-500">Submitting vote...</p>
        )}
      </div>
    </SafeAreaWrapper>
  );
}

export default App;
