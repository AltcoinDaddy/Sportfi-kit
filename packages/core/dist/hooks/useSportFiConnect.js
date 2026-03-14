import { useAccount, useDisconnect } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { useMiniAppContext } from '../provider/SportFiKitProvider';
/**
 * Hook to manage SportFi connection and authentication.
 * Wraps Wagmi and Reown AppKit with environment context.
 */
export const useSportFiConnect = () => {
    const { address, isConnected, isConnecting } = useAccount();
    const { open } = useAppKit();
    const { disconnect } = useDisconnect();
    const { isSociosBrowser, isTelegramMiniApp } = useMiniAppContext();
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
