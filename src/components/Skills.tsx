
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Settings, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      color: "blue",
      skills: ["Python", "Django", "Flask", "JavaScript", "HTML/CSS", "Bash", "Celery", "LangChain"]
    },
    {
      title: "AI/ML & Data",
      icon: Brain,
      color: "purple",
      skills: ["OpenAI API", "Mistral", "Scikit-learn", "NLP", "RAG", "Embeddings", "OCR", "OpenCV"]
    },
    {
      title: "Infrastructure & Tools",
      icon: Settings,
      color: "green",
      skills: ["Docker", "Apache2", "Git", "PM2", "REST APIs", "PostgreSQL", "Redis", "ChromaDB"]
    },
    {
      title: "Core Concepts",
      icon: Briefcase,
      color: "orange",
      skills: ["LLMs", "Vector Databases", "Background Jobs", "Payment Systems", "Automation", "Deployment"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      green: "from-green-50 to-green-100 border-green-200",
      orange: "from-orange-50 to-orange-100 border-orange-200"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      purple: "text-purple-600 bg-purple-100",
      green: "text-green-600 bg-green-100",
      orange: "text-orange-600 bg-orange-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent, scalable solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className={`bg-gradient-to-br ${getColorClasses(category.color)} hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${getIconColorClasses(category.color)}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-white/70 text-gray-800 hover:bg-white transition-colors duration-200"
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
          <div className="mt-20">
            <Card className="bg-white shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  💡 What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Backend & AI Development</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Design intelligent backend systems using Python, Django, and Flask</li>
                      <li>• Build AI/ML models for NLP and document processing</li>
                      <li>• Create RAG-based Q&A systems and recommendation engines</li>
                      <li>• Implement OCR and image classification solutions</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">End-to-End Solutions</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Build scalable APIs and deploy on servers (Apache2, Docker)</li>
                      <li>• Research and develop AI-driven MVPs for startups</li>
                      <li>• Automate workflows with Celery, Redis, and LangChain</li>
                      <li>• Integrate payment solutions and custom AI agents</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
