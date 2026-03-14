"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePythSportsFeed = void 0;
const react_1 = require("react");
/**
 * Hook to fetch real-time sports feed data using Pyth Network oracles.
 * Optimized for Chiliz Chain mini-apps.
 *
 * @param priceFeedId The Pyth Price Feed ID
 */
const usePythSportsFeed = (priceFeedId) => {
    const [data, setData] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    const fetchData = (0, react_1.useCallback)(async () => {
        setIsLoading(true);
        setError(null);
        try {
            // In a production environment, this would call the Pyth EVM contract 
            // or use @pythnetwork/pyth-evm-js
            await new Promise(resolve => setTimeout(resolve, 800));
            setData({
                price: (150 + Math.random() * 10).toFixed(2),
                confidence: "0.05",
                publishTime: Math.floor(Date.now() / 1000)
            });
        }
        catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch Pyth feed'));
        }
        finally {
            setIsLoading(false);
        }
    }, [priceFeedId]);
    (0, react_1.useEffect)(() => {
        fetchData();
    }, [fetchData]);
    return {
        data,
        isLoading,
        isError: !!error,
        error,
        refresh: fetchData
    };
};
exports.usePythSportsFeed = usePythSportsFeed;
