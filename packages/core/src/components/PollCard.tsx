import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

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
  className?: string;
}

/**
 * PollCard - Premium UI component for live fan voting.
 * Features progress bar animations and "Matchday MVP" styling.
 */
export const PollCard: React.FC<PollCardProps> = ({
  title,
  subtitle = "Match Poll",
  options,
  onVote,
  hasVoted = false,
  userVoteId,
  totalVotes,
  isLoading = false,
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-8 pb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="text-emerald-600" size={12} />
          </div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {subtitle}
          </span>
        </div>
        <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
          {title}
        </h4>
      </div>

      {/* Options */}
      <div className="px-8 pb-8 flex-1 space-y-4">
        {options.map((opt, i) => {
          const isSelected = hasVoted && userVoteId === opt.id;
          const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
          
          return (
            <motion.button 
              key={opt.id} 
              whileHover={!hasVoted ? { scale: 1.01, x: 4 } : {}}
              whileTap={!hasVoted ? { scale: 0.99 } : {}}
              onClick={() => !hasVoted && onVote(opt.id)}
              disabled={hasVoted || isLoading}
              className={`w-full text-left p-5 rounded-2xl border transition-all relative overflow-hidden group/opt ${
                isSelected 
                  ? 'border-emerald-500 bg-emerald-50/20' 
                  : hasVoted 
                    ? 'border-slate-100 bg-slate-50/50 opacity-80' 
                    : 'border-slate-100 bg-white hover:border-emerald-200'
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-colors ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400 group-hover/opt:bg-emerald-100 group-hover/opt:text-emerald-600'
                  }`}>
                    {i + 1}
                  </div>
                  <span className={`text-sm font-bold tracking-tight transition-colors ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                    {opt.label}
                  </span>
                </div>
                <div className="text-right flex items-center gap-2">
                  <span className={`text-sm font-black italic ${isSelected ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {hasVoted ? `${percentage}%` : ''}
                  </span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center">
                      <CheckCircle2 size={10} className="text-white" />
                    </div>
                  )}
                </div>
              </div>
              
              {hasVoted && (
                <div className="absolute inset-0 bg-slate-100/30">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.2, ease: "circOut", delay: i * 0.1 }}
                    className={`h-full ${isSelected ? 'bg-emerald-500/10' : 'bg-slate-200/20'}`} 
                  />
                  {isSelected && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  )}
                </div>
              )}
            </motion.button>
          );
        })}

        {/* Footer info */}
        <div className="pt-6">
          <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
            <div className="text-slate-400">
              {totalVotes.toLocaleString()} Votes Cast
            </div>
            <div className={`flex items-center gap-1.5 ${hasVoted ? 'text-slate-400' : 'text-emerald-600'}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${hasVoted ? 'bg-slate-300' : 'bg-emerald-500 animate-pulse'}`} />
              {hasVoted ? 'Poll Ended' : 'Active'}
            </div>
          </div>
          
          <AnimatePresence>
            {!hasVoted && (
              <motion.button 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02, backgroundColor: '#0f172a' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onVote('SUBMIT_CTA')}
                disabled={isLoading}
                className="w-full bg-slate-900 text-white rounded-2xl py-5 font-black text-sm mt-8 shadow-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 group/btn"
              >
                {isLoading ? 'Processing...' : (
                  <>
                    Vote Now
                    <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform text-emerald-400" />
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
