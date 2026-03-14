import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto text-center relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          The Web3 Toolkit for Modern Sports
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Build for the <br />
          <span className="text-gradient drop-shadow-sm">Stadium of Tomorrow</span>
        </motion.h1>

        <motion.p 
          className="max-w-3xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Open-source React components and hooks engineered for high-performance fan engagement on <span className="text-slate-900 font-bold">Chiliz Chain</span>.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="#quickstart" 
            className="group w-full sm:w-auto bg-emerald-600 text-white px-10 py-5 rounded-2xl text-lg font-black hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-200 flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <div className="w-full sm:w-auto bg-white/40 backdrop-blur-md border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold text-slate-900 font-mono shadow-xl transition-all hover:bg-white/60 cursor-copy group">
            <span className="text-slate-400 group-hover:text-emerald-500 transition-colors mr-2">$</span>
            npx sportfi-kit create
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { icon: Zap, label: "Ultrafast Performance" },
            { icon: Shield, label: "Enterprise Security" },
            { icon: Sparkles, label: "Premium Components" },
            { icon: ArrowRight, label: "Seamless Integration" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
