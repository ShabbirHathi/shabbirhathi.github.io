
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, ChevronDown, Sparkles, Brain, Zap, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

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
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Professional Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Subtle Mouse Follow Effect */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Professional AI Icon */}
          <div className="mb-12 relative">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-8 shadow-2xl relative group">
              <Brain size={40} className="text-white" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </div>
          </div>

          {/* Enhanced Typography */}
          <div className="space-y-8 mb-16">
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  AI/ML
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-xl md:text-2xl text-gray-300 mb-6">
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
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Transforming complex problems into intelligent solutions through 
              <span className="text-blue-400 font-medium"> cutting-edge AI</span>, 
              <span className="text-purple-400 font-medium"> machine learning</span>, and 
              <span className="text-emerald-400 font-medium"> scalable systems</span>
            </p>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 border-0 group"
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-3" size={20} />
              Explore My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-300/30 text-white hover:bg-white hover:text-slate-900 bg-white/5 backdrop-blur-sm px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-white/50"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-3" size={20} />
              Let's Connect
            </Button>
          </div>

          {/* Refined Social Links - Increased margin to create more space */}
          <div className="flex justify-center space-x-8 mb-24">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-300" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
              { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "hover:text-purple-400" }
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 ${color}`}
              >
                <Icon size={24} className="text-gray-400 group-hover:scale-110 transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Fixed Scroll Indicator - Moved to bottom with proper spacing */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
