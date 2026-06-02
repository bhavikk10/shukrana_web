import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, MessageCircle, Menu, Home, Layers, MapPin, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from './Footer';
import CursorEffects from './CursorEffects';

export default function Layout() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle active states
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-parchment bg-raw-silk">
      <CursorEffects />
      {/* Header */}
      <AnimatePresence>
        {isVisible && (
          <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="bg-charcoal/40 backdrop-blur-lg text-gold fixed top-0 left-0 right-0 z-50 shadow-lg border-b border-gold/30 h-[60px] md:h-[70px]"
          >
            {/* Fine 1px gold pinstripe at the bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/80 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between relative z-10 w-full">

              
              {/* Left Side: Mobile Hamburger & Desktop Nav */}
              <div className="flex-1 flex items-center justify-start">
                <button className="md:hidden text-gold hover:text-ivory transition-colors">
                  <Menu size={28} strokeWidth={1.5} />
                </button>
                <nav className="hidden md:flex items-center gap-10 font-subheading tracking-widest text-sm uppercase">
                  <Link to="/collections" className={`hover:text-ivory transition-colors relative group flex flex-col items-center ${isActive('/collections') ? 'text-gold' : ''}`}>
                    <span>Collections</span>
                    <span className={`absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-gold transition-opacity duration-300 shadow-[0_0_8px_rgba(212,175,55,0.8)] ${isActive('/collections') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                  </Link>
                  <Link to="/exhibitions" className={`hover:text-ivory transition-colors relative group flex flex-col items-center ${isActive('/exhibitions') ? 'text-gold' : ''}`}>
                    <span>Exhibitions</span>
                    <span className={`absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-gold transition-opacity duration-300 shadow-[0_0_8px_rgba(212,175,55,0.8)] ${isActive('/exhibitions') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                  </Link>
                  <Link to="/about" className={`hover:text-ivory transition-colors relative group flex flex-col items-center ${isActive('/about') ? 'text-gold' : ''}`}>
                    <span>About</span>
                    <span className={`absolute -bottom-3 w-1.5 h-1.5 rounded-full bg-gold transition-opacity duration-300 shadow-[0_0_8px_rgba(212,175,55,0.8)] ${isActive('/about') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                  </Link>
                </nav>
              </div>
              
              {/* Center Side: Logo */}
              <div className="flex-shrink-0 text-center">
                <Link to="/" className="block group">
                  <h1 className="font-heading text-2xl md:text-4xl tracking-[0.2em] md:tracking-widest text-ivory drop-shadow-md group-hover:text-gold transition-colors block -mr-[0.2em] md:-mr-0">SHUKRANA</h1>
                  <div className="flex items-center justify-center gap-1 md:gap-2 mt-1">
                    <div className="h-[1px] bg-gold/40 w-4 md:w-8"></div>
                    <p className="font-subheading text-[6px] md:text-[8px] tracking-[0.2em] md:tracking-[0.4em] text-gold/90 uppercase whitespace-nowrap">Wear Your Blessings</p>
                    <div className="h-[1px] bg-gold/40 w-4 md:w-8"></div>
                  </div>
                </Link>
              </div>

              {/* Right Side: Utilities */}
              <div className="flex-1 flex items-center justify-end gap-5 md:gap-8">
                <button className="hover:text-ivory transition-colors">
                  <Search size={22} strokeWidth={1.5} />
                </button>
                <button className="hover:text-ivory transition-colors relative">
                  <ShoppingBag size={22} strokeWidth={1.5} />
                  <span className="absolute -top-2 -right-2 bg-burgundy text-gold border border-gold text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-body shadow-md">0</span>
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-[60px] md:pt-[74px] pb-[70px] md:pb-0">
        <Outlet />
      </main>

      {/* Footer - Architectural Gate */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform bg-charcoal/40 backdrop-blur-lg border-t border-gold/30 h-[50px]"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
      >
        <div className="flex items-center justify-between px-8 h-full pb-1">
          <Link to="/" className="flex flex-col items-center justify-center transition-all duration-300">
            <Home 
              size={20} 
              strokeWidth={1.2} 
              style={{
                color: isActive('/') ? '#D4AF37' : 'rgba(245, 242, 235, 0.4)',
                filter: isActive('/') ? 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))' : 'none'
              }}
            />
          </Link>
          <Link to="/collections" className="flex flex-col items-center justify-center transition-all duration-300">
            <Layers 
              size={20} 
              strokeWidth={1.2} 
              style={{
                color: isActive('/collections') ? '#D4AF37' : 'rgba(245, 242, 235, 0.4)',
                filter: isActive('/collections') ? 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))' : 'none'
              }}
            />
          </Link>
          <Link to="/exhibitions" className="flex flex-col items-center justify-center transition-all duration-300">
            <MapPin 
              size={20} 
              strokeWidth={1.2} 
              style={{
                color: isActive('/exhibitions') ? '#D4AF37' : 'rgba(245, 242, 235, 0.4)',
                filter: isActive('/exhibitions') ? 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))' : 'none'
              }}
            />
          </Link>
          <Link to="/about" className="flex flex-col items-center justify-center transition-all duration-300">
            <BookOpen 
              size={20} 
              strokeWidth={1.2} 
              style={{
                color: isActive('/about') ? '#D4AF37' : 'rgba(245, 242, 235, 0.4)',
                filter: isActive('/about') ? 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.5))' : 'none'
              }}
            />
          </Link>
        </div>
      </div>

      {/* Floating Design Showcase Button */}
      <Link to="/design-showcase">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 bg-gold text-emerald p-5 rounded-full z-50 border-4 border-double border-emerald flex items-center justify-center group glow-gold cursor-pointer"
          aria-label="View Karigari Library"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-parchment bg-raw-silk text-emerald font-subheading tracking-widest text-xs px-4 py-2 border border-gold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
            View Karigari Library
          </span>
        </motion.div>
      </Link>
    </div>
  );
}
