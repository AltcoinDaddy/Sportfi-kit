

export const UsageGuide = () => {
  return (
    <section id="usage" className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-12">Implementation Guide</h2>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-600 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">1</span>
              Configure Provider
            </h3>
            <p className="text-slate-600">Wrap your app with <code>SportFiKitProvider</code> at the root.</p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm shadow-lg">
<pre className="text-emerald-400">
{`import { SportFiKitProvider } from 'sportfi-kit';

function Root() {
  return (
    <SportFiKitProvider config={{ reownProjectId: '...' }}>
      <App />
    </SportFiKitProvider>
  );
}

// CRITICAL: App.tsx must be a child to use hooks!
function App() {
  const { isConnected } = useSportFiConnect();
  return <div>...</div>
}`}
</pre>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-600 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">2</span>
              Connect Wallet
            </h3>
            <p className="text-slate-600">Use the built-in <code>ConnectButton</code> or the hook for custom UI.</p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm">
<pre className="text-emerald-400">
{`import { ConnectButton, useSportFiConnect } from 'sportfi-kit';

function Navbar() {
  const { isConnected } = useSportFiConnect();
  return <ConnectButton />;
}`}
</pre>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-600 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">3</span>
              Premium UI Components
            </h3>
            <p className="text-slate-600">Drop-in high-fidelity components to build fan experiences in minutes.</p>
            
            <div className="space-y-8">
              {/* PredictionCard Example */}
              <div className="bg-slate-900 rounded-xl p-6 font-mono text-xs shadow-lg overflow-hidden">
                <div className="text-slate-500 mb-2 uppercase text-[10px] font-black tracking-widest">PredictionCard</div>
                <pre className="text-emerald-400">
{`import { PredictionCard } from 'sportfi-kit';

<PredictionCard 
  homeTeam={{ name: 'Milan', symbol: 'ACM' }}
  awayTeam={{ name: 'Inter', symbol: 'INT' }}
  predictionTitle="Match Winner"
  options={[
    { label: 'Home', odds: '2.10' },
    { label: 'Draw', odds: '3.45' },
    { label: 'Away', odds: '3.80' }
  ]}
  onSelect={(label) => console.log(label)}
/>`}
                </pre>
              </div>

              {/* FanTokenGate Example */}
              <div className="bg-slate-900 rounded-xl p-6 font-mono text-xs shadow-lg overflow-hidden">
                <div className="text-slate-500 mb-2 uppercase text-[10px] font-black tracking-widest">FanTokenGate</div>
                <pre className="text-emerald-400">
{`import { FanTokenGate } from 'sportfi-kit';

<FanTokenGate
  tokenAddress="0x..."
  tokenSymbol="ACM"
  minBalance={10}
>
  <ExclusiveContent />
</FanTokenGate>`}
                </pre>
              </div>

              {/* PollCard Example */}
              <div className="bg-slate-900 rounded-xl p-6 font-mono text-xs shadow-lg overflow-hidden">
                <div className="text-slate-500 mb-2 uppercase text-[10px] font-black tracking-widest">PollCard</div>
                <pre className="text-emerald-400">
{`import { PollCard } from 'sportfi-kit';

<PollCard 
  title="Matchday MVP?"
  totalVotes={12450}
  options={[
    { id: 1, label: 'Rafael Leão', votes: 5602 },
    { id: 2, label: 'Lautaro Martínez', votes: 3486 }
  ]}
  onVote={(id) => castVote(id)}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
