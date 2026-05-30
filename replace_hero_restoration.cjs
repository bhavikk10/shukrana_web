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
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[#FAF9F6] lg:bg-transparent">
        
        {/* Left Side: Ivory Text Background Block */}
        <motion.div
           initial={{ x: '-100%' }}
           animate={{ x: 0 }}
           transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
           className="absolute top-0 bottom-0 left-0 w-full lg:w-[40%] bg-[#FAF9F6] z-10 hidden lg:block"
        >
           {/* Subtle Jaali watermark (2% opacity) */}
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M40 0L80 40L40 80L0 40Z\\' fill=\\'none\\' stroke=\\'%235C121E\\' stroke-width=\\'1.5\\'/%3E%3Cpath d=\\'M40 10L70 40L40 70L10 40Z\\' fill=\\'none\\' stroke=\\'%235C121E\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')" }}></div>
        </motion.div>

        {/* The Divider (1px Gold Line) */}
        <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-[#D4AF37]/50 z-20 hidden lg:block"></div>

        {/* Right Side: Deep Burgundy Image Background Block */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
           className="absolute top-[50vh] lg:top-0 bottom-0 right-0 w-full lg:w-[60%] bg-[#5C121E] z-10"
        >
           <div className="absolute inset-0 bg-zari opacity-10 pointer-events-none mix-blend-overlay"></div>
        </motion.div>
        
        <div className="w-full h-full flex flex-col lg:flex-row relative z-20 mx-auto max-w-[2000px] overflow-hidden min-h-screen">
          
          {/* Left Side: Text Section (40%) */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center px-6 sm:px-12 md:px-16 xl:px-24 py-16 lg:py-20 relative z-20 h-[50vh] lg:h-full mt-10 md:mt-20 lg:mt-0">
            {/* Mobile background fix (applies Ivory Background specifically for mobile layout to ensure visibility) */}
            <div className="absolute inset-0 bg-[#FAF9F6] lg:hidden -z-10">
               <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M40 0L80 40L40 80L0 40Z\\' fill=\\'none\\' stroke=\\'%235C121E\\' stroke-width=\\'1.5\\'/%3E%3Cpath d=\\'M40 10L70 40L40 70L10 40Z\\' fill=\\'none\\' stroke=\\'%235C121E\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')" }}></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative z-10"
            >
              <p className="font-subheading text-[#5C121E] tracking-[4px] uppercase text-[10px] md:text-xs mb-6 font-bold flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#5C121E]/50 block"></span>
                THE ROYAL EDIT — SS/26
              </p>
              
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl xl:text-[6rem] text-[#5C121E] mb-6 lg:mb-8 leading-[1.05] drop-shadow-sm whitespace-nowrap zardozi-shimmer">
                The Royal <br className="hidden md:block"/>Trousseau
              </h1>
              
              <p className="font-body text-[#5C121E]/80 text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12 italic leading-relaxed max-w-lg font-light">
                A legacy of hand-woven blessings, crafted for the modern monarch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
                <Link to="/collections" className="group relative overflow-hidden bg-[#5C121E] text-[#D4AF37] px-8 py-4 flex items-center justify-center sm:justify-start gap-3 transition-all duration-300 shadow-md">
                  <span className="font-subheading tracking-widest text-sm font-bold uppercase relative z-10 block text-center flex-1 sm:flex-none">Explore the Collections</span>
                </Link>
                
                <Link to="/about" className="group px-8 py-4 border border-[#5C121E] text-[#5C121E] transition-all duration-300 hover:bg-[#5C121E] hover:text-[#FAF9F6] flex items-center justify-center">
                  <span className="font-subheading tracking-widest text-sm uppercase font-bold">Know More</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Section (60%) */}
          <div className="w-full lg:w-[60%] relative min-h-[600px] flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-[#5C121E] lg:bg-transparent">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] min-h-[600px] aspect-[4/5] shape-arch group z-10 bg-[#5C121E]"
             >
                {/* 3px Gold Zari border */}
                <div className="absolute inset-0 z-20 pointer-events-none" style={{ padding: '0px' }}>
                  <svg className="w-full h-full shape-arch" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 0 L70 5 L85 15 L95 30 L100 50 L100 100 L0 100 L0 50 L5 30 L15 15 L30 5 Z" 
                          fill="none" stroke="#D4AF37" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  </svg>
                  {/* Zari Needle motif at the peak */}
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 text-gold z-30 drop-shadow-md">
                     <svg width="24" height="24" viewBox="0 0 24 40" fill="none" className="w-5 h-8 text-[#D4AF37]">
                        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="12" y1="7.5" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 12 0 C 18 -15, 30 0, 15 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                  </div>
                </div>

                {/* The Arched Image container */}
                <div className="w-full h-full shape-arch overflow-hidden relative">
                  <img 
                    src="https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20model%20traditional%20suit%20burgundy%20gold%20studio%20lighting?width=1000&height=1400&nologo=true&seed=22" 
                    alt="The Royal Trousseau" 
                    className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
                    referrerPolicy="no-referrer"
                    style={{ transformOrigin: 'center center' }}
                  />
                  {/* Subtle inner shadow for depth inside the arch */}
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none mix-blend-multiply"></div>
                </div>
             </motion.div>
          </div>

        </div>

        {/* Custom Keyframes for Ken Burns Effect */}
        <style dangerouslySetInnerHTML={{__html: \`
          @keyframes kenburns {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.05); }
          }
        \`}} />
      </section>
`;

content = content.slice(0, startIndex) + newHero + '\n\n      ' + content.slice(endIndex);

fs.writeFileSync(file, content);
