import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';

export function LandingPage() {
  return (
    <div className="landing-page">
      <motion.header 
        className="landing-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <div className="landing-header-inner flex justify-end">
          <nav className="landing-nav">
            <Link to="/docs" className="landing-nav-link">Docs</Link>
            <a href="https://github.com/AltcoinDaddy/Sportfi-kit" className="landing-nav-link">GitHub</a>
          </nav>
        </div>
      </motion.header>

      <main>
        <Hero />
      </main>

      <motion.footer 
        className="landing-footer"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        <div className="landing-footer-inner">
          <div className="text-[10px] uppercase tracking-widest text-slate-400">
            © 2026 AltcoinDaddy
          </div>
          <div className="flex gap-4">
            <a href="/docs" className="landing-footer-link">Docs</a>
            <a href="https://github.com/AltcoinDaddy/Sportfi-kit" className="landing-footer-link">NPM</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
