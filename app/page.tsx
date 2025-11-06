// app/page.tsx


import HomeHero from "../components/section/HomeHero";
import HomePillarsSection from "@/components/section/HomePillarsSection";
import HomeMissionSection from "@/components/section/HomeStorySection";
import WaterSection from "@/components/section/WaterSection";
import CrystalSection from "@/components/section/CrystalSection";
import DeliverySection from "@/components/section/DeliverySection";
import YakStorySection from "@/components/section/YakStorySection";
import FeaturedProductsSection from "@/components/section/FeaturedProductsSection";
import TestimonialsSection from "@/components/section/TestimonialsSection";
import EthicalSourcingSection from "@/components/section/EthicalSourcingSection";
import NewsletterCTA from "@/components/section/NewsletterCTA";

// The main page component acts as the 'index.html' body content
export default function HomePage() {
  return (
    <>
     
      <main>
        <HomeHero />
        <HomePillarsSection />
        <HomeMissionSection />
        <WaterSection />
        <CrystalSection />

        <DeliverySection />

        <YakStorySection />

        <FeaturedProductsSection />

        <TestimonialsSection />

        <EthicalSourcingSection />

        <NewsletterCTA />
      </main>
      
    </>
  );
}
