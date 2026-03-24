import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, TrendingUp, Info, ChevronRight, Check, Activity } from 'lucide-react';
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
 * WagerCard - The Elite "Financial Terminal" UI for v2.0.
 * Visualizes pari-mutuel pools with high-density telemetry and sharp broadcast styling.
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
    
    if (outcomePool === 0n) return (stakeNum * 2).toFixed(2);
    
    const totalEth = parseFloat(formatEther(totalVolume)) + stakeNum;
    const poolEth = parseFloat(formatEther(outcomePool)) + stakeNum;
    
    return ((totalEth / poolEth) * stakeNum).toFixed(2);
  };

  if (isSkeleton) {
    return (
      <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-8 animate-pulse ${className}`}>
        <div className="w-24 h-3 bg-slate-800 rounded mb-4" />
        <div className="w-64 h-8 bg-slate-800 rounded mb-8" />
        <div className="grid grid-cols-3 gap-4 mb-8">
           {[1,2,3].map(i => <div key={i} className="h-20 bg-slate-800 rounded-xl" />)}
        </div>
        <div className="h-14 bg-slate-800 rounded-xl" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 border border-slate-800 rounded-2xl flex flex-col shadow-2xl ${className}`}>
      {/* Industrial Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] pointer-events-none" />
      
      <div className="p-8 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Pool Telemetry</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest font-mono italic">Syncing...</span>
          </div>
        </div>

        <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none mb-8">
          {matchName}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 flex flex-col gap-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global Liquidity</span>
            <div className="flex items-center gap-2">
              <Wallet size={14} className="text-emerald-500" />
              <span className="text-lg font-black text-white font-mono lowercase">
                {formatEther(totalVolume)} <span className="text-xs text-slate-500">CHZ</span>
              </span>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 flex flex-col gap-1">
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Protocol Cost</span>
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-slate-600" />
              <span className="text-lg font-black text-slate-400 font-mono">2.0% <span className="text-xs text-slate-600">FIX</span></span>
            </div>
          </div>
        </div>

        {/* Outcome Matrix */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {outcomes.map((opt) => {
            const isSelected = selectedOutcome === opt.id;
            const pct = totalVolume > 0n ? Number((opt.pool * 100n) / totalVolume) : 0;

            return (
              <motion.button
                key={opt.id}
                whileHover={!isSelected ? { backgroundColor: 'rgba(255, 255, 255, 0.02)', borderColor: 'rgba(255, 255, 255, 0.1)' } : {}}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedOutcome(opt.id)}
                className={`p-5 rounded-xl border transition-all text-left relative overflow-hidden group/opt ${
                  isSelected ? 'border-emerald-500 bg-emerald-500/5' : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <div className="text-[9px] font-black text-slate-500 mb-2 uppercase tracking-widest">{opt.label}</div>
                <div className={`text-lg font-black font-mono transition-colors ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                  {formatEther(opt.pool)}
                </div>
                <div className={`text-[10px] font-black font-mono mt-1 ${isSelected ? 'text-emerald-500' : 'text-slate-700'}`}>
                  {pct}% DIST
                </div>
                {isSelected && (
                  <motion.div layoutId="wagerCheck" className="absolute top-2 right-2">
                    <Check size={12} className="text-emerald-500" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Execution Area */}
      <AnimatePresence>
        {selectedOutcome && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-8 pb-8"
          >
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden">
              <div className="flex justify-between items-end relative z-10">
                <div>
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-2 font-mono">STAKE_INPUT // CHZ</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-transparent text-3xl font-black text-white outline-none w-24 border-b border-slate-800 focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 font-mono">EST_RETURN // CHZ</div>
                  <div className="text-3xl font-black text-emerald-500 font-mono italic">
                    {calculatePotentialPayout(selectedOutcome, amount)}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-start gap-3 p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                <Info size={12} className="text-slate-500 mt-0.5" />
                <p className="text-[9px] text-slate-500 leading-relaxed font-black uppercase tracking-widest">
                  Pari-mutuel logic: ROI fluctuates based on total pool distribution at lock-off.
                </p>
              </div>
            </div>

            <motion.button 
              disabled={isLoading}
              onClick={() => onPlaceWager(selectedOutcome, amount)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-white text-slate-950 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3 group/btn mt-6"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Confirm Wager Signal
                  <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform text-emerald-600" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

