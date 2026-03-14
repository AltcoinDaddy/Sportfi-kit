"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSimpleVote = void 0;
const wagmi_1 = require("wagmi");
/**
 * Hook to interact with the SimpleVote contract on Chiliz Chain.
 * Optimized for Socios.com Wallet Browser and high-concurrency environments.
 *
 * @param contractAddress The address of the SimpleVote contract
 */
const useSimpleVote = (contractAddress) => {
    const { writeContract: vote, data: hash, isPending: isSubmitting, isError: isSubmitError, error: submitError } = (0, wagmi_1.useWriteContract)();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, wagmi_1.useWaitForTransactionReceipt)({
        hash,
    });
    const submitVote = async (optionId) => {
        try {
            vote({
                address: contractAddress,
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
        }
        catch (err) {
            console.error('Vote submission failed:', err);
        }
    };
    return {
        submitVote,
        isSubmitting,
        isConfirming,
        isConfirmed,
        isError: isSubmitError,
        error: submitError,
        txHash: hash
    };
};
exports.useSimpleVote = useSimpleVote;
