
import { motion } from 'framer-motion';
import { Database, Share2, Wallet, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const Architecture = () => {
  const steps = [
    { 
      icon: Wallet, 
      title: 'Environment Detection', 
      desc: 'SportFi Kit detects the browser (Socios, TG, or Mobile) and injects the correct wallet provider.',
      accent: 'text-emerald-500'
    },
    { 
      icon: Database, 
      title: 'On-Chain Data', 
      desc: 'Retrieves Fan Token balances and sports oracle feeds directly from Chiliz Chain via Pyth.',
      accent: 'text-teal-500'
    },
    { 
      icon: ShieldCheck, 
      title: 'Trustless Logic', 
      desc: 'Moves wagering and voting from your backend to audited V3 smart contracts on-chain.',
      accent: 'text-cyan-500'
    },
    { 
      icon: Share2, 
      title: 'Premium Interaction', 
      desc: 'High-fidelity React components handle the complex Web3 state and animation for the fan.',
      accent: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-32 px-4 bg-slate-50/50 relative overflow-hidden border-y border-slate-100">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">The Technical Core</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Bridging the gap between standard fan apps and the <span className="text-emerald-600 font-bold">Chiliz Chain</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/40 relative z-10 hover:border-emerald-500/50 transition-all duration-500 group"
            >
              <div className={`mb-8 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100 group-hover:bg-emerald-50 group-hover:ring-emerald-100 transition-all duration-500`}>
                <step.icon className={`${step.accent} transition-transform duration-500 group-hover:scale-110`} size={24} />
              </div>
              
              <div className="text-4xl font-black text-slate-100 mb-4 group-hover:text-emerald-500/10 transition-colors duration-500">
                0{i + 1}
              </div>

              <h3 className="text-xl font-black mb-3 text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {step.desc}
              </p>

              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-12 h-1 bg-emerald-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[3.5rem] bg-slate-950 text-white relative overflow-hidden group border border-slate-800 shadow-2xl shadow-emerald-950/20"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] group-hover:bg-emerald-500/20 transition-all" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
               <div className="w-20 h-20 rounded-[2rem] bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                  <Zap className="text-white fill-white" size={32} />
               </div>
               <div>
                  <h4 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">Socios.com Optimized</h4>
                  <p className="text-slate-400 text-lg font-medium">Built to scale for <span className="text-white">2M+ sports fans</span> on the Chiliz ecosystem.</p>
               </div>
             </div>
             <a href="#quickstart" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-1 flex items-center gap-2">
                Start Building <ArrowRight size={18} />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
