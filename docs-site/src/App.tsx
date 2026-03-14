
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Quickstart } from './components/Quickstart';
import { Examples } from './components/Examples';
import { UsageGuide } from './components/UsageGuide';
import { ApiReference } from './components/ApiReference';
import { WhatYouCanBuild } from './components/WhatYouCanBuild';
import { SociosGuide } from './components/SociosGuide';
import { Leaf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">SportFi <span className="text-slate-500 font-medium">Kit</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#quickstart" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Quickstart</a>
              <a href="#examples" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Examples</a>
              <a href="#api" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">API Reference</a>
              <a href="https://github.com/chiliz/sportfi-kit" className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all shadow-sm">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Quickstart />
        <Examples />
        <WhatYouCanBuild />
        <UsageGuide />
        <ApiReference />
        <SociosGuide />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Leaf className="text-emerald-600 w-5 h-5" />
             <span className="font-bold">SportFi Kit</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 Chiliz Chain. Built for Sports & Fan Engagement.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
