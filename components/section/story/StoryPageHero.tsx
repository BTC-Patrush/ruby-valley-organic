"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://placehold.co/1600x900/4D7A4F/FBF7F4?text=Himalayan+Vista"
        alt="High altitude Himalayan vista"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-12 bg-charcoal/70 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20">
        <p className="text-white text-xl uppercase tracking-widest font-semibold mb-4">
          The World's Highest Source
        </p>
        <h1 className="font-header text-6xl md:text-8xl font-bold text-cream leading-tight">
          Ruby Valley
        </h1>
        <p className="text-xl md:text-2xl text-white mt-4">
          Where purity and tradition meet the sky.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
