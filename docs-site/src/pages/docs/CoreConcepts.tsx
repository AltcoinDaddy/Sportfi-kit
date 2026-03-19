export function CoreConcepts() {
  return (
    <article className="doc-article">
      <h1>Core Concepts</h1>
      <p className="doc-subtitle">Understanding the SportFi SDK Architecture</p>

      <h2 id="environment-awareness">Environment Awareness</h2>
      <p>
        One of the most powerful features of SportFi Kit is its ability to automatically 
        detect and adapt to the execution environment. This is critical for building 
        apps that run inside the <strong>Socios.com</strong> in-app browser, as 
        <strong>Telegram Mini Apps</strong>, or as standalone web dApps.
      </p>
      
      <table className="doc-table">
        <thead>
          <tr>
            <th>Environment</th>
            <th>Detection Hook</th>
            <th>Behavior Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Socios.com</strong></td>
            <td><code>isSociosBrowser</code></td>
            <td>Auto-connects to the internal wallet; uses Socios safe areas.</td>
          </tr>
          <tr>
            <td><strong>Telegram</strong></td>
            <td><code>isTelegramMiniApp</code></td>
            <td>Integrates with Telegram WebApp API; uses Telegram theme colors.</td>
          </tr>
          <tr>
            <td><strong>Standard Browser</strong></td>
            <td>(Default)</td>
            <td>Uses Reown (WalletConnect) for external wallet connectivity.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="fan-token-utility">Fan Token Utility</h2>
      <p>
        SportFi Kit treats Fan Tokens (ERC-20) as first-class citizens. Whether you are 
        building a gated piece of content or a wagering pool where $BAR holders get 
        boosted odds, the SDK simplifies the multi-token logic.
      </p>

      <h2 id="trustless-sportfi">Trustless SportFi</h2>
      <p>
        The SDK is built on top of audited smart contract templates for <strong>Chiliz Chain</strong>. 
        Instead of managing complex contract ABIs, you interact with high-level hooks 
        like <code>useWagerPool</code>, which handle the underlying transaction lifecycle 
        (gas estimation, signing, and confirmation) automatically.
      </p>
    </article>
  );
}
