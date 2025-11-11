
import { Button } from "@/components/ui/button";
import { Code, ChevronDown, Sparkles, Brain, Zap, ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { designSystem } from "@/lib/design-system";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Simple Clean Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className={`container mx-auto ${designSystem.spacing.container} text-center relative z-10`}>
        <div className="max-w-6xl mx-auto">
          {/* Professional Icon */}
          <div className="mb-8">
            <div className={`w-20 h-20 mx-auto rounded-lg bg-primary flex items-center justify-center shadow-sm ${designSystem.animations.hover}`}>
              <Brain size={32} className="text-primary-foreground" />
            </div>
          </div>

          {/* Clean Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div>
                <h1 className={`${designSystem.typography.headings.h1} mb-2 text-foreground`}>
                  Shabbir Hathi
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  AI/ML Developer
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-base md:text-lg text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Software Engineer</span>
                </div>
                <div className="w-1 h-1 bg-border rounded-full" />
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Backend Specialist</span>
                </div>
              </div>
            </div>
            
            <p className={`${designSystem.typography.body.large} text-muted-foreground max-w-3xl mx-auto`}>
              Transforming complex problems into intelligent solutions through 
              <span className="text-foreground font-medium"> cutting-edge AI</span>, 
              <span className="text-foreground font-medium"> machine learning</span>, and 
              <span className="text-foreground font-medium"> scalable systems</span>
            </p>
          </div>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-32 px-4">
            <Button 
              size="lg" 
              className="group"
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-2" size={18} />
              Explore My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2" size={18} />
              Let's Connect
            </Button>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`flex flex-col items-center space-y-2 animate-bounce ${designSystem.animations.reduced}`}>
            <span className="text-muted-foreground text-sm">Scroll to explore</span>
            <ChevronDown size={20} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
