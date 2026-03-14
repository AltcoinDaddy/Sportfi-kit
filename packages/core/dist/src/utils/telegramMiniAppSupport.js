"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTelegramWebApp = exports.getTelegramUser = exports.isTelegramMiniApp = void 0;
/**
 * Utility to detect and support Telegram Mini App environment.
 */
const isTelegramMiniApp = () => {
    if (typeof window === 'undefined')
        return false;
    // Telegram WebApp global object detection
    return !!window.Telegram?.WebApp;
};
exports.isTelegramMiniApp = isTelegramMiniApp;
/**
 * Get Telegram user data if available.
 */
const getTelegramUser = () => {
    if ((0, exports.isTelegramMiniApp)()) {
        return window.Telegram.WebApp.initDataUnsafe?.user;
    }
    return null;
};
exports.getTelegramUser = getTelegramUser;
/**
 * Initialize Telegram safe area behavior.
 */
const initTelegramWebApp = () => {
    if ((0, exports.isTelegramMiniApp)()) {
        const webApp = window.Telegram.WebApp;
        webApp.ready();
        webApp.expand();
    }
};
exports.initTelegramWebApp = initTelegramWebApp;
