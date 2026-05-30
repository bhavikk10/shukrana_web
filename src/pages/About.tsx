import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { SubtleIcon } from '../components/SubtleIcon';
import Divider from '../components/Divider';

export default function About() {
  return (
    <div className="w-full flex-col flex relative overflow-hidden bg-[#2C030B] -mt-[74px]">
      <Helmet>
        <title>Our Story | Shukrana</title>
        <meta name="description" content="Learn about Shukrana's journey from the historic textile hubs of India to the modern South Asian diaspora in the United States." />
      </Helmet>

      {/* 1. HERO CANVASSING */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-[74px] overflow-hidden">
        {/* Very dark radial gradient mapping to center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] z-0 pointer-events-none"></div>
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-6 xl:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-12 lg:mt-0">
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col pt-20 lg:pt-0"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-subheading text-[12px] tracking-[0.3em] uppercase text-[#D4AF37] m-0">An Imperial Odyssey</h2>
              <div className="h-[1px] w-12 bg-[#D4AF37]/60"></div>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#FAF9F6] leading-[1.1] md:leading-[1.1] mb-6 md:mb-8">
               From the Whispering Lanes<br className="hidden lg:block"/> of Old Delhi to the World.
            </h1>
            
            <p className="font-body text-[#FAF9F6]/80 text-lg md:text-xl leading-relaxed italic pr-0 lg:pr-12">
              Shukrana—meaning gratitude—was born from a deep yearning to bridge the gap between the master artisans of India and the modern South Asian diaspora. We believe that true luxury is not mass-produced; it is woven with patience, history, and a profound respect for the craft.
            </p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end pb-12 lg:pb-0"
          >
            {/* Mughal Arch Container */}
            <div className="relative w-full max-w-[420px] aspect-[2/3] lg:aspect-[3/4]">
               {/* 1.5px gold pinstripe border */}
               <div className="absolute inset-2 border-[1.5px] border-[#D4AF37]/60 rounded-t-[200px] z-10 pointer-events-none"></div>
               <img 
                 src="https://image.pollinations.ai/prompt/heritage%20indian%20palace%20architecture%20arches%20with%20royal%20textiles?width=800&height=1200&nologo=true&seed=22"
                 alt="Imperial Odyssey"
                 className="w-full h-full object-cover rounded-t-[200px] shadow-2xl"
                 referrerPolicy="no-referrer"
                loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOUBLE LINE GOLD DIVIDER TO TRANSITION BACKGROUND */}
      <div className="w-full relative z-20 flex flex-col items-center justify-center -mb-[2px]">
         <div className="h-[2px] w-full bg-[#D4AF37]/50"></div>
         <div className="h-[2px] w-full bg-[#D4AF37]/50 mt-1"></div>
      </div>

      {/* Lower Section with Antique Ivory Silk Background */}
      <div className="w-full bg-[#F7F4EB] text-[#222222] relative pb-32">
         {/* Texture */}
         <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none"></div>

         {/* 2. PILLARS ELIMINATION & STAGGERED LAYOUT */}
         <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
            {/* 1px vertical metallic gold hairline */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent transform -translate-x-1/2 pointer-events-none z-0 hidden lg:block"></div>

            {/* CHAPTER I */}
            <div className="flex flex-col lg:flex-row items-center mb-32 relative z-10">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 flex flex-col lg:pr-16 text-center lg:text-right items-center lg:items-end mb-12 lg:mb-0"
               >
                 <span className="font-heading text-8xl lg:text-[140px] leading-none text-[#2C030B] opacity-20 mb-[-2rem] lg:mb-[-4rem]">I</span>
                 <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C030B] mb-4 md:mb-6 relative z-10">The Ancestral Loom</h2>
                 <p className="font-body text-lg text-[#222222]/90 leading-[1.8] italic max-w-md">
                   Our journey begins in the vibrant chaos of Delhi’s wholesale markets and the historic textile hubs of Varanasi. Here, amidst the narrow, bustling lanes, we seek out pure silks, authentic zari, and heritage weaves that have been perfected over generations. We bypass the factories to sit directly with the weavers, listening to the rhythm of the handlooms.
                 </p>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 w-full lg:pl-16"
               >
                  <img 
                    src="https://image.pollinations.ai/prompt/soft%20focus%20indian%20weavers%20handloom%20silk%20threads%20golden%20light?width=800&height=600&nologo=true&seed=44" 
                    alt="The Ancestral Loom" 
                    className="w-full aspect-[4/3] object-cover shadow-xl border border-[#D4AF37]/20 relative z-10"
                   loading="lazy" />
               </motion.div>
            </div>

            {/* CHAPTER II */}
            <div className="flex flex-col lg:flex-row-reverse items-center mb-32 relative z-10">
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 flex flex-col lg:pl-16 text-center lg:text-left items-center lg:items-start mb-12 lg:mb-0"
               >
                 <span className="font-heading text-8xl lg:text-[140px] leading-none text-[#2C030B] opacity-20 mb-[-2rem] lg:mb-[-4rem]">II</span>
                 <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C030B] mb-4 md:mb-6 relative z-10">The Sacred Needle</h2>
                 <p className="font-body text-lg text-[#222222]/90 leading-[1.8] italic max-w-md">
                   Every garment we curate passes through the meticulous hands of local artisans. From the intricate zardozi embroidery to the delicate block prints, each piece is a testament to centuries-old craftsmanship. We honor the 'karigars' whose quiet devotion to the needle weaves tales of royalty into every silken thread.
                 </p>
               </motion.div>
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="lg:w-1/2 w-full lg:pr-16"
               >
                  <img 
                    src="https://image.pollinations.ai/prompt/close%20up%20zardozi%20embroidery%20needlework%20gold%20threads%20burgundy%20fabric?width=800&height=600&nologo=true&seed=55" 
                    alt="The Sacred Needle" 
                    className="w-full aspect-[4/3] object-cover shadow-xl border border-[#D4AF37]/20 relative z-10"
                   loading="lazy" />
               </motion.div>
            </div>

            {/* CHAPTER III */}
            <div className="flex flex-col items-center relative z-10">
               <span className="font-heading text-8xl lg:text-[140px] leading-none text-[#2C030B] opacity-20 mb-[-2rem]">III</span>
               <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C030B] mb-8 md:mb-12 relative z-10 text-center bg-[#F7F4EB] px-8">The Modern Palace</h2>
               
               <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 max-w-5xl w-full">
                  <div className="hidden md:flex w-1/4 aspect-[2/5] border border-[#D4AF37]/30 rounded-t-[100px] overflow-hidden relative opacity-60">
                     <div className="absolute inset-0 bg-[#D4AF37]/5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply opacity-50"></div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="md:w-2/4 text-center px-4"
                  >
                     <p className="font-body text-lg text-[#222222]/90 leading-[1.8] italic bg-[#F7F4EB] px-4">
                        Finally, each traditional ensemble and luxury suit crosses oceans to bring the raw majesty of Indian heritage to your doorstep. Our commitment is to ensure that the timeless elegance of the East finds a magnificent home in the contemporary wardrobes of the West.
                     </p>
                  </motion.div>

                  <div className="hidden md:flex w-1/4 aspect-[2/5] border border-[#D4AF37]/30 rounded-t-[100px] overflow-hidden relative opacity-60">
                     <div className="absolute inset-0 bg-[#D4AF37]/5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply opacity-50"></div>
                  </div>
               </div>
            </div>
         </section>

         {/* DIVIDER FOR SANCTUARY */}
         <div className="max-w-4xl mx-auto py-8">
            <Divider />
         </div>

         {/* 3. THE FOUNDER'S SANCTUARY */}
         <section className="relative z-10 pb-0">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center px-6">
               
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="relative mb-12 mt-4"
               >
                  {/* Large Editorial Mughal Arch Profile Window */}
                  <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-t-[200px] border-[2px] border-[#D4AF37]/60 p-2 relative shadow-2xl mx-auto bg-[#F7F4EB]">
                     <div className="w-full h-full rounded-t-[190px] overflow-hidden">
                       <img 
                         src="https://image.pollinations.ai/prompt/elegant%20indian%20woman%20founder%20designer%20studio%20portrait%20luxury%20fashion?width=800&height=1000&nologo=true&seed=88" 
                         alt="Founder Aisha Sharma" 
                         className="w-full h-full object-cover grayscale-[20%]"
                         referrerPolicy="no-referrer"
                        loading="lazy" />
                     </div>
                  </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="pb-24"
               >
                 <h2 className="font-heading text-3xl md:text-4xl text-[#2C030B] mb-2 z-10 relative">Aisha Sharma</h2>
                 <p className="font-subheading text-[#D4AF37] tracking-[0.2em] uppercase text-sm mb-10 z-10 relative">Founder & Creative Director</p>
                 
                 <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 relative z-10">
                   <p className="font-body text-xl md:text-2xl text-[#222222]/90 leading-[1.8] italic flex items-start md:items-center justify-center gap-4 text-center">
                     <span className="text-[#D4AF37] text-sm md:text-lg mt-2 md:mt-0 leading-none block shrink-0">♦</span>
                     <span>"I wanted to create a space where the diaspora could find the same level of opulence, quality, and service they would experience walking into a luxury boutique in South Delhi. Shukrana is my love letter to our heritage."</span>
                     <span className="text-[#D4AF37] text-sm md:text-lg mt-2 md:mt-0 leading-none block shrink-0">♦</span>
                   </p>
                 </div>
               </motion.div>
            </div>
         </section>
      </div>
      
      {/* 4. INTEGRATED CONTACT SECTOR: CONVERSE WITH THE MAISON */}
      <section className="w-full bg-[#2C030B] relative py-32 overflow-hidden">
         {/* Texture & Gradients */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,2,4,0.9)_100%)] z-0 pointer-events-none"></div>
         <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h3 className="font-subheading text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6">Private Inquiries</h3>
               <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl text-[#FAF9F6] mb-6 md:mb-8">Step Inside the Atelier</h2>
               <p className="font-body text-[#FAF9F6]/80 text-lg leading-[1.8] italic max-w-2xl mx-auto">
                  Whether commissioning a luxury suit, styling a bespoke silhouette, or locating an upcoming international showcase, our curators await your communication.
               </p>
            </motion.div>

            <motion.form 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-full max-w-3xl"
               onSubmit={(e) => e.preventDefault()}
            >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
                  {/* FIELD 1 */}
                  <div className="relative">
                     <label className="font-heading italic text-[#FAF9F6]/60 text-lg absolute -top-6 left-0 pointer-events-none">Your Given Name</label>
                     <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-[#D4AF37]/40 text-[#FAF9F6] focus:outline-none focus:border-[#D4AF37] pb-3 text-lg font-body transition-colors"
                     />
                  </div>

                  {/* FIELD 2 */}
                  <div className="relative">
                     <label className="font-heading italic text-[#FAF9F6]/60 text-lg absolute -top-6 left-0 pointer-events-none">Digital Correspondence (Email)</label>
                     <input 
                        type="email" 
                        required
                        className="w-full bg-transparent border-b border-[#D4AF37]/40 text-[#FAF9F6] focus:outline-none focus:border-[#D4AF37] pb-3 text-lg font-body transition-colors"
                     />
                  </div>
               </div>

               {/* FIELD 3 */}
               <div className="relative mb-16 mt-6">
                  <label className="font-heading italic text-[#FAF9F6]/60 text-lg absolute -top-6 left-0 pointer-events-none">The Nature of Inquiry</label>
                  <select 
                     required
                     defaultValue=""
                     className="w-full bg-transparent border-b border-[#D4AF37]/40 text-[#FAF9F6] focus:outline-none focus:border-[#D4AF37] pb-3 text-lg font-body transition-colors appearance-none cursor-pointer"
                  >
                     <option value="" disabled hidden></option>
                     <option value="bridal" className="bg-[#2C030B] text-[#FAF9F6]">Bespoke Suit Curation &amp; Traditional Wear Designing</option>
                     <option value="pret" className="bg-[#2C030B] text-[#FAF9F6]">Pret-A-Porter Sizing Guidance</option>
                     <option value="exhibition" className="bg-[#2C030B] text-[#FAF9F6]">Private Exhibition Booking</option>
                     <option value="press" className="bg-[#2C030B] text-[#FAF9F6]">Press & Maison Relations</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                     <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                  </div>
               </div>

               {/* FIELD 4 */}
               <div className="relative mb-20">
                  <label className="font-heading italic text-[#FAF9F6]/60 text-lg absolute -top-6 left-0 pointer-events-none">Share Your Vision / Message</label>
                  <textarea 
                     required
                     rows={3}
                     className="w-full bg-transparent border-b border-[#D4AF37]/40 text-[#FAF9F6] focus:outline-none focus:border-[#D4AF37] pb-3 text-lg font-body transition-colors resize-none"
                  ></textarea>
               </div>

               {/* SUBMIT BUTTON */}
               <div className="flex justify-center">
                  <button 
                     type="button" 
                     className="bg-transparent border-[1.5px] border-[#D4AF37] text-[#D4AF37] px-16 py-5 font-subheading tracking-[0.2em] uppercase text-sm hover:bg-[#D4AF37] hover:text-[#2C030B] transition-all duration-300"
                  >
                     Initiate Conversation
                  </button>
               </div>
            </motion.form>
         </div>
      </section>
    </div>
  );
}
