
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
      tags: ["OpenAI API", "Django", "PostgreSQL", "MCQ Generation", "Multilingual"],
      highlights: ["Auto-generated exams", "Performance analytics", "Certificate system"]
    },
    {
      title: "Smart Event Planning Agent",
      description: "Intelligent AI assistant with comprehensive event planning features including multilingual support, automated checklist generation, event discovery, budget optimization, and integrated booking system.",
      icon: Calendar,
      tags: ["AI Agent", "Multilingual", "Budget Planning", "Event Discovery", "Booking System"],
      highlights: ["AI-powered planning", "Smart budgeting", "Automated workflows"]
    },
    {
      title: "Personalized Greeting Generator",
      description: "Creative platform enabling users to create custom greetings with photos, quotes, and music. Built with Django backend and interactive frontend, featuring shareable URLs and personalization options.",
      icon: Heart,
      tags: ["Django", "JavaScript", "File Upload", "URL Sharing", "Customization"],
      highlights: ["Photo integration", "Music support", "Shareable links"]
    },
    {
      title: "Bus Transport AI System (R&D)",
      description: "Exploratory AI solution for transportation optimization. Predicts maintenance needs, analyzes passenger trends, and optimizes routes using sensor data and historical logs for improved efficiency.",
      icon: Bus,
      tags: ["Predictive Analytics", "Route Optimization", "Sensor Data", "Trend Analysis"],
      highlights: ["Predictive maintenance", "Route optimization", "Data analysis"]
    },
    {
      title: "AI Document Embedder",
      description: "Sophisticated background job system for document processing and semantic search. Uses LangChain and ChromaDB to embed and index documents with both OpenAI and Mistral models for enhanced search capabilities.",
      icon: FileText,
      tags: ["LangChain", "ChromaDB", "Embeddings", "Semantic Search", "Background Jobs"],
      highlights: ["Vector embeddings", "Semantic search", "Multi-model support"]
    },
    {
      title: "Stripe Payment Integration",
      description: "Robust payment backend with seamless Stripe integration for service-based platforms. Features secure payment processing, subscription management, and comprehensive API endpoints for e-commerce solutions.",
      icon: CreditCard,
      tags: ["Stripe API", "Payment Processing", "Security", "Subscriptions", "REST API"],
      highlights: ["Secure payments", "Subscription support", "Scalable architecture"]
    }
  ];

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
                className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-slate-100 border border-slate-200 flex-shrink-0">
                      <project.icon className="w-6 h-6 text-slate-700" />
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
                          className="bg-slate-50 border-slate-300 text-slate-700"
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
                          className="bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors duration-200"
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
                      className="bg-slate-800 hover:bg-slate-900 text-white flex items-center space-x-2"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
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
            <Card className="bg-slate-900 text-white border-none shadow-2xl">
              <CardContent className="py-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
                  Whether you're a startup founder or a company looking to enhance your systems, 
                  I'm always open to building, collaborating, and creating something meaningful.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 text-lg font-semibold"
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
