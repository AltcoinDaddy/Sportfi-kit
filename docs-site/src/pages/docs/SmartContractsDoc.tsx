export function SmartContractsDoc() {
  return (
    <article className="doc-article">
      <h1>Smart Contracts</h1>
      <p className="doc-subtitle">Solidity contracts for on-chain fan engagement</p>
      <p>
        SportFi Kit ships with two production-quality smart contracts. Find the source code in{' '}
        <code>packages/core/contracts/</code>.
      </p>

      <h2 id="wager-pool">SportFiWagerPool</h2>
      <p>A pari-mutuel P2P wagering pool where fans bet against each other on match outcomes.</p>

      <h3 id="wager-pool-features">Features</h3>
      <ul>
        <li>Three-outcome pools: Home, Away, Draw</li>
        <li>2% protocol fee (tracked separately, not from user funds)</li>
        <li>Double-claim protection</li>
        <li>Safe ETH transfers using <code>call()</code></li>
      </ul>

      <h3 id="wager-pool-functions">Key Functions</h3>
      <table className="doc-table">
        <thead><tr><th>Function</th><th>Access</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>createPool()</code></td><td>Owner</td><td>Create a new wagering pool for a match</td></tr>
          <tr><td><code>placeWager()</code></td><td>Anyone</td><td>Place a wager on outcome 1/2/3</td></tr>
          <tr><td><code>settlePool()</code></td><td>Owner</td><td>Settle with the winning outcome</td></tr>
          <tr><td><code>claimWinnings()</code></td><td>Winners</td><td>Claim proportional payout</td></tr>
          <tr><td><code>withdrawFees()</code></td><td>Owner</td><td>Withdraw accrued protocol fees only</td></tr>
          <tr><td><code>getOutcomeVolume()</code></td><td>View</td><td>Get total staked on an outcome</td></tr>
        </tbody>
      </table>

      <h3 id="wager-pool-usage">Usage with the Hook</h3>
      <pre className="doc-code"><code>{`import { useWagerPool } from 'sportfi-kit'

const { placeWager, claimWinnings } = useWagerPool('0xDeployedAddress')

// Place a 0.1 CHZ wager on outcome 1 (Home)
placeWager(1, parseEther('0.1'))

// Claim winnings after settlement
claimWinnings()`}</code></pre>

      <hr />

      <h2 id="prediction-market">SimplePredictionMarket</h2>
      <p>A minimal prediction market contract for arbitrary questions with multiple options.</p>

      <h3 id="prediction-features">Features</h3>
      <ul>
        <li>Flexible options (2+)</li>
        <li>Resolution by contract owner</li>
        <li>Proportional payout from total pool</li>
        <li>Double-claim protection</li>
      </ul>

      <h3 id="prediction-functions">Key Functions</h3>
      <table className="doc-table">
        <thead><tr><th>Function</th><th>Access</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>createMarket()</code></td><td>Owner</td><td>Create a new prediction market</td></tr>
          <tr><td><code>placeBet()</code></td><td>Anyone</td><td>Bet on an option</td></tr>
          <tr><td><code>resolveMarket()</code></td><td>Owner</td><td>Resolve with the winning option</td></tr>
          <tr><td><code>claimWinnings()</code></td><td>Winners</td><td>Claim proportional payout</td></tr>
          <tr><td><code>getMarketOptions()</code></td><td>View</td><td>Get option labels</td></tr>
          <tr><td><code>getOptionPool()</code></td><td>View</td><td>Get total staked on an option</td></tr>
        </tbody>
      </table>

      <h3 id="deployment">Deployment</h3>
      <p>
        Deploy using Hardhat, Foundry, or Remix to the Chiliz Spicy Testnet (<code>chainId: 88882</code>)
        or Chiliz Mainnet (<code>chainId: 88888</code>).
      </p>
      <pre className="doc-code"><code>{`// Compiler: solc 0.8.24
// Target: Chiliz Spicy Testnet (88882) or Chiliz Mainnet (88888)`}</code></pre>
    </article>
  );
}
