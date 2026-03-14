
import { Shield, Zap, Smartphone, Globe } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Fan-Token Gating', desc: 'Secure content and features based on Chiliz Chain fan token balances.' },
  { icon: Zap, title: 'One-Line Provider', desc: 'Pre-configured AppKit and Wagmi for instant Chiliz network integration.' },
  { icon: Smartphone, title: 'Socios Optimized', desc: 'Auto-detection, safe-area support, and native bridges for Socios.com.' },
  { icon: Globe, title: 'SportFi Ready', desc: 'Components for predictions, polls, and real-time oracle data.' },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-xl border border-slate-100 hover:border-emerald-100 transition-all hover:bg-emerald-50/30 group">
              <f.icon className="w-10 h-10 text-emerald-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
