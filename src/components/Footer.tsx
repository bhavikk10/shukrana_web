import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-ivory relative overflow-hidden flex flex-col pt-16 md:pt-32 pb-14 md:pb-12 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      {/* 1. THE SILHOUETTE (Clean Minimal Geometric Border) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/30 z-20 pointer-events-none"></div>
      
      {/* Dramatic Background Elements like Hero Section */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-gold/40 rounded-full blur-[2px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-burgundy/60 rounded-full blur-[4px] animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-ivory/30 rounded-full blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* 3. THE "ROYAL DECREE" NEWSLETTER */}
        <div className="w-full max-w-2xl mb-16 md:mb-32 flex flex-col items-center text-center">
           <h3 className="font-heading text-3xl md:text-4xl text-ivory mb-4 md:mb-6 drop-shadow-md tracking-wide">Request an Invitation</h3>
           <p className="font-body text-ivory/70 text-sm md:text-base mb-8 md:mb-10">
             Receive private access to heritage drops, bespoke styling curations, and seasonal lookbooks.
           </p>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="w-full flex flex-col gap-8 items-center pt-4"
           >
             <form 
                className="w-full flex flex-col gap-8 items-center"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const input = form.elements.namedItem('email') as HTMLInputElement;
                  const button = form.elements.namedItem('submit-btn') as HTMLButtonElement;
                  if (input.value) {
                    button.disabled = true;
                    button.textContent = 'REQUESTED';
                    setTimeout(() => {
                      input.value = '';
                      button.textContent = 'SUBSCRIBE';
                      button.disabled = false;
                    }, 3000);
                  }
                }}
              >
                <div className="w-full max-w-md relative group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email address..." 
                    className="w-full bg-transparent border-b border-ivory/30 px-0 py-3 text-base font-body italic text-ivory placeholder:text-ivory/50 focus:outline-none focus:border-gold transition-colors text-center shadow-[0_1px_0_transparent] focus:shadow-[0_1px_10px_rgba(212,175,55,0.2)]"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-focus-within:w-full transition-all duration-700 ease-out"></div>
                </div>
                <button 
                  type="submit" 
                  name="submit-btn" 
                  className="relative overflow-hidden bg-transparent border border-gold text-gold font-subheading tracking-[0.2em] text-xs py-4 px-12 transition-all duration-500 hover:text-charcoal hover:border-gold group shadow-[0_0_15px_rgba(212,175,55,0)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] uppercase mt-2"
                >
                  <span className="relative z-10 block">SUBSCRIBE</span>
                  <div className="absolute inset-0 top-full bg-gold group-hover:top-0 transition-all duration-500 ease-out z-0"></div>
                </button>
             </form>
           </motion.div>
        </div>

        {/* 4. EXACT FOOTER NAVIGATION */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-10 md:gap-y-16 font-body tracking-[0.15em] text-[10px] md:text-xs uppercase mb-16 md:mb-32 text-center md:text-left">
          
          {/* COLUMN 1: THE PAGES */}
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start md:col-span-1">
            <h4 className="text-ivory/50 mb-1 md:mb-4 font-subheading tracking-[0.2em] text-[10px] md:text-xs">The Pages</h4>
            <Link to="/collections" className="text-ivory hover:text-gold transition-colors duration-300">Collections</Link>
            <Link to="/exhibitions" className="text-ivory hover:text-gold transition-colors duration-300">Exhibitions</Link>
            <Link to="/about" className="text-ivory hover:text-gold transition-colors duration-300">Our Story</Link>
            <Link to="/about" className="text-ivory hover:text-gold transition-colors duration-300">Contact Us</Link>
          </div>
          
          {/* COLUMN 2: CATEGORIES & EDITS */}
          <div className="flex flex-col items-center md:items-start md:col-span-2">
            <h4 className="text-ivory/50 mb-4 md:mb-8 font-subheading tracking-[0.2em] text-[10px] md:text-xs">Categories & Edits</h4>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6 text-center md:text-left">
              <Link to="/collections?category=silk" className="text-ivory hover:text-gold transition-colors duration-300">Pure Silk</Link>
              <Link to="/collections?category=cotton" className="text-ivory hover:text-gold transition-colors duration-300">Handwoven Cotton</Link>
              <Link to="/collections?category=organza" className="text-ivory hover:text-gold transition-colors duration-300">Organza Tissue</Link>
              <Link to="/collections?category=georgette" className="text-ivory hover:text-gold transition-colors duration-300">Flowy Georgette</Link>
              <Link to="/collections?category=pakistani" className="text-ivory hover:text-gold transition-colors duration-300">Pakistani Suits</Link>
              <Link to="/collections?category=coord-sets" className="text-ivory hover:text-gold transition-colors duration-300">Co-ord Sets</Link>
              <Link to="/collections?category=kaftan" className="text-ivory hover:text-gold transition-colors duration-300">Kaftans</Link>
              <Link to="/collections?category=party-wear" className="text-ivory hover:text-gold transition-colors duration-300">Party Wear</Link>
              <Link to="/collections?category=sharara" className="text-ivory hover:text-gold transition-colors duration-300">Sharara Sets</Link>
            </div>
          </div>

          {/* COLUMN 3: ASSISTANCE */}
          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-start md:col-span-1">
            <h4 className="text-ivory/50 mb-1 md:mb-4 font-subheading tracking-[0.2em] text-[10px] md:text-xs">Assistance</h4>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-ivory hover:text-gold transition-colors duration-300">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs">Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* 5. THE BRAND CREST (The Signature Close) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 font-subheading text-[10px] tracking-[0.2em] uppercase text-ivory/40 border-t border-ivory/10 pt-12">
          <span>&copy; {new Date().getFullYear()} Shukrana</span>
          <span className="text-gold tracking-[0.3em]">The Imperial Maison</span>
          <span>All Rights Reserved</span>
        </div>

      </div>
    </footer>
  );
};
