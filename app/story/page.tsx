// app/story/page.tsx
import StoryPageHero from "@/components/section/story/StoryPageHero";
import StoryMissionSection from "@/components/section/story/StoryMissionSection";
import StoryCrystalsSection from "@/components/section/StoryCrystalsSection";
import StoryCtaBanner from "@/components/section/story/StoryCtaBanner";

// ...other story page sections

export default function StoryPage() {
  return (
    <>
      <StoryPageHero />
      <StoryMissionSection />
      <StoryCrystalsSection />
      <StoryCtaBanner />
      {/* other story sections */}
    </>
  );
}
