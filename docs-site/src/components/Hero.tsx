import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0e14] min-h-screen flex items-center justify-center">
      <div className="landing-grid-bg" />
      
      <div className="landing-main">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.2,
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {"SportFi Kit.".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    transition: {
                      type: "spring",
                      damping: 12,
                      stiffness: 200
                    }
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
             Build sports Mini Apps on Chiliz in minutes. A simple SDK for creating prediction markets, wagering pools, and fan-token experiences with ease.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <a href="/docs" className="btn-primary">
              Access Internal Docs <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/AltcoinDaddy/Sportfi-kit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Source
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
