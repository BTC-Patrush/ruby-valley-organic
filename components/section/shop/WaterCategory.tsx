'use client';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import { waterProducts, Product } from '@/data/products';

export default function WaterCategory() {
  const water: Product[] = waterProducts.filter((p) => p.category === 'Water');

  return (
    <CategorySection
      title="Glacial Water: Purest Source on Earth"
      subtitle="Naturally filtered, mineral-rich drinking water, bottled at the source."
      bgColor="bg-blue-50"
      categoryId="water"
    >
      {water.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </CategorySection>
  );
}
