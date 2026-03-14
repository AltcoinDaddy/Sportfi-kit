# Contributing to SportFi Kit

First off, thank you for considering contributing to SportFi Kit! It's people like you who make SportFi Kit such a great tool for the Chiliz ecosystem.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

- **Check existing issues** to see if the bug has already been reported.
- If not, **open a new issue**, providing as much context as possible (browser environment, library version, reproduction steps).

### Suggesting Enhancements

- **Open a new issue** with the "enhancement" label.
- Describe the feature and why it would be useful for SportFi developers.

### Pull Requests

1. **Fork the repository** and create your branch from `main`.
2. **Install dependencies**: `npm install`.
3. **Make your changes**. If you've added code that should be tested, add tests.
4. **Ensure the test suite passes**: `npm test`.
5. **Format your code**: `npm run lint`.
6. **Submit a pull request** with a clear description of the changes.

## Development Workflow

SportFi Kit is a monorepo managed with npm workspaces.

- `packages/core`: Core library and CLI source.
- `docs-site`: Documentation site (Vite + React).

### Local Setup

```bash
git clone https://github.com/chiliz/sportfi-kit.git
cd sportfi-kit
npm install
```

### Running Documentation Locally

```bash
npm run dev --workspace=sportfi-kit-docs
```

## Coding Standards

- Use TypeScript for all new code.
- Follow the existing Prettier and ESLint configurations.
- Write clean, documented, and reusable React components.
- Ensure all components are responsive and follow the SportFi aesthetic.

## Deployment

### Documentation Site

The documentation site is hosted on Vercel. 

- **Automated Deployments**: Every push to `main` triggers a production deployment. Pull requests trigger preview deployments.
- **Manual Deploys**: If you have access to the Vercel project, you can trigger manual builds using the Vercel CLI or Dashboard.
- **Configuration**: The deployment settings are managed in the root [vercel.json](vercel.json).

License: MIT
