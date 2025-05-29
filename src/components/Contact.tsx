
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle, User, Briefcase } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For project inquiries and collaborations",
      action: "Send Email",
      href: "mailto:contact@example.com",
      color: "blue"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      action: "Connect",
      href: "https://linkedin.com",
      color: "blue"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code repositories",
      action: "View Profile",
      href: "https://github.com",
      color: "gray"
    }
  ];

  const collaborationTypes = [
    {
      icon: User,
      title: "Startup Founders",
      description: "Building MVPs and scaling AI-powered products"
    },
    {
      icon: Briefcase,
      title: "Companies",
      description: "Enhancing systems with intelligent automation"
    },
    {
      icon: MessageCircle,
      title: "Innovators",
      description: "Collaborating on meaningful technology solutions"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking to build something new, enhance existing systems, 
              or just want to discuss innovative ideas, I'm always open to meaningful conversations.
            </p>
          </div>

          {/* Who I Work With */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
              Who I Collaborate With
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {collaborationTypes.map((type, index) => (
                <Card 
                  key={type.title}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 sm:pt-8 p-4 sm:p-6">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="p-3 sm:p-4 bg-blue-100 rounded-full">
                        <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className={`p-3 sm:p-4 rounded-full ${
                      method.color === 'blue' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <method.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                        method.color === 'blue' ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {method.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 text-sm sm:text-base"
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
          <Card className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white border-none">
            <CardContent className="py-12 sm:py-16 text-center p-4 sm:p-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Build the Future Together?
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about creating solutions that make a real difference. 
                Let's discuss how we can bring your vision to life with cutting-edge AI and intelligent systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  <a href="mailto:contact@example.com">
                    <Mail className="mr-2" size={18} />
                    Start a Conversation
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                  className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 bg-transparent px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={18} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-200">
        <div className="text-center text-gray-600 px-4">
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">
            © 2024 AI/ML Developer Portfolio. Built with passion for innovation.
          </p>
          <p className="text-xs sm:text-sm">
            Bridging the gap between intelligent systems and meaningful solutions.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
