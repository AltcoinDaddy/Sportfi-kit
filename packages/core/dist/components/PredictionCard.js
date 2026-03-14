import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * PredictionCard - Interactive UI for sport prediction markets.
 */
export const PredictionCard = ({ prediction, onVote, isVoting = false }) => {
    return (_jsxs("div", { className: "bg-white border border-slate-200 rounded-xl shadow-sm p-6 max-w-sm", children: [_jsx("h3", { className: "text-lg font-bold text-slate-900 mb-4", children: prediction.question }), _jsx("div", { className: "space-y-3", children: prediction.options.map((option, index) => (_jsx("button", { onClick: () => onVote(index), disabled: isVoting, className: "w-full text-left p-4 rounded-md border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 transition-all group", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-medium text-slate-700 group-hover:text-emerald-700", children: option }), _jsx("span", { className: "text-xs text-slate-400", children: "Vote" })] }) }, index))) }), _jsxs("div", { className: "mt-4 pt-4 border-t border-slate-100 flex justify-between items-center", children: [_jsxs("span", { className: "text-xs text-slate-500 font-medium uppercase tracking-wider", children: ["Pool: ", prediction.totalPool, " CHZ"] }), _jsx("span", { className: "text-xs text-slate-400", children: "Ends soon" })] })] }));
};
