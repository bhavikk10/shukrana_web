const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const heroStart = '{/* Fabric Unfurling Wrapper */}';
const heroEnd = '{/* Featured Collections */}';

const startIndex = content.indexOf(heroStart);
const endIndex = content.indexOf(heroEnd);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find section markers");
    process.exit(1);
}

const newHero = `{/* Hero Section */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        >
          <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#065f4b_0%,_#044738_40%,_#011a14_100%)]">
            <div className="absolute inset-0 bg-zari opacity-10 pointer-events-none mix-blend-overlay"></div>
            <CanvasGoldDust />
            
            <div className="w-full h-full flex flex-col lg:flex-row relative z-10 mx-auto max-w-[1600px] overflow-hidden">
              
              {/* Left Side: Text Section (40%) */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 md:px-16 xl:px-24 py-16 lg:py-20 relative z-20 h-full mt-16 md:mt-20 lg:mt-0">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none overflow-hidden">
                   <ParallaxJaali />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="relative z-10"
                >
                  <p className="font-subheading text-gold tracking-[4px] uppercase text-[10px] md:text-xs mb-6 font-bold zardozi-shimmer flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-gold/50 block"></span>
                    THE ROYAL EDIT — SS/26
                  </p>
                  
                  <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] text-ivory mb-6 lg:mb-8 leading-[1.05] drop-shadow-lg zardozi-shimmer whitespace-nowrap">
                    The Royal <br className="hidden md:block"/>Trousseau
                  </h1>
                  
                  <p className="font-body text-parchment/90 text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12 italic leading-relaxed max-w-lg font-light drop-shadow-md">
                    A legacy of hand-woven blessings, crafted for the modern monarch.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
                    <Link to="/collections" className="group relative overflow-hidden bg-[#D4AF37] text-emerald px-8 py-4 flex items-center justify-center sm:justify-start gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                      <span className="font-subheading tracking-widest text-sm font-bold uppercase relative z-10 block text-center flex-1 sm:flex-none">Explore the Collection</span>
                      <svg width="24" height="24" viewBox="0 0 24 40" fill="none" className="w-4 h-6 text-emerald opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 -rotate-12 relative z-10 hidden sm:block">
                        <ellipse cx="12" cy="4" rx="1.5" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="12" y1="7.5" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 12 0 C 18 -15, 30 0, 15 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </Link>
                    
                    <Link to="/about" className="group px-8 py-4 border border-gold/40 text-gold transition-all duration-300 hover:border-gold hover:border-2 hover:bg-gold/5 flex items-center justify-center">
                      <span className="font-subheading tracking-widest text-sm uppercase">Know More</span>
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Image Section (60%) with Overlap */}
              <div className="w-full lg:w-[60%] absolute right-0 top-0 bottom-0 lg:left-[40%] z-10 hidden lg:block">
                <motion.div 
                  initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                  animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                  transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
                  className="w-full h-full p-8 lg:p-12 pl-0 py-16"
                >
                  <div className="w-full h-full relative group perspective-1000 -ml-12 mt-8">
                     <div className="absolute inset-0 bg-gold/10 -translate-x-6 translate-y-6 shape-arch mix-blend-overlay"></div>
                     <div className="w-full h-full shape-arch bg-burgundy overflow-hidden border border-gold/40 shadow-[rgba(0,0,0,0.5)_0px_20px_50px,-15px_0px_30px_rgba(212,175,55,0.25)]">
                        <img 
                          src="https://image.pollinations.ai/prompt/elegant%20indian%20saree%20silk%20royal%20model%20heavy%20zardozi%20dark%20emerald%20background?width=1200&height=1400&nologo=true&seed=8" 
                          alt="The Royal Trousseau" 
                          className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
                          referrerPolicy="no-referrer"
                          style={{ transformOrigin: 'center center' }}
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gold/5 pointer-events-none mix-blend-screen"></div>
                     </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Image (Visible only on small screens) */}
              <div className="w-full h-[60vh] relative z-10 block lg:hidden px-6 pb-12 mt-4">
                 <div className="w-full h-full shape-arch bg-burgundy overflow-hidden border border-gold/40 shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative">
                     <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 pointer-events-none"></div>
                    <img 
                       src="https://image.pollinations.ai/prompt/elegant%20indian%20saree%20silk%20royal%20model%20heavy%20zardozi%20dark%20emerald%20background?width=800&height=1000&nologo=true&seed=8" 
                       alt="The Royal Trousseau" 
                       className="w-full h-full object-cover animate-[kenburns_20s_ease-in-out_infinite_alternate]"
                       referrerPolicy="no-referrer"
                       style={{ transformOrigin: 'center center' }}
                    />
                 </div>
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
        </motion.div>
      </AnimatePresence>
`;

content = content.slice(0, startIndex) + newHero + '\n\n      ' + content.slice(endIndex);

content = content.replace('const [currentSlide, setCurrentSlide] = useState(0);', '');
content = content.replace(/useEffect\(\(\) => \{\n\s*const timer = setInterval\(.*?clearInterval\(timer\);\n\s*\}, \[\]\);/s, '');

fs.writeFileSync(file, content);
