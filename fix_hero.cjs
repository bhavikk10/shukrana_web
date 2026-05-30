const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// Section wrapper
content = content.replace(
  'className="relative min-h-[85svh] lg:min-h-screen w-full bg-[#3A0A12] overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 pb-8 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"',
  'className="relative min-h-[85svh] lg:min-h-screen w-full bg-burgundy overflow-hidden flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 -mt-[74px] pt-[96px] pb-4 z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"'
);

// Remove the absolute bg-[#5C121E] which is now redundant since parent is bg-burgundy
content = content.replace(
  '<div className="absolute inset-0 bg-[#5C121E] z-[-3]"></div>',
  ''
);

// Update heading
content = content.replace(
  'text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] text-[#FAF9F6]',
  'text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] text-ivory'
);

// Update subtitle paragraph
content = content.replace(
  'text-[#FAF9F6]/90 text-lg md:text-xl lg:text-2xl font-light italic leading-[1.8] md:pl-8',
  'text-ivory/90 text-base md:text-lg lg:text-xl font-light italic leading-[1.8] md:pl-6'
);

// Update drop cap sizes
content = content.replace(
  'text-[6.5rem] md:text-[7.5rem]',
  'text-[5.5rem] md:text-[6.5rem]'
);

// Update text sizes and brand colors
content = content.replace(/text-\[\#FAF9F6\]/g, 'text-ivory');
content = content.replace(/text-\[\#D4AF37\]/g, 'text-gold');
content = content.replace(/bg-\[\#D4AF37\]/g, 'bg-gold');

// Arch background
content = content.replace(/bg-\[\#2A050A\]/g, 'bg-[#3A0A12]'); // Changed to dark burgundy to retain the image arch contrast
content = content.replace(/from-\[\#D4AF37\]/g, 'from-gold');

fs.writeFileSync(file, content);
