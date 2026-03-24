import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, FanTokenGate } from 'sportfi-kit';

function App() {
  // Replace with your deployed Fan Token contract address (e.g., $JUV, $BAR)
  const FAN_TOKEN_ADDRESS = "0x0000000000000000000000000000000000000000";

  return (
    <SportFiKitProvider config={{ reownProjectId: 'demo' }}>
      <SafeAreaWrapper className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        {/* Modern Header */}
        <header className="flex justify-between items-center px-4 py-4 md:px-6 md:py-6 bg-white border-b border-slate-100 shadow-sm sticky top-0 z-10">
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight leading-none">Token Gate</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">SportFi Kit</span>
          </div>
          <ConnectButton />
        </header>

        {/* Centered Main Layout */}
        <main className="flex-1 flex flex-col items-center justify-center py-10 px-4">
          <div className="w-full max-w-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold tracking-tight mb-2">VIP Locker Room</h1>
              <p className="text-sm text-slate-500">
                Hold at least 5 Fan Tokens to unlock exclusive behind-the-scenes content.
              </p>
            </div>

            <FanTokenGate
              tokenAddress={FAN_TOKEN_ADDRESS}
              minBalance={5}
              label="Exclusive Content"
              description="Connect your wallet to verify your Fan Token balance."
            >
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-3 tracking-tight">Welcome to the inner circle! 🏟️</h2>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                  Your token balance has been verified. You now have full access to the live locker room camera and premium match analysis.
                </p>

                {/* Placeholder for actual gated content */}
                <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent"></div>
                  <svg className="w-12 h-12 mb-3 text-emerald-400 opacity-90 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold tracking-widest text-emerald-100 uppercase">Live Stream Loading</span>
                </div>
              </div>
            </FanTokenGate>

            <p className="text-center text-xs text-slate-400 mt-8">
              Content gates are enforced on-chain via Chiliz RPC.
            </p>
          </div>
        </main>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
