"use client";

import React from "react";
import Image from "next/image";

const YakStorySection: React.FC = () => {
  return (
    <section id="yak-story" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/img/yak.png"
            alt="Traditional Yak Herding"
            width={800}
            height={600}
            className="w-full h-auto object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Product Story Details */}
        <div className="py-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
            The Story Behind the Product
          </h2>
          <h3 className="text-5xl font-header font-bold mb-6 text-charcoal">
            Aged Yak Chhurpi: From High Pasture to Plate
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our Yak cheese comes from free-roaming herds grazing on medicinal herbs and
            mineral-rich grasses found only at 4,500 meters. The result is a unique,
            complex flavor profile superior to standard dairy.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-xl text-green-700 mr-3">✓</span>
              <span><strong>Traditional Craftsmanship:</strong> Aged using age-old techniques passed down through village families.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-green-700 mr-3">✓</span>
              <span><strong>High-Protein Purity:</strong> A dense nutritional profile, perfect for trekking or a healthy lifestyle in the city.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-green-700 mr-3">✓</span>
              <span><strong>Ethical Sourcing:</strong> Directly supporting the high-altitude herder communities of Ruby Valley.</span>
            </li>
          </ul>

          <a
            href="#"
            className="inline-block bg-ruby text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-900 transition duration-300"
          >
            Buy Yak Chhurpi Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default YakStorySection;
