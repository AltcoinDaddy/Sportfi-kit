import { ConnectButton, SafeAreaWrapper } from 'sportfi-kit';

function App() {
  const config = {
    reownProjectId: '744927b2671542f7d93416e9d6d51a66',
  };

  return (
    <SafeAreaWrapper>
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
           <img src="/logo.png" className="w-8 h-8 object-contain" alt="SportFi Logo" />
           <span className="text-xl font-bold">SportFi Mini App</span>
        </div>
        <ConnectButton />
      </header>

      <main className="text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome to Chiliz Chain</h1>
        <p className="text-slate-600 mb-8">Start building your fan experience with SportFi Kit.</p>
      </main>
    </SafeAreaWrapper>
  );
}

export default App;
