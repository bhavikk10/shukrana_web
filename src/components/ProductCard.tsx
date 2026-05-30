import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SubtleIcon } from './SubtleIcon';

interface ProductCardProps {
  id: string;
  name: string;
  fabric: string;
  price: string;
  status: 'In Stock' | 'Pre-Book' | 'Custom';
  image: string;
  theme?: 'light' | 'dark';
  variant?: 'home' | 'catalog';
  key?: React.Key;
}

export default function ProductCard({ id, name, fabric, price, status, image, theme = 'light', variant = 'home' }: ProductCardProps) {
  const isDark = theme === 'dark';
  
  if (variant === 'catalog') {
    return (
      <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col h-full w-full mb-2 md:mb-10 pb-1 md:pb-4 transition-colors duration-500 ease-out border border-transparent hover:border-[#EAE5DD] hover:shadow-sm">
        <Link to={`/collections/${id}`} className={`block relative w-full aspect-[4/5] md:aspect-[2/3] overflow-hidden ${isDark ? 'bg-black/40' : 'bg-[#FAF9F6] border-b border-[#EAE5DD]'}`}>
          {/* Inner Image Frame */}
          <div className="absolute inset-[3px] border-[0.5px] border-[#EAE5DD] z-10 pointer-events-none transition-colors group-hover:border-gold/40"></div>
          
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out brightness-[0.97] group-hover:brightness-100"
            referrerPolicy="no-referrer"
           loading="lazy" />
          
          {/* Elegant Status Badge */}
          <div className={`absolute top-2 md:top-4 left-1/2 -translate-x-1/2 text-[7px] md:text-[9px] tracking-[0.25em] uppercase font-subheading backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 shadow-sm border border-[#EAE5DD] z-20 ${isDark ? 'text-[#FAF9F6] bg-black/80' : 'text-charcoal bg-[#FAF9F6]/90'}`}>
            {status}
          </div>
          
          {/* Hover Reveal Button */}
          <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
             <div className={`backdrop-blur-md font-subheading tracking-[0.2em] py-3 md:py-4 text-center text-[9px] md:text-xs border-t border-[#EAE5DD] uppercase ${isDark ? 'bg-black/95 text-gold' : 'bg-charcoal/95 text-[#FAF9F6]'}`}>
               Quick View
             </div>
          </div>
        </Link>
        <div className="text-center pt-3 md:pt-5 px-1 md:px-2 flex flex-col items-center group-hover:translate-y-2 transition-transform duration-500 ease-out pb-3">
          <p className="font-subheading text-gold text-[8px] md:text-[10px] tracking-[0.25em] uppercase mb-1 md:mb-2 opacity-90">{fabric}</p>
          <h3 className={`font-heading text-base md:text-xl lg:text-2xl mb-1 tracking-wide ${isDark ? 'text-[#FAF9F6]' : 'text-charcoal'}`}>{name}</h3>
          <p className={`font-body tracking-widest text-[10px] md:text-sm ${isDark ? 'text-[#FAF9F6]/80' : 'text-charcoal/80'}`}>{price}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col h-full z-10 hover:z-50">
        {/* Outer Rectangular Frame with Double Frame Effect (1px gold, 5px inset) */}
        <Link to={`/collections/${id}`} className={`block relative mb-5 border border-gold p-[5px] shadow-xl transition-colors ${isDark ? 'bg-black/40 hover:bg-black/60' : 'bg-parchment hover:bg-parchment'}`}>
        
        {/* Subtle Zari Needle Rivets on 4 corners */}
        <div className="absolute top-1 left-1"><SubtleIcon className="w-2 h-2 text-gold/60" /></div>
        <div className="absolute top-1 right-1"><SubtleIcon className="w-2 h-2 text-gold/60" /></div>
        <div className="absolute bottom-1 left-1"><SubtleIcon className="w-2 h-2 text-gold/60 rotate-180" /></div>
        <div className="absolute bottom-1 right-1"><SubtleIcon className="w-2 h-2 text-gold/60 rotate-180" /></div>

        {/* Inner Arched Image Container */}
        <div className="w-full aspect-[2/3] md:aspect-[3/4] shape-ogee-arch overflow-hidden relative bg-burgundy/5">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
           loading="lazy" />
          
          <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
            <div className="bg-gold bg-silk text-emerald font-subheading tracking-widest py-2 md:py-3 text-center text-[10px] md:text-sm shadow-[0_-4px_15px_rgba(212,175,55,0.4)]">
              Quick View
            </div>
          </div>
        </div>

        {/* Clean Gold Circular Badge */}
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_6px_rgba(0,0,0,0.2)] border border-gold z-20 bg-[#D4AF37] text-white">
          <span className="font-heading text-[8px] md:text-[11px] tracking-wider uppercase font-semibold text-center leading-tight drop-shadow-sm px-1 md:px-2">
            {status.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
          </span>
        </div>
      </Link>
      
      <div className="text-center px-1 md:px-2">
        <p className="font-subheading text-gold text-[9px] md:text-[11px] tracking-[0.2em] uppercase mb-1 md:mb-2 min-h-[14px] md:min-h-[16px]">{fabric || '\u00A0'}</p>
        <h3 className={`font-heading text-lg md:text-2xl mb-2 md:mb-3 transition-colors ${isDark ? 'text-ivory group-hover:text-gold' : 'text-charcoal group-hover:text-burgundy'}`}>{name}</h3>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="h-[1px] bg-gold/40 w-6 md:w-8"></div>
          <p className={`font-subheading font-semibold text-sm md:text-lg ${isDark ? 'text-ivory' : 'text-charcoal'}`}>{price}</p>
          <div className="h-[1px] bg-gold/40 w-6 md:w-8"></div>
        </div>
      </div>
    </motion.div>
  );
}

