
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Quickstart } from './components/Quickstart';
import { Examples } from './components/Examples';
import { UsageGuide } from './components/UsageGuide';
import { ApiReference } from './components/ApiReference';
import { WhatYouCanBuild } from './components/WhatYouCanBuild';
import { SociosGuide } from './components/SociosGuide';
import { SportFiKitProvider } from 'sportfi-kit';

function App() {
  return (
    <SportFiKitProvider config={{ reownProjectId: import.meta.env.VITE_REOWN_PROJECT_ID || '' }}>
      <div className="min-h-screen bg-mesh font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="sticky top-0 z-50 glass">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <motion.div 
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img src="/logo.png" className="w-full h-full object-contain" alt="SportFi Logo" />
                    </div>
                    <span className="text-xl font-black text-slate-900 tracking-tight">
                      SportFi <span className="text-emerald-600">Kit</span>
                    </span>
                  </motion.div>
                  <div className="hidden md:flex items-center gap-8">
                    {['Quickstart', 'Examples'].map((item) => (
                      <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors relative group"
                        whileHover={{ y: -2 }}
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full" />
                      </motion.a>
                    ))}
                    <a href="https://www.sportfikit.online" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">API Reference</a>
                    <motion.a 
                      href="https://github.com/AltcoinDaddy/Sportfi-kit" 
                      className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </div>
              </div>
            </nav>

            <main>
              <Hero />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Features />
                <Quickstart />
                <Examples />
                <WhatYouCanBuild />
                <UsageGuide />
                <ApiReference />
                <SociosGuide />
              </motion.div>
            </main>

            <footer className="bg-white border-t border-slate-100 py-16">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                   <div className="w-8 h-8 flex items-center justify-center">
                     <img src="/logo.png" className="w-full h-full object-contain opacity-80" alt="SportFi Logo" />
                   </div>
                   <span className="font-black text-lg">SportFi Kit</span>
                </div>
                <p className="text-slate-400 text-sm font-medium">© 2026. Designed for the Future of Sports.</p>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </div>
    </SportFiKitProvider>
  );
}

export default App;
