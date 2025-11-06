"use client";

import Image from "next/image";

export default function CrystalGeology() {
  return (
    <section className="py-12 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Text Content */}
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
          <h2 className="font-header text-3xl sm:text-4xl font-bold text-ruby mb-3 sm:mb-4">
            Geological Pressure, Spiritual Purity
          </h2>

          <p>
            The <strong>Himalayas</strong> were formed by massive, intense pressure, which is
            precisely why the mineral deposits here are so unique. This process creates
            high-clarity quartz and concentrates vibrant minerals like tourmaline and corundum.
          </p>

          <p>
            We work exclusively with small, family-owned mining operations that rely on{" "}
            <strong>traditional hand-mining methods</strong>. This slow, arduous process ensures
            minimal ecological impact and preserves the natural structure and energy of each
            specimen. We never deal with commercial, large-scale industrial mining.
          </p>

          <p>
            For us, stones are not commodities; they are gifts from the mountain, handled with
            reverence and ensuring <strong>fair compensation</strong> for the remote communities who
            retrieve them.
          </p>
        </div>

        {/* Right Image Content */}
        <div className="p-3 sm:p-4 bg-gray-100 rounded-xl shadow-lg border">
          <div className="relative w-full h-0 pb-[66%] rounded-lg overflow-hidden">
            <Image
              src="https://placehold.co/600x400/999999/FFFFFF?text=Himalayan+Mining+Process"
              alt="Illustration of hand-mining in the mountains"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
