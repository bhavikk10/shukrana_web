import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ExhibitionArchiveCarousel from '../components/ExhibitionArchiveCarousel';

const archiveImages1 = [
  'https://image.pollinations.ai/prompt/close%20up%20raw%20khadi%20silk%20textile%20with%20gold%20strands?width=1200&height=1600&nologo=true&seed=1',
  'https://image.pollinations.ai/prompt/intricate%20zari%20embroidery%20on%20burgundy%20velvet%20luxury%20fashion?width=1200&height=1600&nologo=true&seed=2',
  'https://image.pollinations.ai/prompt/antique%20gold%20jewelry%20detail%20on%20indian%20bridal%20couture?width=1200&height=1600&nologo=true&seed=3',
  ''
];

const archiveImages2 = [
  'https://image.pollinations.ai/prompt/heritage%20palace%20architecture%20arches%20rajasthan%20india?width=1200&height=1600&nologo=true&seed=4',
  'https://image.pollinations.ai/prompt/luxury%20indian%20handloom%20saree%20drape%20macro%20shot?width=1200&height=1600&nologo=true&seed=5',
  'https://image.pollinations.ai/prompt/close%20up%20gold%20details%20on%20traditional%20indian%20apparel?width=1200&height=1600&nologo=true&seed=6',
  ''
];

const archiveImages3 = [
  'https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20bridal%20couture%20detail?width=1200&height=1600&nologo=true&seed=14',
  'https://image.pollinations.ai/prompt/zardozi%20embroidery%20macro%20shot%20emerald%20green%20silk?width=1200&height=1600&nologo=true&seed=15',
  'https://image.pollinations.ai/prompt/royal%20indian%20wedding%20venue%20decor%20lights%20evening?width=1200&height=1600&nologo=true&seed=16',
  ''
];

export default function Exhibitions() {
  return (
    <div className="bg-black relative overflow-hidden text-[#FAF9F6] -mt-[74px]">
      <Helmet>
        <title>Exhibitions & Trunk Shows | Shukrana</title>
        <meta name="description" content="Experience Shukrana's royal Indian handloom and couture in your city. RSVP for our upcoming exhibitions and trunk shows." />
      </Helmet>

      {/* Decorative ultra-fine motifs background overlay (Jaali/Gold Dust) */}
      <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden opacity-5 mix-blend-screen flex justify-center items-center">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
         <div className="absolute top-[10%] left-[5%] w-[800px] h-[800px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 10 C150 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 50 10 100 10 Z\\' fill=\\'none\\' stroke=\\'%23D4AF37\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'2 8\\'/%3E%3C/svg%3E')] rotate-[-15deg] mix-blend-screen"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-[calc(8rem+74px)] pb-24 md:pt-[calc(12rem+74px)] md:pb-32 px-6 flex flex-col items-center justify-center min-h-[55vh] border-b-[0.5px] border-gold/40 bg-[radial-gradient(circle_at_center,#4A0D15_0%,#2D060A_50%,#110204_100%)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 -mt-[74px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] pointer-events-none z-0"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-0"></div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center z-0">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] border border-gold/20 rounded-full mix-blend-multiply pointer-events-none"></div>
          <div className="absolute top-[15%] right-[-5%] w-[400px] h-[400px] border border-gold/30 rounded-full mix-blend-multiply pointer-events-none"></div>
          <div className="absolute bottom-0 right-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent to-gold/40"></div>
          
          {/* New Additions */}
          <div className="absolute font-heading text-[180px] lg:text-[300px] text-white/[0.04] italic top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">Showcases</div>
          <div className="absolute w-[1800px] h-[1800px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 L100 50 L50 100 L0 50 Z\\' fill=\\'none\\' stroke=\\'%23d4af37\\' stroke-width=\\'0.1\\' stroke-dasharray=\\'4 4\\'/%3E%3C/svg%3E')] opacity-30 mix-blend-screen pointer-events-none select-none top-[-50%] left-[-20%] animate-[spin_240s_linear_infinite]"></div>

          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 0 C155 0 200 45 200 100 C200 155 155 200 100 200 C45 200 0 155 0 100 C0 45 45 0 100 0 Z\\' fill=\\'none\\' stroke=\\'%23D4AF37\\' stroke-width=\\'0.5\\' stroke-dasharray=\\'1 4\\'/%3E%3C/svg%3E')] opacity-[0.2] mix-blend-screen pointer-events-none select-none -rotate-12 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')] opacity-[0.06] mix-blend-screen pointer-events-none select-none translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="absolute left-[15%] top-[25%] w-2 h-2 rotate-45 bg-[#D4AF37]/40"></div>
          <div className="absolute right-[25%] bottom-[30%] w-3 h-3 rounded-full bg-[#111111]/20"></div>
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.05em] mb-4 md:mb-6 text-gold drop-shadow-sm uppercase leading-[1.1] md:leading-tight">
            Exhibitions <span className="italic block mt-2 text-[#FAF9F6] font-normal lowercase tracking-normal">& Showcases</span>
          </h1>
          <p className="font-body text-[#FAF9F6]/80 italic text-lg md:text-xl lg:text-2xl px-4 tracking-wide max-w-2xl mx-auto drop-shadow-sm">
            "A global tapestry of couture, bringing the craft of Old Delhi to the world’s grandest stages."
          </p>
        </motion.div>
      </section>

      {/* Upcoming Showcases (The Grand Showcase) */}
      <section className="py-32 relative z-10 bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Architectural elements for Upcoming Showcases */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute w-full h-[800px] top-0 left-0 bg-gradient-to-b from-[#110204] via-[#050505] to-[#050505]"></div>
          
          <div className="absolute top-[20%] left-[-15%] w-[1200px] h-[1200px] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.05] mix-blend-overlay rounded-full"></div>
          <div className="absolute -bottom-[20%] right-[-10%] w-[900px] h-[900px] rounded-full border-[1.5px] border-gold/10 mix-blend-screen"></div>
          <div className="absolute top-[40%] right-[10%] w-[1px] h-64 bg-gold/40"></div>
          <div className="absolute top-[45%] right-[5%] w-[1px] h-32 bg-gold/50"></div>
          <div className="absolute top-[5%] left-[5%] w-[200px] h-[200px] border border-gold/20 rounded-full"></div>
          
          {/* New Additions */}
          <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 30 C138 30 170 62 170 100 C170 138 138 170 100 170 C62 170 30 138 30 100 C30 62 62 30 100 30 Z\\' fill=\\'none\\' stroke=\\'%23D4AF37\\' stroke-width=\\'0.1\\' stroke-dasharray=\\'4 4\\'/%3E%3C/svg%3E')] opacity-30 mix-blend-screen"></div>
          <div className="absolute top-[30%] center w-full h-[1px] bg-gold/10"></div>
          <div className="absolute bottom-[20%] left-0 w-1/2 h-[1px] bg-gold/20"></div>
          <div className="absolute font-heading text-[120px] lg:text-[220px] text-white/[0.015] italic right-[-5%] top-[10%] pointer-events-none select-none whitespace-nowrap transform -rotate-90 origin-bottom-right">The Grand Showcase</div>
          
          {/* MORE WATERMARKS */}
          <div className="absolute font-heading text-[80px] lg:text-[140px] text-gold/[0.02] italic top-[20%] left-[-2%] pointer-events-none select-none whitespace-nowrap">Signature Pieces</div>
          <div className="absolute font-heading text-[60px] lg:text-[100px] text-gold/[0.015] italic bottom-[10%] right-[5%] pointer-events-none select-none whitespace-nowrap uppercase tracking-[0.2em]">Exhibition</div>
          <div className="absolute top-[10%] right-[30%] w-[600px] h-[600px] border-[0.5px] border-gold/10 rounded-full mix-blend-screen"></div>
          <div className="absolute top-[12%] right-[32%] w-[560px] h-[560px] border-[0.5px] border-gold/5 rounded-full border-dashed mix-blend-screen"></div>

          <div className="absolute top-[50%] right-[20%] w-[500px] h-[500px] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-screen opacity-[0.03] pointer-events-none select-none -rotate-45"></div>
          <div className="absolute top-[15%] left-[40%] h-[150px] w-[1px] bg-gold/30"></div>
          <div className="absolute top-[20%] left-[42%] w-1.5 h-1.5 rounded-full bg-gold"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* LEFT COLUMN: Large vertical image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[3/4] p-3 border-[1.5px] border-gold rounded-t-[140px] bg-black/20 shadow-2xl overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-2 border-[1px] border-gold/40 rounded-t-[132px] pointer-events-none z-10"></div>
                <img 
                  src="https://image.pollinations.ai/prompt/luxurious%20indian%20bridal%20lehenga%20raw%20silk%20embroidery%20detail?width=1200&height=1600&nologo=true&seed=8" 
                  alt="The Los Angeles Edit Showcase" 
                  className="w-full h-full object-cover rounded-t-[132px] grayscale-[15%]"
                  referrerPolicy="no-referrer"
                 loading="lazy" />
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Event metadata & RSVP Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="mb-12">
                <p className="font-subheading text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Upcoming Showcase</p>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#FAF9F6] mb-6 md:mb-8 leading-[1.1] md:leading-tight">The Los Angeles Edit</h2>
                
                <div className="space-y-5">
                  <div className="flex flex-col">
                    <span className="font-subheading text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">Venue</span>
                    <span className="font-heading text-xl md:text-2xl text-[#FAF9F6]">The Beverly Hills Hotel, The Crystal Ballroom</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-subheading text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">Dates</span>
                    <span className="font-body text-xl text-[#FAF9F6]">November 15th - 17th, 2026</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-subheading text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-1">Timing</span>
                    <span className="font-body text-xl text-[#FAF9F6]">11:00 AM to 7:00 PM (By Appointment)</span>
                  </div>
                </div>
              </div>

              {/* RSVP Form */}
              <div className="pt-8 border-t-[0.5px] border-gold/40">
                <p className="font-heading text-2xl mb-6 text-gold italic">Request an Invitation</p>
                <form className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <input type="text" placeholder="First Name" className="w-full bg-transparent border-b-[0.5px] border-gold/40 py-3 font-body text-[#FAF9F6] text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-[#FAF9F6]/40 placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[10px] placeholder:font-subheading" required />
                    </div>
                    <div className="flex-1">
                      <input type="text" placeholder="Last Name" className="w-full bg-transparent border-b-[0.5px] border-gold/40 py-3 font-body text-[#FAF9F6] text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-[#FAF9F6]/40 placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[10px] placeholder:font-subheading" required />
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b-[0.5px] border-gold/40 py-3 font-body text-[#FAF9F6] text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-[#FAF9F6]/40 placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[10px] placeholder:font-subheading" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number (Optional)" className="w-full bg-transparent border-b-[0.5px] border-gold/40 py-3 font-body text-[#FAF9F6] text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-[#FAF9F6]/40 placeholder:uppercase placeholder:tracking-[0.1em] placeholder:text-[10px] placeholder:font-subheading" />
                  </div>
                  <div className="pt-4">
                    <button type="button" className="w-full bg-gold text-charcoal font-subheading tracking-[0.2em] px-8 py-5 text-[11px] uppercase hover:bg-white transition-colors duration-500 shadow-md">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Double Border Transition */}
      <div className="w-full mx-auto flex flex-col gap-[2px]">
        <div className="h-[0.5px] w-full bg-gold/40"></div>
        <div className="h-[0.5px] w-full bg-gold/20"></div>
      </div>

      {/* SECTION 3: THE COUTURE ARCHIVE (PAST EXHIBITIONS) */}
      <section className="pt-24 pb-48 relative z-10 overflow-hidden bg-parchment text-charcoal border-t-[1px] border-b-[1px] border-gold/40 shadow-[inset_0_20px_50px_rgba(0,0,0,0.1)]">
        {/* Subtle Watermarks for Archive Section */}
        <div className="absolute inset-0 bg-parsi-gara-dense pointer-events-none mix-blend-multiply opacity-45 z-[0]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6)_0%,rgba(215,205,185,0.4)_100%)] z-[0] pointer-events-none"></div>
        {/* Decorative corner mandalas */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3Cpath d=\\'M50 5 L50 95 M5 50 L95 50M18 18 L82 82 M18 82 L82 18\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] -translate-x-1/2 -translate-y-1/2 z-[0]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 2\\'/%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'30\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3Cpath d=\\'M50 5 L50 95 M5 50 L95 50M18 18 L82 82 M18 82 L82 18\\' stroke=\\'%23000\\' stroke-width=\\'0.5\\'/%3E%3C/svg%3E')] translate-x-1/2 -translate-y-1/2 z-[0]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 4\\'/%3E%3C/svg%3E')] -translate-x-1/3 translate-y-1/3 z-[0]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'50\\' cy=\\'50\\' r=\\'45\\' fill=\\'none\\' stroke=\\'%23000\\' stroke-width=\\'1\\' stroke-dasharray=\\'2 4\\'/%3E%3C/svg%3E')] translate-x-1/3 translate-y-1/3 z-[0]"></div>
        
        {/* Additional decorative elements to fill white space */}
        <div className="absolute top-1/4 -right-16 w-80 h-80 opacity-[0.015] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z\\' fill=\\'%23000\\'/%3E%3C/svg%3E')] rotate-45 z-[0]"></div>
        <div className="absolute bottom-1/4 -left-16 w-80 h-80 opacity-[0.015] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z\\' fill=\\'%23000\\'/%3E%3C/svg%3E')] -rotate-45 z-[0]"></div>

        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[0] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-[2px] border-r-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[2px] border-r-[2px] border-gold"></div>
        </div>
        
        {/* New Additions */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[0]">
          <div className="absolute font-heading text-[200px] lg:text-[400px] text-charcoal/[0.015] italic left-[-15%] top-[10%] pointer-events-none select-none whitespace-nowrap transform rotate-[75deg] origin-top-left z-[0]">The Couture Archive</div>
          <div className="absolute font-heading text-[120px] lg:text-[200px] text-gold/[0.015] italic right-[10%] top-[80%] pointer-events-none select-none whitespace-nowrap z-[0]">Legacy</div>
          
          <div className="absolute font-heading text-[100px] lg:text-[180px] text-charcoal/[0.02] italic top-[45%] left-[-5%] pointer-events-none select-none whitespace-nowrap z-[0]">Exhibition Series</div>
          <div className="absolute top-[25%] right-0 w-[400px] h-[1px] bg-charcoal/10 z-[0]"></div>
          <div className="absolute top-[50%] left-[-10%] w-[600px] h-[600px] bg-[url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M100 10 L190 100 L100 190 L10 100 Z\\' fill=\\'none\\' stroke=\\'%23D4AF37\\' stroke-width=\\'0.1\\' stroke-dasharray=\\'2 8\\'/%3E%3C/svg%3E')] mix-blend-multiply opacity-50 z-[0]"></div>
          <div className="absolute left-[50%] top-0 h-full w-[1px] border-l border-dashed border-charcoal/5 z-[0]"></div>
          <div className="absolute top-[40%] right-[20%] w-[800px] h-[800px] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-multiply opacity-[0.05] pointer-events-none select-none rotate-12 z-[0]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4">Past Showcases</h2>
            <p className="font-subheading text-[10px] tracking-[0.3em] uppercase text-charcoal/60">A Glimpse Into Our Journey</p>
          </motion.div>

          {/* Exhibition I */}
          <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-0 mb-48">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full xl:w-4/12 flex flex-col justify-center order-2 xl:order-1 z-20 xl:pr-[5%]"
            >
              <div className="border-l-[1px] border-burgundy/30 pl-8 lg:pl-12 relative">
                {/* Stamp of Authenticity Medallion */}
                <div className="absolute -left-12 -top-12 w-32 h-32 opacity-[0.15] mix-blend-multiply pointer-events-none rotate-12">
                   <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#D4AF37" strokeWidth="0.5">
                     <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
                     <circle cx="50" cy="50" r="40" />
                     <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" strokeWidth="0.2" />
                     <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="6" className="font-subheading uppercase tracking-[0.2em]" fill="#D4AF37" transform="rotate(-45 50 50)">A Heritage Chronicle</text>
                   </svg>
                </div>
                
                <p className="font-subheading text-[10px] tracking-[0.3em] uppercase text-burgundy mb-4">Exhibition I</p>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy mb-4">The Regal Edit</h3>
                <div className="mb-8 space-y-1">
                  <p className="font-body text-charcoal/80 italic text-lg">New Delhi, India</p>
                  <p className="font-body text-charcoal/80 text-lg">Bikaner House</p>
                  <p className="font-subheading text-[10px] tracking-widest uppercase text-charcoal/60 pt-2">October 2024</p>
                </div>
                <p className="font-body text-charcoal/80 leading-relaxed text-sm md:text-base pr-4 first-letter:text-6xl first-letter:font-heading first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                  A breathtaking showcase of royal proportions, bringing the silken weaves of our heritage into a contemporary royal space. Guests explored delicate zari work, rich jewel-toned velvets, and the signature silhouettes that define Shukrana. 
                  This archival milestone marked our first deep exploration of the Mughal aesthetic translated for modern ceremonial dressing.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full xl:w-8/12 order-1 xl:order-2 pl-0 xl:pl-[5%]"
            >
              <ExhibitionArchiveCarousel images={archiveImages1} />
            </motion.div>
          </div>

          {/* Exhibition II */}
          <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-0 mt-32 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full xl:w-7/12 xl:pr-[5%]"
            >
              <ExhibitionArchiveCarousel images={archiveImages2} />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full xl:w-5/12 flex flex-col justify-center pl-0 xl:pl-[5%] z-20"
            >
              <div className="border-l-[1px] border-burgundy/30 pl-8 lg:pl-12 relative">
                
                {/* Stamp of Authenticity Medallion */}
                <div className="absolute -right-8 -bottom-16 w-40 h-40 opacity-[0.10] mix-blend-multiply pointer-events-none -rotate-[15deg]">
                   <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#D4AF37" strokeWidth="0.5">
                     <circle cx="50" cy="50" r="45" strokeDasharray="3 4" />
                     <circle cx="50" cy="50" r="35" strokeWidth="0.2" />
                     <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.1" />
                     <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="5" className="font-subheading uppercase tracking-[0.2em]" fill="#D4AF37" transform="rotate(-30 50 50)">A Heritage Chronicle</text>
                   </svg>
                </div>

                <p className="font-subheading text-[10px] tracking-[0.3em] uppercase text-burgundy mb-4">Exhibition II</p>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy mb-4">The Silk Route</h3>
                <div className="mb-8 space-y-1">
                  <p className="font-body text-charcoal/80 italic text-lg">Dubai, UAE</p>
                  <p className="font-body text-charcoal/80 text-lg">Jumeirah Mina A'Salam</p>
                  <p className="font-subheading text-[10px] tracking-widest uppercase text-charcoal/60 pt-2">March 2024</p>
                </div>
                <p className="font-body text-charcoal/80 leading-relaxed text-sm md:text-base pr-4 first-letter:text-6xl first-letter:font-heading first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                  A transcendent evening that brought classical handlooms to the global stage. 
                  Curated with precision, this edit highlighted master craftsmanship, bringing forward the intricate handwork of rural artisans in an elevated context. The collection redefined luxury traditional wear opulence for the international diaspora.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Exhibition III */}
          <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-0 mt-32 relative z-10 mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full xl:w-4/12 flex flex-col justify-center order-2 xl:order-1 z-20 xl:pr-[5%]"
            >
              <div className="border-l-[1px] border-burgundy/30 pl-8 lg:pl-12 relative">
                {/* Stamp of Authenticity Medallion */}
                <div className="absolute -left-12 -top-12 w-32 h-32 opacity-[0.15] mix-blend-multiply pointer-events-none rotate-45">
                   <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#D4AF37" strokeWidth="0.5">
                     <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
                     <circle cx="50" cy="50" r="40" />
                     <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" strokeWidth="0.2" />
                     <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="6" className="font-subheading uppercase tracking-[0.2em]" fill="#D4AF37" transform="rotate(-45 50 50)">The Artisan Collective</text>
                   </svg>
                </div>
                
                <p className="font-subheading text-[10px] tracking-[0.3em] uppercase text-burgundy mb-4">Exhibition III</p>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-burgundy mb-4">The Winter Courtyard</h3>
                <div className="mb-8 space-y-1">
                  <p className="font-body text-charcoal/80 italic text-lg">London, UK</p>
                  <p className="font-body text-charcoal/80 text-lg">The Dorchester</p>
                  <p className="font-subheading text-[10px] tracking-widest uppercase text-charcoal/60 pt-2">November 2023</p>
                </div>
                <p className="font-body text-charcoal/80 leading-relaxed text-sm md:text-base pr-4 first-letter:text-6xl first-letter:font-heading first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-line:uppercase first-line:tracking-widest">
                  An intimate unveiling of heavy zardozi and thick raw silks, tailored perfectly for the winter season. 
                  This showcase celebrated the warmth of Indian craftsmanship, pairing deep maroons and emeralds with the crisp London air. Guests experienced a bespoke fitting session, elevating the heritage to modern luxury.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full xl:w-8/12 order-1 xl:order-2 pl-0 xl:pl-[5%]"
            >
              <ExhibitionArchiveCarousel images={archiveImages3} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECION 4: PRIVATE GALLERY APPOINTMENT */}
      <section className="py-24 md:py-32 relative bg-black border-b-[0.5px] border-gold/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,13,21,0.4)_0%,rgba(0,0,0,1)_100%)] z-0 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="w-16 h-[1px] bg-gold/50 mx-auto mb-8"></div>
          <h2 className="font-heading text-3xl md:text-5xl text-gold mb-6 tracking-tight drop-shadow-md zardozi-shimmer">Private Curations</h2>
          <p className="font-body text-ivory/70 italic text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            For our most discerning patrons, we offer exclusive private viewings in your city. Experience the unhurried elegance of selecting your bespoke luxury suit and ensemble.
          </p>
          <a href="mailto:concierge@shukrana.com" className="inline-block border border-gold/50 text-gold font-subheading uppercase tracking-[0.2em] text-[10px] md:text-xs py-4 px-8 hover:bg-gold hover:text-black transition-colors">
            Contact the Concierge
          </a>
        </div>
      </section>
    </div>
  );
}

