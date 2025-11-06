"use client";

import React from "react";
import Image from "next/image";

const WaterSection: React.FC = () => {
  return (
    <section
      id="water-source"
      className="py-16 md:py-24 bg-[#A0D2EB]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image/Product Mockup */}
        <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
          <Image
            src="/assets/img/water.png"
            alt="Ruby Valley Glacial Water"
            width={800}
            height={600}
            className="w-full h-auto object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Content & CTA */}
        <div className="order-1 lg:order-2 py-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-charcoal mb-2">
            The Ultimate Hydration
          </h2>
          <h3 className="text-5xl font-header font-bold mb-6 text-charcoal">
            Bottled from the Glacial Source.
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>Ruby Valley Glacial Water</strong> is sourced from an aquifer fed by
            pristine, high-altitude glacial melt. It&apos;s naturally filtered through
            mineral-rich rock strata, giving it a unique, crisp taste and perfect mineral balance.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-xl text-blue-500 mr-3">✔</span>
              <span><strong>Zero Pollution:</strong> Tapped miles above the nearest human settlement.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-blue-500 mr-3">✔</span>
              <span><strong>Natural Minerals:</strong> Rich in vital electrolytes for superior hydration.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-blue-500 mr-3">✔</span>
              <span><strong>Cold-Chain Maintained:</strong> Delivered fresh and cold to Kathmandu and Pokhara.</span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <a
              href="#"
              className="inline-block bg-ruby text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-900 transition duration-300"
            >
              Order Your Pack Now
            </a>
            <p className="text-xl font-bold text-ruby">NPR 800 / Case</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterSection;
