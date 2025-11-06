// components/FeaturedCollection.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string; // filename without .png
  color: string; // hex without #
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Raw Ruby in Matrix',
    category: 'Crystals & Earth',
    price: 12000,
    image: 'Ruby',
    color: '852C30',
  },
  {
    id: 2,
    name: 'Raw Quartz Cluster',
    category: 'Crystals & Earth',
    price: 4500,
    image: 'Quartz',
    color: 'F4E3E3',
  },
  {
    id: 3,
    name: 'Black Tourmaline Log',
    category: 'Crystals & Earth',
    price: 3800,
    image: 'Tourmaline',
    color: '2C3E50',
  },
  {
    id: 4,
    name: 'Gem-Grade Aquamarine',
    category: 'Crystals & Earth',
    price: 8500,
    image: 'Aquamarine',
    color: 'A0D2EB',
  },
];

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-header font-bold text-center mb-12 text-charcoal">
          The Ruby Valley Collection
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const imagePath = `/images/crystal/${product.image}.png`;
            const fallbackUrl = `https://placehold.co/400x300/${product.color}/F5F5DC?text=${encodeURIComponent(product.image)}`;

            return (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group block bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={imagePath}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={fallbackUrl}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = fallbackUrl;
                      target.srcset = '';
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 space-y-2">
                  <h4 className="font-header font-semibold text-lg text-charcoal line-clamp-2 group-hover:text-ruby transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-500">{product.category}</p>
                  <p className="text-ruby font-bold text-xl">
                    NPR {product.price.toLocaleString()}
                  </p>
                  <span className="block text-white text-center bg-charcoal  text-sm font-medium py-2 rounded-lg hover:bg-gray-700 transition duration-300 mt-3">
                    View Specimen
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}