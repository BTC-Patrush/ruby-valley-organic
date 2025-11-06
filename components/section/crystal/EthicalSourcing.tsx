'use client';

import React from 'react';

export default function EthicalSourcing() {
  return (
    <section id="ethical-sourcing" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Content --- */}
        <div className="py-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
            Our Pledge
          </h2>
          <h3 className="text-5xl font-header font-bold mb-6 text-charcoal">
            Respect for the Source
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Ruby Valley Trading is built on a foundation of respect. We are committed to ethical, 
            low-impact sourcing that honors both the delicate Himalayan environment and the 
            local communities who are its guardians.
          </p>

          {/* --- Stats Grid --- */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { label: 'Explosives or Heavy Machinery', value: 'Zero' },
              { label: 'Payment & Partnership with Miners', value: 'Direct' },
              { label: 'Hand-Extraction Methods Only', value: 'Low Impact' },
              { label: "Investment in Miners' Families", value: 'Community' },
            ].map((item, index) => (
              <div key={index}>
                <span className="text-2xl font-bold text-green-700 block">
                  {item.value}
                </span>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* --- CTA Button --- */}
          <a
            href="/story"
            className="inline-block border-2 border-green-700 text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
          >
            Learn About Our Impact
          </a>
        </div>

        {/* --- Image --- */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/images/crystal/Ethical Trade.png"
            alt="Sustainability commitment"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
