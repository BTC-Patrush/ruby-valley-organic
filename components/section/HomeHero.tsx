// app/components/HomeHero.tsx
import Link from 'next/link';


export default function HomeHero() {
  return (
    <section className="hero-bg flex h-[60vh] items-center justify-center text-center md:h-[80vh] bg-cover bg-center">
      <div className="max-w-4xl px-4">
        <h1 className="font-header mb-4 text-5xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-7xl">
          Himalayan Source. Unrivaled Purity.
        </h1>
        <p className="mb-8 text-xl text-white drop-shadow-md sm:text-2xl">
          Source organic produce, glacier water, and artisan crystals. Direct from Nepal&apos;s pristine peaks.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <Link
            href="#pillars"
            className="transform rounded-xl bg-ruby px-8 py-3 font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-red-900"
          >
            Shop the Valley Harvest
          </Link>
          <Link
            href="#crystals"
            className="transform rounded-xl bg-white px-8 py-3 font-bold text-charcoal shadow-xl transition duration-300 hover:scale-105 hover:bg-gray-100"
          >
            Discover Crystals
          </Link>
        </div>
      </div>
    </section>
  );
}