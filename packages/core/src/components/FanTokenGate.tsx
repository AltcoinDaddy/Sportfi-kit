import React from 'react';
import { useFanTokenBalance } from '../hooks/useFanTokenBalance.js';

interface FanTokenGateProps {
  tokenAddress: string;
  minBalance?: number;
  loadingFallback?: React.ReactNode;
  unauthorizedFallback?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * FanTokenGate - Content gating based on Fan Token ownership.
 */
export const FanTokenGate: React.FC<FanTokenGateProps> = ({
  tokenAddress,
  minBalance = 1,
  loadingFallback = <div className="p-4 text-center text-slate-600">Checking fan status...</div>,
  unauthorizedFallback = (
    <div className="p-6 border border-slate-200 rounded-xl bg-white text-center shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-2">Fan-Only Content</h3>
      <p className="text-slate-600 mb-4">You need at least {minBalance} token(s) to access this content.</p>
      <button className="bg-emerald-600 text-white rounded-md px-4 py-2 font-medium">Buy Tokens</button>
    </div>
  ),
  children
}) => {
  const { balance, isLoading } = useFanTokenBalance(tokenAddress);

  if (isLoading) return <>{loadingFallback}</>;

  if (parseFloat(balance) < minBalance) {
    return <>{unauthorizedFallback}</>;
  }

  return <>{children}</>;
};
