import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSportFiConnect } from '../hooks/useSportFiConnect.js';
import { Wallet, LogOut } from 'lucide-react';

/**
 * ConnectButton - High-performance terminal entry point.
 * Features technical broadcast styling and optimized wallet states.
 */
export const ConnectButton: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { address, isConnected, isConnecting, connect, disconnect, isSociosBrowser } = useSportFiConnect();

  const handleDisconnect = () => {
    if (isSociosBrowser) return;
    disconnect();
  };

  const baseStyles = "relative overflow-hidden rounded-xl px-6 py-2.5 font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-2xl group";

  return (
    <AnimatePresence mode="wait">
      {isConnected && address ? (
        <motion.button
          key="connected"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          whileHover={!isSociosBrowser ? { scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' } : {}}
          whileTap={!isSociosBrowser ? { scale: 0.98 } : {}}
          onClick={handleDisconnect}
          className={`${baseStyles} border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 ${className} ${isSociosBrowser ? 'cursor-default' : 'hover:text-rose-500'}`}
        >
          <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          <span className="relative z-10 font-mono">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          {!isSociosBrowser && (
            <LogOut size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-1 group-hover:ml-0" />
          )}
        </motion.button>
      ) : (
        <motion.button
          key="connect"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => connect()}
          className={`${baseStyles} bg-white text-slate-950 border border-transparent hover:shadow-emerald-500/10 ${className}`}
          disabled={isConnecting}
        >
          {isConnecting ? (
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-3 h-3 border-2 border-slate-950 border-t-transparent rounded-full"
              />
              <span className="font-mono">Syncing...</span>
            </div>
          ) : (
            <>
              <Wallet size={14} className="text-emerald-600" />
              <span className="relative z-10">Link Terminal</span>
            </>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
};
