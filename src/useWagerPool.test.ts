import { describe, it, expect, vi } from 'vitest';

// Mock wagmi hooks before importing useWagerPool
vi.mock('wagmi', () => ({
  useWriteContract: vi.fn(() => ({
    writeContract: vi.fn(),
    data: undefined,
    isPending: false,
    isError: false,
    error: null,
  })),
  useWaitForTransactionReceipt: vi.fn(() => ({
    isLoading: false,
    isSuccess: false,
  })),
}));

import { useWagerPool, WAGER_POOL_ABI } from '../packages/core/src/hooks/useWagerPool';

describe('useWagerPool', () => {
  it('should export WAGER_POOL_ABI with correct function names', () => {
    const functionNames = WAGER_POOL_ABI.map(item => item.name);
    expect(functionNames).toContain('placeWager');
    expect(functionNames).toContain('claimWinnings');
    expect(functionNames).toContain('getOutcomeVolume');
  });

  it('should have placeWager as payable', () => {
    const placeWager = WAGER_POOL_ABI.find(item => item.name === 'placeWager');
    expect(placeWager?.stateMutability).toBe('payable');
  });

  it('should have claimWinnings as nonpayable', () => {
    const claimWinnings = WAGER_POOL_ABI.find(item => item.name === 'claimWinnings');
    expect(claimWinnings?.stateMutability).toBe('nonpayable');
  });

  it('should have getOutcomeVolume as view', () => {
    const getOutcomeVolume = WAGER_POOL_ABI.find(item => item.name === 'getOutcomeVolume');
    expect(getOutcomeVolume?.stateMutability).toBe('view');
  });
});

describe('useWagerPool hook return', () => {
  it('should return all expected properties', () => {
    const result = useWagerPool('0x1234567890abcdef1234567890abcdef12345678');

    expect(result).toHaveProperty('placeWager');
    expect(result).toHaveProperty('claimWinnings');
    expect(result).toHaveProperty('isSubmitting');
    expect(result).toHaveProperty('isConfirming');
    expect(result).toHaveProperty('isConfirmed');
    expect(result).toHaveProperty('isError');
    expect(result).toHaveProperty('error');
    expect(result).toHaveProperty('txHash');
  });

  it('should have initial state as not submitting and not confirmed', () => {
    const result = useWagerPool('0x1234567890abcdef1234567890abcdef12345678');

    expect(result.isSubmitting).toBe(false);
    expect(result.isConfirming).toBe(false);
    expect(result.isConfirmed).toBe(false);
    expect(result.isError).toBe(false);
    expect(result.error).toBeNull();
    expect(result.txHash).toBeUndefined();
  });

  it('placeWager and claimWinnings should be functions', () => {
    const result = useWagerPool('0x1234567890abcdef1234567890abcdef12345678');

    expect(typeof result.placeWager).toBe('function');
    expect(typeof result.claimWinnings).toBe('function');
  });
});
