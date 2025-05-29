import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Calendar, Heart, Bus, FileText, CreditCard, Sparkles, Code2, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Learning Management System",
      description: "Comprehensive LMS allowing admins to upload learning materials and auto-generate MCQ exams using OpenAI APIs. Features document upload, multilingual support, performance tracking, and automated certificate generation.",
      icon: Brain,
      tags: ["OpenAI API", "Django", "PostgreSQL", "MCQ Generation", "Multilingual"],
      highlights: ["Auto-generated exams", "Performance analytics", "Certificate system"],
      gradient: "from-blue-500 via-blue-600 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/10",
      featured: true
    },
    {
      title: "Smart Event Planning Agent",
      description: "Intelligent AI assistant with comprehensive event planning features including multilingual support, automated checklist generation, event discovery, budget optimization, and integrated booking system.",
      icon: Calendar,
      tags: ["AI Agent", "Multilingual", "Budget Planning", "Event Discovery", "Booking System"],
      highlights: ["AI-powered planning", "Smart budgeting", "Automated workflows"],
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      featured: true
    },
    {
      title: "Personalized Greeting Generator",
      description: "Creative platform enabling users to create custom greetings with photos, quotes, and music. Built with Django backend and interactive frontend, featuring shareable URLs and personalization options.",
      icon: Heart,
      tags: ["Django", "JavaScript", "File Upload", "URL Sharing", "Customization"],
      highlights: ["Photo integration", "Music support", "Shareable links"],
      gradient: "from-pink-500 via-rose-600 to-red-600",
      bgGradient: "from-pink-500/10 to-red-500/10"
    },
    {
      title: "Bus Transport AI System (R&D)",
      description: "Exploratory AI solution for transportation optimization. Predicts maintenance needs, analyzes passenger trends, and optimizes routes using sensor data and historical logs for improved efficiency.",
      icon: Bus,
      tags: ["Predictive Analytics", "Route Optimization", "Sensor Data", "Trend Analysis"],
      highlights: ["Predictive maintenance", "Route optimization", "Data analysis"],
      gradient: "from-emerald-500 via-green-600 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "AI Document Embedder",
      description: "Sophisticated background job system for document processing and semantic search. Uses LangChain and ChromaDB to embed and index documents with both OpenAI and Mistral models for enhanced search capabilities.",
      icon: FileText,
      tags: ["LangChain", "ChromaDB", "Embeddings", "Semantic Search", "Background Jobs"],
      highlights: ["Vector embeddings", "Semantic search", "Multi-model support"],
      gradient: "from-indigo-500 via-blue-600 to-cyan-600",
      bgGradient: "from-indigo-500/10 to-cyan-500/10"
    },
    {
      title: "Stripe Payment Integration",
      description: "Robust payment backend with seamless Stripe integration for service-based platforms. Features secure payment processing, subscription management, and comprehensive API endpoints for e-commerce solutions.",
      icon: CreditCard,
      tags: ["Stripe API", "Payment Processing", "Security", "Subscriptions", "REST API"],
      highlights: ["Secure payments", "Subscription support", "Scalable architecture"],
      gradient: "from-orange-500 via-red-600 to-pink-600",
      bgGradient: "from-orange-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse opacity-20`}
            style={{
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              background: `linear-gradient(45deg, ${i % 4 === 0 ? '#3B82F6' : i % 4 === 1 ? '#8B5CF6' : i % 4 === 2 ? '#06B6D4' : '#EC4899'}, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl">
                  <Code2 className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 animate-pulse" />
              </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of <span className="text-blue-400 font-semibold">AI-powered solutions</span> and{' '}
              <span className="text-purple-400 font-semibold">intelligent systems</span> I've developed
            </p>
          </div>

          {/* Featured Projects (First Two) */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.slice(0, 2).map((project, index) => (
              <Card 
                key={project.title}
                className={`group bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden relative`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>

                {/* Animated background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0 shadow-xl`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-300 leading-relaxed text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center text-lg">
                      <Sparkles className="w-5 h-5 mr-3 text-blue-400" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.highlights.map((highlight) => (
                        <Badge 
                          key={highlight} 
                          className="bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300 px-3 py-1 text-sm"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-white mb-4 flex items-center text-lg">
                      <Code2 className="w-5 h-5 mr-3 text-purple-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          className="bg-slate-800/50 text-gray-300 border border-slate-600 hover:bg-slate-700 hover:text-white transition-all duration-300 text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      size="lg" 
                      className={`group bg-gradient-to-r ${project.gradient} hover:shadow-2xl text-white flex items-center space-x-3 transition-all duration-500 hover:scale-105 px-6 py-3 font-semibold`}
                    >
                      <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                      <span>View Code</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/30 text-gray-300 hover:bg-white/10 hover:text-white flex items-center space-x-3 transition-all duration-300 px-6 py-3 font-semibold"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
            {projects.slice(2).map((project, index) => (
              <Card 
                key={project.title}
                className={`group bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 overflow-hidden relative h-full`}
                onMouseEnter={() => setHoveredProject(index + 2)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="text-center mb-4">
                    <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 inline-block shadow-xl mb-4`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10 text-center">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description.split('.')[0]}...
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        className="bg-slate-800/50 text-gray-300 border border-slate-600 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 pt-4 justify-center">
                    <Button 
                      size="sm" 
                      className={`bg-gradient-to-r ${project.gradient} text-white transition-all duration-300 hover:scale-105`}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-white/30 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-slate-900/80 via-purple-900/30 to-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
              <CardContent className="py-16 relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl animate-pulse">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
                  </div>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to Build Something{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Amazing?
                  </span>
                </h3>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Whether you're a <span className="text-blue-400 font-semibold">startup founder</span> or a{' '}
                  <span className="text-purple-400 font-semibold">company</span> looking to enhance your systems, 
                  I'm always open to building, collaborating, and creating something meaningful.
                </p>
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl font-bold transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-blue-500/30 relative overflow-hidden"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center">
                    Let's Collaborate
                    <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
                  </span>
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
