
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle, User, Briefcase, Send, Star, Phone, Calendar } from "lucide-react";
import { designSystem } from "@/lib/design-system";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For project inquiries and collaborations",
      action: "Send Email",
      href: "mailto:shabbirhathi4@gmail.com",
      gradient: designSystem.colors.gradients.primary
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      description: "Call or message me directly",
      action: "Contact",
      href: "https://wa.me/919157725351",
      gradient: designSystem.colors.gradients.accent
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      href: "https://www.linkedin.com/in/hathi-shabbir-a75509161/",
      gradient: designSystem.colors.gradients.secondary
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code repositories",
      action: "View Profile",
      href: "https://github.com/ShabbirHathi",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const collaborationTypes = [
    {
      icon: User,
      title: "Startup Founders",
      description: "Building MVPs and scaling AI-powered products",
      gradient: designSystem.colors.gradients.accent
    },
    {
      icon: Briefcase,
      title: "Companies",
      description: "Enhancing systems with intelligent automation",
      gradient: designSystem.colors.gradients.warning
    },
    {
      icon: MessageCircle,
      title: "Innovators",
      description: "Collaborating on meaningful technology solutions",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="contact" className={`${designSystem.spacing.section} bg-slate-800 relative overflow-hidden`}>
      {/* Optimized Background Elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-20 ${designSystem.animations.reduced}`}
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${15 + (i * 20)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              willChange: 'opacity'
            }}
          />
        ))}
      </div>

      <div className={`container mx-auto ${designSystem.spacing.container} relative z-10`}>
        <div className="max-w-6xl mx-auto">
          {/* Consistent Section Header */}
          <div className={designSystem.components.sectionHeader}>
            <div className={`flex justify-center mb-6`}>
              <div className={`${designSystem.components.iconContainer} bg-gradient-to-r ${designSystem.colors.gradients.primary}`}>
                <Send className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className={`${designSystem.typography.headings.h2} text-white mb-6`}>
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className={`${designSystem.typography.body.large} text-gray-300 max-w-3xl mx-auto`}>
              Whether you're looking to build something new, enhance existing systems, 
              or just want to discuss innovative ideas, I'm always open to meaningful conversations.
            </p>
          </div>

          {/* Who I Work With */}
          <div className="mb-16">
            <h3 className={`${designSystem.typography.headings.h3} text-white text-center mb-8`}>
              Who I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Collaborate</span> With
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborationTypes.map((type, index) => (
                <Card 
                  key={type.title}
                  className={`text-center bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 ${designSystem.animations.hover} group ${designSystem.components.card}`}
                >
                  <CardContent className={designSystem.components.cardPadding}>
                    <div className="flex justify-center mb-4">
                      <div className={`${designSystem.components.iconContainer} bg-gradient-to-r ${type.gradient} group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className={`${designSystem.typography.headings.h4} text-white mb-2 group-hover:text-blue-300 transition-colors`}>
                      {type.title}
                    </h4>
                    <p className={`${designSystem.typography.body.normal} text-gray-400`}>
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className={`bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 ${designSystem.animations.hover} group ${designSystem.components.card}`}
              >
                <CardHeader className="text-center pb-4 p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`${designSystem.components.iconContainer} bg-gradient-to-r ${method.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className={`${designSystem.typography.headings.h4} text-white group-hover:text-blue-300 transition-colors`}>
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6 pt-0">
                  <p className={`${designSystem.typography.body.normal} text-gray-400 mb-6`}>
                    {method.description}
                  </p>
                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${method.gradient} ${designSystem.animations.hover} text-white ${designSystem.components.button}`}
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className={`bg-gradient-to-r from-slate-900/90 to-slate-800/90 border-slate-700 backdrop-blur-sm shadow-2xl ${designSystem.components.card}`}>
            <CardContent className="py-16 text-center p-8">
              <div className="flex justify-center mb-6">
                <div className={`${designSystem.components.iconContainer} bg-gradient-to-r ${designSystem.colors.gradients.primary}`}>
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className={`${designSystem.typography.headings.h2} text-white mb-6`}>
                Ready to Build the Future Together?
              </h3>
              <p className={`${designSystem.typography.body.large} text-gray-300 mb-8 max-w-3xl mx-auto`}>
                I'm passionate about creating solutions that make a real difference. 
                Let's discuss how we can bring your vision to life with cutting-edge AI and intelligent systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className={`bg-gradient-to-r ${designSystem.colors.gradients.primary} ${designSystem.colors.gradients.primaryHover} text-white ${designSystem.components.button} font-bold ${designSystem.animations.hover}`}
                >
                  <a href="mailto:shabbirhathi4@gmail.com">
                    <Mail className="mr-2" size={20} />
                    Start a Conversation
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  asChild
                  className={`bg-gradient-to-r ${designSystem.colors.gradients.accent} hover:from-emerald-700 hover:to-emerald-800 text-white ${designSystem.components.button} font-bold ${designSystem.animations.hover}`}
                >
                  <a href="https://calendly.com/shabbirhathi4/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2" size={20} />
                    Schedule Meeting
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className={`border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-white/10 backdrop-blur-sm ${designSystem.components.button} font-bold ${designSystem.animations.hover}`}
                >
                  <a href="https://www.linkedin.com/in/hathi-shabbir-a75509161/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={20} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-700">
        <div className={`text-center text-gray-400 ${designSystem.spacing.container}`}>
          <p className="mb-4">
            © 2025 AI/ML Developer Portfolio. Built with passion for innovation.
          </p>
          <p className="text-sm">
            Bridging the gap between intelligent systems and meaningful solutions.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
