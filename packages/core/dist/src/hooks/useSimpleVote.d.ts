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
export declare const useSimpleVote: (contractAddress: string) => UseSimpleVoteReturn;
//# sourceMappingURL=useSimpleVote.d.ts.map