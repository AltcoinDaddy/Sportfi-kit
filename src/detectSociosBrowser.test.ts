import { describe, it, expect } from 'vitest';
import { detectSociosBrowser } from '../packages/core/src/utils/detectSociosBrowser';

describe('detectSociosBrowser', () => {
  it('should detect Socios.com user agent', () => {
    const originalUserAgent = navigator.userAgent;
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) socios/1.0.0',
      configurable: true
    });

    expect(detectSociosBrowser()).toBe(true);

    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true
    });
  });

  it('should not detect other browsers', () => {
    const originalUserAgent = navigator.userAgent;
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
      configurable: true
    });

    expect(detectSociosBrowser()).toBe(false);

    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true
    });
  });
});
