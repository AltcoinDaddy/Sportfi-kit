import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useFanTokenBalance } from '../hooks/useFanTokenBalance';
/**
 * FanTokenGate - Content gating based on Fan Token ownership.
 */
export const FanTokenGate = ({ tokenAddress, minBalance = 1, loadingFallback = _jsx("div", { className: "p-4 text-center text-slate-600", children: "Checking fan status..." }), unauthorizedFallback = (_jsxs("div", { className: "p-6 border border-slate-200 rounded-xl bg-white text-center shadow-sm", children: [_jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Fan-Only Content" }), _jsxs("p", { className: "text-slate-600 mb-4", children: ["You need at least ", minBalance, " token(s) to access this content."] }), _jsx("button", { className: "bg-emerald-600 text-white rounded-md px-4 py-2 font-medium", children: "Buy Tokens" })] })), children }) => {
    const { balance, isLoading } = useFanTokenBalance(tokenAddress);
    if (isLoading)
        return _jsx(_Fragment, { children: loadingFallback });
    if (parseFloat(balance) < minBalance) {
        return _jsx(_Fragment, { children: unauthorizedFallback });
    }
    return _jsx(_Fragment, { children: children });
};
