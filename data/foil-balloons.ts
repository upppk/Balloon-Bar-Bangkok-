export type FoilBalloonProduct = {
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

export const foilBalloonProducts: FoilBalloonProduct[] = [
  {
    id: "orbz-standard",
    name: "Orbz Balloons",
    description: "",
    image: "/images/products/foil-balloon/001.jpg",
    alt: "Orbz Foil Balloons - Multiple Colors",
    colors: ["White", "Pastel Pink", "Pastel Blue", "Rose Gold", "Silver", "Mint Green", "Pastel Lilac", "Pastel Yellow", "Light Gold", "Gold", "Blue", "Green", "Red", "Black", "Purple"],
    colorImages: {
      "White": "/images/products/foil-balloon/orbz-colors/01-white.png",
      "Pastel Pink": "/images/products/foil-balloon/orbz-colors/02-pastel-pink.png",
      "Pastel Blue": "/images/products/foil-balloon/orbz-colors/03-pastel-blue.png",
      "Rose Gold": "/images/products/foil-balloon/orbz-colors/04-rose-gold.png",
      "Silver": "/images/products/foil-balloon/orbz-colors/05-silver.png",
      "Mint Green": "/images/products/foil-balloon/orbz-colors/06-mint-green.png",
      "Pastel Lilac": "/images/products/foil-balloon/orbz-colors/07-pastel-lilac.png",
      "Pastel Yellow": "/images/products/foil-balloon/orbz-colors/08-pastel-yellow.png",
      "Light Gold": "/images/products/foil-balloon/orbz-colors/09-light-gold.png",
      "Gold": "/images/products/foil-balloon/orbz-colors/10-gold.png",
      "Blue": "/images/products/foil-balloon/orbz-colors/11-blue.png",
      "Green": "/images/products/foil-balloon/orbz-colors/12-green.png",
      "Red": "/images/products/foil-balloon/orbz-colors/13-red.png",
      "Black": "/images/products/foil-balloon/orbz-colors/14-black.png",
      "Purple": "/images/products/foil-balloon/orbz-colors/15-purple.png",
    },
    pricing: [
      { size: "Size 22\"", airPrice: 390, heliumPrice: 790 },
      { size: "Size 32\"", airPrice: 690, heliumPrice: 1390 },
    ],
  },
  {
    id: "orbz-special",
    name: "63\" Giant Heart Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/002.jpg",
    alt: "63 inch Giant Heart Foil Balloon",
    colors: ["Red", "Pink"],
    colorImages: {
      "Red": "/images/products/foil-balloon/heart-colors/01-red.png",
      "Pink": "/images/products/foil-balloon/heart-colors/02-pink.png",
    },
    pricing: [
      { size: "Size 63\" - Giant Heart", airPrice: 1590, heliumPrice: 3790 },
    ],
  },
  {
    id: "number-foil-standard",
    name: "18\" Star Foil Balloon (Standard Color)",
    description: "",
    image: "/images/products/foil-balloon/003.jpg",
    alt: "Number Foil Balloons in Gold, Silver, Rose Gold, Blue",
    colors: ["Silver", "Gold", "Rose Gold", "Blue"],
    pricing: [
      { size: "Size 16\" (Non-Float)", airPrice: 90, heliumPrice: 0 },
      { size: "Size 40\" (Non-Float)", airPrice: 390, heliumPrice: 690 },
    ],
    addOns: {
      title: "Add Message on 18\" Foil Balloon",
      items: [
        { name: "Plain Color", price: 25 },
        { name: "Silver and Gold", price: 50 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
  {
    id: "number-foil-pastel",
    name: "18\" Star Foil Balloon (Matt & Pastel Color)",
    description: "",
    image: "/images/products/foil-balloon/004.jpg",
    alt: "Number Foil Balloons in Pastel Colors",
    colors: ["White", "Cream", "Caramel", "Green", "Pastel Blue", "Pastel Pink", "Black"],
    pricing: [
      { size: "Size 16\" (Non-Float)", airPrice: 90, heliumPrice: 0 },
      { size: "Size 40\" (Non-Float)", airPrice: 390, heliumPrice: 690 },
    ],
  },
  {
    id: "alphabet-foil",
    name: "Alphabet Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/005.jpg",
    alt: "Alphabet Foil Balloons A-Z",
    colors: ["Silver", "Rose Gold", "Gold", "Matte Gold", "Pink", "Blue", "White", "Red", "Purple", "Black"],
    pricing: [
      { size: "Size 16\" (Non-Float)", airPrice: 90, heliumPrice: 0 },
      { size: "Size 40\" (Non-Float)", airPrice: 390, heliumPrice: 690 },
    ],
  },
  {
    id: "heart-foil-18",
    name: "18\" Heart Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/006.jpg",
    alt: "18 inch Heart Foil Balloons",
    colors: ["White", "Silver", "Rose Gold", "Lavender", "Purple", "Turquoise", "Light Blue", "Blue", "Dark Blue", "Pink", "Hot Pink", "Red", "Orange", "Lime Green", "Green", "Gold", "Black"],
    pricing: [
      { size: "Size 5\" (Non-Float)", airPrice: 20, heliumPrice: 0 },
      { size: "Size 10\" (Non-Float)", airPrice: 25, heliumPrice: 0 },
      { size: "Size 18\" (Non-Float)", airPrice: 90, heliumPrice: 170 },
    ],
  },
  {
    id: "heart-foil-18-pastel",
    name: "18\" Heart Foil Balloon (Pastel & Matte)",
    description: "",
    image: "/images/products/foil-balloon/007.jpg",
    alt: "18 inch Heart Foil Balloons - Pastel and Matte Colors",
    colors: ["Matte Cream", "Matte Caramel", "Matte Chocolate", "Matte Red", "Matte Burgundy", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Green"],
    pricing: [
      { size: "Size 18\" Pastel (Non-Float)", airPrice: 90, heliumPrice: 170 },
      { size: "Size 18\" Matte (Non-Float)", airPrice: 100, heliumPrice: 190 },
    ],
  },
  {
    id: "heart-foil-18-shapes",
    name: "18\" Heart & Star Foil Balloon (Matte Pastel)",
    description: "",
    image: "/images/products/foil-balloon/008.jpg",
    alt: "18 inch Heart and Star Foil Balloons - Matte Pastel",
    colors: ["Matte Pastel Pink", "Matte Pastel Green", "Matte Pastel Blue"],
    pricing: [
      { size: "Size 18\" Matte Pastel (Non-Float)", airPrice: 100, heliumPrice: 190 },
    ],
  },
  {
    id: "heart-foil-20",
    name: "20\" Heart Foil Balloon (Matte)",
    description: "",
    image: "/images/products/foil-balloon/009.jpg",
    alt: "20 inch Heart Foil Balloon - Matte Colors",
    colors: ["Matte White", "Matte Pastel Pink", "Matte Pastel Purple", "Matte Pastel Blue", "Matte Pastel Yellow", "Matte Pastel Green"],
    pricing: [
      { size: "Size 20\" Matte (Non-Float)", airPrice: 100, heliumPrice: 250 },
    ],
  },
  {
    id: "heart-foil-63-giant",
    name: "40\" Heart Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/010.jpg",
    alt: "40 inch Heart Foil Balloon",
    colors: ["Red", "Pink"],
    pricing: [
      { size: "Size 40\" - Heart", airPrice: 1590, heliumPrice: 3790 },
    ],
    addOns: {
      title: "Add Message on 40\" Foil Balloon",
      items: [
        { name: "Plain Color", price: 100 },
        { name: "Silver and Gold", price: 250 },
      ],
    },
  },
  {
    id: "star-foil-18",
    name: "18\" Star Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/011.jpg",
    alt: "18 inch Star Foil Balloons",
    colors: ["White", "Silver", "Rose Gold", "Lavender", "Purple", "Turquoise", "Light Blue", "Blue", "Dark Blue", "Pink", "Hot Pink", "Red", "Orange", "Lime Green", "Green", "Gold", "Black"],
    pricing: [
      { size: "Size 5\" (Non-Float)", airPrice: 20, heliumPrice: 0 },
      { size: "Size 10\" (Non-Float)", airPrice: 25, heliumPrice: 0 },
      { size: "Size 18\" (Non-Float)", airPrice: 90, heliumPrice: 170 },
    ],
  },
  {
    id: "star-foil-18-pastel",
    name: "18\" Star Foil Balloon (Pastel & Matte)",
    description: "",
    image: "/images/products/foil-balloon/012.jpg",
    alt: "18 inch Star Foil Balloons - Pastel and Matte",
    colors: ["Matte Cream", "Matte Caramel", "Matte Chocolate", "Matte Red", "Matte Burgundy", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Green"],
    pricing: [
      { size: "Size 18\" Pastel (Non-Float)", airPrice: 90, heliumPrice: 170 },
      { size: "Size 18\" Matte (Non-Float)", airPrice: 100, heliumPrice: 190 },
    ],
  },
  {
    id: "round-foil-18",
    name: "18\" Round Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/013.jpg",
    alt: "18 inch Round Foil Balloons",
    colors: ["Silver", "Rose Gold", "Pink", "Blue", "Dark Blue", "Purple", "Hot Pink", "Red", "Orange", "Lime Green", "Green", "Gold", "Black"],
    pricing: [
      { size: "Size 5\" (Non-Float)", airPrice: 20, heliumPrice: 0 },
      { size: "Size 10\" (Non-Float)", airPrice: 25, heliumPrice: 0 },
      { size: "Size 18\" (Non-Float)", airPrice: 90, heliumPrice: 170 },
    ],
  },
  {
    id: "round-foil-18-pastel",
    name: "18\" Round Foil Balloon (Pastel & Matte)",
    description: "",
    image: "/images/products/foil-balloon/014.jpg",
    alt: "18 inch Round Foil Balloons - Pastel and Matte",
    colors: ["White", "Cream", "Caramel", "Chocolate"],
    pricing: [
      { size: "Size 18\" Pastel (Non-Float)", airPrice: 90, heliumPrice: 170 },
      { size: "Size 18\" Matte (Non-Float)", airPrice: 100, heliumPrice: 190 },
    ],
  },
  {
    id: "heart-star-foil-24",
    name: "24\" Heart & Star Foil Balloon",
    description: "",
    image: "/images/products/foil-balloon/015.jpg",
    alt: "24 inch Heart and Star Foil Balloons",
    colors: ["Silver", "Rose Gold", "Pink", "Hot Pink", "Red", "Blue", "Gold"],
    pricing: [
      { size: "Size 24\" (Non-Float)", airPrice: 250, heliumPrice: 490 },
    ],
  },
  {
    id: "jumbo-heart-star-foil",
    name: "18\" Heart Foil Balloon (Standard Color)",
    description: "",
    image: "/images/products/foil-balloon/016.jpg",
    alt: "Jumbo 36-40 inch Heart and Star Foil Balloons",
    colors: ["White", "Silver", "Rose Gold", "Lavender", "Purple", "Turqoise", "Light Blue", "Blue", "Dark Blue", "Pink", "Hot Pink", "Red", "Orange", "Lime Green", "Green", "Gold", "Black"],
    colorImages: {
      "White": "/images/products/foil-balloon/heart-standard-colors/01-white.png",
      "Silver": "/images/products/foil-balloon/heart-standard-colors/02-silver.png",
      "Rose Gold": "/images/products/foil-balloon/heart-standard-colors/03-rose-gold.png",
      "Lavender": "/images/products/foil-balloon/heart-standard-colors/04-lavender.png",
      "Purple": "/images/products/foil-balloon/heart-standard-colors/05-purple.png",
      "Turqoise": "/images/products/foil-balloon/heart-standard-colors/06-turqoise.png",
      "Light Blue": "/images/products/foil-balloon/heart-standard-colors/07-light-blue.png",
      "Blue": "/images/products/foil-balloon/heart-standard-colors/08-blue.png",
      "Dark Blue": "/images/products/foil-balloon/heart-standard-colors/09-dark-blue.png",
      "Pink": "/images/products/foil-balloon/heart-standard-colors/10-pink.png",
      "Hot Pink": "/images/products/foil-balloon/heart-standard-colors/11-hot-pink.png",
      "Red": "/images/products/foil-balloon/heart-standard-colors/12-red.png",
      "Orange": "/images/products/foil-balloon/heart-standard-colors/13-orange.png",
      "Lime Green": "/images/products/foil-balloon/heart-standard-colors/14-lime-green.png",
      "Green": "/images/products/foil-balloon/heart-standard-colors/15-green.png",
      "Gold": "/images/products/foil-balloon/heart-standard-colors/16-gold.png",
      "Black": "/images/products/foil-balloon/heart-standard-colors/17-black.png",
    },
    pricing: [
      { size: "Size 36\" (Non-Float)", airPrice: 550, heliumPrice: 1090 },
      { size: "Size 40\" (Non-Float)", airPrice: 590, heliumPrice: 1490 },
    ],
  },
  {
    id: "jumbo-heart-foil",
    name: "18\" Heart Foil Balloon (Matte & Pastel Color)",
    description: "",
    image: "/images/products/foil-balloon/017.jpg",
    alt: "Jumbo 36-40 inch Heart Foil Balloon",
    colors: ["Matte Cream", "Matte Caramel", "Matte Chocolate", "Matte Red", "Matte Burgundy", "Pastel Pink", "Pastel Blue", "Pastel Purple", "Pastel Green"],
    colorImages: {
      "Matte Cream": "/images/products/foil-balloon/heart-matte-pastel-colors/01-matte-cream.png",
      "Matte Caramel": "/images/products/foil-balloon/heart-matte-pastel-colors/02-matte-caramel.png",
      "Matte Chocolate": "/images/products/foil-balloon/heart-matte-pastel-colors/03-matte-chocolate.png",
      "Matte Red": "/images/products/foil-balloon/heart-matte-pastel-colors/04-matte-red.png",
      "Matte Burgundy": "/images/products/foil-balloon/heart-matte-pastel-colors/05-matte-burgundy.png",
      "Pastel Pink": "/images/products/foil-balloon/heart-matte-pastel-colors/06-pastel-pink.png",
      "Pastel Blue": "/images/products/foil-balloon/heart-matte-pastel-colors/07-pastel-blue.png",
      "Pastel Purple": "/images/products/foil-balloon/heart-matte-pastel-colors/08-pastel-purple.png",
      "Pastel Green": "/images/products/foil-balloon/heart-matte-pastel-colors/09-pastel-green.png",
    },
    pricing: [
      { size: "Size 18\" Pastel Color (Non-Float)", airPrice: 90, heliumPrice: 170 },
      { size: "Size 18\" - Matte Color (Non-Float)", airPrice: 100, heliumPrice: 190 },
    ],
  },
  {
    id: "jumbo-heart-foil-large",
    name: "18\" Star & Heart Foil Balloon (Pastel Color)",
    description: "",
    image: "/images/products/foil-balloon/018.jpg",
    alt: "18\" Star & Heart Foil Balloon Pastel Colors",
    colors: ["Matte Pastel Pink", "Matte Pastel Green", "Matte Pastel Blue", "Matte Pastel Pink", "Matte Pastel Green", "Matte Pastel Blue", "Matte Pastel Pink", "Matte Pastel Green", "Matte Pastel Blue"],
    pricing: [
      { size: "Size 18\" - Matte Color (Non-Float)", airPrice: 100, heliumPrice: 190 },
    ],
    addOns: {
      title: "Add Message on 18\" Foil Balloon",
      items: [
        { name: "Plain Color", price: 25 },
        { name: "Silver and Gold", price: 50 },
        { name: "Individual Balloon Weights", price: 10 },
      ],
    },
  },
  {
    id: "jumbo-round-foil",
    name: "Jumbo Round Foil Balloon (36\"-40\")",
    description: "",
    image: "/images/products/foil-balloon/019.jpg",
    alt: "Jumbo 36-40 inch Round Foil Balloons",
    colors: ["Silver", "Rose Gold", "Red", "Hot Pink"],
    pricing: [
      { size: "Size 36\" (Non-Float)", airPrice: 550, heliumPrice: 1090 },
      { size: "Size 40\" (Non-Float)", airPrice: 590, heliumPrice: 1490 },
    ],
  },
];
