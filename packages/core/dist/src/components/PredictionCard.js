"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictionCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
/**
 * PredictionCard - Premium UI component for prediction markets.
 * High-performance, animated, and mobile-friendly.
 */
const PredictionCard = ({ title, description, options, onSelect, isLoading = false }) => {
    return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, className: "bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold text-slate-900 mb-2", children: title }), (0, jsx_runtime_1.jsx)("p", { className: "text-slate-600 mb-6", children: description }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-3", children: options.map((option, idx) => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.button, { whileHover: { scale: 1.01, backgroundColor: "#f8fafc" }, whileTap: { scale: 0.99 }, onClick: () => onSelect(option), disabled: isLoading, className: "w-full text-left p-4 border border-slate-100 rounded-xl hover:border-emerald-200 transition-colors flex justify-between items-center group font-medium text-slate-700 disabled:opacity-50", children: [(0, jsx_runtime_1.jsx)("span", { children: option }), (0, jsx_runtime_1.jsx)("div", { className: "w-5 h-5 rounded-full border border-slate-200 group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-colors" })] }, idx))) }), isLoading && ((0, jsx_runtime_1.jsx)("div", { className: "mt-4 text-center text-sm text-emerald-600 animate-pulse font-medium", children: "Processing..." }))] }));
};
exports.PredictionCard = PredictionCard;
