import React from 'react';
interface PredictionCardProps {
    title: string;
    description: string;
    options: string[];
    onSelect: (option: string) => void;
    isLoading?: boolean;
}
/**
 * PredictionCard - Premium UI component for prediction markets.
 * High-performance, animated, and mobile-friendly.
 */
export declare const PredictionCard: React.FC<PredictionCardProps>;
export {};
//# sourceMappingURL=PredictionCard.d.ts.map