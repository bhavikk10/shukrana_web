import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

interface RoyalButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function RoyalButton({ onClick, className = "" }: RoyalButtonProps) {
  const [isSealed, setIsSealed] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSealed) return;
    
    setIsSealed(true);
    
    // Simulate audio/shake effect
    if (navigator.vibrate) navigator.vibrate(100);
    
    if (onClick) onClick();

    setTimeout(() => {
      setIsSealed(false);
    }, 2500);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`relative overflow-hidden group bg-burgundy text-gold font-subheading tracking-widest text-sm py-4 px-8 border border-gold/50 shadow-xl ${className}`}
    >
      <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <AnimatePresence mode="wait">
        {!isSealed ? (
          <motion.div
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="flex items-center gap-3 justify-center relative z-10"
          >
            <ShoppingBag size={18} />
            <span>ADD TO CART</span>
          </motion.div>
        ) : (
          <motion.div
            key="seal"
            initial={{ scale: 2, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex items-center justify-center relative z-10"
          >
            {/* Stamped Wax Seal Graphic */}
            <div className="w-10 h-10 rounded-full bg-[#8b0000] shadow-[inset_0_0_10px_rgba(0,0,0,0.5),0_2px_5px_rgba(0,0,0,0.3)] flex items-center justify-center border-2 border-[#5a0000] drop-shadow-2xl">
              <span className="font-heading text-gold text-lg italic leading-none pt-1">S</span>
            </div>
            <span className="ml-3 zardozi-shimmer font-bold">RESERVED</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
