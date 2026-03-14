import { Lock, Vote, ChevronRight, Wallet, CheckCircle2 } from 'lucide-react';

const PredictionScreen = () => (
  <div className="h-full bg-slate-50 flex flex-col">
    <div className="bg-emerald-600 p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-white/20" />
        <div className="text-xs font-bold tracking-widest uppercase">Live Match</div>
        <div className="w-8 h-8 rounded-full bg-white/20" />
      </div>
      <div className="flex justify-around items-center pt-2">
        <div className="text-center">
          <div className="w-12 h-12 bg-white rounded-xl mb-2 mx-auto flex items-center justify-center text-slate-900 font-bold">ACM</div>
          <div className="text-[10px] font-bold">Milan</div>
        </div>
        <div className="text-2xl font-black">2 - 1</div>
        <div className="text-center">
          <div className="w-12 h-12 bg-white rounded-xl mb-2 mx-auto flex items-center justify-center text-slate-900 font-bold">INT</div>
          <div className="text-[10px] font-bold">Inter</div>
        </div>
      </div>
    </div>
    <div className="p-4 flex-1">
      <div className="text-sm font-bold text-slate-900 mb-3">Match Winner</div>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {[ {t: 'Home', o: '2.10'}, {t: 'Draw', o: '3.45'}, {t: 'Away', o: '3.80'} ].map((opt, i) => (
          <div key={i} className={`p-2 rounded-lg border text-center transition-colors ${i === 0 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-slate-200'}`}>
            <div className="text-[10px] text-slate-500 mb-1">{opt.t}</div>
            <div className="text-sm font-bold text-slate-900">{opt.o}</div>
          </div>
        ))}
      </div>
      <button className="w-full bg-emerald-600 text-white rounded-xl py-3 font-bold text-sm shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
        Predict Now <ChevronRight size={16} />
      </button>
    </div>
    <div className="p-4 border-t border-slate-100 bg-white">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Trending</div>
      <div className="flex gap-2">
        <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] text-slate-600">Next Goal</div>
        <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] text-slate-600">Total Cards</div>
      </div>
    </div>
  </div>
);

const GateScreen = () => (
  <div className="h-full bg-slate-900 flex flex-col text-white">
    <div className="p-6 pt-12 flex-1 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30">
        <Lock className="text-emerald-400" size={32} />
      </div>
      <h4 className="text-xl font-bold mb-2">Exclusive Content</h4>
      <p className="text-slate-400 text-xs mb-8 leading-relaxed">
        This locker room access is only available for $ACM Fan Token holders.
      </p>
      
      <div className="w-full bg-slate-800 rounded-2xl p-4 border border-slate-700 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">ACM</div>
          <div className="text-left">
            <div className="text-xs font-bold font-mono tracking-wider">ACM TOKEN</div>
            <div className="text-[10px] text-slate-400 underline decoration-slate-600 uppercase tracking-widest">Required: 10.0</div>
          </div>
        </div>
        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-emerald-500 rounded-full" />
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-slate-400">
          <span>Your Balance: 3.2</span>
          <span className="text-emerald-400">32% Complete</span>
        </div>
      </div>

      <button className="w-full bg-white text-slate-900 rounded-xl py-3 font-bold text-sm flex items-center justify-center gap-2 mb-4 hover:bg-slate-100 transition-colors">
        <Wallet size={16} /> Connect Wallet
      </button>
      <button className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Buy ACM Tokens</button>
    </div>
    <div className="p-4 bg-slate-800/50 text-[10px] text-slate-500 text-center border-t border-white/5">
      Powered by Chiliz Chain
    </div>
  </div>
);

const PollScreen = () => (
  <div className="h-full bg-white flex flex-col">
    <div className="p-4 border-b border-slate-100">
      <div className="flex items-center gap-2 mb-1">
        <Vote className="text-emerald-600" size={16} />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Poll</span>
      </div>
      <h4 className="text-sm font-bold text-slate-900">Matchday MVP: Milan vs Inter</h4>
    </div>
    <div className="p-4 flex-1 space-y-3">
      {[
        { n: 'Rafael Leão', v: 45, s: true },
        { n: 'Lautaro Martínez', v: 28, s: false },
        { n: 'Mike Maignan', v: 15, s: false },
        { n: 'Hakan Çalhanoğlu', v: 12, s: false }
      ].map((opt, i) => (
        <div key={i} className={`p-3 rounded-xl border relative overflow-hidden transition-all ${opt.s ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-100'}`}>
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-700">{opt.n}</span>
              {opt.s && <CheckCircle2 size={12} className="text-emerald-600" />}
            </div>
            <span className="text-xs font-bold text-slate-900">{opt.v}%</span>
          </div>
          <div 
            className={`absolute bottom-0 left-0 h-1 transition-all duration-1000 ${opt.s ? 'bg-emerald-500' : 'bg-slate-200'}`} 
            style={{ width: `${opt.v}%` }} 
          />
        </div>
      ))}
      <div className="pt-4 text-center">
        <div className="text-[10px] text-slate-400 mb-4">Total Votes: 12,450 • Ends in 12:45</div>
        <button className="w-full bg-slate-900 text-white rounded-xl py-3 font-bold text-sm">
          Vote Now
        </button>
      </div>
    </div>
  </div>
);

const exampleApps = [
  { title: 'Prediction Market', theme: 'emerald-600', screen: 'prediction', component: PredictionScreen },
  { title: 'Fan Token Gate', theme: 'slate-900', screen: 'gate', component: GateScreen },
  { title: 'Live Fan Poll', theme: 'emerald-700', screen: 'poll', component: PollScreen },
];

export const Examples = () => {
  return (
    <section id="examples" className="py-24 bg-white px-4 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-16 text-center">Built with SportFi Kit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
          {exampleApps.map((ex, i) => (
            <div key={i} className="flex flex-col items-center group w-full max-w-[320px]">
              {/* Phone Frame */}
              <div className="w-full aspect-[280/580] max-h-[580px] border-[10px] border-slate-900 rounded-[2.5rem] overflow-hidden bg-white relative shadow-2xl transition-transform group-hover:-translate-y-4 duration-500 ring-4 ring-slate-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-20" />
                
                {/* Actual Coded Content */}
                <div className="h-full w-full">
                  <ex.component />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">{ex.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
