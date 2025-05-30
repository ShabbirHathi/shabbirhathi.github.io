
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Settings, Briefcase, Award, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["OpenAI GPT", "LangChain", "Scikit-learn", "NLP", "Computer Vision", "RAG Systems", "Vector Embeddings", "Neural Networks"],
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Backend Development", 
      icon: Code,
      skills: ["Python", "Django", "Flask", "FastAPI", "REST APIs", "GraphQL", "Microservices", "System Design"],
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Data & Infrastructure",
      icon: Settings,
      skills: ["PostgreSQL", "Redis", "ChromaDB", "Docker", "AWS", "Apache", "Celery", "Message Queues"],
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50", 
      borderColor: "border-emerald-200"
    },
    {
      title: "Specialized Solutions",
      icon: Briefcase,
      skills: ["Payment Integration", "OCR", "Document Processing", "Automation", "Security", "Performance Optimization", "CI/CD", "Monitoring"],
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive technology stack focused on delivering intelligent, scalable solutions
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`${category.bgColor} ${category.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden`}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-100 transition-all duration-200 hover:scale-105 px-4 py-2 text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Professional Capabilities Section */}
          <Card className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 border-0 shadow-2xl overflow-hidden">
            <CardHeader className="text-center pb-8 relative">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What I Deliver
                </CardTitle>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  End-to-end solutions that combine technical excellence with business impact
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 pb-12 relative z-10">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                      AI-Powered Backend Systems
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                      {[
                        "Intelligent APIs with natural language processing",
                        "Machine learning model integration and deployment", 
                        "Real-time data processing and analysis",
                        "Automated decision-making systems"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-blue-400 mt-2 text-xs">●</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                      Enterprise Solutions
                    </h4>
                    <ul className="space-y-4 text-gray-300">
                      {[
                        "Scalable architecture design and implementation",
                        "Performance optimization and monitoring",
                        "Security-first development practices",
                        "Integration with existing business systems"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-purple-400 mt-2 text-xs">●</span>
                          <span className="leading-relaxed">{item}</span>
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

export default Skills;
