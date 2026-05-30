const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard bg classes with radial vignettes
content = content.replace(
  '<section className="py-12 w-full relative bg-raw-silk overflow-hidden">',
  '<section className="py-12 w-full relative bg-parchment overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none"></div>'
);

content = content.replace(
  '<section className="py-16 w-full relative bg-burgundy overflow-hidden border-b-2 border-gold/20">',
  '<section className="py-16 w-full relative bg-burgundy overflow-hidden border-b-2 border-gold/20">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-0 pointer-events-none"></div>'
);

content = content.replace(
  '<section className="py-20 relative z-20 border-t-4 border-b-4 border-double border-gold/40 overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[700px] bg-charcoal">',
  '<section className="py-20 relative z-20 border-t-4 border-b-4 border-double border-gold/40 overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[700px] bg-charcoal">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-[1] pointer-events-none mix-blend-multiply"></div>'
);

content = content.replace(
  '<section className="py-12 bg-parchment bg-raw-silk bg-mughal-arch border-y border-gold/20 relative overflow-hidden">',
  '<section className="py-12 bg-parchment bg-mughal-arch border-y border-gold/20 relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none mix-blend-multiply"></div>'
);

content = content.replace(
  '<section className="py-20 bg-emerald bg-damask-large relative overflow-hidden">',
  '<section className="py-20 bg-emerald bg-damask-large relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,20,12,0.8)_100%)] z-0 pointer-events-none"></div>'
);

content = content.replace(
  '<section className="py-20 bg-parchment bg-raw-silk relative overflow-hidden">',
  '<section className="py-20 bg-parchment bg-raw-silk relative overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.05)_100%)] z-0 pointer-events-none mix-blend-multiply"></div>'
);

content = content.replace(
  '<section className="py-24 relative bg-burgundy bg-damask-large text-gold overflow-hidden">',
  '<section className="py-24 relative bg-burgundy bg-damask-large text-gold overflow-hidden">\n        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,4,8,0.85)_100%)] z-[1] pointer-events-none"></div>'
);

fs.writeFileSync(file, content);
