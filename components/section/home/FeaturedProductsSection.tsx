"use client";

import React from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  imageUrl: string;
  link: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Aged Yak Chhurpi",
    category: "Dairy & Livestock",
    price: "NPR 1,200",
    imageUrl: "/images/home/churpii.png",
    link: "#yak-story",
  },
  {
    id: 2,
    name: "Raw Quartz Cluster",
    category: "Crystals & Earth",
    price: "NPR 4,500",
    imageUrl: "/images/home/crystal.png",
    link: "#crystals",
  },
  {
    id: 3,
    name: "Seasonal Mountain Apples",
    category: "Organic Produce",
    price: "NPR 350 / Kg",
    imageUrl: "/images/home/apple.png",
    link: "#",
  },
  {
    id: 4,
    name: "Ruby Glacial Water (Pack)",
    category: "Source Water",
    price: "NPR 800",
    imageUrl: "/images/home/gwater.png",
    link: "#water-source",
  },
];

const FeaturedProductsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-header font-bold text-center mb-12 text-charcoal">
        The Valley's Current Harvest
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="font-header font-semibold text-lg text-charcoal">
                {product.name}
              </h4>
              <p className="text-xs text-gray-500 mb-2">{product.category}</p>
              <p className="text-ruby font-bold text-xl mb-4">{product.price}</p>
              <a
                href={product.link}
                className="block text-center text-white text-sm py-2 rounded-lg bg-gray-700 transition duration-300"
              >
                View Story & Buy
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-ruby text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-red-900 transition duration-300"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
