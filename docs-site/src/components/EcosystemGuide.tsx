
import { Shield, Zap, Globe, Layers } from 'lucide-react';

export const EcosystemGuide = () => {
  const points = [
    {
      title: 'Environment Detection',
      icon: Globe,
      problem: 'Wallets behaving differently across Socios, TG, and standard browsers.',
      solution: 'SafeAreaWrapper and detection hooks automatically normalize the UI for every stadium.'
    },
    {
      title: 'Trustless Logic',
      icon: Shield,
      problem: 'Fans require transparency in betting and voting results.',
      solution: 'Primitives like useWagerPool move settlement logic from your server to verified Chiliz smart contracts.'
    },
    {
      title: 'Real-Time Sport Data',
      icon: Zap,
      problem: 'Sports data is historically expensive and gated.',
      solution: 'usePythSportsFeed provides decentralized oracle data for live match outcomes on-chain.'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">The Chiliz-Socios Bridge</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
              SportFi Kit isn't just a UI library. It's the technical infrastructure for fan engagement on the <span className="text-emerald-400">Chiliz Chain</span>.
            </p>
            
            <div className="space-y-10">
              {points.map((p, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <p.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                    <p className="text-sm text-slate-500 mb-1"><span className="text-slate-400 font-bold uppercase text-[9px] tracking-widest mr-2">Problem</span>{p.problem}</p>
                    <p className="text-sm text-emerald-400/80"><span className="text-emerald-400 font-bold uppercase text-[9px] tracking-widest mr-2">Solution</span>{p.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-slate-800/50 border border-slate-700 p-12 rounded-[3.5rem] relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/20">
               <Layers className="text-white" size={40} />
            </div>
            
            <h3 className="text-2xl font-black mb-6">Technical Architecture</h3>
            <div className="space-y-6">
               {[
                 { step: 'A', name: 'Socios.com / TG User', color: 'text-slate-400' },
                 { step: 'B', name: 'SportFi Kit Integration', color: 'text-emerald-400 font-bold' },
                 { step: 'C', name: 'Premium Components & SDK', color: 'text-slate-300' },
                 { step: 'D', name: 'Chiliz Chain Logic (Smart Contracts)', color: 'text-slate-300' },
                 { step: 'E', name: 'Trustless Fan Engagement', color: 'text-emerald-400 font-bold uppercase tracking-wider text-xs' }
               ].map((step, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">{step.step}</div>
                    <div className={`h-px bg-slate-700 flex-grow ${i === 4 ? 'hidden' : ''}`} />
                    <div className={`${step.color}`}>{step.name}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
