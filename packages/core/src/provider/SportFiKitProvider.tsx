import React, { createContext, useContext, useEffect, useState } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SportFiConfig, MiniAppContextType } from '../types';
import { detectSociosBrowser } from '../utils/detectSociosBrowser';
import { isTelegramMiniApp, initTelegramWebApp } from '../utils/telegramMiniAppSupport';

// Define Chiliz Chains
const chilizMainnet = {
  id: 88888,
  name: 'Chiliz Chain',
  network: 'chiliz-chain',
  nativeCurrency: { name: 'CHZ', symbol: 'CHZ', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.chiliz.com'] },
    public: { http: ['https://rpc.chiliz.com'] },
  },
  blockExplorers: {
    default: { name: 'ChilizScan', url: 'https://scan.chiliz.com' },
  },
};

const chilizSpicy = {
  id: 88882,
  name: 'Chiliz Spicy Testnet',
  network: 'chiliz-spicy',
  nativeCurrency: { name: 'CHZ', symbol: 'CHZ', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://spicy-rpc.chiliz.com'] },
    public: { http: ['https://spicy-rpc.chiliz.com'] },
  },
  blockExplorers: {
    default: { name: 'ChilizScan', url: 'https://spicy-scan.chiliz.com' },
  },
};

const queryClient = new QueryClient();

const MiniAppContext = createContext<MiniAppContextType | undefined>(undefined);

/**
 * SportFiKitProvider - The one-line entry point for SportFi Kit.
 * Handles Reown AppKit, Wagmi, and environment detection.
 */
export const SportFiKitProvider: React.FC<{
  config: SportFiConfig;
  children: React.ReactNode;
}> = ({ config, children }) => {
  const [miniAppContext, setMiniAppContext] = useState<MiniAppContextType>({
    isSociosBrowser: false,
    isTelegramMiniApp: false,
    safeAreaInsets: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  useEffect(() => {
    const isSocios = detectSociosBrowser();
    const isTG = isTelegramMiniApp();
    
    if (isTG) initTelegramWebApp();
    
    setMiniAppContext(prev => ({
      ...prev,
      isSociosBrowser: isSocios,
      isTelegramMiniApp: isTG,
    }));
  }, []);

  // Initialize Reown AppKit Adapter
  const networks = [chilizMainnet, chilizSpicy] as any;
  const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId: config.reownProjectId,
  });

  // Create AppKit instance
  useEffect(() => {
    createAppKit({
      adapters: [wagmiAdapter],
      networks,
      projectId: config.reownProjectId,
      themeMode: 'light',
      themeVariables: {
        '--w3m-accent': '#059669', // Emerald-600
        '--w3m-border-radius-master': '6px',
      },
      features: {
        analytics: true,
      },
    });
  }, [config.reownProjectId]);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <MiniAppContext.Provider value={miniAppContext}>
          {children}
        </MiniAppContext.Provider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export const useMiniAppContext = () => {
  const context = useContext(MiniAppContext);
  if (!context) throw new Error('useMiniAppContext must be used within SportFiKitProvider');
  return context;
};
