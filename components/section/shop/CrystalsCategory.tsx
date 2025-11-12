'use client';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import { crystalProducts, Product } from '@/data/products';

export default function CrystalsCategory() {
  const crystals: Product[] = crystalProducts.filter(p => p.category === 'Crystals');

  return (
    <CategorySection
      title="Crystals & Earth: Raw Himalayan Treasures"
      subtitle="Hand-mined Quartz, Rubies, and Amethyst. The energy of the peaks."
      bgColor="bg-purple-50"
      categoryId="crystals"
    >
      {crystals.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </CategorySection>
  );
}
