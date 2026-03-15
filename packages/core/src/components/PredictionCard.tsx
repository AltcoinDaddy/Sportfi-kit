import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronRight } from 'lucide-react';

interface Team {
  name: string;
  symbol: string;
  logo?: string;
  score?: string | number;
}

interface PredictionCardProps {
  homeTeam: Team;
  awayTeam: Team;
  matchStatus?: string;
  isLive?: boolean;
  predictionTitle: string;
  options: { label: string; odds: string }[];
  onSelect: (label: string) => void;
  isLoading?: boolean;
  isSkeleton?: boolean;
  className?: string;
}

/**
 * PredictionCard - Premium UI component for prediction markets.
 * High-performance, animated, and mobile-friendly match-preview style.
 */
export const PredictionCard: React.FC<PredictionCardProps> = ({
  homeTeam,
  awayTeam,
  matchStatus,
  isLive = false,
  predictionTitle,
  options,
  onSelect,
  isLoading = false,
  isSkeleton = false,
  className = ""
}) => {
  if (isSkeleton) {
    return (
      <div className={`bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col animate-pulse ${className}`}>
        <div className="bg-slate-200 h-48 p-8 flex justify-around items-center">
          <div className="w-20 h-20 bg-slate-300 rounded-3xl" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-8 bg-slate-300 rounded-lg" />
            <div className="w-12 h-4 bg-slate-300 rounded-md" />
          </div>
          <div className="w-20 h-20 bg-slate-300 rounded-3xl" />
        </div>
        <div className="p-8 flex-1 flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="w-24 h-4 bg-slate-200 rounded-md" />
            <div className="flex gap-2">
              <div className="w-12 h-4 bg-slate-100 rounded-md" />
              <div className="w-12 h-4 bg-slate-100 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => <div key={i} className="h-16 bg-slate-100 rounded-2xl" />)}
          </div>
          <div className="h-14 bg-slate-200 rounded-2xl mt-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col ${className}`}>
      {/* Header / Match Preview */}
      <div className="bg-emerald-600 p-8 pt-10 text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Trophy size={18} />
          </div>
          {isLive && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/30 backdrop-blur-md border border-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-black tracking-widest uppercase">Live Match</span>
            </div>
          )}
          <div className="w-10 h-10 rounded-2xl bg-white/20" />
        </div>

        <div className="flex justify-around items-center py-4 relative z-10">
          {/* Home Team */}
          <div className="text-center group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -5 }}
              className="w-20 h-20 bg-white rounded-3xl mb-3 mx-auto shadow-2xl flex items-center justify-center text-slate-900 font-black text-sm overflow-hidden border-4 border-white/30"
            >
              {homeTeam.logo ? (
                <img src={homeTeam.logo} alt={homeTeam.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl tracking-tighter">{homeTeam.symbol}</span>
              )}
            </motion.div>
            <div className="text-[11px] font-black uppercase tracking-[0.15em] text-white/90">
              {homeTeam.name}
            </div>
          </div>

          {/* Score / Status */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-black mb-2 tracking-tighter flex items-center gap-4">
              <span className="drop-shadow-lg">{homeTeam.score ?? 0}</span>
              <span className="text-white/40 font-light">-</span>
              <span className="drop-shadow-lg">{awayTeam.score ?? 0}</span>
            </div>
            {matchStatus && (
              <div className="px-3 py-1 rounded-lg bg-emerald-500/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider">
                {matchStatus}
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="text-center group">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-20 h-20 bg-white rounded-3xl mb-3 mx-auto shadow-2xl flex items-center justify-center text-slate-900 font-black text-sm overflow-hidden border-4 border-white/30"
            >
              {awayTeam.logo ? (
                <img src={awayTeam.logo} alt={awayTeam.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl tracking-tighter">{awayTeam.symbol}</span>
              )}
            </motion.div>
            <div className="text-[11px] font-black uppercase tracking-[0.15em] text-white/90">
              {awayTeam.name}
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Body */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {predictionTitle}
          </div>
          <div className="flex gap-2">
            {['Trending', 'Boosted'].map(tag => (
              <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-slate-50 text-slate-400 border border-slate-100">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {options.map((opt, i) => (
            <motion.button 
              key={i} 
              whileHover={{ y: -4, borderColor: '#10b981', backgroundColor: '#f0fdf4' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(opt.label)}
              disabled={isLoading}
              className="p-4 rounded-2xl border border-slate-100 bg-white text-slate-900 shadow-sm transition-all text-center disabled:opacity-50 group/opt"
            >
              <div className="text-[10px] font-bold mb-1.5 uppercase text-slate-400 group-hover/opt:text-emerald-600 transition-colors">
                {opt.label}
              </div>
              <div className="text-lg font-black italic tracking-tight">
                {opt.odds}
              </div>
            </motion.button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.01, backgroundColor: '#0f172a' }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onSelect('PREDICT_CTA')}
          disabled={isLoading}
          className="w-full bg-slate-900 text-white rounded-2xl py-5 font-black text-sm shadow-2xl flex items-center justify-center gap-3 group/btn disabled:opacity-50 transition-all mt-auto"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            <>
              Predict Now 
              <ChevronRight size={20} className="group-hover/btn:translate-x-1.5 transition-transform text-emerald-400" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};
