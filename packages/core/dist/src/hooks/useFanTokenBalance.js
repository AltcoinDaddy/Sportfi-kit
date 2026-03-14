"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFanTokenBalance = void 0;
const wagmi_1 = require("wagmi");
/**
 * Hook to fetch the balance of a specific Fan Token for the connected user on Chiliz Chain.
 * @param tokenAddress The contract address of the Fan Token.
 */
const useFanTokenBalance = (tokenAddress) => {
    const { address } = (0, wagmi_1.useAccount)();
    const { data, isLoading, isError, error } = (0, wagmi_1.useBalance)({
        address,
        token: tokenAddress,
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
exports.useFanTokenBalance = useFanTokenBalance;
