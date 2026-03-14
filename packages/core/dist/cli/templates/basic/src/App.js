import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SportFiKitProvider, ConnectButton, SafeAreaWrapper } from '@chiliz/sportfi-kit';
function App() {
    const config = {
        reownProjectId: 'YOUR_PROJECT_ID',
    };
    return (_jsx(SportFiKitProvider, { config: config, children: _jsxs(SafeAreaWrapper, { children: [_jsxs("header", { className: "flex justify-between items-center mb-8", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", children: _jsx("path", { d: "M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 24c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10z", fill: "#059669" }) }), _jsx("span", { className: "text-xl font-bold", children: "SportFi Mini App" })] }), _jsx(ConnectButton, {})] }), _jsxs("main", { className: "text-center", children: [_jsx("h1", { className: "text-3xl font-bold text-slate-900 mb-4", children: "Welcome to Chiliz Chain" }), _jsx("p", { className: "text-slate-600 mb-8", children: "Start building your fan experience with SportFi Kit." })] })] }) }));
}
export default App;
