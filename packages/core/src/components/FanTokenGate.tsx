import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Wallet, AlertCircle, ShoppingCart, ChevronRight } from 'lucide-react';
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
 * FanTokenGate - High-performance content gating for Chiliz Fan Tokens.
 * Features the "Elite Industrial" design system: high-density data, 
 * sharp broadcast-ready aesthetics, and optimized token verification.
 */
export const FanTokenGate: React.FC<FanTokenGateProps> = ({
  tokenAddress,
  tokenSymbol,
  tokenLogo,
  minBalance = 1,
  label = "Gated Access",
  description,
  loadingFallback,
  unauthorizedFallback,
  children,
  className = ""
}) => {
  const { balance, symbol: hookSymbol, isLoading, isError } = useFanTokenBalance(tokenAddress);
  const displaySymbol = tokenSymbol || hookSymbol || "CHZ";
  const numericBalance = parseFloat(balance) || 0;
  const progress = Math.min((numericBalance / minBalance) * 100, 100);

  if (isLoading) {
    if (loadingFallback) return <>{loadingFallback}</>;
    return (
      <div className={`min-h-[400px] flex items-center justify-center bg-slate-950/50 rounded-2xl border border-slate-800 backdrop-blur-sm ${className}`}>
        <div className="relative">
          <div className="w-12 h-12 border-2 border-emerald-500/20 rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-emerald-500 uppercase tracking-tighter">
            SCN
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={`p-8 bg-red-950/20 border-2 border-red-500/30 rounded-2xl backdrop-blur-md flex flex-col items-center gap-4 text-center ${className}`}>
        <AlertCircle className="text-red-500" size={32} />
        <div>
          <h5 className="text-red-400 font-black uppercase tracking-widest text-sm mb-1">Data Stream Interrupted</h5>
          <p className="text-red-300/60 text-xs font-mono">Failed to verify token ownership.</p>
        </div>
      </div>
    );
  }

  if (numericBalance < minBalance) {
    return (
      unauthorizedFallback ? <>{unauthorizedFallback}</> : (
        <div className={`relative overflow-hidden bg-slate-950 border border-slate-800 rounded-2xl flex flex-col ${className}`}>
          {/* Elite Industrial Accents */}
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Lock size={120} strokeWidth={1} />
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-transparent to-transparent opacity-50" />
          
          {/* Header Section */}
          <div className="p-8 border-b border-slate-800/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Secure Sector</span>
            </div>
            <h4 className="text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap overflow-hidden text-ellipsis">
              {label}
            </h4>
            <p className="text-slate-500 text-xs mt-2 font-medium max-w-[320px]">
              {description || `System requires ${minBalance} ${displaySymbol} to grant access to this terminal.`}
            </p>
          </div>

          {/* Data Section */}
          <div className="p-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-900/30">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 overflow-hidden shrink-0">
                  {tokenLogo ? (
                    <img src={tokenLogo} alt={displaySymbol} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-black text-slate-500">{displaySymbol.slice(0, 3)}</span>
                  )}
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Authorization Target</div>
                  <div className="text-xl font-black text-white font-mono tracking-tighter">
                    {minBalance.toLocaleString()} <span className="text-emerald-500">{displaySymbol}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Ownership Status</span>
                  <span className="text-xs font-black text-white font-mono">{progress.toFixed(1)}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.3)]" 
                  />
                </div>
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex justify-between">
                  <span>{numericBalance.toFixed(2)} Owned</span>
                  <span className="text-emerald-500/50 italic">Required: {minBalance}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-slate-950 rounded-lg py-4 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all hover:bg-emerald-50"
              >
                <Wallet size={16} /> Link Wallet Terminal
              </motion.button>
              
              <button className="w-full group py-3 rounded-lg border border-slate-800 hover:border-emerald-500/30 flex items-center justify-center gap-2 transition-all">
                <ShoppingCart size={14} className="text-emerald-500/60 group-hover:text-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-400">
                  Acquire {displaySymbol}
                </span>
                <ChevronRight size={14} className="text-slate-700 group-hover:text-emerald-500 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
};

