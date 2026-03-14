/**
 * Hook to fetch real-time sports feed data using Pyth Network oracles.
 * (Simplified for demo, implementation would use @pythnetwork/pyth-evm-js)
 */
export declare const usePythSportsFeed: (priceFeedId: string) => {
    data: {
        price: string;
        confidence: string;
    } | null;
    isLoading: boolean;
};
//# sourceMappingURL=usePythSportsFeed.d.ts.map