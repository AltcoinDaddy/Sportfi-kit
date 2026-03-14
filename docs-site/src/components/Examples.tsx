import { motion } from 'framer-motion';
import { Lock, Vote, ChevronRight, Wallet, CheckCircle2, Trophy } from 'lucide-react';

const PredictionScreen = () => (
  <div className="h-full bg-slate-50 flex flex-col">
    <div className="bg-emerald-600 p-5 text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center"><Trophy size={14} /></div>
        <div className="text-[10px] font-black tracking-[0.2em] uppercase opacity-80">Live Match</div>
        <div className="w-8 h-8 rounded-xl bg-white/20" />
      </div>
      <div className="flex justify-around items-center py-2">
        <div className="text-center group-hover:scale-105 transition-transform">
          <div className="w-14 h-14 bg-white rounded-2xl mb-3 mx-auto shadow-xl flex items-center justify-center text-slate-900 font-black text-xs">ACM</div>
          <div className="text-[10px] font-black uppercase tracking-wider">Milan</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-black mb-1">2 - 1</div>
          <div className="px-2 py-0.5 bg-emerald-500 rounded-full text-[8px] font-bold animate-pulse">72'</div>
        </div>
        <div className="text-center group-hover:scale-105 transition-transform">
          <div className="w-14 h-14 bg-white rounded-2xl mb-3 mx-auto shadow-xl flex items-center justify-center text-slate-900 font-black text-xs">INT</div>
          <div className="text-[10px] font-black uppercase tracking-wider">Inter</div>
        </div>
      </div>
    </div>
    <div className="p-6 flex-1">
      <div className="text-xs font-black text-slate-400 uppercase tracking-[0.1em] mb-4">Match Winner</div>
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[ {t: 'Home', o: '2.10'}, {t: 'Draw', o: '3.45'}, {t: 'Away', o: '3.80'} ].map((opt, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -2 }}
            className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${i === 0 ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-white border-slate-100 text-slate-900 shadow-sm'}`}
          >
            <div className={`text-[9px] font-bold mb-1 uppercase ${i === 0 ? 'text-emerald-100' : 'text-slate-400'}`}>{opt.t}</div>
            <div className="text-sm font-black italic">{opt.o}</div>
          </motion.div>
        ))}
      </div>
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-slate-900 text-white rounded-2xl py-4 font-black text-sm shadow-2xl flex items-center justify-center gap-2 group/btn"
      >
        Predict Now <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform text-emerald-400" />
      </motion.button>
    </div>
  </div>
);

const GateScreen = () => (
  <div className="h-full bg-slate-900 flex flex-col text-white relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-emerald-600/20 to-transparent pointer-events-none" />
    <div className="p-8 pt-16 flex-1 flex flex-col items-center text-center relative z-10">
      <motion.div 
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center mb-10 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
      >
        <Lock className="text-emerald-400" size={40} />
      </motion.div>
      <h4 className="text-2xl font-black mb-3 tracking-tight">Locker Room</h4>
      <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium">
        Hold <span className="text-white font-bold">$ACM</span> to unlock exclusive pre-match footage.
      </p>
      
      <div className="w-full bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 mb-10 text-left">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 font-black text-xs shadow-xl">ACM</div>
          <div className="flex-1">
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Tokens Required</div>
            <div className="text-lg font-black tracking-tight">10.0 <span className="text-xs text-slate-500 font-medium ml-1">ACM</span></div>
          </div>
        </div>
        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden mb-3">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '32%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
          />
        </div>
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
          <span className="text-slate-500">3.2 Owned</span>
          <span className="text-emerald-400">32% Access</span>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-white text-slate-900 rounded-2xl py-4 font-black text-sm flex items-center justify-center gap-2 mb-6 shadow-xl"
      >
        <Wallet size={18} /> Connect Wallet
      </motion.button>
      <button className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">Buy ACM Tokens</button>
    </div>
  </div>
);

const PollScreen = () => (
  <div className="h-full bg-white flex flex-col">
    <div className="p-6 border-b border-slate-50 bg-slate-50/30">
      <div className="flex items-center gap-2 mb-2">
        <Vote className="text-emerald-600" size={18} />
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Match Poll</span>
      </div>
      <h4 className="text-lg font-black text-slate-900 tracking-tight leading-tight">Who was your MVP for the Derby?</h4>
    </div>
    <div className="p-6 flex-1 space-y-4">
      {[
        { n: 'Rafael Leão', v: 45, s: true },
        { n: 'Lautaro Martínez', v: 28, s: false },
        { n: 'Mike Maignan', v: 15, s: false }
      ].map((opt, i) => (
        <motion.div 
          key={i} 
          whileHover={{ x: 4 }}
          className={`p-4 rounded-2xl border relative overflow-hidden transition-all ${opt.s ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100'}`}
        >
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${opt.s ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                {i + 1}
              </div>
              <span className={`text-sm font-bold tracking-tight ${opt.s ? 'text-slate-900' : 'text-slate-500'}`}>{opt.n}</span>
            </div>
            <div className="text-right">
               <span className="text-sm font-black text-slate-900">{opt.v}%</span>
               {opt.s && <CheckCircle2 size={12} className="text-emerald-600 ml-1 inline-block mb-0.5" />}
            </div>
          </div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${opt.v}%` }}
            transition={{ duration: 1, delay: 0.2 + i*0.1 }}
            className={`absolute bottom-0 left-0 h-1 ${opt.s ? 'bg-emerald-600' : 'bg-slate-200'}`} 
          />
        </motion.div>
      ))}
      <div className="pt-6 space-y-4">
        <div className="flex justify-between items-end mb-2">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">12,450 Votes Cast</div>
          <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Active</div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-emerald-600 text-white rounded-2xl py-4 font-black text-sm shadow-xl shadow-emerald-100"
        >
          Cast Your Vote
        </motion.button>
      </div>
    </div>
  </div>
);

const exampleApps = [
  { title: 'Prediction Market', theme: 'emerald-600', screen: 'prediction', component: PredictionScreen },
  { title: 'Fan Token Gate', theme: 'slate-900', screen: 'gate', component: GateScreen },
  { title: 'Live Fan Poll', theme: 'emerald-700', screen: 'poll', component: PollScreen },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const Examples = () => {
  return (
    <section id="examples" className="py-32 bg-white px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Built with SportFi Kit</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Explore premium experiences designed specifically for the Socios and Chiliz ecosystem.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {exampleApps.map((ex, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="flex flex-col items-center group w-full"
            >
              {/* Phone Frame */}
              <div className="w-full aspect-[320/660] max-h-[660px] max-w-[320px] border-[12px] border-slate-900 rounded-[3.5rem] overflow-hidden bg-white relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:shadow-[0_80px_120px_-30px_rgba(16,185,129,0.2)] group-hover:-translate-y-6 ring-8 ring-slate-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="absolute top-3 right-8 flex gap-1 z-20">
                  <div className="w-4 h-1.5 bg-slate-800 rounded-full" />
                  <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
                </div>
                
                {/* Actual Coded Content */}
                <div className="h-full w-full">
                  <ex.component />
                </div>
              </div>
              
              <div className="text-center mt-12">
                 <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">{ex.title}</h3>
                 <div className="w-12 h-1.5 bg-emerald-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
