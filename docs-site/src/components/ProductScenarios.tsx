
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const scenarios = [
  {
    title: 'Matchday Prediction League',
    emoji: '🔮',
    product: 'A mobile dApp where fans predict game outcomes in real-time.',
    how: 'Use PredictionCard for the UI and usePythSportsFeed for automated on-chain settlement.',
    value: 'Drives high engagement during the 90 minutes of live play.'
  },
  {
    title: 'VIP Locker Room',
    emoji: '🛡️',
    product: 'Exclusive content portal for verified Fan Token holders.',
    how: 'Wrap premium features in FanTokenGate with a minimum balance requirement (e.g., 5 $ACM).',
    value: 'Directly incentivizes fans to hold and use their club tokens.'
  },
  {
    title: 'Settle-It Social Betting',
    emoji: '🤝',
    product: 'Decentralized P2P wagering pools where fans bet against friends.',
    how: 'Leverage WagerCard and useWagerPool to handle trustless logic on Chiliz Chain.',
    value: 'Eliminates the "house" and creates a viral social betting loop.'
  },
  {
    title: 'Stadium MVP Live Voting',
    emoji: '📊',
    product: 'Real-time polls displayed on stadium screens and fan phones.',
    how: 'Use PollCard and useSimpleVote on Chiliz Spicy for fast, free fan interaction.',
    value: 'Creates a direct feedback loop between the stadium event and the fan.'
  }
];

export const ProductScenarios = () => {
  return (
    <section id="scenarios" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Build the Future of Sports</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Four concrete products you can launch on Chiliz Chain in days, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/20 hover:border-emerald-500 transition-all group"
            >
              <div className="text-5xl mb-6">{s.emoji}</div>
              <h3 className="text-2xl font-black mb-4 text-slate-900">{s.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">The Product</div>
                  <p className="text-slate-600 font-medium">{s.product}</p>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">How it works</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.how}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 italic">"{s.value}"</span>
                  <ArrowRight className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
