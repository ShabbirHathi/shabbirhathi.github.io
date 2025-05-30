
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Settings, Briefcase, Award, TrendingUp, Zap } from "lucide-react";
import { memo } from "react";

// Memoized skill category component for better performance
const SkillCategory = memo(({ category, index }: { category: any; index: number }) => (
  <Card 
    className={`${category.bgColor} ${category.borderColor} border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden backdrop-blur-sm`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardHeader className="pb-6 relative">
      <div className="flex items-center space-x-4">
        <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative`}>
          <category.icon className="w-8 h-8 text-white relative z-10" />
          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
            {category.title}
          </CardTitle>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:w-20 transition-all duration-500" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill: string, skillIndex: number) => (
          <Badge 
            key={skill} 
            className="bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md"
            style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
));

SkillCategory.displayName = 'SkillCategory';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["OpenAI GPT", "LangChain", "Scikit-learn", "NLP", "Computer Vision", "RAG Systems", "Vector Embeddings", "Neural Networks"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50/90 to-blue-100/50",
      borderColor: "border-blue-200/50"
    },
    {
      title: "Backend Development", 
      icon: Code,
      skills: ["Python", "Django", "Flask", "FastAPI", "REST APIs", "GraphQL", "Microservices", "System Design"],
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-gradient-to-br from-purple-50/90 to-purple-100/50",
      borderColor: "border-purple-200/50"
    },
    {
      title: "Data & Infrastructure",
      icon: Settings,
      skills: ["PostgreSQL", "Redis", "ChromaDB", "Docker", "AWS", "Apache", "Celery", "Message Queues"],
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-gradient-to-br from-emerald-50/90 to-emerald-100/50", 
      borderColor: "border-emerald-200/50"
    },
    {
      title: "Specialized Solutions",
      icon: Briefcase,
      skills: ["Payment Integration", "OCR", "Document Processing", "Automation", "Security", "Performance Optimization", "CI/CD", "Monitoring"],
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50/90 to-red-100/50",
      borderColor: "border-orange-200/50"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background with better performance */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Floating elements with reduced count for better performance */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Award className="w-8 h-8 text-white mr-2" />
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive technology stack focused on delivering intelligent, scalable solutions that drive innovation
            </p>
          </div>

          {/* Enhanced Skills Grid with staggered animation */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.title} category={category} index={index} />
            ))}
          </div>

          {/* Enhanced Professional Capabilities Section */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
            
            <CardHeader className="text-center pb-8 relative z-10">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-8 shadow-xl">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                What I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Deliver</span>
              </CardTitle>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                End-to-end solutions that combine technical excellence with measurable business impact
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8 pb-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      AI-Powered Backend Systems
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                      {[
                        "Intelligent APIs with natural language processing",
                        "Machine learning model integration and deployment", 
                        "Real-time data processing and analysis",
                        "Automated decision-making systems"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 group">
                          <span className="text-blue-400 mt-2 text-sm group-hover:scale-125 transition-transform duration-200">●</span>
                          <span className="leading-relaxed group-hover:text-white transition-colors duration-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white flex items-center group">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      Enterprise Solutions
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                      {[
                        "Scalable architecture design and implementation",
                        "Performance optimization and monitoring",
                        "Security-first development practices",
                        "Integration with existing business systems"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3 group">
                          <span className="text-purple-400 mt-2 text-sm group-hover:scale-125 transition-transform duration-200">●</span>
                          <span className="leading-relaxed group-hover:text-white transition-colors duration-200">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
