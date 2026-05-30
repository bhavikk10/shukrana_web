const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Hero Slides
content = content.replace("https://picsum.photos/seed/hero1/800/1000", "https://image.pollinations.ai/prompt/luxurious%20indian%20bridal%20lehenga%20gold%20embroidery%20model%20palace%20background?width=800&height=1000&nologo=true&seed=1");
content = content.replace("https://picsum.photos/seed/hero2/800/1000", "https://image.pollinations.ai/prompt/elegant%20indian%20saree%20silk%20royal%20model?width=800&height=1000&nologo=true&seed=2");
content = content.replace("https://picsum.photos/seed/hero3/800/1000", "https://image.pollinations.ai/prompt/indian%20traditional%20mens%20sherwani%20royal%20wedding?width=800&height=1000&nologo=true&seed=3");

// Curated Edits
content = content.replace("https://picsum.photos/seed/fest/600/800", "https://image.pollinations.ai/prompt/festival%20indian%20kurta%20traditional?width=600&height=800&nologo=true&seed=4");
content = content.replace("https://picsum.photos/seed/wed/600/800", "https://image.pollinations.ai/prompt/indian%20wedding%20guest%20outfit%20lehenga?width=600&height=800&nologo=true&seed=5");
content = content.replace("https://picsum.photos/seed/every/600/800", "https://image.pollinations.ai/prompt/everyday%20elegance%20indian%20kurta%20cotton?width=600&height=800&nologo=true&seed=6");
content = content.replace("https://picsum.photos/seed/bridal/600/800", "https://image.pollinations.ai/prompt/bridal%20heavy%20lehenga%20indian%20wedding?width=600&height=800&nologo=true&seed=7");
content = content.replace("https://picsum.photos/seed/evening/600/800", "https://image.pollinations.ai/prompt/evening%20indian%20anarkali%20gown%20party?width=600&height=800&nologo=true&seed=8");

// Map for other seeds
let seedCounter = 9;
const replacePicsum = (text, typeLabel) => {
    let replacedText = text;
    let match;
    const regex = /https:\/\/picsum\.photos\/seed\/[^"]+/g;
    while ((match = regex.exec(text)) !== null) {
        replacedText = replacedText.replace(match[0], `https://image.pollinations.ai/prompt/indian%20traditional%20${typeLabel}%20outfit%20model?width=600&height=800&nologo=true&seed=${seedCounter++}`);
    }
    return replacedText;
}

content = replacePicsum(content, "clothes");

fs.writeFileSync('src/pages/Home.tsx', content);
console.log("Replaced image URLs!");
