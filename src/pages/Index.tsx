import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ClientsSection } from "@/components/portfolio/ClientsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { TestimonialsSection } from "@/components/portfolio/TestimonialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { portfolioData } from "@/data/portfolio";
import { useEffect } from "react";

const Index = () => {
  // Set document title from portfolio data
  useEffect(() => {
    document.title = `${portfolioData.profile.name} | ${portfolioData.profile.title}`;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ClientsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
