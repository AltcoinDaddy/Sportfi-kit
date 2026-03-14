import { useWriteContract, useReadContract } from 'wagmi';
import { parseAbi } from 'viem';
// Simplified ABI for voting
const VOTE_ABI = parseAbi([
    'function vote(uint256 proposalId) public',
    'function getVoteCount(uint256 proposalId) public view returns (uint256)',
    'function hasVoted(address user, uint256 proposalId) public view returns (boolean)',
]);
/**
 * Hook for interacting with a simple on-chain voting contract.
 * @param contractAddress The address of the voting contract.
 */
export const useSimpleVote = (contractAddress) => {
    const { writeContract, isPending, isSuccess, error } = useWriteContract();
    const vote = async (proposalId) => {
        writeContract({
            address: contractAddress,
            abi: VOTE_ABI,
            functionName: 'vote',
            args: [BigInt(proposalId)],
        });
    };
    const getVoteCount = (proposalId) => {
        return useReadContract({
            address: contractAddress,
            abi: VOTE_ABI,
            functionName: 'getVoteCount',
            args: [BigInt(proposalId)],
        });
    };
    return {
        vote,
        getVoteCount,
        isPending,
        isSuccess,
        error,
    };
};
