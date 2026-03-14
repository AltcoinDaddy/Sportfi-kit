

export const Quickstart = () => {
  return (
    <section id="quickstart" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 text-center">Fast-track to Fan Apps</h2>
        <p className="text-lg text-slate-600 mb-12 text-center">Scaffold a production-ready Chiliz mini-app in seconds.</p>
        
        <div className="space-y-4">
          <div className="bg-slate-900 rounded-xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-slate-400 text-sm font-mono">Terminal</span>
              <button className="text-emerald-400 text-sm hover:underline">Copy</button>
            </div>
            <code className="block text-emerald-400 text-lg sm:text-2xl font-mono leading-relaxed">
              <span className="text-slate-500">$</span> npx sportfi-kit create my-fan-app<br />
              <span className="text-slate-500">$</span> cd my-fan-app<br />
              <span className="text-slate-500">$</span> npm run dev
            </code>
          </div>
          
          <p className="text-center text-slate-500 italic mt-6">
            Scaffolds a Vite project with SportFi Kit, Tailwind, and Reown AppKit pre-integrated.
          </p>
        </div>
      </div>
    </section>
  );
};
