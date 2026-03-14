import React from 'react';
import { motion } from 'framer-motion';

interface PredictionCardProps {
  title: string;
  description: string;
  options: string[];
  onSelect: (option: string) => void;
  isLoading?: boolean;
}

/**
 * PredictionCard - Premium UI component for prediction markets.
 * High-performance, animated, and mobile-friendly.
 */
export const PredictionCard: React.FC<PredictionCardProps> = ({
  title,
  description,
  options,
  onSelect,
  isLoading = false
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      
      <div className="space-y-3">
        {options.map((option, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.01, backgroundColor: "#f8fafc" }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(option)}
            disabled={isLoading}
            className="w-full text-left p-4 border border-slate-100 rounded-xl hover:border-emerald-200 transition-colors flex justify-between items-center group font-medium text-slate-700 disabled:opacity-50"
          >
            <span>{option}</span>
            <div className="w-5 h-5 rounded-full border border-slate-200 group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-colors" />
          </motion.button>
        ))}
      </div>
      
      {isLoading && (
        <div className="mt-4 text-center text-sm text-emerald-600 animate-pulse font-medium">
          Processing...
        </div>
      )}
    </motion.div>
  );
};
