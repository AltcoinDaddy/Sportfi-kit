import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Wallet } from 'lucide-react';
import { useFanTokenBalance } from '../hooks/useFanTokenBalance.js';

interface FanTokenGateProps {
  tokenAddress: string;
  tokenSymbol?: string;
  tokenLogo?: string;
  minBalance?: number;
  label?: string;
  description?: string;
  loadingFallback?: React.ReactNode;
  unauthorizedFallback?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * FanTokenGate - Premium content gating based on Fan Token ownership.
 * Features "Locker Room" glassmorphism style by default.
 */
export const FanTokenGate: React.FC<FanTokenGateProps> = ({
  tokenAddress,
  tokenSymbol = "Tokens",
  tokenLogo,
  minBalance = 1,
  label = "Locker Room",
  description,
  loadingFallback,
  unauthorizedFallback,
  children,
  className = ""
}) => {
  const { balance, isLoading } = useFanTokenBalance(tokenAddress);
  const numericBalance = parseFloat(balance) || 0;
  const progress = Math.min((numericBalance / minBalance) * 100, 100);

  const defaultLoading = (
    <div className={`h-[400px] flex items-center justify-center bg-slate-900 rounded-[2.5rem] border border-slate-800 ${className}`}>
      <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const defaultUnauthorized = (
    <div className={`h-[500px] bg-slate-900 flex flex-col text-white relative overflow-hidden rounded-[2.5rem] border border-slate-800 p-8 pt-16 text-center ${className}`}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-emerald-600/20 to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-10 border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
        >
          <Lock className="text-emerald-400" size={32} />
        </motion.div>
        
        <h4 className="text-2xl font-black mb-3 tracking-tight">{label}</h4>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed font-medium">
          {description || `Hold ${tokenSymbol} to unlock exclusive access.`}
        </p>
        
        <div className="w-full bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700/50 mb-10 text-left">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 font-black text-xs shadow-xl overflow-hidden shrink-0">
              {tokenLogo ? <img src={tokenLogo} alt={tokenSymbol} /> : tokenSymbol.slice(0, 3)}
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Tokens Required</div>
              <div className="text-lg font-black tracking-tight">{minBalance.toFixed(1)} <span className="text-xs text-slate-500 font-medium ml-1">{tokenSymbol}</span></div>
            </div>
          </div>
          <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden mb-3">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
            />
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
            <span className="text-slate-500">{numericBalance.toFixed(1)} Owned</span>
            <span className="text-emerald-400">{progress.toFixed(0)}% Access</span>
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white text-slate-900 rounded-2xl py-4 font-black text-sm flex items-center justify-center gap-2 mb-6 shadow-xl"
        >
          <Wallet size={18} /> Connect Wallet
        </motion.button>
      </div>
    </div>
  );

  if (isLoading) return <>{loadingFallback || defaultLoading}</>;

  if (numericBalance < minBalance) {
    return <>{unauthorizedFallback || defaultUnauthorized}</>;
  }

  return <>{children}</>;
};
