"use client";

import React from "react";

const StoryMissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 md:py-32 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Left Column: Mission Statement */}
        <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg border-t-4 border-ruby">
          <p className="text-sm font-semibold uppercase tracking-wider text-ruby mb-2">
            Our Pledge
          </p>
          <h2 className="font-header text-4xl font-bold text-charcoal mb-4">
            Ethical Sourcing, Purest Quality
          </h2>
          <p className="text-lg text-gray-700">
            Ruby Valley exists to create a sustainable bridge between the high-altitude farmers and artisans of the Himalayas and the world. We ensure fair wages, preserve traditional practices, and minimize ecological impact.
          </p>
        </div>

        {/* Right Columns: Core Pillars */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-green-700/50">
            <div className="text-5xl shrink-0 text-green-700">🌱</div>
            <div>
              <h3 className="font-header text-2xl font-semibold mb-2">
                Sustainable Agriculture
              </h3>
              <p className="text-gray-600">
                Our produce, from heirloom coffee beans to wild mushrooms, is grown without pesticides in nutrient-rich mountain soil. We practice crop rotation and water conservation, honoring the delicate balance of the high-altitude ecosystem.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500/50">
            <div className="text-5xl shrink-0 text-amber-600">💪</div>
            <div>
              <h3 className="font-header text-2xl font-semibold mb-2">
                Community Empowerment
              </h3>
              <p className="text-gray-600">
                Every purchase directly supports the livelihoods of local families, providing education and infrastructure in remote villages. We pay above fair trade prices, ensuring cultural preservation and economic independence.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500/50">
            <div className="text-5xl shrink-0 text-blue-600">💧</div>
            <div>
              <h3 className="font-header text-2xl font-semibold mb-2">
                Pristine Sourcing
              </h3>
              <p className="text-gray-600">
                Whether it’s glacial water, hand-mined crystals, or yak dairy, our promise is uncompromised purity. We source our goods from altitudes rarely reached, guaranteeing a quality untainted by modern pollution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryMissionSection;
