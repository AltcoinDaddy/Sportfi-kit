"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const useSportFiConnect_js_1 = require("../hooks/useSportFiConnect.js");
/**
 * ConnectButton - The primary entry point for wallet connection.
 * Enhanced with Framer Motion for a premium feel.
 */
const ConnectButton = ({ className = '' }) => {
    const { address, isConnected, isConnecting, connect, disconnect } = (0, useSportFiConnect_js_1.useSportFiConnect)();
    const baseStyles = "bg-emerald-600 text-white rounded-lg px-6 py-2.5 hover:bg-emerald-700 transition-colors font-semibold shadow-md flex items-center justify-center gap-2";
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "wait", children: isConnected && address ? ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.button, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => disconnect(), className: `${baseStyles} ${className}`, children: [(0, jsx_runtime_1.jsx)("span", { className: "w-2 h-2 rounded-full bg-emerald-300 animate-pulse" }), address.slice(0, 6), "...", address.slice(-4)] }, "connected")) : ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.button, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => connect(), className: `${baseStyles} ${className}`, disabled: isConnecting, children: isConnecting ? ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.span, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 1, ease: "linear" }, className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full" })) : 'Connect Wallet' }, "connect")) }));
};
exports.ConnectButton = ConnectButton;
