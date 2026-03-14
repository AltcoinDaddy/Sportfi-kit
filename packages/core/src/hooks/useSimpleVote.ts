import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';

export interface UseSimpleVoteReturn {
  submitVote: (optionId: number) => Promise<void>;
  isSubmitting: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  isError: boolean;
  error: Error | null;
  txHash: `0x${string}` | undefined;
}

/**
 * Hook to interact with the SimpleVote contract on Chiliz Chain.
 * Optimized for Socios.com Wallet Browser and high-concurrency environments.
 * 
 * @param contractAddress The address of the SimpleVote contract
 */
export const useSimpleVote = (contractAddress: string): UseSimpleVoteReturn => {
  const { 
    writeContract: vote, 
    data: hash, 
    isPending: isSubmitting, 
    isError: isSubmitError, 
    error: submitError 
  } = useWriteContract();

  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed 
  } = useWaitForTransactionReceipt({
    hash,
  });

  const submitVote = async (optionId: number) => {
    try {
      vote({
        address: contractAddress as `0x${string}`,
        abi: [{
          name: 'vote',
          type: 'function',
          stateMutability: 'nonpayable',
          inputs: [{ name: 'optionId', type: 'uint256' }],
          outputs: [],
        }],
        functionName: 'vote',
        args: [BigInt(optionId)],
      });
    } catch (err) {
      console.error('Vote submission failed:', err);
    }
  };

  return {
    submitVote,
    isSubmitting,
    isConfirming,
    isConfirmed,
    isError: isSubmitError, 
    error: submitError as Error | null,
    txHash: hash
  };
};
