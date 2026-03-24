import { describe, it, expect, vi } from 'vitest';

// Mock wagmi hooks
vi.mock('wagmi', () => ({
  useBalance: vi.fn(() => ({
    data: { formatted: '42.5', symbol: 'BAR', decimals: 18 },
    isLoading: false,
    isError: false,
    error: null,
  })),
  useAccount: vi.fn(() => ({
    address: '0x1234567890abcdef1234567890abcdef12345678',
  })),
}));

import { useFanTokenBalance } from '../hooks/useFanTokenBalance.js';

describe('useFanTokenBalance', () => {
  it('should return balance data from wagmi useBalance', () => {
    const result = useFanTokenBalance('0xabcdef1234567890abcdef1234567890abcdef12');

    expect(result.symbol).toBe('BAR');
    expect(result.decimals).toBe(18);
    expect(result.isLoading).toBe(false);
    expect(result.isError).toBe(false);
  });

  it('should return all expected properties', () => {
    const result = useFanTokenBalance('0xabcdef1234567890abcdef1234567890abcdef12');

    expect(result).toHaveProperty('balance');
    expect(result).toHaveProperty('symbol');
    expect(result).toHaveProperty('decimals');
    expect(result).toHaveProperty('isLoading');
    expect(result).toHaveProperty('isError');
    expect(result).toHaveProperty('error');
  });
});

describe('useFanTokenBalance with no data', () => {
  it('should return default values when balance data is undefined', async () => {
    // Re-mock with undefined data
    const wagmi = await import('wagmi');
    vi.mocked(wagmi.useBalance).mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
      error: null,
    } as any);

    const result = useFanTokenBalance('0xabcdef1234567890abcdef1234567890abcdef12');

    expect(result.balance).toBe('0');
    expect(result.symbol).toBe('');
    expect(result.decimals).toBe(18);
    expect(result.isLoading).toBe(true);
  });
});
