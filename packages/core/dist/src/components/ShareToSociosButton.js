"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareToSociosButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const detectSociosBrowser_1 = require("../utils/detectSociosBrowser");
/**
 * ShareToSociosButton - Specialized button to share dApp content within Socios.
 */
const ShareToSociosButton = ({ url, text = "Check this out on SportFi!" }) => {
    const handleShare = () => {
        if ((0, detectSociosBrowser_1.detectSociosBrowser)() && window.SociosBridge) {
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
    return ((0, jsx_runtime_1.jsxs)("button", { onClick: handleShare, className: "flex items-center gap-2 text-emerald-600 font-medium hover:underline", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Share2, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { children: "Share to Fans" })] }));
};
exports.ShareToSociosButton = ShareToSociosButton;
