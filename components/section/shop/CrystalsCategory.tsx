'use client';
import Link from 'next/link';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import { crystalProducts, Product } from '@/data/products';

export default function ProduceCategory() {
  const produce: Product[] = crystalProducts.filter(p => p.category === 'Crystals');

  return (
    <CategorySection
      title="Crystals & Earth: Raw Himalayan Treasures"
      subtitle="Hand-mined Quartz, Rubies, and Amethyst. The energy of the peaks."
      bgColor="bg-purple-50"
      categoryId="produce"
    >
      {produce.map((p) => (
        <Link key={p.id} href={`/shop/${p.slug}`}>
          <ProductCard product={p} />
        </Link>
      ))}
    </CategorySection>
  );
}
