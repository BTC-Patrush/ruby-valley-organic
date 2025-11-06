"use client";

import React from "react";

const HomePillarsSection: React.FC = () => {
  return (
    <section
      id="pillars"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-header font-bold text-center mb-12 text-charcoal">
        Gifts from the High Peaks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pillar 1: Organic Produce */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 border border-gray-100">
          <div
            className="w-16 h-16 bg-cream rounded-full mb-4 flex items-center justify-center text-3xl mx-auto"
            style={{ color: "var(--color-green)" }}
          >
            🌿
          </div>
          <h3 className="text-2xl font-header font-semibold text-center mb-3 text-charcoal">
            Organic & Altitude
          </h3>
          <p className="text-center text-gray-600 mb-4">
            Produce grown above 3,000m, nourished by pristine glacial melt. Taste
            the purity of nature, untouched by pollutants.
          </p>
          <a
            href="#"
            className="block text-center text-ruby font-medium hover:underline"
          >
            Explore Fruits & Vegetables &rarr;
          </a>
        </div>

        {/* Pillar 2: Crystals */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 border border-gray-100">
          <div
            className="w-16 h-16 bg-cream rounded-full mb-4 flex items-center justify-center text-3xl mx-auto"
            style={{ color: "var(--color-ruby)" }}
          >
            💎
          </div>
          <h3 className="text-2xl font-header font-semibold text-center mb-3 text-charcoal">
            Crystals & Earth Treasures
          </h3>
          <p className="text-center text-gray-600 mb-4">
            Hand-mined Quartz and Rubies from the valley's ancient earth. Each
            piece holds the energy of the Himalayas.
          </p>
          <a
            href="#crystals"
            className="block text-center text-ruby font-medium hover:underline"
          >
            View Artisan Crystals &rarr;
          </a>
        </div>

        {/* Pillar 3: Dairy & Livestock */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 border border-gray-100">
          <div
            className="w-16 h-16 bg-cream rounded-full mb-4 flex items-center justify-center text-3xl mx-auto"
            style={{ color: "var(--color-charcoal)" }}
          >
            🧀
          </div>
          <h3 className="text-2xl font-header font-semibold text-center mb-3 text-charcoal">
            Dairy & High-Altitude Goods
          </h3>
          <p className="text-center text-gray-600 mb-4">
            Premium Yak and Sheep dairy products, created by animals grazing
            freely on native, mineral-rich pastures.
          </p>
          <a
            href="#yak-story"
            className="block text-center text-ruby font-medium hover:underline"
          >
            Shop Yak Cheese & Wool &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePillarsSection;
