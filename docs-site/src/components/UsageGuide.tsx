

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
        </div>
      </div>
    </section>
  );
};
