/**
 * Hook to fetch the balance of a specific Fan Token for the connected user on Chiliz Chain.
 * @param tokenAddress The contract address of the Fan Token.
 */
export declare const useFanTokenBalance: (tokenAddress: string) => {
    balance: string;
    symbol: string;
    decimals: number;
    isLoading: boolean;
    isError: boolean;
    error: import("viem").GetBalanceErrorType | null;
};
//# sourceMappingURL=useFanTokenBalance.d.ts.map