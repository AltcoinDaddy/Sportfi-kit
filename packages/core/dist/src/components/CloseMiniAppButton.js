"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseMiniAppButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const detectSociosBrowser_1 = require("../utils/detectSociosBrowser");
/**
 * CloseMiniAppButton - Standard 'X' button to exit the mini-app environment.
 */
const CloseMiniAppButton = () => {
    return ((0, jsx_runtime_1.jsx)("button", { onClick: detectSociosBrowser_1.closeSociosMiniApp, className: "p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all shadow-sm", "aria-label": "Close", children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { size: 20 }) }));
};
exports.CloseMiniAppButton = CloseMiniAppButton;
