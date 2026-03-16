
import { Target, Vote, Lock, Ticket, Info, Trophy } from 'lucide-react';

const ideas = [
  { icon: Target, title: 'Prediction Markets', desc: 'Allow fans to bet on game outcomes or player stats using CHZ.' },
  { icon: Lock, title: 'Gated Content', desc: 'Exclusive locker room footage or interviews for token holders.' },
  { icon: Vote, title: 'Live Fan Polls', desc: 'Real-time voting on MVP, kits, or match-day music.' },
  { icon: Trophy, title: 'P2P Wagering Pools', desc: 'Trustless, decentralized pool wagering directly on Chiliz Chain.' },
  { icon: Ticket, title: 'Socios Check-ins', desc: 'Geofenced rewards for fans physically attending the stadium.' },
  { icon: Info, title: 'Pyth Sports Feed', desc: 'Interactive trivia using real-time sports oracle data.' },
];

export const WhatYouCanBuild = () => {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-emerald-400">What You Can Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, i) => (
            <div key={i} className="p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-emerald-500 transition-all group">
              <idea.icon className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
              <p className="text-slate-400 leading-relaxed">{idea.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
