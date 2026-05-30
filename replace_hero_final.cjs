const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const heroStart = '{/* Hero Section */}';
const heroEnd = '{/* Featured Collections */}';

const startIndex = content.indexOf(heroStart);
const endIndex = content.indexOf(heroEnd);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find section markers");
    process.exit(1);
}

const newHero = `{/* Hero Section */}
      <section className="relative min-h-[100svh] w-full bg-[#3A0A12] overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-24 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Maximalist Deep Layered Backgrounds */}
        <div className="absolute inset-0 bg-[#5C121E] z-[-3]"></div>
        {/* Very dark radial gradient mapping to center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-[-2] pointer-events-none"></div>
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[-1] pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-40 grayscale"><ParallaxJaali /></div>
        <div className="absolute inset-0 opacity-60 z-0 pointer-events-none"><CanvasGoldDust /></div>

        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-[#D4AF37]/30 z-0 pointer-events-none hidden sm:block">
          {/* Intricate Corner Motifs */}
          <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[3px] border-l-[3px] border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-[3px] border-r-[3px] border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-[3px] border-l-[3px] border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[3px] border-r-[3px] border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          {/* Inner hairline frame */}
          <div className="absolute inset-2 border border-[#D4AF37]/15"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full pt-10">
          
          {/* Content Container (Left side on desktop, 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 self-center w-full z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="w-12 h-[1px] bg-[#D4AF37] block shadow-[0_0_5px_rgba(212,175,55,0.5)]"></span>
                <span className="font-subheading text-[#D4AF37] tracking-[6px] uppercase text-xs md:text-sm font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] zardozi-shimmer">
                   Heritage Couture
                </span>
                <span className="w-12 h-[1px] bg-[#D4AF37] block shadow-[0_0_5px_rgba(212,175,55,0.5)] lg:hidden"></span>
              </div>
              
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] text-[#FAF9F6] leading-[0.9] mb-8 md:mb-12 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] zardozi-shimmer relative">
                The Royal <br/> Trousseau
              </h1>

              <div className="relative mb-12 pl-6 md:pl-0">
                 {/* Decorative Left Line */}
                 <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 hidden md:block"></div>
                 
                 <p className="font-body text-[#FAF9F6]/90 text-lg md:text-xl lg:text-2xl font-light italic leading-[1.8] md:pl-8">
                  <span className="float-left text-[6.5rem] md:text-[7.5rem] font-heading text-[#D4AF37] leading-[0.65] mr-5 mt-3 relative zardozi-shimmer drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                     A
                     {/* Intricate Gold Vine SVG wrapper for Drop Cap */}
                     <svg className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none opacity-80 text-[#D4AF37]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                       <path d="M10,90 C-10,50 30,10 90,10" strokeDasharray="2 4"/>
                       <circle cx="90" cy="10" r="1.5" fill="currentColor"/>
                       <circle cx="10" cy="90" r="1.5" fill="currentColor"/>
                     </svg>
                  </span>
                  legacy of hand-woven blessings, crafted for the modern monarch. Where every thread of spun gold weaves a timeless tale of eternal grace.
                 </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
                  <Link to="/collections" className="group relative overflow-hidden bg-gradient-to-br from-[#D4AF37] to-[#B38C2A] text-[#2A050A] px-10 py-[1.125rem] flex items-center justify-center transition-all duration-500 shadow-[0_5px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:-translate-y-1">
                    <span className="font-subheading tracking-widest text-sm font-bold uppercase relative z-10 text-center">Explore the Collections</span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </Link>
                  
                  <Link to="/about" className="group relative px-10 py-[1.125rem] border border-[#D4AF37]/60 text-[#FAF9F6] transition-all duration-300 hover:bg-[#D4AF37]/10 flex items-center justify-center overflow-hidden hover:-translate-y-1 hover:border-[#D4AF37]">
                    <span className="font-subheading tracking-widest text-sm uppercase font-medium relative z-10 group-hover:text-[#D4AF37] transition-colors">Know More</span>
                  </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Container (Right side on desktop, 6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2 h-[55vh] md:h-[65vh] lg:h-[80vh] min-h-[450px] w-full">
             
             {/* Detailed Golden Geometry floating behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-[800px] aspect-square border-[1px] border-[#D4AF37]/10 rounded-full z-0 pointer-events-none flex items-center justify-center hidden md:flex">
               <div className="w-[85%] aspect-square border-[1px] border-[#D4AF37]/20 rounded-full border-dashed animate-[spin_100s_linear_infinite]"></div>
               <div className="absolute w-[70%] aspect-square border-[1px] border-[#D4AF37]/15 rounded-full animate-[spin_140s_linear_infinite_reverse]"></div>
             </div>

             <MagneticTilt className="relative w-full max-w-[420px] md:max-w-[500px] lg:max-w-[650px] h-full shape-arch shadow-[0_40px_80px_rgba(0,0,0,0.9)] perspective-1000 z-10 group mx-auto">
                {/* Gold Arch Border Overlay */}
                <div className="absolute inset-[-4px] z-30 pointer-events-none">
                  <svg className="w-full h-full shape-arch" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 0 L70 5 L85 15 L95 30 L100 50 L100 100 L0 100 L0 50 L5 30 L15 15 L30 5 Z" 
                          fill="none" stroke="#D4AF37" strokeWidth="0.8" vectorEffect="non-scaling-stroke"
                          className="zardozi-shimmer drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
                    <path d="M50 1 L69 6 L84 16 L94 30.5 L99 50 L99 99 L1 99 L1 50 L6 30.5 L16 16 L31 6 Z" 
                          fill="none" stroke="#D4AF37" strokeWidth="0.3" vectorEffect="non-scaling-stroke"
                          className="opacity-50" />
                  </svg>
                  {/* Ornate Apex Pin */}
                  <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,1)]">
                     <svg width="36" height="36" viewBox="0 0 24 40" fill="none" className="w-8 h-10 text-[#D4AF37]">
                        <ellipse cx="12" cy="4" rx="2" ry="4" stroke="currentColor" strokeWidth="2" fill="currentColor" className="opacity-80"/>
                        <line x1="12" y1="8" x2="12" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 12 0 C 20 -15, 34 5, 15 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70"/>
                        <path d="M 12 0 C 4 -15, -10 5, 9 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70"/>
                      </svg>
                  </div>
                </div>
                
                <div className="w-full h-full shape-arch overflow-hidden bg-[#2A050A] relative border-[4px] border-transparent">
                  <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-10"></div>
                  
                  <img 
                    src="https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20model%20traditional%20suit%20burgundy%20gold%20studio%20lighting%20mughal%20palace%20background%20centered%20dramatic?width=1200&height=1800&nologo=true&seed=814" 
                    alt="The Imperial Portal" 
                    className="w-full h-full object-cover animate-[kenburns_25s_ease-in-out_infinite_alternate] scale-105"
                    referrerPolicy="no-referrer"
                    style={{ transformOrigin: 'center 20%' }}
                  />
                  {/* Heavy Depth vignette inside the arch */}
                  <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.95)] pointer-events-none mix-blend-multiply z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,4,8,0.9)] via-transparent to-[rgba(26,4,8,0.3)] z-10"></div>
                </div>
             </MagneticTilt>

             {/* Floating Background Accent Image (Foreground overlap) */}
             <motion.div 
               initial={{ opacity: 0, y: 50, rotate: -5 }}
               animate={{ opacity: 1, y: 0, rotate: -5 }}
               transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
               className="absolute -right-8 -bottom-16 lg:-right-16 lg:-bottom-24 w-32 md:w-48 lg:w-64 aspect-[3/4] shape-arch z-20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-[#D4AF37]/30 group-hover:rotate-0 group-hover:translate-y-[-10px] transition-all duration-700 hidden md:block"
             >
               <div className="w-full h-full shape-arch overflow-hidden">
                   <img 
                     src="https://image.pollinations.ai/prompt/intricate%20gold%20zardozi%20embroidery%20dark%20burgundy%20fabric%20macro%20detail?width=600&height=800&nologo=true&seed=912" 
                     alt="Zardozi Detail" 
                     className="w-full h-full object-cover saturate-120"
                   />
                   <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none mix-blend-multiply"></div>
               </div>
             </motion.div>

          </div>

        </div>
      </section>
`;

content = content.slice(0, startIndex) + newHero + '\n\n      ' + content.slice(endIndex);

fs.writeFileSync(file, content);
console.log("Replaced hero with ultra-maximalist imperial layout.");
