
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Calendar, Heart, Bus, FileText, CreditCard, Sparkles, Code2, Rocket, Star, Database, BotMessageSquare, TrendingUp, MessageSquare, Shield, Globe } from "lucide-react";
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

    </CardContent>
  </Card>
));

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const companies = [
    {
      name: "Differenze System",
      duration: "1 year 9 months",
      projects: [
        {
          title: "AI-based Dog Breed Identifier",
          description: "Developed comprehensive AI-powered dog breed identification system using Django REST Framework and advanced computer vision. Combines YOLO object detection with custom-trained ML models to identify breeds from images/videos with 95%+ accuracy across 170+ breeds. Served 10K+ users with 4.6-star rating.",
          icon: Brain,
          tags: ["Django REST", "YOLO", "TensorFlow", "Computer Vision", "OpenCV", "ML Training"],
          highlights: ["95%+ accuracy", "170+ breeds", "10K+ downloads", "4.6★ rating", "Two-stage AI system"],
          gradient: designSystem.colors.gradients.primary,
          link: "" // Will be added later
        },
        {
          title: "ESPN Basketball Data Scraping",
          description: "Built automated web scraping system for ESPN basketball data collection, combining API integration and web scraping for NBA and NCAA statistics. Implemented MySQL database storage with automated scheduling via cron jobs and CSV backup functionality for data redundancy.",
          icon: Code2,
          tags: ["Python", "BeautifulSoup", "Selenium", "MySQL", "Cron Jobs", "API Integration"],
          highlights: ["Hybrid API + scraping", "Automated scheduling", "NBA & NCAA data", "CSV backups"],
          gradient: designSystem.colors.gradients.secondary
        },
        {
          title: "Recommendation System",
          description: "Developed comprehensive product recommendation APIs using Django REST Framework. Built data cleaning pipeline with Pandas/NumPy and implemented multiple recommendation algorithms: cosine similarity for user-based and item-based filtering, plus Apriori algorithm for association rule mining.",
          icon: Sparkles,
          tags: ["Django REST", "Pandas", "NumPy", "Scikit-learn", "Cosine Similarity", "Apriori Algorithm"],
          highlights: ["Multi-algorithm approach", "Data preprocessing", "User & item-based recommendations", "Association rules"],
          gradient: "from-emerald-500 to-emerald-600"
        },
        {
          title: "Textile Pattern GenAI Platform",
          description: "Built GenAI platform using fine-tuned Stable Diffusion for textile pattern generation (floral, abstract, seamless). Implemented PSD-layered outputs for color editing, magic prompt feature, negative prompts, and try-on preview pipeline for garments like sarees. Includes color adjustment APIs.",
          icon: Sparkles,
          tags: ["Django", "Stable Diffusion", "PyTorch", "PSD Layers", "Celery", "Redis", "Computer Vision"],
          highlights: ["Fine-tuned SD model", "PSD export", "Try-on previews", "Magic prompts", "Color variations"],
          gradient: "from-pink-500 to-rose-600"
        }
      ]
    },
    {
      name: "iRoid Solution",
      duration: "1+ years",
      projects: [
        {
          title: "AI Knowledge Assistant",
          description: "Production-grade Flask backend with RAG using Qdrant, LangChain, and multi-provider LLM routing (OpenAI, Mistral, Cohere, AWS Bedrock). Built modular ingestion for PDFs, PPTX, Excel, URLs, and Notion with WebSocket streaming, Celery workers, and Redis caching. Reduced chat latency by 35% and token costs by 22%.",
          icon: Database,
          tags: ["Flask", "LangChain", "Qdrant", "Socket.IO", "Celery", "Redis", "MySQL", "RAG"],
          highlights: ["Multi-provider LLM", "WebSocket streaming", "35% faster", "Citation & highlighting", "Provider failover"],
          gradient: "from-indigo-500 to-purple-600"
        },
        {
          title: "Wenue AI Event Planning Agent (Eva)",
          description: "Built LangChain-powered AI agent for end-to-end event planning with real-time chat via Flask-SocketIO. Integrated 10 agent tools including venue/service discovery, budgeting, timelines, seating, marketing, analytics, and weather forecasting. Delivered Streamlit UI and RESTful message pagination with SQLAlchemy persistence.",
          icon: BotMessageSquare,
          tags: ["Flask", "LangChain", "Socket.IO", "OpenAI GPT-4.1", "Streamlit", "SQLAlchemy", "ChromaDB"],
          highlights: ["10 agent tools", "Real-time chat", "Multi-platform integration", "Weather forecasting", "Cultural awareness"],
          gradient: designSystem.colors.gradients.secondary
        },
        {
          title: "Vector Database API",
          description: "Docker-ready Flask service managing vector embeddings and contextual retrieval. Supports multi-provider embeddings (OpenAI, Cohere, Mistral, AWS) via LangChain with Chroma persistence and optional secured Qdrant behind Nginx. Features contextual compression retriever with <200ms p95 latency and 1M+ chunks per deployment.",
          icon: Database,
          tags: ["Flask", "LangChain", "ChromaDB", "Qdrant", "Docker", "Nginx", "RAG"],
          highlights: ["<200ms p95 latency", "Multi-provider support", "Contextual compression", "Dockerized deployment", "1M+ chunks"],
          gradient: "from-violet-500 to-indigo-600"
        },
        {
          title: "Impact Analysis (LMS ➜ Business KPIs)",
          description: "Built ML service connecting LMS KPIs to business outcomes with configurable time-delay alignment. Implemented end-to-end pipeline: merge, time-shift, clean (IQR outliers), encode, normalize, and evaluate 6 regression families via 5-fold CV. Returns leaderboard metrics, explainability (coefficients/importances), and chart-ready JSON.",
          icon: TrendingUp,
          tags: ["Flask", "Scikit-learn", "Pandas", "NumPy", "Regression", "Swagger/OpenAPI"],
          highlights: ["6 regression models", "5-fold CV", "60% faster analysis", "Time-shift alignment", "Explainability output"],
          gradient: "from-blue-600 to-cyan-600"
        }
      ]
    }
  ];

  const otherProjects = [
    {
      title: "SupportJoy AI Chatbot SaaS",
      description: "Complete AI chatbot SaaS platform with RAG implementation, Stripe payments, and magic link authentication. Built user dashboard with data ingestion from URLs and files (PDF, TXT, DOC, PPT), embeddable widget for customer websites, and comprehensive chat history with appearance customization and token tracking.",
      icon: MessageSquare,
      tags: ["Django", "Bootstrap", "Stripe", "RAG", "Web Scraping", "Embeddings", "SaaS"],
      highlights: ["RAG system", "Embeddable widget", "Magic link auth", "Multi-format upload", "Token tracking"],
      gradient: "from-green-500 to-emerald-600",
      link: "https://supportjoy.ai/"
    },
    {
      title: "PriveGuard Anti-Piracy SaaS",
      description: "Comprehensive SaaS platform for digital creators to protect products from piracy. Built dual-application architecture with Django user dashboard and Streamlit+Flask admin tools. Integrated Stripe payments, SerpAPI for automated piracy detection, domain whitelisting, and monthly analytics reporting.",
      icon: Shield,
      tags: ["Django", "Streamlit", "Flask", "Stripe", "SerpAPI", "Jinja2", "SaaS"],
      highlights: ["Automated detection", "Dual architecture", "Domain whitelist", "Monthly reports", "Piracy tracking"],
      gradient: "from-red-500 to-orange-600",
      link: "https://priveguard.com/"
    },
    {
      title: "Informative Product Websites",
      description: "Developed 3+ product showcase websites with standardized architecture using React and Django. Built reusable components, responsive designs optimized for mobile/desktop, product galleries, and contact forms. Projects include hardware products, water purifier systems, and Coach Moi.",
      icon: Globe,
      tags: ["React", "Django", "Bootstrap", "SQLite", "Responsive Design"],
      highlights: ["3+ websites", "Reusable components", "Product catalogs", "Contact forms", "Mobile optimized"],
      gradient: "from-violet-500 to-purple-600"
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

          {/* Companies and Projects */}
          <div className="space-y-16 mb-20">
            {companies.map((company, companyIndex) => (
              <div key={company.name} className="space-y-8">
                {/* Company Header */}
                <div className="text-center mb-12">
                  <h3 className={`${designSystem.typography.headings.h3} text-white mb-2`}>
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-400 italic">
                    Worked here • {company.duration}
                  </p>
                  <div className={`w-16 h-0.5 bg-gradient-to-r ${designSystem.colors.gradients.primary} rounded-full mx-auto mt-4`} />
                </div>

                {/* Projects Grid for this company */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {company.projects.map((project, projectIndex) => (
                    <ProjectCard 
                      key={project.title} 
                      project={project} 
                      index={companyIndex * 10 + projectIndex} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Section */}
          <div className="space-y-8 mb-20">
            <div className="text-center mb-12">
              <h3 className={`${designSystem.typography.headings.h3} text-white mb-2`}>
                Other Projects
              </h3>
              <p className="text-sm text-gray-400 italic">
                Personal & Independent Work
              </p>
              <div className={`w-16 h-0.5 bg-gradient-to-r ${designSystem.colors.gradients.primary} rounded-full mx-auto mt-4`} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={100 + index} 
                />
              ))}
            </div>
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
