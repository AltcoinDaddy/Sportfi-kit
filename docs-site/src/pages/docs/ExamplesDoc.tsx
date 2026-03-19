export function ExamplesDoc() {
  return (
    <article className="doc-article">
      <h1>Examples</h1>
      <p className="doc-subtitle">Real-world usage patterns</p>

      <h2 id="templates">Official Templates</h2>
      <p>
        The quickest way to get started is by checking out our official templates in the 
        monorepo. Each template is a standalone project you can scaffold using:
      </p>
      <pre className="doc-code"><code>{`npx sportfi-kit create my-app --template [name]`}</code></pre>

      <table className="doc-table">
        <thead><tr><th>Template</th><th>Source Code</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><code>basic</code></td><td><a href="https://github.com/AltcoinDaddy/Sportfi-kit/tree/main/packages/core/templates/basic" target="_blank" rel="noopener noreferrer">View Source</a></td><td>Connect wallet & display address.</td></tr>
          <tr><td><code>fan-token-gate</code></td><td><a href="https://github.com/AltcoinDaddy/Sportfi-kit/tree/main/packages/core/templates/fan-token-gate" target="_blank" rel="noopener noreferrer">View Source</a></td><td>Balance-based conditional rendering.</td></tr>
          <tr><td><code>live-poll</code></td><td><a href="https://github.com/AltcoinDaddy/Sportfi-kit/tree/main/packages/core/templates/live-poll" target="_blank" rel="noopener noreferrer">View Source</a></td><td>On-chain voting interface.</td></tr>
          <tr><td><code>prediction-market</code></td><td><a href="https://github.com/AltcoinDaddy/Sportfi-kit/tree/main/packages/core/templates/prediction-market" target="_blank" rel="noopener noreferrer">View Source</a></td><td>Market creation and outcome staking.</td></tr>
          <tr><td><code>p2p-wagering</code></td><td><a href="https://github.com/AltcoinDaddy/Sportfi-kit/tree/main/packages/core/templates/p2p-wagering" target="_blank" rel="noopener noreferrer">View Source</a></td><td>Pari-mutuel wagering pools.</td></tr>
        </tbody>
      </table>

      <hr className="my-8" />

      <h2 id="fan-token-gate">Fan Token Gate Example</h2>
      <p>Restrict content access based on a user's Fan Token holdings:</p>
      <pre className="doc-code"><code>{`import { FanTokenGate } from 'sportfi-kit'

function VIPSection() {
  return (
    <FanTokenGate
      tokenAddress="0x..."
      minBalance={10}
      fallback={<p>You need at least 10 tokens to access this.</p>}
    >
      <h2>Welcome to the VIP zone!</h2>
      <p>Exclusive match analysis and predictions.</p>
    </FanTokenGate>
  )
}`}</code></pre>

      <h2 id="live-poll">Live Fan Poll</h2>
      <p>Create on-chain polls for fan engagement:</p>
      <pre className="doc-code"><code>{`import { PollCard, useSimpleVote } from 'sportfi-kit'

function MatchPoll() {
  const { submitVote, isSubmitting, isConfirmed } = useSimpleVote('0xContractAddr')

  return (
    <PollCard
      question="Man of the Match?"
      options={['Player A', 'Player B', 'Player C']}
      onVote={(optionId) => submitVote(optionId)}
      isSubmitting={isSubmitting}
      isConfirmed={isConfirmed}
    />
  )
}`}</code></pre>

      <h2 id="prediction-market">Prediction Market</h2>
      <p>Let fans stake on match outcomes:</p>
      <pre className="doc-code"><code>{`import { PredictionCard } from 'sportfi-kit'

function MatchPrediction() {
  return (
    <PredictionCard
      matchName="Chelsea vs Arsenal"
      options={['Home Win', 'Draw', 'Away Win']}
      contractAddress="0x..."
    />
  )
}`}</code></pre>

      <h2 id="p2p-wagering">P2P Wagering</h2>
      <p>Pari-mutuel wagering pools where fans bet against each other:</p>
      <pre className="doc-code"><code>{`import { WagerCard, useWagerPool } from 'sportfi-kit'

function WagerPool() {
  const { placeWager, claimWinnings, isSubmitting } = useWagerPool('0xPoolAddr')

  return (
    <WagerCard
      matchName="Barcelona vs Real Madrid"
      outcomes={['Home', 'Away', 'Draw']}
      onWager={(outcomeId, amount) => placeWager(outcomeId, amount)}
      onClaim={() => claimWinnings()}
      isLoading={isSubmitting}
    />
  )
}`}</code></pre>
    </article>
  );
}
