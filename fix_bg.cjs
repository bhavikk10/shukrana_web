const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const frameBlockLight = `
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[0] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-[2px] border-r-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-[2px] border-l-[2px] border-gold"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[2px] border-r-[2px] border-gold"></div>
        </div>
`;

const frameBlockDark = `
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-20 grayscale"><ParallaxJaali /></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/20 z-[1] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[3px] border-l-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-[3px] border-r-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-[3px] border-l-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[3px] border-r-[3px] border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
          <div className="absolute inset-2 border border-gold/10"></div>
        </div>
`;

const frameBlockBrand = `
        {/* Stardust texture for silk grain */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[0] pointer-events-none"></div>
        {/* Outer Imperial Gold Frame */}
        <div className="absolute inset-4 md:inset-[1.5rem] lg:inset-8 border border-gold/15 z-[1] pointer-events-none hidden sm:block">
          <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-[2px] border-l-[2px] border-gold/60"></div>
          <div className="absolute -top-[1px] -right-[1px] w-12 h-12 border-t-[2px] border-r-[2px] border-gold/60"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-12 h-12 border-b-[2px] border-l-[2px] border-gold/60"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-[2px] border-r-[2px] border-gold/60"></div>
        </div>
`;

// Inject into Featured Collections (Light)
content = content.replace(
  '<section className="py-12 w-full relative bg-parchment overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none"></div>',
  '<section className="py-12 w-full relative bg-parchment overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none"></div>' + frameBlockLight
);

// Inject into Curated Edits (Dark Burgundy)
content = content.replace(
  '<section className="py-16 w-full relative bg-burgundy overflow-hidden border-b-2 border-gold/20">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-0 pointer-events-none"></div>',
  '<section className="py-16 w-full relative bg-burgundy overflow-hidden border-b-2 border-gold/20">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-0 pointer-events-none"></div>' + frameBlockDark
);

// Inject into Diary of the Loom (Charcoal)
content = content.replace(
  '<section className="py-20 relative z-20 border-t-4 border-b-4 border-double border-gold/40 overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[700px] bg-charcoal">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-[1] pointer-events-none mix-blend-multiply"></div>',
  '<section className="py-20 relative z-20 border-t-4 border-b-4 border-double border-gold/40 overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[700px] bg-charcoal">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-[1] pointer-events-none mix-blend-multiply"></div>' + frameBlockBrand
);

// Inject into New Arrivals (Light)
content = content.replace(
  '<section className="py-12 bg-parchment bg-mughal-arch border-y border-gold/20 relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none mix-blend-multiply"></div>',
  '<section className="py-12 bg-parchment bg-mughal-arch border-y border-gold/20 relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none mix-blend-multiply"></div>' + frameBlockLight
);

// Inject into Marquee (Emerald)
content = content.replace(
  '<section className="py-20 bg-emerald bg-damask-large relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,20,12,0.8)_100%)] z-0 pointer-events-none"></div>',
  '<section className="py-20 bg-emerald bg-damask-large relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,20,12,0.8)_100%)] z-0 pointer-events-none"></div>' + frameBlockBrand
);

// Inject into Journey (Light)
content = content.replace(
  '<section className="py-20 bg-parchment bg-raw-silk relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none mix-blend-multiply"></div>',
  '<section className="py-20 bg-parchment bg-raw-silk relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none mix-blend-multiply"></div>' + frameBlockLight
);

// Inject into Testimonials (Dark Burgundy)
content = content.replace(
  '<section className="py-24 relative bg-burgundy bg-damask-large text-gold overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-[1] pointer-events-none"></div>',
  '<section className="py-24 relative bg-burgundy bg-damask-large text-gold overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-[1] pointer-events-none"></div>' + frameBlockDark
);


fs.writeFileSync(file, content);
