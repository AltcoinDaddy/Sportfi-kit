import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, useSimpleVote } from 'sportfi-kit';

function App() {
  const POLL_CONTRACT = "0x...abc";
  const { vote, isPending, isSuccess } = useSimpleVote(POLL_CONTRACT);

  const options = ["Messi", "Ronaldo", "Neymar"];

  return (
    <SportFiKitProvider config={{ reownProjectId: 'demo' }}>
      <SafeAreaWrapper className="p-4">
        <header className="flex justify-between items-center mb-10">
          <span className="font-bold text-xl text-emerald-600">Fan Vote</span>
          <ConnectButton />
        </header>

        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Vote for Player of the Month</h2>
          
          <div className="space-y-4">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => vote(i)}
                disabled={isPending || isSuccess}
                className={`w-full p-4 text-left border rounded-lg transition-all ${
                  isSuccess ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 hover:border-emerald-600'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {isSuccess && (
            <p className="mt-4 text-center text-emerald-600 font-medium">Your vote has been cast! ✅</p>
          ) || isPending && (
             <p className="mt-4 text-center text-slate-500">Submitting vote...</p>
          )}
        </div>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
