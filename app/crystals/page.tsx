// app/crystal/page.tsx
import CrystalHero from "@/components/section/crystal/CrystalHero";

import GeologicalStory from "@/components/section/crystal/GeologicalStory";
import ExtractionStory from "@/components/section/crystal/ExtractionStory";
import FeaturedCollection from "@/components/section/crystal/FeaturedCollection";
import EthicalSourcing from "@/components/section/crystal/EthicalSourcing";

export default function CrystalPage() {
  return (
    <main className="bg-white text-gray-900">
      <CrystalHero />
      <GeologicalStory />
      <ExtractionStory />
      <FeaturedCollection />
      <EthicalSourcing />
    </main>
  );
}
