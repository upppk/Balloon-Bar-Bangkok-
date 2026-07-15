export type LatexBalloonProduct = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  colors: string[];
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
    colors: ["Pastel Yellow", "Pastel Peach", "Pastel Pink", "Pastel Purple", "Pastel Blue", "Pastel Mini Green", "Pastel Green"],
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
