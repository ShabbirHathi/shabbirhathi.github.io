
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Settings, Briefcase, Zap, Database, Star, TrendingUp } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "Django", "Flask", "JavaScript", "HTML/CSS", "Bash", "Celery", "LangChain"],
      color: "from-blue-500 via-blue-600 to-cyan-600",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      description: "Core technologies for robust backend development"
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      skills: ["OpenAI API", "Mistral", "Scikit-learn", "NLP", "RAG", "Embeddings", "OCR", "OpenCV"],
      color: "from-purple-500 via-purple-600 to-pink-600",
      bgColor: "from-purple-500/20 to-pink-500/20",
      description: "Cutting-edge AI and machine learning technologies"
    },
    {
      title: "Infrastructure & Tools",
      icon: Settings,
      skills: ["Docker", "Apache2", "Git", "PM2", "REST APIs", "PostgreSQL", "Redis", "ChromaDB"],
      color: "from-indigo-500 via-indigo-600 to-purple-600",
      bgColor: "from-indigo-500/20 to-purple-500/20",
      description: "DevOps and infrastructure management tools"
    },
    {
      title: "Core Concepts",
      icon: Briefcase,
      skills: ["LLMs", "Vector Databases", "Background Jobs", "Payment Systems", "Automation", "Deployment"],
      color: "from-emerald-500 via-green-600 to-teal-600",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      description: "Advanced concepts and system architectures"
    }
  ];

  const achievements = [
    { label: "AI Projects Completed", value: "15+", icon: Brain },
    { label: "Backend Systems Built", value: "25+", icon: Database },
    { label: "APIs Developed", value: "40+", icon: Code },
    { label: "Years of Experience", value: "3+", icon: TrendingUp }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="#3B82F6" opacity="0.5" />
                <circle cx="80" cy="80" r="2" fill="#8B5CF6" opacity="0.5" />
                <line x1="20" y1="20" x2="80" y2="20" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                <line x1="20" y1="20" x2="20" y2="80" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating tech symbols */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-5 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {['⚡', '🧠', '🔧', '💼', '🚀', '💻', '🔮'][Math.floor(Math.random() * 7)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Technical{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Arsenal
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive toolkit for building{' '}
              <span className="text-blue-400 font-semibold">intelligent</span>,{' '}
              <span className="text-purple-400 font-semibold">scalable solutions</span>
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.label}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 text-center group"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`group bg-gradient-to-br ${category.bgColor} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden relative`}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Animated background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </CardTitle>
                      <p className="text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        className={`bg-slate-800/50 text-gray-300 border border-slate-600 hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:text-white px-3 py-2 text-sm font-medium transform ${hoveredCategory === index ? 'animate-pulse' : ''}`}
                        style={{
                          animationDelay: hoveredCategory === index ? `${skillIndex * 100}ms` : '0ms'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced What I Do Section */}
          <Card className="bg-gradient-to-r from-slate-900/80 via-purple-900/30 to-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-cyan-500/5" />
            
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
                </div>
              </div>
              <CardTitle className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                What I{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Do
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Backend & AI Development</h4>
                  </div>
                  <ul className="space-y-4 text-gray-300">
                    {[
                      "Design intelligent backend systems using Python, Django, and Flask",
                      "Build AI/ML models for NLP and document processing",
                      "Create RAG-based Q&A systems and recommendation engines",
                      "Implement OCR and image classification solutions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">End-to-End Solutions</h4>
                  </div>
                  <ul className="space-y-4 text-gray-300">
                    {[
                      "Build scalable APIs and deploy on servers (Apache2, Docker)",
                      "Research and develop AI-driven MVPs for startups",
                      "Automate workflows with Celery, Redis, and LangChain",
                      "Integrate payment solutions and custom AI agents"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
