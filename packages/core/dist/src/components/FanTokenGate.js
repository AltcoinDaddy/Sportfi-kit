"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FanTokenGate = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useFanTokenBalance_js_1 = require("../hooks/useFanTokenBalance.js");
/**
 * FanTokenGate - Content gating based on Fan Token ownership.
 */
const FanTokenGate = ({ tokenAddress, minBalance = 1, loadingFallback = (0, jsx_runtime_1.jsx)("div", { className: "p-4 text-center text-slate-600", children: "Checking fan status..." }), unauthorizedFallback = ((0, jsx_runtime_1.jsxs)("div", { className: "p-6 border border-slate-200 rounded-xl bg-white text-center shadow-sm", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Fan-Only Content" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-slate-600 mb-4", children: ["You need at least ", minBalance, " token(s) to access this content."] }), (0, jsx_runtime_1.jsx)("button", { className: "bg-emerald-600 text-white rounded-md px-4 py-2 font-medium", children: "Buy Tokens" })] })), children }) => {
    const { balance, isLoading } = (0, useFanTokenBalance_js_1.useFanTokenBalance)(tokenAddress);
    if (isLoading)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loadingFallback });
    if (parseFloat(balance) < minBalance) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: unauthorizedFallback });
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.FanTokenGate = FanTokenGate;
