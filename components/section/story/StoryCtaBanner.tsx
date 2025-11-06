"use client";

import React from "react";

const StoryCtaBanner: React.FC = () => {
  return (
    <section className="bg-ruby text-cream py-16 md:py-20 text-center">
      <h2 className="font-header text-4xl md:text-5xl font-bold mb-4">
        Ready to Taste the Valley?
      </h2>
      <p className="text-xl max-w-2xl mx-auto mb-8">
        Explore our full collection of rare produce, pure glacial water, and powerful earth treasures.
      </p>
      <a
        href="shop.html"
        className="bg-white text-ruby font-bold px-8 py-3 rounded-lg text-lg shadow-xl hover:bg-gray-200 transition duration-300"
      >
        Shop All Himalayan Treasures
      </a>
    </section>
  );
};

export default StoryCtaBanner;
