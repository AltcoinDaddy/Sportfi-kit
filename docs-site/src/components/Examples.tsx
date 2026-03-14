

const exampleApps = [
  { title: 'Prediction Market', theme: 'emerald-600', screen: 'prediction' },
  { title: 'Fan Token Gate', theme: 'slate-900', screen: 'gate' },
  { title: 'Live Fan Poll', theme: 'emerald-700', screen: 'poll' },
];

export const Examples = () => {
  return (
    <section id="examples" className="py-24 bg-white px-4 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">Built with SportFi Kit</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
          {exampleApps.map((ex, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Phone Frame */}
              <div className="w-[280px] h-[580px] border-[12px] border-slate-900 rounded-[3rem] overflow-hidden bg-white relative shadow-2xl transition-transform group-hover:-translate-y-4 duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10" />
                
                {/* Simulated Screen Content */}
                <div className="h-full pt-10 px-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-2 bg-slate-100 rounded-full" />
                    <div className="w-4 h-4 rounded-full bg-emerald-600 ml-auto" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-4">
                       <div className="w-2/3 h-4 bg-slate-200 rounded mb-2" />
                       <div className="w-full h-8 bg-emerald-600 rounded-lg opacity-20" />
                    </div>
                    <div className="h-40 bg-white border border-slate-200 rounded-xl shadow-sm p-4">
                       <div className="w-1/2 h-4 bg-slate-200 rounded mb-6" />
                       <div className="space-y-2">
                          <div className="h-8 w-full bg-slate-50 border border-slate-100 rounded" />
                          <div className="h-8 w-full bg-slate-50 border border-slate-100 rounded" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 text-xl font-bold text-slate-900">{ex.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
