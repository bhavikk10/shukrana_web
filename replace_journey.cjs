const fs = require('fs');

const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Define ZariNeedle component
const zariNeedleStr = `const ZariNeedle = () => (
  <div className="w-16 h-16 flex items-center justify-center relative z-10 group">
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold/60 rounded-full blur-md mix-blend-screen"
    />
    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-gold/70 bg-emerald shadow-[0_0_10px_rgba(212,175,55,0.5)] z-20"></div>
    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-gold -rotate-[20deg] transform origin-bottom drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-30 absolute top-[10%] left-[45%]">
      <ellipse cx="12" cy="4" rx="1.5" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="7.5" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M 12 0 C 18 -15, 30 0, 15 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" className="zardozi-shimmer" />
    </svg>
  </div>
);
`;

if (!content.includes('const ZariNeedle = () =>')) {
    const importMatch = content.match(/import.*?;\n/g);
    const lastImportIndex = content.lastIndexOf(importMatch[importMatch.length-1]) + importMatch[importMatch.length-1].length;
    content = content.slice(0, lastImportIndex) + '\n' + zariNeedleStr + '\n' + content.slice(lastImportIndex);
}

const startMarker = '{/* The Shukrana Journey */}';
const endMarker = '{/* Royal Testimonials */}';
const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find section markers");
    process.exit(1);
}

const newSection = `{/* The Shukrana Journey */}
      <section className="py-20 bg-emerald bg-damask-large relative overflow-hidden">
        <div className="absolute inset-0 bg-damask opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-zari opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"><ParallaxJaali /></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <SubtleIcon className="text-gold w-5 h-5" />
              <h2 className="font-heading text-4xl md:text-5xl text-gold zardozi-shimmer drop-shadow-md">The Shukrana Journey</h2>
              <SubtleIcon className="text-gold w-5 h-5" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] bg-gold/40 w-12"></div>
              <p className="font-subheading text-ivory tracking-widest uppercase text-xs">An Imperial Manuscript</p>
              <div className="h-[1px] bg-gold/40 w-12"></div>
            </div>
          </motion.div>

          <div className="relative w-full max-w-5xl mx-auto py-10 mt-4 md:mt-10">
            {/* The Winding Gold Zari Thread */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-48 h-[100%] overflow-visible z-0 hidden md:block">
              <svg className="w-full h-[105%] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 1000">
                <path 
                  d="M 50 0 C 80 150, 20 300, 50 450 C 90 650, 10 800, 50 1000"
                  fill="none" 
                  stroke="url(#zari-thread-grad)" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="zardozi-shimmer drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]"
                />
                <defs>
                  <linearGradient id="zari-thread-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                    <stop offset="10%" stopColor="#D4AF37" stopOpacity="1" />
                    <stop offset="90%" stopColor="#D4AF37" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Step 1: Delhi Sourcing */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full mb-24 md:mb-32"
            >
              {/* Image on Left - Pointed Ogee Arch */}
              <div className="w-full md:w-5/12 flex justify-end md:pr-10 mb-8 md:mb-0">
                <div className="relative w-full max-w-sm aspect-[4/5] shape-arch bg-parchment shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-1 overflow-hidden group">
                  <img src="https://image.pollinations.ai/prompt/chandni%20chowk%20fabric%20bazaar%20india%20silk?width=800&height=1000&nologo=true&seed=41" alt="Delhi Sourcing" className="w-full h-full object-cover shape-arch transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 shape-arch shadow-[inset_0_0_40px_rgba(212,175,55,0.4)] pointer-events-none"></div>
                </div>
              </div>
              
              {/* Node */}
              <div className="w-full md:w-2/12 flex justify-center relative z-10 hidden md:flex">
                <ZariNeedle />
              </div>

              {/* Text on Right */}
              <div className="w-full md:w-5/12 text-left md:pl-10">
                <div className="bg-ivory/5 backdrop-blur-sm p-8 border border-gold/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-sm relative z-10">
                  <p className="font-subheading tracking-widest text-gold text-sm uppercase mb-2">Our Roots</p>
                  <h3 className="font-heading text-3xl md:text-5xl text-ivory mb-6 drop-shadow-sm">The Heart of Old Delhi</h3>
                  <p className="font-body text-parchment/90 italic text-base md:text-[17px] leading-relaxed">
                    <span className="float-left text-5xl font-heading text-gold leading-[0.8] mr-2 mt-1 drop-shadow-md">B</span>
                    orn in the narrow, vibrant lanes of Chandni Chowk, Shukrana is a tribute to generations of master weavers. We journey across India to source the purest Banarasi silks, gossamer Chanderis, and rich velvets, preserving the sanctity of authentic Indian handlooms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Quality Curation - Overlapped in Center */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full mb-24 md:mb-32"
            >
              {/* Text Overlapped Left/Center */}
              <div className="w-full md:w-5/12 md:text-right md:-mr-12 z-20 order-2 md:order-1 mt-8 md:mt-0">
                <div className="bg-ivory/5 backdrop-blur-sm p-8 border border-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)] rounded-sm relative">
                  <p className="font-subheading tracking-widest text-gold text-sm uppercase mb-2">The Craft</p>
                  <h3 className="font-heading text-3xl md:text-5xl text-ivory mb-6 drop-shadow-sm">Meticulous Zardozi</h3>
                  <p className="font-body text-parchment/90 italic text-base md:text-[17px] leading-relaxed">
                    <span className="float-left text-5xl font-heading text-gold leading-[0.8] mr-2 mt-1 drop-shadow-md md:float-right md:ml-3 md:mr-0">E</span>
                    very silhouette is a canvas for our artisans. From intricate dabka work to delicate aari embroidery, each stitch is done by hand, passing through the skilled fingers of karigars whose ancestors dressed the Mughal courts.
                  </p>
                </div>
              </div>

              {/* Central Node Over Thread */}
              <div className="w-2/12 flex justify-center relative z-30 hidden md:flex order-2 pointer-events-none mt-10">
                <ZariNeedle />
              </div>

              {/* Image Overlapped Right/Center - Lobed Arch */}
              <div className="w-full md:w-5/12 md:-ml-12 z-10 order-1 md:order-3">
                <div className="relative w-full max-w-sm mx-auto aspect-[4/5] bg-parchment shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-1 overflow-hidden group" style={{ borderRadius: "50% 50% 0 0 / 20% 20% 0 0" }}>
                  <img src="https://image.pollinations.ai/prompt/indian%20artisan%20embroidery%20zardozi%20close%20up?width=800&height=1000&nologo=true&seed=42" alt="Meticulous Zardozi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" style={{ borderRadius: "50% 50% 0 0 / 20% 20% 0 0" }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ borderRadius: "50% 50% 0 0 / 20% 20% 0 0", boxShadow: "inset 0 0 40px rgba(212,175,55,0.4)" }}></div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Full-width faded background - Royal Decree Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-20 overflow-hidden border border-gold/20"
            >
              <div className="absolute inset-0 w-full h-full">
                <img src="https://image.pollinations.ai/prompt/vintage%20indian%20map%20ship%20ocean%20fading?width=1200&height=600&nologo=true&seed=44" alt="Global Transition Map" className="w-full h-full object-cover opacity-20 sepia-[.5] hue-rotate-[10deg] mix-blend-luminosity" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-emerald/80 bg-damask mix-blend-multiply pointer-events-none"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center w-full">
                <div className="mb-8 hidden md:block">
                  <ZariNeedle />
                </div>
                <div className="bg-ivory/10 backdrop-blur-md p-10 md:p-12 border-2 border-gold/40 shadow-[0_10px_40px_rgba(0,0,0,0.4)] max-w-2xl text-center relative border-double w-full">
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gold"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gold"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold"></div>

                  <p className="font-subheading tracking-widest text-gold text-sm uppercase mb-4">The Global Transition</p>
                  <h3 className="font-heading text-4xl md:text-5xl text-ivory mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] zardozi-shimmer">Bridging Traditions</h3>
                  <p className="font-body text-parchment/90 italic text-base md:text-lg leading-relaxed">
                    <span className="float-left text-5xl font-heading text-gold leading-[0.8] mr-2 mt-1 drop-shadow-md">F</span>
                    rom the looms of Benares to the boutiques of California, we ensure that the soul of Indian couture remains intact. We bring bespoke fittings, timeless elegance, and majestic bridal trousseaus directly to the South Asian diaspora in America.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      `;

content = content.slice(0, startIndex) + newSection + content.slice(endIndex);

fs.writeFileSync(file, content);
console.log("Successfully replaced journey section!");
