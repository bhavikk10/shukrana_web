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
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-charcoal">
        <motion.div
           initial={{ x: '-100%' }}
           animate={{ x: 0 }}
           transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
           className="absolute top-0 bottom-0 left-0 w-full lg:w-[45%] bg-[#FAF9F6] z-10"
        >
           <div className="absolute inset-0 bg-damask opacity-5 pointer-events-none mix-blend-overlay"></div>
           {/* Subtle Jaali watermark */}
           <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M40 0L80 40L40 80L0 40Z\\' fill=\\'none\\' stroke=\\'%235C121E\\' stroke-width=\\'1.5\\'/%3E%3Cpath d=\\'M40 10L70 40L40 70L10 40Z\\' fill=\\'none\\' stroke=\\'%235C121E\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')" }}></div>
        </motion.div>

        <motion.div
           initial={{ x: '100%' }}
           animate={{ x: 0 }}
           transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
           className="absolute top-[60vh] lg:top-0 bottom-0 right-0 w-full lg:w-[55%] bg-[#5C121E] border-t lg:border-t-0 lg:border-l border-gold/40 z-10"
        >
           <div className="absolute inset-0 bg-zari opacity-10 pointer-events-none mix-blend-overlay"></div>
           <div className="absolute inset-0 opacity-50"><CanvasGoldDust /></div>
        </motion.div>
        
        <div className="w-full h-full flex flex-col lg:flex-row relative z-20 mx-auto max-w-[2000px] overflow-hidden min-h-screen">
          
          {/* Left Side: Text Section (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 md:px-16 xl:px-24 py-16 lg:py-20 relative z-20 h-[60vh] lg:h-full mt-16 md:mt-20 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              className="relative z-10"
            >
              <p className="font-subheading text-[#5C121E] tracking-[4px] uppercase text-[10px] md:text-xs mb-6 font-bold flex items-center gap-4">
                <span className="w-8 h-[1px] bg-[#5C121E]/50 block"></span>
                THE ROYAL EDIT — SS/26
              </p>
              
              {/* Added responsive sizing so text doesn't flow out on mobile/tablet */}
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl xl:text-[6.5rem] text-[#5C121E] mb-6 lg:mb-8 leading-[1.05] drop-shadow-sm whitespace-nowrap">
                The Royal <br className="hidden md:block"/>Trousseau
              </h1>
              
              <p className="font-body text-[#5C121E]/80 text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12 italic leading-relaxed max-w-lg font-light">
                A legacy of hand-woven blessings, crafted for the modern monarch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
                <Link to="/collections" className="group relative overflow-hidden bg-[#5C121E] text-gold px-8 py-4 flex items-center justify-center sm:justify-start gap-3 transition-all duration-500 shadow-md hover:bg-[#D4AF37] hover:text-[#5C121E]">
                  <span className="font-subheading tracking-widest text-sm font-bold uppercase relative z-10 block text-center flex-1 sm:flex-none transition-colors duration-500">Explore the Collections</span>
                </Link>
                
                <Link to="/about" className="group px-8 py-4 border border-[#5C121E] text-[#5C121E] transition-all duration-300 hover:bg-[#5C121E] hover:text-[#FAF9F6] flex items-center justify-center">
                  <span className="font-subheading tracking-widest text-sm uppercase font-bold">Know More</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Section (55%) */}
          <div className="w-full lg:w-[55%] relative h-[40vh] lg:h-auto lg:min-h-screen flex items-center justify-center p-4 lg:p-16">
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="relative w-full max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-md xl:max-w-lg aspect-[3/4.5] shape-arch p-1 group z-10"
             >
                {/* Outline animation */}
                <div className="absolute inset-0 z-20 pointer-events-none" style={{ padding: '0px' }}>
                  <svg className="w-full h-full shape-arch" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M50 0 L70 5 L85 15 L95 30 L100 50 L100 100 L0 100 L0 50 L5 30 L15 15 L30 5 Z" 
                          fill="none" stroke="#D4AF37" strokeWidth="2.5" vectorEffect="non-scaling-stroke"
                          strokeDasharray="400" strokeDashoffset="400"
                          style={{ animation: 'drawOutline 3s ease-out forwards 1.2s' }} />
                  </svg>
                </div>

                <div className="w-full h-full shape-arch overflow-hidden bg-[#FAF9F6] relative">
                  <img 
                    src="https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20model%20traditional%20suit%20burgundy%20gold%20studio%20lighting?width=800&height=1200&nologo=true&seed=15" 
                    alt="The Royal Trousseau" 
                    className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
                    referrerPolicy="no-referrer"
                    style={{ transformOrigin: 'center center' }}
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none mix-blend-multiply"></div>
                </div>
             </motion.div>
          </div>

        </div>

        {/* Custom Keyframes for Ken Burns Effect and draw outline */}
        <style dangerouslySetInnerHTML={{__html: \`
          @keyframes kenburns {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.05); }
          }
          @keyframes drawOutline {
            to { stroke-dashoffset: 0; }
          }
        \`}} />
      </section>
`;

content = content.slice(0, startIndex) + newHero + '\n\n      ' + content.slice(endIndex);

fs.writeFileSync(file, content);
