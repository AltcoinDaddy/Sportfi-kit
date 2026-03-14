

const api = [
  { group: 'Hooks', items: ['useSportFiConnect', 'useFanTokenBalance', 'useSimpleVote', 'usePythSportsFeed', 'useMiniAppContext'] },
  { group: 'Components', items: ['ConnectButton', 'FanTokenGate', 'PredictionCard', 'SafeAreaWrapper', 'CloseMiniAppButton'] },
];

export const ApiReference = () => {
  return (
    <section id="api" className="py-24 px-4 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">API Reference</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {api.map((group, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4">{group.group}</h3>
              <div className="space-y-4">
                {group.items.map((item, j) => (
                  <div key={j} className="p-4 rounded-lg bg-slate-50 border border-slate-100 group hover:border-emerald-200 transition-all">
                    <code className="text-emerald-700 font-bold block mb-1">{item}()</code>
                    <p className="text-sm text-slate-500">Comprehensive JSDoc documented exports for production usage.</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
