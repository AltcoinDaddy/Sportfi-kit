import React from 'react';
import { Share2 } from 'lucide-react';
import { detectSociosBrowser } from '../utils/detectSociosBrowser.js';

/**
 * ShareToSociosButton - Specialized button to share dApp content within Socios.
 */
export const ShareToSociosButton: React.FC<{ url: string; text?: string }> = ({ 
  url, 
  text = "Check this out on SportFi!" 
}) => {
  const handleShare = () => {
    if (detectSociosBrowser() && (window as any).SociosBridge) {
      (window as any).SociosBridge.share({ url, text });
    } else {
      // Fallback to web share API
      if (navigator.share) {
        navigator.share({ title: 'SportFi Kit', text, url });
      } else {
        alert("Sharing not supported in this browser");
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center gap-2 text-emerald-600 font-medium hover:underline"
    >
      <Share2 size={18} />
      <span>Share to Fans</span>
    </button>
  );
};
