import { describe, it, expect } from 'vitest';

/**
 * usePythSportsFeed uses React hooks (useState, useEffect, useCallback),
 * so it requires a React render context for full testing.
 * 
 * These tests verify the module's exports and structure.
 */
describe('usePythSportsFeed module', () => {
  it('should export usePythSportsFeed as a function', async () => {
    const mod = await import('../hooks/usePythSportsFeed.js');
    expect(typeof mod.usePythSportsFeed).toBe('function');
  });

  it('should be importable without errors', async () => {
    const mod = await import('../hooks/usePythSportsFeed.js');
    expect(mod).toBeDefined();
    expect(mod.usePythSportsFeed).toBeDefined();
  });
});
