
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
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Reduced Floating Elements for Performance */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse ${designSystem.animations.reduced}`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${15 + (i * 12)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              willChange: 'opacity'
            }}
          />
        ))}

        {/* Optimized Mouse Follow Effect */}
        <div
          className={`absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-3xl transition-all duration-700 ease-out ${designSystem.animations.reduced}`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            willChange: 'transform'
          }}
        />
      </div>

      <div className={`container mx-auto ${designSystem.spacing.container} text-center relative z-10`}>
        <div className="max-w-6xl mx-auto">
          {/* Professional AI Icon */}
          <div className="mb-12 relative">
            <div className={`w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br ${designSystem.colors.gradients.primary} flex items-center justify-center mb-8 shadow-2xl relative group ${designSystem.animations.hover}`}>
              <Brain size={40} className="text-white" />
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${designSystem.colors.gradients.primary} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
            </div>
          </div>

          {/* Enhanced Typography with Design System */}
          <div className={designSystem.spacing.elementGap}>
            <div className="space-y-6">
              <div className="mb-4">
                <h1 className={`${designSystem.typography.headings.h1} mb-2`}>
                  <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Shabbir Hathi
                  </span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    AI/ML Developer
                  </span>
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-6 text-lg md:text-xl text-gray-300">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Software Engineer</span>
                </div>
                <div className="w-1 h-1 bg-gray-500 rounded-full" />
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span>Backend Specialist</span>
                </div>
              </div>
            </div>
            
            <p className={`${designSystem.typography.body.large} text-gray-300 max-w-4xl mx-auto font-light`}>
              Transforming complex problems into intelligent solutions through 
              <span className="text-blue-400 font-medium"> cutting-edge AI</span>, 
              <span className="text-purple-400 font-medium"> machine learning</span>, and 
              <span className="text-emerald-400 font-medium"> scalable systems</span>
            </p>
          </div>

          {/* Consistent CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32 px-4">
            <Button 
              size="lg" 
              className={`bg-gradient-to-r ${designSystem.colors.gradients.primary} hover:from-blue-700 hover:to-blue-800 text-white ${designSystem.components.button} shadow-lg hover:shadow-blue-500/25 border-0 group`}
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-3" size={20} />
              Explore My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className={`border-2 border-gray-300/30 text-white hover:bg-white hover:text-slate-900 bg-white/5 backdrop-blur-sm ${designSystem.components.button} hover:border-white/50`}
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-3" size={20} />
              Let's Connect
            </Button>
          </div>

        </div>

        {/* Fixed Scroll Indicator with Proper Spacing */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`flex flex-col items-center space-y-2 animate-bounce ${designSystem.animations.reduced}`}>
            <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
