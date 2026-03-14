import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Share2 } from 'lucide-react';
import { detectSociosBrowser } from '../utils/detectSociosBrowser';
/**
 * ShareToSociosButton - Specialized button to share dApp content within Socios.
 */
export const ShareToSociosButton = ({ url, text = "Check this out on SportFi!" }) => {
    const handleShare = () => {
        if (detectSociosBrowser() && window.SociosBridge) {
            window.SociosBridge.share({ url, text });
        }
        else {
            // Fallback to web share API
            if (navigator.share) {
                navigator.share({ title: 'SportFi Kit', text, url });
            }
            else {
                alert("Sharing not supported in this browser");
            }
        }
    };
    return (_jsxs("button", { onClick: handleShare, className: "flex items-center gap-2 text-emerald-600 font-medium hover:underline", children: [_jsx(Share2, { size: 18 }), _jsx("span", { children: "Share to Fans" })] }));
};
