# SportFi Kit

SportFi Kit is a development suite for building fan engagement applications on the Chiliz Chain. It provides smart contracts, React components, and a command-line tool to help developers create sports-related decentralized applications.

## Main Features

*   **P2P Wagering**: Smart contracts and components for peer-to-peer betting pools.
*   **Fan Token Support**: Tools to check Fan Token balances and restrict content based on token ownership.
*   **Match Data**: Components for displaying match predictions and live poll results.
*   **CLI Tool**: A command-line interface to quickly set up new projects with pre-built templates.
*   **Design System**: A consistent visual style for sports applications.

## Installation

You can install the package using npm:

```bash
npm install sportfi-kit
```

## Quick Start

The easiest way to start is by using the CLI tool to create a new project:

```bash
npx sportfi-kit create my-app --template p2p-wagering
```

Alternatively, you can add it to an existing React project:

```tsx
import { SportFiKitProvider, ConnectButton, WagerCard } from 'sportfi-kit';

function App() {
  return (
    <SportFiKitProvider config={{ reownProjectId: 'YOUR_PROJECT_ID' }}>
      <ConnectButton />
      <WagerCard 
        matchName="Champions League Final"
        homeTeam="Team A"
        awayTeam="Team B"
        totalVolume={1000n}
        homePool={500n}
        awayPool={300n}
        drawPool={200n}
        onPlaceWager={(id, amount) => console.log(id, amount)}
      />
    </SportFiKitProvider>
  );
}
```

## Project Templates

The CLI includes several templates to help you get started:

*   **p2p-wagering**: A template for decentralized betting pools.
*   **prediction-market**: A template for match outcome predictions.
*   **live-poll**: A template for real-time fan voting.
*   **fan-token-gate**: A template for content restricted to token holders.
*   **basic**: A simple starting point for custom applications.

## Documentation

Full documentation and guides are available at:
https://www.sportfikit.online

## License

This project is licensed under the MIT License.
