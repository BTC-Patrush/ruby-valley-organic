"use client";

import React from "react";

const StoryCrystalsSection: React.FC = () => {
  return (
    <section id="crystals" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lg font-semibold uppercase tracking-widest text-gray-500 mb-3">
            Geology Meets Spirituality
          </p>
          <h2 className="font-header text-5xl md:text-6xl font-bold text-charcoal mb-4">
            The Crystal Story
          </h2>
          <p className="text-xl text-gray-700">
            Discover the immense power and ancient history embedded within the earth's highest mountains.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              The Himalayas, or "Abode of Snow," are geologically the youngest and most dramatic mountain range on Earth, formed by the collision of the Indian and Eurasian tectonic plates. This immense pressure cooker of geological forces is what creates the unique mineral deposits found in the Ruby Valley region.
            </p>
            <p>
              Our crystals, including high-clarity <strong>Quartz</strong>, deep red <strong>Ruby Corundum</strong>, and magnificent <strong>Tourmaline</strong>, are all sourced from small-scale mines. These sites are often accessible only by foot and are worked by local families using traditional tools. This approach ensures the crystals are removed with minimal disturbance to the surrounding environment and with maximum respect for the material itself.
            </p>
            <blockquote className="border-l-4 border-ruby pl-4 italic text-charcoal font-semibold mt-6">
              "The mountains give us strength and clarity. The crystals are simply that clarity made tangible."
            </blockquote>
            <p>
              We believe the energy of these crystals carries the stabilizing, powerful, and clean frequency of the mountain ranges—perfect for meditation, healing, and personal grounding.
            </p>
            <a
              href="shop.html#crystals-earth"
              className="mt-6 inline-block text-lg font-medium text-ruby hover:text-red-900 transition underline"
            >
              View All Crystal Specimens
            </a>
          </div>

          {/* Right: Image */}
          <div className="p-4 bg-gray-100 rounded-xl shadow-2xl">
            <img
              src="https://placehold.co/600x400/800080/FBF7F4?text=Raw+Himalayan+Crystals"
              alt="Collection of raw Himalayan crystals"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryCrystalsSection;
