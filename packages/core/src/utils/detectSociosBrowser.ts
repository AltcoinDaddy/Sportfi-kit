/**
 * Utility to detect if the dApp is running within the Socios.com Wallet browser.
 */
export const detectSociosBrowser = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const ua = window.navigator.userAgent.toLowerCase();
  // Socios browser typically includes 'socios' in its user agent string
  return (
    ua.includes('socios') || 
    (window as any).isSociosBrowser === true || 
    localStorage.getItem('DEBUG_SOCIOS') === 'true'
  );
};

/**
 * Interface with Socios.com native browser API to close the mini-app.
 */
export const closeSociosMiniApp = () => {
  if (detectSociosBrowser()) {
    // Attempt to call Socios bridge close method
    if ((window as any).SociosBridge && (window as any).SociosBridge.close) {
      (window as any).SociosBridge.close();
    } else {
      // Fallback: simple window close or back
      window.history.back();
    }
  }
};
