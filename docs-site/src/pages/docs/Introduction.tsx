export function Introduction() {
  return (
    <article className="doc-article">
      <h1>Introduction</h1>
      <p className="doc-subtitle">The Engineering Foundation for Fan-Engagement on Chiliz</p>

      <p>
        <strong>SportFi Kit</strong> is a comprehensive software development kit (SDK) designed specifically 
        for the <strong>Chiliz Chain</strong>. It enables developers to build high-performance 
        "SportFi" applications—ranging from prediction markets and wagering pools to fan-token-gated 
        experiences—with minimal boilerplate.
      </p>

      <div className="doc-warning">
        <strong>Terminal Core v1.0</strong> — Optimized for high-concurrency environments like 
        Socios.com Browser and Telegram Mini Apps.
      </div>

      <h2 id="prerequisites">Prerequisites</h2>
      <p>Before you begin building with SportFi Kit, ensure you have the following:</p>
      <ul>
        <li>
          <strong>Reown Project ID</strong>: Mandatory for wallet connectivity (MetaMask, Socios, WalletConnect). 
          Get one for free at <a href="https://cloud.reown.com" target="_blank" rel="noopener noreferrer">cloud.reown.com</a>.
        </li>
        <li><strong>Node.js 18.x or later</strong>.</li>
        <li><strong>React 18+</strong> development environment.</li>
      </ul>

      <h2 id="the-chiliz-bridge">The Chiliz Bridge</h2>
      <p>
        Building on Chiliz requires more than just Ethereum-compatible tools. SportFi Kit provides 
        the specialized logic needed to:
      </p>
      <ul>
        <li><strong>Detect Environments</strong>: Seamlessly switch behavior between Socios.com, Telegram, and standard mobile browsers.</li>
        <li><strong>Fan Token Utility</strong>: First-class support for gating content and actions based on $BAR, $JUV, $CITY, and other Fan Tokens.</li>
        <li><strong>Trustless Wagering</strong>: Hardened contract interfaces for P2P sports wagering and outcome-based markets.</li>
      </ul>

      <h2 id="installation">Quick Install</h2>
      <p>Install the core package and its peer dependencies (wagmi, viem):</p>
      <pre className="doc-code"><code>{`npm install sportfi-kit wagmi viem @tanstack/react-query`}</code></pre>

      <h2 id="philosophy">Core Philosophy</h2>
      <p>
        SportFi Kit follows a <strong>"Headless-First"</strong> approach. While we provide 
        pre-styled components (like <code>PredictionCard</code>), the core logic is 
        exposed through powerful React Hooks, giving you full control over your UI's aesthetic.
      </p>

      <h2 id="cli-scaffolding">Start with a Template</h2>
      <p>The fastest way to see SportFi Kit in action is using our CLI tool:</p>
      <pre className="doc-code"><code>{`npx sportfi-kit create my-app --template prediction-market`}</code></pre>

      <p>
        This will scaffold a production-ready Chiliz dApp with everything pre-configured: 
        Reown connectivity, Chiliz RPCs, and basic UI patterns.
      </p>
    </article>
  );
}
