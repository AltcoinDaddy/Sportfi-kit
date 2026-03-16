
import { motion } from 'framer-motion';
import { Database, Share2, Wallet, ShieldCheck, Zap } from 'lucide-react';

export const Architecture = () => {
  const steps = [
    { 
      icon: Wallet, 
      title: 'Environment Detection', 
      desc: 'SportFi Kit detects the browser (Socios, TG, or Mobile) and injects the correct wallet provider.',
      color: 'bg-blue-500'
    },
    { 
      icon: Database, 
      title: 'On-Chain Data', 
      desc: 'Retrieves Fan Token balances and sports oracle feeds directly from Chiliz Chain via Pyth.',
      color: 'bg-purple-500'
    },
    { 
      icon: ShieldCheck, 
      title: 'Trustless Logic', 
      desc: 'Moves wagering and voting from your backend to audited V3 smart contracts on-chain.',
      color: 'bg-emerald-500'
    },
    { 
      icon: Share2, 
      title: 'Premium Interaction', 
      desc: 'High-fidelity React components handle the complex Web3 state and animation for the fan.',
      color: 'bg-rose-500'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">How it Works</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Bridging the gap between Web2 sports apps and the Chiliz Chain.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-100/50 relative z-10 hover:border-emerald-500 transition-colors group"
              >
                <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-current/20 group-hover:scale-110 transition-transform`}>
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
                <div className="absolute top-0 right-0 p-4 text-slate-50 text-6xl font-black -z-10 group-hover:text-slate-100 transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                <Zap className="text-white fill-white" />
             </div>
             <div>
                <h4 className="text-xl font-bold italic">Socios Wallet Browser Optimized</h4>
                <p className="text-slate-400 text-sm">Every component is tested for the 2M+ user Chiliz ecosystem.</p>
             </div>
           </div>
           <a href="#quickstart" className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all">
              Build Now
           </a>
        </div>
      </div>
    </section>
  );
};
