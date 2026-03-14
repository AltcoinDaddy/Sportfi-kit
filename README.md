# SportFi Kit Monorepo

SportFi Kit is a modern React component library, collection of hooks, and CLI tool designed specifically for developers building dApps for the Socios.com Wallet Browser and Telegram Mini-App ecosystems.

## Structure

- `packages/core`: The main SportFi Kit package (components, hooks, CLI).
- `docs-site`: The documentation site built with Vite and React.
- `cli`: CLI source code (linked to `packages/core/cli`).

## Key Features

- **Built for Chiliz Chain**: Hard-coded support for Mainnet (88888) and Spicy Testnet (88882).
- **Embedded Browser Optimized**: Automatic detection and support for Socios.com and Telegram browser environments.
- **Fan Token Infrastructure**: Ready-to-use components for Fan Token gating and balance tracking.
- **SportFi Components**: Prediction cards, voting hooks, and Pyth oracle integration out of the box.

## Development

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
npm install
```

### Building

Build all workspaces:

```bash
npm run build
```

### Documentation Site

Run the documentation site locally:

```bash
npm run dev --workspace=sportfi-kit-docs
```

## Documentation

The live documentation is available at **[www.sportfikit.online](https://www.sportfikit.online)**.

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for more information.

## License

MIT
