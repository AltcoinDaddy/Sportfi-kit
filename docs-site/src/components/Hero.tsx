
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Build the Next Generation of <br />
          <span className="text-emerald-600 italic">Fan Engagement</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Open-source React components and hooks optimized for Chiliz Chain and Socios.com. 
          The complete toolkit for SportFi dApps and Mini Apps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#quickstart" className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-md text-lg font-bold hover:opacity-90 transition-all shadow-lg flex items-center justify-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </a>
          <div className="w-full sm:w-auto bg-white border border-slate-200 px-8 py-4 rounded-md text-lg font-bold text-slate-700 font-mono shadow-sm">
            npx sportfi-kit create
          </div>
        </div>
      </div>
    </section>
  );
};
