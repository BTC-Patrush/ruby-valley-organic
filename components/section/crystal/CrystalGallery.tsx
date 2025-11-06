"use client";

import Link from "next/link";

export default function CrystalGallery() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-header text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal text-center mb-8 sm:mb-10 lg:mb-12">
          Featured Earth Specimens
        </h2>

        {/* Crystal Gallery Grid */}
        <div
          id="crystal-gallery"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {/* Example static cards (you can later map from data or API) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-[1.02] transition-transform duration-300">
            <div className="relative w-full h-60 bg-gray-200" />
            <div className="p-4 sm:p-5 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                Himalayan Quartz
              </h3>
              <p className="text-sm text-gray-500">Raw energy from the mountains</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-[1.02] transition-transform duration-300">
            <div className="relative w-full h-60 bg-gray-200" />
            <div className="p-4 sm:p-5 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                Ruby Valley Garnet
              </h3>
              <p className="text-sm text-gray-500">Rich red spiritual resonance</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-[1.02] transition-transform duration-300">
            <div className="relative w-full h-60 bg-gray-200" />
            <div className="p-4 sm:p-5 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                Himalayan Tourmaline
              </h3>
              <p className="text-sm text-gray-500">Balance and grounding energy</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-[1.02] transition-transform duration-300">
            <div className="relative w-full h-60 bg-gray-200" />
            <div className="p-4 sm:p-5 text-center">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                Mountain Topaz
              </h3>
              <p className="text-sm text-gray-500">Calm clarity and light energy</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/shop#crystals-earth"
            className="inline-block bg-ruby text-white font-bold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg shadow-xl hover:bg-red-900 transition duration-300"
          >
            View All Crystals in Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
