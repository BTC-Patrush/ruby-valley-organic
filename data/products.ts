// /data/products.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  color: string;
  description: string;       // Full product story
  bulkDiscounts?: BulkDiscount[];
  reviews?: Review[];
  faqs?: FAQ[];
}

export interface Review {
  name: string;
  location?: string;
  rating: number; // 1-5
  comment: string;
}

export interface BulkDiscount {
  minQty: number;
  maxQty?: number; // optional, undefined means no upper limit
  price: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Utility function to generate URL-friendly slugs
function generateSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

// -------------------- Produce --------------------
export const produceProducts: Product[] = [
  {
    id: 1,
    name: 'Mountain Apples',
    slug: generateSlug('Mountain Apples'),
    category: 'Produce',
    price: 350,
    unit: 'Per Kg',
    image: 'apples',
    color: 'D4EDDA',
    description: 'Fresh, high-altitude apples from Ruby Valley. Sweet, crisp, and naturally nutrient-rich.',
    bulkDiscounts: [
      { minQty: 5, maxQty: 9, price: 320 },
      { minQty: 10, price: 300 },
    ],
    reviews: [
      { name: 'Rajan S.', rating: 5, comment: 'Crisp and sweet, tastes like mountain air!' },
    ],
    faqs: [
      { question: 'Are these organic?', answer: 'Yes, grown without pesticides in high-altitude soil.' },
    ],
  },
  {
    id: 2,
    name: 'Carrots',
    slug: generateSlug('Carrots'),
    category: 'Produce',
    price: 200,
    unit: 'Per Kg',
    image: 'Carrots',
    color: 'FF8C00',
    description: 'Fresh, crunchy carrots full of vitamins, grown naturally in Ruby Valley.',
  },
  {
    id: 3,
    name: 'Potatoes',
    slug: generateSlug('Potatoes'),
    category: 'Produce',
    price: 150,
    unit: 'Per Kg',
    image: 'Potatoes',
    color: 'C3B091',
    description: 'Organic highland potatoes, ideal for cooking and baking.',
  },
  {
    id: 4,
    name: 'Berries',
    slug: generateSlug('Berries'),
    category: 'Produce',
    price: 700,
    unit: '250g Box',
    image: 'berries',
    color: '852C30',
    description: 'Hand-picked Ruby Valley berries, juicy and antioxidant-rich.',
  },
  {
    id: 5,
    name: 'Garlic',
    slug: generateSlug('Garlic'),
    category: 'Produce',
    price: 650,
    unit: '250g',
    image: 'garlic',
    color: 'E0E0E0',
    description: 'Fresh, organic garlic cloves with strong aroma and flavor.',
  },
  {
    id: 6,
    name: 'High-Altitude Pears',
    slug: generateSlug('High-Altitude Pears'),
    category: 'Produce',
    price: 400,
    unit: 'Per Kg',
    image: 'Pears',
    color: 'D4EDDA',
    description: 'Sweet and juicy pears grown in Ruby Valley’s high-altitude climate.',
  },
  {
    id: 7,
    name: 'Mushrooms',
    slug: generateSlug('Mushrooms'),
    category: 'Produce',
    price: 1500,
    unit: '500g',
    image: 'Mushrooms',
    color: 'A9A9A9',
    description: 'Fresh, highland mushrooms with earthy flavor and firm texture.',
  },
  {
    id: 8,
    name: 'Honey',
    slug: generateSlug('Honey'),
    category: 'Produce',
    price: 950,
    unit: 'Jar',
    image: 'honey',
    color: 'FFD700',
    description: 'Pure high-altitude honey collected from Ruby Valley bees.',
  },
  {
    id: 9,
    name: 'Blue Potatoes',
    slug: generateSlug('Blue Potatoes'),
    category: 'Produce',
    price: 250,
    unit: 'Per Kg',
    image: 'Blue Potatoes',
    color: '4B0082',
    description: 'Nutritious and vibrant blue potatoes, perfect for unique recipes.',
  },
  {
    id: 10,
    name: 'High Mountain Coffee Beans',
    slug: generateSlug('High Mountain Coffee Beans'),
    category: 'Produce',
    price: 1800,
    unit: '500g Bag',
    image: 'Coffee Beans',
    color: '964B00',
    description: 'Premium high-altitude coffee beans with rich aroma and flavor.',
  },
];

// -------------------- Dairy --------------------
export const dairyProducts: Product[] = [
  {
    id: 11,
    name: 'Yak Cheese',
    slug: generateSlug('Yak Cheese'),
    category: 'Dairy',
    price: 1200,
    unit: '500g',
    image: 'Yak Cheese',
    color: 'F5F5DC',
    description: 'Rich and creamy yak cheese produced in the high-altitude Ruby Valley.',
  },
  {
    id: 12,
    name: 'Sheep Ghee',
    slug: generateSlug('Sheep Ghee'),
    category: 'Dairy',
    price: 1100,
    unit: '500g',
    image: 'Ghee',
    color: 'FAF0E6',
    description: 'Pure, aromatic sheep ghee made traditionally from highland milk.',
  },
  {
    id: 13,
    name: 'Yak Milk',
    slug: generateSlug('Yak Milk'),
    category: 'Dairy',
    price: 300,
    unit: '1L',
    image: 'Milk',
    color: 'FFFFFF',
    description: 'Fresh yak milk collected daily from Ruby Valley farms.',
  },
  {
    id: 14,
    name: 'Yak Butter',
    slug: generateSlug('Yak Butter'),
    category: 'Dairy',
    price: 1400,
    unit: '250g',
    image: 'Butter',
    color: 'F9E79F',
    description: 'Hand-churned yak butter, creamy and flavorful.',
  },
  {
    id: 15,
    name: 'Yogurt',
    slug: generateSlug('Yogurt'),
    category: 'Dairy',
    price: 450,
    unit: '500ml',
    image: 'Yogurt',
    color: 'FFFFFF',
    description: 'Fresh high-altitude yogurt, rich in probiotics.',
  },
  {
    id: 16,
    name: 'Yak Wool',
    slug: generateSlug('Yak Wool'),
    category: 'Dairy',
    price: 2500,
    unit: 'Per Skein',
    image: 'Wool',
    color: '8B4513',
    description: 'Soft and warm yak wool from Ruby Valley yaks.',
  },
  {
    id: 17,
    name: 'Dried Meat',
    slug: generateSlug('Dried Meat'),
    category: 'Dairy',
    price: 1800,
    unit: '200g',
    image: 'Meat',
    color: 'A52A2A',
    description: 'Air-dried highland meat with natural preservation.',
  },
  {
    id: 18,
    name: 'Cheese Block',
    slug: generateSlug('Cheese Block'),
    category: 'Dairy',
    price: 900,
    unit: '500g',
    image: 'Cheese',
    color: 'F0E68C',
    description: 'Firm cheese block with a rich, nutty flavor.',
  },
  {
    id: 19,
    name: 'Cream',
    slug: generateSlug('Cream'),
    category: 'Dairy',
    price: 700,
    unit: '250ml',
    image: 'Cream',
    color: 'FFFDD0',
    description: 'Fresh cream from highland dairy, perfect for desserts.',
  },
  {
    id: 20,
    name: 'Butter Nuggets',
    slug: generateSlug('Butter Nuggets'),
    category: 'Dairy',
    price: 1200,
    unit: '250g',
    image: 'Butter Nuggets',
    color: 'FAFAD2',
    description: 'Small nuggets of high-quality butter, perfect for cooking.',
  },
];

// -------------------- Crystals --------------------
export const crystalProducts: Product[] = [
  {
    id: 21,
    name: 'Quartz',
    slug: generateSlug('Quartz'),
    category: 'Crystals',
    price: 4500,
    unit: 'Per Specimen',
    image: 'Quartz',
    color: 'F4E3E3',
    description: 'Clear quartz crystal, naturally formed in Ruby Valley.',
  },
  {
    id: 22,
    name: 'Tourmaline',
    slug: generateSlug('Tourmaline'),
    category: 'Crystals',
    price: 6000,
    unit: 'Per Specimen',
    image: 'Tourmaline',
    color: '800080',
    description: 'Rare high-altitude tourmaline crystals.',
  },
  {
    id: 23,
    name: 'Amethyst',
    slug: generateSlug('Amethyst'),
    category: 'Crystals',
    price: 7200,
    unit: 'Per Geode',
    image: 'Amethyst',
    color: '9966CC',
    description: 'Deep purple amethyst geodes from Ruby Valley.',
  },
  {
    id: 24,
    name: 'Salt Lamp',
    slug: generateSlug('Salt Lamp'),
    category: 'Crystals',
    price: 3500,
    unit: 'Small Lamp',
    image: 'Salt Lamp',
    color: 'FFC0CB',
    description: 'Natural salt lamp with a warm glow, sourced from Himalayan mines.',
  },
  {
    id: 25,
    name: 'Garnet',
    slug: generateSlug('Garnet'),
    category: 'Crystals',
    price: 500,
    unit: '10g',
    image: 'Garnet',
    color: '800000',
    description: 'High-quality garnet crystals, deep red color.',
  },
  {
    id: 26,
    name: 'Clear Quartz',
    slug: generateSlug('Clear Quartz'),
    category: 'Crystals',
    price: 1500,
    unit: 'Single Point',
    image: 'Clear Quartz',
    color: 'FFFFFF',
    description: 'Clear quartz points for healing and meditation.',
  },
  {
    id: 27,
    name: 'Ruby Fragment',
    slug: generateSlug('Ruby Fragment'),
    category: 'Crystals',
    price: 12000,
    unit: 'Per Fragment',
    image: 'Ruby',
    color: '852C30',
    description: 'Natural ruby fragments with vibrant red color.',
  },
  {
    id: 28,
    name: 'Sapphire',
    slug: generateSlug('Sapphire'),
    category: 'Crystals',
    price: 9000,
    unit: 'Per Specimen',
    image: 'Sapphire',
    color: '0F52BA',
    description: 'Deep blue sapphire crystals from Ruby Valley.',
  },
  {
    id: 29,
    name: 'Topaz',
    slug: generateSlug('Topaz'),
    category: 'Crystals',
    price: 7500,
    unit: 'Per Specimen',
    image: 'Topaz',
    color: 'FFD700',
    description: 'Golden topaz crystals, high-quality specimens.',
  },
  {
    id: 30,
    name: 'Moonstone',
    slug: generateSlug('Moonstone'),
    category: 'Crystals',
    price: 6500,
    unit: 'Per Specimen',
    image: 'Moonstone',
    color: 'F0F8FF',
    description: 'Glistening moonstone with natural shimmer.',
  },
];

// -------------------- Water --------------------
export const waterProducts: Product[] = [
  {
    id: 31,
    name: 'Ruby Glacial Water',
    slug: generateSlug('Ruby Glacial Water'),
    category: 'Water',
    price: 800,
    unit: 'Case (12x1L)',
    image: 'Water',
    color: 'A0D2EB',
    description: `Ruby Glacial Water is sourced from a pristine glacier at 5,200 meters in Ruby Valley. Bottled in glass within 24 hours to preserve purity.`,
    bulkDiscounts: [
      { minQty: 3, maxQty: 5, price: 750 },
      { minQty: 6, maxQty: 11, price: 700 },
      { minQty: 12, price: 650 },
    ],
    reviews: [
      { name: 'Ramesh B.', location: 'Kathmandu', rating: 5, comment: "Cleanest water I’ve ever tasted. No plastic aftertaste." },
      { name: 'Elena S.', location: 'Switzerland', rating: 5, comment: "Like drinking from a mountain spring. My skin and energy feel better." },
    ],
    faqs: [
      { question: 'Is it really from a glacier?', answer: 'Yes. Sourced directly from a living glacier at 5,200m.' },
      { question: 'Why glass bottles?', answer: 'Preserves purity and is recyclable.' },
    ],
  },
  {
    id: 32,
    name: 'Sparkling Water',
    slug: generateSlug('Sparkling Water'),
    category: 'Water',
    price: 950,
    unit: 'Case (12x750ml)',
    image: 'Sparkling Water',
    color: 'ADD8E6',
    description: 'Refreshing sparkling water naturally carbonated from Ruby Valley springs.',
  },
  {
    id: 33,
    name: 'Mineral Tablets',
    slug: generateSlug('Mineral Tablets'),
    category: 'Water',
    price: 1200,
    unit: '30 Tablets',
    image: 'Tablets',
    color: 'F0F8FF',
    description: 'High-mineral effervescent tablets to balance hydration.',
  },
  {
    id: 34,
    name: 'Spring Water',
    slug: generateSlug('Spring Water'),
    category: 'Water',
    price: 700,
    unit: '1L',
    image: 'Spring Water',
    color: 'B0E0E6',
    description: 'Pure spring water sourced locally in Ruby Valley.',
  },
  {
    id: 35,
    name: 'Mountain Water',
    slug: generateSlug('Mountain Water'),
    category: 'Water',
    price: 900,
    unit: '1L',
    image: 'Mountain Water',
    color: '87CEFA',
    description: 'Fresh mountain water collected from high-altitude springs.',
  },
  {
    id: 36,
    name: 'Glacier Water',
    slug: generateSlug('Glacier Water'),
    category: 'Water',
    price: 850,
    unit: '1L',
    image: 'Glacier Water',
    color: '4682B4',
    description: 'Crystal-clear glacier water with natural minerals.',
  },
  {
    id: 37,
    name: 'Alpine Water',
    slug: generateSlug('Alpine Water'),
    category: 'Water',
    price: 1000,
    unit: '1L',
    image: 'Alpine Water',
    color: '5F9EA0',
    description: 'Pure alpine water from Ruby Valley mountains.',
  },
  {
    id: 38,
    name: 'Crystal Spring',
    slug: generateSlug('Crystal Spring'),
    category: 'Water',
    price: 950,
    unit: '1L',
    image: 'Crystal Spring',
    color: 'ADD8E6',
    description: 'Fresh spring water with natural minerals for hydration.',
  },
  {
    id: 39,
    name: 'Blue River Water',
    slug: generateSlug('Blue River Water'),
    category: 'Water',
    price: 1100,
    unit: '1L',
    image: 'Blue River Water',
    color: '1E90FF',
    description: 'Pure water from Ruby Valley’s Blue River, rich in minerals.',
  },
  {
    id: 40,
    name: 'Pure Glacier',
    slug: generateSlug('Pure Glacier'),
    category: 'Water',
    price: 1200,
    unit: '1L',
    image: 'Pure Glacier',
    color: '87CEEB',
    description: 'Sustainably sourced glacier water with crisp taste.',
  },
];

// -------------------- All Products --------------------
export const allProducts: Product[] = [
  ...produceProducts,
  ...dairyProducts,
  ...crystalProducts,
  ...waterProducts,
];
