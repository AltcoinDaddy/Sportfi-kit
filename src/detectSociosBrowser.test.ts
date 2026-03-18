import { describe, it, expect, afterEach } from 'vitest';
import { detectSociosBrowser, closeSociosMiniApp } from '../packages/core/src/utils/detectSociosBrowser';

describe('detectSociosBrowser', () => {
  const originalUserAgent = navigator.userAgent;

  afterEach(() => {
    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true
    });
    // Clean up any SociosBridge mock
    delete (window as any).isSociosBrowser;
    delete (window as any).SociosBridge;
  });

  it('should detect Socios.com user agent (lowercase)', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) socios/1.0.0',
      configurable: true
    });
    expect(detectSociosBrowser()).toBe(true);
  });

  it('should detect Socios.com user agent (mixed case)', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 Socios/2.0',
      configurable: true
    });
    expect(detectSociosBrowser()).toBe(true);
  });

  it('should detect via window.isSociosBrowser flag', () => {
    (window as any).isSociosBrowser = true;
    expect(detectSociosBrowser()).toBe(true);
  });

  it('should not detect standard Safari browser', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
      configurable: true
    });
    expect(detectSociosBrowser()).toBe(false);
  });

  it('should not detect Chrome browser', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Mobile Safari/537.36',
      configurable: true
    });
    expect(detectSociosBrowser()).toBe(false);
  });
});

describe('closeSociosMiniApp', () => {
  const originalUserAgent = navigator.userAgent;

  afterEach(() => {
    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true
    });
    delete (window as any).isSociosBrowser;
    delete (window as any).SociosBridge;
  });

  it('should call SociosBridge.close() when available in Socios browser', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'socios/1.0',
      configurable: true
    });
    const closeMock = vi.fn();
    (window as any).SociosBridge = { close: closeMock };

    closeSociosMiniApp();
    expect(closeMock).toHaveBeenCalledOnce();
  });

  it('should fallback to history.back() when no SociosBridge in Socios browser', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'socios/1.0',
      configurable: true
    });
    const backSpy = vi.spyOn(window.history, 'back').mockImplementation(() => {});

    closeSociosMiniApp();
    expect(backSpy).toHaveBeenCalledOnce();
    backSpy.mockRestore();
  });

  it('should do nothing when not in Socios browser', () => {
    const backSpy = vi.spyOn(window.history, 'back').mockImplementation(() => {});

    closeSociosMiniApp();
    expect(backSpy).not.toHaveBeenCalled();
    backSpy.mockRestore();
  });
});
