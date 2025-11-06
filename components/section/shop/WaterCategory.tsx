'use client';
import Link from 'next/link';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import { waterProducts, Product } from '@/data/products';

export default function ProduceCategory() {
  const produce: Product[] = waterProducts.filter(p => p.category === 'Water');

  return (
    <CategorySection
      title="Glacial Water: Purest Source on Earth"
      subtitle="Naturally filtered, mineral-rich drinking water, bottled at the source."
      bgColor="bg-blue-50"
      categoryId="Water"
    >
      {produce.map((p) => (
        <Link key={p.id} href={`/shop/${p.slug}`} passHref>
          <ProductCard product={p} />
        </Link>
      ))}
    </CategorySection>
  );
}
