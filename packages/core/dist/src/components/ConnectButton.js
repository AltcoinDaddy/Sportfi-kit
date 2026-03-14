import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { useSportFiConnect } from '../hooks/useSportFiConnect.js';
/**
 * ConnectButton - The primary entry point for wallet connection.
 * Enhanced with Framer Motion for a premium feel.
 */
export const ConnectButton = ({ className = '' }) => {
    const { address, isConnected, isConnecting, connect, disconnect } = useSportFiConnect();
    const baseStyles = "bg-emerald-600 text-white rounded-lg px-6 py-2.5 hover:bg-emerald-700 transition-colors font-semibold shadow-md flex items-center justify-center gap-2";
    return (_jsx(AnimatePresence, { mode: "wait", children: isConnected && address ? (_jsxs(motion.button, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => disconnect(), className: `${baseStyles} ${className}`, children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-300 animate-pulse" }), address.slice(0, 6), "...", address.slice(-4)] }, "connected")) : (_jsx(motion.button, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => connect(), className: `${baseStyles} ${className}`, disabled: isConnecting, children: isConnecting ? (_jsx(motion.span, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 1, ease: "linear" }, className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full" })) : 'Connect Wallet' }, "connect")) }));
};
