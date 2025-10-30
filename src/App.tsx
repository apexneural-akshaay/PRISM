import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { WorkflowTimeline } from "./components/WorkflowTimeline";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { CTAFooter } from "./components/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <div id="hero_section">
        <HeroSection />
      </div>
      
      <div id="features">
        <FeaturesGrid />
      </div>
      
      <div id="how-it-works">
        <WorkflowTimeline />
      </div>
      
      <div id="showcase_section">
        <ShowcaseSection />
      </div>
      
      <div id="benefits">
        <BenefitsSection />
      </div>
      
      <div id="contact">
        <CTAFooter />
      </div>
    </div>
  );
}
