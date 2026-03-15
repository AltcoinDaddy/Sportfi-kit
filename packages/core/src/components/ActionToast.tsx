import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2, X, ExternalLink } from 'lucide-react';

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
 * ActionToast - A premium notification component for transaction states.
 * Features glassmorphism, animations, and Chiliz Chain explorer links.
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
      icon: <Loader2 className="w-5 h-5 animate-spin text-emerald-500" />,
      color: 'emerald',
      bg: 'bg-emerald-50/90',
      border: 'border-emerald-200/50'
    },
    success: {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      color: 'emerald',
      bg: 'bg-emerald-50/90',
      border: 'border-emerald-200/50'
    },
    error: {
      icon: <AlertCircle className="w-5 h-5 text-rose-600" />,
      color: 'rose',
      bg: 'bg-rose-50/90',
      border: 'border-rose-200/50'
    }
  };

  const config = statusConfig[status];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-sm ${config.bg} backdrop-blur-xl border ${config.border} p-5 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] flex gap-4 items-start`}
        >
          <div className={`mt-0.5 p-2 rounded-2xl bg-white shadow-sm flex-shrink-0`}>
            {config.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-black text-slate-900 tracking-tight mb-1">
              {title}
            </h3>
            {message && (
              <p className="text-[11px] font-medium text-slate-500 leading-relaxed truncate">
                {message}
              </p>
            )}
            
            {explorerUrl && (
              <a 
                href={explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors bg-emerald-100/50 px-3 py-1.5 rounded-full"
              >
                View Transaction <ExternalLink size={10} />
              </a>
            )}
          </div>

          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/5 transition-colors text-slate-400"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
