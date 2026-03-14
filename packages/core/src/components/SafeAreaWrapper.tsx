import React from 'react';
import { useMiniAppContext } from '../provider/SportFiKitProvider.js';

/**
 * SafeAreaWrapper - Handles layout padding for notched mobile devices in Socios/Telegram browsers.
 */
export const SafeAreaWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  const { safeAreaInsets } = useMiniAppContext();

  const style = {
    paddingTop: `max(1rem, ${safeAreaInsets.top}px)`,
    paddingBottom: `max(1rem, ${safeAreaInsets.bottom}px)`,
    paddingLeft: `max(1rem, ${safeAreaInsets.left}px)`,
    paddingRight: `max(1rem, ${safeAreaInsets.right}px)`,
  };

  return (
    <div 
      className={`min-h-screen bg-[#fafafa] transition-all ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
