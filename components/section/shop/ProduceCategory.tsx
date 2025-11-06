'use client';
import Link from 'next/link';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import { produceProducts, Product } from '@/data/products';

export default function ProduceCategory() {
  const produce: Product[] = produceProducts.filter(p => p.category === 'Produce');

  return (
    <CategorySection
      title="Organic Produce: Fruits & Vegetables"
      subtitle="High-altitude freshness. Pesticide-free, nutrient-rich harvest."
      bgColor="bg-green-50"
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
