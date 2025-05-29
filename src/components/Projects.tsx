
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Calendar, Heart, Bus, FileText, CreditCard } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Learning Management System",
      description: "Comprehensive LMS allowing admins to upload learning materials and auto-generate MCQ exams using OpenAI APIs. Features document upload, multilingual support, performance tracking, and automated certificate generation.",
      icon: Brain,
      color: "blue",
      tags: ["OpenAI API", "Django", "PostgreSQL", "MCQ Generation", "Multilingual"],
      highlights: ["Auto-generated exams", "Performance analytics", "Certificate system"]
    },
    {
      title: "Smart Event Planning Agent",
      description: "Intelligent AI assistant with comprehensive event planning features including multilingual support, automated checklist generation, event discovery, budget optimization, and integrated booking system.",
      icon: Calendar,
      color: "purple",
      tags: ["AI Agent", "Multilingual", "Budget Planning", "Event Discovery", "Booking System"],
      highlights: ["AI-powered planning", "Smart budgeting", "Automated workflows"]
    },
    {
      title: "Personalized Greeting Generator",
      description: "Creative platform enabling users to create custom greetings with photos, quotes, and music. Built with Django backend and interactive frontend, featuring shareable URLs and personalization options.",
      icon: Heart,
      color: "pink",
      tags: ["Django", "JavaScript", "File Upload", "URL Sharing", "Customization"],
      highlights: ["Photo integration", "Music support", "Shareable links"]
    },
    {
      title: "Bus Transport AI System (R&D)",
      description: "Exploratory AI solution for transportation optimization. Predicts maintenance needs, analyzes passenger trends, and optimizes routes using sensor data and historical logs for improved efficiency.",
      icon: Bus,
      color: "green",
      tags: ["Predictive Analytics", "Route Optimization", "Sensor Data", "Trend Analysis"],
      highlights: ["Predictive maintenance", "Route optimization", "Data analysis"]
    },
    {
      title: "AI Document Embedder",
      description: "Sophisticated background job system for document processing and semantic search. Uses LangChain and ChromaDB to embed and index documents with both OpenAI and Mistral models for enhanced search capabilities.",
      icon: FileText,
      color: "indigo",
      tags: ["LangChain", "ChromaDB", "Embeddings", "Semantic Search", "Background Jobs"],
      highlights: ["Vector embeddings", "Semantic search", "Multi-model support"]
    },
    {
      title: "Stripe Payment Integration",
      description: "Robust payment backend with seamless Stripe integration for service-based platforms. Features secure payment processing, subscription management, and comprehensive API endpoints for e-commerce solutions.",
      icon: CreditCard,
      color: "emerald",
      tags: ["Stripe API", "Payment Processing", "Security", "Subscriptions", "REST API"],
      highlights: ["Secure payments", "Subscription support", "Scalable architecture"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      pink: "from-pink-50 to-pink-100 border-pink-200",
      green: "from-green-50 to-green-100 border-green-200",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200",
      emerald: "from-emerald-50 to-emerald-100 border-emerald-200"
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      purple: "text-purple-600 bg-purple-100",
      pink: "text-pink-600 bg-pink-100",
      green: "text-green-600 bg-green-100",
      indigo: "text-indigo-600 bg-indigo-100",
      emerald: "text-emerald-600 bg-emerald-100"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of AI-powered solutions and intelligent systems I've developed
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`bg-gradient-to-br ${getColorClasses(project.color)} hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getIconColorClasses(project.color)} flex-shrink-0`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <Badge 
                          key={highlight} 
                          variant="outline" 
                          className="bg-white/50 border-gray-300"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          className="bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200"
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
                      className="bg-gray-900 hover:bg-gray-800 text-white flex items-center space-x-2"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-300 hover:bg-white flex items-center space-x-2"
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
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-none">
              <CardContent className="py-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                  Whether you're a startup founder or a company looking to enhance your systems, 
                  I'm always open to building, collaborating, and creating something meaningful.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
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
