
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Calendar, Heart, Bus, FileText, CreditCard, Sparkles, Code2, Rocket, Star } from "lucide-react";
import { memo } from "react";
import { designSystem } from "@/lib/design-system";

// Memoized project card component for better performance
const ProjectCard = memo(({ project, index }: { project: any; index: number }) => (
  <Card 
    className={`${designSystem.colors.backgrounds.darkCard} backdrop-blur-md border-slate-700/50 hover:bg-slate-800/80 ${designSystem.animations.hover} group overflow-hidden relative ${designSystem.components.card}`}
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    {/* Gradient border effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <CardHeader className="pb-4 relative z-10">
      <div className="flex items-start space-x-4">
        <div className={`${designSystem.components.iconContainer} bg-gradient-to-r ${project.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0 relative`}>
          <project.icon className="w-6 h-6 text-white relative z-10" />
          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex-1">
          <CardTitle className={`${designSystem.typography.headings.h4} text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight`}>
            {project.title}
          </CardTitle>
          <div className={`w-12 h-0.5 bg-gradient-to-r ${designSystem.colors.gradients.primary} rounded-full group-hover:w-20 transition-all duration-500`} />
        </div>
      </div>
      <p className={`${designSystem.typography.body.small} text-gray-300 leading-relaxed mt-4 group-hover:text-gray-200 transition-colors duration-300`}>
        {project.description}
      </p>
    </CardHeader>
    
    <CardContent className="space-y-4 relative z-10">
      {/* Key Highlights */}
      <div>
        <h4 className="font-semibold text-white mb-3 flex items-center">
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
          Key Features
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight: string, highlightIndex: number) => (
            <Badge 
              key={highlight} 
              className={`bg-slate-700/80 backdrop-blur-sm text-gray-300 border border-slate-600/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white hover:border-blue-400/50 ${designSystem.animations.hover}`}
              style={{ animationDelay: `${(index * 0.15) + (highlightIndex * 0.05)}s` }}
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
          {project.tags.map((tag: string, tagIndex: number) => (
            <Badge 
              key={tag} 
              className={`bg-slate-900/80 backdrop-blur-sm text-gray-300 border border-slate-600/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 hover:text-white hover:border-purple-400/50 ${designSystem.animations.hover}`}
              style={{ animationDelay: `${(index * 0.15) + (tagIndex * 0.03)}s` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 pt-4">
        <Button 
          size="sm" 
          className={`bg-gradient-to-r ${designSystem.colors.gradients.primary} hover:from-blue-700 hover:to-purple-700 text-white flex items-center space-x-2 ${designSystem.animations.hover} hover:shadow-lg hover:shadow-blue-500/25`}
        >
          <Github size={16} />
          <span>View Code</span>
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          className="border-slate-600/50 text-gray-300 hover:bg-slate-700/50 hover:text-white hover:border-white/50 flex items-center space-x-2 transition-all duration-300 backdrop-blur-sm"
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </Button>
      </div>
    </CardContent>
  </Card>
));

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Learning Management System",
      description: "Comprehensive LMS allowing admins to upload learning materials and auto-generate MCQ exams using OpenAI APIs. Features document upload, multilingual support, performance tracking, and automated certificate generation.",
      icon: Brain,
      tags: ["OpenAI API", "Django", "PostgreSQL", "MCQ Generation", "Multilingual"],
      highlights: ["Auto-generated exams", "Performance analytics", "Certificate system"],
      gradient: designSystem.colors.gradients.primary
    },
    {
      title: "Smart Event Planning Agent",
      description: "Intelligent AI assistant with comprehensive event planning features including multilingual support, automated checklist generation, event discovery, budget optimization, and integrated booking system.",
      icon: Calendar,
      tags: ["AI Agent", "Multilingual", "Budget Planning", "Event Discovery", "Booking System"],
      highlights: ["AI-powered planning", "Smart budgeting", "Automated workflows"],
      gradient: designSystem.colors.gradients.secondary
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
      gradient: designSystem.colors.gradients.accent
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
      gradient: designSystem.colors.gradients.warning
    }
  ];

  return (
    <section id="projects" className={`${designSystem.spacing.section} bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden`}>
      {/* Optimized floating elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-pulse opacity-60 ${designSystem.animations.reduced}`}
            style={{
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#3B82F6' : '#8B5CF6'}, ${i % 2 === 0 ? '#8B5CF6' : '#3B82F6'})`,
              left: `${15 + (i * 20)}%`,
              top: `${10 + (i * 15)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
              willChange: 'opacity'
            }}
          />
        ))}
      </div>

      <div className={`container mx-auto ${designSystem.spacing.container} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          {/* Consistent Section Header */}
          <div className={designSystem.components.sectionHeader}>
            <div className={`inline-flex items-center justify-center ${designSystem.components.iconContainer} bg-gradient-to-r ${designSystem.colors.gradients.primary} mb-8 ${designSystem.animations.hover}`}>
              <Rocket className="w-8 h-8 text-white mr-2" />
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h2 className={`${designSystem.typography.headings.h2} text-white mb-6 tracking-tight`}>
              Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6`} />
            <p className={`${designSystem.typography.body.large} text-gray-300 max-w-3xl mx-auto`}>
              A showcase of AI-powered solutions and intelligent systems that demonstrate innovation and technical excellence
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <Card className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 backdrop-blur-md shadow-2xl relative overflow-hidden ${designSystem.components.card}`}>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${designSystem.colors.gradients.primary}`} />
              
              <CardContent className="py-16 relative z-10">
                <div className={`inline-flex items-center justify-center ${designSystem.components.iconContainer} bg-gradient-to-r ${designSystem.colors.gradients.primary} mb-8`}>
                  <Sparkles className="w-8 h-8 text-white mr-2" />
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className={`${designSystem.typography.headings.h2} text-white mb-6 tracking-tight`}>
                  Ready to Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Amazing?</span>
                </h3>
                <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-8`} />
                <p className={`${designSystem.typography.body.large} text-gray-300 mb-12 max-w-2xl mx-auto`}>
                  Whether you're a startup founder or a company looking to enhance your systems, 
                  I'm always open to building, collaborating, and creating something meaningful together.
                </p>
                <Button 
                  size="lg" 
                  className={`bg-gradient-to-r ${designSystem.colors.gradients.primary} ${designSystem.colors.gradients.primaryHover} text-white ${designSystem.components.button} hover:shadow-xl hover:shadow-blue-500/25 group`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  Let's Collaborate
                  <Sparkles className="ml-3 group-hover:scale-125 transition-transform duration-300" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
