# sportfi-kit

SportFi Kit is a modern React component library, collection of hooks, and CLI tool designed specifically for developers building dApps for the Socios.com Wallet Browser and Telegram Mini-App ecosystems.

## Key Features

- **Built for Chiliz Chain**: Hard-coded support for Mainnet (88888) and Spicy Testnet (88882).
- **Embedded Browser Optimized**: Automatic detection and support for Socios.com and Telegram browser environments.
- **Fan Token Infrastructure**: Ready-to-use components for Fan Token gating and balance tracking.
- **SportFi Components**: Prediction cards, voting hooks, and Pyth oracle integration out of the box.
- **Modern Tech Stack**: React 19, Reown AppKit, Wagmi v2, Viem v2, and TanStack Query v5.
- **Premium Aesthetic**: Minimalist, high-contrast design system featuring Emerald-600 accents.

## Installation

```bash
npm install sportfi-kit
```

## Quick Start

### 1. Configure Provider

Wrap your application with the `SportFiKitProvider` at the root.

```tsx
import { SportFiKitProvider } from 'sportfi-kit';

function App() {
  return (
    <SportFiKitProvider config={{ reownProjectId: 'YOUR_PROJECT_ID' }}>
      <YourAppContent />
    </SportFiKitProvider>
  );
}
```

### 2. Connect Wallet

Use the pre-styled `ConnectButton` or the `useSportFiConnect` hook.

```tsx
import { ConnectButton, useSportFiConnect } from 'sportfi-kit';

function Header() {
  const { isConnected, address } = useSportFiConnect();
  
  return (
    <nav>
      <ConnectButton />
      {isConnected && <span>Connected: {address}</span>}
    </nav>
  );
}
```

## CLI Tools

SportFi Kit comes with a powerful CLI to scaffold new projects in seconds.

```bash
# Scaffold a new mini-app
npx sportfi-kit create my-app --template prediction-market

# Add examples to existing project
npx sportfi-kit add-example live-poll
```

Available templates:

- `basic`: Minimalism at its finest.
- `prediction-market`: Full Chiliz-integrated prediction UI.
- `fan-token-gate`: Content locking based on Fan Token ownership.
- `live-poll`: Real-time on-chain voting.

## Documentation

For full API reference, component guides, and Socios integration tips, visit our documentation site:
**[docs.sportfi.kit](https://localhost:5173)** (Local Preview)

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](../../CONTRIBUTING.md) and [Code of Conduct](../../CODE_OF_CONDUCT.md) for more information.

## License

MIT
