export function QuickstartDoc() {
  return (
    <article className="doc-article">
      <h1>Quickstart</h1>
      <p className="doc-subtitle">Get up and running in under 2 minutes</p>

      <h2 id="step-1">1. Create a new project</h2>
      <pre className="doc-code"><code>{`npx sportfi-kit create my-app --template basic`}</code></pre>

      <h2 id="step-2">2. Configure Reown Project ID (Mandatory)</h2>
      <div className="doc-important">
        <strong>Required for Wallet Connections:</strong> To enable wallet connectivity 
        (MetaMask, Socios, WalletConnect), you <strong>must</strong> provide a valid Project ID.
      </div>
      <p>Create a <code>.env</code> file in your project root:</p>
      <pre className="doc-code"><code>{`VITE_REOWN_PROJECT_ID=your_project_id_here`}</code></pre>
      <p>
        Get a free Project ID at{' '}
        <a href="https://cloud.reown.com" target="_blank" rel="noopener noreferrer">cloud.reown.com</a>.
      </p>

      <h2 id="step-3">3. Install dependencies and run</h2>
      <pre className="doc-code"><code>{`cd my-app
npm install
npm run dev`}</code></pre>

      <h2 id="step-4">4. Connect a wallet</h2>
      <p>
        Open <code>http://localhost:5173</code> in your browser. The template includes a{' '}
        <code>ConnectButton</code> component that works with MetaMask, WalletConnect, and
        the Socios.com in-app browser automatically.
      </p>

      <h2 id="templates">Available templates</h2>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Template</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>basic</code></td><td>Minimal starter with wallet connection</td></tr>
          <tr><td><code>fan-token-gate</code></td><td>Token-gated content based on Fan Token balance</td></tr>
          <tr><td><code>live-poll</code></td><td>Real-time on-chain fan polls</td></tr>
          <tr><td><code>prediction-market</code></td><td>Sports outcome predictions with staking</td></tr>
          <tr><td><code>p2p-wagering</code></td><td>Pari-mutuel P2P wagering pools</td></tr>
        </tbody>
      </table>
    </article>
  );
}
