import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, useSimpleVote } from '@chiliz/sportfi-kit';
function App() {
    const POLL_CONTRACT = "0x...abc";
    const { vote, isPending, isSuccess } = useSimpleVote(POLL_CONTRACT);
    const options = ["Messi", "Ronaldo", "Neymar"];
    return (_jsx(SportFiKitProvider, { config: { reownProjectId: 'demo' }, children: _jsxs(SafeAreaWrapper, { className: "p-4", children: [_jsxs("header", { className: "flex justify-between items-center mb-10", children: [_jsx("span", { className: "font-bold text-xl text-emerald-600", children: "Fan Vote" }), _jsx(ConnectButton, {})] }), _jsxs("div", { className: "max-w-md mx-auto bg-white border border-slate-200 rounded-xl p-8 shadow-sm", children: [_jsx("h2", { className: "text-xl font-bold mb-6", children: "Vote for Player of the Month" }), _jsx("div", { className: "space-y-4", children: options.map((opt, i) => (_jsx("button", { onClick: () => vote(i), disabled: isPending || isSuccess, className: `w-full p-4 text-left border rounded-lg transition-all ${isSuccess ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 hover:border-emerald-600'}`, children: opt }, i))) }), isSuccess && (_jsx("p", { className: "mt-4 text-center text-emerald-600 font-medium", children: "Your vote has been cast! \u2705" })) || isPending && (_jsx("p", { className: "mt-4 text-center text-slate-500", children: "Submitting vote..." }))] })] }) }));
}
export default App;
