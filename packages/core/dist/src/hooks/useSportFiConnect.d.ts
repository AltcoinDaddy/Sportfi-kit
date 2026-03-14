/**
 * Hook to manage SportFi connection and authentication.
 * Wraps Wagmi and Reown AppKit with environment context.
 */
export declare const useSportFiConnect: () => {
    address: `0x${string}` | undefined;
    isConnected: boolean;
    isConnecting: boolean;
    isSociosBrowser: boolean;
    isTelegramMiniApp: boolean;
    connect: () => Promise<void | {
        hash: string;
    } | undefined>;
    disconnect: () => void;
};
//# sourceMappingURL=useSportFiConnect.d.ts.map