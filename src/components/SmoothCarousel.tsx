import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SmoothCarousel = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationFrameId: number;
    let lastTime = performance.now();
    
    const scroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft += (deltaTime * 0.05); // Adjust speed here
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    const pause = () => cancelAnimationFrame(animationFrameId);
    const resume = () => { lastTime = performance.now(); animationFrameId = requestAnimationFrame(scroll); };
    
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause);
    el.addEventListener('touchend', resume);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <div className="relative group/carousel w-full mb-10 overflow-visible">
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-[12px] md:gap-8 px-3 md:px-6 w-full pt-4 pb-6 md:pb-12"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
      >
        {React.Children.map(children, (child) => (
          <div className="snap-start shrink-0 w-[calc(50%-6px)] sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]">
            {child}
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={scrollLeft} 
        className="hidden md:flex absolute top-[45%] lg:-left-12 left-0 -translate-y-1/2 w-12 h-12 bg-ivory text-gold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gold/40 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-20 hover:scale-110"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
      </button>
      <button 
        onClick={scrollRight} 
        className="hidden md:flex absolute top-[45%] lg:-right-12 right-0 -translate-y-1/2 w-12 h-12 bg-ivory text-gold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-gold/40 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-20 hover:scale-110"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
      </button>
    </div>
  );
}
