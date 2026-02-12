import Hero from "@/components/Hero";
import SafetySection from "@/components/SafetySection";
import TemplateGallery from "@/components/TemplateGallery";
import Features from "@/components/Features";
import DopamineStats from "@/components/DopamineStats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <SafetySection />
      <TemplateGallery />

      {/*
        This is a preview of the Dopamine Progress System
        that will be active during the resume building process.
      */}
      {/* <DopamineStats
        progress={65}
        atsScore={79}
        message="Your background matches our Tech template perfectly! ✨"
      /> */}


    </div>
  );
}
