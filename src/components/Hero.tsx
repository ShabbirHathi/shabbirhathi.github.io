
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, ChevronDown, Sparkles, Brain, Zap, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Matrix-style falling code */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${-20 + Math.random() * 120}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 10}s`,
                transform: `translateY(-${Math.random() * 100}px)`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse opacity-20`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(45deg, ${i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#8B5CF6' : '#06B6D4'}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
        
        {/* Enhanced Neural Network Lines */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#neural-gradient)"
                strokeWidth="2"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Enhanced Mouse Follow Effect */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent blur-3xl"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced AI Icon with Multiple Layers */}
          <div className={`mb-8 relative transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center text-4xl font-bold mb-6 shadow-2xl relative group">
              <Brain size={60} className="text-white animate-pulse z-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-2 rounded-full border border-white/10 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
            </div>
          </div>

          {/* Enhanced Main Content with Staggered Animation */}
          <div className="space-y-8 mb-12">
            <h1 className={`text-6xl sm:text-7xl md:text-9xl font-black mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent block">
                AI/ML
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block relative">
                Developer
                <div className="absolute -right-4 top-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping" />
              </span>
            </h1>
            
            <div className={`flex items-center justify-center space-x-6 text-xl sm:text-2xl md:text-3xl mb-8 text-blue-200 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                Software Engineer & Backend Specialist
              </span>
              <Zap className="w-8 h-8 animate-bounce" />
            </div>
            
            <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed px-4 transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Passionate about solving <span className="text-blue-400 font-semibold">real-world problems</span> through{' '}
              <span className="text-purple-400 font-semibold">AI</span>, <span className="text-cyan-400 font-semibold">machine learning</span>, and{' '}
              <span className="text-indigo-400 font-semibold">intelligent backend systems</span>. 
              <span className="block mt-2 text-xl text-blue-300 font-medium">Building the future, one algorithm at a time.</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons with Better Animation */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-12 px-4 transform transition-all duration-1000 delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-10 py-5 text-xl font-bold transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-blue-500/30 border-0 relative overflow-hidden"
              onClick={() => scrollToSection('projects')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Code className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              View My Work
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Button>
            <Button 
              size="lg" 
              className="group border-2 border-gradient-to-r from-blue-400 to-purple-400 text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 bg-white/10 backdrop-blur-sm px-10 py-5 text-xl font-bold transition-all duration-500 hover:scale-110 relative overflow-hidden"
              onClick={() => scrollToSection('contact')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Mail className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
              Let's Connect
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className={`flex justify-center space-x-8 mb-12 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub", color: "from-gray-600 to-gray-800" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
              { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "from-purple-600 to-purple-800" }
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-5 rounded-2xl bg-gradient-to-r ${color} bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-2xl`}
              >
                <Icon size={28} className="text-white group-hover:rotate-12 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={32} className="text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
