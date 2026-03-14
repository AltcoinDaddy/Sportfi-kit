import React from 'react';
import { Prediction } from '../types';
interface PredictionCardProps {
    prediction: Prediction;
    onVote: (optionIndex: number) => void;
    isVoting?: boolean;
}
/**
 * PredictionCard - Interactive UI for sport prediction markets.
 */
export declare const PredictionCard: React.FC<PredictionCardProps>;
export {};
//# sourceMappingURL=PredictionCard.d.ts.map