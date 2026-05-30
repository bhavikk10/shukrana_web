import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { SubtleIcon } from '../components/SubtleIcon';
import Divider from '../components/Divider';

const patterns = [
  {
    name: "Mughal Jaali (Lattice)",
    id: "bg-mughal-jaali",
    desc: "Intricate, mathematically precise intersecting geometries traditionally carved into sandstone or marble.",
    bgColors: ["bg-emerald", "bg-burgundy", "bg-charcoal"],
    textColor: "text-gold"
  },
  {
    name: "Banarasi Kinkhwab",
    id: "bg-banarasi",
    desc: "A dense, heavy 'cloth of gold' pattern leaving minimal background visible, resembling woven floral vines.",
    bgColors: ["bg-burgundy", "bg-emerald", "bg-charcoal"],
    textColor: "text-gold"
  },
  {
    name: "Bandhani (Tie-Dye)",
    id: "bg-bandhani",
    desc: "A vast grid of tiny, clustered dots naturally forming larger diamond or circular frames.",
    bgColors: ["bg-charcoal", "bg-burgundy", "bg-emerald"],
    textColor: "text-gold"
  },
  {
    name: "Kanjivaram Muthu Kattam",
    id: "bg-kanjivaram-kattam",
    desc: "High-contrast, fine grid lines with tiny floating motifs (like pearls) sitting at the intersections.",
    bgColors: ["bg-emerald", "bg-burgundy", "bg-charcoal"],
    textColor: "text-gold"
  },
  {
    name: "Chikankari Shadow Work",
    id: "bg-chikankari",
    desc: "A very delicate, sheer, tone-on-tone creeping floral pattern acting almost as a ghosted texture.",
    bgColors: ["bg-parchment", "bg-ivory"],
    textColor: "text-charcoal"
  },
  {
    name: "Gota Patti Lattice",
    id: "bg-gota-patti",
    desc: "A textured pattern mimicking small, scattered diamond foil leaves floating perfectly in the background.",
    bgColors: ["bg-ivory", "bg-parchment"],
    textColor: "text-burgundy"
  },
  {
    name: "Ajrakh Geometric",
    id: "bg-ajrakh",
    desc: "Deeply symmetrical block prints featuring jewel-like medallions set in rich, dark tones.",
    bgColors: ["bg-burgundy", "bg-charcoal", "bg-emerald"],
    textColor: "text-gold"
  },
  {
    name: "Zardozi Royal Filigree",
    id: "bg-zardozi-dense",
    desc: "An incredibly fine, tightly woven mesh of interlocking geometric threads and micro-beads mimicking heavy metallic embroidery.",
    bgColors: ["bg-emerald", "bg-burgundy", "bg-charcoal"],
    textColor: "text-gold"
  },
  {
    name: "Kashida Micro Swirls",
    id: "bg-kashmiri-micro",
    desc: "A sprawling tapestry of ultra-fine curving vines and dots, inspired by the microscopic needlework of Kashmiri artisans.",
    bgColors: ["bg-burgundy", "bg-emerald"],
    textColor: "text-gold"
  },
  {
    name: "Meenakari Micro Hexagons",
    id: "bg-minakari-mesh",
    desc: "An extremely tight cellular gold mesh mimicking the fine wire-work walls used to hold crushed gemstones in Meenakari enamel.",
    bgColors: ["bg-charcoal", "bg-burgundy", "bg-emerald"],
    textColor: "text-gold"
  },
  {
    name: "Parsi Gara Botanical Mesh",
    id: "bg-parsi-gara-dense",
    desc: "Intricately overlapping and intertwining floral loops with severe density, representing the heavy thread-filled canvases of Parsi embroidery.",
    bgColors: ["bg-parchment", "bg-ivory"],
    textColor: "text-charcoal"
  },
  {
    name: "Zardozi Maharaja (Heavy)",
    id: "bg-zardozi-maharaja",
    desc: "An incredibly bold and heavy interlocking geometric zardozi mesh, taking inspiration from the densely embroidered royal courts.",
    bgColors: ["bg-emerald", "bg-burgundy", "bg-charcoal"],
    textColor: "text-gold"
  },
  {
    name: "Rajasthani Fortress Block",
    id: "bg-rajasthani-block",
    desc: "A bold, thick-lined geometric motif styled after the weighty and imposing block patterns carved into Rajputana stone.",
    bgColors: ["bg-burgundy", "bg-emerald"],
    textColor: "text-gold"
  },
  {
    name: "Temple Brass Carving",
    id: "bg-temple-brass",
    desc: "A dense, high-impact circular ring pattern with thick arcs, replicating heavy brass decorations found on traditional temple doors.",
    bgColors: ["bg-charcoal", "bg-burgundy", "bg-emerald"],
    textColor: "text-gold"
  }
];

export default function DesignShowcase() {
  return (
    <div className="flex flex-col relative w-full pt-20">
      <Helmet>
        <title>Karigari Motif Library | Shukrana</title>
      </Helmet>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 flex flex-col items-center relative z-10 px-6 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-6 mb-6">
          <SubtleIcon className="text-burgundy w-5 h-5" />
          <h1 className="font-heading text-4xl md:text-5xl text-burgundy drop-shadow-sm">Karigari Library</h1>
          <SubtleIcon className="text-burgundy w-5 h-5" />
        </div>
        <p className="font-body text-charcoal/80 text-lg italic leading-relaxed text-center">
          A showcase of bespoke background textures engineered through CSS, 
          directly inspired by the traditional craftsmanship of India.
        </p>
      </motion.div>

      {/* Showcase Showcase */}
      <div className="flex flex-col w-full border-t border-gold/40">
        {patterns.map((pattern, idx) => (
          <div key={pattern.id} className={`w-full relative shadow-inner overflow-hidden border-b-[8px] border-double border-gold/40`}>
            {/* The Pattern Display Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 min-h-[500px]">
              
              {/* Pattern Info Card */}
              <div className="bg-parchment/95 backdrop-blur-md p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gold/30 z-20 shadow-xl">
                <SubtleIcon className="text-gold w-6 h-6 mb-6" />
                <h2 className="font-heading text-4xl text-burgundy mb-4">{pattern.name}</h2>
                <p className="font-body text-charcoal/80 text-base italic leading-relaxed mb-6">
                  {pattern.desc}
                </p>
                <code className="font-mono text-xs bg-black/5 p-2 rounded text-emerald border border-gold/20 w-fit">
                  .{pattern.id}
                </code>
              </div>

              {/* Color Variations */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3">
                {pattern.bgColors.map((colorClass, i) => (
                  <div 
                    key={i} 
                    className={`${colorClass} ${pattern.id} relative flex flex-col items-center justify-center p-8 group min-h-[300px] md:min-h-full transition-all duration-700 hover:brightness-110`}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className={`border-2 border-current p-4 backdrop-blur-sm bg-black/5 ${pattern.textColor} shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100`}>
                      <p className="font-subheading text-[10px] tracking-widest uppercase text-center">
                        {colorClass.replace('bg-', '')} Base
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-charcoal text-parchment p-16 text-center">
        <h3 className="font-heading text-3xl mb-4">Select Your Favorite</h3>
        <p className="font-body text-parchment/70 italic text-sm">
          You can request me to replace the background of any section with one of these custom designs.
        </p>
      </div>

    </div>
  );
}
