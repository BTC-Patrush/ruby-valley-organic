"use client";

import React from "react";
import Image from "next/image";

const CrystalSection: React.FC = () => {
  return (
    <section id="crystals" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Crystal Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl lg:order-2">
          <Image
            src="/assets/img/ruby.png"
            alt="Himalayan Crystals"
            width={800}
            height={600}
            className="w-full h-auto object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Crystal Story Details */}
        <div className="py-4 lg:order-1">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-ruby mb-2">
            Earth Treasures & Mystique
          </h2>
          <h3 className="text-5xl font-header font-bold mb-6 text-charcoal">
            The Artisan Crystal Collection
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The valley is named Ruby Valley for a reason. Here, deep in the geologically active heart of the Himalayas, we carefully extract raw Quartz, Tourmaline, and Corundum (Ruby) specimens.
          </p>

          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="flex items-start">
              <span className="text-xl text-ruby mr-3">✦</span>
              <span><strong>Hand-Mined Purity:</strong> Respectfully sourced by local miners, ensuring minimal environmental impact.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-ruby mr-3">✦</span>
              <span><strong>Unique Formations:</strong> Raw, untouched clusters and specimens, prized for their unique geological features and energy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-xl text-ruby mr-3">✦</span>
              <span><strong>Certificate of Origin:</strong> Each high-value stone comes with documented provenance from Ruby Valley.</span>
            </li>
          </ul>

          <a
            href="#"
            className="inline-block border-2 border-charcoal text-charcoal font-bold py-3 px-8 rounded-lg shadow-md hover:bg-charcoal hover:text-white transition duration-300"
          >
            View All Crystals
          </a>
        </div>
      </div>
    </section>
  );
};

export default CrystalSection;
