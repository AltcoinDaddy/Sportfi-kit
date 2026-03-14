import { motion } from 'framer-motion';
import { Shield, Zap, Smartphone, Globe } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Fan-Token Gating', desc: 'Secure content and features based on Chiliz Chain fan token balances.' },
  { icon: Zap, title: 'One-Line Provider', desc: 'Pre-configured AppKit and Wagmi for instant Chiliz network integration.' },
  { icon: Smartphone, title: 'Socios Optimized', desc: 'Auto-detection, safe-area support, and native bridges for Socios.com.' },
  { icon: Globe, title: 'SportFi Ready', desc: 'Components for predictions, polls, and real-time oracle data.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all hover:bg-emerald-50/20 group relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:rotate-6 transition-all duration-500">
                <f.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
