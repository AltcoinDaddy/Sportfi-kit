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
    <div className={`h-[500px] flex items-center justify-center bg-[#090e1a] rounded-[3rem] border border-slate-800 ${className}`}>
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const defaultUnauthorized = (
    <div className={`h-[600px] bg-[#090e1a] flex flex-col text-white relative overflow-hidden rounded-[3rem] border border-white/5 p-10 pt-20 text-center ${className}`}>
      {/* Premium Glows */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-emerald-600/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center mb-10 border border-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.15)] backdrop-blur-md"
        >
          <Lock className="text-emerald-400" size={36} />
        </motion.div>
        
        <h4 className="text-3xl font-black mb-4 tracking-tight drop-shadow-md">{label}</h4>
        <p className="text-slate-400 text-sm mb-12 leading-relaxed font-medium max-w-[240px] mx-auto">
          {description || `Hold ${tokenSymbol} to unlock exclusive stadium access.`}
        </p>
        
        <div className="w-full bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/10 mb-10 text-left shadow-2xl">
          <div className="flex items-center gap-5 mb-8">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-slate-900 font-black text-xs shadow-2xl overflow-hidden shrink-0 border-4 border-white/10"
            >
              {tokenLogo ? <img src={tokenLogo} alt={tokenSymbol} className="w-full h-full object-cover" /> : <span className="text-lg">{tokenSymbol.slice(0, 3)}</span>}
            </motion.div>
            <div className="flex-1">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1.5">Tokens Required</div>
              <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
                {minBalance.toFixed(1)} 
                <span className="text-xs text-emerald-500 font-black bg-emerald-500/10 px-2 py-0.5 rounded-md">{tokenSymbol}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-3 w-full bg-slate-800/50 rounded-full overflow-hidden mb-1 relative border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 2, ease: "circOut" }}
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] relative" 
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] animate-[shimmer_2s_infinite]" />
              </motion.div>
            </div>
            <div className="flex justify-between text-[11px] font-black uppercase tracking-widest leading-none">
              <span className="text-slate-500 italic">{numericBalance.toFixed(1)} Owned</span>
              <span className="text-emerald-400">{progress.toFixed(0)}% Complete</span>
            </div>
          </div>
        </div>

        <div className="w-full space-y-4">
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-slate-900 rounded-2xl py-5 font-black text-sm flex items-center justify-center gap-3 shadow-2xl shadow-emerald-900/20"
          >
            <Wallet size={20} /> Connect Wallet
          </motion.button>
          
          <button className="w-full py-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60 hover:text-emerald-400 transition-colors">
            Buy {tokenSymbol} Tokens
          </button>
        </div>
      </div>
    </div>
  );

  if (isLoading) return <>{loadingFallback || defaultLoading}</>;

  if (numericBalance < minBalance) {
    return <>{unauthorizedFallback || defaultUnauthorized}</>;
  }

  return <>{children}</>;
};
