export type LatexBalloonProduct = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  colors: string[];
  colorImages?: Record<string, string>;
  pricing: {
    size: string;
    airPrice: number;
    heliumPrice: number;
  }[];
  addOns?: {
    title: string;
    items: {
      name: string;
      price: number;
    }[];
  };
};

export const latexBalloonProducts: LatexBalloonProduct[] = [
  {
    id: "latex-plain-color",
    name: "Plain Color Latex Balloons",
    description: "",
    image: "/images/products/latex-balloon/001.jpg",
    alt: "Plain Color Latex Balloons - 35 colors",
    colors: ["White", "Egg", "White Sand", "Blush", "Yellow", "Golden Yellow", "Amber", "Orange", "Coral", "Salmon", "Red", "Burgundy", "Magenta", "Rose", "Baby Pink", "Kapi Pink", "Amethyst", "Purple", "Blue Gray", "Midnight Blue", "Blue", "Maya Blue", "Sky Blue", "Turquoise", "Teal", "Sea Foam", "Olive Green", "Sage Green", "Lime Green", "Green", "Dark Green", "Forest Green", "Mocha Brown", "Dark Brown", "Gray", "Black", "Clear"],
    colorImages: {
      White: "/images/products/latex-balloon/plain-color/white.png",
      Egg: "/images/products/latex-balloon/plain-color/egg.png",
      "White Sand": "/images/products/latex-balloon/plain-color/white-sand.png",
      Blush: "/images/products/latex-balloon/plain-color/blush.png",
      Yellow: "/images/products/latex-balloon/plain-color/yellow.png",
      "Golden Yellow": "/images/products/latex-balloon/plain-color/golden-yellow.png",
      Amber: "/images/products/latex-balloon/plain-color/amber.png",
      Orange: "/images/products/latex-balloon/plain-color/orange.png",
      Coral: "/images/products/latex-balloon/plain-color/coral.png",
      Salmon: "/images/products/latex-balloon/plain-color/salmon.png",
      Red: "/images/products/latex-balloon/plain-color/red.png",
      Burgundy: "/images/products/latex-balloon/plain-color/burgundy.png",
      Magenta: "/images/products/latex-balloon/plain-color/magenta.png",
      Rose: "/images/products/latex-balloon/plain-color/rose.png",
      "Baby Pink": "/images/products/latex-balloon/plain-color/baby-pink.png",
      "Kapi Pink": "/images/products/latex-balloon/plain-color/kapi-pink.png",
      Amethyst: "/images/products/latex-balloon/plain-color/amethyst.png",
      Purple: "/images/products/latex-balloon/plain-color/purple.png",
      "Blue Gray": "/images/products/latex-balloon/plain-color/blue-gray.png",
      "Midnight Blue": "/images/products/latex-balloon/plain-color/midnight-blue.png",
      Blue: "/images/products/latex-balloon/plain-color/blue.png",
      "Maya Blue": "/images/products/latex-balloon/plain-color/maya-blue.png",
      "Sky Blue": "/images/products/latex-balloon/plain-color/sky-blue.png",
      Turquoise: "/images/products/latex-balloon/plain-color/turquoise.png",
      Teal: "/images/products/latex-balloon/plain-color/teal.png",
      "Sea Foam": "/images/products/latex-balloon/plain-color/sea-foam.png",
      "Olive Green": "/images/products/latex-balloon/plain-color/olive-green.png",
      "Sage Green": "/images/products/latex-balloon/plain-color/sage-green.png",
      "Lime Green": "/images/products/latex-balloon/plain-color/lime-green.png",
      Green: "/images/products/latex-balloon/plain-color/green.png",
      "Dark Green": "/images/products/latex-balloon/plain-color/dark-green.png",
      "Forest Green": "/images/products/latex-balloon/plain-color/forest-green.png",
      "Mocha Brown": "/images/products/latex-balloon/plain-color/mocha-brown.png",
      "Dark Brown": "/images/products/latex-balloon/plain-color/dark-brown.png",
      Gray: "/images/products/latex-balloon/plain-color/gray.png",
      Black: "/images/products/latex-balloon/plain-color/black.png",
      Clear: "/images/products/latex-balloon/plain-color/clear.png",
    },
    pricing: [
      { size: "Size 6\"", airPrice: 10, heliumPrice: 20 },
      { size: "Size 12\"", airPrice: 25, heliumPrice: 55 },
    ],
    addOns: {
      title: "Add Message on 12\" Latex Balloon",
      items: [
        { name: "Plain Color", price: 20 },
        { name: "Silver and Gold", price: 40 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
  {
    id: "latex-pastel-color",
    name: "Pastel Color Latex Balloons",
    description: "",
    image: "/images/products/latex-balloon/002.jpg",
    alt: "Pastel Color Latex Balloons - 7 colors",
    colors: ["Pastel Yellow", "Pastel Peach", "Pastel Pink", "Pastel Purple", "Pastel Blue", "Pastel Mint Green", "Pastel Green"],
    colorImages: {
      "Pastel Yellow": "/images/products/latex-balloon/pastel-color/pastel-yellow.png",
      "Pastel Peach": "/images/products/latex-balloon/pastel-color/pastel-peach.png",
      "Pastel Pink": "/images/products/latex-balloon/pastel-color/pastel-pink.png",
      "Pastel Purple": "/images/products/latex-balloon/pastel-color/pastel-purple.png",
      "Pastel Blue": "/images/products/latex-balloon/pastel-color/pastel-blue.png",
      "Pastel Mint Green": "/images/products/latex-balloon/pastel-color/pastel-mini-green.png",
      "Pastel Green": "/images/products/latex-balloon/pastel-color/pastel-green.png",
    },
    pricing: [
      { size: "Size 6\"", airPrice: 10, heliumPrice: 20 },
      { size: "Size 12\"", airPrice: 25, heliumPrice: 55 },
    ],
    addOns: {
      title: "Add Message on 12\" Latex Balloon",
      items: [
        { name: "Plain Color", price: 20 },
        { name: "Silver and Gold", price: 40 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
  {
    id: "latex-pearl-color",
    name: "Pearl Color Latex Balloons",
    description: "",
    image: "/images/products/latex-balloon/003.jpg",
    alt: "Pearl Color Latex Balloons - 19 colors",
    colors: ["Pearl White", "Pearl Ivory", "Pearl Yellow", "Pearl Peach", "Pearl Orange", "Rose Gold", "Pearl Red", "Pearl Burgundy", "Pearl Magenta", "Pearl Pink", "Pearl Lavender", "Pearl Purple", "Pearl Light Blue", "Pearl Blue", "Pearl Lime Green", "Pearl Mint Green", "Pearl Silver", "Pearl Gold", "Pearl Black"],
    pricing: [
      { size: "Size 6\"", airPrice: 10, heliumPrice: 20 },
      { size: "Size 12\"", airPrice: 25, heliumPrice: 55 },
    ],
    addOns: {
      title: "Add Message on 12\" Latex Balloon",
      items: [
        { name: "Plain Color", price: 20 },
        { name: "Silver and Gold", price: 40 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
  {
    id: "latex-chrome-color",
    name: "Chrome Color Latex Balloons",
    description: "",
    image: "/images/products/latex-balloon/004.jpg",
    alt: "Chrome Color Latex Balloons - 9 colors",
    colors: ["Chrome Silver", "Chrome Gold", "Chrome Rose Gold", "Chrome Copper", "Chrome Champagne", "Chrome Pink", "Chrome Purple", "Chrome Blue", "Chrome Green"],
    colorImages: {
      "Chrome Silver": "/images/products/latex-balloon/chrome-color/chrome-silver.png",
      "Chrome Gold": "/images/products/latex-balloon/chrome-color/chrome-gold.png",
      "Chrome Rose Gold": "/images/products/latex-balloon/chrome-color/chrome-rose-gold.png",
      "Chrome Copper": "/images/products/latex-balloon/chrome-color/chrome-copper.png",
      "Chrome Champagne": "/images/products/latex-balloon/chrome-color/chrome-champagne.png",
      "Chrome Pink": "/images/products/latex-balloon/chrome-color/chrome-pink.png",
      "Chrome Purple": "/images/products/latex-balloon/chrome-color/chrome-purple.png",
      "Chrome Blue": "/images/products/latex-balloon/chrome-color/chrome-blue.png",
      "Chrome Green": "/images/products/latex-balloon/chrome-color/chrome-green.png",
    },
    pricing: [
      { size: "Size 6\"", airPrice: 20, heliumPrice: 45 },
      { size: "Size 12\"", airPrice: 50, heliumPrice: 90 },
    ],
    addOns: {
      title: "Add Message on 12\" Latex Balloon",
      items: [
        { name: "Plain Color", price: 20 },
        { name: "Silver and Gold", price: 40 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
  {
    id: "latex-clear-glitter",
    name: "Clear Latex with Glitter Balloons",
    description: "",
    image: "/images/products/latex-balloon/005.jpg",
    alt: "Clear Latex with Glitter Balloons - Round and Flake styles",
    colors: ["Silver Round", "Gold Round", "Rose Gold Round", "Purple Round", "Hot Pink Round", "Blue Round", "Light Blue Round", "Silver Flake", "Gold Flake", "Champagne Flake", "Rose Gold Flake", "Red Flake", "Blue Flake", "Pink Flake", "White Flake", "Silver Sparkles", "Red Sparkles", "Gold Sparkles", "Green Sparkles", "Blue Sparkles", "Gold Sparkles", "Purple Sparkles"],
    colorImages: {
      "Silver Round": "/images/products/latex-balloon/glitter-color/silver-round.png",
      "Gold Round": "/images/products/latex-balloon/glitter-color/gold-round.png",
      "Rose Gold Round": "/images/products/latex-balloon/glitter-color/rose-gold-round.png",
      "Purple Round": "/images/products/latex-balloon/glitter-color/purple-round.png",
      "Hot Pink Round": "/images/products/latex-balloon/glitter-color/hot-pink-round.png",
      "Blue Round": "/images/products/latex-balloon/glitter-color/blue-round.png",
      "Light Blue Round": "/images/products/latex-balloon/glitter-color/light-blue-round.png",
      "Silver Flake": "/images/products/latex-balloon/glitter-color/silver-flake.png",
      "Gold Flake": "/images/products/latex-balloon/glitter-color/gold-flake.png",
      "Champagne Flake": "/images/products/latex-balloon/glitter-color/champagne-flake.png",
      "Rose Gold Flake": "/images/products/latex-balloon/glitter-color/rose-gold-flake.png",
      "Red Flake": "/images/products/latex-balloon/glitter-color/red-flake.png",
      "Blue Flake": "/images/products/latex-balloon/glitter-color/blue-flake.png",
      "Pink Flake": "/images/products/latex-balloon/glitter-color/pink-flake.png",
      "White Flake": "/images/products/latex-balloon/glitter-color/white-flake.png",
      "Silver Sparkles": "/images/products/latex-balloon/glitter-color/silver-sparkles.png",
      "Red Sparkles": "/images/products/latex-balloon/glitter-color/red-sparkles.png",
      "Gold Sparkles": "/images/products/latex-balloon/glitter-color/gold-sparkles-1.png",
      "Green Sparkles": "/images/products/latex-balloon/glitter-color/green-sparkles.png",
      "Blue Sparkles": "/images/products/latex-balloon/glitter-color/blue-sparkles.png",
      "Purple Sparkles": "/images/products/latex-balloon/glitter-color/purple-sparkles.png",
    },
    pricing: [
      { size: "Size 6\"", airPrice: 25, heliumPrice: 50 },
      { size: "Size 12\"", airPrice: 50, heliumPrice: 105 },
    ],
    addOns: {
      title: "Add Message on 12\" Latex Balloon",
      items: [
        { name: "Plain Color", price: 20 },
        { name: "Silver and Gold", price: 40 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
];
