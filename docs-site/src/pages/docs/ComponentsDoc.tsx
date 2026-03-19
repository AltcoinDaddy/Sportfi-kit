export function ComponentsDoc() {
  return (
    <article className="doc-article">
      <h1>Components</h1>
      <p className="doc-subtitle">Pre-built UI components for fan engagement dApps</p>

      <h2 id="connect-button">ConnectButton</h2>
      <p>A wallet connect button that auto-detects the Socios.com browser environment.</p>
      <pre className="doc-code"><code>{`import { ConnectButton } from 'sportfi-kit'

<ConnectButton />
// Automatically adapts UI for MetaMask, WalletConnect, and Socios browser`}</code></pre>

      <h2 id="fan-token-gate">FanTokenGate</h2>
      <p>Conditionally renders children based on a user's Fan Token balance.</p>
      <pre className="doc-code"><code>{`import { FanTokenGate } from 'sportfi-kit'

<FanTokenGate
  tokenAddress="0x..."   // Fan Token contract address
  minBalance={10}         // Minimum tokens required
  fallback={<LockedUI />} // Shown when user doesn't qualify
>
  <VIPContent />
</FanTokenGate>`}</code></pre>
      <table className="doc-table">
        <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>tokenAddress</code></td><td><code>string</code></td><td>ERC-20 Fan Token contract address</td></tr>
          <tr><td><code>minBalance</code></td><td><code>number</code></td><td>Minimum balance required (default: 1)</td></tr>
          <tr><td><code>fallback</code></td><td><code>ReactNode</code></td><td>Content shown when gate is locked</td></tr>
          <tr><td><code>children</code></td><td><code>ReactNode</code></td><td>Content shown when gate is unlocked</td></tr>
        </tbody>
      </table>

      <h2 id="poll-card">PollCard</h2>
      <p>
        A ready-to-use UI component for capturing fan opinions on-chain. It includes
        loading states and success confirmation.
      </p>
      <pre className="doc-code"><code>{`import { PollCard } from 'sportfi-kit'

<PollCard
  question="Who is your MVP?"
  options={['Lionel Messi', 'Cristiano Ronaldo']}
  onVote={(id) => handleVote(id)}
  isSubmitting={isLoading}
/>`}</code></pre>

      <table className="doc-table">
        <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>question</code></td><td><code>string</code></td><td>The poll question to display.</td></tr>
          <tr><td><code>options</code></td><td><code>string[]</code></td><td>Array of voting choices.</td></tr>
          <tr><td><code>onVote</code></td><td><code>function</code></td><td>Callback with the index of the selected option.</td></tr>
          <tr><td><code>isSubmitting</code></td><td><code>boolean</code></td><td>Enables loading state (spinner).</td></tr>
        </tbody>
      </table>

      <h2 id="prediction-card">PredictionCard</h2>
      <p>
        Designed for Bi-Modal outcomes (Yes/No, Team A/Team B). Integrates directly
        with <code>SimplePredictionMarket</code> contracts.
      </p>

      <h2 id="wager-card">WagerCard</h2>
      <p>
        A comprehensive Pari-Mutuel wagering interface. Supports multiple outcomes
        and shows pool volumes for each side.
      </p>

      <h2 id="safe-area-wrapper">SafeAreaWrapper</h2>
      <p>Adds safe area padding for mobile browsers and Telegram Mini Apps.</p>
      <pre className="doc-code"><code>{`import { SafeAreaWrapper } from 'sportfi-kit'

<SafeAreaWrapper className="p-4">
  <YourContent />
</SafeAreaWrapper>`}</code></pre>

      <h2 id="action-toast">ActionToast</h2>
      <p>Toast notification for transaction status feedback.</p>

      <h2 id="share-to-socios">ShareToSociosButton</h2>
      <p>Deep-links content to the Socios.com app for sharing.</p>

      <h2 id="close-mini-app">CloseMiniAppButton</h2>
      <p>Closes the current mini app context (Socios browser / Telegram).</p>
    </article>
  );
}
