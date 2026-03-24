import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Activity, Users } from 'lucide-react';

interface PollOption {
  id: string | number;
  label: string;
  votes: number;
  isWinner?: boolean;
}

interface PollCardProps {
  title: string;
  subtitle?: string;
  options: PollOption[];
  onVote: (optionId: string | number) => void;
  hasVoted?: boolean;
  userVoteId?: string | number;
  totalVotes: number;
  isLoading?: boolean;
  isSkeleton?: boolean;
  className?: string;
}

/**
 * PollCard - High-performance "Elite Industrial" voting terminal.
 * Features data-dense telemetry, sharp broadcast styling, and optimized progress tracking.
 */
export const PollCard: React.FC<PollCardProps> = ({
  title,
  subtitle = "Fan Decision",
  options,
  onVote,
  hasVoted = false,
  userVoteId,
  totalVotes,
  isLoading = false,
  isSkeleton = false,
  className = ""
}) => {
  if (isSkeleton) {
    return (
      <div className={`bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse ${className}`}>
        <div className="p-8 pb-6 bg-slate-950/50">
          <div className="w-24 h-3 bg-slate-800 rounded mb-4" />
          <div className="w-48 h-8 bg-slate-800 rounded" />
        </div>
        <div className="p-8 space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-slate-800/50 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 border border-slate-800 rounded-2xl flex flex-col shadow-2xl ${className}`}>
      {/* Industrial Accent Header */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-transparent to-transparent opacity-40" />
      
      <div className="p-8 pb-6 bg-slate-900/30 border-b border-slate-800/50">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="text-emerald-500" size={14} />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            {subtitle}
          </span>
        </div>
        <h4 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
          {title}
        </h4>
      </div>

      <div className="p-8 flex-1 space-y-4">
        {options.map((opt, i) => {
          const isSelected = hasVoted && userVoteId === opt.id;
          const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
          
          return (
            <motion.button 
              key={opt.id} 
              whileHover={!hasVoted ? { x: 4, backgroundColor: 'rgba(255,255,255,0.02)' } : {}}
              whileTap={!hasVoted ? { scale: 0.98 } : {}}
              onClick={() => !hasVoted && onVote(opt.id)}
              disabled={hasVoted || isLoading}
              className={`w-full text-left p-5 rounded-xl border transition-all relative overflow-hidden group/opt ${
                isSelected 
                  ? 'border-emerald-500/50 bg-emerald-500/10' 
                  : hasVoted 
                    ? 'border-slate-800/50 bg-slate-900/20' 
                    : 'border-slate-800 bg-slate-950 hover:border-slate-600'
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center font-mono font-black text-xs transition-colors ${
                    isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-500 group-hover/opt:text-emerald-500'
                  }`}>
                    0{i + 1}
                  </div>
                  <span className={`text-sm font-black uppercase tracking-tight transition-colors ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                    {opt.label}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  {hasVoted && (
                    <span className={`text-sm font-black font-mono ${isSelected ? 'text-emerald-500' : 'text-slate-500'}`}>
                      {percentage}%
                    </span>
                  )}
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                      <CheckCircle2 size={12} className="text-slate-950" />
                    </div>
                  )}
                </div>
              </div>
              
              {hasVoted && (
                <div className="absolute inset-0 z-0">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                    className={`h-full ${isSelected ? 'bg-emerald-500/5' : 'bg-slate-800/10'}`} 
                  />
                  {isSelected && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      className="absolute bottom-0 left-0 h-[1px] bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                    />
                  )}
                </div>
              )}
            </motion.button>
          );
        })}

        <div className="pt-6 border-t border-slate-800/50 mt-4">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <Users size={12} className="text-slate-600" />
              {totalVotes.toLocaleString()} Telemetry Points
            </div>
            <div className={`flex items-center gap-1.5 ${hasVoted ? 'text-slate-700' : 'text-emerald-500'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${hasVoted ? 'bg-slate-800' : 'bg-emerald-500 animate-pulse'}`} />
              {hasVoted ? 'TRANSMISSION_ENDED' : 'LIVE_FEED'}
            </div>
          </div>
          
          <AnimatePresence>
            {!hasVoted && (
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onVote('SUBMIT_CTA')}
                disabled={isLoading}
                className="w-full bg-white text-slate-950 rounded-xl py-5 font-black text-xs uppercase tracking-[0.2em] mt-8 shadow-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 group/btn"
              >
                {isLoading ? 'Processing Signal...' : (
                  <>
                    Cast Decision
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1.5 transition-transform text-emerald-600" />
                  </>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

