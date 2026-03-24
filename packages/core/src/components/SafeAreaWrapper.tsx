import React from 'react';
import { useMiniAppContext } from '../provider/SportFiKitProvider.js';

/**
 * SafeAreaWrapper - High-performance layout container for notched mobile devices.
 * Automatically handles safe area insets for high-fidelity industrial interfaces.
 */
export const SafeAreaWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  const { safeAreaInsets } = useMiniAppContext();

  const style = {
    paddingTop: safeAreaInsets.top || '1.5rem',
    paddingBottom: safeAreaInsets.bottom || '1.5rem',
    paddingLeft: safeAreaInsets.left || '1.5rem',
    paddingRight: safeAreaInsets.right || '1.5rem',
  };

  return (
    <div 
      className={`min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/20 transition-all ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
