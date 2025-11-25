// app/page.tsx – 100% static, no Sanity, no client, no env vars needed
import HomeHero from "@/components/section/home/HomeHero";
import HomePillarsSection from "@/components/section/home/HomePillarsSection";
import HomeMissionSection from "@/components/section/home/HomeStorySection";
import WaterSection from "@/components/section/home/WaterSection";
import CrystalSection from "@/components/section/home/CrystalSection";
import DeliverySection from "@/components/section/home/DeliverySection";
import YakStorySection from "@/components/section/home/YakStorySection";
import FeaturedProductsSection from "@/components/section/home/FeaturedProductsSection";
import TestimonialsSection from "@/components/section/home/TestimonialsSection";
import EthicalSourcingSection from "@/components/section/home/EthicalSourcingSection";
import NewsletterCTA from "@/components/section/home/NewsletterCTA";

// Optional: revalidate every 10 minutes when you add real data later
export const revalidate = 600; // 10 minutes

// Static fallback data (replace with real content whenever you want)
const data = {
  heroTitle: "Himalayan Source",
  heroSubtitle: "Pristine water & crystals from Nepal",
  heroImageUrl: "/hero-placeholder.jpg", // put a real image in public/ or use an external URL
  heroCtaPrimary: "Shop Now",
  heroCtaPrimaryLink: "#pillars",
  heroCtaSecondary: "Discover",
  heroCtaSecondaryLink: "#crystals",

  pillarsTitle: "Our Core Values",
  pillars: [
    { title: "Purity", description: "100% natural & organic" },
    { title: "Sustainability", description: "Eco-friendly practices" },
    { title: "Community", description: "Supporting local farmers" },
  ],

  // Add more static content below as needed
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <HomeHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        heroImageUrl={data.heroImageUrl}
        primaryCtaText={data.heroCtaPrimary}
        primaryCtaLink={data.heroCtaPrimaryLink}
        secondaryCtaText={data.heroCtaSecondary}
        secondaryCtaLink={data.heroCtaSecondaryLink}
      />

      {/* PILLARS */}
      <HomePillarsSection/>

      {/* All other sections – they will now work with their own defaults or empty props */}
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
  );
}