import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronRight, Activity, Zap } from 'lucide-react';

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
 * PredictionCard - High-performance "Elite Industrial" prediction terminal.
 * Features technical match telemetry, sharp broadcast-ready styling, and optimized betting interface.
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
      <div className={`bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse ${className}`}>
        <div className="h-40 bg-slate-950/50 p-8 flex justify-around items-center">
          <div className="w-16 h-16 bg-slate-800 rounded-lg" />
          <div className="w-20 h-8 bg-slate-800 rounded" />
          <div className="w-16 h-16 bg-slate-800 rounded-lg" />
        </div>
        <div className="p-8 space-y-6">
          <div className="h-4 w-32 bg-slate-800 rounded" />
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => <div key={i} className="h-14 bg-slate-800/50 rounded-lg" />)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 border border-slate-800 rounded-2xl flex flex-col shadow-2xl ${className}`}>
      {/* Technical Header */}
      <div className="bg-slate-900/80 p-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Trophy size={100} strokeWidth={1} />
        </div>
        
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <Zap className="text-emerald-500" size={14} />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Match Analysis</span>
          </div>
          {isLive && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-500 tracking-widest uppercase italic">Live Feed</span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center relative z-10 px-4">
          {/* Home Team */}
          <div className="text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 bg-slate-800 rounded-xl mb-3 flex items-center justify-center border border-slate-700 shadow-xl overflow-hidden"
            >
              {homeTeam.logo ? (
                <img src={homeTeam.logo} alt={homeTeam.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-lg font-black text-slate-400 font-mono">{homeTeam.symbol}</span>
              )}
            </motion.div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              {homeTeam.symbol}
            </div>
          </div>

          {/* Score / Status */}
          <div className="flex flex-col items-center">
            <div className="text-4xl font-black text-white tracking-tighter flex items-center gap-6 font-mono">
              <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">{homeTeam.score ?? 0}</span>
              <span className="text-emerald-500">:</span>
              <span className="bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">{awayTeam.score ?? 0}</span>
            </div>
            {matchStatus && (
              <div className="mt-4 text-[11px] font-black text-emerald-500/60 font-mono uppercase tracking-[0.2em]">
                Minute: {matchStatus}
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 bg-slate-800 rounded-xl mb-3 flex items-center justify-center border border-slate-700 shadow-xl overflow-hidden"
            >
              {awayTeam.logo ? (
                <img src={awayTeam.logo} alt={awayTeam.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-lg font-black text-slate-400 font-mono">{awayTeam.symbol}</span>
              )}
            </motion.div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              {awayTeam.symbol}
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Body */}
      <div className="p-8 flex-1 flex flex-col bg-slate-900/20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Activity className="text-emerald-500/50" size={14} />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{predictionTitle}</span>
          </div>
          <div className="flex gap-2 font-mono">
            {['VOLATILE', 'HIGH_V'].map(tag => (
              <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded border border-slate-800 bg-slate-950 text-slate-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-8">
          {options.map((opt, i) => (
            <motion.button 
              key={i} 
              whileHover={{ y: -2, borderColor: 'rgba(16, 185, 129, 0.4)', backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(opt.label)}
              disabled={isLoading}
              className="p-4 rounded-xl border border-slate-800 bg-slate-950 text-white transition-all text-center disabled:opacity-50 group/opt"
            >
              <div className="text-[9px] font-black mb-2 uppercase text-slate-600 group-hover/opt:text-emerald-500 transition-colors tracking-widest leading-none">
                {opt.label}
              </div>
              <div className="text-lg font-black font-mono tracking-tighter">
                {opt.odds}
              </div>
            </motion.button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={() => onSelect('PREDICT_CTA')}
          disabled={isLoading}
          className="w-full bg-white text-slate-950 rounded-xl py-5 font-black text-xs uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 group/btn disabled:opacity-50 transition-all mt-auto"
        >
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              Executing Order...
            </div>
          ) : (
            <>
              Initialize Prediction 
              <ChevronRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform text-emerald-600" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

