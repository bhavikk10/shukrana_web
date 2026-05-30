const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const snippet1 = `const occasionGalleryData = [
  { title: "Mehendi Hues", image: "https://image.pollinations.ai/prompt/indian%20traditional%20clothes%20outfit%20model?width=600&height=800&nologo=true&seed=33" },
  { title: "Reception Grandeur", image: "https://image.pollinations.ai/prompt/indian%20traditional%20clothes%20outfit%20model?width=600&height=800&nologo=true&seed=34" },
  { title: "Day-Wear Delicacies", image: "https://image.pollinations.ai/prompt/indian%20traditional%20clothes%20outfit%20model?width=600&height=800&nologo=true&seed=35" },
  { title: "Haldi Yellows", image: "https://image.pollinations.ai/prompt/indian%20traditional%20clothes%20outfit%20model?width=600&height=800&nologo=true&seed=36" },
  { title: "Sangeet Sparkle", image: "https://image.pollinations.ai/prompt/indian%20traditional%20clothes%20outfit%20model?width=600&height=800&nologo=true&seed=37" }
];

const OccasionGalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % occasionGalleryData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] flex items-center justify-center w-full overflow-hidden">
      {occasionGalleryData.map((collection, idx) => {
        let diff = idx - currentIndex;
        if (diff < -2) diff += occasionGalleryData.length;
        if (diff > 2) diff -= occasionGalleryData.length;

        let xOffset = "0vw";
        let scale = 1.1;
        let opacity = 1;
        let zIndex = 30;

        if (diff === -1) {
          xOffset = "-30vw";
          scale = 0.9;
          opacity = 0.7;
          zIndex = 20;
        } else if (diff === 1) {
          xOffset = "30vw";
          scale = 0.9;
          opacity = 0.7;
          zIndex = 20;
        } else if (diff === -2) {
          xOffset = "-55vw";
          scale = 0.75;
          opacity = 0.4;
          zIndex = 10;
        } else if (diff === 2) {
          xOffset = "55vw";
          scale = 0.75;
          opacity = 0.4;
          zIndex = 10;
        }

        return (
          <motion.div
            key={idx}
            animate={{ opacity, scale, x: xOffset, zIndex }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: "transform, opacity, z-index" }}
            className="absolute w-[70%] sm:w-[45%] md:w-[35%] lg:w-[25%] max-w-sm cursor-pointer group"
            onClick={() => setCurrentIndex(idx)}
          >
            <div className="shape-arch relative transition-all duration-500 after:absolute after:inset-0 after:shape-arch after:shadow-[inset_0_0_40px_rgba(212,175,55,0.4)] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none after:z-20">
              <div className="shape-arch overflow-hidden relative aspect-[4/5] bg-emerald/5">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/90 via-emerald/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-12 left-0 w-full text-center px-4 transition-transform duration-500 group-hover:-translate-y-4">
                  <h3 className="font-heading text-2xl md:text-3xl text-ivory drop-shadow-md">{collection.title}</h3>
                </div>
                
                <div className="absolute bottom-6 left-0 w-full text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="font-heading italic text-gold text-sm tracking-widest uppercase relative after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[1px] after:bg-gold">Discover the Edit</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-emerald z-30 bg-parchment border border-gold/50 rounded-full p-1 shadow-md">
               <SubtleIcon className="w-4 h-4" />
            </div>
          </motion.div>
        )
      })}
    </div>
  );
};
`;

const snippet2 = `      {/* The Occasion Gallery */}
      <section className="py-12 w-full relative bg-burgundy border-b-2 border-gold/30">
        <div className="absolute inset-0 bg-damask opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
        <ParallaxJaali />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center"
          >
            <p className="font-subheading text-gold tracking-widest uppercase text-sm mb-4">Curated by Occasion</p>
            <div className="flex items-center justify-center gap-4">
              <SubtleIcon className="text-gold" />
              <h2 className="font-heading text-4xl md:text-5xl text-gold zardozi-shimmer drop-shadow-md">The Occasion Gallery</h2>
              <SubtleIcon className="text-gold" />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full">
          <OccasionGalleryCarousel />
        </div>
      </section>

`;

content = content.replace(snippet1, "");
content = content.replace(snippet2, "");
fs.writeFileSync('src/pages/Home.tsx', content);
console.log("Removed sections!");
