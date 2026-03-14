"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSportFiConnect = void 0;
const wagmi_1 = require("wagmi");
const react_1 = require("@reown/appkit/react");
const SportFiKitProvider_js_1 = require("../provider/SportFiKitProvider.js");
/**
 * Hook to manage SportFi connection and authentication.
 * Wraps Wagmi and Reown AppKit with environment context.
 */
const useSportFiConnect = () => {
    const { address, isConnected, isConnecting } = (0, wagmi_1.useAccount)();
    const { open } = (0, react_1.useAppKit)();
    const { disconnect } = (0, wagmi_1.useDisconnect)();
    const { isSociosBrowser, isTelegramMiniApp } = (0, SportFiKitProvider_js_1.useMiniAppContext)();
    return {
        address,
        isConnected,
        isConnecting,
        isSociosBrowser,
        isTelegramMiniApp,
        connect: () => open(),
        disconnect: () => disconnect(),
    };
};
exports.useSportFiConnect = useSportFiConnect;
