"use client";

import React from "react";
import Image from "next/image";

const EthicalSourcingSection: React.FC = () => {
  const highlights = [
    {
      value: "100%",
      description: "Organic & Fertilizer-Free Farming",
    },
    {
      value: "Direct",
      description: "Payment to Local Producers",
    },
    {
      value: "Low Impact",
      description: "Sustainable Mining Practices",
    },
    {
      value: "Future",
      description: "Investment in Village Education",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="py-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-2">
            Our Pledge
          </h2>
          <h3 className="text-5xl font-header font-bold mb-6 text-charcoal">
            Sustainable Harvest, Shared Future
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Ruby Valley Trading is committed to ethical practices. This means never compromising the delicate Himalayan environment for profit, and ensuring fair, direct wages for every local farmer, herder, and miner.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx}>
                <span className="text-2xl font-bold text-green-700 block">{item.value}</span>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block border-2 border-green-700 text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-green-700 hover:text-white transition duration-300"
          >
            Learn About Our Impact
          </a>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/home/trade.png"
            alt="Sustainability commitment"
            width={800}
            height={600}
            className="w-full h-auto object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default EthicalSourcingSection;
