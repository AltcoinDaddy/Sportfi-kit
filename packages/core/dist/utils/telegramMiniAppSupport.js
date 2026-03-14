/**
 * Utility to detect and support Telegram Mini App environment.
 */
export const isTelegramMiniApp = () => {
    if (typeof window === 'undefined')
        return false;
    // Telegram WebApp global object detection
    return !!window.Telegram?.WebApp;
};
/**
 * Get Telegram user data if available.
 */
export const getTelegramUser = () => {
    if (isTelegramMiniApp()) {
        return window.Telegram.WebApp.initDataUnsafe?.user;
    }
    return null;
};
/**
 * Initialize Telegram safe area behavior.
 */
export const initTelegramWebApp = () => {
    if (isTelegramMiniApp()) {
        const webApp = window.Telegram.WebApp;
        webApp.ready();
        webApp.expand();
    }
};
