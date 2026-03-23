import { ConnectButton, SafeAreaWrapper } from 'sportfi-kit';

function App() {
  const config = {
    reownProjectId: '744927b2671542f7d93416e9d6d51a66',
  };

  return (
    <SafeAreaWrapper className="bg-white min-h-screen text-zinc-700 selection:bg-emerald-500/10">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Premium Header */}
        <header className="flex justify-between items-center mb-16 px-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
              <img src="/logo.png" className="w-8 h-8 object-contain" alt="SportFi Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-zinc-900 leading-none lowercase">
                sportfi<span className="text-emerald-600 font-medium">kit</span>
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                Starter
              </span>
            </div>
          </div>
          <ConnectButton />
        </header>

        <main>
          {/* Welcome Card */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-2xl shadow-zinc-200/50 mb-10">
            <h1 className="text-3xl font-black text-zinc-900 mb-4 tracking-tight">
              Welcome to the <br />
              <span className="text-emerald-600">Chiliz Ecosystem.</span>
            </h1>
            <p className="text-zinc-500 font-medium leading-relaxed mb-10">
              Your SportFi Kit template is successfully scaffolded and ready for development. Start
              building your fan engagement experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.sportfikit.online/docs"
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 transition-all group"
              >
                <span className="block font-bold text-zinc-800 group-hover:text-emerald-600 mb-1">
                  Read Docs
                </span>
                <span className="text-xs text-zinc-500">Master the API and Hooks.</span>
              </a>
              <a
                href="https://github.com/AltcoinDaddy/Sportfi-kit"
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 transition-all group"
              >
                <span className="block font-bold text-zinc-800 group-hover:text-emerald-600 mb-1">
                  GitHub Repo
                </span>
                <span className="text-xs text-zinc-500">View source and contribute.</span>
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div className="px-10 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                Next Step: Edit src/App.tsx
              </span>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-20 py-10 border-t border-zinc-50 text-center">
        <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em]">
          Integrated with Chiliz Chain
        </p>
      </footer>
    </SafeAreaWrapper>
  );
}

export default App;
