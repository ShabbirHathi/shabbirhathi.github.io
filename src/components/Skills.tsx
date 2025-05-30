
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Settings, Briefcase, Zap, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["Python", "Django", "Flask", "JavaScript", "HTML/CSS", "Bash", "Celery", "LangChain"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      skills: ["OpenAI API", "Mistral", "Scikit-learn", "NLP", "RAG", "Embeddings", "OCR", "OpenCV"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Infrastructure & Tools",
      icon: Settings,
      skills: ["Docker", "Apache2", "Git", "PM2", "REST APIs", "PostgreSQL", "Redis", "ChromaDB"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10"
    },
    {
      title: "Core Concepts",
      icon: Briefcase,
      skills: ["LLMs", "Vector Databases", "Background Jobs", "Payment Systems", "Automation", "Deployment"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent, scalable solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-slate-800 text-gray-300 border border-slate-600 hover:bg-slate-700 transition-all duration-200 hover:scale-105 hover:text-white"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What I Do Section */}
          <Card className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                What I Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">Backend & AI Development</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">▶</span>
                      <span>Design intelligent backend systems using Python, Django, and Flask</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">▶</span>
                      <span>Build AI/ML models for NLP and document processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">▶</span>
                      <span>Create RAG-based Q&A systems and recommendation engines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">▶</span>
                      <span>Implement OCR and image classification solutions</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">End-to-End Solutions</h4>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">▶</span>
                      <span>Build scalable APIs and deploy on servers (Apache2, Docker)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">▶</span>
                      <span>Research and develop AI-driven MVPs for startups</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">▶</span>
                      <span>Automate workflows with Celery, Redis, and LangChain</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">▶</span>
                      <span>Integrate payment solutions and custom AI agents</span>
                    </li>
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
