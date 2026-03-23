
import { motion } from 'framer-motion';

const PLATES = [
  { id: 1, label: '.DATA', color: 'text-emerald-400' },
  { id: 2, label: '.LIVE', color: 'text-emerald-300' },
  { id: 3, label: '.BID', color: 'text-emerald-200' },
  { id: 4, label: '.PORTAL', color: 'text-white' },
  { id: 5, label: '.CHZ', color: 'text-emerald-500' },
  { id: 6, label: '.KIT', color: 'text-emerald-100' },
];

export function Sports3DStack() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-transparent overflow-hidden">
      {/* 3D Scene Wrapper */}
      <div
        className="relative w-[320px] h-[320px] transform translate-y-20"
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: 'rotateX(55deg) rotateZ(-45deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main "SPORTFI" Processor Base */}
          <div
            className="absolute inset-0 bg-emerald-600 rounded-[2.5rem] shadow-[0_0_80px_rgba(16,185,129,0.4)] border-2 border-emerald-400/50 flex items-center justify-center"
            style={{ transform: 'translateZ(0px)' }}
          >
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-emerald-300 blur-2xl absolute rounded-full"
            />
            <span className="text-white font-black text-2xl z-10">SPORTFI</span>
          </div>

          {/* Waterfall Plates */}
          {PLATES.map((plate, index) => (
            <motion.div
              key={plate.id}
              initial={{ z: 600, opacity: 0, scale: 0.8 }}
              animate={{
                // Drop from sky (600) -> Hover (160) -> Stay -> Sink to Base (0)
                z: [600, 160, 160, 0],
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 1.1],
                filter: ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(2px)'],
              }}
              transition={{
                duration: 5, // Total travel time
                repeat: Infinity,
                // Tightened delay (index * 0.8) makes multiple plates visible at once
                delay: index * 0.8,
                // [Falling: 0-20%, Hovering: 20-85%, Sinking: 85-100%]
                times: [0, 0.2, 0.85, 1],
                ease: [0.23, 1, 0.32, 1], // Custom "Vite-style" cubic bezier
              }}
              className="absolute inset-0 bg-emerald-400/5 backdrop-blur-md border border-emerald-400/20 rounded-[2.5rem] flex items-center justify-center shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex flex-col items-center">
                <span
                  className={`font-black tracking-[0.2em] text-lg uppercase ${plate.color} drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]`}
                >
                  {plate.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
