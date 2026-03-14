import React from 'react';
import { motion } from 'framer-motion';
import { Vote, CheckCircle2 } from 'lucide-react';

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
    <div className={`bg-white rounded-3xl shadow-xl border border-slate-50 flex flex-col overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-slate-50 bg-slate-50/30">
        <div className="flex items-center gap-2 mb-2">
          <Vote className="text-emerald-600" size={18} />
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            {subtitle}
          </span>
        </div>
        <h4 className="text-lg font-black text-slate-900 tracking-tight leading-tight">
          {title}
        </h4>
      </div>

      {/* Options */}
      <div className="p-6 flex-1 space-y-4">
        {options.map((opt, i) => {
          const isSelected = hasVoted && userVoteId === opt.id;
          const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;
          
          return (
            <motion.button 
              key={opt.id} 
              whileHover={!hasVoted ? { x: 4 } : {}}
              onClick={() => !hasVoted && onVote(opt.id)}
              disabled={hasVoted || isLoading}
              className={`w-full text-left p-4 rounded-2xl border relative overflow-hidden transition-all text-slate-900 disabled:cursor-default ${
                isSelected ? 'border-emerald-200 bg-emerald-50/30' : 'border-slate-100 bg-white'
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {i + 1}
                  </div>
                  <span className={`text-sm font-bold tracking-tight ${isSelected ? 'text-slate-900' : 'text-slate-500'}`}>
                    {opt.label}
                  </span>
                </div>
                {hasVoted && (
                  <div className="text-right">
                    <span className="text-sm font-black text-slate-900">{percentage}%</span>
                    {isSelected && <CheckCircle2 size={12} className="text-emerald-600 ml-1 inline-block mb-0.5" />}
                  </div>
                )}
              </div>
              
              {hasVoted && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`absolute bottom-0 left-0 h-1 ${isSelected ? 'bg-emerald-600' : 'bg-slate-200'}`} 
                />
              )}
            </motion.button>
          );
        })}

        {/* Footer */}
        <div className="pt-6 space-y-4">
          <div className="flex justify-between items-end mb-2">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {totalVotes.toLocaleString()} Votes Cast
            </div>
            {!hasVoted && (
              <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                Active
              </div>
            )}
          </div>
          
          {!hasVoted && (
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onVote('SUBMIT_CTA')}
              disabled={isLoading}
              className="w-full bg-emerald-600 text-white rounded-2xl py-4 font-black text-sm shadow-xl shadow-emerald-100 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Casting Vote...' : 'Cast Your Vote'}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};
