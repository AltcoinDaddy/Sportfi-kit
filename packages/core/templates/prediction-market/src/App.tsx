import { ConnectButton, PredictionCard, SafeAreaWrapper } from 'sportfi-kit';
import { useState } from 'react';

function App() {
  const [isVoting, setIsVoting] = useState(false);

  const handleVote = (label: string) => {
    setIsVoting(true);
    console.log(`Voting for ${label}`);
    setTimeout(() => setIsVoting(false), 2000);
  };

  return (
    <SafeAreaWrapper className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-emerald-50 text-zinc-800 selection:bg-emerald-500/10">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between gap-4 rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
              <img src="/logo.png" className="h-7 w-7 object-contain" alt="SportFi Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-zinc-950">
                sportfi<span className="text-emerald-600">kit</span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                Prediction Market
              </span>
            </div>
          </div>

          <div className="rounded-full border border-zinc-200 bg-white px-1.5 py-1 shadow-sm">
            <ConnectButton className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2" />
          </div>
        </header>

        <main className="flex flex-1 items-center">
          <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_60px_-30px_rgba(24,24,27,0.35)] backdrop-blur sm:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Live market
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Predict the outcome and track the market in real time.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                Browse live odds, back your favorite side, and follow the match as the probabilities shift with every
                update.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold text-zinc-500">Market type</div>
                  <div className="mt-2 text-sm font-bold text-zinc-950">Match winner</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold text-zinc-500">Status</div>
                  <div className="mt-2 text-sm font-bold text-zinc-950">Live</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-sm font-semibold text-zinc-500">Settling</div>
                  <div className="mt-2 text-sm font-bold text-zinc-950">Auto close</div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      Featured fixture
                    </div>
                    <div className="mt-2 text-xl font-black tracking-tight text-zinc-950">AC Milan vs Inter Milan</div>
                  </div>
                  <div className="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-600">82'</div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-zinc-950 text-xs font-bold text-white">
                      ACM
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-emerald-600 text-xs font-bold text-white">
                      INT
                    </div>
                  </div>
                  <div className="text-sm text-zinc-500">Current score: <span className="font-semibold text-zinc-950">2 - 1</span></div>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 to-teal-500 p-7 text-white shadow-[0_20px_60px_-30px_rgba(16,185,129,0.5)] sm:p-10">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-50/80">
                    Market board
                  </p>
                  <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                    Bet on the next big moment. 📈
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-emerald-50/90 sm:text-base">
                    Choose a side, confirm your prediction, and watch the odds evolve as the match unfolds.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] bg-white/10 ring-1 ring-inset ring-white/15 backdrop-blur">
                  <div className="p-4 sm:p-5">
                    <PredictionCard
                      homeTeam={{
                        name: 'AC Milan',
                        symbol: 'ACM',
                        score: '2',
                        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_A.C._Milan.svg',
                      }}
                      awayTeam={{
                        name: 'Inter Milan',
                        symbol: 'INT',
                        score: '1',
                        logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Inter_Milan_2021_logo.svg',
                      }}
                      predictionTitle="Match Winner"
                      isLive={true}
                      matchStatus="82'"
                      options={[
                        { label: 'HOME', odds: '2.10' },
                        { label: 'DRAW', odds: '3.45' },
                        { label: 'AWAY', odds: '3.80' },
                      ]}
                      onSelect={handleVote}
                      isLoading={isVoting}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SafeAreaWrapper>
  );
}

export default App;
