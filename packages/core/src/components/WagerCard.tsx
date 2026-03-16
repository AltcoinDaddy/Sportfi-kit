import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, TrendingUp, Info, ChevronRight, Check } from 'lucide-react';
import { formatEther } from 'viem';

interface WagerCardProps {
  matchName: string;
  homeTeam: string;
  awayTeam: string;
  totalVolume: bigint;
  homePool: bigint;
  awayPool: bigint;
  drawPool: bigint;
  onPlaceWager: (outcomeId: number, amount: string) => void;
  isLoading?: boolean;
  isSkeleton?: boolean;
  className?: string;
}

/**
 * WagerCard - The Elite financial primitive UI for v2.0.
 * Visualizes pari-mutuel pools and potential payouts with high-fidelity animations.
 */
export const WagerCard: React.FC<WagerCardProps> = ({
  matchName,
  homeTeam,
  awayTeam,
  totalVolume,
  homePool,
  awayPool,
  drawPool,
  onPlaceWager,
  isLoading = false,
  isSkeleton = false,
  className = ""
}) => {
  const [selectedOutcome, setSelectedOutcome] = useState<number | null>(null);
  const [amount, setAmount] = useState<string>("10");

  const outcomes = [
    { id: 1, label: homeTeam, pool: homePool },
    { id: 3, label: "Draw", pool: drawPool },
    { id: 2, label: awayTeam, pool: awayPool }
  ];

  const calculatePotentialPayout = (outcomeId: number, stake: string) => {
    const stakeNum = parseFloat(stake) || 0;
    if (stakeNum === 0) return "0";
    
    const outcomePool = outcomes.find(o => o.id === outcomeId)?.pool || 0n;
    
    // Simplistic payout calc for UI: (Total / Outcome) * Stake
    // (Actual logic in contract handles fees)
    if (outcomePool === 0n) return (stakeNum * 2).toFixed(2); // If no pool, show 2x as starting
    
    const totalEth = parseFloat(formatEther(totalVolume)) + stakeNum;
    const poolEth = parseFloat(formatEther(outcomePool)) + stakeNum;
    
    return ((totalEth / poolEth) * stakeNum).toFixed(2);
  };

  if (isSkeleton) {
    return (
      <div className={`bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 animate-pulse ${className}`}>
        <div className="w-24 h-4 bg-slate-800 rounded mb-4" />
        <div className="w-64 h-10 bg-slate-800 rounded mb-8" />
        <div className="grid grid-cols-3 gap-4 mb-8">
           {[1,2,3].map(i => <div key={i} className="h-24 bg-slate-800 rounded-3xl" />)}
        </div>
        <div className="h-14 bg-slate-800 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className={`bg-slate-950/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden group ${className}`}>
      {/* Dynamic Background Glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-1000" />
      
      {/* Header */}
      <div className="mb-10 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={14} className="text-emerald-400" />
          <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">P2P Wager Pool</span>
        </div>
        <h3 className="text-4xl font-black text-white tracking-tighter italic">
          {matchName}
        </h3>
        <div className="flex items-center gap-4 mt-6">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
            <Wallet size={16} className="text-emerald-400" />
            <span className="text-sm font-bold text-white">
              {formatEther(totalVolume)} <span className="text-white/40">CHZ Pool</span>
            </span>
          </div>
          <div className="text-xs text-white/30 font-medium">
            2.0% Protocol Fee
          </div>
        </div>
      </div>

      {/* Outcome Selection */}
      <div className="grid grid-cols-3 gap-4 mb-10 relative z-10">
        {outcomes.map((opt) => {
          const isSelected = selectedOutcome === opt.id;
          const pct = totalVolume > 0n ? Number((opt.pool * 100n) / totalVolume) : 0;

          return (
            <motion.button
              key={opt.id}
              whileHover={{ y: -4, borderColor: 'rgba(52, 211, 153, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedOutcome(opt.id)}
              className={`p-6 rounded-[2rem] border transition-all text-center relative overflow-hidden ${
                isSelected ? 'border-emerald-500 bg-emerald-500/10' : 'border-white/5 bg-white/2'
              }`}
            >
              <div className="text-[9px] font-black text-white/40 mb-2 uppercase tracking-widest">{opt.label}</div>
              <div className="text-xl font-black text-white italic mb-2">
                {formatEther(opt.pool)} <span className="text-[10px] not-italic text-white/20">CHZ</span>
              </div>
              <div className="text-[10px] font-bold text-emerald-400">
                {pct}% volume
              </div>
              {isSelected && (
                <motion.div layoutId="activeCheck" className="absolute top-2 right-2">
                  <Check size={12} className="text-emerald-400" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Input Area */}
      <AnimatePresence>
        {selectedOutcome && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mb-8 p-8 rounded-[2.5rem] bg-white/5 border border-white/5 relative z-10"
          >
            <div className="flex justify-between items-end mb-6">
              <div>
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest block mb-3">Your Stake</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent text-3xl font-black text-white outline-none w-32 border-b-2 border-emerald-500/30 focus:border-emerald-500 transition-colors"
                  />
                  <span className="text-xl font-black text-white/40 italic">CHZ</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Est. Payout</div>
                <div className="text-3xl font-black text-emerald-400 italic">
                   {calculatePotentialPayout(selectedOutcome, amount)}
                   <span className="text-xs not-italic ml-1">CHZ</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
               <Info size={14} className="text-emerald-400 mt-0.5" />
               <p className="text-[10px] text-emerald-400/60 leading-relaxed font-medium">
                 This is a P2P wagering pool. Final odds are determined by the total distribution of stakes when the match starts.
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <motion.button 
        disabled={!selectedOutcome || isLoading}
        onClick={() => selectedOutcome && onPlaceWager(selectedOutcome, amount)}
        whileHover={{ scale: 1.02, backgroundColor: '#10b981' }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-6 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 shadow-2xl transition-all relative z-10 disabled:opacity-30 disabled:grayscale ${
          selectedOutcome ? 'bg-emerald-600 text-white' : 'bg-white/5 text-white/20'
        }`}
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            Place Wager Now
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </motion.button>
    </div>
  );
};
