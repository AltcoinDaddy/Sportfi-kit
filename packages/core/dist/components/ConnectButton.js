import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useSportFiConnect } from '../hooks/useSportFiConnect';
/**
 * ConnectButton - The primary entry point for wallet connection.
 * Styled with Emerald-600 and follows the minimalist design rules.
 */
export const ConnectButton = ({ className = '' }) => {
    const { address, isConnected, isConnecting, connect, disconnect } = useSportFiConnect();
    const baseStyles = "bg-emerald-600 text-white rounded-md px-4 py-2 hover:opacity-90 transition-all font-medium shadow-sm flex items-center justify-center gap-2";
    if (isConnected && address) {
        return (_jsxs("button", { onClick: () => disconnect(), className: `${baseStyles} ${className}`, children: [address.slice(0, 6), "...", address.slice(-4)] }));
    }
    return (_jsx("button", { onClick: () => connect(), className: `${baseStyles} ${className}`, disabled: isConnecting, children: isConnecting ? 'Connecting...' : 'Connect Wallet' }));
};
