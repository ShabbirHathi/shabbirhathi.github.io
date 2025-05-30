
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AIAgent3D from "@/components/AIAgent3D";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <AIAgent3D />
    </div>
  );
};

export default Index;
