export interface ProductType {
  id: string;
  name: string;
  fabric: string;
  silhouette: string;
  occasion: string;
  price: string;
  status: 'In Stock' | 'Pre-Book' | 'Custom';
  image: string;
  images: string[];
  description: string;
  color?: string;
  craft?: string;
}

const generateDescription = (name: string, fabric: string, silhouette: string, occasion: string) => {
  return `Immerse yourself in the breathtaking elegance of the ${name}, a masterpiece meticulously designed for your unforgettable moments. Crafted from the finest ${fabric}, this exquisite ${silhouette} drapes effortlessly, creating a regal aura that honors traditional Indian artistry. Every single thread has been thoughtfully woven by masterful artisans who poured their heritage into this creation, ensuring it transcends mere fashion to become a cherished heirloom. Distinctive accents and an impeccable silhouette ensure you command attention at any ${occasion}. Experience the pinnacle of luxury couture, where every meticulous detail celebrates your profound beauty, eternal grace, and timeless appeal.`;
};

const imagesOptions = [
  '/assets/IMG_2081.PNG',
  '/assets/IMG_2082.PNG',
  '/assets/Screenshot 2026-06-02 234727.png',
  '/assets/Screenshot 2026-06-02 234826.png',
  '/assets/830cc782-db63-4ddd-a81b-986fdc222f89.JPG',
  '/assets/IMG_2079.PNG',
  '/assets/IMG_2081.PNG',
  '/assets/IMG_2082.PNG',
  '/assets/Screenshot 2026-06-02 234727.png',
  '/assets/Screenshot 2026-06-02 234826.png'
];

const occasions = ['Signature Traditional Ensembles', 'Festival Edit', 'Evening Soirée', 'Elegant Gatherings', 'Everyday Elegance'];
const silhouettes = ['Anarkalis', 'Lehengas', 'Sarees', 'Suit Sets', 'Sharara Sets', 'Kaftans', 'Co-ord Sets', 'Sitara Gowns'];
const fabrics = ['Pure Silk', 'Handwoven Cotton', 'Organza Tissue', 'Flowy Georgette', 'Silk Velvet', 'Banarasi Satin', 'Meticulous Zardozi'];
const statuses: Array<'In Stock' | 'Pre-Book' | 'Custom'> = ['In Stock', 'Pre-Book', 'Custom'];
const prices = ['₹14,500', '₹18,900', '₹22,000', '₹16,500', '₹45,000', '₹12,500', '₹35,000', '₹55,000', '₹28,500', '₹65,000'];
const colors = ['Ivory & Champagne Cream', 'Vermilion & Crimson Red', 'Antique Gold & Ochre', 'Midnight Indigo & Royal Blue', 'Emerald & Sage Green'];
const crafts = ['Hand-done Zardozi Embroidery', 'Classic Gota Patti Work', 'Intricate Aari Needlework', 'Banarasi Katan Silk Weaves', 'Real Zari Tani Borders'];

const prefixNames = ['Aanya', 'Meher', 'Ruhani', 'Zoya', 'Tara', 'Ishana', 'Kavya', 'Diya', 'Suhana', 'Inaya', 'Naina', 'Amara', 'Rhea', 'Pari', 'Sia'];

const generatedProducts: ProductType[] = Array.from({ length: 45 }).map((_, i) => {
  const prefix = prefixNames[i % prefixNames.length];
  const silhouette = silhouettes[(i * 3) % silhouettes.length];
  const name = `${prefix} ${silhouette}`;
  const fabric = fabrics[(i * 5) % fabrics.length];
  const occasion = occasions[(i * 7) % occasions.length];
  const color = colors[(i * 11) % colors.length];
  const craft = crafts[(i * 13) % crafts.length];
  
  return {
    id: `generated-${i}`,
    name,
    fabric,
    silhouette,
    occasion,
    price: prices[i % prices.length],
    status: statuses[i % statuses.length],
    color,
    craft,
    image: imagesOptions[(i * 2) % imagesOptions.length],
    images: imagesOptions,
    description: generateDescription(name, fabric, silhouette, occasion)
  };
});

export const PRODUCTS: ProductType[] = [
  { id: 'gulnaar', name: 'Gulnaar Suit Set', fabric: 'Pure Chanderi Silk', silhouette: 'Suit Sets', occasion: 'Everyday Elegance', price: '₹14,500', status: 'In Stock', color: 'Ivory & Champagne Cream', craft: 'Banarasi Katan Silk Weaves', image: '/assets/830cc782-db63-4ddd-a81b-986fdc222f89.JPG', images: imagesOptions, description: generateDescription('Gulnaar Suit Set', 'Pure Chanderi Silk', 'Suit Sets', 'Everyday Elegance') },
  { id: 'zara', name: 'Zara Anarkali', fabric: 'Flowy Georgette', silhouette: 'Anarkalis', occasion: 'Elegant Gatherings', price: '₹18,900', status: 'Pre-Book', color: 'Vermilion & Crimson Red', craft: 'Hand-done Zardozi Embroidery', image: '/assets/IMG_2079.PNG', images: imagesOptions, description: generateDescription('Zara Anarkali', 'Flowy Georgette', 'Anarkalis', 'Elegant Gatherings') },
  { id: 'mehfil', name: 'Mehfil Kurta', fabric: 'Silk Velvet', silhouette: 'Suit Sets', occasion: 'Evening Soirée', price: '₹22,000', status: 'Custom', color: 'Antique Gold & Ochre', craft: 'Classic Gota Patti Work', image: '/assets/IMG_2081.PNG', images: imagesOptions, description: generateDescription('Mehfil Kurta', 'Silk Velvet', 'Suit Sets', 'Evening Soirée') },
  { id: 'riyasat', name: 'Riyasat Palazzo', fabric: 'Banarasi Satin', silhouette: 'Co-ord Sets', occasion: 'Festival Edit', price: '₹16,500', status: 'In Stock', color: 'Emerald & Sage Green', craft: 'Real Zari Tani Borders', image: '/assets/IMG_2082.PNG', images: imagesOptions, description: generateDescription('Riyasat Palazzo', 'Banarasi Satin', 'Co-ord Sets', 'Festival Edit') },
  { id: 'noor', name: 'Noor Lehenga', fabric: 'Pure Silk', silhouette: 'Lehengas', occasion: 'Signature Traditional Ensembles', price: '₹45,000', status: 'Pre-Book', color: 'Ivory & Champagne Cream', craft: 'Intricate Aari Needlework', image: '/assets/Screenshot 2026-06-02 234727.png', images: imagesOptions, description: generateDescription('Noor Lehenga', 'Pure Silk', 'Lehengas', 'Signature Traditional Ensembles') },
  { id: 'jashn', name: 'Jashn Saree', fabric: 'Organza Tissue', silhouette: 'Sarees', occasion: 'Elegant Gatherings', price: '₹12,500', status: 'In Stock', color: 'Midnight Indigo & Royal Blue', craft: 'Banarasi Katan Silk Weaves', image: '/assets/Screenshot 2026-06-02 234826.png', images: imagesOptions, description: generateDescription('Jashn Saree', 'Organza Tissue', 'Sarees', 'Elegant Gatherings') },
  ...generatedProducts
];
