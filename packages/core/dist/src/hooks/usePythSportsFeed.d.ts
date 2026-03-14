export interface PythData {
    price: string;
    confidence: string;
    publishTime: number;
}
/**
 * Hook to fetch real-time sports feed data using Pyth Network oracles.
 * Optimized for Chiliz Chain mini-apps.
 *
 * @param priceFeedId The Pyth Price Feed ID
 */
export declare const usePythSportsFeed: (priceFeedId: string) => {
    data: PythData | null;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
    refresh: () => Promise<void>;
};
//# sourceMappingURL=usePythSportsFeed.d.ts.map