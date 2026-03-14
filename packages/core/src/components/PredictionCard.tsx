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
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col ${className}`}>
      {/* Header / Match Preview */}
      <div className="bg-emerald-600 p-5 text-white relative">
        <div className="flex justify-between items-center mb-6">
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
            <Trophy size={14} />
          </div>
          {isLive && (
            <div className="text-[10px] font-black tracking-[0.2em] uppercase opacity-80">
              Live Match
            </div>
          )}
          <div className="w-8 h-8 rounded-xl bg-white/20" />
        </div>

        <div className="flex justify-around items-center py-2">
          {/* Home Team */}
          <div className="text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl mb-2 mx-auto shadow-lg flex items-center justify-center text-slate-900 font-black text-xs overflow-hidden">
              {homeTeam.logo ? (
                <img src={homeTeam.logo} alt={homeTeam.name} className="w-full h-full object-cover" />
              ) : (
                homeTeam.symbol
              )}
            </div>
            <div className="text-[10px] font-black uppercase tracking-wider">
              {homeTeam.name}
            </div>
          </div>

          {/* Score / Status */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-black mb-1 tracking-tighter">
              {homeTeam.score ?? 0} - {awayTeam.score ?? 0}
            </div>
            {matchStatus && (
              <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500/50'}`}>
                {matchStatus}
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="text-center group">
            <div className="w-14 h-14 bg-white rounded-2xl mb-2 mx-auto shadow-lg flex items-center justify-center text-slate-900 font-black text-xs overflow-hidden">
              {awayTeam.logo ? (
                <img src={awayTeam.logo} alt={awayTeam.name} className="w-full h-full object-cover" />
              ) : (
                awayTeam.symbol
              )}
            </div>
            <div className="text-[10px] font-black uppercase tracking-wider">
              {awayTeam.name}
            </div>
          </div>
        </div>
      </div>

      {/* Prediction Body */}
      <div className="p-6 flex-1">
        <div className="text-xs font-black text-slate-400 uppercase tracking-[0.1em] mb-4">
          {predictionTitle}
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-6">
          {options.map((opt, i) => (
            <motion.button 
              key={i} 
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(opt.label)}
              disabled={isLoading}
              className="p-3 rounded-2xl border border-slate-100 bg-white text-slate-900 shadow-sm hover:border-emerald-200 transition-all text-center disabled:opacity-50"
            >
              <div className="text-[9px] font-bold mb-1 uppercase text-slate-400">
                {opt.label}
              </div>
              <div className="text-sm font-black italic">
                {opt.odds}
              </div>
            </motion.button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('PREDICT_CTA')}
          disabled={isLoading}
          className="w-full bg-slate-900 text-white rounded-2xl py-4 font-black text-sm shadow-xl flex items-center justify-center gap-2 group/btn disabled:opacity-50 transition-all"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            <>
              Predict Now 
              <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform text-emerald-400" />
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};
