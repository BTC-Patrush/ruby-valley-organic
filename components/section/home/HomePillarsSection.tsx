// components/section/HomePillarsSection.tsx
"use client";

import Link from "next/link";

type Pillar = {
  title: string;
  icon: "leaf" | "gem" | "cheese" | "droplet" | "mountain";
  color: "green" | "ruby" | "charcoal";
  description: string;
  ctaText: string;
  ctaLink?: string; // ← Allow undefined
};

type Props = {
  title?: string;
  pillars: Pillar[];
};

const colorMap: Record<string, string> = {
  green: "var(--color-green)",
  ruby: "var(--color-ruby)",
  charcoal: "var(--color-charcoal)",
};

const emojiMap: Record<string, string> = {
  leaf: "leaf",
  gem: "gem",
  cheese: "cheese",
  droplet: "droplet",
  mountain: "mountain",
};

export default function HomePillarsSection({ title = "Gifts from the High Peaks", pillars = [] }: Props) {
  if (!pillars.length) return null;

  return (
    <section id="pillars" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-header font-bold text-center mb-12 text-charcoal">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div
              className="w-16 h-16 bg-cream rounded-full mb-4 flex items-center justify-center text-3xl mx-auto transition-transform group-hover:scale-110"
              style={{ color: colorMap[pillar.color] }}
            >
              {emojiMap[pillar.icon] || "star"}
              {/* 🌿 */}
            </div>

            <h3 className="text-2xl font-header font-semibold text-center mb-3 text-charcoal">
              {pillar.title}
            </h3>

            <p className="text-center text-gray-600 mb-4 line-clamp-3">
              {pillar.description}
            </p>

            {/* FIXED: Fallback for ctaLink */}
            <Link
              href={pillar.ctaLink || "#"} // ← This prevents undefined
              className="block text-center text-ruby font-medium hover:underline transition-colors"
            >
              {pillar.ctaText} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}