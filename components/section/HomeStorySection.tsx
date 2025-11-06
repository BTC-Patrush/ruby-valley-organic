"use client";

import React from "react";
import Image from "next/image";

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Story Text */}
        <div className="lg:order-2">
          <h2 className="text-5xl font-header font-bold mb-6 text-charcoal">
            More Than a Product: A Valley&apos;s Legacy.
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In <strong>Ruby Valley</strong>, production isn&apos;t automated; it&apos;s a
            careful, generations-old process. Every fruit, vegetable, crystal,
            and dairy item is a direct reflection of our unspoiled environment.
            Our proximity to the highest peaks ensures an extremely high quality
            of soil, air, and, most crucially, water.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-semibold">
            When you purchase from us, you receive a piece of the Himalayan
            story—a commitment to purity and sustainable living that we are now
            proud to share with Kathmandu, Pokhara, and all of Nepal.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-ruby text-ruby font-bold py-3 px-8 rounded-lg hover:bg-ruby hover:text-white transition duration-300"
          >
            Read Our Full Story
          </a>
        </div>

        {/* Story Image */}
        <div className="lg:order-1 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/img/communtity.png"
            alt="Ruby Valley community and mountains"
            width={800}
            height={600}
            className="w-full h-auto object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
