import os
import re

base_dir = r"d:\shukrana\src"

def add_lazy_loading(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find <img ... > and inject loading="lazy" if not present
    def replacer(match):
        img_tag = match.group(0)
        if 'loading=' in img_tag:
            return img_tag
        if 'kenburns' in img_tag or 'heroSlides' in img_tag:
            return img_tag # Keep hero eager
        # Insert loading="lazy" before the closing /> or >
        if img_tag.endswith('/>'):
            return img_tag[:-2] + ' loading="lazy" />'
        elif img_tag.endswith('>'):
            return img_tag[:-1] + ' loading="lazy" >'
        return img_tag

    new_content = re.sub(r'<img[^>]+>', replacer, content)

    # For Home.tsx, isolate HeroSection
    if file_path.endswith('Home.tsx'):
        start_idx = new_content.find('export default function Home() {')
        if start_idx != -1:
            state_str = """  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      titleLine1: "The Royal",
      titleLine2: "Suits",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20traditional%20suit%20salwar%20burgundy%20gold%20studio%20lighting%20centered?width=1200&height=1800&nologo=true&seed=814"
    },
    {
      titleLine1: "Timeless",
      titleLine2: "Elegance",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20zardozi%20anarkali%20suit%20emerald%20green%20gold%20studio%20lighting?width=1200&height=1800&nologo=true&seed=142"
    },
    {
      titleLine1: "Heritage",
      titleLine2: "Weaves",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20banarasi%20silk%20suit%20salwar%20royal%20blue%20gold%20studio%20lighting?width=1200&height=1800&nologo=true&seed=991"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);"""
            
            new_content = new_content.replace(state_str, "")
            
            hero_comp = """
const HeroSection = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      titleLine1: "The Royal",
      titleLine2: "Suits",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20traditional%20suit%20salwar%20burgundy%20gold%20studio%20lighting%20centered?width=1200&height=1800&nologo=true&seed=814"
    },
    {
      titleLine1: "Timeless",
      titleLine2: "Elegance",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20zardozi%20anarkali%20suit%20emerald%20green%20gold%20studio%20lighting?width=1200&height=1800&nologo=true&seed=142"
    },
    {
      titleLine1: "Heritage",
      titleLine2: "Weaves",
      image: "https://image.pollinations.ai/prompt/high%20fashion%20editorial%20indian%20womens%20model%20banarasi%20silk%20suit%20salwar%20royal%20blue%20gold%20studio%20lighting?width=1200&height=1800&nologo=true&seed=991"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
"""
            section_start = new_content.find('<section id="hero-section"')
            section_end = new_content.find('{/* Featured Collections */}', section_start)
            
            if section_start != -1 and section_end != -1:
                section_content = new_content[section_start:section_end]
                hero_comp_full = hero_comp + "    " + section_content.strip() + "\n  );\n};\n\n"
                
                final_content = new_content[:new_content.find('export default function Home')] + hero_comp_full + new_content[new_content.find('export default function Home'):section_start] + "      <HeroSection />\n\n\n      " + new_content[section_end:]
                new_content = final_content

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")

for root, _, files in os.walk(base_dir):
    for f in files:
        if f.endswith('.tsx'):
            add_lazy_loading(os.path.join(root, f))
