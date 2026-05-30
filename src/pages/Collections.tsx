import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Filter, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import GoldDust from '../components/GoldDust';
import ParallaxJaali from '../components/ParallaxJaali';

const FILTER_SECTIONS = [
  { id: 'occasions', title: 'OCCASIONS & EDITS', options: ['Signature Traditional Ensembles', 'Festival Edit', 'Evening Soirée', 'Elegant Gatherings', 'Everyday Elegance'] },
  { id: 'silhouette', title: 'SILHOUETTE', options: ['Anarkalis', 'Lehengas', 'Sarees', 'Suit Sets', 'Sharara Sets', 'Kaftans', 'Co-ord Sets', 'Sitara Gowns'] },
  { id: 'fabric', title: 'FABRIC & CRAFT', options: ['Pure Silk', 'Handwoven Cotton', 'Organza Tissue', 'Flowy Georgette', 'Silk Velvet', 'Banarasi Satin', 'Meticulous Zardozi'] },
  { id: 'color', title: 'SHADES & ROYAL PALETTES', options: ['Ivory & Champagne Cream', 'Vermilion & Crimson Red', 'Antique Gold & Ochre', 'Midnight Indigo & Royal Blue', 'Emerald & Sage Green'], isColor: true },
  { id: 'craft', title: 'WEAVES & EMBROIDERY', options: ['Hand-done Zardozi Embroidery', 'Classic Gota Patti Work', 'Intricate Aari Needlework', 'Banarasi Katan Silk Weaves', 'Real Zari Tani Borders'] },
  { id: 'priceTier', title: 'HEIRLOOM PRICE RANGES', options: ['Prêt-à-Porter (Under ₹20,000)', 'Festive Luxury (₹20,000 - ₹40,000)', 'Heritage Couture (Above ₹40,000)'] },
  { id: 'availability', title: 'AVAILABILITY', options: ['Ready to Ship', 'Pre-Book', 'Bespoke Custom'] }
];

const COLOR_MAP: Record<string, string> = {
  'Ivory & Champagne Cream': '#FDFBF7',
  'Vermilion & Crimson Red': '#8B0000',
  'Antique Gold & Ochre': '#B8860B',
  'Midnight Indigo & Royal Blue': '#191970',
  'Emerald & Sage Green': '#2E8B57'
};

const getPriceValue = (priceStr: string) => parseInt(priceStr.replace(/[^0-9]/g, ''), 10);

const emptyFilters = { occasions: [] as string[], silhouette: [] as string[], fabric: [] as string[], color: [] as string[], craft: [] as string[], priceTier: [] as string[], availability: [] as string[] };

export default function Collections() {
  const vaultRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: vaultRef });
  const watermarkY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const watermarkY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const watermarkY3 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({ ...emptyFilters });
  const [viewColumns, setViewColumns] = useState<number>(typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 2);
  const [expandedSections, setExpandedSections] = useState<string[]>(['silhouette', 'color']);

  const toggleFilter = (section: string, option: string) => {
    setActiveFilters(prev => {
      const current = prev[section];
      const updated = current.includes(option) ? current.filter(item => item !== option) : [...current, option];
      return { ...prev, [section]: updated };
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]);
  };

  const filteredProducts = PRODUCTS.filter(product => {
    const occasionsMatch = activeFilters.occasions.length === 0 || activeFilters.occasions.includes(product.occasion);
    const silhouetteMatch = activeFilters.silhouette.length === 0 || activeFilters.silhouette.includes(product.silhouette);
    const fabricMatch = activeFilters.fabric.length === 0 || activeFilters.fabric.includes(product.fabric);
    const colorMatch = activeFilters.color.length === 0 || (product.color && activeFilters.color.includes(product.color));
    const craftMatch = activeFilters.craft.length === 0 || (product.craft && activeFilters.craft.includes(product.craft));
    let priceMatch = true;
    if (activeFilters.priceTier.length > 0) {
      const p = getPriceValue(product.price);
      priceMatch = activeFilters.priceTier.some(tier => {
        if (tier.includes('Under ₹20,000')) return p < 20000;
        if (tier.includes('₹20,000 - ₹40,000')) return p >= 20000 && p <= 40000;
        if (tier.includes('Above ₹40,000')) return p > 40000;
        return false;
      });
    }
    let mappedStatus = product.status as string;
    if (product.status === 'In Stock') mappedStatus = 'Ready to Ship';
    if (product.status === 'Custom') mappedStatus = 'Bespoke Custom';
    const availabilityMatch = activeFilters.availability.length === 0 || activeFilters.availability.includes(mappedStatus);
    return occasionsMatch && silhouetteMatch && fabricMatch && colorMatch && craftMatch && priceMatch && availabilityMatch;
  });

  const luxuryScrollbar = "[&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-[#FAF9F6] [&::-webkit-scrollbar-thumb]:bg-[#C5A880] [&::-webkit-scrollbar-thumb]:rounded-full";

  return (
    <div className="relative w-full bg-[#FAF9F6] flex flex-col -mt-[74px]">
      <Helmet>
        <title>Collections | Shukrana</title>
        <meta name="description" content="Explore Shukrana's luxury collections of suit sets, anarkalis, sarees, and lehengas." />
      </Helmet>

      {/* Global Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>

      {/* ═══════════ 1. CINEMATIC HERO (Exhibitions-Style) ═══════════ */}
      <section className="relative pt-[calc(8rem+74px)] pb-24 md:pt-[calc(10rem+74px)] md:pb-28 px-6 flex flex-col items-center justify-center min-h-[60vh] border-b-[0.5px] border-gold/40 bg-[radial-gradient(circle_at_center,#4A0D15_0%,#2D060A_50%,#110204_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
        {/* Deep radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] pointer-events-none z-0"></div>
        {/* Stardust texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-0"></div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0">
          {/* Circular golden borders */}
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] border border-gold/20 rounded-full"></div>
          <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] border border-gold/30 rounded-full"></div>
          <div className="absolute bottom-0 right-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent to-gold/40"></div>

          {/* Massive watermark text */}
          <div className="absolute font-heading text-[180px] lg:text-[300px] text-white/[0.04] italic top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap">Collections</div>

          {/* Spinning diamond SVG pattern */}
          <div className="absolute w-[1800px] h-[1800px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 L100 50 L50 100 L0 50 Z\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.1\\' stroke-dasharray=\\'4 4\\'/%3E%3C/svg%3E')] opacity-30 mix-blend-screen select-none top-[-50%] left-[-20%] animate-[spin_240s_linear_infinite]"></div>

          {/* Large circular SVG */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 0 C155 0 200 45 200 100 C200 155 155 200 100 200 C45 200 0 155 0 100 C0 45 45 0 100 0 Z\\' fill=\\'none\\' stroke=\\'%23D4AF37\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'1 4\\'/%3E%3C/svg%3E')] opacity-[0.2] mix-blend-screen select-none -rotate-12 translate-x-1/3 -translate-y-1/3"></div>

          {/* Floral motif */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')] opacity-[0.06] mix-blend-screen select-none translate-y-1/3 -translate-x-1/4"></div>

          {/* Accent elements */}
          <div className="absolute left-[15%] top-[25%] w-2 h-2 rotate-45 bg-[#D4AF37]/40"></div>
          <div className="absolute right-[25%] bottom-[30%] w-3 h-3 rounded-full bg-[#111]/20"></div>
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent"></div>
        </div>

        {/* Copy Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="uppercase text-[#C5A880] tracking-[0.25em] text-[11px] font-subheading font-semibold mb-6 drop-shadow-sm">Archival Curation & Custom Couture</h2>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] mb-4 md:mb-6 text-gold drop-shadow-sm uppercase leading-[1.1] md:leading-tight">
            The Collections
          </h1>
          <p className="font-body text-[#FAF9F6]/80 italic text-lg md:text-xl lg:text-2xl px-4 tracking-wide max-w-2xl mx-auto drop-shadow-sm">
            "A curation of timeless tailored suits, flowing anarkalis, and heritage traditional wear—handwoven for the modern connoisseur."
          </p>
        </motion.div>
      </section>

      {/* ═══════════ 2. HYBRID STICKY WORKSPACE ═══════════ */}
      <div className="collection-workspace sticky top-[74px] h-[calc(100dvh-74px)] lg:h-[calc(140vh)] w-full overflow-hidden bg-[#FAF9F6] border-t border-[#EAE5DD] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center w-full p-4 border-b border-[#EAE5DD] bg-white/50 backdrop-blur-md z-30 relative shrink-0">
          <button className="flex items-center gap-2 text-charcoal font-subheading tracking-widest text-xs uppercase hover:text-gold transition-colors" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter size={14} />
            {isFilterOpen ? 'Hide Filters' : 'Refine Vault'}
          </button>
          <div className="flex gap-2 text-charcoal/50 font-subheading text-[10px]">
            <button onClick={() => setViewColumns(2)} className={viewColumns === 2 ? 'text-charcoal border-b border-charcoal' : ''}>[ 2 ]</button>
            <button onClick={() => setViewColumns(3)} className={viewColumns === 3 ? 'text-charcoal border-b border-charcoal' : ''}>[ 3 ]</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(100%-60px)] lg:h-full w-full">
          {/* ─── LEFT PANEL: FILTERS ─── */}
          <div className={`w-full md:w-[280px] lg:w-[320px] shrink-0 h-full overflow-y-auto bg-parchment border-r border-[#EAE5DD] px-6 lg:px-8 py-8 [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-charcoal/10 [&::-webkit-scrollbar-track]:bg-transparent relative z-20 shadow-[inset_-10px_0_20px_rgba(0,0,0,0.03)] ${isFilterOpen ? 'block fixed inset-0 bg-white z-50 overflow-y-auto' : 'hidden'} md:block md:static`}>
            {/* Rich sidebar texture & design elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-multiply z-0"></div>
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply z-0"></div>
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none z-0"></div>
            
            {/* Delicate border frame */}
            <div className="absolute left-3 top-3 bottom-3 border-l-[0.5px] border-gold/30 z-0 hidden md:block"></div>
            <div className="absolute left-3 top-3 w-6 h-[0.5px] bg-gold/30 z-0 hidden md:block"></div>
            <div className="absolute left-3 bottom-3 w-6 h-[0.5px] bg-gold/30 z-0 hidden md:block"></div>
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal/20 sticky top-0 bg-[#FAF8F5]/90 backdrop-blur-md z-10 pt-1">
              <h2 className="font-subheading tracking-[0.15em] text-[13px] text-charcoal uppercase font-medium">Refine Vault</h2>
              {Object.values(activeFilters).some((arr: any) => arr.length > 0) && (
                <button onClick={() => setActiveFilters({ ...emptyFilters })} className="text-[9px] uppercase font-subheading tracking-widest text-charcoal/50 hover:text-gold transition-colors">Clear All</button>
              )}
            </div>
            <div className="space-y-5 pb-20 relative z-10">
              {FILTER_SECTIONS.map((section) => (
                <div key={section.id} className="border-b border-charcoal/10 pb-4">
                  <button className="flex items-center justify-between w-full text-left font-subheading tracking-widest text-[11px] uppercase text-charcoal hover:text-gold transition-colors py-1" onClick={() => toggleSection(section.id)}>
                    <span className="font-semibold">{section.title}</span>
                    <motion.div animate={{ rotate: expandedSections.includes(section.id) ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={14} className="text-charcoal/50" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedSections.includes(section.id) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="pt-4 pb-2 space-y-3 pl-1">
                          {section.options.map((option) => (
                            <label key={option} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggleFilter(section.id, option)}>
                              {section.isColor ? (
                                <div className={`w-4 h-4 rounded-full border border-charcoal/20 shadow-inner shrink-0 transition-all ${activeFilters[section.id].includes(option) ? 'scale-110 ring-1 ring-offset-2 ring-gold' : 'group-hover:scale-110'}`} style={{ backgroundColor: COLOR_MAP[option] || '#fff' }} />
                              ) : (
                                <div className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 transition-colors ${activeFilters[section.id].includes(option) ? 'border-charcoal bg-charcoal text-[#FAF9F6]' : 'border-[#D1CCC5] group-hover:border-charcoal/50 bg-white'}`}>
                                  {activeFilters[section.id].includes(option) && <X size={10} strokeWidth={3} />}
                                </div>
                              )}
                              <span className={`font-body text-[13px] ${activeFilters[section.id].includes(option) ? 'text-charcoal font-medium' : 'text-charcoal/60'} group-hover:text-charcoal transition-colors leading-tight`}>{option}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT PANEL: PRODUCT VAULT ─── */}
          <div className="flex-1 h-full relative overflow-hidden flex flex-col bg-parchment">
            
            {/* 1. CONSTANT BACKGROUND LAYER (Curated Edits Style) */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden group transform-gpu will-change-transform contain-strict">
              {/* Base Textures */}
              <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none mix-blend-multiply opacity-15"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(215,205,185,0.3)_100%)] z-0 pointer-events-none"></div>
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none"></div>

              {/* Decorative Corner Mandalas (Lower opacity) */}
              <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3Cpath d=\\'M50 5 L50 95 M5 50 L95 50M18 18 L82 82 M18 82 L82 18\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 4\\'/%3E%3C/svg%3E')] translate-x-1/3 translate-y-1/3 animate-[spin_200s_linear_infinite]"></div>

              {/* Architectural Background Watermarks */}
              <div className="absolute inset-x-0 top-0 h-full flex flex-col items-center justify-around py-20 opacity-[0.03]">
                <span className="font-heading text-[12vw] text-charcoal whitespace-nowrap leading-none tracking-tight">Maison Shukrana</span>
                <span className="font-heading text-[10vw] text-charcoal whitespace-nowrap leading-none tracking-tighter italic">Heritage Archive</span>
                <span className="font-heading text-[14vw] text-charcoal whitespace-nowrap leading-none tracking-tight">Atelier Collection</span>
              </div>

              {/* Rich Background Effects */}
              <div className="absolute inset-0 mix-blend-overlay opacity-60">
                <ParallaxJaali />
              </div>
              <div className="absolute inset-0 opacity-70">
                <GoldDust />
              </div>

              {/* Interactive / Animated Decorative Elements */}
              {/* These elements respond subtly to context or animation */}
              <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '8s' }}></div>
              <div className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] bg-[#4A0D15]/10 rounded-full blur-[80px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '12s' }}></div>

              <div className="absolute top-[32%] -left-20 w-[660px] h-[660px] border-[1px] border-gold/20 rounded-full border-dashed group-hover:border-gold/40 transition-colors duration-1000"></div>
              
              <div className="absolute top-[10%] left-[40%] h-[300px] w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-[50px] bg-gold shadow-[0_0_10px_#d4af37] animate-[ping_4s_ease-in-out_infinite]"></div>
              </div>
              <div className="absolute bottom-[20%] right-[30%] h-[200px] w-[1px] bg-gradient-to-b from-charcoal/15 to-transparent"></div>
              <div className="absolute top-[15%] right-[15%] w-2 h-2 rotate-45 bg-gold shadow-[0_0_15px_rgba(212,175,55,0.6)] animate-bounce" style={{ animationDuration: '3s' }}></div>
              <div className="absolute top-[60%] left-[10%] w-3 h-3 rounded-full border border-charcoal/30 flex items-center justify-center">
                 <div className="w-1 h-1 bg-charcoal/30 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* 2. FIXED RIBBON (Glassmorphism Outside the scroll area) */}
            <div className="hidden md:flex justify-between items-center border-b border-[#EAE5DD] bg-parchment/90 backdrop-blur-md z-30 pt-6 pb-4 px-6 md:px-10 shrink-0 shadow-sm">
              <p className="font-subheading text-[11px] uppercase tracking-widest text-charcoal/80 font-medium">Showing {filteredProducts.length} Results</p>
              <div className="flex items-center gap-4 font-subheading tracking-widest text-[10px] text-charcoal">
                <span className="opacity-60 font-semibold">LAYOUT</span>
                <div className="flex gap-3">
                  {[2, 3, 4].map(n => (
                    <React.Fragment key={n}>
                      {n > 2 && <span className="text-charcoal/20">|</span>}
                      <button onClick={() => setViewColumns(n)} className={`px-2 py-1 transition-all ${viewColumns === n ? 'text-charcoal font-bold border-b-2 border-gold scale-110' : 'text-charcoal/50 hover:text-charcoal'}`}>[ {n} ]</button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. SCROLLING GRID */}
            <div ref={vaultRef} className={`flex-1 overflow-y-auto overscroll-y-auto scroll-smooth relative px-2 md:px-10 pt-8 pb-32 z-10 transform-gpu will-change-scroll ${luxuryScrollbar}`}>
              <div className="w-full max-w-7xl mx-auto">

              {/* Product Grid */}
              <div className={`grid ${viewColumns === 2 ? 'grid-cols-2 gap-2 md:gap-x-8' : viewColumns === 4 ? 'grid-cols-4 gap-3 lg:gap-x-6' : 'grid-cols-3 gap-3 md:gap-x-8'} gap-y-6 md:gap-y-16 relative z-10 transition-all duration-300 ease-in-out`}>
                {filteredProducts.map((product, index) => (
                  <motion.div key={product.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.04, 0.4) }}>
                    <ProductCard {...product} variant="catalog" />
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-40 border border-[#EAE5DD] bg-white/60 backdrop-blur-md rounded-lg mx-auto max-w-2xl mt-12 shadow-sm">
                  <p className="font-heading text-3xl text-charcoal mb-4">The Vault is Empty.</p>
                  <p className="font-body text-charcoal/50 italic text-lg">Adjust your refinements to discover our archival selections.</p>
                  <button onClick={() => setActiveFilters({ ...emptyFilters })} className="mt-10 border-b border-charcoal/50 text-charcoal font-subheading uppercase text-xs tracking-widest pb-1 hover:border-gold hover:text-gold transition-colors">Clear All Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
