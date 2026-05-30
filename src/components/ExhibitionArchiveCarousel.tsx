import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface ArchiveCarouselProps {
  images: string[];
}

export default function ExhibitionArchiveCarousel({ images }: ArchiveCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const childWidth = scrollRef.current.children[0].clientWidth;
      const gap = 32; // gap-8 is 32px
      const newIndex = Math.round(scrollPos / (childWidth + gap));
      setCurrentIndex(Math.min(Math.max(newIndex, 0), images.length - 1));
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current && scrollRef.current.children[index]) {
      const child = scrollRef.current.children[index] as HTMLElement;
      scrollRef.current.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full flex flex-col gap-6 group">
      {/* Scrollable track */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            className="flex-none w-[80%] md:w-[75%] aspect-[3/5] snap-start relative p-3 border-[1.5px] border-[#D4AF37] rounded-t-full bg-transparent shadow-2xl transition-transform duration-700 overflow-hidden group-hover:bg-gold/5"
          >
            {/* Inner Frame Embellishment */}
            <div className="absolute inset-2 border-[1px] border-[#D4AF37]/40 rounded-t-full z-10 pointer-events-none"></div>
            {img ? (
              <img 
                src={img} 
                alt={`Archive photo ${i + 1}`}
                className="w-full h-full object-cover rounded-t-full grayscale-[10%]"
                referrerPolicy="no-referrer"
               loading="lazy" />
            ) : (
              <div className="w-full h-full rounded-t-full flex items-center justify-center relative overflow-hidden bg-parchment/60">
                 {/* Raw khadi silk texture effect */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-60 mix-blend-multiply pointer-events-none"></div>
                 {/* 10% gold line-art brand crest */}
                 <svg viewBox="0 0 100 100" className="w-[40%] h-[40%] opacity-[0.10] mix-blend-multiply" fill="none" stroke="#D4AF37" strokeWidth="1">
                    <circle cx="50" cy="50" r="45" strokeDasharray="2 4" />
                    <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="25" />
                    <path d="M45 40 C 60 40, 60 50, 50 50 C 40 50, 40 60, 55 60" strokeWidth="2" strokeLinecap="round" />
                 </svg>
              </div>
            )}
          </div>
        ))}
        {/* Spacer to allow the last item to snap to the left edge and have empty space after */}
        <div className="flex-none w-[10%] list-none border-none"></div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="font-mono text-[11px] tracking-[0.2em] opacity-60 uppercase">
          {String(currentIndex + 1).padStart(2, '0')} <span className="opacity-30">/</span> {String(images.length).padStart(2, '0')}
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
            className={`p-1 text-[#D4AF37] transition-opacity duration-300 hover:scale-110 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100 cursor-pointer'}`}
            disabled={currentIndex === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" />
            </svg>
          </button>
          
          {/* Sleek progress line */}
          <div className="w-24 md:w-32 h-[1px] bg-[#D4AF37]/20 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#D4AF37]"
              initial={false}
              animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            />
          </div>

          <button 
            onClick={() => scrollTo(Math.min(images.length - 1, currentIndex + 1))}
            className={`p-1 text-[#D4AF37] transition-opacity duration-300 hover:scale-110 ${currentIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100 cursor-pointer'}`}
            disabled={currentIndex === images.length - 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
