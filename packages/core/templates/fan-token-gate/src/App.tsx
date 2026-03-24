import { ConnectButton, SafeAreaWrapper, FanTokenGate } from 'sportfi-kit';

function App() {
  const JUV_TOKEN = "0x...123"; // Juventus Fan Token

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
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Fan Gate</span>
            </div>
          </div>
          <ConnectButton />
        </header>

      <FanTokenGate tokenAddress={JUV_TOKEN} minBalance={5}>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Welcome, True Fan! 🏟️</h2>
          <p className="text-slate-600">You have exclusive access to this locker room content.</p>
          <div className="mt-6 aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
             <span className="text-slate-400">Exclusive Video Content</span>
          </div>
        </div>
      </FanTokenGate>
      </div>
    </SafeAreaWrapper>
  );
}

export default App;
