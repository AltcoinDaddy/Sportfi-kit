
import { Smartphone, ShieldCheck, MapPin } from 'lucide-react';

export const SociosGuide = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <Smartphone className="text-emerald-600" />
           </div>
           <h2 className="text-4xl font-extrabold text-slate-900">Socios Browser Guide</h2>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <p className="text-lg text-slate-600">
            Integrating your dApp with the Socios.com Wallet Browser requires specific considerations for the best fan experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-slate-100 shadow-sm">
              <ShieldCheck className="text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Detection</h4>
              <p className="text-sm text-slate-500">The kit automatically detects the Socios environment and exposes it via <code>useMiniAppContext</code>.</p>
            </div>
            <div className="p-6 rounded-lg border border-slate-100 shadow-sm">
              <MapPin className="text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Safe Areas</h4>
              <p className="text-sm text-slate-500">Wrap your layout in <code>SafeAreaWrapper</code> to handle device notches and OS toolbars.</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-100">
             <h4 className="font-bold text-emerald-900 mb-3">Testing in Socios</h4>
             <p className="text-emerald-700 text-sm mb-4">
               To test your dApp, deploy to a public URL (Vercel/Netlify) and share the link with the Socios developer team or use the internal dApp testing tool.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
