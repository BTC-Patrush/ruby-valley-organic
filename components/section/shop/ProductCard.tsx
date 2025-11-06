'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const folderMap: Record<string, string> = {
    Crystals: 'crystal',
    Dairy: 'dairy',
    Produce: 'produce',
    Water: 'water',
  };

  const folder = folderMap[product.category] || 'misc';
  const basePath = `/images/${folder}/${product.image}`;
  const [imgSrc, setImgSrc] = useState(`${basePath}.png`);

  const fallbackUrl = `https://placehold.co/400x300/${product.color.replace(
    '#',
    ''
  )}/852C30?text=${encodeURIComponent(product.image)}`;

  const tagStyles =
    {
      Dairy: { bg: 'bg-gray-200', text: 'text-charcoal' },
      Produce: { bg: 'bg-green-100', text: 'text-green-700' },
      Crystals: { bg: 'bg-purple-100', text: 'text-purple-700' },
      Water: { bg: 'bg-blue-100', text: 'text-blue-700' },
    }[product.category] || { bg: 'bg-gray-100', text: 'text-gray-600' };

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group min-w-[250px] sm:min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-ruby focus-visible:outline-offset-2"
      aria-label={`View ${product.name}`}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imgSrc}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL={fallbackUrl}
          onError={() =>
            setImgSrc(imgSrc.endsWith('.png') ? `${basePath}.jpg` : fallbackUrl)
          }
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Product Content */}
      <div className="p-4 flex flex-col grow">
        <span
          className={`text-xs font-semibold uppercase tracking-wider ${tagStyles.bg} ${tagStyles.text} px-2.5 py-1 rounded-full mb-2 inline-block w-fit`}
        >
          {product.category}
        </span>

        <h3 className="font-header font-semibold text-lg text-charcoal mb-1 line-clamp-2 group-hover:text-ruby transition-colors">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mb-3">{product.unit}</p>

        <div className="flex justify-between items-center mt-auto">
          <p className="text-ruby font-bold text-lg">
            NPR {product.price.toLocaleString()}
          </p>
          <span className="bg-ruby text-white text-xs font-medium py-1.5 px-3 rounded-lg transition-all group-hover:bg-red-900">
            View Story
          </span>
        </div>
      </div>
    </Link>
  );
}
