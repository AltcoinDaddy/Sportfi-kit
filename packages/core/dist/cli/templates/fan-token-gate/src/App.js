import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, FanTokenGate } from '@chiliz/sportfi-kit';
function App() {
    const JUV_TOKEN = "0x...123"; // Juventus Fan Token
    return (_jsx(SportFiKitProvider, { config: { reownProjectId: 'demo' }, children: _jsxs(SafeAreaWrapper, { className: "p-4", children: [_jsxs("header", { className: "flex justify-between items-center mb-8", children: [_jsx("span", { className: "font-bold text-xl text-emerald-600", children: "Fan Gate Demo" }), _jsx(ConnectButton, {})] }), _jsx(FanTokenGate, { tokenAddress: JUV_TOKEN, minBalance: 5, children: _jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-6 shadow-sm", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Welcome, True Fan! \uD83C\uDFDF\uFE0F" }), _jsx("p", { className: "text-slate-600", children: "You have exclusive access to this locker room content." }), _jsx("div", { className: "mt-6 aspect-video bg-slate-100 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-slate-400", children: "Exclusive Video Content" }) })] }) })] }) }));
}
export default App;
