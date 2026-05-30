import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import Divider from '../components/Divider';
import { SubtleIcon } from '../components/SubtleIcon';

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 relative bg-raw-silk min-h-[70vh] flex flex-col items-center justify-center text-center">
      <Helmet>
        <title>Order Confirmed | Shukrana</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Massive Boota Watermark */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-[0.03]">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] absolute top-[10vw] -left-[20vw] text-emerald" fill="currentColor">
          <path d="M50 0 C60 20, 80 40, 50 100 C20 40, 40 20, 50 0 Z" />
          <path d="M50 20 C55 35, 65 50, 50 80 C35 50, 45 35, 50 20 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 bg-parchment border-double border-[16px] border-gold/50 p-12 shadow-2xl w-full"
      >
        <div className="absolute inset-3 border border-gold/20 pointer-events-none"></div>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <SubtleIcon className="text-burgundy w-5 h-5" />
          <h1 className="font-heading text-4xl md:text-5xl text-burgundy">Order Confirmed</h1>
          <SubtleIcon className="text-burgundy w-5 h-5" />
        </div>

        <p className="font-body text-charcoal/80 text-lg italic mb-6">
          Thank you for your purchase. Your royal silhouette is being prepared with the utmost care.
        </p>

        {sessionId && (
          <p className="font-subheading text-xs tracking-widest text-gold uppercase mb-12">
            Order Reference: {sessionId.slice(0, 10)}...
          </p>
        )}

        <Divider />

        <div className="mt-12">
          <Link to="/collections" className="inline-block bg-burgundy text-gold font-subheading tracking-widest px-12 py-4 hover:bg-gold hover:text-burgundy transition-colors border-2 border-transparent hover:border-gold shadow-xl glow-gold">
            Continue Exploring
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
