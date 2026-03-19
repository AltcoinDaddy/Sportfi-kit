export function SociosDoc() {
  return (
    <article className="doc-article">
      <h1>Socios Integration</h1>
      <p className="doc-subtitle">Building for the Socios.com ecosystem</p>

      <h2 id="environment-detection">Environment Detection</h2>
      <p>
        Building for the Chiliz ecosystem requires handling different wallet providers
        silently. SportFi Kit abstracts this complexity into simple boolean flags.
      </p>
      <pre className="doc-code"><code>{`const { isSociosBrowser, isTelegramMiniApp } = useSportFiConnect()`}</code></pre>

      <h2 id="deep-linking">Deep Linking</h2>
      <p>
        To provide a seamless experience, you often need to redirect users from a
        standard browser directly into your app within the <strong>Socios.com</strong> environment.
      </p>
      <pre className="doc-code"><code>{`import { getSociosDeepLink } from 'sportfi-kit'

const dappUrl = 'https://your-app.com/'
const sociosLink = getSociosDeepLink(dappUrl)
// socios://app.socios.com/mini-app?url=...`}</code></pre>

      <h2 id="environment-logic">Socios context logic</h2>
      <p>
        When running inside the Socios app, certain standard Web3 behaviors should
        be disabled (like showing a "Disconnect" button, as the wallet is managed by the app).
      </p>
      <pre className="doc-code"><code>{`function WalletInfo() {
  const { isSociosBrowser, disconnect } = useSportFiConnect()

  return (
    <div>
      {/* Don't show disconnect in Socios context */}
      {!isSociosBrowser && <button onClick={disconnect}>Logout</button>}
    </div>
  )
}`}</code></pre>

      <h2 id="utilities">Utilities Reference</h2>
      <table className="doc-table">
        <thead><tr><th>Function</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>detectSociosBrowser()</code></td><td>Static check for Socios user-agent strings.</td></tr>
          <tr><td><code>closeSociosMiniApp()</code></td><td>Requests the parent app to close the mini-app layer.</td></tr>
          <tr><td><code>getSociosDeepLink(url)</code></td><td>Generates a <code>socios://</code> protocol link.</td></tr>
        </tbody>
      </table>

      <h2 id="safe-area">Safe Area Handling</h2>
      <p>
        Use <code>SafeAreaWrapper</code> to ensure your content respects device safe areas
        in mobile browsers and mini app contexts.
      </p>
      <pre className="doc-code"><code>{`import { SafeAreaWrapper } from 'sportfi-kit'

<SafeAreaWrapper className="p-4">
  <YourContent />
</SafeAreaWrapper>`}</code></pre>
    </article>
  );
}
