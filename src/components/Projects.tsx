
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Calendar, Heart, Bus, FileText, CreditCard, Sparkles, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Learning Management System",
      description: "Comprehensive LMS allowing admins to upload learning materials and auto-generate MCQ exams using OpenAI APIs. Features document upload, multilingual support, performance tracking, and automated certificate generation.",
      icon: Brain,
      tags: ["OpenAI API", "Django", "PostgreSQL", "MCQ Generation", "Multilingual"],
      highlights: ["Auto-generated exams", "Performance analytics", "Certificate system"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Smart Event Planning Agent",
      description: "Intelligent AI assistant with comprehensive event planning features including multilingual support, automated checklist generation, event discovery, budget optimization, and integrated booking system.",
      icon: Calendar,
      tags: ["AI Agent", "Multilingual", "Budget Planning", "Event Discovery", "Booking System"],
      highlights: ["AI-powered planning", "Smart budgeting", "Automated workflows"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Personalized Greeting Generator",
      description: "Creative platform enabling users to create custom greetings with photos, quotes, and music. Built with Django backend and interactive frontend, featuring shareable URLs and personalization options.",
      icon: Heart,
      tags: ["Django", "JavaScript", "File Upload", "URL Sharing", "Customization"],
      highlights: ["Photo integration", "Music support", "Shareable links"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Bus Transport AI System (R&D)",
      description: "Exploratory AI solution for transportation optimization. Predicts maintenance needs, analyzes passenger trends, and optimizes routes using sensor data and historical logs for improved efficiency.",
      icon: Bus,
      tags: ["Predictive Analytics", "Route Optimization", "Sensor Data", "Trend Analysis"],
      highlights: ["Predictive maintenance", "Route optimization", "Data analysis"],
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "AI Document Embedder",
      description: "Sophisticated background job system for document processing and semantic search. Uses LangChain and ChromaDB to embed and index documents with both OpenAI and Mistral models for enhanced search capabilities.",
      icon: FileText,
      tags: ["LangChain", "ChromaDB", "Embeddings", "Semantic Search", "Background Jobs"],
      highlights: ["Vector embeddings", "Semantic search", "Multi-model support"],
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Stripe Payment Integration",
      description: "Robust payment backend with seamless Stripe integration for service-based platforms. Features secure payment processing, subscription management, and comprehensive API endpoints for e-commerce solutions.",
      icon: CreditCard,
      tags: ["Stripe API", "Payment Processing", "Security", "Subscriptions", "REST API"],
      highlights: ["Secure payments", "Subscription support", "Scalable architecture"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-pulse`}
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}, ${i % 2 === 0 ? '#8B5CF6' : '#3B82F6'})`,
              left: `${15 + (i * 12)}%`,
              top: `${10 + (i * 8)}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Code2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of AI-powered solutions and intelligent systems I've developed
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <Badge 
                          key={highlight} 
                          className="bg-slate-700 text-gray-300 border border-slate-600 hover:bg-slate-600 hover:text-white transition-all duration-200"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Code2 className="w-4 h-4 mr-2 text-purple-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          className="bg-slate-900 text-gray-300 border border-slate-600 hover:bg-slate-700 hover:text-white transition-all duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white flex items-center space-x-2 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-slate-700 backdrop-blur-sm shadow-2xl">
              <CardContent className="py-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Whether you're a startup founder or a company looking to enhance your systems, 
                  I'm always open to building, collaborating, and creating something meaningful.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Collaborate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
