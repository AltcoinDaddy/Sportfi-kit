import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

export interface UseWagerPoolReturn {
  placeWager: (poolId: number, outcomeId: number, amount: string) => Promise<void>;
  claimWinnings: (poolId: number) => Promise<void>;
  isSubmitting: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  isError: boolean;
  error: Error | null;
  txHash: `0x${string}` | undefined;
}

export const WAGER_POOL_ABI = [
  {
    name: 'placeWager',
    type: 'function',
    stateMutability: 'payable',
    inputs: [
      { name: '_poolId', type: 'uint256' },
      { name: '_outcomeId', type: 'uint256' }
    ],
    outputs: [],
  },
  {
    name: 'claimWinnings',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [{ name: '_poolId', type: 'uint256' }],
    outputs: [],
  },
  {
    name: 'getOutcomeVolume',
    type: 'function',
    stateMutability: 'view',
    inputs: [
      { name: '_poolId', type: 'uint256' },
      { name: '_outcomeId', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'uint256' }],
  }
] as const;

/**
 * Hook to interact with the SportFiWagerPool contract.
 * Primary financial primitive for v2.0 P2P wagering.
 * 
 * For reading outcome volumes, use wagmi's `useReadContract` directly
 * with the exported `WAGER_POOL_ABI`.
 */
export const useWagerPool = (contractAddress: string): UseWagerPoolReturn => {
  const { 
    writeContract: write, 
    data: hash, 
    isPending: isSubmitting, 
    isError, 
    error 
  } = useWriteContract();

  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed 
  } = useWaitForTransactionReceipt({
    hash,
  });

  const placeWager = async (poolId: number, outcomeId: number, amount: string) => {
    write({
      address: contractAddress as `0x${string}`,
      abi: WAGER_POOL_ABI,
      functionName: 'placeWager',
      args: [BigInt(poolId), BigInt(outcomeId)],
      value: parseEther(amount),
    });
  };

  const claimWinnings = async (poolId: number) => {
    write({
      address: contractAddress as `0x${string}`,
      abi: WAGER_POOL_ABI,
      functionName: 'claimWinnings',
      args: [BigInt(poolId)],
    });
  };

  return {
    placeWager,
    claimWinnings,
    isSubmitting,
    isConfirming,
    isConfirmed,
    isError,
    error: error as Error | null,
    txHash: hash
  };
};
