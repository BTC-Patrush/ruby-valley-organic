'use client';

import React from 'react';

const storyBeats = [
  {
    title: "Reading the Rock",
    text: `It begins with men like Tenba, a miner whose family has lived in this valley for centuries. 
           He carries no modern GPS, only the knowledge passed down from his grandfather. 
           After the monsoons, when the rock is washed clean, he leads a small team up goat tracks to the "high places." 
           He's not looking for crystals; he's "reading the rock," searching for the tell-tale white "serpent" veins of quartz that signal a potential pocket.`,
    imgSrc: "/images/crystal/Reading Crystal.png",
    imgAlt: "Himalayan guide",
    imgLeft: true,
  },
  {
    title: "The Mountain's Pocket",
    text: `This is not dynamite-and-dust mining. This is archaeology. 
           A promising vein might lead to a "vug" or "pocket"—a small cavern hidden within the solid gneiss. 
           Finding one is rare. Opening it is like discovering a hidden geode the size of a car. 
           Inside, shielded from light for 10 million years, is the glittering lining of crystals, pointing inward like stars in a dark sky.`,
    imgSrc: "/images/crystal/Crystal Pocket.png",
    imgAlt: "Crystal vug in rock",
    imgLeft: false,
  },
  {
    title: "By Hand, By Headlamp",
    text: `The real work is slow. Using headlamps and hand tools—padded chisels, small pry bars, and gloved hands—the team works for days. 
           The goal is not to break the rock, but to *free* the crystal, preserving its delicate matrix. 
           They carefully extract each piece, wrap it in cloth, and carry it down the same treacherous paths. 
           They take only what the mountain clearly offers, leaving the rest for another season. This is the Ruby Valley way.`,
    imgSrc: "/images/crystal/Hand Extraction.png",
    imgAlt: "Hand tools for mining",
    imgLeft: true,
  },
];

export default function ExtractionStory() {
  return (
    <section id="extraction-story" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
            The Ruby Valley Way
          </h2>
          <h3 className="text-5xl font-header font-bold mb-8 text-charcoal">
            The Crystal Hunters
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our sourcing is not a commercial mining operation. It is a story of local knowledge, seasonal treks, and generational respect for the mountains.
          </p>
        </div>

        {/* Story Beats */}
        <div className="space-y-16">
          {storyBeats.map((beat, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center"
            >
              {beat.imgLeft && (
                <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-[280px] sm:h-80 md:h-[360px]">
                    <img
                      src={beat.imgSrc}
                      alt={beat.imgAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              <div className="md:col-span-3">
                <h4 className="text-2xl font-header font-bold text-charcoal mb-3">
                  {beat.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{beat.text}</p>
              </div>

              {!beat.imgLeft && (
                <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-[280px] sm:h-80 md:h-[360px]">
                    <img
                      src={beat.imgSrc}
                      alt={beat.imgAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
