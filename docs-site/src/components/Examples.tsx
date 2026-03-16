import { motion } from 'framer-motion';
import { PredictionCard, PollCard, WagerCard } from 'sportfi-kit';

const PredictionScreen = () => (
  <div className="h-full bg-slate-50 flex flex-col">
    <PredictionCard 
      className="h-full border-none shadow-none rounded-none"
      homeTeam={{ name: 'Milan', symbol: 'ACM', score: 2 }}
      awayTeam={{ name: 'Inter', symbol: 'INT', score: 1 }}
      matchStatus="72'"
      isLive={true}
      predictionTitle="Match Winner"
      options={[
        { label: 'Home', odds: '2.10' },
        { label: 'Draw', odds: '3.45' },
        { label: 'Away', odds: '3.80' }
      ]}
      onSelect={(label) => console.log('Selected:', label)}
    />
  </div>
);


const PollScreen = () => (
  <div className="h-full bg-white flex flex-col">
    <PollCard 
      className="h-full border-none shadow-none rounded-none"
      title="Who was your MVP for the Derby?"
      totalVotes={12450}
      options={[
        { id: 1, label: 'Rafael Leão', votes: 5602 },
        { id: 2, label: 'Lautaro Martínez', votes: 3486 },
        { id: 3, label: 'Mike Maignan', votes: 1862 }
      ]}
      onVote={(id) => console.log('Voted for:', id)}
    />
  </div>
);

const WagerScreen = () => (
  <div className="h-full bg-slate-950 flex flex-col">
    <WagerCard 
      className="h-full border-none shadow-none rounded-none p-6"
      matchName="Champions Final"
      homeTeam="Real Madrid"
      awayTeam="Man City"
      totalVolume={BigInt(5000 * 1e18)}
      homePool={BigInt(2500 * 1e18)}
      awayPool={BigInt(1500 * 1e18)}
      drawPool={BigInt(1000 * 1e18)}
      onPlaceWager={(id, amt) => console.log('Wager:', id, amt)}
    />
  </div>
);

const exampleApps = [
  { title: 'Prediction Market', theme: 'emerald-600', screen: 'prediction', component: PredictionScreen },
  { title: 'P2P Wagering', theme: 'slate-950', screen: 'wager', component: WagerScreen },
  { title: 'Live Fan Poll', theme: 'emerald-700', screen: 'poll', component: PollScreen },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export const Examples = () => {
  return (
    <section id="examples" className="py-32 bg-white px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Built with SportFi Kit</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Explore premium experiences designed specifically for the Socios and Chiliz ecosystem.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {exampleApps.map((ex, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              className="flex flex-col items-center group w-full"
            >
              {/* Phone Frame */}
              <div className="w-full aspect-[320/660] max-h-[660px] max-w-[320px] border-[12px] border-slate-900 rounded-[3.5rem] overflow-hidden bg-white relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:shadow-[0_80px_120px_-30px_rgba(16,185,129,0.2)] group-hover:-translate-y-6 ring-8 ring-slate-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="absolute top-3 right-8 flex gap-1 z-20">
                  <div className="w-4 h-1.5 bg-slate-800 rounded-full" />
                  <div className="w-8 h-1.5 bg-slate-800 rounded-full" />
                </div>
                
                {/* Actual Coded Content */}
                <div className="h-full w-full">
                  <ex.component />
                </div>
              </div>
              
              <div className="text-center mt-12">
                 <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-emerald-600 transition-colors">{ex.title}</h3>
                 <div className="w-12 h-1.5 bg-emerald-600 rounded-full mx-auto opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
