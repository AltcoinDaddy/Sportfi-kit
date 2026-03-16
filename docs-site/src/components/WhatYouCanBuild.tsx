
import { Target, Vote, Lock, Ticket, Info, Trophy, FileText, ArrowRight } from 'lucide-react';

const ideas = [
  { 
    icon: Target, 
    title: 'Match-Day Markets', 
    desc: 'Deploy trustless match outcome markets. Uses usePythSportsFeed for real-time oracle settlement on Chiliz Chain.',
    stack: 'PredictionCard + usePythSportsFeed + Chiliz Mainnet'
  },
  { 
    icon: Trophy, 
    title: 'Social Wagering', 
    desc: 'Let fans bet $CHZ against each other in verified P2P pools. No central house, purely decentralized logic.',
    stack: 'WagerCard + useWagerPool + Smart Contracts'
  },
  { 
    icon: Lock, 
    title: 'Fan Token Gating', 
    desc: 'Instantly lock premium content (videos, chats, drops) for Fan Token holders. No backend required.',
    stack: 'FanTokenGate + useFanTokenBalance + Socios Browser'
  },
  { 
    icon: Vote, 
    title: 'Governance & Polls', 
    desc: 'Capture real-time fan sentiment for MVPs or kits. High-fidelity results perfect for match-day stadium screens.',
    stack: 'PollCard + useSimpleVote + Chiliz Spicy'
  },
  { 
    icon: Ticket, 
    title: 'Ticketing & Access', 
    desc: 'Verify stadium attendance or season ticket ownership using on-chain metadata and geofencing.',
    stack: 'SportFiConnect + Chiliz Scan + Mini App SDK'
  },
  { 
    icon: Info, 
    title: 'Custom Sports dApps', 
    desc: 'Build specialized tools like kit configurators or trading cards with standardized Web3 UI components.',
    stack: 'ActionToast + ConnectButton + SafeAreaWrapper'
  },
];

export const WhatYouCanBuild = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-emerald-400">What You Can Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, i) => (
            <div key={i} className="p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all group flex flex-col h-full">
              <idea.icon className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6 flex-grow">{idea.desc}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-700/50">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Suggested Stack</div>
                <div className="text-xs font-mono text-emerald-400/80 bg-emerald-400/5 px-3 py-2 rounded-lg border border-emerald-400/10">
                  {idea.stack}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
               <FileText size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold">Deep Dive: Product Scenarios</h4>
              <p className="text-slate-400 text-sm">Read our detailed guide on deploying specific fan experiences.</p>
            </div>
          </div>
          <a 
            href="file:///Users/daddy/.gemini/antigravity/brain/cd19199a-c26a-4b0a-88cb-17c383624799/product_scenarios.md" 
            className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2"
          >
            Read Guide <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
