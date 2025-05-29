
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 text-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-300 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-slate-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-slate-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-slate-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-slate-800 to-slate-700 flex items-center justify-center text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 shadow-lg">
              <Code size={32} className="sm:w-12 sm:h-12 text-white" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent animate-fade-in leading-tight">
            AI/ML Developer
          </h1>
          
          <h2 className="text-lg sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-slate-600 animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            Software Engineer & Backend Specialist
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            Passionate about solving real-world problems through AI, machine learning, and intelligent backend systems. 
            Building the future, one algorithm at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-slate-800 text-white hover:bg-slate-900 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto shadow-lg"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white bg-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 hover:scale-110 border border-slate-200">
              <Github size={20} className="sm:w-6 sm:h-6 text-slate-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 hover:scale-110 border border-slate-200">
              <Linkedin size={20} className="sm:w-6 sm:h-6 text-slate-700" />
            </a>
            <a href="mailto:contact@example.com"
               className="p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-all duration-300 hover:scale-110 border border-slate-200">
              <Mail size={20} className="sm:w-6 sm:h-6 text-slate-700" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="sm:w-8 sm:h-8 text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
