/**
 * @chiliz/sportfi-kit Core Types
 * JSDoc documented for production readiness.
 */
export type ChilizChainId = 88888 | 88882;
export interface SportFiConfig {
    /** Reown Project ID for AppKit */
    reownProjectId: string;
    /** Default chain ID (Mainnet or Spicy) */
    defaultChainId?: ChilizChainId;
    /** Optional RPC URL overrides */
    rpcUrls?: {
        [key in ChilizChainId]?: string;
    };
}
export interface MiniAppContextType {
    /** Whether the dApp is running inside Socios.com browser */
    isSociosBrowser: boolean;
    /** Whether the dApp is running as a Telegram Mini App */
    isTelegramMiniApp: boolean;
    /** Device safe area insets */
    safeAreaInsets: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
}
export interface FanToken {
    symbol: string;
    name: string;
    address: string;
    balance: string;
    decimals: number;
}
export interface Prediction {
    id: string;
    question: string;
    options: string[];
    endTime: number;
    totalPool: string;
    userStaked?: string;
}
//# sourceMappingURL=index.d.ts.map