/**
 * Utility to detect if the dApp is running within the Socios.com Wallet browser.
 */
export const detectSociosBrowser = () => {
    if (typeof window === 'undefined')
        return false;
    const ua = window.navigator.userAgent.toLowerCase();
    // Socios browser typically includes 'socios' in its user agent string
    return ua.includes('socios') || window.isSociosBrowser === true;
};
/**
 * Interface with Socios.com native browser API to close the mini-app.
 */
export const closeSociosMiniApp = () => {
    if (detectSociosBrowser()) {
        // Attempt to call Socios bridge close method
        if (window.SociosBridge && window.SociosBridge.close) {
            window.SociosBridge.close();
        }
        else {
            // Fallback: simple window close or back
            window.history.back();
        }
    }
};
