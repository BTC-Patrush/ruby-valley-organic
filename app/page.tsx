// app/page.tsx
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";

import HomeHero from "../components/section/home/HomeHero";
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

// GROQ Query — pulls EVERYTHING from homepage
const HOMEPAGE_QUERY = groq`
  *[_type == "homepage"][0] {
    // Hero
    heroTitle,
    heroSubtitle,
    "heroImageUrl": heroImage.asset->url,
    heroCtaPrimary,
    heroCtaPrimaryLink,
    heroCtaSecondary,
    heroCtaSecondaryLink,

    // Pillars
    pillars[] {
      title,
      icon,
      description
    },

    // Mission
    missionTitle,
    missionBody,

    // Water
    waterTitle,
    "waterImageUrl": waterImage.asset->url,

    // Crystal
    crystalTitle,
    crystalBody,

    // Delivery
    deliveryTitle,
    deliverySubtitle,

    // Yak Story
    yakTitle,
    yakBody,
    "yakImageUrl": yakImage.asset->url,

    // Featured Products
    featuredProducts[]->{
      _id,
      name,
      price,
      "imageUrl": image.asset->url,
      "slug": slug.current
    },

    // Testimonials
    testimonials[] {
      quote,
      author,
      role
    },

    // Ethical Sourcing
    ethicalTitle,
    ethicalBody,

    // Newsletter
    newsletterTitle,
    newsletterSubtitle
  }
`;

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  let data: any = null;
  let error = false;

  try {
    data = await client.fetch(HOMEPAGE_QUERY);
  } catch (err) {
    console.error("Failed to fetch homepage:", err);
    error = true;
  }

  if (error || !data) {
    return (
      <main className="flex min-h-screen items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Homepage Not Found
          </h1>
          <p className="text-lg text-gray-600">
            Please create a Homepage document in <strong>Sanity Studio</strong>.
          </p>
          <a
            href="/studio"
            className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white"
          >
            Open Studio
          </a>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        {/* HERO */}
        <HomeHero
          title={data.heroTitle || "Himalayan Source"}
          subtitle={data.heroSubtitle || "Pristine water & crystals from Nepal"}
          heroImageUrl={data.heroImageUrl}
          primaryCtaText={data.heroCtaPrimary || "Shop Now"}
          primaryCtaLink={data.heroCtaPrimaryLink || "#pillars"}
          secondaryCtaText={data.heroCtaSecondary || "Discover"}
          secondaryCtaLink={data.heroCtaSecondaryLink || "#crystals"}
        />

        {/* PILLARS */}
        <HomePillarsSection
          title={data.pillarsTitle}
          pillars={data.pillars || []}
        />

        {/* MISSION */}
        <HomeMissionSection
          // title={data.missionTitle || "Our Mission"}
          // body={data.missionBody || []}
        />

        {/* WATER */}
        <WaterSection
          // title={data.waterTitle || "Pure Himalayan Water"}
          // imageUrl={data.waterImageUrl}
        />

        {/* CRYSTAL */}
        <CrystalSection
          // title={data.crystalTitle || "Healing Crystals"}
          // body={data.crystalBody || []}
        />

        {/* DELIVERY */}
        <DeliverySection
          // title={data.deliveryTitle || "Fast & Free Delivery"}
          // subtitle={data.deliverySubtitle || "Across Nepal"}
        />

        {/* YAK STORY */}
        <YakStorySection
          // title={data.yakTitle || "The Yak Herders"}
          // body={data.yakBody || []}
          // imageUrl={data.yakImageUrl}
        />

        {/* FEATURED PRODUCTS */}
        <FeaturedProductsSection 
        // products={data.featuredProducts || []} 
        />

        {/* TESTIMONIALS */}
        <TestimonialsSection 
        // testimonials={data.testimonials || []} 
        />

        {/* ETHICAL SOURCING */}
        <EthicalSourcingSection

          // title={data.ethicalTitle || "Ethical Sourcing"}
          // body={data.ethicalBody || []}
        />

        {/* NEWSLETTER */}
        <NewsletterCTA
          // title={data.newsletterTitle || "Join Our Community"}
          // subtitle={data.newsletterSubtitle || "Get updates on new arrivals"}
        />
      </main>
    </>
  );
}
