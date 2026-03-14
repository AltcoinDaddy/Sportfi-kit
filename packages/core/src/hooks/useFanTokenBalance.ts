import { useBalance, useAccount } from 'wagmi';

/**
 * Hook to fetch the balance of a specific Fan Token for the connected user on Chiliz Chain.
 * @param tokenAddress The contract address of the Fan Token.
 */
export const useFanTokenBalance = (tokenAddress: string) => {
  const { address } = useAccount();
  
  const { data, isLoading, isError, error } = useBalance({
    address,
    token: tokenAddress as `0x${string}`,
  });

  return {
    balance: data?.formatted || '0',
    symbol: data?.symbol || '',
    decimals: data?.decimals || 18,
    isLoading,
    isError,
    error,
  };
};
