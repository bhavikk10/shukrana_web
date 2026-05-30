import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { SubtleIcon } from '../components/SubtleIcon';
import ProductCard from '../components/ProductCard';
import CanvasGoldDust from '../components/GoldDust';
import ParallaxJaali from '../components/ParallaxJaali';
import { SmoothCarousel } from '../components/SmoothCarousel';
import { PRODUCTS } from '../data/products';

export default function Product() {
  const { slug } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [expandedSection, setExpandedSection] = useState<string | null>('fabric-care');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  const defaultProduct = PRODUCTS[0];
  const product = PRODUCTS.find(p => p.id === slug) || {
    ...defaultProduct,
    id: slug || defaultProduct.id,
    name: slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : defaultProduct.name
  };

  const handleCheckout = async (isDeposit: boolean) => {
    if (!selectedSize && product.status !== 'Custom') {
      alert('Please select a size before adding to bag.');
      return;
    }
    setIsCheckingOut(true);
    try {
      const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ''), 10);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            name: `${product.name} (Size: ${selectedSize || 'Custom'})`,
            price: numericPrice,
            image: product.images[0],
            quantity: 1
          }],
          isDeposit
        }),
      });

      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      } else if (session.error) {
        alert(session.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <>
      <div className="w-full relative bg-parchment min-h-screen overflow-hidden">
        {/* CONSTANT BACKGROUND LAYER */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden group transform-gpu will-change-transform contain-strict">
          <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none mix-blend-multiply opacity-25"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(215,205,185,0.3)_100%)] z-0 pointer-events-none"></div>
          <div className="absolute inset-0 opacity-60 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none"></div>
          
          <div className="absolute top-0 left-0 w-64 h-64 opacity-50 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.5\\'/%3E%3Cpath d=\\'M50 5 L50 95 M5 50 L95 50M18 18 L82 82 M18 82 L82 18\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 opacity-60 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 4\\'/%3E%3C/svg%3E')] translate-x-1/3 translate-y-1/3 animate-[spin_200s_linear_infinite]"></div>

          <div className="absolute inset-x-0 top-0 h-full flex flex-col items-center justify-around py-20 opacity-50">
            <span className="font-heading text-[12vw] text-gold/30 whitespace-nowrap opacity-50 leading-none tracking-tight">Maison Shukrana</span>
            <span className="font-heading text-[10vw] text-gold/20 whitespace-nowrap opacity-100 leading-none tracking-tighter italic">Heritage Archive</span>
          </div>

          <div className="absolute inset-0 mix-blend-overlay opacity-60"><ParallaxJaali /></div>
          <div className="absolute inset-0 opacity-60"><CanvasGoldDust /></div>

          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-gold/40 rounded-full blur-[100px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] bg-[#4A0D15]/40 rounded-full blur-[80px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '12s' }}></div>
          {/* Additional Interactive Background Elements */}
          <div className="absolute top-[50%] left-[70%] w-[200px] h-[200px] bg-gold/50 rounded-full blur-[120px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-[15%] right-[60%] w-[150px] h-[150px] bg-[#4A0D15]/50 rounded-full blur-[100px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '14s' }}></div>
          <div className="absolute top-[60%] right-[10%] w-[300px] h-[300px] border-[2px] border-gold/40 rounded-full border-dashed animate-[spin_100s_linear_infinite]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">

        {/* Breadcrumb */}
        <div className="font-subheading text-[10px] tracking-[0.2em] text-charcoal/50 uppercase mb-12 relative z-10">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-3 text-charcoal/30">/</span>
          <Link to="/collections" className="hover:text-charcoal transition-colors">Collections</Link>
          <span className="mx-3 text-charcoal/30">/</span>
          <span className="text-charcoal font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 items-start">
          {/* Visuals Column */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 h-auto md:h-[120vh] mx-auto lg:ml-0 lg:mr-0 w-full max-w-lg lg:max-w-none items-start">
            {/* Minimalist Vertical Thumbnails */}
            <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-y-auto no-scrollbar pb-2 md:pb-0 md:w-24 lg:w-32 flex-shrink-0 md:h-full">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setMainImageIdx(idx)}
                  className={`w-20 md:w-full aspect-[2/3] flex-shrink-0 border transition-all duration-300 relative ${mainImageIdx === idx ? 'border-charcoal opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Product view ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer"  loading="lazy" />
                </button>
              ))}
            </div>
            
            {/* Main Image Container */}
            <div className="order-1 md:order-2 h-[80vh] md:h-full aspect-[2/3] relative overflow-hidden bg-white/50 border border-charcoal/10 flex items-center justify-center shrink-0">
              <motion.img 
                key={mainImageIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[mainImageIdx]} 
                alt={product.name} 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>

          {/* Product Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-center xl:pl-10">
            <div className="mb-12">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4 md:mb-6 tracking-wide leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6 mb-8">
                <p className="font-heading text-charcoal/90 text-3xl font-medium tracking-wider">{product.price}</p>
                <span className="font-subheading text-[10px] tracking-[0.2em] uppercase px-3 py-1 text-charcoal border border-charcoal/30">
                  {product.status}
                </span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <span className="font-subheading text-charcoal/60 tracking-[0.2em] uppercase text-xs">Select Size</span>
                <button className="font-subheading text-[10px] text-charcoal tracking-[0.1em] uppercase hover:opacity-70 transition-opacity underline underline-offset-4">Size Guide</button>
              </div>
              <div className="flex gap-4 flex-wrap">
                {['XS', 'S', 'M', 'L', 'XL', 'CUSTOM'].map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`relative px-4 py-2 font-subheading text-xs tracking-widest uppercase transition-all duration-300 ${
                      selectedSize === size 
                        ? 'text-charcoal font-bold' 
                        : 'text-charcoal/60 hover:text-charcoal'
                    }`}
                  >
                    {size}
                    <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-charcoal transition-transform duration-300 origin-left ${selectedSize === size ? 'scale-x-100' : 'scale-x-0'}`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Action Button */}
            <div className="mb-16">
              {product.status === 'In Stock' && (
                <button 
                  onClick={() => handleCheckout(false)}
                  disabled={isCheckingOut}
                  className="w-full bg-[#111] text-ivory font-subheading tracking-[0.3em] uppercase py-5 text-xs hover:bg-[#222] transition-colors flex justify-center items-center gap-3 disabled:opacity-50"
                >
                  {isCheckingOut ? 'Processing...' : 'Add to Bag'}
                </button>
              )}
              {product.status === 'Pre-Book' && (
                <div className="space-y-4">
                  <button 
                    onClick={() => handleCheckout(true)}
                    disabled={isCheckingOut}
                    className="w-full bg-[#111] text-ivory font-subheading tracking-[0.3em] uppercase py-5 text-xs hover:bg-[#222] transition-colors flex justify-center items-center gap-3 disabled:opacity-50"
                  >
                    {isCheckingOut ? 'Processing...' : 'Reserve with 50% Deposit'}
                  </button>
                  <p className="text-center font-body text-[11px] text-charcoal/50 uppercase tracking-[0.2em]">Expected Shipping: 3-4 Weeks</p>
                </div>
              )}
              {product.status === 'Custom' && (
                <a href={`https://wa.me/1234567890?text=I am interested in customizing the ${product.name}`} target="_blank" rel="noopener noreferrer" className="flex w-full justify-center items-center bg-transparent border border-charcoal text-charcoal font-subheading tracking-[0.3em] uppercase py-5 text-xs hover:bg-charcoal hover:text-white transition-colors">
                  Consult on WhatsApp
                </a>
              )}
            </div>

            {/* Elegant Dropdown Accordions for Info */}
            <div className="pt-2">
              <div className="mb-10">
                <p className="font-body text-charcoal/70 leading-loose text-base tracking-wide">
                  {product.description}
                </p>
              </div>

              <div className="space-y-2">
                {/* Fabric & Care */}
                <div>
                  <button 
                    onClick={() => toggleSection('fabric-care')}
                    className="flex items-center justify-between w-full py-4 font-subheading tracking-[0.2em] text-[11px] uppercase text-charcoal hover:opacity-60 transition-opacity"
                  >
                    <span>Fabric & Care</span>
                    {expandedSection === 'fabric-care' ? <Minus size={12} className="text-charcoal/40" /> : <Plus size={12} className="text-charcoal/40" />}
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'fabric-care' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 font-body text-charcoal/60 text-sm leading-loose space-y-3">
                          <p><span className="text-charcoal font-medium mr-2">Fabric:</span> {product.fabric}</p>
                          <p><span className="text-charcoal font-medium mr-2">Care:</span> Strict dry clean only. Store in the provided muslin bag away from direct sunlight.</p>
                          <p><span className="text-charcoal font-medium mr-2">Craft:</span> Exclusively hand-embroidered by master artisans in Chandni Chowk, Delhi.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Shipping & Returns */}
                <div>
                  <button 
                    onClick={() => toggleSection('shipping')}
                    className="flex items-center justify-between w-full py-4 font-subheading tracking-[0.2em] text-[11px] uppercase text-charcoal hover:opacity-60 transition-opacity"
                  >
                    <span>Shipping & Returns</span>
                    {expandedSection === 'shipping' ? <Minus size={12} className="text-charcoal/40" /> : <Plus size={12} className="text-charcoal/40" />}
                  </button>
                  <AnimatePresence>
                    {expandedSection === 'shipping' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 font-body text-charcoal/60 text-sm leading-loose">
                          <p>We provide complimentary secure shipping worldwide. Please allow standard lead times for all crafted pieces. Custom orders are final sale and cannot be returned or exchanged. For ready-to-ship items, you may initiate a return within 7 days of delivery.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Seamless Transition to Dark */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent relative z-20"></div>

      {/* Cinematic Dark Theme - Curated Pairings */}
      <section className="bg-[radial-gradient(circle_at_center,#4A0D15_0%,#2D060A_50%,#110204_100%)] relative overflow-hidden pb-16 pt-20 text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] z-0 pointer-events-none"></div>
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
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-burgundy/30 blur-[100px] rounded-full"></div>
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-gold/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-4 h-4 bg-gold shadow-[0_0_20px_#d4af37] rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-[30%] right-[5%] w-[2px] h-[200px] bg-gradient-to-t from-transparent via-gold/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center flex flex-col items-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <SubtleIcon className="text-gold opacity-70 w-4 h-4" />
              <h2 className="font-heading text-4xl mt-1 text-gold tracking-wide drop-shadow-md">Curated Pairings</h2>
              <SubtleIcon className="text-gold opacity-70 w-4 h-4" />
            </div>
            <p className="font-subheading text-[10px] tracking-[0.3em] uppercase text-ivory/60">Complete the Look</p>
          </div>

          <SmoothCarousel>
            {[...PRODUCTS.filter(p => p.id !== product.id).slice(0, 6), ...PRODUCTS.filter(p => p.id !== product.id).slice(0, 6)].map((relatedItem, idx) => (
              <ProductCard key={idx} {...relatedItem} theme="dark" variant="catalog" />
            ))}
          </SmoothCarousel>
        </div>
      </section>
    </>
  );
}
