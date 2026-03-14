"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMiniAppContext = exports.SportFiKitProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@reown/appkit/react");
const appkit_adapter_wagmi_1 = require("@reown/appkit-adapter-wagmi");
const wagmi_1 = require("wagmi");
const react_query_1 = require("@tanstack/react-query");
const detectSociosBrowser_js_1 = require("../utils/detectSociosBrowser.js");
const telegramMiniAppSupport_js_1 = require("../utils/telegramMiniAppSupport.js");
// Define Chiliz Chains
const chilizMainnet = {
    id: 88888,
    name: 'Chiliz Chain',
    network: 'chiliz-chain',
    nativeCurrency: { name: 'CHZ', symbol: 'CHZ', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.chiliz.com'] },
        public: { http: ['https://rpc.chiliz.com'] },
    },
    blockExplorers: {
        default: { name: 'ChilizScan', url: 'https://scan.chiliz.com' },
    },
};
const chilizSpicy = {
    id: 88882,
    name: 'Chiliz Spicy Testnet',
    network: 'chiliz-spicy',
    nativeCurrency: { name: 'CHZ', symbol: 'CHZ', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://spicy-rpc.chiliz.com'] },
        public: { http: ['https://spicy-rpc.chiliz.com'] },
    },
    blockExplorers: {
        default: { name: 'ChilizScan', url: 'https://spicy-scan.chiliz.com' },
    },
};
const queryClient = new react_query_1.QueryClient();
const MiniAppContext = (0, react_1.createContext)(undefined);
/**
 * SportFiKitProvider - The one-line entry point for SportFi Kit.
 * Handles Reown AppKit, Wagmi, and environment detection.
 */
const SportFiKitProvider = ({ config, children }) => {
    const [miniAppContext, setMiniAppContext] = (0, react_1.useState)({
        isSociosBrowser: false,
        isTelegramMiniApp: false,
        safeAreaInsets: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    (0, react_1.useEffect)(() => {
        const isSocios = (0, detectSociosBrowser_js_1.detectSociosBrowser)();
        const isTG = (0, telegramMiniAppSupport_js_1.isTelegramMiniApp)();
        if (isTG)
            (0, telegramMiniAppSupport_js_1.initTelegramWebApp)();
        setMiniAppContext(prev => ({
            ...prev,
            isSociosBrowser: isSocios,
            isTelegramMiniApp: isTG,
        }));
    }, []);
    // Initialize Reown AppKit Adapter
    const networks = [chilizMainnet, chilizSpicy];
    const wagmiAdapter = new appkit_adapter_wagmi_1.WagmiAdapter({
        networks,
        projectId: config.reownProjectId,
    });
    // Create AppKit instance
    (0, react_1.useEffect)(() => {
        (0, react_2.createAppKit)({
            adapters: [wagmiAdapter],
            networks,
            projectId: config.reownProjectId,
            themeMode: 'light',
            themeVariables: {
                '--w3m-accent': '#059669', // Emerald-600
                '--w3m-border-radius-master': '6px',
            },
            features: {
                analytics: true,
            },
        });
    }, [config.reownProjectId]);
    return ((0, jsx_runtime_1.jsx)(wagmi_1.WagmiProvider, { config: wagmiAdapter.wagmiConfig, children: (0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: queryClient, children: (0, jsx_runtime_1.jsx)(MiniAppContext.Provider, { value: miniAppContext, children: children }) }) }));
};
exports.SportFiKitProvider = SportFiKitProvider;
const useMiniAppContext = () => {
    const context = (0, react_1.useContext)(MiniAppContext);
    if (!context)
        throw new Error('useMiniAppContext must be used within SportFiKitProvider');
    return context;
};
exports.useMiniAppContext = useMiniAppContext;
