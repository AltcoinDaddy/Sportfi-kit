import { jsx as _jsx } from "react/jsx-runtime";
import { X } from 'lucide-react';
import { closeSociosMiniApp } from '../utils/detectSociosBrowser.js';
/**
 * CloseMiniAppButton - Standard 'X' button to exit the mini-app environment.
 */
export const CloseMiniAppButton = () => {
    return (_jsx("button", { onClick: closeSociosMiniApp, className: "p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all shadow-sm", "aria-label": "Close", children: _jsx(X, { size: 20 }) }));
};
