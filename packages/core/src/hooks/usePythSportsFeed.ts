import { useState, useEffect, useCallback } from 'react';

export interface PythData {
  price: string;
  confidence: string;
  publishTime: number;
}

/**
 * Hook to fetch sports feed data using Pyth Network oracles.
 * 
 * **⚠️ MOCK IMPLEMENTATION**: This hook currently returns simulated data
 * for development and prototyping purposes. For production, integrate the
 * real Pyth SDK: `@pythnetwork/pyth-evm-js`.
 * 
 * @param priceFeedId The Pyth Price Feed ID
 * @see https://docs.pyth.network/price-feeds/use-real-time-data/evm
 */
export const usePythSportsFeed = (priceFeedId: string) => {
  const [data, setData] = useState<PythData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // ⚠️ MOCK: Replace with real Pyth EVM contract call or @pythnetwork/pyth-evm-js
      if (typeof console !== 'undefined') {
        console.warn(
          '[SportFi Kit] usePythSportsFeed is using MOCK data. ' +
          'For production, integrate @pythnetwork/pyth-evm-js. ' +
          'See: https://docs.pyth.network/price-feeds/use-real-time-data/evm'
        );
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setData({
        price: (150 + Math.random() * 10).toFixed(2),
        confidence: "0.05",
        publishTime: Math.floor(Date.now() / 1000)
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch Pyth feed'));
    } finally {
      setIsLoading(false);
    }
  }, [priceFeedId]);

  useEffect(() => {
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
