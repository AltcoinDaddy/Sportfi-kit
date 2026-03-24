import { describe, it, expect, afterEach, vi } from 'vitest';
import { isTelegramMiniApp, getTelegramUser, initTelegramWebApp } from '../utils/telegramMiniAppSupport.js';

describe('isTelegramMiniApp', () => {
  afterEach(() => {
    delete (window as any).Telegram;
  });

  it('should return true when Telegram.WebApp is present', () => {
    (window as any).Telegram = {
      WebApp: {
        ready: vi.fn(),
        expand: vi.fn(),
        initDataUnsafe: {}
      }
    };
    expect(isTelegramMiniApp()).toBe(true);
  });

  it('should return false when Telegram is not present', () => {
    expect(isTelegramMiniApp()).toBe(false);
  });

  it('should return false when Telegram exists but WebApp does not', () => {
    (window as any).Telegram = {};
    expect(isTelegramMiniApp()).toBe(false);
  });
});

describe('getTelegramUser', () => {
  afterEach(() => {
    delete (window as any).Telegram;
  });

  it('should return user data when available', () => {
    const mockUser = { id: 12345, first_name: 'Fan', username: 'sportfan' };
    (window as any).Telegram = {
      WebApp: {
        initDataUnsafe: { user: mockUser },
        ready: vi.fn(),
        expand: vi.fn(),
      }
    };
    expect(getTelegramUser()).toEqual(mockUser);
  });

  it('should return null when not in Telegram', () => {
    expect(getTelegramUser()).toBeNull();
  });

  it('should return undefined when no user data in initData', () => {
    (window as any).Telegram = {
      WebApp: {
        initDataUnsafe: {},
        ready: vi.fn(),
        expand: vi.fn(),
      }
    };
    expect(getTelegramUser()).toBeUndefined();
  });
});

describe('initTelegramWebApp', () => {
  afterEach(() => {
    delete (window as any).Telegram;
  });

  it('should call ready() and expand() when in Telegram Mini App', () => {
    const readyMock = vi.fn();
    const expandMock = vi.fn();
    (window as any).Telegram = {
      WebApp: {
        ready: readyMock,
        expand: expandMock,
        initDataUnsafe: {}
      }
    };

    initTelegramWebApp();
    expect(readyMock).toHaveBeenCalledOnce();
    expect(expandMock).toHaveBeenCalledOnce();
  });

  it('should do nothing when not in Telegram', () => {
    // Should not throw
    expect(() => initTelegramWebApp()).not.toThrow();
  });
});
