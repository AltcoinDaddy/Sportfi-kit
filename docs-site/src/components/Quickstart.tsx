import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Copy, Check, Code, Sparkles } from 'lucide-react';

const steps = [
  { 
    id: 'create',
    name: '1. Create', 
    cmd: 'npx sportfi-kit create my-app',
    desc: 'Scaffold a new project with the SportFi Kit template.'
  },
  { 
    id: 'install',
    name: '2. Install', 
    cmd: 'npm install',
    desc: 'Install all necessary dependencies, including Chiliz-specific tools.'
  },
  { 
    id: 'launch',
    name: '3. Launch', 
    cmd: 'npm run dev',
    desc: 'Start the development server with Hot Module Replacement.'
  }
];

export const Quickstart = () => {
  const [activeTab, setActiveTab] = useState(steps[0].id);
  const [copied, setCopied] = useState(false);

  const activeStep = steps.find(s => s.id === activeTab)!;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeStep.cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="quickstart" className="py-24 px-4 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Fast-track to Fan Apps</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Everything you need to build production-ready Chiliz mini-apps in one command.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Tabs Control */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={`flex flex-col p-6 rounded-2xl text-left transition-all relative border ${
                  activeTab === step.id 
                    ? 'bg-white border-emerald-200 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-500' 
                    : 'bg-transparent border-transparent hover:bg-white/50 grayscale hover:grayscale-0'
                }`}
              >
                <div className="font-black text-xs uppercase tracking-widest mb-2 transition-colors duration-300">
                  {step.name}
                </div>
                <div className={`text-sm font-medium transition-colors duration-300 ${activeTab === step.id ? 'text-slate-900' : 'text-slate-400'}`}>
                  {step.desc}
                </div>
                {activeTab === step.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-500/5 -z-10 rounded-2xl"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Terminal View */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 rounded-[2rem] shadow-2xl shadow-slate-200 overflow-hidden border border-slate-800">
              <div className="flex justify-between items-center px-8 py-5 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-3">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                     <div className="w-3 h-3 rounded-full bg-slate-700" />
                   </div>
                   <div className="h-4 w-px bg-slate-800 mx-2" />
                   <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                     <Terminal size={14} /> zsh — my-fan-app
                   </div>
                </div>
                <button 
                  onClick={handleCopy}
                  className="p-2.5 rounded-xl bg-slate-800 text-emerald-400 hover:bg-slate-700 transition-all flex items-center gap-2 text-xs font-bold"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <div className="p-10 min-h-[160px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="w-full flex items-center gap-6"
                  >
                    <Code className="text-slate-800 flex-shrink-0" size={40} />
                    <code className="text-emerald-400 text-xl md:text-3xl font-mono leading-relaxed truncate">
                      <span className="text-slate-600 mr-4 tracking-tighter">$</span>
                      <span className="text-white">{activeStep.cmd.split(' ')[0]}</span> {activeStep.cmd.split(' ').slice(1).join(' ')}
                    </code>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            <p className="mt-8 text-center text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              Pre-integrated with Tailwind, AppKit, and Chiliz Chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

