import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, X, ExternalLink, Activity } from 'lucide-react';

export interface ActionToastProps {
  isVisible: boolean;
  status: 'pending' | 'success' | 'error';
  title: string;
  message?: string;
  txHash?: string;
  onClose: () => void;
  autoClose?: number;
}

/**
 * ActionToast - High-performance "Elite Industrial" status terminal.
 * Features technical telemetry icons, sharp broadcast styling, and Chiliz Chain explorer integration.
 */
export const ActionToast: React.FC<ActionToastProps> = ({
  isVisible,
  status,
  title,
  message,
  txHash,
  onClose,
  autoClose = 6000
}) => {
  useEffect(() => {
    if (isVisible && status !== 'pending' && autoClose > 0) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [isVisible, status, autoClose, onClose]);

  const explorerUrl = txHash ? `https://chiliz.okls.io/tx/${txHash}` : null;

  const statusConfig = {
    pending: {
      icon: <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />,
      color: 'emerald',
      bg: 'bg-slate-950',
      border: 'border-emerald-500/30'
    },
    success: {
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
      color: 'emerald',
      bg: 'bg-slate-950',
      border: 'border-emerald-500/50'
    },
    error: {
      icon: <AlertCircle className="w-4 h-4 text-rose-500" />,
      color: 'rose',
      bg: 'bg-slate-950',
      border: 'border-rose-500/50'
    }
  };

  const config = statusConfig[status];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-sm ${config.bg} border ${config.border} p-6 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex gap-5 items-start relative overflow-hidden`}
        >
          {/* Status Glow Bar */}
          <div className={`absolute top-0 left-0 h-full w-1 ${status === 'error' ? 'bg-rose-500' : 'bg-emerald-500'} opacity-50`} />
          
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shadow-xl">
              {config.icon}
            </div>
            <div className="flex items-center gap-1 opacity-20">
              <Activity size={8} className="text-slate-500" />
              <Activity size={8} className="text-slate-500" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
               <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] font-mono">Status // {status.toUpperCase()}</span>
            </div>
            <h3 className="text-sm font-black text-white tracking-tight uppercase mb-1">
              {title}
            </h3>
            {message && (
              <p className="text-[10px] font-black text-slate-500 leading-relaxed uppercase tracking-widest font-mono line-clamp-2">
                {message}
              </p>
            )}
            
            {explorerUrl && (
              <motion.a 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                href={explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 px-3 py-1.5 rounded-md hover:border-emerald-500 transition-all font-mono"
              >
                TX_LOCATE <ExternalLink size={10} />
              </motion.a>
            )}
          </div>

          <button 
            onClick={onClose}
            className="p-1 px-2 rounded hover:bg-white/5 transition-colors text-slate-600 flex items-center justify-center -mr-2"
          >
            <span className="text-[10px] font-black mr-1 font-mono">ESC</span>
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

