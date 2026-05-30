import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const milestones = [
  {
    numeral: "I",
    title: "The Genesis",
    subtitle: "Delhi: The Roots",
    description: "Born in the narrow, vibrant lanes of Chandni Chowk, Shukrana began as a deep homage to generational master weavers, resurrecting forgotten ancient loom techniques to preserve authentic heritage craftsmanship across India.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20traditional%20bazaar?width=800&height=1200&nologo=true&seed=51"
  },
  {
    numeral: "II",
    title: "The Revival",
    subtitle: "Varanasi & Kanchipuram",
    description: "Our quest for authenticity led us to the ancient looms of Varanasi and Kanchipuram, reviving forgotten weaves and celebrating the heritage of Indian textiles in modern silhouettes.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20weavers%20loom%20silk?width=800&height=1200&nologo=true&seed=82"
  },
  {
    numeral: "III",
    title: "The Curation",
    subtitle: "Artisan Canvas",
    description: "Every single silhouette transforms into an artistic canvas for our artisans. From intricate, delicate hand-laid embroidery work to timeless zardozi borders, we marry royal luxury with soulful precision.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20detail%20shot%20zardozi%20embroidery%20silk?width=800&height=1200&nologo=true&seed=52"
  },
  {
    numeral: "IV",
    title: "The Architecture",
    subtitle: "Mughal Inspirations",
    description: "Drawing inspiration from the grand arches and intricate jaalis of Mughal architecture, our designs incorporate geometric precision and floral motifs into flowing garments.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20model%20mughal%20architecture%20background?width=800&height=1200&nologo=true&seed=85"
  },
  {
    numeral: "V",
    title: "The Atelier",
    subtitle: "New Delhi Design House",
    description: "In our New Delhi atelier, tradition meets contemporary luxury. Premium traditional wear and suit styling is meticulously conceptualized, draped, and crafted over hundreds of hours.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20designer%20atelier%20couture?width=800&height=1200&nologo=true&seed=86"
  },
  {
    numeral: "VI",
    title: "The Voyage",
    subtitle: "Crossing Oceans",
    description: "As our patrons traveled the world, so did our creations. Shukrana began its journey across oceans, carrying the legacy of Indian craftsmanship to a global diaspora.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20vintage%20luxury%20travel?width=800&height=1200&nologo=true&seed=88"
  },
  {
    numeral: "VII",
    title: "The Arrival",
    subtitle: "California, Present",
    description: "Bridging the pristine heritage of ancient Benares with the elite, contemporary boutiques of California, we ensure the authentic soul of royal Indian couture remains impeccably tailored for the global diaspora.",
    image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20modern%20california%20lighting?width=800&height=1200&nologo=true&seed=54"
  }
];

export const FashionEditorialJourney = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        // Check if we can scroll horizontally
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        
        // If scrolling down (right) and not at the end
        if (e.deltaY > 0 && el.scrollLeft < maxScrollLeft) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 2, behavior: 'auto' });
        }
        // If scrolling up (left) and not at the beginning
        else if (e.deltaY < 0 && el.scrollLeft > 0) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 2, behavior: 'auto' });
        }
      };
      
      // Use non-passive listener to allow preventDefault
      el.addEventListener('wheel', onWheel, { passive: false });
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden group/timeline">
      {/* Visual Effects: Dust and Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-gold/50 rounded-full blur-[1px] animate-pulse"></div>
        <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-burgundy/60 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-gold/40 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[60%] right-[5%] w-1 h-1 bg-ivory/50 rounded-full blur-[0.5px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="text-center mb-10 relative z-10 flex flex-col items-center px-4">
         <h2 className="font-heading text-4xl md:text-6xl text-gold mb-6 tracking-tight drop-shadow-md zardozi-shimmer">The Shukrana Journey</h2>
         <div className="w-16 h-[1px] bg-gold/50 mb-2"></div>
      </div>

      <div 
        ref={scrollRef}
        className="w-full flex overflow-x-auto gap-[100px] md:gap-[180px] lg:gap-[250px] px-[10vw] md:px-[20vw] pb-32 pt-24 items-center [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {milestones.map((milestone, index) => (
          <EditorialSpread key={index} milestone={milestone} containerRef={scrollRef} index={index} />
        ))}
        {/* Extra padding at the end so the last item isn't flush against the right edge */}
        <div className="w-[10vw] flex-shrink-0"></div>
      </div>

      {/* Floating Scroll Indicator & Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 right-4 md:right-10 flex flex-col items-end gap-1 md:gap-2 z-30 opacity-70 group-hover/timeline:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="flex gap-1.5 md:gap-2 mb-1">
           {milestones.map((_, i) => (
             <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/50"></div>
           ))}
        </div>
        <div className="flex items-center gap-1 md:gap-2">
           <span className="font-subheading text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-gold animate-pulse">Scroll or Drag</span>
           <div className="h-[1px] w-8 md:w-12 bg-gold"></div>
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
             <polyline points="9 18 15 12 9 6"></polyline>
           </svg>
        </div>
      </div>
    </section>
  );
};

const EditorialSpread = ({ milestone, containerRef, index }: { milestone: any, containerRef: React.RefObject<HTMLDivElement>, index: number, key?: React.Key }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    axis: "x",
    offset: ["start end", "end start"]
  });

  // Gentle horizontal parallax for the image
  const imgX = useTransform(scrollXProgress, [0, 1], ["-10%", "10%"]);
  const imgScale = useTransform(scrollXProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  // Text drift
  const textY = useTransform(scrollXProgress, [0, 1], ["10%", "-10%"]);
  const opacityText = useTransform(scrollXProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const secondaryImgY = useTransform(scrollXProgress, [0, 1], ["-30%", "30%"]);
  
  // Create a secondary image for the collage effect
  const secondaryImageUrl = `https://image.pollinations.ai/prompt/vintage%20indian%20gold%20jewelry%20detail%20macro%20photography%20dark%20background?width=300&height=400&nologo=true&seed=${index + 100}`;

  return (
    <div ref={targetRef} className="flex-shrink-0 w-[85vw] md:w-[75vw] lg:w-[65vw] flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
      
      {/* Golden Connecting Thread */}
      {index !== 0 && (
        <div className="absolute top-1/2 -left-32 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-gold/20 hidden md:block"></div>
      )}

      {/* Large faint roman numeral watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[60vw] md:text-[35vw] leading-none text-gold select-none pointer-events-none z-0 mix-blend-overlay opacity-[0.03]">
        {milestone.numeral}
      </div>

      {/* Image Side */}
      <div className={`w-[85%] mx-auto md:w-5/12 h-[45vh] md:h-[75vh] min-h-[350px] md:min-h-[450px] relative z-10 group flex-shrink-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
         {/* Main Image */}
         <div className="w-full h-full overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
           <motion.div style={{ x: imgX, scale: imgScale, width: '120%', height: '100%' }}>
              <div className="absolute inset-4 border border-gold/10 z-20 pointer-events-none transition-all duration-1000 group-hover:scale-[0.96] group-hover:border-gold/50"></div>
              <img 
                 className="w-full h-full object-cover sepia-[0.1]"
                 src={milestone.image}
                 alt={milestone.title}
                 referrerPolicy="no-referrer"
               loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
           </motion.div>
         </div>

         {/* Secondary Floating Image */}
         <motion.div 
           style={{ y: secondaryImgY }}
           className={`absolute top-1/4 w-[120px] md:w-[150px] aspect-[3/4] z-30 shadow-2xl overflow-hidden border border-gold/20 hidden sm:block ${index % 2 !== 0 ? '-left-12' : '-right-12'}`}
         >
            <img src={secondaryImageUrl} alt="Detail" className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" referrerPolicy="no-referrer"  loading="lazy" />
         </motion.div>

         {/* Minimal decorative element */}
         <div className="absolute bottom-6 left-6 z-30 flex flex-col gap-1 text-[8px] font-subheading tracking-[0.4em] uppercase text-ivory/70 rotate-[-90deg] origin-bottom-left whitespace-nowrap opacity-0 md:opacity-100">
           <span>ARCHIVAL</span>
           <span className="text-gold">REF - {index + 1}00</span>
         </div>
         
         {/* Top Right Decorative lines */}
         <div className="absolute -top-4 -right-4 w-12 h-12 border-t flex pointer-events-none border-r border-gold/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300"></div>
      </div>

      {/* Text Side */}
      <motion.div 
        style={{ y: textY, opacity: opacityText }}
        className={`w-full md:w-7/12 flex flex-col justify-center relative z-10 px-[10px] md:px-[20px] lg:px-0 mt-4 md:mt-0 ${index % 2 !== 0 ? 'md:order-1' : ''}`}
      >
        <div className="flex flex-col mb-4 md:mb-12 border-b border-gold/10 pb-4 md:pb-6 w-full md:w-max pr-0 md:pr-16 relative text-left md:text-left">
          <span className="font-heading text-lg md:text-xl text-gold tracking-widest leading-none mb-2 md:mb-3 drop-shadow-md break-words">CHAPTER {milestone.numeral}</span>
          <span className="font-subheading text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-ivory/40 break-words">{milestone.subtitle}</span>
          <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
        </div>
        <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-ivory mb-4 md:mb-8 leading-[1.05] relative z-10 break-words whitespace-normal">
          {milestone.title}
        </h3>
        <p className="font-body text-[#FAF9F6]/70 text-sm md:text-base lg:text-xl leading-[1.6] md:leading-[1.8] lg:leading-[2] w-full md:max-w-xl md:pl-8 md:border-l border-gold/20 relative text-left md:text-left break-words whitespace-normal">
          <span className="absolute -left-3 top-2 text-gold/30 text-3xl font-serif hidden md:block">"</span>
          {milestone.description}
        </p>
        
        {/* Subtle decorative dot map below text */}
        <div className="mt-12 flex gap-2">
           {[...Array(7)].map((_, i) => (
             <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-gold' : 'bg-ivory/10'}`}></div>
           ))}
        </div>
      </motion.div>
    </div>
  );
};
