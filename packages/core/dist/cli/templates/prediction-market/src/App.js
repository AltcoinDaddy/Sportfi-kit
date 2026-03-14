import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SportFiKitProvider, ConnectButton, SafeAreaWrapper, PredictionCard } from '@chiliz/sportfi-kit';
import { useState } from 'react';
function App() {
    const [isVoting, setIsVoting] = useState(false);
    const prediction = {
        id: "1",
        question: "Who will win the Chiliz Cup final?",
        options: ["Team Spicy", "Team Chiliz", "Draw"],
        endTime: Date.now() + 86400000,
        totalPool: "25000",
    };
    const handleVote = (index) => {
        setIsVoting(true);
        console.log(`Voting for ${prediction.options[index]}`);
        setTimeout(() => setIsVoting(false), 2000);
    };
    return (_jsx(SportFiKitProvider, { config: { reownProjectId: 'demo' }, children: _jsxs(SafeAreaWrapper, { className: "p-4", children: [_jsxs("header", { className: "flex justify-between items-center mb-8", children: [_jsx("span", { className: "font-bold text-xl text-emerald-600", children: "Prediction Market" }), _jsx(ConnectButton, {})] }), _jsx("div", { className: "flex justify-center", children: _jsx(PredictionCard, { prediction: prediction, onVote: handleVote, isVoting: isVoting }) })] }) }));
}
export default App;
