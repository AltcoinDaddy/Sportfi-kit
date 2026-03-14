import React from 'react';
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
export declare const FanTokenGate: React.FC<FanTokenGateProps>;
export {};
//# sourceMappingURL=FanTokenGate.d.ts.map