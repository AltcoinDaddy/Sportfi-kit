export function HooksDoc() {
  return (
    <article className="doc-article">
      <h1>Hooks</h1>
      <p className="doc-subtitle">React hooks for Chiliz Chain interactions</p>

      <h2 id="use-sportfi-connect">useSportFiConnect</h2>
      <p>
        The primary hook for managing wallet connectivity. It is <strong>Environment Aware</strong>, 
        meaning it performs different connection logic depending on whether it's running in a 
        standard browser (uses Reown), the Socios.com browser (uses injected provider), 
        or a Telegram Mini App.
      </p>
      <pre className="doc-code"><code>{`const { address, isConnected, connect } = useSportFiConnect()`}</code></pre>
      
      <table className="doc-table">
        <thead><tr><th>Return Value</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>address</code></td><td><code>string | undefined</code></td><td>The hex address of the connected wallet.</td></tr>
          <tr><td><code>isConnected</code></td><td><code>boolean</code></td><td>True if a wallet session is active.</td></tr>
          <tr><td><code>isConnecting</code></td><td><code>boolean</code></td><td>True while waiting for user approval.</td></tr>
          <tr><td><code>isSociosBrowser</code></td><td><code>boolean</code></td><td>Detects if running inside the Socios.com app.</td></tr>
          <tr><td><code>isTelegramMiniApp</code></td><td><code>boolean</code></td><td>Detects if running as a Telegram Mini App.</td></tr>
          <tr><td><code>connect</code></td><td><code>function</code></td><td>Triggers the connection modal or auto-handshake.</td></tr>
          <tr><td><code>disconnect</code></td><td><code>function</code></td><td>Clears the current session.</td></tr>
        </tbody>
      </table>

      <h2 id="use-fan-token-balance">useFanTokenBalance</h2>
      <p>
        Fetches the real-time balance of any Chiliz-based Fan Token for the connected user. 
        It handles formatting and decimal conversion automatically.
      </p>
      <pre className="doc-code"><code>{`const { balance, symbol } = useFanTokenBalance('0xBAR_TOKEN_ADDRESS')`}</code></pre>

      <table className="doc-table">
        <thead><tr><th>Return Value</th><th>Type</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>balance</code></td><td><code>string</code></td><td>Formatted balance (e.g., "10.00").</td></tr>
          <tr><td><code>symbol</code></td><td><code>string</code></td><td>Token symbol (e.g., "BAR").</td></tr>
          <tr><td><code>decimals</code></td><td><code>number</code></td><td>Standard ERC-20 decimals for the token.</td></tr>
          <tr><td><code>isLoading</code></td><td><code>boolean</code></td><td>True while fetching data from the RPC.</td></tr>
        </tbody>
      </table>

      <h2 id="use-wager-pool">useWagerPool</h2>
      <p>Interacts with the <code>SportFiWagerPool</code> smart contract.</p>
      <pre className="doc-code"><code>{`import { useWagerPool } from 'sportfi-kit'

const {
  placeWager,    // (outcomeId: number, amount: bigint) => void
  claimWinnings, // () => void
  isSubmitting,  // Transaction pending
  isConfirming,  // Waiting for block confirmation
  isConfirmed,   // Transaction confirmed
  isError,       // Error state
  error,         // Error object
  txHash,        // Transaction hash
} = useWagerPool('0xWagerPoolContractAddress')`}</code></pre>
      <p>
        For reading pool data (e.g. outcome volumes), use <code>WAGER_POOL_ABI</code>
        with wagmi's <code>useReadContract</code>:
      </p>
      <pre className="doc-code"><code>{`import { WAGER_POOL_ABI } from 'sportfi-kit'
import { useReadContract } from 'wagmi'

const { data: volume } = useReadContract({
  address: '0x...',
  abi: WAGER_POOL_ABI,
  functionName: 'getOutcomeVolume',
  args: [poolId, outcomeId],
})`}</code></pre>

      <h2 id="use-simple-vote">useSimpleVote</h2>
      <p>Submit votes to a <code>SimpleVote</code> contract.</p>
      <pre className="doc-code"><code>{`import { useSimpleVote } from 'sportfi-kit'

const {
  submitVote,   // (optionId: number) => Promise<void>
  isSubmitting,
  isConfirming,
  isConfirmed,
  isError,
  error,
  txHash,
} = useSimpleVote('0xSimpleVoteContractAddress')`}</code></pre>

      <h2 id="use-pyth-sports-feed">usePythSportsFeed</h2>
      <blockquote className="doc-warning">
        ⚠️ <strong>Mock Implementation</strong> — This hook currently returns simulated data.
        For production, integrate <a href="https://docs.pyth.network/price-feeds/use-real-time-data/evm" target="_blank" rel="noopener noreferrer">@pythnetwork/pyth-evm-js</a>.
      </blockquote>
      <pre className="doc-code"><code>{`import { usePythSportsFeed } from 'sportfi-kit'

const { data, isLoading, isError, error, refresh } = usePythSportsFeed('0xPriceFeedId')`}</code></pre>
    </article>
  );
}
