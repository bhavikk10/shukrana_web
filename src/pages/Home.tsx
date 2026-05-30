import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { SmoothCarousel } from '../components/SmoothCarousel';
import Divider from '../components/Divider';
import { SubtleIcon } from '../components/SubtleIcon';
import CanvasGoldDust from '../components/GoldDust';
import RoyalButton from '../components/RoyalButton';
import ParallaxJaali from '../components/ParallaxJaali';
import { GoldNeedleTrail } from '../components/GoldNeedleTrail';
import { FashionEditorialJourney } from '../components/FashionEditorialJourney';

const ZariNeedle = () => (
  <div className="w-16 h-16 flex items-center justify-center relative z-10 group">
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
      viewport={{ once: false, margin: "-20%" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold/60 rounded-full blur-md mix-blend-screen"
    />
    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-gold/70 bg-burgundy shadow-[0_0_10px_rgba(212,175,55,0.5)] z-20"></div>
    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-gold -rotate-[20deg] transform origin-bottom drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] z-30 absolute top-[10%] left-[45%]">
      <ellipse cx="12" cy="4" rx="1.5" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="7.5" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M 12 0 C 18 -15, 30 0, 15 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" className="zardozi-shimmer" />
    </svg>
  </div>
);


const InteractiveHotspot = ({ x, y, title, desc }: { x: string, y: string, title: string, desc: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute z-40" style={{ left: x, top: y }}>
      <button 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="w-8 h-8 -ml-4 -mt-4 bg-gold/90 border border-ivory rounded-full shadow-[0_0_15px_rgba(212,175,55,1)] flex items-center justify-center animate-pulse group relative"
      >
        <SubtleIcon className="w-3 h-3 text-emerald scale-[0.6]" />
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute left-[120%] top-1/2 -translate-y-1/2 w-64 bg-charcoal/95 border border-gold p-4 shadow-2xl backdrop-blur-md pointer-events-none"
            >
              <h4 className="font-subheading text-gold text-xs tracking-widest uppercase mb-1">{title}</h4>
              <p className="font-body text-ivory/90 text-sm italic">{desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

const heroSlides = [
  {
    title: "Elegance \n Woven in \n Tradition",
    desc: "Discover our latest collection of handcrafted masterpieces, where every thread tells a story of Delhi's royal heritage.",
    image: "https://image.pollinations.ai/prompt/luxurious%20indian%20womens%20anarkali%20suit%20gold%20embroidery%20palace%20background?width=800&height=1000&nologo=true&seed=1",
  },
  {
    title: "The \n Luxury \n Suits",
    desc: "Curated selections for the modern silhouette. Heavy zardozi, pure silks, and timeless traditional wear.",
    image: "https://image.pollinations.ai/prompt/elegant%20indian%20womens%20straight%20cut%20silk%20salwar%20suit%20royal?width=800&height=1000&nologo=true&seed=2",
  },
  {
    title: "Festive \n Grandeur \n Awaits",
    desc: "Step into the season with our vibrant new arrivals, designed to make you the center of every celebration.",
    image: "https://image.pollinations.ai/prompt/traditional%20indian%20womens%20palazzo%20suit%20elegant%20festive?width=800&height=1000&nologo=true&seed=3",
  }
];

const testimonialsData = [
  { quote: "The craftsmanship is unparalleled. I felt like absolute royalty wearing the Gulnaar set at my sister's wedding.", author: "Priya M.", location: "Los Angeles, CA" },
  { quote: "Finally, a brand that brings the authentic grandeur of Delhi to the US. The fabric quality is breathtaking.", author: "Anjali S.", location: "New York, NY" },
  { quote: "The attention to detail, from the zardozi work to the packaging, is truly luxurious. A wonderful experience.", author: "Neha K.", location: "San Francisco, CA" },
  { quote: "Every piece tells a story. The intricate embroidery on my Anarkali suit was the talk of the evening.", author: "Simran K.", location: "Chicago, IL" },
  { quote: "I was amazed by the personalized service and the flawless fit. It's like having a piece of India's royal history.", author: "Riya D.", location: "Houston, TX" }
];

const curatedEditsData = [
  { title: 'Festival Edit', image: 'https://image.pollinations.ai/prompt/festival%20indian%20womens%20kurta%20set%20traditional?width=600&height=800&nologo=true&seed=4' },
  { title: 'Elegant Gatherings', image: 'https://image.pollinations.ai/prompt/indian%20womens%20sharara%20suit%20elegant%20party%20wear?width=600&height=800&nologo=true&seed=5' },
  { title: 'Everyday Elegance', image: 'https://image.pollinations.ai/prompt/everyday%20elegance%20indian%20womens%20cotton%20salwar%20kameez?width=600&height=800&nologo=true&seed=6' },
  { title: 'The Festive Collection', image: 'https://image.pollinations.ai/prompt/festive%20indian%20womens%20chanderi%20silk%20suit?width=600&height=800&nologo=true&seed=7' },
  { title: 'Evening Soirée', image: 'https://image.pollinations.ai/prompt/evening%20indian%20womens%20anarkali%20suit%20elegant%20party?width=600&height=800&nologo=true&seed=8' },
  { title: 'Royal Heritage', image: 'https://image.pollinations.ai/prompt/royal%20heritage%20indian%20womens%20silk%20lehenga?width=600&height=800&nologo=true&seed=9' },
  { title: 'Summer Florals', image: 'https://image.pollinations.ai/prompt/summer%20florals%20indian%20womens%20organza%20saree?width=600&height=800&nologo=true&seed=10' },
  { title: 'The Luxury Suits Collection', image: 'https://image.pollinations.ai/prompt/bridal%20trousseau%20indian%20womens%20red%20zardozi%20lehenga?width=600&height=800&nologo=true&seed=11' },
  { title: 'Mehndi Greens', image: 'https://image.pollinations.ai/prompt/mehndi%20green%20indian%20womens%20anarkali%20suit?width=600&height=800&nologo=true&seed=12' },
  { title: 'Sangeet Nights', image: 'https://image.pollinations.ai/prompt/sangeet%20night%20indian%20womens%20sequence%20lehenga?width=600&height=800&nologo=true&seed=13' },
  { title: 'Minimalist Chic', image: 'https://image.pollinations.ai/prompt/minimalist%20chic%20indian%20womens%20pastel%20kurta%20set?width=600&height=800&nologo=true&seed=14' }
];

const signatureSilhouettesData = [
  {
    id: "mughal-anarkali",
    title: "The Mughal Anarkali",
    desc: "A voluminous 24-kali masterpiece.",
    price: "₹35,000",
    status: "Custom",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20elegant%20chanderi%20silk%20suit%20model?width=600&height=800&nologo=true&seed=9"
  },
  {
    id: "classic-sharara",
    title: "The Classic Sharara",
    desc: "Heavily embellished for grandeur.",
    price: "₹45,000",
    status: "Pre-Book",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20handwoven%20banarasi%20sharara%20suit%20model?width=600&height=800&nologo=true&seed=10"
  },
  {
    id: "straight-kurta",
    title: "The Straight Kurta Set",
    desc: "Minimalist purity with dense zardozi.",
    price: "₹28,000",
    status: "In Stock",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20georgette%20anarkali%20suit%20model?width=600&height=800&nologo=true&seed=11"
  },
  {
    id: "peshwaz-gown",
    title: "The Peshwaz Gown",
    desc: "Regal floor-length draped elegance.",
    price: "₹55,000",
    status: "Custom",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20cotton%20silk%20kurta%20set%20model?width=600&height=800&nologo=true&seed=12"
  },
  {
    id: "angrakha-suit",
    title: "The Angrakha Suit",
    desc: "Cross-over bodice with rich tassels.",
    price: "₹42,000",
    status: "In Stock",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20organza%20tissue%20suit%20model?width=600&height=800&nologo=true&seed=13"
  },
  {
    id: "palazzo-set",
    title: "The Flared Palazzo",
    desc: "Contemporary ease meets tradition.",
    price: "₹25,000",
    status: "Custom",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20chiffon%20silk%20sharara%20model?width=600&height=800&nologo=true&seed=14"
  },
  {
    id: "kalidar-suit",
    title: "The Kalidar Suit",
    desc: "Intricate weaves for timeless tailored suits.",
    price: "₹85,000",
    status: "Pre-Book",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20net%20overlay%20anarkali%20suit%20model?width=600&height=800&nologo=true&seed=15"
  },
  {
    id: "jacket-suit",
    title: "The Layered Jacket",
    desc: "Structured silhouette over silk.",
    price: "₹32,000",
    status: "In Stock",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20raw%20silk%20kurta%20set%20model?width=600&height=800&nologo=true&seed=16"
  },
  {
    id: "gharara-set",
    title: "The Vintage Gharara",
    desc: "Ruched dramatic flares.",
    price: "₹48,000",
    status: "Custom",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20silk%20satin%20kurta%20set%20model?width=600&height=800&nologo=true&seed=17"
  },
  {
    id: "cape-gown",
    title: "The Cape Gown",
    desc: "Sheer net cape with pearl drops.",
    price: "₹58,000",
    status: "Pre-Book",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20banarasi%20satin%20anarkali%20model?width=600&height=800&nologo=true&seed=18"
  },
  {
    id: "dhoti-drape",
    title: "The Dhoti Drape",
    desc: "Chic pleated perfection.",
    price: "₹26,000",
    status: "In Stock",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20georgette%20suit%20set%20model?width=600&height=800&nologo=true&seed=19"
  },
  {
    id: "gharara-set",
    title: "The Gharara Set",
    desc: "Pre-stitched classic fusion.",
    price: "₹65,000",
    status: "Custom",
    image: "https://image.pollinations.ai/prompt/indian%20womens%20crepe%20silk%20cape%20suit%20model?width=600&height=800&nologo=true&seed=20"
  }
];

const newArrivalsData = [
  { id: "gulnaar", title: "Gulnaar Suit Set", desc: "Hand-stitched in Old Delhi", fabric: "Pure Chanderi Silk", price: "₹14,500", status: "In Stock", image: "https://image.pollinations.ai/prompt/indian%20womens%20chanderi%20silk%20suit%20model?width=600&height=800&nologo=true&seed=21" },
  { id: "zara", title: "Zara Sharara", desc: "Pure Zari Work", fabric: "Handwoven Banarasi", price: "₹45,000", status: "Pre-Book", image: "https://image.pollinations.ai/prompt/indian%20womens%20handwoven%20banarasi%20sharara%20model?width=600&height=800&nologo=true&seed=22" },
  { id: "mehfil", title: "Mehfil Anarkali", desc: "Intricate neckline", fabric: "Georgette with Zardozi", price: "₹28,000", status: "Custom", image: "https://image.pollinations.ai/prompt/indian%20womens%20georgette%20anarkali%20zardozi%20model?width=600&height=800&nologo=true&seed=23" },
  { id: "noor", title: "Noor Kurta", desc: "Limited Edition", fabric: "Cotton Silk", price: "₹8,500", status: "In Stock", image: "https://image.pollinations.ai/prompt/indian%20womens%20cotton%20silk%20kurta%20set%20model?width=600&height=800&nologo=true&seed=24" },
  { id: "roshan", title: "Roshan Dupatta", desc: "Delicate edges", fabric: "Organza Tissue", price: "₹12,000", status: "In Stock", image: "https://image.pollinations.ai/prompt/indian%20womens%20organza%20tissue%20suit%20model?width=600&height=800&nologo=true&seed=25" },
  { id: "aab", title: "Aab Sharara", desc: "Flowy grace", fabric: "Chiffon Silk", price: "₹18,500", status: "Custom", image: "https://image.pollinations.ai/prompt/indian%20womens%20chiffon%20silk%20sharara%20model?width=600&height=800&nologo=true&seed=26" },
  { id: "sitara", title: "Sitara Gown", desc: "Sequin sprinkled", fabric: "Net overlay", price: "₹38,000", status: "Pre-Book", image: "https://image.pollinations.ai/prompt/indian%20womens%20net%20overlay%20anarkali%20model?width=600&height=800&nologo=true&seed=27" },
  { id: "jashn", title: "Jashn Kurta", desc: "Festive hue", fabric: "Raw Silk", price: "₹22,000", status: "In Stock", image: "https://image.pollinations.ai/prompt/indian%20womens%20raw%20silk%20kurta%20set%20model?width=600&height=800&nologo=true&seed=28" },
  { id: "meena", title: "Meena Blouse", desc: "Hand-painted motifs", fabric: "Silk Satin", price: "₹9,500", status: "Custom", image: "https://image.pollinations.ai/prompt/indian%20womens%20silk%20satin%20kurta%20set%20model?width=600&height=800&nologo=true&seed=29" },
  { id: "nazm", title: "Nazm Anarkali", desc: "Poetic weaves", fabric: "Banarasi Satin", price: "₹42,000", status: "In Stock", image: "https://image.pollinations.ai/prompt/indian%20womens%20banarasi%20satin%20anarkali%20model?width=600&height=800&nologo=true&seed=30" },
  { id: "sahar", title: "Sahar Suit", desc: "Dawn shades", fabric: "Georgette", price: "₹16,500", status: "Pre-Book", image: "https://image.pollinations.ai/prompt/indian%20womens%20georgette%20suit%20set%20model?width=600&height=800&nologo=true&seed=31" },
  { id: "falak", title: "Falak Cape", desc: "Celestial drape", fabric: "Crepe Silk", price: "₹24,000", status: "In Stock", image: "https://image.pollinations.ai/prompt/indian%20womens%20crepe%20silk%20cape%20suit%20model?width=600&height=800&nologo=true&seed=32" }
];

const categoriesData = [
  { id: "silk", title: "Pure Silk", category: "Material", image: "https://image.pollinations.ai/prompt/pure%20silk%20indian%20fabric%20close%20up%20texture?width=400&height=500&nologo=true&seed=101" },
  { id: "cotton", title: "Handwoven Cotton", category: "Material", image: "https://image.pollinations.ai/prompt/indian%20cotton%20fabric%20texture%20close%20up?width=400&height=500&nologo=true&seed=102" },
  { id: "organza", title: "Organza Tissue", category: "Material", image: "https://image.pollinations.ai/prompt/organza%20tissue%20fabric%20texture%20shiny?width=400&height=500&nologo=true&seed=103" },
  { id: "georgette", title: "Flowy Georgette", category: "Material", image: "https://image.pollinations.ai/prompt/georgette%20indian%20fabric%20embroidery?width=400&height=500&nologo=true&seed=104" },
  { id: "pakistani", title: "Pakistani Suits", category: "Style", image: "https://image.pollinations.ai/prompt/indian%20womens%20pakistani%20suit%20model?width=400&height=500&nologo=true&seed=205" },
  { id: "coord-sets", title: "Co-ord Sets", category: "Style", image: "https://image.pollinations.ai/prompt/indian%20womens%20coord%20set%20fashion%20model?width=400&height=500&nologo=true&seed=201" },
  { id: "kaftan", title: "Kaftan", category: "Style", image: "https://image.pollinations.ai/prompt/indian%20womens%20kaftan%20fashion%20model?width=400&height=500&nologo=true&seed=202" },
  { id: "party-wear", title: "Party Wear", category: "Style", image: "https://image.pollinations.ai/prompt/indian%20womens%20party%20wear%20lehenga%20model?width=400&height=500&nologo=true&seed=203" },
  { id: "sharara", title: "Sharara Sets", category: "Style", image: "https://image.pollinations.ai/prompt/indian%20womens%20sharara%20suit%20model?width=400&height=500&nologo=true&seed=204" },
  { id: "lehenga", title: "Lehenga Choli", category: "Style", image: "https://image.pollinations.ai/prompt/indian%20womens%20lehenga%20choli%20model?width=400&height=500&nologo=true&seed=206" },
  { id: "chanderi", title: "Chanderi Silk", category: "Material", image: "https://image.pollinations.ai/prompt/chanderi%20silk%20indian%20fabric%20texture?width=400&height=500&nologo=true&seed=105" },
  { id: "velvet", title: "Regal Velvet", category: "Material", image: "https://image.pollinations.ai/prompt/royal%20velvet%20indian%20fabric%20texture?width=400&height=500&nologo=true&seed=106" },
  { id: "chikankari", title: "Chikankari", category: "Craft", image: "https://image.pollinations.ai/prompt/chikankari%20embroidery%20indian%20fabric%20texture?width=400&height=500&nologo=true&seed=107" },
  { id: "zardozi", title: "Zardozi Work", category: "Craft", image: "https://image.pollinations.ai/prompt/zardozi%20embroidery%20indian%20fabric%20texture%20gold?width=400&height=500&nologo=true&seed=108" },
  { id: "banarasi", title: "Banarasi", category: "Material", image: "https://image.pollinations.ai/prompt/banarasi%20silk%20saree%20texture%20gold%20motif?width=400&height=500&nologo=true&seed=109" }
];

const CuratedEditsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % curatedEditsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[350px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center w-full overflow-hidden" style={{ boxShadow: 'inset 0 10px 40px rgba(0,0,0,0.03), 0 20px 40px rgba(250,244,235,0.6)' }}>
      <div className="absolute inset-0 bg-parchment/30 pointer-events-none rounded-3xl mx-2 my-4 md:mx-4 md:my-8 shadow-[inset_0_0_50px_rgba(0,0,0,0.05)] border border-gold/10"></div>
      {curatedEditsData.map((collection, idx) => {
        // Calculate relative position (-2, -1, 0, 1, 2)
        let diff = idx - currentIndex;
        // Normalize diff to be between -length/2 and length/2
        if (diff > curatedEditsData.length / 2) diff -= curatedEditsData.length;
        if (diff < -curatedEditsData.length / 2) diff += curatedEditsData.length;

        let xOffset = "0vw";
        let scale = 1.1;
        let opacity = 1;
        let zIndex = 30;
        let gapOffset = isDesktop ? 15 : 0;
        let pointerEvents = "auto";
        let screenOffset = isDesktop ? 30 : 25; // Closer spread on mobile
        let outerScreenOffset = isDesktop ? 55 : 45;

        if (diff === -1) {
          xOffset = `calc(-${screenOffset}vw + ${gapOffset}px)`;
          scale = isDesktop ? 0.9 : 0.85;
          opacity = 0.7;
          zIndex = 20;
        } else if (diff === 1) {
          xOffset = `calc(${screenOffset}vw - ${gapOffset}px)`;
          scale = isDesktop ? 0.9 : 0.85;
          opacity = 0.7;
          zIndex = 20;
        } else if (diff === -2) {
          xOffset = `calc(-${outerScreenOffset}vw + ${gapOffset * 2}px)`;
          scale = isDesktop ? 0.75 : 0.65;
          opacity = 0.4;
          zIndex = 10;
        } else if (diff === 2) {
          xOffset = `calc(${outerScreenOffset}vw - ${gapOffset * 2}px)`;
          scale = isDesktop ? 0.75 : 0.65;
          opacity = 0.4;
          zIndex = 10;
        } else if (diff !== 0) {
          // Hide other items
          opacity = 0;
          scale = 0.5;
          zIndex = 0;
          pointerEvents = "none";
        }

        return (
          <motion.div
            key={idx}
            animate={{ opacity, scale, x: xOffset, zIndex, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: "transform, opacity", pointerEvents: pointerEvents as any }}
            className="absolute w-[60%] sm:w-[45%] md:w-[35%] lg:w-[25%] max-w-sm cursor-pointer group"
            onClick={() => setCurrentIndex(idx)}
          >
            <div className="shape-arch border border-gold p-[5px] bg-[#FDFBF7] bg-paisley shadow-2xl relative transition-all duration-500 after:absolute after:inset-0 after:shape-arch after:shadow-[inset_0_0_40px_rgba(212,175,55,0.4)] after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-500 after:pointer-events-none after:z-20">
              <div className="shape-arch overflow-hidden relative aspect-[3/4] bg-burgundy/5">
                <img 
                  src={collection.image} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                 loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Always visible title, moves up slightly on hover */}
                <div className="absolute bottom-10 left-0 w-full text-center px-4 transition-transform duration-500 ease-out group-hover:-translate-y-6">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-ivory drop-shadow-md">{collection.title}</h3>
                </div>
                
                {/* Discover label slides in on hover like New Arrivals */}
                <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                  <div className="bg-gold bg-silk text-emerald font-subheading tracking-widest py-3 text-center text-sm shadow-[0_-4px_15px_rgba(212,175,55,0.4)]">
                    Quick View
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-gold z-30 bg-ivory border border-gold/50 rounded-full p-1 shadow-md">
               <SubtleIcon className="w-4 h-4" />
            </div>
          </motion.div>
        )
      })}
    </div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isDesktop) {
    return (
      <div className="w-full flex justify-center items-center py-6">
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        <div className="w-full flex flex-col items-center">

          <div 
            className="w-full flex flex-row overflow-x-auto hide-scrollbar touch-pan-x"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {testimonialsData.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-none w-full box-border px-6 snap-center flex justify-center items-center"
              >
                <div 
                  className="w-full relative bg-[#FAF8F2] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] border-2 border-gold/40 p-8 shadow-xl max-w-sm"
                >
                  <div className="absolute top-4 left-4 text-gold/30 font-heading text-6xl select-none">"</div>
                  <p className="font-body text-charcoal/80 italic text-base leading-relaxed mb-6 relative z-10 text-center">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gold/20 pt-4 text-center relative z-10">
                    <p className="font-subheading text-burgundy tracking-widest text-sm uppercase">{testimonial.author}</p>
                    <p className="font-body text-charcoal/50 text-xs mt-1">{testimonial.location}</p>
                  </div>
                  
                  {/* Subtle Wax Seal Icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-burgundy rounded-full flex items-center justify-center drop-shadow-md border border-[#3A0A12] shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] select-none pointer-events-none opacity-90">
                    <div className="absolute inset-0 rounded-full border border-gold/20 m-1"></div>
                    <span className="font-heading text-gold text-2xl italic pr-0.5 pb-0.5">S</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <div key={idx} className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[450px] md:h-[400px] flex flex-col items-center justify-center w-full overflow-hidden">

      {testimonialsData.map((testimonial, idx) => {
        let diff = idx - currentIndex;
        if (diff < -2) diff += testimonialsData.length;
        if (diff > 2) diff -= testimonialsData.length;

        let xOffset = "0vw";
        let scale = 1;
        let opacity = 1;
        let zIndex = 30;

        if (diff === -1) {
          xOffset = "-25vw";
          scale = 0.85;
          opacity = 0.6;
          zIndex = 20;
        } else if (diff === 1) {
          xOffset = "25vw";
          scale = 0.85;
          opacity = 0.6;
          zIndex = 20;
        } else if (diff === -2) {
          xOffset = "-50vw";
          scale = 0.7;
          opacity = 0.3;
          zIndex = 10;
        } else if (diff === 2) {
          xOffset = "50vw";
          scale = 0.7;
          opacity = 0.3;
          zIndex = 10;
        }

        return (
          <motion.div
            key={idx}
            animate={{ opacity, scale, x: xOffset, zIndex }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ 
              willChange: "transform, opacity",
              filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.2))"
            }}
            className="absolute w-[85%] sm:w-[60%] md:w-[50%] lg:w-[40%] max-w-2xl bg-[#FAF8F2] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] border-2 border-gold/40 p-8 md:p-12"
          >
            <div className="absolute top-4 left-4 text-gold/30 font-heading text-6xl select-none">"</div>
            <p className="font-body text-charcoal/80 italic text-base md:text-lg leading-relaxed mb-8 relative z-10 text-center">
              {testimonial.quote}
            </p>
            <div className="border-t border-gold/20 pt-4 text-center relative z-10">
              <p className="font-subheading text-burgundy tracking-widest text-sm uppercase">{testimonial.author}</p>
              <p className="font-body text-charcoal/50 text-xs">{testimonial.location}</p>
            </div>
            
            {/* Subtle Wax Seal Icon */}
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-burgundy rounded-full flex items-center justify-center drop-shadow-md border border-[#3A0A12] shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] select-none pointer-events-none opacity-90 hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 rounded-full border border-gold/20 m-1"></div>
              <span className="font-heading text-gold text-2xl italic pr-0.5 pb-0.5">S</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
};


const MagneticTilt = ({ children, className = "" }: { children: any, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setTilt({ x: yPct * -10, y: xPct * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 100, damping: 30, mass: 1 }}
      style={{ transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};




const HeroSection = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      titleLine1: "The Royal",
      titleLine2: "Suits",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20traditional%20suit%20salwar%20burgundy%20gold%20studio%20lighting%20centered?width=1200&height=1800&nologo=true&seed=814"
    },
    {
      titleLine1: "Timeless",
      titleLine2: "Elegance",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20zardozi%20anarkali%20suit%20emerald%20green%20gold%20studio%20lighting?width=1200&height=1800&nologo=true&seed=142"
    },
    {
      titleLine1: "Heritage",
      titleLine2: "Weaves",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20banarasi%20silk%20suit%20salwar%20royal%20blue%20gold%20studio%20lighting?width=1200&height=1800&nologo=true&seed=991"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-[100svh] lg:min-h-screen w-full bg-[radial-gradient(circle_at_center,#4A0D15_0%,#2D060A_50%,#110204_100%)] overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 -mt-[74px] pt-[74px] pb-0 lg:pb-0 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Maximalist Deep Layered Backgrounds */}
        
        {/* Very dark radial gradient mapping to center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] z-[-2] pointer-events-none"></div>
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
        
        <div id="hero-grid" className="relative z-20 w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full pt-10 -translate-y-2">
          
          {/* Content Container (Left side on desktop, 6 cols) */}
          <div id="hero-left-content" className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 self-center w-full z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
              className="max-w-2xl"
            >
              <div id="hero-tag" className="flex items-center gap-4 mb-4 md:mb-8">
                <span className="w-12 h-[1px] bg-gold block shadow-[0_0_5px_rgba(212,175,55,0.5)]"></span>
                <span className="font-subheading text-gold tracking-[6px] uppercase text-xs md:text-sm font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] zardozi-shimmer">
                   Heritage Couture
                </span>
                <span className="w-12 h-[1px] bg-gold block shadow-[0_0_5px_rgba(212,175,55,0.5)] lg:hidden"></span>
              </div>
              
              <div id="hero-title" className="min-h-[120px] md:min-h-[160px] lg:min-h-[220px] relative w-full flex items-end">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={heroSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-heading text-[2.2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[7rem] text-ivory md:leading-[0.95] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] zardozi-shimmer absolute bottom-0 left-0"
                  >
                    {heroSlides[heroSlide].titleLine1} <br/> {heroSlides[heroSlide].titleLine2}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <div id="hero-desc" className="relative mb-6 md:mb-12 mt-4 md:mt-12 pl-6 md:pl-0">
                 {/* Decorative Left Line */}
                 <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold/0 via-[#D4AF37] to-[#D4AF37]/0 hidden md:block"></div>
                 
                 <p className="font-body text-ivory/90 text-sm md:text-base lg:text-lg font-light italic leading-[1.8] md:pl-6">
                  <span className="float-left text-[4.5rem] md:text-[5.5rem] font-heading text-gold leading-[0.65] mr-5 mt-3 relative zardozi-shimmer drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                     A
                     {/* Intricate Gold Vine SVG wrapper for Drop Cap */}
                     <svg className="absolute -inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] pointer-events-none opacity-80 text-gold" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                       <path d="M10,90 C-10,50 30,10 90,10" strokeDasharray="2 4"/>
                       <circle cx="90" cy="10" r="1.5" fill="currentColor"/>
                       <circle cx="10" cy="90" r="1.5" fill="currentColor"/>
                     </svg>
                  </span>
                  legacy of hand-woven blessings, crafted for the modern monarch. Where every thread of spun gold weaves a timeless tale of eternal grace.
                 </p>
              </div>

              {/* CTAs */}
              <div id="hero-cta-wrapper" className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
                  <Link to="/collections" className="group relative overflow-hidden bg-gradient-to-br from-gold to-[#B38C2A] text-[#2A050A] px-10 py-[1.125rem] flex items-center justify-center transition-all duration-500 shadow-[0_5px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:-translate-y-1">
                    <span className="font-subheading tracking-widest text-sm font-bold uppercase relative z-10 text-center">Explore the Collections</span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  </Link>
                  
                  <Link to="/about" className="group relative px-10 py-[1.125rem] border border-[#D4AF37]/60 text-ivory transition-all duration-300 hover:bg-gold/10 flex items-center justify-center overflow-hidden hover:-translate-y-1 hover:border-[#D4AF37]">
                    <span className="font-subheading tracking-widest text-sm uppercase font-medium relative z-10 group-hover:text-gold transition-colors">Know More</span>
                  </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Container (Right side on desktop, 6 cols) */}
          <div id="hero-image-container" className="lg:col-span-6 relative flex items-center justify-center order-1 lg:order-2 h-[55vh] md:h-[65vh] lg:h-[80vh] min-h-[450px] w-full">
             
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
                  <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,1)]">
                     <svg width="36" height="36" viewBox="0 0 24 40" fill="none" className="w-8 h-10 text-gold">
                        <ellipse cx="12" cy="4" rx="2" ry="4" stroke="currentColor" strokeWidth="2" fill="currentColor" className="opacity-80"/>
                        <line x1="12" y1="8" x2="12" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 12 0 C 20 -15, 34 5, 15 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70"/>
                        <path d="M 12 0 C 4 -15, -10 5, 9 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-70"/>
                      </svg>
                  </div>
                </div>
                
                <div className="w-full h-full shape-arch overflow-hidden bg-[#3A0A12] relative border-[4px] border-transparent">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-10"></div>
                  
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={heroSlide}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1.05 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      src={heroSlides[heroSlide].image}
                      alt={heroSlides[heroSlide].titleLine1} 
                      className="absolute inset-0 w-full h-full object-cover animate-[kenburns_25s_ease-in-out_infinite_alternate]"
                      referrerPolicy="no-referrer"
                      style={{ transformOrigin: 'center 20%', willChange: 'transform, opacity' }}
                    />
                  </AnimatePresence>
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
                    loading="lazy" />
                   <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none mix-blend-multiply"></div>
               </div>
             </motion.div>

          </div>

        </div>
      </section>
  );
};

export default function Home() {


  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Shukrana | Royal Indian Handloom & Couture</title>
        <meta name="description" content="Discover Shukrana's exquisite collection of handcrafted Indian couture, featuring pure silks, zardozi embroidery, and timeless silhouettes sourced directly from master artisans." />
        <style>{`
          @media (max-width: 768px) {
            /* 3. EXPLORE BY STYLE (CATEGORIES) MASONRY OVERRIDE */
            .explore-by-style-grid {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
              padding: 12px !important;
              grid-auto-rows: auto !important;
            }
            .explore-by-style-grid > div {
              max-height: none !important;
            }
            /* Reset all row/col spans first */
            .explore-by-style-grid > div {
              grid-column: span 1 !important;
              grid-row: span 1 !important;
              height: 160px !important; /* Default tile */
            }
            /* Card 1 (Feature card e.g., Pure Silk) */
            .explore-by-style-grid > div:nth-child(1) { grid-column: span 2 !important; height: 150px !important; }
            /* Card 2 & 3: Tall portrait */
            .explore-by-style-grid > div:nth-child(2),
            .explore-by-style-grid > div:nth-child(3) { grid-column: span 1 !important; height: 210px !important; }
            /* Card 4 & 5: Compact tiles */
            .explore-by-style-grid > div:nth-child(4),
            .explore-by-style-grid > div:nth-child(5) { grid-column: span 1 !important; height: 160px !important; }
            /* Card 6: Party wear wide */
            .explore-by-style-grid > div:nth-child(6) { grid-column: span 2 !important; height: 140px !important; }
            /* Remaining cards fallback */
            .explore-by-style-grid > div:nth-child(7) { grid-column: span 2 !important; height: 130px !important; }
            
            .explore-by-style-grid .category-card img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover !important;
            }

            /* --- HERO MOBILE OPTIMIZATION --- */
            #hero-section {
              height: auto !important;
              min-height: 100vh !important;
              max-height: none !important;
              overflow: hidden !important;
              padding: 74px 0 100px 0 !important;
              margin-bottom: 0 !important;
            }
            
            #hero-grid {
              position: relative !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: flex-start !important;
              min-height: 100% !important;
              height: auto !important;
              gap: 40px !important;
              padding: 40px 20px 20px 20px !important;
              box-sizing: border-box !important;
            }
            
            #hero-left-content {
              order: 2 !important;
              margin-bottom: 0 !important;
              flex: 0 0 auto !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: center !important;
              transform: none !important;
              align-items: center !important;
              text-align: center !important;
            }
            
            #hero-left-content > div {
              display: flex !important;
              flex-direction: column !important;
              justify-content: center !important;
              align-items: center !important;
              height: auto !important;
              width: 100% !important;
              margin: 0 !important;
            }
            
            #hero-image-container {
              order: 1 !important;
              height: 35vh !important;
              min-height: auto !important;
              margin: 0 auto !important;
              max-width: 250px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              width: 100% !important;
              transform: none !important;
            }
            
            #hero-image-container .shape-arch {
              height: 100% !important;
              width: 100% !important;
            }
            
            #hero-title {
              font-size: 2.8rem !important;
              line-height: 1.1 !important;
              margin-bottom: 12px !important;
              min-height: auto !important;
              display: block !important;
            }

            #hero-title h1 {
              font-size: 2.8rem !important;
              line-height: 1.1 !important;
              position: relative !important;
            }
            
            #hero-tag {
              margin-bottom: 12px !important;
              justify-content: center !important;
            }
            
            #hero-desc {
              margin-top: 10px !important;
              margin-bottom: 10px !important;
            }

            #hero-desc p {
              font-size: 0.85rem !important;
              line-height: 1.4 !important;
              padding-left: 0 !important;
            }

            #hero-desc span.float-left {
              font-size: 3.5rem !important;
              margin-right: 12px !important;
              margin-top: 4px !important;
            }
            
            #hero-cta-wrapper {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              transform: none !important;
              display: flex !important;
              flex-direction: row !important;
              gap: 8px !important;
              width: 100% !important;
              max-width: 380px !important;
              margin-top: 15px !important;
              margin-bottom: 0 !important;
              padding: 0 !important;
              box-sizing: border-box !important;
              justify-content: center !important;
              align-items: center !important;
              align-self: center !important;
            }
            
            #hero-cta-wrapper > a {
              flex: 1 !important;
              padding: 10px 4px !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            
            #hero-cta-wrapper span {
              font-size: 0.65rem !important;
              line-height: 1.2 !important;
            }
          }
        `}</style>
      </Helmet>

      {/* Hero Section */}
            <HeroSection />


      {/* Featured Collections */}
      <section className="py-8 md:py-[calc(3rem+7.5px)] w-full relative bg-parchment overflow-hidden">
        <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none mix-blend-multiply opacity-45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(215,205,185,0.4)_100%)] z-0 pointer-events-none"></div>
        {/* Decorative corner mandalas */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3Cpath d=\\'M50 5 L50 95 M5 50 L95 50M18 18 L82 82 M18 82 L82 18\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3Cpath d=\\'M50 5 L50 95 M5 50 L95 50M18 18 L82 82 M18 82 L82 18\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 4\\'/%3E%3C/svg%3E')] -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 4\\'/%3E%3C/svg%3E')] translate-x-1/3 translate-y-1/3"></div>
        
        {/* Additional decorative elements to fill white space */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z\\' fill=\\'%23000\\'/%3E%3C/svg%3E')] rotate-45"></div>
        <div className="absolute bottom-1/4 -left-16 w-80 h-80 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z\\' fill=\\'%23000\\'/%3E%3C/svg%3E')] -rotate-45"></div>

        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[0] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-[2px] border-r-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[2px] border-r-[2px] border-gold"></div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10] grayscale mix-blend-overlay"><ParallaxJaali /></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-12 relative w-full z-10 px-6 max-w-7xl mx-auto"
        >
          <div className="absolute left-0 right-0 top-[28px] h-[1px] bg-gold/40 -z-10"></div>
          
          {/* Spacer to keep center piece centered */}
          <div className="hidden md:block w-[120px]"></div>
          
          <div className="text-center flex flex-col items-center flex-1 shrink-0 py-2 px-8 mx-4">
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
              <SubtleIcon className="text-burgundy w-5 h-5" />
              <h2 className="font-heading text-4xl md:text-5xl text-burgundy">Curated Edits</h2>
              <SubtleIcon className="text-burgundy w-5 h-5" />
            </div>
            <p className="font-heading italic text-charcoal/90 text-sm md:text-base max-w-lg leading-relaxed mt-2">
              A handpicked selection of our most exquisite silhouettes, meticulously crafted to honor the timeless grace of the modern woman. Discover heritage woven into every stitch.
            </p>
          </div>

          <div className="hidden md:flex w-[120px] justify-end">
            <Link to="/collections" className="flex items-center gap-2 font-subheading text-sm text-charcoal tracking-widest uppercase border-b border-gold hover:text-burgundy transition-colors pb-1 whitespace-nowrap">
              View All
              <SubtleIcon className="w-3 h-3 text-gold" />
            </Link>
          </div>
        </motion.div>

        <div className="relative z-10">
          <CuratedEditsCarousel />
        </div>
      </section>

      {/* Signature Silhouettes Section */}
      <section className="pt-12 pb-6 md:py-[calc(4rem+7.5px)] w-full relative bg-[radial-gradient(circle_at_center,#4A0D15_0%,#2D060A_50%,#110204_100%)] overflow-hidden border-b-2 border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] z-0 pointer-events-none"></div>
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 grayscale"><ParallaxJaali /></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[1] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[3px] border-l-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-[3px] border-r-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-[3px] border-l-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[3px] border-r-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute inset-2 border border-gold/10"></div>
        </div>

        <div className="absolute inset-0 bg-damask opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center flex flex-col items-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
              <SubtleIcon className="text-gold" />
              <h2 className="font-heading text-4xl md:text-5xl text-gold zardozi-shimmer drop-shadow-md">New Arrivals</h2>
              <SubtleIcon className="text-gold" />
            </div>
            <p className="font-heading italic text-ivory/90 text-sm md:text-base max-w-lg leading-relaxed pt-2">
              Explore our latest additions, where traditional artistry meets contemporary elegance. Each piece is freshly woven from the loom, celebrating the vibrant legacy of Indian craftsmanship.
            </p>
          </motion.div>

          <SmoothCarousel>
            {newArrivalsData.map((item, idx) => (
              <div key={idx} className="relative h-full w-full">
                <ProductCard 
                  id={item.id}
                  name={item.title}
                  fabric={item.fabric}
                  price={item.price}
                  status={item.status as any}
                  image={item.image}
                  theme="dark"
                />
                {idx === 0 && <span className="absolute -left-6 top-1/3 -rotate-90 origin-left font-body italic text-gold/60 text-xs whitespace-nowrap pointer-events-none">Hand-stitched in Old Delhi</span>}
              </div>
            ))}
          </SmoothCarousel>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-[calc(6rem+7.5px)] bg-black relative overflow-hidden border-y border-gold/20 z-20">
        {/* Visual Effects: Dust and Stars */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 bg-gold/50 rounded-full blur-[1px] animate-pulse"></div>
          <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-burgundy/60 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-gold/40 rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-[60%] right-[5%] w-1 h-1 bg-ivory/50 rounded-full blur-[0.5px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <SubtleIcon className="text-gold w-6 h-6" />
              <h2 className="font-heading text-5xl md:text-6xl text-gold zardozi-shimmer drop-shadow-md">Explore by Style</h2>
              <SubtleIcon className="text-gold w-6 h-6" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] bg-gold/40 w-16"></div>
              <p className="font-subheading text-ivory tracking-widest uppercase text-sm">Shop by Material & Craft</p>
              <div className="h-[1px] bg-gold/40 w-16"></div>
            </div>
          </motion.div>

          {/* Grid Layout taking inspiration from Pinterest Masonry / Bento grid */}
          <div className="explore-by-style-grid grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 auto-rows-[60px] md:auto-rows-[300px] px-2 md:px-0">
            {categoriesData.map((cat, idx) => {
              // Creating a dynamic, interesting layout
              let spanClass = "col-span-1 lg:col-span-1 row-span-2 md:row-span-1";
              if (idx === 0) spanClass = "col-span-2 lg:col-span-2 row-span-3 md:row-span-2"; // Pure Silk (large)
              else if (idx === 4) spanClass = "col-span-2 lg:col-span-2 row-span-2 md:row-span-2"; // Pakistani Suits (large)
              else if (idx === 7) spanClass = "col-span-2 lg:col-span-2 row-span-2 md:row-span-1"; // Sharara Sets (wide)
              else if (idx === 1) spanClass = "col-span-2 lg:col-span-2 row-span-2 md:row-span-1"; // Handwoven Cotton (wide)
              else if (idx === 3) spanClass = "col-span-2 md:col-span-1 row-span-3 md:row-span-1"; // Tall on mobile
              else if (idx === 9) spanClass = "col-span-2 lg:col-span-1 row-span-2 md:row-span-2"; // Lehenga
              else if (idx === 11) spanClass = "col-span-2 lg:col-span-2 row-span-3 md:row-span-1"; // Velvet
              else if (idx === 12) spanClass = "col-span-1 lg:col-span-2 row-span-2 md:row-span-1"; // Chikankari
              else if (idx === 13) spanClass = "col-span-2 lg:col-span-1 row-span-2 md:row-span-1"; // Zardozi (wide on mobile)
              else if (idx === 14) spanClass = "col-span-1 lg:col-span-1 row-span-2 md:row-span-2"; // Banarasi

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % 5) * 0.1 }}
                  className={`category-card relative group overflow-hidden border border-gold/30 bg-burgundy/5 cursor-pointer shadow-lg hover:shadow-2xl hover:z-20 max-h-[160px] md:max-h-none ${spanClass}`}
                >
                  <Link to={`/collections?category=${cat.id}`} className="block w-full h-full">
                    <div className="absolute inset-2 border border-gold/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none hidden md:block"></div>
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                     loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 md:via-charcoal/20 to-transparent opacity-80 md:opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end z-20">
                      <p className="font-subheading text-gold text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase mb-1 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-100 md:opacity-0 group-hover:opacity-100">
                        {cat.category}
                      </p>
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-ivory transform group-hover:translate-y-0 md:group-hover:-translate-y-2 transition-transform duration-500 leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="pt-12 pb-6 md:py-[calc(3rem+7.5px)] bg-parchment border-y border-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none mix-blend-multiply opacity-45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(215,205,185,0.4)_100%)] z-0 pointer-events-none"></div>
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'0\\' cy=\\'0\\' r=\\'80\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'0\\' cy=\\'0\\' r=\\'60\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')]"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'100\\' cy=\\'100\\' r=\\'80\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'100\\' cy=\\'100\\' r=\\'60\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')]"></div>
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z\\' fill=\\'%23000\\'/%3E%3Cpath d=\\'M10 10 L80 10 L80 11 L11 11 L11 80 L10 80 Z\\' fill=\\'%23000\\'/%3E%3C/svg%3E')]"></div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 0 L0 0 L0 2 L98 2 L98 100 L100 100 Z\\' fill=\\'%23000\\'/%3E%3Cpath d=\\'M90 10 L20 10 L20 11 L89 11 L89 80 L90 80 Z\\' fill=\\'%23000\\'/%3E%3C/svg%3E')]"></div>
        
        {/* Additional decorative elements to fill white space */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 0L40 20L20 40L0 20Z\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')]"></div>

        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[0] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-[2px] border-r-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[2px] border-r-[2px] border-gold"></div>
        </div>

        <div className="absolute inset-0 bg-silk opacity-50 pointer-events-none"></div>
        {/* Shukrana Signature Watermark & Mughal Arch */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none opacity-[0.02] z-0 w-full overflow-hidden flex justify-center">
          <span className="font-heading italic text-[25vw] text-burgundy whitespace-nowrap drop-shadow-md">Shukrana</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-12 relative w-full z-10"
          >
            <div className="absolute left-0 right-0 top-[28px] h-[1px] bg-gold/40 -z-10"></div>
            
            <div className="hidden md:block w-[120px]"></div>
            
            <div className="text-center flex flex-col items-center flex-1 shrink-0 py-2 px-8 mx-4">
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
                <SubtleIcon className="text-burgundy w-5 h-5" />
                <h2 className="font-heading text-4xl md:text-5xl text-burgundy">Signature Silhouettes</h2>
                <SubtleIcon className="text-burgundy w-5 h-5" />
              </div>
              <p className="font-heading italic text-charcoal/90 text-sm md:text-base max-w-lg leading-relaxed mt-2">
                Timeless cuts that define the Shukrana aesthetic.<br className="hidden md:block"/>Hand-stitched elegance for the modern connoisseur.
              </p>
            </div>

            <div className="hidden md:flex w-[120px] justify-end">
              <Link to="/collections" className="flex items-center gap-2 font-subheading text-sm text-charcoal tracking-widest uppercase border-b border-gold hover:text-burgundy transition-colors pb-1 whitespace-nowrap">
                View All
                <SubtleIcon className="w-3 h-3 text-gold" />
              </Link>
            </div>
          </motion.div>

          <SmoothCarousel>
            {signatureSilhouettesData.map((item, idx) => (
              <div key={idx} className="relative h-full w-full">
                <ProductCard 
                  id={item.id}
                  name={item.title}
                  fabric={(item as any).fabric || item.desc}
                  price={item.price}
                  status={item.status as any}
                  image={item.image}
                  theme="light"
                />
              </div>
            ))}
          </SmoothCarousel>
        </div>
      </section>

      {/* The Shukrana Journey - Fashion Editorial Timeline */}
      <FashionEditorialJourney />

      {/* Royal Testimonials */}
      <section className="py-[calc(5rem+7.5px)] bg-parchment relative overflow-hidden">
        <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none mix-blend-multiply opacity-45"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(215,205,185,0.4)_100%)] z-0 pointer-events-none"></div>
        {/* Grand ornate background crest */}
        <div className="absolute top-1/2 left-1/2 w-full max-w-4xl aspect-square -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z\\' fill=\\'%23000\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'20\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'1 2\\'/%3E%3C/svg%3E')]"></div>
        
        {/* Additional decorative elements to fill white space */}
        <div className="absolute -left-32 top-32 w-64 h-64 opacity-5 pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')]"></div>
        <div className="absolute -right-32 bottom-32 w-64 h-64 opacity-5 pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')]"></div>
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[0] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-[2px] border-r-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[2px] border-r-[2px] border-gold"></div>
        </div>

        <div className="absolute inset-0 bg-silk opacity-50 pointer-events-none"></div>
        
        {/* Decorative Corner Mandalas */}
        <div className="absolute top-0 left-0 w-64 h-64 border-b-2 border-r-2 border-gold/20 rounded-br-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-48 border-b-2 border-r-2 border-gold/30 rounded-br-full"></div>
          <div className="absolute top-0 left-0 w-32 h-32 border-b-2 border-r-2 border-gold/40 rounded-br-full"></div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-t-2 border-l-2 border-gold/20 rounded-tl-full opacity-30 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-48 h-48 border-t-2 border-l-2 border-gold/30 rounded-tl-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-t-2 border-l-2 border-gold/40 rounded-tl-full"></div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-10 text-gold/10 pointer-events-none">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C60 20, 80 40, 50 100 C20 40, 40 20, 50 0 Z" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 right-10 text-gold/10 pointer-events-none rotate-180">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C60 20, 80 40, 50 100 C20 40, 40 20, 50 0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-6 mb-4">
              <SubtleIcon className="text-burgundy w-5 h-5" />
              <h2 className="font-heading text-4xl md:text-5xl text-burgundy">Royal Testimonials</h2>
              <SubtleIcon className="text-burgundy w-5 h-5" />
            </div>
            <p className="font-subheading text-gold tracking-widest uppercase text-xs">Notes of Gratitude</p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Exhibition Teaser / California Edit */}
      <section className="pt-16 md:pt-[calc(8rem+7.5px)] pb-6 md:pb-32 relative bg-[#110204] text-gold overflow-hidden group/section">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,13,21,0.6)_0%,rgba(17,2,4,1)_100%)] z-[1] pointer-events-none transition-opacity duration-1000"></div>
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        
        {/* Grid / Jaali Background Effect like New Arrivals */}
        <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none invert opacity-[0.05] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.35] mix-blend-color-dodge z-[0] pointer-events-none"></div>
        
        {/* Floating Glowing Motes / Bokeh */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-burgundy/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

        {/* Decorative corner borders (Adapted from New Arrivals) */}
        <div className="absolute top-0 left-0 w-48 h-48 opacity-[0.25] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'0\\' cy=\\'0\\' r=\\'80\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'0\\' cy=\\'0\\' r=\\'60\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')] transform scale-150 transform-origin-top-left"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.25] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'100\\' cy=\\'100\\' r=\\'80\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'100\\' cy=\\'100\\' r=\\'60\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'1\\'/%3E%3C/svg%3E')] transform scale-150 transform-origin-bottom-right"></div>
        <div className="absolute top-0 left-0 w-32 h-32 opacity-[0.15] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z\\' fill=\\'%23d4af37\\'/%3E%3Cpath d=\\'M10 10 L80 10 L80 11 L11 11 L11 80 L10 80 Z\\' fill=\\'%23d4af37\\'/%3E%3C/svg%3E')]"></div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.15] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 0 L0 0 L0 2 L98 2 L98 100 L100 100 Z\\' fill=\\'%23d4af37\\'/%3E%3Cpath d=\\'M90 10 L20 10 L20 11 L89 11 L89 80 L90 80 Z\\' fill=\\'%23d4af37\\'/%3E%3C/svg%3E')]"></div>
        
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-30"><ParallaxJaali /></div>

        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/15 z-[1] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[2px] border-l-[2px] border-gold/60 flex items-start justify-start"><div className="w-2 h-2 bg-gold mt-1 ml-1 rounded-full opacity-50"></div></div>
          <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-[2px] border-r-[2px] border-gold/60 flex items-start justify-end"><div className="w-2 h-2 bg-gold mt-1 mr-1 rounded-full opacity-50"></div></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-[2px] border-l-[2px] border-gold/60 flex items-end justify-start"><div className="w-2 h-2 bg-gold mb-1 ml-1 rounded-full opacity-50"></div></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[2px] border-r-[2px] border-gold/60 flex items-end justify-end"><div className="w-2 h-2 bg-gold mb-1 mr-1 rounded-full opacity-50"></div></div>
        </div>
        
        {/* Decorative Floating Geometry */}
        <div className="absolute top-[18%] left-[8%] w-32 h-32 md:w-64 md:h-64 border-[0.5px] border-gold/30 rounded-full pointer-events-none mix-blend-screen opacity-60 hidden sm:block"></div>
        <div className="absolute top-[20%] left-[10%] w-32 h-32 md:w-64 md:h-64 border border-gold/20 rounded-full pointer-events-none mix-blend-screen opacity-50 hidden sm:block border-dashed"></div>
        <div className="absolute top-[10%] left-[40%] w-24 h-24 border border-gold/15 rounded-full pointer-events-none mix-blend-screen opacity-30 animate-[spin_60s_linear_infinite] border-dotted hidden md:block"></div>
        <div className="absolute bottom-[15%] right-[25%] w-72 h-72 border-[0.5px] border-gold/20 rounded-full pointer-events-none mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-[20%] right-[30%] w-64 h-64 border border-gold/10 rounded-full pointer-events-none mix-blend-screen opacity-40"></div>
        <div className="absolute top-[45%] right-[12%] w-16 h-16 border border-gold/40 rotate-45 pointer-events-none opacity-60 mix-blend-screen"></div>
        <div className="absolute top-[48%] right-[15%] w-8 h-8 bg-gold/10 rotate-45 pointer-events-none opacity-60 mix-blend-screen filter blur-[2px]"></div>
        
        {/* Watermark Logo/Text and Graphical Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center opacity-[0.05] z-0 pointer-events-none overflow-hidden select-none">
          <svg className="w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] text-gold hidden sm:block mb-8" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
             <path d="M50 0 A 50 50 0 0 1 100 50 A 50 50 0 0 1 50 100 A 50 50 0 0 1 0 50 A 50 50 0 0 1 50 0" strokeDasharray="1 2"/>
             <circle cx="50" cy="50" r="40" strokeDasharray="4 2"/>
             <circle cx="50" cy="50" r="38"/>
             <path d="M50 12 L50 88 M12 50 L88 50 M25 25 L75 75 M25 75 L75 25"/>
             <circle cx="50" cy="50" r="28" strokeDasharray="1 1"/>
          </svg>
          <span className="font-heading text-[20vw] whitespace-nowrap tracking-widest text-[#FAF9F6]">SHUKRANA</span>
          <span className="font-subheading text-[5vw] uppercase tracking-[1em] text-gold mt-4">heritage couture</span>
          
          <svg className="w-[120vw] h-[120vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold sm:hidden" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.2">
             <circle cx="50" cy="50" r="40" strokeDasharray="4 2"/>
             <circle cx="50" cy="50" r="38"/>
             <path d="M50 12 L50 88 M12 50 L88 50 M25 25 L75 75 M25 75 L75 25"/>
          </svg>
        </div>
        
        {/* Dynamic Background Image */}
        <motion.div 
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity scale-105 group-hover/section:scale-110 transition-transform duration-[20s]"
          style={{
            backgroundImage: "url('https://image.pollinations.ai/prompt/luxurious%20red%20and%20gold%20indian%20fabric%20texture%20royal?width=1920&height=1080&nologo=true&seed=991')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="h-[1px] bg-gold/50 w-8 md:w-12 hidden md:block"></div>
                <p className="font-subheading tracking-[0.2em] md:tracking-[0.3em] text-gold/80 uppercase text-[10px] md:text-sm animate-pulse">Upcoming Showcase</p>
                <div className="h-[1px] bg-gold/50 w-8 md:w-12 hidden md:block"></div>
              </div>
              
              <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-ivory mb-4 md:mb-6 leading-none drop-shadow-lg zardozi-shimmer flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 md:gap-4 mb-1 md:mb-2">
                  <SubtleIcon className="text-gold w-4 h-4 md:w-6 md:h-6 hidden md:block" />
                  <span>The <span className="text-gold italic">California</span></span>
                  <SubtleIcon className="text-gold w-4 h-4 md:w-6 md:h-6 hidden md:block" />
                </div>
                <span>Edit</span>
              </h2>
              
              <p className="font-body text-base md:text-xl text-parchment/80 mb-8 md:mb-10 italic max-w-[280px] md:max-w-xl mx-auto lg:mx-0 leading-relaxed md:leading-relaxed">
                Join us for an exclusive VIP preview of our festive collection. Experience the authentic grandeur of Indian heritage textiles in person.
              </p>
              
              <div className="flex gap-4 md:gap-6 font-subheading text-ivory mb-10 md:mb-0 justify-center lg:justify-start">
                <div className="flex flex-col items-center justify-center bg-black/40 border border-gold/30 rounded-t-full rounded-b-md p-4 md:p-6 min-w-[70px] md:min-w-[100px] shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-3xl md:text-5xl text-gold mb-1 md:mb-2 block font-light">14</span>
                  <span className="text-[8px] md:text-[10px] tracking-widest uppercase text-gold/60">Days</span>
                </div>
                <div className="flex flex-col items-center justify-center text-gold/40 text-2xl md:text-4xl font-light md:pt-4 animate-pulse">:</div>
                <div className="flex flex-col items-center justify-center bg-black/40 border border-gold/30 rounded-t-full rounded-b-md p-4 md:p-6 min-w-[70px] md:min-w-[100px] shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-3xl md:text-5xl text-gold mb-1 md:mb-2 block font-light">08</span>
                  <span className="text-[8px] md:text-[10px] tracking-widest uppercase text-gold/60">Hours</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Interactive Ticket/Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 perspective-1000 flex justify-center lg:justify-end mt-12 lg:mt-0"
            >
              <motion.div 
                whileHover={{ rotateY: -6, rotateX: 4, scale: 1.02 }}
                initial={{ transform: 'rotateY(10deg) scale(0.95)', opacity: 0 }}
                whileInView={{ transform: 'rotateY(0deg) scale(1)', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative bg-[#FAF9F6] p-2 w-full max-w-md shadow-[0_30px_60px_rgba(0,0,0,0.9)] group cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-[6px] md:inset-[6px] border-[0.5px] border-gold/40 pointer-events-none transition-colors group-hover:border-gold z-10"></div>
                
                {/* Extra decorative corner markers on the card */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-[0.5px] border-l-[0.5px] border-gold z-20 pointer-events-none"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-[0.5px] border-r-[0.5px] border-gold z-20 pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-[0.5px] border-l-[0.5px] border-gold z-20 pointer-events-none"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[0.5px] border-r-[0.5px] border-gold z-20 pointer-events-none"></div>

                <div className="overflow-hidden w-full h-[360px] md:h-[450px]">
                  <img 
                    src="https://images.unsplash.com/photo-1540331547168-8b6310f8ed8f?auto=format&fit=crop&q=80&w=600&h=800" 
                    alt="California Showcase Venue" 
                    className="w-full h-full object-cover filter brightness-[0.8] saturate-50 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s]"
                    referrerPolicy="no-referrer"
                   loading="lazy" />
                  {/* Subtle ethereal overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.2)_0%,transparent_60%)] mix-blend-screen pointer-events-none z-10"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent flex flex-col justify-end p-6 md:p-8 z-20">
                  <div className="translate-z-50 border-l-[2px] border-gold pl-4 md:pl-6 bg-charcoal/30 backdrop-blur-sm p-5 rounded-r-lg group-hover:bg-charcoal/50 transition-colors shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-30 mix-blend-screen">
                      <div className="w-16 h-16 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
                    </div>
                    
                    <p className="font-subheading text-gold text-[9px] md:text-[10px] tracking-[0.25em] uppercase mb-1 md:mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-gold animate-pulse inline-block"></span>
                       Venue Details
                    </p>
                    <h4 className="font-heading text-2xl md:text-3xl text-ivory mb-1 md:mb-2 group-hover:text-gold transition-colors">Beverly Hills Hotel</h4>
                    <p className="font-body text-[#FAF9F6]/70 text-xs md:text-sm italic mb-4 md:mb-6">Sunset Boulevard, CA</p>
                    
                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-gold/20">
                      <Link to="/exhibitions" className="inline-flex items-center gap-2 md:gap-3 font-subheading tracking-[0.2em] uppercase text-ivory md:text-gold text-[10px] md:text-[11px] group/btn hover:text-ivory transition-colors">
                        <span className="border-b border-ivory md:border-gold/50 pb-1 group-hover/btn:border-ivory transition-colors">RSVP Now</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-2 transition-transform">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Extra visual element for mobile balance */}
              <div className="absolute -bottom-8 md:-bottom-12 -right-8 md:-right-12 w-24 md:w-40 h-24 md:h-40 border border-gold/20 rounded-full mix-blend-screen -z-10 animate-pulse hidden sm:block"></div>
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full mix-blend-screen -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
