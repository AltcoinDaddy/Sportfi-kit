import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Heart, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string;
}

const supportedTokens = [
  { symbol: 'CHZ', name: 'Chiliz', color: '#E31E24' },
  { symbol: 'ETH', name: 'Ethereum', color: '#627EEA' },
  { symbol: 'BNB', name: 'Binance Smart Chain', color: '#F3BA2F' },
  { symbol: 'MATIC', name: 'Polygon', color: '#8247E5' },
  { symbol: 'USDT', name: 'Tether', color: '#26A17B' },
  { symbol: 'USDC', name: 'USD Coin', color: '#2775CA' },
];

export function DonationModal({ isOpen, onClose, address }: DonationModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-md bg-white dark:bg-[#111] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl z-[101] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-100 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="text-rose-500 fill-rose-500/20" size={20} />
                <h3 className="text-lg font-bold tracking-tight">Support SportFi Kit</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Address Section */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Donation Wallet (EVM)
                </span>
                <div 
                  onClick={copyToClipboard}
                  className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/10 rounded-xl group cursor-pointer hover:border-emerald-500/30 transition-all"
                >
                  <code className="text-xs font-mono text-emerald-600 dark:text-emerald-400 break-all pr-4">
                    {address}
                  </code>
                  <div className="flex-shrink-0">
                    {copied ? (
                      <CheckCircle2 size={18} className="text-emerald-500" />
                    ) : (
                      <Copy size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-center text-zinc-500 italic">
                  Thank you for supporting the development of open-source SportFi tools!
                </p>
              </div>

              {/* Tokens Section */}
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Supported Assets
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {supportedTokens.map((token) => (
                    <div
                      key={token.symbol}
                      className="flex items-center gap-3 p-3 rounded-xl border border-zinc-100 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02]"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                        style={{ backgroundColor: token.color }}
                      >
                        {token.symbol[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-none mb-0.5">{token.symbol}</span>
                        <span className="text-[10px] text-zinc-500 font-medium truncate max-w-[100px]">{token.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-zinc-50 dark:bg-white/[0.02] border-t border-zinc-100 dark:border-white/5 text-center">
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Powered by SportFi Kit Community</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
