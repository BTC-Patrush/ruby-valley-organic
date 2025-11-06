// components/GeologicalStory.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function GeologicalStory() {
  return (
    <section id="formation" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Text */}
          <div className="lg:order-1 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-ruby mb-2">
              A 50-Million-Year-Old Story
            </p>
            <h3 className="text-5xl font-header font-bold mb-6 text-charcoal leading-tight">
              Forged in Fire &amp; Time
            </h3>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ruby Valley&apos;s treasures were not made quickly. They are the children of a slow, colossal collision between continents. For <strong>50 million years</strong>, the Indian plate has pushed into Asia, giving birth to the Himalayas.
              </p>
              <p>
                Deep beneath the rising peaks, unimaginable heat and pressure cooked the ancient rock. Superheated water, rich in silica and minerals, was forced into cracks. As this potent liquid cooled over <em>millennia</em>, it began to build. Atom by atom, molecule by molecule, the perfect geometric structures of <strong>Quartz</strong>, <strong>Tourmaline</strong>, and <strong>Corundum (Ruby)</strong> grew in the dark, silent pockets of the earth.
              </p>
              <p className="font-semibold text-charcoal">
                Every crystal you hold is a piece of that ancient, fiery birth — a snapshot of the earth&apos;s power, frozen in time.
              </p>
            </div>
          </div>

          {/* Story Image */}
          <div className="lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Optional: Gradient overlay on hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            <Image
              src="/images/crystal/formation.png"
              alt="Geological formation of Himalayan crystals — tectonic collision and mineral growth"
              width={600}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAEtgK7O8CjgQAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}