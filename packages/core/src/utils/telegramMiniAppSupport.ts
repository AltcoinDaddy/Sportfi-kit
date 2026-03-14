/**
 * Utility to detect and support Telegram Mini App environment.
 */
export const isTelegramMiniApp = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Telegram WebApp global object detection
  return !!(window as any).Telegram?.WebApp;
};

/**
 * Get Telegram user data if available.
 */
export const getTelegramUser = () => {
  if (isTelegramMiniApp()) {
    return (window as any).Telegram.WebApp.initDataUnsafe?.user;
  }
  return null;
};

/**
 * Initialize Telegram safe area behavior.
 */
export const initTelegramWebApp = () => {
  if (isTelegramMiniApp()) {
    const webApp = (window as any).Telegram.WebApp;
    webApp.ready();
    webApp.expand();
  }
};
