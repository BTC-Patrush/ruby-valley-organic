'use client';
import Link from 'next/link';
import ProductCard from './ProductCard';
import CategorySection from './CategorySection';
import { dairyProducts, Product } from '@/data/products';

export default function ProduceCategory() {
  const produce: Product[] = dairyProducts.filter(p => p.category === 'Dairy');

  return (
    <CategorySection
      title="Dairy & Livestock: Yak Cheese & Wool"
      subtitle="Authentic, free-roaming animal products from 4,000m+ pastures."
      bgColor="bg-cream-50"
      categoryId="dairy"
    >
      {produce.map((p) => (
        <Link key={p.id} href={`/shop/${p.slug}`}>
          <ProductCard product={p} />
        </Link>
      ))}
    </CategorySection>
  );
}
