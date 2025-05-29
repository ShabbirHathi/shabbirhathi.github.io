
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle, User, Briefcase, Send, Star } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For project inquiries and collaborations",
      action: "Send Email",
      href: "mailto:contact@example.com",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      href: "https://linkedin.com",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code repositories",
      action: "View Profile",
      href: "https://github.com",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const collaborationTypes = [
    {
      icon: User,
      title: "Startup Founders",
      description: "Building MVPs and scaling AI-powered products",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Companies",
      description: "Enhancing systems with intelligent automation",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: MessageCircle,
      title: "Innovators",
      description: "Collaborating on meaningful technology solutions",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${20 + (i * 18)}%`,
              top: `${15 + (i * 15)}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Send className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to build something new, enhance existing systems, 
              or just want to discuss innovative ideas, I'm always open to meaningful conversations.
            </p>
          </div>

          {/* Who I Work With */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">
              Who I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Collaborate</span> With
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collaborationTypes.map((type, index) => (
                <Card 
                  key={type.title}
                  className="text-center bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="pt-8 p-6">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 bg-gradient-to-r ${type.gradient} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                        <type.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {type.title}
                    </h4>
                    <p className="text-gray-400">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center pb-4 p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-r ${method.gradient} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-6 pt-0">
                  <p className="text-gray-400 mb-6">
                    {method.description}
                  </p>
                  <Button 
                    asChild
                    className={`w-full bg-gradient-to-r ${method.gradient} hover:scale-105 text-white transition-all duration-300`}
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
          <Card className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 border-slate-700 backdrop-blur-sm shadow-2xl">
            <CardContent className="py-16 text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build the Future Together?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about creating solutions that make a real difference. 
                Let's discuss how we can bring your vision to life with cutting-edge AI and intelligent systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
                >
                  <a href="mailto:contact@example.com">
                    <Mail className="mr-2" size={20} />
                    Start a Conversation
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 bg-white/10 backdrop-blur-sm px-8 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
        <div className="text-center text-gray-400 px-4">
          <p className="mb-4">
            © 2024 AI/ML Developer Portfolio. Built with passion for innovation.
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
