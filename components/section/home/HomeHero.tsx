"use client";

export default function HomeHero() {
  return (
    <section className="hero-bg h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
      <div className="max-w-4xl px-4">
        <h1 className="font-header text-5xl sm:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
          Himalayan Source. Unrivaled Purity.
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 drop-shadow-md">
          Source organic produce, glacier water, and artisan crystals. Direct from
          Nepal's pristine peaks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#pillars"
            className="bg-ruby text-white font-bold py-3 px-8 rounded-xl shadow-xl hover:bg-red-900 transition duration-300 transform hover:scale-105"
          >
            Shop the Valley Harvest
          </a>
          <a
            href="#crystals"
            className="bg-white text-charcoal font-bold py-3 px-8 rounded-xl shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Discover Crystals
          </a>
        </div>
      </div>
    </section>
  );
}
