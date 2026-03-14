# SportFi Kit Monorepo

This repository contains the source code for the `sportfi-kit` npm package and its associated documentation.

## Structure

- `packages/core`: The main SportFi Kit package (components, hooks, CLI).
- `docs-site`: The documentation site built with Vite and React.
- `cli`: CLI source code (linked to `packages/core/cli`).

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

## License

MIT © [Chiliz Team](LICENSE)
