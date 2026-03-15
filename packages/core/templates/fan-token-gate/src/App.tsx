import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, FanTokenGate } from 'sportfi-kit';

function App() {
  const JUV_TOKEN = "0x...123"; // Juventus Fan Token

  return (
    <SportFiKitProvider config={{ reownProjectId: '744927b2671542f7d93416e9d6d51a66' }}>
      <SafeAreaWrapper className="p-4">
        <header className="flex justify-between items-center mb-8">
          <span className="font-bold text-xl text-emerald-600">Fan Gate Demo</span>
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
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
