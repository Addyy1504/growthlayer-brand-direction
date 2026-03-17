export interface BrandDirection {
  id: number;
  family: string;
  name: string;
  palette: string[];
  headingFont: string;
  bodyFont: string;
  pattern: string;
  bestFor: string;
  tags: string[];
  personality: string;
  description: string;
  idealIndustries: string[];
  keywords: string[];
  whyItWorks: string;
}

export const brandDirections: BrandDirection[] = [
  {
    id: 1,
    family: "Luxury Editorial",
    name: "Quiet Luxury Editorial",
    palette: ["#F5F1E8", "#C4B5A0", "#3E2723", "#2C2C2C"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "linen texture, fine grain, editorial lines",
    bestFor: "Luxury & Fashion",
    tags: ["luxury", "minimal", "premium", "editorial"],
    personality: "Expensive, calm, polished, timeless",
    description:
      "A restrained luxury direction built on creamy neutrals, rich browns, and editorial serif typography.\nIt feels refined and mature without being flashy, making it ideal for premium brands that want quiet confidence.",
    idealIndustries: ["Salons", "Fashion", "Boutique Hotels", "Luxury Personal Brands"],
    keywords: ["Elegant", "Editorial", "Sophisticated", "Refined"],
    whyItWorks:
      "Muted contrast and classic serif typography create immediate premium perception while keeping the system versatile across digital and print touchpoints."
  },
  {
    id: 2,
    family: "Earthy Organic",
    name: "Earthy Organic Modern",
    palette: ["#A8B89F", "#C97D60", "#E5D4C1", "#7A8450"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Manrope",
    pattern: "botanical linework, paper texture, organic curves",
    bestFor: "Wellness & Natural",
    tags: ["organic", "warm", "natural", "grounded"],
    personality: "Warm, grounded, natural, trustworthy",
    description:
      "An earthy, human-centered identity with soft clay tones and subtle botanical movement.\nIt feels calm and honest, perfect for brands that want to communicate care, sustainability, and emotional warmth.",
    idealIndustries: ["Skincare", "Wellness", "Cafes", "Sustainable Brands"],
    keywords: ["Natural", "Calm", "Trustworthy", "Grounded"],
    whyItWorks:
      "Earth-led palettes lower visual harshness and help brands feel approachable, rooted, and emotionally reassuring."
  },
  {
    id: 3,
    family: "Futuristic Tech",
    name: "Futuristic Clean Tech",
    palette: ["#0A1929", "#0091EA", "#B0BEC5", "#F5F7FA"],
    headingFont: "Space Grotesk",
    bodyFont: "Sora",
    pattern: "grid, glow, glassmorphism, soft gradients",
    bestFor: "Tech & Startups",
    tags: ["tech", "modern", "bold", "clean"],
    personality: "Smart, futuristic, efficient, innovative",
    description:
      "A sharp technology-first system built around cool blues, dark depth, and modern geometry.\nIt feels intelligent and efficient, helping innovative businesses look credible, advanced, and product-led.",
    idealIndustries: ["SaaS", "AI", "Automation", "EV", "Tech Startups"],
    keywords: ["Innovative", "Modern", "Precise", "Digital"],
    whyItWorks:
      "Geometric letterforms and cool-tone contrast immediately signal progress, logic, and product sophistication."
  },
  {
    id: 4,
    family: "Bold Gen Z",
    name: "Bold Minimal Street",
    palette: ["#000000", "#FFFFFF", "#CCFF00", "#FF003C"],
    headingFont: "Bebas Neue",
    bodyFont: "Montserrat",
    pattern: "poster blocks, oversized type, sharp cut layouts",
    bestFor: "Gen Z Brands",
    tags: ["bold", "gen z", "street", "youth"],
    personality: "Loud, edgy, energetic, memorable",
    description:
      "A high-contrast street-inspired identity designed to stop the scroll instantly.\nIt feels unapologetic, youthful, and disruptive, making it great for creator-led or culture-led brands.",
    idealIndustries: ["Apparel", "Creators", "Music", "Events"],
    keywords: ["Bold", "Youthful", "Disruptive", "Confident"],
    whyItWorks:
      "Extreme contrast and intense accent colors create fast recognition and a strong visual signature in crowded feeds."
  },
  {
    id: 5,
    family: "Feminine Soft",
    name: "Feminine Luxe Soft",
    palette: ["#F4E4E1", "#D5A6A1", "#A68A7C", "#FAF6F2"],
    headingFont: "Lora",
    bodyFont: "Montserrat",
    pattern: "soft gradients, satin feel, floral linework",
    bestFor: "Beauty & Bridal",
    tags: ["feminine", "luxury", "soft", "premium"],
    personality: "Elegant, intimate, soft, premium",
    description:
      "A graceful feminine system with warm blush tones, gentle contrast, and polished serif elegance.\nIt feels personal and high-touch, ideal for brands that want softness without losing a premium edge.",
    idealIndustries: ["Beauty", "Bridal", "Skincare", "Lifestyle Creators"],
    keywords: ["Soft", "Elegant", "Luxury", "Delicate"],
    whyItWorks:
      "Low-contrast warmth and elegant typography help beauty and lifestyle brands feel inviting, aspirational, and emotionally close."
  },
  {
    id: 6,
    family: "Corporate Premium",
    name: "Corporate Premium Blue",
    palette: ["#0D1B2A", "#1E3A8A", "#64748B", "#FFFFFF"],
    headingFont: "Libre Baskerville",
    bodyFont: "Inter",
    pattern: "clean grids, subtle dividers, geometric systems",
    bestFor: "B2B & Corporate",
    tags: ["corporate", "premium", "professional", "trust"],
    personality: "Professional, structured, trustworthy",
    description:
      "A polished business-forward identity grounded in navy, slate, and crisp white spacing.\nIt feels dependable and mature, making it ideal for brands that need authority more than trendiness.",
    idealIndustries: ["Consultants", "Healthcare", "Manufacturing", "B2B Services"],
    keywords: ["Trust", "Authority", "Reliable", "Structured"],
    whyItWorks:
      "Blue-led systems paired with classic structure quickly communicate stability, professionalism, and long-term credibility."
  },
  {
    id: 7,
    family: "Heritage Classic",
    name: "Modern Heritage Serif",
    palette: ["#800020", "#2D5016", "#F5F1E8", "#1A1A1A"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Work Sans",
    pattern: "engraved lines, borders, crest-inspired detailing",
    bestFor: "Legacy Brands",
    tags: ["heritage", "classic", "premium", "legacy"],
    personality: "Rich, credible, classic, elevated",
    description:
      "A heritage-driven identity with deep jewel tones and elegant serif structure.\nIt balances tradition and polish beautifully, making old-world cues feel more relevant and intentional.",
    idealIndustries: ["Law", "Architecture", "Premium Food", "Legacy Businesses"],
    keywords: ["Legacy", "Trust", "Distinguished", "Established"],
    whyItWorks:
      "Rich color depth and classical typography suggest history, expertise, and brand permanence."
  },
  {
    id: 8,
    family: "Playful Pop",
    name: "Playful Pop Brand",
    palette: ["#FFB299", "#4ECDC4", "#FFE66D", "#FF6B6B"],
    headingFont: "Montserrat",
    bodyFont: "Nunito",
    pattern: "blobs, doodles, rounded shapes, sticker accents",
    bestFor: "Youth & Food",
    tags: ["playful", "friendly", "bright", "social"],
    personality: "Cheerful, approachable, lively, social",
    description:
      "A fun and friendly identity built for brands that want instant warmth and energy.\nIt feels expressive and highly shareable, which makes it especially strong for youth-focused and social-first businesses.",
    idealIndustries: ["Food", "Kids", "Creators", "Youth Brands"],
    keywords: ["Fun", "Bright", "Friendly", "Energetic"],
    whyItWorks:
      "Rounded forms and happy color relationships help brands feel more open, memorable, and easy to engage with."
  },
  {
    id: 9,
    family: "Modern Minimal",
    name: "Monochrome Design-Led",
    palette: ["#000000", "#FFFFFF", "#333333", "#E5E5E5"],
    headingFont: "Inter",
    bodyFont: "Inter",
    pattern: "grid lines, high-contrast spacing, minimal systems",
    bestFor: "Creative Studios",
    tags: ["minimal", "modern", "clean", "design-led"],
    personality: "Sharp, modern, minimal, confident",
    description:
      "A stripped-back monochrome system where hierarchy, spacing, and structure do all the heavy lifting.\nIt feels intentional and highly design-aware, perfect for brands that want clarity to be their statement.",
    idealIndustries: ["Architecture", "Portfolio", "Design Studios", "Fashion"],
    keywords: ["Minimal", "Clean", "Precise", "Modern"],
    whyItWorks:
      "When the palette is restrained, the brand reads as more disciplined, modern, and visually self-assured."
  },
  {
    id: 10,
    family: "Wellness Calm",
    name: "Soft Wellness Minimal",
    palette: ["#F8F9FA", "#D4C5E2", "#B8C9C4", "#E3EDF5"],
    headingFont: "DM Serif Display",
    bodyFont: "Manrope",
    pattern: "soft gradients, watercolor haze, airy curves",
    bestFor: "Wellness",
    tags: ["calm", "gentle", "wellness", "soft"],
    personality: "Peaceful, healing, light, safe",
    description:
      "A quiet, airy wellness identity with misty tones and delicate visual softness.\nIt feels emotionally safe and nurturing, which is especially effective for healing, therapy, and self-care brands.",
    idealIndustries: ["Yoga", "Therapy", "Skincare", "Mindfulness"],
    keywords: ["Calm", "Soft", "Healing", "Peaceful"],
    whyItWorks:
      "Low-saturation colors and soft typographic rhythm reduce tension and create an environment of ease."
  },

  {
    id: 11,
    family: "Retro Revival",
    name: "Retro Revival Bold",
    palette: ["#E8A127", "#CC5803", "#5C4033", "#F5E6D3"],
    headingFont: "DM Serif Display",
    bodyFont: "Work Sans",
    pattern: "retro stripes, grain texture, vintage badges",
    bestFor: "Cafes & Lifestyle",
    tags: ["retro", "warm", "expressive", "nostalgic"],
    personality: "Nostalgic, warm, expressive, fun",
    description:
      "A throwback-inspired identity with caramel warmth, bold personality, and crafted charm.\nIt feels human and memorable, ideal for brands that want familiarity, storytelling, and emotional texture.",
    idealIndustries: ["Cafes", "Packaging", "Lifestyle Brands", "Beverages"],
    keywords: ["Retro", "Warm", "Crafted", "Authentic"],
    whyItWorks:
      "Nostalgic cues tap into comfort and familiarity, giving brands more emotional recall and personality."
  },
  {
    id: 12,
    family: "Opulent Glam",
    name: "Opulent Modern Glam",
    palette: ["#000000", "#F5F5F0", "#4A0E4E", "#B8860B"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "marble, metallic accents, luxe patterning",
    bestFor: "Luxury & Premium",
    tags: ["luxury", "glam", "dramatic", "elite"],
    personality: "Dramatic, elite, glamorous, refined",
    description:
      "A high-drama luxury direction with dark contrast, jewel-toned richness, and editorial elegance.\nIt feels aspirational and indulgent, ideal for brands that want to look unmistakably premium.",
    idealIndustries: ["Jewelry", "Fine Dining", "Premium Beauty", "Interiors"],
    keywords: ["Luxury", "Elite", "Dramatic", "Glamorous"],
    whyItWorks:
      "Strong contrast and precious-looking accents help brands signal exclusivity, taste, and premium service."
  },

  {
    id: 13,
    family: "Luxury Editorial",
    name: "Ivory Atelier",
    palette: ["#F8F5F0", "#D6C7B0", "#3B2F2F", "#1E1E1E"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "linen texture, soft editorial framing",
    bestFor: "Luxury Brands",
    tags: ["luxury", "editorial", "refined", "neutral"],
    personality: "Refined, soft, expensive, poised",
    description:
      "An elegant luxury identity built around ivory lightness and dark espresso grounding.\nIt feels composed and expensive, making it ideal for fashion, interiors, and boutique service brands.",
    idealIndustries: ["Fashion", "Salon", "Interiors", "Personal Brands"],
    keywords: ["Elegant", "Poised", "Soft", "Premium"],
    whyItWorks:
      "The palette feels elevated without being loud, while the serif-sans pairing keeps the system timeless and usable."
  },
  {
    id: 14,
    family: "Luxury Editorial",
    name: "Noir Linen",
    palette: ["#1A1A1A", "#F2EDE6", "#C9B8A6", "#5A4E46"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "grain, subtle texture, dark editorial blocks",
    bestFor: "Boutique Luxury",
    tags: ["luxury", "dark", "minimal", "editorial"],
    personality: "Dark, premium, composed, sharp",
    description:
      "A darker editorial luxury route with black depth and creamy contrast.\nIt feels mature, moody, and very high-end, especially for boutique experiences or premium hospitality.",
    idealIndustries: ["Boutique Hotels", "Luxury Retail", "Fine Dining", "Fashion"],
    keywords: ["Moody", "Sharp", "Premium", "Elegant"],
    whyItWorks:
      "Dark-led luxury systems feel exclusive and intentional, especially when softened with warm neutrals."
  },
  {
    id: 15,
    family: "Luxury Editorial",
    name: "Champagne Ledger",
    palette: ["#F5E6C8", "#BFA980", "#3B3B3B", "#FFFDF8"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "thin line dividers, gold-leaning editorial details",
    bestFor: "Hospitality & Premium Services",
    tags: ["luxury", "warm", "editorial", "premium"],
    personality: "Soft, elegant, polished, upscale",
    description:
      "A warm premium system inspired by champagne tones, clean surfaces, and editorial restraint.\nIt feels celebratory yet controlled, ideal for brands that want sophistication with a touch of glow.",
    idealIndustries: ["Hospitality", "Events", "Luxury Services", "Beauty"],
    keywords: ["Upscale", "Warm", "Polished", "Refined"],
    whyItWorks:
      "Soft metallic-adjacent tones help a brand feel elevated while staying approachable and visually balanced."
  },
  {
    id: 16,
    family: "Luxury Editorial",
    name: "Stone Reserve",
    palette: ["#EAE6DF", "#A89F94", "#2E2E2E", "#FCFAF7"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "stone texture, muted luxury surfaces",
    bestFor: "Architecture & Design",
    tags: ["luxury", "neutral", "minimal", "architectural"],
    personality: "Neutral, calm, understated, premium",
    description:
      "A stone-toned luxury direction that feels architectural, balanced, and quietly expensive.\nIt is ideal for brands that want depth and sophistication without looking decorative or over-styled.",
    idealIndustries: ["Architecture", "Interior Design", "Real Estate", "Luxury Studios"],
    keywords: ["Understated", "Calm", "Architectural", "Premium"],
    whyItWorks:
      "Neutral luxury works well for premium positioning because it relies on form, spacing, and material cues rather than visual noise."
  },
  {
    id: 17,
    family: "Luxury Editorial",
    name: "Espresso Silk",
    palette: ["#3B2F2F", "#C4A484", "#F8F1E4", "#1A1A1A"],
    headingFont: "Playfair Display",
    bodyFont: "Inter",
    pattern: "silk sheen, fabric-inspired softness",
    bestFor: "Premium Lifestyle",
    tags: ["luxury", "warm", "rich", "lifestyle"],
    personality: "Warm, rich, elegant, polished",
    description:
      "A tactile luxury route with deep espresso, creamy neutrals, and soft gold warmth.\nIt feels sensorial and refined, well suited for high-end lifestyle, salons, and boutique hospitality.",
    idealIndustries: ["Cafe", "Salon", "Lifestyle Brands", "Boutique Services"],
    keywords: ["Rich", "Warm", "Elegant", "Sensorial"],
    whyItWorks:
      "Warm dark neutrals make luxury feel more intimate and human while still preserving a premium finish."
  },

  {
    id: 18,
    family: "Earthy Organic",
    name: "Sage Soil",
    palette: ["#A3B18A", "#DAD7CD", "#588157", "#3A5A40"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Manrope",
    pattern: "botanical illustration, matte paper texture",
    bestFor: "Natural Wellness",
    tags: ["organic", "green", "calm", "grounded"],
    personality: "Natural, grounded, nourishing, trustworthy",
    description:
      "A green-led organic system with botanical depth and soft natural restraint.\nIt feels rooted and dependable, making it strong for skincare, wellness, and conscious product brands.",
    idealIndustries: ["Skincare", "Wellness", "Sustainable Brands", "Herbal Products"],
    keywords: ["Nature", "Grounded", "Trust", "Calm"],
    whyItWorks:
      "Layered greens communicate growth and care, while the neutral support tones keep the palette sophisticated."
  },
  {
    id: 19,
    family: "Earthy Organic",
    name: "Terracotta Bloom",
    palette: ["#D17A5D", "#F2E8DC", "#7F5539", "#C9A27E"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Manrope",
    pattern: "paper texture, sun-baked organic forms",
    bestFor: "Artisan Brands",
    tags: ["earthy", "warm", "artisan", "organic"],
    personality: "Warm, handmade, grounded, expressive",
    description:
      "A sun-warmed organic palette that feels artisanal, human, and culturally rich.\nIt works beautifully for brands that want warmth, creativity, and handcrafted character.",
    idealIndustries: ["Cafe", "Home Decor", "Ceramics", "Handmade Brands"],
    keywords: ["Warm", "Artisan", "Handmade", "Earthy"],
    whyItWorks:
      "Terracotta tones bring emotional warmth and tactility, which makes a brand feel more human and memorable."
  },
  {
    id: 20,
    family: "Earthy Organic",
    name: "Clay Ritual",
    palette: ["#B08968", "#EDE0D4", "#7F5539", "#3A2D2D"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Manrope",
    pattern: "organic shapes, subtle craft texture",
    bestFor: "Slow Living & Ritual",
    tags: ["earthy", "ritual", "soft", "grounded"],
    personality: "Soft, grounded, intentional, intimate",
    description:
      "A ritual-inspired earthy palette with deep clay tones and calm, crafted elegance.\nIt feels meditative and tactile, making it ideal for brands centered on routine, care, and slower living.",
    idealIndustries: ["Wellness", "Tea Brands", "Home Goods", "Ceramics"],
    keywords: ["Intentional", "Calm", "Crafted", "Grounded"],
    whyItWorks:
      "Soft clay palettes create a grounded atmosphere that helps brands feel thoughtful, tactile, and emotionally rich."
  },
  {
    id: 21,
    family: "Earthy Organic",
    name: "Olive Grove",
    palette: ["#66785F", "#D6D2C4", "#A68A64", "#2F3A2F"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Manrope",
    pattern: "leaf motifs, quiet natural textures",
    bestFor: "Food & Hospitality",
    tags: ["organic", "olive", "premium", "rustic"],
    personality: "Grounded, premium, rustic, calm",
    description:
      "A Mediterranean-inspired earthy identity that blends olive depth with creamy softness.\nIt feels grounded yet upscale, making it ideal for boutique food, hospitality, and natural product brands.",
    idealIndustries: ["Restaurants", "Olive Oil", "Farm-to-Table", "Hospitality"],
    keywords: ["Rustic", "Premium", "Natural", "Warm"],
    whyItWorks:
      "Olive-led palettes connect easily to food, nature, and premium craft while remaining visually mature."
  },
  {
    id: 22,
    family: "Earthy Organic",
    name: "Desert Linen",
    palette: ["#D8B08C", "#F5EDE1", "#8C5E3C", "#5B4636"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Manrope",
    pattern: "sand textures, sun-washed organic gradients",
    bestFor: "Lifestyle & Slow Brands",
    tags: ["earthy", "neutral", "warm", "minimal"],
    personality: "Warm, sun-washed, calm, refined",
    description:
      "A desert-inspired system with linen softness and warm natural depth.\nIt feels breathable and premium, especially for brands that want earthy minimalism rather than leafy wellness cues.",
    idealIndustries: ["Lifestyle", "Travel Brands", "Home Decor", "Creative Studios"],
    keywords: ["Sun-Washed", "Neutral", "Warm", "Refined"],
    whyItWorks:
      "This palette keeps the emotional comfort of earthy branding but pushes it toward a cleaner, more editorial expression."
  },

  {
    id: 23,
    family: "Futuristic Tech",
    name: "Neon Grid",
    palette: ["#0F172A", "#00F5D4", "#3A86FF", "#FFFFFF"],
    headingFont: "Space Grotesk",
    bodyFont: "Sora",
    pattern: "grid systems, neon edge glow",
    bestFor: "High-Growth Startups",
    tags: ["tech", "neon", "bold", "future"],
    personality: "Futuristic, energetic, sharp, intelligent",
    description:
      "A bright, high-performance tech identity built for products that want to feel fast and future-facing.\nIt combines dark digital space with sharp neon accents to create a highly memorable modern system.",
    idealIndustries: ["SaaS", "Web Apps", "AI Tools", "Developer Platforms"],
    keywords: ["Tech", "Sharp", "Future", "Performance"],
    whyItWorks:
      "Neon accents against dark bases create strong contrast and give the brand a distinctly digital-native personality."
  },
  {
    id: 24,
    family: "Futuristic Tech",
    name: "Midnight Circuit",
    palette: ["#020617", "#2563EB", "#22D3EE", "#E2E8F0"],
    headingFont: "Space Grotesk",
    bodyFont: "Sora",
    pattern: "glow lines, circuitry cues, dark depth",
    bestFor: "AI & Deep Tech",
    tags: ["tech", "dark", "premium", "precise"],
    personality: "Smart, precise, premium, advanced",
    description:
      "A darker deep-tech direction designed for brands that need intelligence and seriousness.\nIt feels sophisticated and product-led, making it stronger for advanced platforms than louder neon-first systems.",
    idealIndustries: ["AI", "Cybersecurity", "Analytics", "B2B Tech"],
    keywords: ["Precise", "Advanced", "Serious", "Digital"],
    whyItWorks:
      "Cool blue hierarchy and dark foundations suggest security, intelligence, and high technical capability."
  },
  {
    id: 25,
    family: "Futuristic Tech",
    name: "Silver Pulse",
    palette: ["#111827", "#94A3B8", "#E2E8F0", "#38BDF8"],
    headingFont: "Space Grotesk",
    bodyFont: "Sora",
    pattern: "glass surfaces, signal pulses, clean tech grids",
    bestFor: "Automation & Systems",
    tags: ["tech", "silver", "clean", "automation"],
    personality: "Efficient, cool, structured, modern",
    description:
      "A silver-blue tech system that feels cleaner and more operational than flashy futurism.\nIt is ideal for platforms that want to look reliable, automated, and advanced without becoming visually noisy.",
    idealIndustries: ["Automation", "Ops Platforms", "Dashboards", "EV Tech"],
    keywords: ["Efficient", "Structured", "Modern", "Reliable"],
    whyItWorks:
      "Metallic-adjacent grays and clean blue highlights help a product feel efficient, modern, and controlled."
  },
  {
    id: 26,
    family: "Futuristic Tech",
    name: "Cobalt Cloud",
    palette: ["#1D4ED8", "#DBEAFE", "#0F172A", "#93C5FD"],
    headingFont: "Space Grotesk",
    bodyFont: "Sora",
    pattern: "soft gradients, cloud-like motion, layered UI cards",
    bestFor: "Cloud & SaaS",
    tags: ["tech", "cloud", "clean", "saas"],
    personality: "Scalable, clean, intelligent, calm",
    description:
      "A lighter SaaS-friendly system that blends trustworthy blue with crisp, airy support tones.\nIt feels digital and product-first while remaining approachable enough for mainstream software brands.",
    idealIndustries: ["Cloud Tools", "SaaS", "B2B Platforms", "Productivity"],
    keywords: ["Scalable", "Clean", "Cloud", "Digital"],
    whyItWorks:
      "Cobalt and pale blue combinations create trust and modernity while keeping the interface visually breathable."
  },
  {
    id: 27,
    family: "Futuristic Tech",
    name: "Arctic Signal",
    palette: ["#E6F6FF", "#90E0EF", "#0077B6", "#03045E"],
    headingFont: "Space Grotesk",
    bodyFont: "Sora",
    pattern: "frosted transparency, cold signal lines",
    bestFor: "Advanced Innovation",
    tags: ["tech", "arctic", "clean", "innovation"],
    personality: "Cool, precise, innovative, fresh",
    description:
      "A cold, crisp futuristic system that feels highly modern and innovation-heavy.\nIt works well for brands that want a lighter, more clinical-tech mood rather than a dark developer look.",
    idealIndustries: ["Health Tech", "Innovation Labs", "Research Tools", "EV"],
    keywords: ["Cool", "Fresh", "Precise", "Innovative"],
    whyItWorks:
      "Frosty blue hierarchies feel advanced and modern while preserving clarity and trust."
  },

  {
    id: 28,
    family: "Bold Gen Z",
    name: "Acid Pop",
    palette: ["#000000", "#CCFF00", "#FF006E", "#FFFFFF"],
    headingFont: "Bebas Neue",
    bodyFont: "Montserrat",
    pattern: "poster graphics, chaotic blocks, punchy stickers",
    bestFor: "Culture-Led Brands",
    tags: ["bold", "acid", "youth", "edgy"],
    personality: "Loud, rebellious, punchy, high-energy",
    description:
      "A sharp youth-forward system made for brands that want maximum impact and instant attitude.\nIt feels disruptive and culturally plugged in, ideal for creators, drops, and brands targeting younger audiences.",
    idealIndustries: ["Creators", "Streetwear", "Events", "Music"],
    keywords: ["Loud", "Punchy", "Rebellious", "Youthful"],
    whyItWorks:
      "Acid accents and hot pink create a highly memorable clash that feels native to youth culture and modern hype design."
  },
  {
    id: 29,
    family: "Bold Gen Z",
    name: "Signal Riot",
    palette: ["#111111", "#FF5E00", "#00E5FF", "#F5F5F5"],
    headingFont: "Bebas Neue",
    bodyFont: "Montserrat",
    pattern: "urban cutouts, layered posters, rave-like energy",
    bestFor: "Events & Creative Drops",
    tags: ["bold", "street", "energetic", "creative"],
    personality: "Chaotic, expressive, electric, fearless",
    description:
      "A more chaotic youth system with strong orange-cyan contrast and urban energy.\nIt feels fast, expressive, and built for attention, especially for launch campaigns and event-heavy brands.",
    idealIndustries: ["Events", "Festivals", "Drops", "Creative Campaigns"],
    keywords: ["Electric", "Expressive", "Fast", "Fearless"],
    whyItWorks:
      "Oppositional accents create excitement and movement, which helps the identity feel alive and campaign-ready."
  },
  {
    id: 30,
    family: "Bold Gen Z",
    name: "Cobalt Punch",
    palette: ["#0B0B0B", "#0047FF", "#F4F4F4", "#FF3B30"],
    headingFont: "Bebas Neue",
    bodyFont: "Montserrat",
    pattern: "sharp stripes, high-contrast blocks, media crops",
    bestFor: "Creator Brands",
    tags: ["bold", "creator", "high-contrast", "digital"],
    personality: "Confident, sharp, modern, disruptive",
    description:
      "A creator-ready visual system with blue-red tension and aggressive clarity.\nIt feels personal, direct, and highly suited for online-first brands that thrive on fast impressions.",
    idealIndustries: ["Creators", "Content Brands", "Personal Brands", "Media"],
    keywords: ["Direct", "Sharp", "Modern", "Confident"],
    whyItWorks:
      "Heavy contrast and simple color structure help the brand scale well across thumbnails, social posts, and landing pages."
  },
  {
    id: 31,
    family: "Bold Gen Z",
    name: "Mono Hype",
    palette: ["#000000", "#FFFFFF", "#BDBDBD", "#FCEE09"],
    headingFont: "Bebas Neue",
    bodyFont: "Montserrat",
    pattern: "minimal posters, subtle grunge, hype-led spacing",
    bestFor: "Fashion & Drops",
    tags: ["bold", "minimal", "hype", "street"],
    personality: "Confident, stripped-back, youthful, cool",
    description:
      "A cleaner youth identity that leans more on hype minimalism than color chaos.\nIt feels controlled but still edgy, which makes it ideal for fashion-led brands and limited drops.",
    idealIndustries: ["Fashion", "Streetwear", "Sneaker Brands", "Drops"],
    keywords: ["Cool", "Hype", "Minimal", "Youth"],
    whyItWorks:
      "A mostly monochrome base with one energetic accent makes the system feel modern, scalable, and culturally sharp."
  },
  {
    id: 32,
    family: "Bold Gen Z",
    name: "Cherry Static",
    palette: ["#121212", "#FFFFFF", "#D90429", "#8D99AE"],
    headingFont: "Bebas Neue",
    bodyFont: "Montserrat",
    pattern: "static overlays, poster tears, distressed edge details",
    bestFor: "Youth Media",
    tags: ["bold", "dark", "media", "urban"],
    personality: "Raw, sharp, intense, memorable",
    description:
      "A darker youth-media route with cherry red pressure and a slightly distressed visual mood.\nIt feels more serious and underground than playful, making it strong for edgy content or entertainment brands.",
    idealIndustries: ["Youth Media", "Music", "Film", "Creative Collectives"],
    keywords: ["Raw", "Intense", "Urban", "Memorable"],
    whyItWorks:
      "Red on dark grounds creates urgency and edge, while gray support tones prevent the identity from feeling one-note."
  },

  {
    id: 33,
    family: "Feminine Soft",
    name: "Rose Veil",
    palette: ["#FADADD", "#D8A7B1", "#A26769", "#FFF1F2"],
    headingFont: "Lora",
    bodyFont: "Montserrat",
    pattern: "floral linework, soft tonal fades",
    bestFor: "Beauty",
    tags: ["feminine", "soft", "beauty", "romantic"],
    personality: "Soft, romantic, graceful, warm",
    description:
      "A romantic beauty direction with rose tones, warm depth, and soft feminine elegance.\nIt feels intimate and polished, ideal for brands that want emotional warmth with a premium edge.",
    idealIndustries: ["Beauty", "Skincare", "Bridal", "Lifestyle"],
    keywords: ["Romantic", "Soft", "Graceful", "Warm"],
    whyItWorks:
      "Rose-led palettes create emotional closeness while the darker support tones stop the system from feeling overly sweet."
  },
  {
    id: 34,
    family: "Feminine Soft",
    name: "Pearl Bloom",
    palette: ["#F7F3EE", "#E7CFC4", "#B08988", "#8D6E63"],
    headingFont: "Lora",
    bodyFont: "Montserrat",
    pattern: "pearl sheen, soft gradients, airy feminine textures",
    bestFor: "Luxury Beauty",
    tags: ["feminine", "luxury", "soft", "elegant"],
    personality: "Elegant, calm, delicate, polished",
    description:
      "A softer premium feminine system built on pearl neutrals and blush warmth.\nIt feels elevated and gentle rather than overtly glam, which makes it versatile across beauty and personal brands.",
    idealIndustries: ["Beauty Clinics", "Luxury Beauty", "Personal Brands", "Wellness"],
    keywords: ["Pearl", "Elegant", "Soft", "Premium"],
    whyItWorks:
      "The palette feels graceful and premium without becoming high-drama, which helps it stay sophisticated across many touchpoints."
  },
  {
    id: 35,
    family: "Feminine Soft",
    name: "Dusty Muse",
    palette: ["#E8D7E1", "#BFA2B8", "#7D5A6C", "#FAF7FA"],
    headingFont: "Lora",
    bodyFont: "Montserrat",
    pattern: "misty overlays, poetic spacing, airy details",
    bestFor: "Creative Feminine Brands",
    tags: ["feminine", "creative", "soft", "editorial"],
    personality: "Poetic, delicate, thoughtful, feminine",
    description:
      "A moodier feminine direction with dusty mauves and a more artistic emotional tone.\nIt feels introspective and stylish, ideal for founders, creators, and more narrative-led beauty or lifestyle brands.",
    idealIndustries: ["Creators", "Lifestyle Brands", "Beauty", "Personal Brands"],
    keywords: ["Poetic", "Thoughtful", "Soft", "Creative"],
    whyItWorks:
      "Dusty violets add emotional nuance and individuality, helping the brand feel more distinctive than generic blush-based systems."
  },
  {
    id: 36,
    family: "Feminine Soft",
    name: "Mocha Petal",
    palette: ["#F2E9E4", "#C9ADA7", "#9A6D6A", "#4A3F3B"],
    headingFont: "Lora",
    bodyFont: "Montserrat",
    pattern: "petal-inspired curves, satin matte softness",
    bestFor: "Premium Lifestyle & Beauty",
    tags: ["feminine", "warm", "premium", "soft"],
    personality: "Warm, intimate, polished, feminine",
    description:
      "A warm brown-pink feminine system with stronger depth than typical pastel beauty branding.\nIt feels chic, intimate, and more grown-up, making it especially strong for premium lifestyle positioning.",
    idealIndustries: ["Beauty", "Lifestyle", "Salons", "Boutique Brands"],
    keywords: ["Warm", "Intimate", "Chic", "Premium"],
    whyItWorks:
      "Mocha undertones help feminine branding feel richer and more premium while still preserving softness."
  },
  {
    id: 37,
    family: "Feminine Soft",
    name: "Blush Aura",
    palette: ["#FDECEF", "#F7CAD0", "#C08497", "#6D6875"],
    headingFont: "Lora",
    bodyFont: "Montserrat",
    pattern: "soft aura gradients, glow-like transitions",
    bestFor: "Modern Feminine Startups",
    tags: ["feminine", "modern", "beauty", "friendly"],
    personality: "Fresh, warm, elegant, approachable",
    description:
      "A brighter modern feminine system with blush energy and clean softness.\nIt feels younger and more accessible than classic beauty luxury, making it useful for modern D2C and creator brands.",
    idealIndustries: ["D2C Beauty", "Creators", "Lifestyle", "Self-Care"],
    keywords: ["Fresh", "Warm", "Approachable", "Elegant"],
    whyItWorks:
      "Blush-led systems feel instantly inviting, and the muted purple-gray support adds depth and maturity."
  },

  {
    id: 38,
    family: "Corporate Premium",
    name: "Steel Authority",
    palette: ["#1F2937", "#3B82F6", "#9CA3AF", "#FFFFFF"],
    headingFont: "Libre Baskerville",
    bodyFont: "Inter",
    pattern: "grid structure, data-like rhythm, clean dividers",
    bestFor: "Consulting & Advisory",
    tags: ["corporate", "trust", "structured", "blue"],
    personality: "Strong, reliable, precise, established",
    description:
      "A serious B2B system that combines steel gray discipline with professional blue confidence.\nIt feels steady and executive-ready, ideal for consulting, strategy, and advisory-led businesses.",
    idealIndustries: ["Consulting", "Advisory", "B2B", "Professional Services"],
    keywords: ["Strong", "Reliable", "Executive", "Structured"],
    whyItWorks:
      "Gray-blue combinations make a brand feel competent and trustworthy, especially when paired with disciplined typography."
  },
  {
    id: 39,
    family: "Corporate Premium",
    name: "Slate Capital",
    palette: ["#111827", "#475569", "#CBD5E1", "#F8FAFC"],
    headingFont: "Libre Baskerville",
    bodyFont: "Inter",
    pattern: "subtle panels, financial-style hierarchy, clean frameworks",
    bestFor: "Finance & Corporate",
    tags: ["corporate", "finance", "premium", "trust"],
    personality: "Executive, secure, measured, premium",
    description:
      "A cooler corporate identity with capital-market seriousness and premium restraint.\nIt feels secure and highly professional, making it ideal for financial, legal, and boardroom-facing brands.",
    idealIndustries: ["Finance", "Wealth", "Legal", "Corporate Services"],
    keywords: ["Executive", "Secure", "Measured", "Professional"],
    whyItWorks:
      "Slate neutrals reduce visual drama and make the brand feel controlled, rational, and stable."
  },
  {
    id: 40,
    family: "Corporate Premium",
    name: "Navy Meridian",
    palette: ["#0B1F3A", "#1D4ED8", "#94A3B8", "#F8FAFC"],
    headingFont: "Libre Baskerville",
    bodyFont: "Inter",
    pattern: "mapping lines, directional layouts, precise spacing",
    bestFor: "Enterprise Services",
    tags: ["corporate", "enterprise", "trust", "professional"],
    personality: "Dependable, strategic, polished, clear",
    description:
      "A strategic enterprise identity that feels mature, reliable, and thoughtfully designed.\nIt balances classic trust with modern clarity, making it easier for service brands to look premium rather than generic.",
    idealIndustries: ["Enterprise Services", "Healthcare", "Operations", "Manufacturing"],
    keywords: ["Dependable", "Strategic", "Clear", "Polished"],
    whyItWorks:
      "Navy remains one of the strongest trust-building anchors for corporate identity, especially when supported by crisp white space."
  },
  {
    id: 41,
    family: "Corporate Premium",
    name: "Boardroom Light",
    palette: ["#F5F7FA", "#D9E2EC", "#52606D", "#102A43"],
    headingFont: "Libre Baskerville",
    bodyFont: "Inter",
    pattern: "clean document-like surfaces, subtle report styling",
    bestFor: "White-Collar Services",
    tags: ["corporate", "light", "premium", "clean"],
    personality: "Clear, executive, modern, composed",
    description:
      "A lighter corporate route designed for brands that want professionalism without dark heaviness.\nIt feels crisp, clean, and boardroom-ready, especially for modern consultancies and professional firms.",
    idealIndustries: ["Consulting", "Recruitment", "Advisory", "Corporate Agencies"],
    keywords: ["Clear", "Executive", "Light", "Composed"],
    whyItWorks:
      "A light professional palette keeps the brand approachable while still preserving authority through typography and structure."
  },
  {
    id: 42,
    family: "Corporate Premium",
    name: "Graphite Counsel",
    palette: ["#222222", "#5F6C7B", "#D9D9D9", "#FFFFFF"],
    headingFont: "Libre Baskerville",
    bodyFont: "Inter",
    pattern: "fine rules, legal-style spacing, restrained sections",
    bestFor: "Law & Expert Services",
    tags: ["corporate", "legal", "expert", "serious"],
    personality: "Serious, expert, measured, trustworthy",
    description:
      "A graphite-led identity with calm structure and an expert-service tone.\nIt feels more understated than blue-heavy corporate systems, making it ideal for firms that want authority through restraint.",
    idealIndustries: ["Law", "Tax", "Compliance", "Advisory"],
    keywords: ["Expert", "Measured", "Trustworthy", "Serious"],
    whyItWorks:
      "Graphite and cool neutrals communicate seriousness and precision without relying on cliché corporate blue."
  },

  {
    id: 43,
    family: "Modern Minimal",
    name: "Graphite Clean",
    palette: ["#111111", "#FFFFFF", "#777777", "#E5E5E5"],
    headingFont: "Inter",
    bodyFont: "Inter",
    pattern: "grids, whitespace systems, minimal rules",
    bestFor: "Design-Led Brands",
    tags: ["minimal", "modern", "clean", "sharp"],
    personality: "Sharp, exact, clean, disciplined",
    description:
      "A neutral-first minimal system where hierarchy and spacing define the brand more than decoration.\nIt feels highly contemporary and deliberate, ideal for studios and brands that want clean authority.",
    idealIndustries: ["Portfolio", "Creative Studios", "Architecture", "Fashion"],
    keywords: ["Exact", "Clean", "Modern", "Disciplined"],
    whyItWorks:
      "When visual noise is removed, structure becomes the brand language and communicates confidence through restraint."
  },
  {
    id: 44,
    family: "Modern Minimal",
    name: "Soft Contrast",
    palette: ["#FAFAF8", "#E7E5E4", "#57534E", "#18181B"],
    headingFont: "Inter",
    bodyFont: "Inter",
    pattern: "minimal contrast blocks, airy surfaces",
    bestFor: "Modern Service Brands",
    tags: ["minimal", "soft", "neutral", "modern"],
    personality: "Quiet, clean, modern, balanced",
    description:
      "A softer minimal palette with warm undertones and more lifestyle-friendly neutrality.\nIt feels clean but not cold, making it stronger for modern agencies, personal brands, and service-led businesses.",
    idealIndustries: ["Agencies", "Service Brands", "Personal Brands", "Studios"],
    keywords: ["Balanced", "Quiet", "Modern", "Neutral"],
    whyItWorks:
      "Warm neutrals help minimal branding feel more human, increasing versatility across different categories."
  },
  {
    id: 45,
    family: "Modern Minimal",
    name: "Ink Frame",
    palette: ["#0F172A", "#FFFFFF", "#94A3B8", "#E2E8F0"],
    headingFont: "Inter",
    bodyFont: "Inter",
    pattern: "framed sections, crisp UI lines, modern editorial spacing",
    bestFor: "Portfolios & Digital Brands",
    tags: ["minimal", "ink", "digital", "clean"],
    personality: "Clean, focused, modern, precise",
    description:
      "A more digital minimal route with deep ink contrast and structured light surfaces.\nIt feels precise and sharp, ideal for founders, creatives, and product-led portfolio experiences.",
    idealIndustries: ["Portfolios", "Digital Products", "Agencies", "Freelancers"],
    keywords: ["Focused", "Precise", "Digital", "Modern"],
    whyItWorks:
      "Ink-dark anchors create depth while pale support tones keep the overall identity elegant and highly usable."
  },
  {
    id: 46,
    family: "Modern Minimal",
    name: "Paper Grid",
    palette: ["#F8F7F4", "#D6D3D1", "#44403C", "#1C1917"],
    headingFont: "Inter",
    bodyFont: "Inter",
    pattern: "paper texture, layout grids, editorial whitespace",
    bestFor: "Editorial & Studio Brands",
    tags: ["minimal", "editorial", "neutral", "studio"],
    personality: "Measured, tasteful, calm, modern",
    description:
      "A paper-inspired minimal identity that feels editorial, tactile, and thoughtfully designed.\nIt is ideal for creative studios that want subtle sophistication instead of ultra-tech minimalism.",
    idealIndustries: ["Studios", "Editorial Brands", "Creative Agencies", "Publishing"],
    keywords: ["Editorial", "Tasteful", "Calm", "Measured"],
    whyItWorks:
      "Paper-like neutrals soften minimal systems and give them more craft and visual warmth."
  },
  {
    id: 47,
    family: "Modern Minimal",
    name: "Mono Precision",
    palette: ["#000000", "#F7F7F7", "#A3A3A3", "#262626"],
    headingFont: "Inter",
    bodyFont: "Inter",
    pattern: "high-precision linework, crisp monochrome sections",
    bestFor: "Product & UX Brands",
    tags: ["minimal", "mono", "precise", "product"],
    personality: "Exact, sharp, confident, efficient",
    description:
      "A harder-edged minimal identity for product-minded brands that value clarity over warmth.\nIt feels efficient and direct, making it useful for digital products, UX portfolios, and sharper personal brands.",
    idealIndustries: ["UX", "Product Design", "Digital Tools", "Portfolios"],
    keywords: ["Exact", "Sharp", "Efficient", "Confident"],
    whyItWorks:
      "Pure monochrome systems emphasize structure and hierarchy, which makes the brand feel more disciplined and product-centric."
  },

  {
    id: 48,
    family: "Heritage Classic",
    name: "Royal Archive",
    palette: ["#3A0CA3", "#7209B7", "#F5F1E8", "#1A1A1A"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Work Sans",
    pattern: "crest forms, engraved lines, archival motifs",
    bestFor: "Prestige Brands",
    tags: ["heritage", "royal", "classic", "premium"],
    personality: "Rich, distinguished, regal, refined",
    description:
      "A heritage direction with richer violet depth and a more ceremonial, archival tone.\nIt feels prestigious and story-rich, ideal for brands that want to look established, cultural, and elevated.",
    idealIndustries: ["Law", "Luxury Food", "Heritage Brands", "Boutique Hotels"],
    keywords: ["Regal", "Prestige", "Rich", "Refined"],
    whyItWorks:
      "Jewel tones make heritage branding feel more luxurious and distinctive while preserving a classic foundation."
  },
  {
    id: 49,
    family: "Heritage Classic",
    name: "Burgundy Crest",
    palette: ["#6B1F2B", "#DCC5A1", "#F7F1E8", "#2A1E1E"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Work Sans",
    pattern: "border details, seal-inspired graphics, engraved rhythm",
    bestFor: "Old-World Premium",
    tags: ["heritage", "burgundy", "classic", "premium"],
    personality: "Classic, warm, established, rich",
    description:
      "A warmer heritage system with burgundy depth and gold-adjacent softness.\nIt feels prestigious but less cold than royal palettes, making it ideal for food, hospitality, and legacy-led service brands.",
    idealIndustries: ["Restaurants", "Wineries", "Boutique Hospitality", "Law"],
    keywords: ["Classic", "Warm", "Established", "Rich"],
    whyItWorks:
      "Burgundy carries heritage authority while preserving warmth and appetite, which broadens where the system can work."
  },
  {
    id: 50,
    family: "Heritage Classic",
    name: "Forest Ledger",
    palette: ["#2D4739", "#C2A878", "#F4EFE6", "#1A1A1A"],
    headingFont: "Cormorant Garamond",
    bodyFont: "Work Sans",
    pattern: "ledger-like dividers, botanical heritage accents",
    bestFor: "Craft & Legacy Brands",
    tags: ["heritage", "forest", "crafted", "legacy"],
    personality: "Grounded, classic, refined, trustworthy",
    description:
      "A heritage-meets-craft direction that blends forest depth with muted gold structure.\nIt feels established but earthy, making it useful for premium food, craft, and nature-linked legacy brands.",
    idealIndustries: ["Premium Food", "Craft Brands", "Boutique Hospitality", "Architecture"],
    keywords: ["Crafted", "Grounded", "Refined", "Trustworthy"],
    whyItWorks:
      "Forest tones add a more grounded emotional quality to heritage branding while preserving sophistication and authority."
  }
];