import { SportFiKitProvider, ConnectButton, SafeAreaWrapper } from 'sportfi-kit';

function App() {
  const config = {
    reownProjectId: '744927b2671542f7d93416e9d6d51a66',
  };

  return (
    <SportFiKitProvider config={config}>
      <SafeAreaWrapper>
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
             <svg width="32" height="32" viewBox="0 0 32 32"><path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 24c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10z" fill="#059669"/></svg>
             <span className="text-xl font-bold">SportFi Mini App</span>
          </div>
          <ConnectButton />
        </header>

        <main className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome to Chiliz Chain</h1>
          <p className="text-slate-600 mb-8">Start building your fan experience with SportFi Kit.</p>
        </main>
      </SafeAreaWrapper>
    </SportFiKitProvider>
  );
}

export default App;
